/*
 * OCR B (MEI) A-Level Mathematics (H640) — Exam Practice Question Bank
 * Written, exam-style questions with mark schemes, self-marked Full / Partial / Missed.
 * Single A-Level entry: AS (H630) content is folded into the same topic ids.
 * Keyed by topic id: 1.1–1.13 Pure, 2.1–2.5 Statistics, 3.1–3.7 Mechanics.
 * Shape A: { topicId: { name, questions: [{ q, marks, markScheme }] } }
 * Target: 40 questions per topic.
 */

const MATHS_OCR_B_ALEVEL_PRACTICE = {

  '1.1': {
    name: 'Proof',
    questions: [
      { q: 'State what is meant by a mathematical conjecture, and explain how it differs from a theorem.', marks: 2, markScheme: `• A conjecture is a mathematical statement that is believed to be true but has not been proved (1)\n• A theorem is a statement that has been proved from axioms and previously established results (1)` },

      { q: 'Explain the difference between the converse and the contrapositive of the statement "if P then Q", and state which is logically equivalent to the original.', marks: 3, markScheme: `• Converse is "if Q then P" (1)\n• Contrapositive is "if not Q then not P" (1)\n• The contrapositive is logically equivalent to the original statement; the converse is not (1)` },

      { q: 'Prove by deduction that the sum of any two consecutive integers is odd.', marks: 3, markScheme: `• Let the integers be n and n + 1, where n is an integer (1)\n• Sum = 2n + 1 (1)\n• 2n is even, so 2n + 1 is odd; hence the sum of any two consecutive integers is odd (1)` },

      { q: 'Prove that the sum of any three consecutive integers is divisible by 3.', marks: 3, markScheme: `• Let the integers be n − 1, n, n + 1 (or n, n + 1, n + 2) (1)\n• Sum = 3n (or 3n + 3) (1)\n• 3n = 3 × n is a multiple of 3 for every integer n, with conclusion stated (1)` },

      { q: 'Prove that the sum of two odd numbers is always even.', marks: 3, markScheme: `• Let the odd numbers be 2a + 1 and 2b + 1, where a and b are integers — different letters required (1)\n• Sum = 2a + 2b + 2 = 2(a + b + 1) (1)\n• This is 2 × an integer, hence even; conclusion stated (1)` },

      { q: 'Prove that the product of any two consecutive integers is even.', marks: 3, markScheme: `• Let the integers be n and n + 1 (1)\n• One of any two consecutive integers must be even (1)\n• An even number multiplied by any integer is even, so the product is even (1)` },

      { q: 'Prove that the square of any odd number is odd.', marks: 3, markScheme: `• Let the odd number be 2k + 1, where k is an integer (1)\n• (2k + 1)² = 4k² + 4k + 1 = 2(2k² + 2k) + 1 (1)\n• This is 2 × an integer + 1, hence odd; conclusion stated (1)` },

      { q: 'Prove that the difference between the squares of any two consecutive odd numbers is a multiple of 8.', marks: 4, markScheme: `• Let the odd numbers be 2n − 1 and 2n + 1 (1)\n• Difference = (2n + 1)² − (2n − 1)² (1)\n• Expand and simplify: (4n² + 4n + 1) − (4n² − 4n + 1) = 8n (1)\n• 8n is a multiple of 8 for every integer n; conclusion stated (1)` },

      { q: 'Disprove the statement "every odd number is prime".', marks: 2, markScheme: `• Provide a counter-example, e.g. n = 9 (1)\n• 9 = 3 × 3 is odd but not prime, so the statement is disproved (1)` },

      { q: 'Disprove the statement "2ⁿ − 1 is prime for every positive integer n".', marks: 3, markScheme: `• Choose a counter-example, n = 4 (1)\n• 2⁴ − 1 = 15 (1)\n• 15 = 3 × 5 is not prime, so the statement is false (1)` },

      { q: 'Disprove the statement "if n is prime then 2ⁿ − 1 is prime".', marks: 3, markScheme: `• Take n = 11, which is prime (1)\n• 2¹¹ − 1 = 2047 (1)\n• 2047 = 23 × 89, which is not prime, so the statement is disproved (1)` },

      { q: 'The expression n² − n + 41 gives a prime number for n = 1, 2, …, 40. Explain why this does not prove that it is prime for every positive integer n, and give a value of n for which it fails.', marks: 3, markScheme: `• Checking finitely many cases cannot establish a statement about infinitely many integers (1)\n• At n = 41 the expression equals 41² − 41 + 41 = 41² (1)\n• 41² is divisible by 41 and so is not prime; the statement is therefore false (1)` },

      { q: 'Disprove the statement "x² > x for all real numbers x".', marks: 2, markScheme: `• Take a counter-example with 0 < x < 1, e.g. x = ½ (1)\n• (½)² = ¼ < ½, so the statement fails (1)` },

      { q: 'Explain why a single example can disprove a general statement but cannot prove one.', marks: 2, markScheme: `• A general statement claims something for every case, so one failing case makes it false (1)\n• One successful case leaves infinitely many others unchecked, so it establishes nothing in general (1)` },

      { q: 'Prove by exhaustion that n² leaves a remainder of 0 or 1 when divided by 4, for every integer n.', marks: 4, markScheme: `• State that every integer is either even or odd, so these two cases are exhaustive (1)\n• If n = 2k then n² = 4k², remainder 0 (1)\n• If n = 2k + 1 then n² = 4k² + 4k + 1 = 4(k² + k) + 1, remainder 1 (1)\n• The two cases cover all integers, so the statement holds (1)` },

      { q: 'Prove by exhaustion that if 3 does not divide n, then n² leaves a remainder of 1 when divided by 3.', marks: 4, markScheme: `• If 3 ∤ n then n is of the form 3k + 1 or 3k + 2 — state that these cases are exhaustive (1)\n• n = 3k + 1: n² = 9k² + 6k + 1 = 3(3k² + 2k) + 1 (1)\n• n = 3k + 2: n² = 9k² + 12k + 4 = 3(3k² + 4k + 1) + 1 (1)\n• In both cases the remainder is 1; conclusion stated (1)` },

      { q: 'Explain what is meant by proof by exhaustion, and state one limitation of the method.', marks: 3, markScheme: `• A proof that establishes a result by checking every case of a finite set of cases (1)\n• Each case must be verified and the cases must together cover all possibilities (1)\n• Limitation: it cannot be used when there are infinitely many cases, unless they can first be reduced to finitely many classes (1)` },

      { q: 'Prove by contradiction that √2 is irrational.', marks: 5, markScheme: `• Assume for contradiction that √2 is rational, so √2 = p/q with p, q integers, q ≠ 0, and the fraction in its lowest terms (1)\n• Squaring and rearranging gives p² = 2q², so p² is even and therefore p is even (1)\n• Write p = 2k, so 4k² = 2q², giving q² = 2k², so q² is even and therefore q is even (1)\n• p and q are both even, contradicting the assumption that p/q was in its lowest terms (1)\n• Therefore the assumption is false and √2 is irrational (1)` },

      { q: 'In the proof that √2 is irrational, explain why the assumption that p/q is in its lowest terms is essential.', marks: 2, markScheme: `• The contradiction reached is that p and q share a common factor of 2 (1)\n• Without the assumption of lowest terms this would not be a contradiction, so the proof would fail (1)` },

      { q: 'Explain why the standard proof that √2 is irrational cannot be adapted to show that √4 is irrational.', marks: 3, markScheme: `• The adapted argument would require the step "p² divisible by 4 ⇒ p divisible by 4" (1)\n• This step is false — for example p = 2 gives p² = 4, which is divisible by 4, while p is not (1)\n• The proof therefore breaks down, as it must, since √4 = 2 is rational (1)` },

      { q: 'Prove by contradiction that √3 is irrational, stating clearly the divisibility fact you use.', marks: 5, markScheme: `• Assume √3 = p/q with p, q integers, q ≠ 0, in lowest terms (1)\n• p² = 3q², so 3 divides p² (1)\n• State and use the fact that if 3 divides a² then 3 divides a, hence p = 3k (1)\n• 9k² = 3q² gives q² = 3k², so 3 divides q² and hence q (1)\n• p and q share a factor 3, contradicting lowest terms; therefore √3 is irrational (1)` },

      { q: 'Prove that there are infinitely many prime numbers.', marks: 6, markScheme: `• Assume for contradiction that there are finitely many primes p₁, p₂, …, pₙ (1)\n• Define N = p₁p₂⋯pₙ + 1 (1)\n• Each pᵢ divides the product, so N leaves remainder 1 on division by each pᵢ (1)\n• Hence no prime in the list divides N (1)\n• Since N > 1, either N is prime or it has a prime factor not in the list (1)\n• Either case contradicts the list being complete, so there are infinitely many primes (1)` },

      { q: "A student writes: 'In Euclid's proof, N = p₁p₂⋯pₙ + 1 must be prime.' Explain why this is incorrect, and give a numerical example.", marks: 3, markScheme: `• N need only fail to be divisible by any prime in the list; it may still be composite (1)\n• Example: with the list 2, 3, 5, 7, 11, 13 we get N = 30031 (1)\n• 30031 = 59 × 509, so N is composite, but both factors are primes outside the list — which is all the proof requires (1)` },

      { q: 'Prove by contradiction that there is no smallest positive rational number.', marks: 4, markScheme: `• Assume for contradiction that there is a smallest positive rational, r > 0 (1)\n• Consider r/2, which is rational since r is (1)\n• 0 < r/2 < r, so r/2 is a positive rational smaller than r (1)\n• This contradicts r being smallest, so no smallest positive rational exists (1)` },

      { q: 'Prove by contradiction that if n² is even then n is even.', marks: 4, markScheme: `• Assume n² is even but n is odd (1)\n• Write n = 2k + 1 (1)\n• Then n² = 4k² + 4k + 1 = 2(2k² + 2k) + 1, which is odd (1)\n• This contradicts n² being even, so n must be even (1)` },

      { q: 'Explain the structure of a proof by contradiction, setting out the steps in order.', marks: 4, markScheme: `• Assume the negation of the statement to be proved (1)\n• Reason correctly forwards from that assumption (1)\n• Reach a contradiction — of the assumption itself, of a known result, or of a definition (1)\n• Conclude that the assumption is false and hence the original statement is true (1)` },

      { q: 'Write down the negation of each of the following: (a) all swans are white; (b) for every x, P(x) is true; (c) x > 3.', marks: 3, markScheme: `• (a) There exists a swan that is not white (1)\n• (b) There exists an x for which P(x) is false (1)\n• (c) x ≤ 3 (1)` },

      { q: 'A student claims that the negation of "all swans are white" is "no swans are white". Explain why this is wrong.', marks: 2, markScheme: `• The negation only requires that the statement fails in at least one case (1)\n• "No swans are white" is a much stronger claim; the correct negation is "there exists a swan that is not white" (1)` },

      { q: 'Prove that if a and b are both odd, then a² + b² is even but not divisible by 4.', marks: 5, markScheme: `• Write a = 2m + 1 and b = 2n + 1 with m, n integers (1)\n• a² + b² = (4m² + 4m + 1) + (4n² + 4n + 1) (1)\n• = 4(m² + m + n² + n) + 2 (1)\n• This is 2 × an odd-shaped expression, so it is even (1)\n• It leaves remainder 2 on division by 4, so it is not divisible by 4; conclusion stated (1)` },

      { q: 'Prove that (2n + 1)² − (2n − 1)² = 8n for all integers n, and state what this shows about consecutive odd squares.', marks: 3, markScheme: `• Expand both squares: 4n² + 4n + 1 and 4n² − 4n + 1 (1)\n• Subtract to obtain 8n (1)\n• Hence the difference between the squares of consecutive odd numbers is always a multiple of 8 (1)` },

      { q: 'Use the contrapositive to prove that if n² is odd then n is odd.', marks: 4, markScheme: `• State the contrapositive: if n is even then n² is even (1)\n• Let n = 2k (1)\n• n² = 4k² = 2(2k²), which is even (1)\n• The contrapositive is proved, and since it is logically equivalent to the original, the original statement holds (1)` },

      { q: 'Explain what is meant by the statement "without loss of generality", and give an example of when it may legitimately be used.', marks: 3, markScheme: `• It means a particular case may be assumed because the remaining cases follow by an identical argument (1)\n• It is legitimate when the situation is symmetric in the quantities concerned (1)\n• Example: in proving a result about two integers a and b, assuming a ≤ b, since otherwise the labels may simply be exchanged (1)` },

      { q: 'Prove that the sum of a rational number and an irrational number is always irrational.', marks: 4, markScheme: `• Let r be rational and x irrational, and assume for contradiction that r + x is rational, say s (1)\n• Then x = s − r (1)\n• The difference of two rationals is rational, so x would be rational (1)\n• This contradicts x being irrational; hence r + x is irrational (1)` },

      { q: 'Show that the statement "x² = 4 ⇒ x = 2" is false, and write down a correct statement using the appropriate symbol.', marks: 3, markScheme: `• x = −2 also satisfies x² = 4, so the implication fails (1)\n• A correct statement is x = 2 ⇒ x² = 4 (1)\n• Or, using the full solution set, x² = 4 ⇔ x = 2 or x = −2 (1)` },

      { q: 'Explain the difference between the symbols ⇒ and ⇔, giving one example of each.', marks: 4, markScheme: `• ⇒ means "implies": if the left-hand statement is true then the right-hand one is (1)\n• Example: x = 3 ⇒ x² = 9 (1)\n• ⇔ means "if and only if": each statement implies the other (1)\n• Example: x + 1 = 4 ⇔ x = 3 (1)` },

      { q: 'Prove that n³ − n is divisible by 6 for every integer n.', marks: 5, markScheme: `• Factorise n³ − n = n(n² − 1) = (n − 1)n(n + 1) (1)\n• This is the product of three consecutive integers (1)\n• At least one of any three consecutive integers is even, so the product is divisible by 2 (1)\n• Exactly one of any three consecutive integers is divisible by 3, so the product is divisible by 3 (1)\n• Since 2 and 3 are coprime, the product is divisible by 6; conclusion stated (1)` },

      { q: 'Prove by contradiction that √2 + √3 is irrational. You may assume that √6 is irrational.', marks: 5, markScheme: `• Assume √2 + √3 = r, a rational number (1)\n• Square both sides: 2 + 2√6 + 3 = r², so 5 + 2√6 = r² (1)\n• Rearrange to √6 = (r² − 5)/2 (1)\n• The right-hand side is rational, since r is rational (1)\n• This contradicts the assumption that √6 is irrational, so √2 + √3 is irrational (1)` },

      { q: 'Define the terms axiom, lemma and corollary as used in mathematical writing.', marks: 3, markScheme: `• Axiom — a statement assumed to be true without proof (1)\n• Lemma — a smaller result proved as a step towards a larger theorem (1)\n• Corollary — a result that follows readily from a theorem already proved (1)` },

      { q: 'A student attempts to prove that the sum of two even numbers is even by writing "let the numbers be 2n and 2n". Identify the error and give a correct proof.', marks: 4, markScheme: `• The error is using the same letter for both numbers, which only proves the case where they are equal (1)\n• Correct start: let the numbers be 2a and 2b, where a and b are integers (1)\n• Sum = 2a + 2b = 2(a + b) (1)\n• This is 2 × an integer, hence even; conclusion stated (1)` },

      { q: 'Explain why proof by contradiction is a logically valid method of proof.', marks: 3, markScheme: `• A statement and its negation cannot both be true (1)\n• If assuming the negation leads to an impossibility, the negation must be false (1)\n• Therefore the original statement must be true (1)` },
    ]
  },

};

if (typeof module !== 'undefined') { module.exports = MATHS_OCR_B_ALEVEL_PRACTICE; }
