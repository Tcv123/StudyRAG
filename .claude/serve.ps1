# Minimal static file server for local previews.
# Usage: powershell -ExecutionPolicy Bypass -File .claude/serve.ps1 -Port 8000
param(
  [int]$Port = 8000,
  [string]$Root = (Get-Location).Path
)

$prefix = "http://localhost:$Port/"
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add($prefix)
try { $listener.Start() } catch { Write-Error "Failed to bind $prefix : $_"; exit 1 }
Write-Output "Serving $Root at $prefix (Ctrl+C to stop)"

$mime = @{
  '.html'='text/html; charset=utf-8'
  '.htm' ='text/html; charset=utf-8'
  '.js'  ='application/javascript; charset=utf-8'
  '.css' ='text/css; charset=utf-8'
  '.json'='application/json; charset=utf-8'
  '.svg' ='image/svg+xml'
  '.png' ='image/png'
  '.jpg' ='image/jpeg'
  '.jpeg'='image/jpeg'
  '.gif' ='image/gif'
  '.ico' ='image/x-icon'
  '.woff'='font/woff'
  '.woff2'='font/woff2'
  '.pdf' ='application/pdf'
  '.txt' ='text/plain; charset=utf-8'
  '.map' ='application/json; charset=utf-8'
}

while ($listener.IsListening) {
  try {
    $ctx = $listener.GetContext()
  } catch { break }
  $req = $ctx.Request
  $res = $ctx.Response
  try {
    $rel = [System.Uri]::UnescapeDataString($req.Url.AbsolutePath).TrimStart('/').Replace('/', [System.IO.Path]::DirectorySeparatorChar)
    if ([string]::IsNullOrEmpty($rel)) { $rel = 'index.html' }
    $full = Join-Path $Root $rel

    # Vercel cleanUrls compat: /foo -> /foo.html if the .html exists.
    if (-not (Test-Path $full -PathType Leaf)) {
      if (Test-Path "$full.html" -PathType Leaf) { $full = "$full.html" }
      elseif ((Test-Path $full -PathType Container) -and (Test-Path (Join-Path $full 'index.html') -PathType Leaf)) {
        $full = Join-Path $full 'index.html'
      }
    }

    if (Test-Path $full -PathType Leaf) {
      $ext = [System.IO.Path]::GetExtension($full).ToLower()
      $ct = $mime[$ext]; if (-not $ct) { $ct = 'application/octet-stream' }
      $bytes = [System.IO.File]::ReadAllBytes($full)
      $res.ContentType = $ct
      $res.ContentLength64 = $bytes.Length
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
      Write-Output ("200 {0} -> {1}" -f $req.Url.AbsolutePath, $full)
    } else {
      $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $rel")
      $res.StatusCode = 404
      $res.ContentType = 'text/plain; charset=utf-8'
      $res.OutputStream.Write($msg, 0, $msg.Length)
      Write-Output ("404 {0}" -f $req.Url.AbsolutePath)
    }
  } catch {
    Write-Output "ERR $($_.Exception.Message)"
    try { $res.StatusCode = 500 } catch {}
  } finally {
    try { $res.OutputStream.Close() } catch {}
  }
}
