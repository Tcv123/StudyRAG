/*
 * OCR A-Level Computer Science — Written / Short-Answer Question Bank
 * 10 questions per topic: 4 green + 4 amber + 2 red
 * tier: 'green' (state/identify 2-3 marks), 'amber' (explain/describe 4-5 marks), 'red' (evaluate/discuss 6-8 marks)
 * Student self-marks against model answer: Full / Partial / Missed
 */

const CS_OCR_WRITTEN = {

  '1.1': {
    green: [
      {
        q: 'State two factors that affect CPU performance.',
        marks: 2, tier: 'green',
        modelAnswer: `• Clock speed — determines how many cycles (instructions) the CPU can execute per second.\n• Number of cores — more cores allow more threads to be processed simultaneously.`
      },
      {
        q: 'State the purpose of the Program Counter (PC) and what happens to it during the fetch stage.',
        marks: 2, tier: 'green',
        modelAnswer: `The PC holds the memory address of the next instruction to be fetched. During the fetch stage the address in the PC is copied to the MAR, then the PC is incremented by 1 to point to the next instruction.`
      },
      {
        q: 'Identify three registers used in the CPU and state the purpose of each.',
        marks: 3, tier: 'green',
        modelAnswer: `• Program Counter (PC) — holds the address of the next instruction to be fetched.\n• Memory Address Register (MAR) — holds the address of the memory location to be read from or written to.\n• Memory Data Register (MDR) — temporarily holds the data read from or to be written to memory.\n(Also accept: CIR — holds the current instruction being decoded/executed; ACC — stores results from ALU calculations.)`
      },
      {
        q: 'State what is meant by the Von Neumann bottleneck.',
        marks: 2, tier: 'green',
        modelAnswer: `In Von Neumann architecture, instructions and data share the same bus and memory. This means only one can be fetched at a time, creating a bottleneck that limits the speed at which the CPU can process information.`
      },
    ],
    amber: [
      {
        q: 'Describe the stages of the fetch-decode-execute cycle.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Fetch: The address in the PC is copied to the MAR. The instruction at that memory address is fetched via the data bus into the MDR, then copied into the CIR. The PC is incremented.\n• Decode: The Control Unit interprets the opcode of the instruction in the CIR, determining what operation is required and what data is needed.\n• Execute: The ALU carries out the decoded instruction — this may involve a calculation, data transfer, or a branch (changing the PC).`
      },
      {
        q: 'Explain how cache memory improves CPU performance. Include the difference between L1 and L2 cache in your answer.',
        marks: 4, tier: 'amber',
        modelAnswer: `Cache is a small amount of very fast memory inside or close to the CPU that stores frequently/recently used data and instructions. The CPU checks the cache before accessing slower RAM, reducing average memory access time.\n• L1 cache is smallest and fastest, located on the CPU die itself — typically a few KB per core.\n• L2 cache is larger but slightly slower, may be shared between cores.\nMore cache means more data can be accessed quickly, reducing the number of slower RAM accesses.`
      },
      {
        q: 'Explain how pipelining improves CPU performance. State one problem it can cause.',
        marks: 4, tier: 'amber',
        modelAnswer: `Pipelining overlaps the stages of the fetch-decode-execute cycle so that while one instruction is being executed, the next is being decoded and the one after that is being fetched — all simultaneously.\nThis increases throughput (instructions completed per second) without increasing clock speed.\nProblem: A branch instruction can invalidate the pipeline — if the CPU has already fetched the next instructions but the branch changes the PC, those fetched instructions must be discarded (pipeline flush), wasting cycles.`
      },
      {
        q: 'Compare Von Neumann and Harvard architectures. State one advantage of Harvard architecture.',
        marks: 4, tier: 'amber',
        modelAnswer: `Von Neumann: uses a single shared memory and bus for both instructions and data. Simpler and cheaper to implement but limited by the shared bus.\nHarvard: uses separate memory stores and separate buses for instructions and data.\nAdvantage of Harvard: instructions and data can be fetched simultaneously, eliminating the Von Neumann bottleneck and improving throughput. Commonly used in embedded systems and DSPs (Digital Signal Processors).`
      },
    ],
    red: [
      {
        q: 'A student claims that doubling the clock speed will always double CPU performance. Evaluate this claim with reference to at least three other factors that affect performance.',
        marks: 6, tier: 'red',
        modelAnswer: `The claim is not correct. While a higher clock speed increases cycles per second, real-world performance depends on multiple factors:\n• Memory bottleneck: the bus may not supply data fast enough — the CPU stalls waiting for RAM (Von Neumann bottleneck).\n• Heat and throttling: higher clock speeds generate more heat, which may force the CPU to reduce its speed (thermal throttling), negating the increase.\n• Number of cores: a single-threaded program cannot benefit from multiple cores regardless of clock speed; conversely, multicore workloads may benefit more from additional cores than higher frequency.\n• Cache: insufficient cache means frequent slow RAM accesses regardless of clock speed.\n• Software optimisation: poorly optimised code may not scale linearly with clock speed.\nTherefore doubling clock speed rarely doubles actual performance — improvements are diminished by other bottlenecks.`
      },
      {
        q: 'A manufacturer wants to improve CPU performance without increasing clock speed. Discuss three approaches they could take, evaluating the effectiveness of each.',
        marks: 8, tier: 'red',
        modelAnswer: `1. Add more cores: allows multiple threads to run simultaneously, significantly improving performance for multithreaded workloads (e.g. video rendering). However, single-threaded applications see no benefit, and writing efficient multithreaded software is complex.\n2. Increase cache size: reduces the frequency of slow RAM accesses, particularly effective for data-intensive tasks. Diminishing returns above a certain size; larger caches are more expensive and take more die space.\n3. Implement/improve pipelining: overlapping FDE stages improves instruction throughput. Very effective for sequential code, but branch instructions can cause pipeline flushes, reducing gains. Branch prediction can mitigate this but adds complexity.\n(Also valid: wider data bus, hardware-level branch prediction, out-of-order execution.)\nConclusion: a combination of approaches is most effective, as each addresses a different bottleneck.`
      },
    ],
  },

  '1.2': {
    green: [
      {
        q: 'State two differences between RAM and ROM.',
        marks: 2, tier: 'green',
        modelAnswer: `• RAM is volatile (data lost when power is removed); ROM is non-volatile (data retained without power).\n• RAM is read and write; ROM is read-only (or difficult to write to).\n(Also accept: RAM stores currently running programs/data; ROM stores boot instructions/BIOS.)`
      },
      {
        q: 'State what is meant by the term "volatile" in the context of memory.',
        marks: 1, tier: 'green',
        modelAnswer: `Volatile means the memory loses its contents when the power supply is turned off.`
      },
      {
        q: 'State two advantages of solid state drives (SSDs) over hard disk drives (HDDs).',
        marks: 2, tier: 'green',
        modelAnswer: `• SSDs are significantly faster — no moving parts means near-instant access times.\n• SSDs are more durable — no moving parts makes them resistant to physical shock and vibration.`
      },
      {
        q: 'State what is meant by bit depth in the context of representing a digital image.',
        marks: 2, tier: 'green',
        modelAnswer: `Bit depth (colour depth) is the number of bits used to represent the colour of each pixel in an image. A higher bit depth means more possible colours — e.g. 24-bit colour depth allows 2²⁴ ≈ 16.7 million different colours per pixel.`
      },
    ],
    amber: [
      {
        q: 'An image is 800 × 600 pixels with a 24-bit colour depth. Calculate the uncompressed file size in MB. Show your working.',
        marks: 4, tier: 'amber',
        modelAnswer: `800 × 600 = 480,000 pixels\n480,000 × 24 = 11,520,000 bits\n÷ 8 = 1,440,000 bytes\n÷ 1,024 = 1,406.25 KB\n÷ 1,024 ≈ 1.37 MB`
      },
      {
        q: 'Explain the difference between lossy and lossless compression. Give one example file format for each.',
        marks: 4, tier: 'amber',
        modelAnswer: `Lossy compression permanently removes some data to reduce file size. The original cannot be perfectly reconstructed. Effective for media where small quality loss is acceptable. Example: JPEG (images), MP3 (audio).\nLossless compression reduces file size without losing any data — the original can be perfectly reconstructed from the compressed file. Example: PNG (images), FLAC (audio), ZIP (general).`
      },
      {
        q: 'A sound clip is sampled at 44,100 Hz with a 16-bit depth in stereo for 3 minutes. Calculate the file size in MB. Show your working.',
        marks: 4, tier: 'amber',
        modelAnswer: `Sample rate × bit depth × channels × duration (seconds)\n= 44,100 × 16 × 2 × 180\n= 254,016,000 bits\n÷ 8 = 31,752,000 bytes\n÷ 1,024 = 31,007.81 KB\n÷ 1,024 ≈ 30.28 MB`
      },
      {
        q: 'Describe the purpose of virtual memory and explain one disadvantage of relying on it heavily.',
        marks: 4, tier: 'amber',
        modelAnswer: `When RAM is full, the OS uses a section of secondary storage (HDD/SSD) as an extension of RAM. Inactive pages are moved to virtual memory (swap space) to free up RAM for active processes.\nDisadvantage: secondary storage is much slower than RAM. Heavy reliance causes "disk thrashing" — the system spends more time swapping pages between RAM and disk than executing processes, severely degrading performance.`
      },
    ],
    red: [
      {
        q: 'A company needs to choose between SSDs and HDDs for its main file server. Evaluate both options, considering speed, cost, capacity, and durability.',
        marks: 6, tier: 'red',
        modelAnswer: `SSDs:\n+ Much faster read/write speeds and near-zero access times — improves server response time significantly.\n+ More durable — no moving parts, resistant to physical shock.\n− More expensive per GB — storing large amounts of data is costlier.\n− Write endurance — flash cells have a limited number of write cycles (though modern enterprise SSDs mitigate this).\n\nHDDs:\n+ Cheaper per GB — better for large-capacity storage on a budget.\n+ Available in very large capacities (up to 20+ TB).\n− Slower due to mechanical components (spinning platters, read head).\n− More fragile — moving parts are vulnerable to shock.\n\nConclusion: for a file server prioritising speed (e.g. database), SSDs are preferred. For bulk archival storage where cost per TB matters, HDDs may be more practical. A hybrid approach (SSD for active data, HDD for archives) is often optimal.`
      },
      {
        q: '"Increasing the sample rate and bit depth of a digital recording always produces a better result." Evaluate this statement.',
        marks: 6, tier: 'red',
        modelAnswer: `Arguments for:\n• Higher sample rate captures more samples per second, better representing high-frequency sounds and reducing aliasing.\n• Greater bit depth captures a wider dynamic range, reducing quantisation errors and producing smoother audio.\n\nArguments against:\n• Beyond a certain point (e.g. 44.1 kHz / 16-bit for human hearing), increases are imperceptible to listeners — diminishing returns.\n• Larger files require more storage space and bandwidth, which may be impractical.\n• The quality of the recording equipment (microphone, sound card) is a limiting factor — high sample rates won't compensate for a poor microphone.\n\nConclusion: increasing sample rate and bit depth improves quality up to a point, but there are diminishing returns beyond human perception limits, and practical constraints (file size, hardware) apply.`
      },
    ],
  },

  '1.3': {
    green: [
      {
        q: 'Give two differences between a LAN and a WAN.',
        marks: 2, tier: 'green',
        modelAnswer: `• A LAN covers a small geographical area (e.g. a building); a WAN spans a large area (e.g. across cities or countries).\n• A LAN is typically owned and maintained by a single organisation; a WAN often uses third-party infrastructure (e.g. ISP networks, leased lines).`
      },
      {
        q: 'State the purpose of a MAC address.',
        marks: 2, tier: 'green',
        modelAnswer: `A MAC (Media Access Control) address is a unique hardware identifier assigned to a network interface card (NIC). It is used to identify devices on a local network and ensures data is delivered to the correct device within a LAN.`
      },
      {
        q: 'Identify two protocols used in the TCP/IP model and state the layer each belongs to.',
        marks: 2, tier: 'green',
        modelAnswer: `• HTTP — Application layer (used for web page requests).\n• TCP — Transport layer (ensures reliable, ordered delivery of data).\n(Also accept: IP — Internet/Network layer; Ethernet — Link/Data Link layer; FTP, SMTP, DNS — Application layer; UDP — Transport layer.)`
      },
      {
        q: 'State what is meant by bandwidth in the context of a network.',
        marks: 2, tier: 'green',
        modelAnswer: `Bandwidth is the maximum amount of data that can be transmitted over a network connection in a given time period, typically measured in bits per second (bps, Mbps, Gbps). Higher bandwidth allows more data to be transferred simultaneously.`
      },
    ],
    amber: [
      {
        q: 'Describe the role of DNS in accessing a website, starting from the user typing a URL.',
        marks: 4, tier: 'amber',
        modelAnswer: `1. The user types a domain name (e.g. www.example.com) into the browser.\n2. The browser sends a DNS query to a DNS server to resolve the domain name into an IP address.\n3. The DNS server looks up its records and returns the corresponding IP address.\n4. The browser uses the IP address to send an HTTP/HTTPS request to the web server hosting the site.\nWithout DNS, users would need to memorise numeric IP addresses to access websites.`
      },
      {
        q: 'Explain the difference between TCP and UDP. Give a suitable use case for each.',
        marks: 4, tier: 'amber',
        modelAnswer: `TCP (Transmission Control Protocol): connection-oriented — establishes a connection before sending data. Guarantees delivery by acknowledging packets and retransmitting lost ones. Data arrives complete and in the correct order.\nUse case: web browsing, file downloads, email — where accuracy and completeness are essential.\n\nUDP (User Datagram Protocol): connectionless — sends data without establishing a connection. Does not guarantee delivery or order. Faster with lower overhead.\nUse case: live video streaming, online gaming, VoIP — where speed matters more than perfect delivery, and retransmitting old data would cause more issues than dropping it.`
      },
      {
        q: 'Compare star and mesh network topologies. State which would be more suitable for a hospital network and justify your answer.',
        marks: 4, tier: 'amber',
        modelAnswer: `Star: all devices connect to a central switch/hub. If one device or cable fails, only that device is affected. However, if the central switch fails, the entire network goes down. Easier to manage and troubleshoot.\n\nMesh: each device has multiple connections to other devices. If one link fails, data can route via an alternative path — very high resilience and redundancy. More expensive due to additional cabling.\n\nFor a hospital: mesh (or partial mesh) is more suitable because network downtime could affect patient monitoring, records access, and potentially patient safety. The additional cost is justified by the critical need for high availability and fault tolerance.`
      },
      {
        q: 'Describe the four layers of the TCP/IP model and state one protocol associated with each.',
        marks: 4, tier: 'amber',
        modelAnswer: `1. Application layer — provides network services directly to the user/application. Protocol: HTTP (web), SMTP (email), FTP (file transfer).\n2. Transport layer — ensures reliable (or fast) data delivery between hosts. Protocol: TCP (reliable), UDP (fast).\n3. Internet (Network) layer — handles logical addressing and routing of packets across networks. Protocol: IP (Internet Protocol).\n4. Link (Network Interface) layer — handles physical transmission of data over the network medium. Protocol: Ethernet, Wi-Fi (802.11).`
      },
    ],
    red: [
      {
        q: 'Evaluate the use of the client-server model compared to a peer-to-peer model for a school network used by 500 students.',
        marks: 6, tier: 'red',
        modelAnswer: `Client-server:\n+ Centralised management — administrators can enforce policies, manage users, and back up data from one location.\n+ Security — access control and authentication are managed centrally.\n+ Reliable — dedicated servers can handle large numbers of simultaneous connections.\n− Cost — requires dedicated server hardware, software licences, and IT staff to maintain.\n− Single point of failure — if the server goes down, all users lose access.\n\nPeer-to-peer:\n+ Cheaper — no dedicated server hardware required.\n+ Resilient — no single point of failure.\n− Security — harder to enforce consistent security policies across all machines.\n− Management — difficult to manage 500 individual machines without centralised control.\n− Performance — as the number of peers increases, performance can degrade.\n\nConclusion: client-server is far more appropriate for a school with 500 students because centralised management, security, and reliability are essential in an educational environment.`
      },
      {
        q: '"Wireless networks will eventually replace wired networks entirely." Evaluate this statement with reference to specific networking scenarios.',
        marks: 6, tier: 'red',
        modelAnswer: `Arguments for:\n• Convenience and mobility — users can connect from anywhere within range without physical cables.\n• Easier to set up in buildings where cabling is impractical (e.g. listed buildings).\n• IoT and mobile devices are increasingly dominant — they rely on wireless connectivity.\n\nArguments against:\n• Wired connections (Ethernet/fibre) offer higher, more consistent bandwidth and lower latency — essential for data centres, server rooms, and backbone infrastructure.\n• Wireless signals are more vulnerable to interference, walls, and distance — less reliable in dense or industrial environments.\n• Security — wireless signals can be intercepted more easily than data on a physical cable.\n• Bandwidth sharing — wireless networks share bandwidth among connected devices; wired gives each device a dedicated connection.\n\nConclusion: wireless will dominate end-user connectivity, but wired networks will remain essential for infrastructure backbones, data centres, and environments demanding maximum speed and reliability. Full replacement is unlikely.`
      },
    ],
  },

  '1.4': {
    green: [
      {
        q: 'State what is meant by a phishing attack and give one way to protect against it.',
        marks: 2, tier: 'green',
        modelAnswer: `Phishing is a social engineering attack where an attacker sends fraudulent messages (often emails) that appear to be from a trusted source, tricking the victim into revealing sensitive information (passwords, bank details) or clicking malicious links.\nProtection: staff training to recognise suspicious emails; email filtering software to detect phishing attempts.`
      },
      {
        q: 'State the difference between authentication and authorisation.',
        marks: 2, tier: 'green',
        modelAnswer: `Authentication is verifying the identity of a user — confirming they are who they claim to be (e.g. checking username and password).\nAuthorisation is determining what an authenticated user is permitted to access or do (e.g. which files they can open, which settings they can change).`
      },
      {
        q: 'Identify two types of malware and describe how each causes harm.',
        marks: 2, tier: 'green',
        modelAnswer: `• Virus — attaches to a legitimate program and replicates when that program is run, potentially corrupting files, deleting data, or slowing down the system.\n• Ransomware — encrypts the victim's files and demands a payment (ransom) for the decryption key, preventing access to important data.`
      },
      {
        q: 'State what is meant by encryption in the context of network security.',
        marks: 2, tier: 'green',
        modelAnswer: `Encryption is the process of converting plaintext data into an unreadable form (ciphertext) using an algorithm and a key. Only someone with the correct decryption key can convert it back to readable form. This protects data from being understood if intercepted during transmission.`
      },
    ],
    amber: [
      {
        q: 'Explain what a SQL injection attack is and describe how it can be prevented.',
        marks: 4, tier: 'amber',
        modelAnswer: `SQL injection: an attacker enters malicious SQL code into a form input field (e.g. login form). If the input is not sanitised, it is executed as part of a database query, potentially revealing, modifying, or deleting data. Example: entering ' OR 1=1 -- as a username to bypass login.\n\nPrevention: use parameterised queries (prepared statements) which treat user input as data, not executable code. Also: input validation/sanitisation to filter dangerous characters, and applying the principle of least privilege to database accounts.`
      },
      {
        q: 'Describe how public key (asymmetric) cryptography works when sending a secure message.',
        marks: 5, tier: 'amber',
        modelAnswer: `1. Each user has a key pair: a public key (shared openly) and a private key (kept secret).\n2. The sender encrypts the message using the recipient's public key.\n3. Only the recipient's private key can decrypt the message.\n4. Even if the encrypted message is intercepted, it cannot be read without the private key.\n\nThis solves the key distribution problem — no secret key needs to be shared in advance. Asymmetric encryption is slower than symmetric, so in practice (e.g. HTTPS), asymmetric encryption is used to securely exchange a symmetric session key, which is then used for the rest of the communication.`
      },
      {
        q: 'Explain what is meant by a brute force attack. Describe two ways a system can be protected against it.',
        marks: 4, tier: 'amber',
        modelAnswer: `A brute force attack systematically tries every possible combination of characters to guess a password or encryption key. Given enough time, it will eventually find the correct one.\n\nProtection:\n• Account lockout / rate limiting — lock the account or add increasing delays after a certain number of failed login attempts.\n• Enforce strong passwords — longer passwords with mixed characters exponentially increase the number of possible combinations, making brute force impractical.\n(Also accept: two-factor authentication, CAPTCHA, password hashing with salt.)`
      },
      {
        q: 'Explain the difference between a firewall and antivirus software. Describe one limitation of each.',
        marks: 4, tier: 'amber',
        modelAnswer: `Firewall: monitors and filters incoming and outgoing network traffic based on predefined security rules. It blocks unauthorised access to or from a network.\nLimitation: cannot detect threats within allowed traffic (e.g. a malicious attachment in an email that passes through an allowed port).\n\nAntivirus: scans files and processes on a device for known malware signatures and suspicious behaviour, quarantining or deleting threats.\nLimitation: cannot detect brand-new (zero-day) malware that does not match any known signature; relies on regular updates to its virus definitions.`
      },
    ],
    red: [
      {
        q: 'A company uses a firewall and antivirus software as its only security measures. Evaluate whether this is sufficient to protect against modern cyber threats.',
        marks: 6, tier: 'red',
        modelAnswer: `Why it is not sufficient:\n• Neither protects against social engineering attacks (phishing, pretexting) that trick employees into revealing credentials — this is the most common attack vector.\n• Antivirus may not detect zero-day malware or advanced persistent threats.\n• Firewalls cannot prevent insider threats — authorised users misusing access.\n• Neither encrypts data at rest or in transit.\n• No protection against DDoS attacks which overwhelm the network.\n\nAdditional measures needed:\n• Staff security awareness training (to recognise phishing).\n• Two-factor authentication (2FA).\n• Regular software patching and updates.\n• Data encryption.\n• Intrusion detection/prevention systems (IDS/IPS).\n• Regular backups and a disaster recovery plan.\n\nConclusion: a firewall and antivirus are necessary but not sufficient. A layered "defence in depth" approach combining technical, procedural, and human measures is required for effective security.`
      },
      {
        q: '"Employees are the biggest security risk in any organisation." Evaluate this statement with reference to specific threats and countermeasures.',
        marks: 6, tier: 'red',
        modelAnswer: `Arguments supporting the statement:\n• Phishing/social engineering targets employees directly — even one click on a malicious link can compromise the entire network.\n• Weak passwords — employees choosing simple passwords undermine authentication systems.\n• Insider threats — disgruntled employees may intentionally steal or damage data.\n• Accidental data breaches — sending sensitive data to the wrong recipient, losing devices.\n\nArguments against:\n• External attackers using sophisticated zero-day exploits or DDoS attacks are not caused by employees.\n• Poor system design (unpatched software, misconfigured servers) is an organisational/technical failure, not an employee one.\n\nCountermeasures:\n• Regular mandatory security training.\n• Enforced password policies and 2FA.\n• Principle of least privilege — limit access to what each role requires.\n• Monitoring and audit logs.\n\nConclusion: employees are often the weakest link because social engineering bypasses technical controls. However, a combination of technical and human-focused countermeasures is needed.`
      },
    ],
  },

  '1.5': {
    green: [
      {
        q: 'State two functions of an operating system.',
        marks: 2, tier: 'green',
        modelAnswer: `• Memory management — allocating RAM to running processes and ensuring they do not interfere with each other.\n• Process management / scheduling — deciding which processes get CPU time, in what order, and for how long.\n(Also accept: file management, device management / drivers, user interface, security / access control.)`
      },
      {
        q: 'State what is meant by a device driver and explain why it is needed.',
        marks: 2, tier: 'green',
        modelAnswer: `A device driver is a piece of software that allows the operating system to communicate with a hardware device (e.g. printer, graphics card). It translates OS commands into instructions the specific hardware can understand. Different hardware requires different drivers because each device has its own instruction set.`
      },
      {
        q: 'Give two examples of utility software and state the purpose of each.',
        marks: 2, tier: 'green',
        modelAnswer: `• Disk defragmenter — reorganises fragmented files on an HDD so that parts of each file are stored contiguously, improving read speed.\n• Antivirus — scans for and removes malicious software to protect the system.\n(Also accept: file manager, backup utility, compression tool, disk cleanup.)`
      },
      {
        q: 'State one difference between a graphical user interface (GUI) and a command-line interface (CLI).',
        marks: 2, tier: 'green',
        modelAnswer: `A GUI allows users to interact using windows, icons, menus, and a pointer (WIMP), making it visual and intuitive.\nA CLI requires users to type text-based commands, which is less intuitive but faster for experienced users and supports automation through scripting.`
      },
    ],
    amber: [
      {
        q: 'Explain what is meant by process scheduling in an operating system. Describe the round-robin algorithm.',
        marks: 4, tier: 'amber',
        modelAnswer: `Process scheduling: the OS decides which processes are allocated CPU time, in what order, and for how long. This ensures fair and efficient use of the processor, particularly when multiple processes compete for CPU time.\n\nRound robin: each process is given a fixed time slice (quantum) of CPU time in turn. If a process doesn't complete in its quantum, it is paused and moved to the back of the ready queue. This ensures all processes make progress (no starvation) and is fair, but frequent context switching adds overhead.`
      },
      {
        q: 'Explain the purpose of virtual memory and describe one disadvantage of relying on it heavily.',
        marks: 4, tier: 'amber',
        modelAnswer: `When RAM is full, the OS uses a section of secondary storage (HDD/SSD) as an extension of RAM. Inactive pages of memory are swapped out to this virtual memory space to free up physical RAM for active processes. This allows the system to run more programs than the physical RAM alone could support.\n\nDisadvantage: secondary storage is much slower than RAM. Heavy use of virtual memory causes "disk thrashing" — the system spends more time swapping pages between RAM and disk than executing processes, severely degrading performance.`
      },
      {
        q: 'Describe what happens during the boot process of a computer, from power-on to the operating system loading.',
        marks: 4, tier: 'amber',
        modelAnswer: `1. Power-on: electricity flows to the CPU.\n2. The CPU begins executing instructions stored in ROM (BIOS/UEFI) — this is the bootstrap program.\n3. POST (Power-On Self-Test): the BIOS checks that essential hardware components (RAM, CPU, storage, keyboard) are functioning.\n4. The BIOS identifies the boot device (e.g. SSD) using the boot order settings.\n5. The bootloader on the boot device is loaded into RAM.\n6. The bootloader loads the operating system kernel into RAM.\n7. The OS takes over, loads drivers and services, and presents the user with a login screen or desktop.`
      },
      {
        q: 'Compare a CLI with a GUI. Explain which would be more appropriate for a network administrator.',
        marks: 4, tier: 'amber',
        modelAnswer: `CLI: users type text commands. Requires more expertise but uses fewer system resources. Supports scripting — tasks can be automated with batch files or shell scripts. Ideal for remote management via SSH.\n\nGUI: users interact via windows, icons, menus. Easier for beginners; more intuitive. Requires more memory and processing power.\n\nFor a network administrator: CLI is more appropriate. Admins need to automate repetitive tasks (e.g. batch user creation, log analysis), manage remote servers efficiently, and execute precise commands. A CLI is faster for experienced users and essential for headless servers.`
      },
    ],
    red: [
      {
        q: 'A computer is running many processes and performance has degraded significantly. Evaluate three approaches the operating system could take to improve performance.',
        marks: 6, tier: 'red',
        modelAnswer: `1. Adjust scheduling priorities: the OS could increase the priority of critical processes and reduce priority for background tasks, ensuring important work gets more CPU time. Effective for improving responsiveness, but low-priority tasks may be starved.\n\n2. Use virtual memory more aggressively: swap more inactive pages to disk to free RAM. This can help in the short term but risks disk thrashing if overused, actually making performance worse.\n\n3. Terminate or suspend non-essential processes: the OS or user can close background applications that are consuming resources. This directly frees CPU and RAM but may interrupt services the user needs later.\n\n(Also valid: defragment memory to reduce fragmentation overhead; optimise page replacement algorithm.)\n\nConclusion: no single approach solves all cases — the OS should use a combination, and the underlying issue may be insufficient physical RAM, which requires a hardware upgrade.`
      },
      {
        q: '"Modern operating systems have made the command-line interface obsolete." Evaluate this statement.',
        marks: 6, tier: 'red',
        modelAnswer: `Arguments for:\n• Modern GUIs are intuitive — most users never need a CLI for everyday tasks.\n• Touchscreen interfaces (tablets, phones) are entirely GUI-based.\n• GUIs provide visual feedback that reduces errors for non-expert users.\n\nArguments against:\n• System administrators rely heavily on CLI for server management, scripting, and automation — tasks that are impractical or impossible via GUI.\n• Most servers run headless (no GUI) to conserve resources — CLI is the only interface.\n• Developers use CLI tools (git, npm, compilers) daily.\n• CLI commands can be chained and scripted for complex automated workflows.\n• Some configuration tasks are only available through CLI.\n\nConclusion: the CLI is not obsolete. While most end-users interact through GUIs, the CLI remains essential for IT professionals, developers, and server management. Both interfaces serve different purposes.`
      },
    ],
  },

  '1.6': {
    green: [
      {
        q: 'State two rights an individual has over their personal data under the Data Protection Act / GDPR.',
        marks: 2, tier: 'green',
        modelAnswer: `• The right of access — individuals can request a copy of all personal data held about them.\n• The right to erasure ("right to be forgotten") — individuals can request deletion of their data.\n(Also accept: right to rectification, right to restrict processing, right to data portability, right to object to processing.)`
      },
      {
        q: 'State what is meant by the digital divide.',
        marks: 2, tier: 'green',
        modelAnswer: `The digital divide is the gap between those who have access to modern technology and the internet and those who do not. This gap is often correlated with factors such as income, geographic location, age, education, or disability.`
      },
      {
        q: 'Identify two environmental impacts of increased use of digital technology.',
        marks: 2, tier: 'green',
        modelAnswer: `• E-waste — discarded electronic devices contain toxic materials (lead, mercury) that pollute soil and water if not recycled properly.\n• Energy consumption — data centres, servers, and always-on devices consume large amounts of electricity, contributing to carbon emissions.`
      },
      {
        q: 'State what is meant by the term "open source software" and give one example.',
        marks: 2, tier: 'green',
        modelAnswer: `Open source software is software whose source code is freely available for anyone to view, modify, and distribute. Example: Linux (operating system), Firefox (browser), LibreOffice (office suite), Python (programming language).`
      },
    ],
    amber: [
      {
        q: 'A company collects customer email addresses for a newsletter, then sells the data to advertisers. Explain which Data Protection principle is violated and why.',
        marks: 4, tier: 'amber',
        modelAnswer: `The principle that personal data should only be used for the specific, explicit purpose for which it was collected is violated ("purpose limitation" under GDPR).\n\nCustomers provided their email address specifically for the newsletter. They did not consent to their data being shared with or sold to third parties. Using the data for advertising purposes without obtaining separate consent breaches this principle.\n\nAdditionally, the principle of lawfulness/fairness may be violated — processing data in a way the individual would not reasonably expect is considered unfair.`
      },
      {
        q: 'Explain what is meant by the digital divide and describe two ways it could be reduced.',
        marks: 4, tier: 'amber',
        modelAnswer: `The digital divide is the gap between those with access to technology/internet and those without, often linked to income, geography, age, or disability.\n\nWay 1: Government-funded broadband infrastructure in rural and underserved areas — ensures that geographic location does not prevent internet access.\nWay 2: Subsidised or free devices and training for low-income households — addressing both the affordability barrier and the skills gap ensures people can actually use the technology.\n(Also accept: digital literacy programmes in schools/community centres; public Wi-Fi in libraries; accessibility features for people with disabilities.)`
      },
      {
        q: 'Describe two ethical issues a developer should consider when designing a facial recognition system.',
        marks: 4, tier: 'amber',
        modelAnswer: `1. Bias and discrimination: facial recognition systems have been shown to have higher error rates for certain demographics (e.g. people of colour, women). A developer must audit their training data and model for bias to prevent discriminatory outcomes.\n\n2. Privacy and consent: capturing and processing someone's face is processing biometric data (sensitive personal data under GDPR). Individuals may be scanned without their knowledge or consent, raising serious privacy concerns. The developer should consider whether consent has been obtained and whether the use is proportionate.`
      },
      {
        q: 'Explain the difference between copyright and a software licence. Give one example of each in a computing context.',
        marks: 4, tier: 'amber',
        modelAnswer: `Copyright: automatic legal protection that gives the creator of an original work (including software code) exclusive rights over how it is used, copied, and distributed. The creator does not need to register — it applies automatically upon creation.\nExample: a developer writes a program — the source code is automatically copyrighted.\n\nSoftware licence: a legal agreement that defines how software can be used, distributed, and modified by others. The copyright holder grants specific permissions through the licence.\nExample: the GNU GPL licence allows users to view, modify, and redistribute the code as long as derivative works are also open source.`
      },
    ],
    red: [
      {
        q: 'Evaluate the claim that automation always leads to unemployment. Consider both short-term and long-term effects.',
        marks: 6, tier: 'red',
        modelAnswer: `Arguments for (short-term):\n• Repetitive/manual jobs (factory assembly, checkout operators, data entry) are directly replaced by machines and software, eliminating those roles.\n• Job losses disproportionately affect lower-skilled, lower-income workers who have fewer alternative opportunities.\n\nArguments against (long-term):\n• Historically, automation has created new industries and roles — e.g. the car industry replaced horse-drawn transport but created millions of manufacturing, engineering, and service jobs.\n• Productivity gains from automation reduce costs, which can increase demand and create jobs elsewhere.\n• New roles emerge that did not exist before — e.g. software developers, robot maintenance engineers, data analysts.\n\nConclusion: the claim is an oversimplification. Automation displaces specific jobs in the short term but often creates different jobs in the long term. The net effect depends on the industry, the speed of change, and whether governments invest in education and retraining to help displaced workers transition.`
      },
      {
        q: 'A government proposes requiring technology companies to build "backdoor" access into encrypted messaging apps to assist law enforcement. Evaluate this proposal from multiple perspectives.',
        marks: 8, tier: 'red',
        modelAnswer: `Arguments for:\n• Law enforcement could access communications of suspected criminals and terrorists, potentially preventing serious crime.\n• Encrypted platforms are currently used to plan attacks and share illegal material with little risk of detection.\n• Existing lawful intercept powers (e.g. wiretapping) should extend to digital communications.\n\nArguments against:\n• A backdoor is a vulnerability — if it exists, it can be discovered and exploited by hackers, hostile states, or criminals, undermining security for all users.\n• It violates the right to privacy — legitimate users (journalists, activists, businesses) rely on encryption to protect sensitive communications.\n• Criminals would simply switch to alternative, non-backdoored encryption tools — the proposal would weaken security for law-abiding users without stopping determined criminals.\n• Technical experts widely agree that you cannot build a backdoor accessible only to "good guys" — it is a fundamental security principle.\n\nConclusion: while the intention is understandable, the proposal is widely regarded as counterproductive by security experts. It would create vulnerabilities for all users while providing limited benefit against determined adversaries who can access alternative encryption.`
      },
    ],
  },

  '2.1': {
    green: [
      {
        q: 'State the worst-case time complexity of linear search and of binary search.',
        marks: 2, tier: 'green',
        modelAnswer: `Linear search: O(n) — in the worst case, every element must be checked.\nBinary search: O(log n) — the search space halves with each comparison.`
      },
      {
        q: 'State two differences between a stack and a queue.',
        marks: 2, tier: 'green',
        modelAnswer: `• A stack is Last In, First Out (LIFO) — the most recently added item is removed first. A queue is First In, First Out (FIFO) — the earliest added item is removed first.\n• A stack uses push (add) and pop (remove from top). A queue uses enqueue (add to back) and dequeue (remove from front).`
      },
      {
        q: 'State why binary search requires a sorted list.',
        marks: 2, tier: 'green',
        modelAnswer: `Binary search works by comparing the target value to the middle element and discarding the half that cannot contain the target. This logic only works if the list is in order — in an unsorted list, discarding half could mean discarding the element being searched for.`
      },
      {
        q: 'State the worst-case time complexity of bubble sort and explain what this means.',
        marks: 2, tier: 'green',
        modelAnswer: `Worst case: O(n²). This means if the number of items (n) doubles, the time taken roughly quadruples. For a list in reverse order, bubble sort must make approximately n² comparisons and swaps, making it very slow for large datasets.`
      },
    ],
    amber: [
      {
        q: 'Trace the bubble sort algorithm on the list [5, 2, 8, 1, 6]. Show the state of the list after each complete pass.',
        marks: 4, tier: 'amber',
        modelAnswer: `Pass 1: [2, 5, 1, 6, 8] (8 is in final position)\nPass 2: [2, 1, 5, 6, 8] (6 is in final position)\nPass 3: [1, 2, 5, 6, 8] (5 is in final position)\nNo swaps needed — list is sorted.\nFinal: [1, 2, 5, 6, 8]`
      },
      {
        q: 'Describe the steps of the merge sort algorithm on the list [6, 3, 8, 1]. Show the splitting and merging stages.',
        marks: 4, tier: 'amber',
        modelAnswer: `Splitting:\n[6, 3, 8, 1] → [6, 3] and [8, 1]\n[6, 3] → [6] and [3]\n[8, 1] → [8] and [1]\n\nMerging (comparing and combining in order):\n[6] and [3] → [3, 6]\n[8] and [1] → [1, 8]\n[3, 6] and [1, 8] → compare 3 vs 1 → 1; 3 vs 8 → 3; 6 vs 8 → 6; then 8\n→ [1, 3, 6, 8]`
      },
      {
        q: 'Explain what is meant by a recursive algorithm. Write pseudocode for a recursive function that calculates the sum of all integers from 1 to n.',
        marks: 5, tier: 'amber',
        modelAnswer: `Recursion: a technique where a function calls itself with a progressively smaller version of the problem until a base case is reached. Each recursive call is added to the call stack.\n\nPseudocode:\nFUNCTION sumTo(n)\n  IF n <= 0 THEN\n    RETURN 0\n  ELSE\n    RETURN n + sumTo(n - 1)\n  END IF\nEND FUNCTION\n\nExample: sumTo(4) → 4 + sumTo(3) → 4 + 3 + sumTo(2) → … → 4 + 3 + 2 + 1 + 0 = 10`
      },
      {
        q: 'Explain the steps of binary search on the sorted list [2, 5, 9, 14, 20, 31, 45] when searching for the value 31.',
        marks: 4, tier: 'amber',
        modelAnswer: `1. Find the middle element: index 3 = 14. Compare 31 with 14. 31 > 14, so discard the left half.\n2. Remaining: [20, 31, 45]. Middle: index 1 = 31. Compare 31 with 31. Match found!\nBinary search found the target in 2 comparisons. Linear search would have needed 6 comparisons.`
      },
    ],
    red: [
      {
        q: 'Evaluate bubble sort and merge sort for sorting a list of 1,000,000 records. Consider time complexity, space complexity, and practical use cases.',
        marks: 6, tier: 'red',
        modelAnswer: `Bubble sort:\n• Time: O(n²) — for 1,000,000 records this means up to 10¹² operations. Completely impractical for large datasets.\n• Space: O(1) — sorts in place, no extra memory needed.\n• Simple to implement but far too slow for this scale.\n\nMerge sort:\n• Time: O(n log n) — for 1,000,000 records this is approximately 20,000,000 operations. Far more practical.\n• Space: O(n) — requires additional memory to store temporary sub-arrays during merging.\n• More complex to implement but consistent performance regardless of initial order.\n\nConclusion: merge sort is vastly superior for large datasets due to its O(n log n) time complexity. The additional memory cost is a worthwhile trade-off. Bubble sort should only be used for very small lists or educational purposes. In practice, most languages use hybrid sorts (e.g. Timsort) that combine the best properties.`
      },
      {
        q: 'Discuss the trade-offs between a recursive and an iterative approach to solving a problem. Include reference to memory usage, performance, and code clarity.',
        marks: 6, tier: 'red',
        modelAnswer: `Recursion:\n+ Often produces cleaner, more elegant code that closely mirrors the mathematical definition (e.g. factorial, tree traversal, Fibonacci).\n+ Essential for problems with recursive structures (e.g. traversing nested directories, parsing expressions).\n− Each recursive call adds a frame to the call stack, consuming memory. Deep recursion can cause a stack overflow.\n− Function call overhead makes recursion slower than equivalent iteration in most languages.\n\nIteration:\n+ More memory-efficient — uses a fixed amount of stack space regardless of input size.\n+ Typically faster due to no function call overhead.\n− Can produce longer, less readable code for naturally recursive problems (e.g. tree traversal with explicit stacks).\n\nConclusion: use recursion when it significantly improves clarity and the recursion depth is manageable. Use iteration when performance or memory is critical, or when the problem is naturally iterative (e.g. summing a list). In practice, tail-call optimisation (in languages that support it) can bridge the gap.`
      },
    ],
  },

  '2.2': {
    green: [
      {
        q: 'State the difference between a local variable and a global variable.',
        marks: 2, tier: 'green',
        modelAnswer: `A local variable is declared inside a subroutine and can only be accessed within that subroutine. It is destroyed when the subroutine ends.\nA global variable is declared at the top level of the program and can be accessed from anywhere in the code.`
      },
      {
        q: 'State two advantages of using subroutines (functions/procedures) in a program.',
        marks: 2, tier: 'green',
        modelAnswer: `• Reusability — a subroutine can be called multiple times from different parts of the program without rewriting the code.\n• Maintainability — if a change is needed, it only has to be made once in the subroutine rather than in every place the code was duplicated.`
      },
      {
        q: 'State what is meant by casting (type conversion) in programming. Give one example.',
        marks: 2, tier: 'green',
        modelAnswer: `Casting is converting a value from one data type to another. Example: converting a string "42" to an integer 42 so it can be used in a calculation — e.g. int("42") in Python. This is necessary when user input is received as a string but needs to be used as a number.`
      },
      {
        q: 'Identify four common data types and give an example value for each.',
        marks: 2, tier: 'green',
        modelAnswer: `• Integer — whole number, e.g. 42\n• Float/Real — decimal number, e.g. 3.14\n• String — text, e.g. "Hello"\n• Boolean — true or false, e.g. True`
      },
    ],
    amber: [
      {
        q: 'Explain the difference between passing a variable by value and passing by reference. Use an example to illustrate.',
        marks: 4, tier: 'amber',
        modelAnswer: `By value: a copy of the variable's data is passed to the subroutine. Changes inside the subroutine do not affect the original variable.\nExample: x = 5; doubleIt(x) — if doubleIt multiplies its parameter by 2, x remains 5 after the call.\n\nBy reference: the memory address of the variable is passed. Changes inside the subroutine directly affect the original variable.\nExample: if doubleIt receives x by reference and multiplies by 2, x becomes 10 after the call.`
      },
      {
        q: 'Explain what recursion is. Write pseudocode for a recursive function that calculates the factorial of n. State what would happen without a base case.',
        marks: 5, tier: 'amber',
        modelAnswer: `Recursion: a function that calls itself with a smaller/simpler version of the problem until a base case (terminating condition) is reached.\n\nFUNCTION factorial(n)\n  IF n <= 1 THEN\n    RETURN 1\n  ELSE\n    RETURN n * factorial(n - 1)\n  END IF\nEND FUNCTION\n\nExample: factorial(4) = 4 × 3 × 2 × 1 = 24\n\nWithout a base case: the function would call itself indefinitely, each call adding to the call stack until the stack overflows — causing a stack overflow error and the program crashing.`
      },
      {
        q: 'Explain the difference between a WHILE loop and a FOR loop. Describe a situation where a WHILE loop would be more appropriate than a FOR loop.',
        marks: 4, tier: 'amber',
        modelAnswer: `FOR loop: used when the number of iterations is known in advance. A counter variable is automatically initialised, incremented, and checked.\nExample: FOR i = 0 TO 9 — runs exactly 10 times.\n\nWHILE loop: used when the number of iterations is not known in advance. The loop continues as long as a condition remains true.\nExample: WHILE password != correct — the number of attempts is unknown.\n\nA WHILE loop is more appropriate for input validation — e.g. repeatedly asking a user for valid input until they enter something acceptable. The number of attempts cannot be predicted.`
      },
      {
        q: 'Explain the difference between a 1D array and a 2D array. Write pseudocode to declare a 3×3 grid and set every element to 0.',
        marks: 4, tier: 'amber',
        modelAnswer: `A 1D array stores a single list of values accessed by one index, e.g. names[0], names[1].\nA 2D array is like a table/grid — values are accessed by two indices (row and column), e.g. grid[1][2].\n\nPseudocode:\ngrid = [[0,0,0],[0,0,0],[0,0,0]]\n\nOr using loops:\nFOR row = 0 TO 2\n  FOR col = 0 TO 2\n    grid[row][col] = 0\n  END FOR\nEND FOR`
      },
    ],
    red: [
      {
        q: 'Evaluate the use of global variables in a large program. Discuss the benefits and risks with reference to maintainability and debugging.',
        marks: 6, tier: 'red',
        modelAnswer: `Benefits:\n• Convenience — data can be shared across multiple subroutines without passing parameters.\n• Simpler function signatures — no need to pass common data (e.g. configuration settings) to every function.\n\nRisks:\n• Any part of the program can modify a global variable, making bugs difficult to trace. A change in one function may unexpectedly affect another.\n• Poor encapsulation — subroutines are no longer self-contained, making them harder to test independently.\n• Name collisions — in large programs, different modules may accidentally use the same global variable name, causing hard-to-find errors.\n• Concurrency issues — in multithreaded programs, simultaneous access to global variables can cause race conditions.\n\nConclusion: global variables should be used sparingly. In large programs, passing parameters or using proper data structures (e.g. objects) is preferred to maintain code clarity, testability, and reduce unexpected side effects.`
      },
      {
        q: 'Discuss the advantages and disadvantages of using recursion compared to iteration for solving problems involving repeated sub-tasks. Use a specific example in your answer.',
        marks: 6, tier: 'red',
        modelAnswer: `Recursion advantages:\n• Produces cleaner, more readable code for naturally recursive problems — e.g. traversing a binary tree: visit node, recursively visit left subtree, recursively visit right subtree. The recursive version closely mirrors the problem definition.\n• Easier to implement for problems with branching structures (trees, graphs, nested data).\n\nRecursion disadvantages:\n• Memory overhead — each call adds a stack frame; deep recursion (e.g. factorial of 100,000) can cause stack overflow.\n• Slower — function call overhead (saving/restoring state) makes recursion slower than equivalent loops.\n• Harder to debug — tracing through many recursive calls is complex.\n\nIteration advantages:\n• More memory efficient — uses constant stack space.\n• Faster execution — no function call overhead.\n\nIteration disadvantages:\n• Can be more complex for recursive structures — e.g. iterative tree traversal requires maintaining an explicit stack.\n\nConclusion: choose recursion for clarity when the depth is bounded (e.g. tree traversal); choose iteration for performance-critical or deep computations.`
      },
    ],
  },

  '2.3': {
    green: [
      {
        q: 'State three types of test data and give an example of each for a program that accepts ages between 0 and 120.',
        marks: 3, tier: 'green',
        modelAnswer: `• Normal data: a typical valid value, e.g. 25 — tests the program handles standard input correctly.\n• Boundary data: values at the edge of the valid range, e.g. 0 and 120 — tests the program handles limits correctly.\n• Erroneous data: values outside the range or of the wrong type, e.g. -1, 121, or "abc" — tests the program rejects invalid input gracefully.`
      },
      {
        q: 'State the difference between a syntax error and a logic error.',
        marks: 2, tier: 'green',
        modelAnswer: `A syntax error breaks the rules of the programming language (e.g. missing bracket, misspelled keyword). The program will not compile or run.\nA logic error allows the program to run without crashing, but it produces incorrect results because the algorithm or code logic is flawed (e.g. using > instead of >=).`
      },
      {
        q: 'State two ways a programmer can make their code more maintainable.',
        marks: 2, tier: 'green',
        modelAnswer: `• Use meaningful variable and function names — e.g. calculateTotal() instead of f1() — so the purpose is clear without needing comments.\n• Add comments to explain complex or non-obvious logic — helps future developers understand the reasoning behind the code.\n(Also accept: use subroutines/modular design, consistent indentation, following naming conventions.)`
      },
      {
        q: 'State what is meant by input validation. Give one example.',
        marks: 2, tier: 'green',
        modelAnswer: `Input validation is checking that data entered by a user meets certain criteria before accepting it, preventing invalid or malicious data from being processed.\nExample: checking that an age entered is a number between 0 and 120 — if the user enters "abc" or -5, the program rejects it and asks again.`
      },
    ],
    amber: [
      {
        q: 'Explain the difference between white-box and black-box testing. State which type a third-party testing company would typically use.',
        marks: 4, tier: 'amber',
        modelAnswer: `White-box testing: the tester has full knowledge of the internal code structure and uses this to design tests that exercise all code paths, branches, and conditions.\n\nBlack-box testing: the tester has no knowledge of the internal code. Tests are based purely on the specification — given inputs, expected outputs are verified.\n\nA third-party testing company would typically use black-box testing, as they test from a user/specification perspective without access to the source code.`
      },
      {
        q: 'Explain what is meant by a logic error. Give an example and describe how a trace table could help identify it.',
        marks: 4, tier: 'amber',
        modelAnswer: `A logic error: the program runs without crashing but produces incorrect results because the algorithm is flawed.\n\nExample: writing IF score > 50 instead of IF score >= 50 — a score of exactly 50 is incorrectly treated as a fail.\n\nTrace table: the programmer creates a table tracking the value of each variable at each step of execution for a specific input. By comparing expected values with actual values at each step, the point where they diverge becomes visible — pinpointing where the logic is wrong.`
      },
      {
        q: 'Explain what is meant by defensive design. Describe three techniques a programmer can use.',
        marks: 4, tier: 'amber',
        modelAnswer: `Defensive design means anticipating how users might misuse a program and writing code that handles these situations gracefully, preventing crashes and security vulnerabilities.\n\nTechniques:\n1. Input validation — checking user input is within expected bounds/type before processing (e.g. range check, type check, presence check).\n2. Authentication — verifying user identity before granting access to sensitive features.\n3. Error handling — using try-catch blocks to handle runtime errors gracefully (displaying a useful message rather than crashing).\n(Also accept: input sanitisation to prevent injection attacks, limiting user permissions.)`
      },
      {
        q: 'Describe the difference between iterative testing and final (terminal) testing. Explain when each is used.',
        marks: 4, tier: 'amber',
        modelAnswer: `Iterative testing: carried out during development. Each module/feature is tested as it is built. Allows bugs to be found and fixed early, when they are cheaper and easier to resolve. This is an ongoing process throughout the development cycle.\n\nFinal testing: carried out after development is complete, on the whole integrated system. Tests that the program meets the original specification and works as expected in its complete form. Also called acceptance testing when done with/by the client.\n\nIterative testing is used throughout development to catch bugs early. Final testing is used before release to confirm the complete system meets requirements.`
      },
    ],
    red: [
      {
        q: '"Thorough testing can guarantee that a program is completely bug-free." Evaluate this statement.',
        marks: 6, tier: 'red',
        modelAnswer: `Arguments for:\n• Thorough testing (covering normal, boundary, and erroneous data for every input and code path) can find a very high proportion of bugs.\n• Systematic testing approaches (white-box testing with full path coverage) leave few untested areas.\n• Automated testing can run thousands of test cases efficiently.\n\nArguments against:\n• For any non-trivial program, the number of possible input combinations is effectively infinite — exhaustive testing is impossible.\n• Logic errors may only manifest under very specific combinations of inputs or timing (e.g. race conditions in concurrent programs).\n• Testing can only prove the presence of bugs, not their absence (Dijkstra).\n• The testing environment may differ from the production environment, missing environment-specific bugs.\n• Requirements themselves may be flawed — a program that perfectly meets a wrong specification still has "bugs" from the user's perspective.\n\nConclusion: thorough testing significantly reduces bugs and increases confidence, but it cannot guarantee a program is completely bug-free. A combination of testing, code review, formal verification, and real-world beta testing provides the best results.`
      },
      {
        q: 'A software company is releasing a new online banking application. Evaluate the testing strategies they should use before release, considering the critical nature of the software.',
        marks: 6, tier: 'red',
        modelAnswer: `Critical requirements: security, accuracy, reliability, and compliance with financial regulations.\n\nStrategies:\n1. Unit testing: test each function/module independently (e.g. interest calculation, login validation) to ensure correctness at the smallest level.\n2. Integration testing: test that modules work together correctly (e.g. login → account view → transfer flow).\n3. Security/penetration testing: simulate attacks (SQL injection, XSS, brute force) to identify vulnerabilities — essential for a banking app handling sensitive data.\n4. Performance/stress testing: test the system under heavy load (many simultaneous users) to ensure it remains responsive and does not crash.\n5. User acceptance testing (UAT): real users test the application against requirements to confirm it meets their needs.\n6. Regression testing: after fixing any bug, re-run all previous tests to ensure fixes haven't introduced new problems.\n\nConclusion: given the critical nature of financial software, all of these strategies should be used. Security testing and stress testing are particularly important given the sensitivity of data and the expectation of 24/7 availability. Regulatory compliance testing may also be legally required.`
      },
    ],
  },

  '2.4': {
    green: [
      {
        q: 'State what is meant by a logic gate. Give two examples.',
        marks: 2, tier: 'green',
        modelAnswer: `A logic gate is an electronic component that takes one or more binary inputs and produces a single binary output based on a Boolean function.\nExamples: AND gate (outputs 1 only when both inputs are 1), OR gate (outputs 1 when at least one input is 1).\n(Also accept: NOT, NAND, NOR, XOR.)`
      },
      {
        q: 'State De Morgan\'s two laws.',
        marks: 2, tier: 'green',
        modelAnswer: `Law 1: NOT(A AND B) = (NOT A) OR (NOT B)\nLaw 2: NOT(A OR B) = (NOT A) AND (NOT B)\n\nThese laws allow Boolean expressions to be rewritten in equivalent forms, useful for simplification and circuit design.`
      },
      {
        q: 'State what is meant by a "universal gate". Name one example.',
        marks: 2, tier: 'green',
        modelAnswer: `A universal gate is a logic gate from which any other gate (NOT, AND, OR, XOR, etc.) can be constructed using only that type of gate.\nExample: NAND gate (or NOR gate).`
      },
      {
        q: 'Complete the truth table for the expression A AND B for all possible inputs.',
        marks: 2, tier: 'green',
        modelAnswer: `A=0, B=0 → 0\nA=0, B=1 → 0\nA=1, B=0 → 0\nA=1, B=1 → 1\n\nAND only outputs 1 when both inputs are 1.`
      },
    ],
    amber: [
      {
        q: 'Complete a truth table for the expression NOT(A AND B) OR C for all possible input combinations.',
        marks: 4, tier: 'amber',
        modelAnswer: `A=0, B=0, C=0: NOT(0) OR 0 = 1 OR 0 = 1\nA=0, B=0, C=1: NOT(0) OR 1 = 1 OR 1 = 1\nA=0, B=1, C=0: NOT(0) OR 0 = 1 OR 0 = 1\nA=0, B=1, C=1: NOT(0) OR 1 = 1 OR 1 = 1\nA=1, B=0, C=0: NOT(0) OR 0 = 1 OR 0 = 1\nA=1, B=0, C=1: NOT(0) OR 1 = 1 OR 1 = 1\nA=1, B=1, C=0: NOT(1) OR 0 = 0 OR 0 = 0\nA=1, B=1, C=1: NOT(1) OR 1 = 0 OR 1 = 1\n\nOnly outputs 0 when A=1, B=1, and C=0.`
      },
      {
        q: 'Explain why NAND is described as a universal gate. Show how a NOT gate can be constructed from a single NAND gate.',
        marks: 4, tier: 'amber',
        modelAnswer: `A universal gate is one from which any other logic gate can be constructed using only that gate type. NAND is universal because NOT, AND, OR, and all other gates can be built using only NAND gates.\n\nNOT from NAND: connect both inputs of a NAND gate to the same signal A.\nNAND(A, A) = NOT(A AND A) = NOT(A)\nSince A AND A = A, NOT(A AND A) = NOT(A). The NAND gate with tied inputs behaves as an inverter.`
      },
      {
        q: 'Describe the inputs and outputs of a half adder circuit. Write the Boolean expressions for the Sum and Carry outputs.',
        marks: 4, tier: 'amber',
        modelAnswer: `A half adder adds two single-bit binary numbers.\nInputs: A and B (each a single bit: 0 or 1)\nOutputs:\n• Sum (S) = A XOR B — output is 1 when the inputs differ.\n• Carry (C) = A AND B — carry is 1 only when both inputs are 1 (1+1 = 10 in binary).\n\nTruth table:\nA=0, B=0 → S=0, C=0\nA=0, B=1 → S=1, C=0\nA=1, B=0 → S=1, C=0\nA=1, B=1 → S=0, C=1`
      },
      {
        q: 'Use De Morgan\'s law to simplify NOT(A OR B). State what single logic gate this expression is equivalent to.',
        marks: 4, tier: 'amber',
        modelAnswer: `Applying De Morgan's second law:\nNOT(A OR B) = (NOT A) AND (NOT B)\n\nThis means: invert both inputs, then AND them together.\nThis expression is equivalent to a NOR gate — it outputs 1 only when both A and B are 0.`
      },
    ],
    red: [
      {
        q: 'A logic circuit implements NOT(A OR B) AND (B OR C). Produce a complete truth table for all input combinations and identify all conditions where the output is 1.',
        marks: 6, tier: 'red',
        modelAnswer: `Evaluating NOT(A OR B) AND (B OR C) for all 8 combinations:\n\nA=0,B=0,C=0: NOT(0) AND (0) = 1 AND 0 = 0\nA=0,B=0,C=1: NOT(0) AND (1) = 1 AND 1 = 1 ✓\nA=0,B=1,C=0: NOT(1) AND (1) = 0 AND 1 = 0\nA=0,B=1,C=1: NOT(1) AND (1) = 0 AND 1 = 0\nA=1,B=0,C=0: NOT(1) AND (0) = 0 AND 0 = 0\nA=1,B=0,C=1: NOT(1) AND (1) = 0 AND 1 = 0\nA=1,B=1,C=0: NOT(1) AND (1) = 0 AND 1 = 0\nA=1,B=1,C=1: NOT(1) AND (1) = 0 AND 1 = 0\n\nThe output is 1 only when A=0, B=0, C=1. This means: the output is true only when A is off, B is off, and C is on.`
      },
      {
        q: 'Discuss the role of Boolean algebra in digital circuit design. Evaluate how simplifying Boolean expressions can reduce manufacturing costs.',
        marks: 6, tier: 'red',
        modelAnswer: `Role of Boolean algebra:\n• All digital circuits are built from logic gates that implement Boolean operations. Boolean algebra provides the mathematical foundation for designing, analysing, and optimising these circuits.\n• Complex operations (addition, comparison, data routing) are expressed as Boolean expressions and then implemented as gate circuits.\n\nSimplification and cost:\n• A simpler Boolean expression requires fewer logic gates to implement.\n• Fewer gates means: less silicon area on a chip (smaller die size), lower power consumption, reduced heat generation, and lower manufacturing cost per unit.\n• At scale (millions of chips), even removing one gate from a circuit can save significant cost.\n• Simpler circuits are also more reliable — fewer components means fewer potential points of failure.\n\nMethods of simplification include algebraic manipulation using Boolean laws (De Morgan's, absorption, etc.) and Karnaugh maps for systematic minimisation.\n\nConclusion: Boolean simplification is a critical step in circuit design. Reducing a 10-gate circuit to 6 gates that produce identical output directly translates to cheaper, faster, more efficient hardware.`
      },
    ],
  },

  '2.5': {
    green: [
      {
        q: 'State one difference between a compiler and an interpreter.',
        marks: 2, tier: 'green',
        modelAnswer: `A compiler translates the entire source code into machine code (an executable) before the program is run. An interpreter translates and executes source code one line at a time during runtime.\n(Also accept: compiled programs run faster at execution; interpreted programs are easier to debug; compiler produces a standalone executable; interpreter requires the source code to be present at runtime.)`
      },
      {
        q: 'State what is meant by machine code.',
        marks: 2, tier: 'green',
        modelAnswer: `Machine code is the lowest-level programming language, consisting of binary instructions (1s and 0s) that the CPU can directly execute. Each instruction corresponds to a specific operation (e.g. add, load, store). Machine code is processor-specific — different CPU architectures have different machine code instruction sets.`
      },
      {
        q: 'Identify two features of an IDE that help a programmer write code more efficiently.',
        marks: 2, tier: 'green',
        modelAnswer: `• Autocomplete / code suggestions — predicts what the programmer is typing and offers completions, reducing errors and speeding up coding.\n• Syntax highlighting — displays different parts of the code (keywords, strings, comments) in different colours, making the code easier to read and helping spot errors.\n(Also accept: error highlighting/underlining, code templates, bracket matching.)`
      },
      {
        q: 'State two reasons why high-level languages are generally preferred over low-level languages for most programming tasks.',
        marks: 2, tier: 'green',
        modelAnswer: `• Easier to read and write — high-level languages use English-like syntax, making development faster and code more understandable.\n• Portable — the same high-level code can be compiled/interpreted for different platforms, unlike assembly/machine code which is processor-specific.`
      },
    ],
    amber: [
      {
        q: 'Explain the difference between a compiler and an interpreter. State one advantage of each.',
        marks: 4, tier: 'amber',
        modelAnswer: `Compiler: translates the entire source code into machine code before execution, producing a standalone executable file.\nAdvantage: the compiled program runs faster at execution time because no translation is happening during runtime.\n\nInterpreter: translates and executes the source code one line at a time during runtime. No separate executable is produced.\nAdvantage: errors are reported immediately at the specific line, making debugging easier and faster during development. Changes can be tested instantly without a compilation step.`
      },
      {
        q: 'Describe three features of an IDE that help a programmer write and debug code.',
        marks: 6, tier: 'amber',
        modelAnswer: `1. Syntax highlighting: different elements of code (keywords, strings, comments, variables) are displayed in different colours. This makes code easier to read and helps programmers quickly spot typos or misplaced syntax.\n\n2. Debugger: allows the programmer to set breakpoints (pausing execution at specific lines), step through code line by line, and inspect the values of variables at each step. Essential for finding logic errors.\n\n3. Autocomplete / IntelliSense: suggests function names, variable names, and method signatures as the programmer types. Reduces typing errors, speeds up development, and helps recall syntax for unfamiliar libraries.\n\n(Also accept: error highlighting, integrated terminal/compiler, version control integration, code refactoring tools.)`
      },
      {
        q: 'A developer writes a program in Java that compiles to bytecode. Explain why this makes the program portable and describe how the bytecode is executed.',
        marks: 4, tier: 'amber',
        modelAnswer: `Bytecode is an intermediate representation — not native machine code for any specific processor. It is platform-independent.\n\nPortability: any device with a compatible Java Virtual Machine (JVM) installed can execute the same bytecode, regardless of the underlying hardware or operating system. This achieves "write once, run anywhere."\n\nExecution: the JVM interprets the bytecode at runtime, translating it into native machine code for the host platform. Modern JVMs also use Just-In-Time (JIT) compilation — frequently executed sections of bytecode are compiled to native machine code on the fly, improving performance while maintaining portability.`
      },
      {
        q: 'Explain why high-level languages are preferred over assembly language for large software projects. State one situation where assembly language is still used.',
        marks: 4, tier: 'amber',
        modelAnswer: `High-level languages are preferred because:\n• They are much easier to read, write, and maintain — using English-like syntax rather than cryptic mnemonics.\n• They are portable — the same code runs on different hardware with recompilation.\n• They include extensive libraries and frameworks, speeding up development.\n• They support abstractions (functions, objects, modules) that help manage complexity in large codebases.\n\nAssembly language is still used when:\n• Direct hardware control is needed (e.g. device drivers, embedded systems, microcontrollers).\n• Maximum performance is critical and every instruction must be optimised (e.g. real-time systems, game engines — specific bottleneck routines).`
      },
    ],
    red: [
      {
        q: 'A developer is choosing between Python (interpreted) and C++ (compiled) for a new project. Evaluate the trade-offs between these approaches, considering development speed, runtime performance, and portability.',
        marks: 6, tier: 'red',
        modelAnswer: `Python (interpreted):\n+ Faster development — concise syntax, dynamic typing, vast library ecosystem (NumPy, Flask, etc.).\n+ Easier debugging — errors reported at the specific line during runtime.\n+ Highly portable — Python scripts run on any platform with a Python interpreter.\n− Slower runtime performance — interpretation overhead means Python can be 10–100× slower than C++ for computation-heavy tasks.\n− Not suitable for system-level programming or performance-critical applications.\n\nC++ (compiled):\n+ Very fast runtime performance — compiled to native machine code with full optimisation.\n+ Direct memory management — suitable for systems programming, game engines, embedded systems.\n+ Strong type checking at compile time catches errors before the program runs.\n− Slower development — more verbose syntax, manual memory management, longer compile-debug cycle.\n− Less portable — must be recompiled for each target platform; platform-specific differences may require code changes.\n\nConclusion: Python is ideal for rapid prototyping, scripting, data science, and web development where development speed matters more than runtime speed. C++ is preferred for performance-critical applications (games, OS components, real-time systems) where execution speed is essential.`
      },
      {
        q: 'Evaluate the impact of the evolution from machine code to high-level languages on the software development industry.',
        marks: 6, tier: 'red',
        modelAnswer: `Positive impacts:\n• Accessibility: high-level languages opened programming to a much wider audience — you no longer need deep hardware knowledge to write software.\n• Productivity: developers can write complex software in days or weeks rather than months, accelerating innovation.\n• Maintainability: readable, self-documenting code is easier to update and hand over between developers.\n• Portability: high-level code can target multiple platforms, enabling cross-platform software and the web.\n• Abstraction: libraries and frameworks allow developers to build on existing work rather than starting from scratch.\n\nNegative impacts / trade-offs:\n• Performance: abstraction layers add overhead — interpreted/high-level code is slower than hand-optimised machine code.\n• Loss of hardware understanding: many modern developers have limited knowledge of how hardware works, which can lead to inefficient code.\n• Dependency on toolchains: complex build systems, compilers, and frameworks introduce new points of failure.\n\nConclusion: the evolution has been overwhelmingly positive — it has enabled the modern software industry, from mobile apps to cloud computing. The performance trade-off is increasingly mitigated by faster hardware and better compilers/JIT systems.`
      },
    ],
  },

};
