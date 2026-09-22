// Edexcel A-Level Mathematics (9MA0) — Statistics S1–S5
// MCQ Question Bank: 12 green + 12 amber + 6 red per topic = 30 per topic, 150 total
// Format: { q, options: [correct, wrong1, wrong2, wrong3], answer: 0 }

const EDEXCEL_MCQ_S1_S5 = {

  // ─────────────────────────────────────────────
  // S1: Statistical Sampling
  // ─────────────────────────────────────────────
  S1: [
    // --- GREEN (12) ---
    { tier: 'green', q: 'What is a population in statistics?', options: ['The sampling frame only', 'The entire group being studied', 'A subset selected for study', 'The mean of the data'], answer: 1 },
    { tier: 'green', q: 'What is a census?', options: ['A method of stratified sampling', 'A list of all sampling units', 'A survey of every member of the population', 'A random sample of 10% of the population'], answer: 2 },
    { tier: 'green', q: 'Which sampling method requires a complete sampling frame?', options: ['Quota sampling','Opportunity sampling','Snowball sampling','Simple random sampling'], answer: 3 },
    { tier: 'green', q: 'In systematic sampling with N = 400 and n = 20, what is the sampling interval k?', options: ['20', '400', '8', '40'], answer: 0 },
    { tier: 'green', q: 'A school has 300 boys and 200 girls. A stratified sample of 50 is needed. How many boys should be selected?', options: ['15', '30', '20', '25'], answer: 1 },
    { tier: 'green', q: 'Which sampling method is most likely to produce a biased sample?', options: ['Simple random sampling', 'Systematic sampling', 'Opportunity sampling', 'Stratified sampling'], answer: 2 },
    { tier: 'green', q: 'What does a sampling frame provide?', options: ['The sample size', 'The population mean', 'The sampling interval', 'A complete list of all members of the population'], answer: 3 },
    { tier: 'green', q: 'In quota sampling, how are individuals selected within each quota?', options: ['Non-randomly by the researcher', 'Using a random number generator', 'In systematic order', 'From a sampling frame'], answer: 0 },
    { tier: 'green', q: 'State one advantage of a census over a sample survey.', options: ['Requires no sampling frame', 'Gives completely accurate results for the whole population', 'Cheaper to carry out', 'Quicker to complete'], answer: 1 },
    { tier: 'green', q: 'State one disadvantage of a census.', options: ['Cannot be used for large populations', 'Requires a sampling frame', 'Very expensive and time-consuming for large populations', 'Always produces biased results'], answer: 2 },
    { tier: 'green', q: 'Which type of sampling ensures proportional representation of subgroups?', options: ['Systematic sampling', 'Opportunity sampling', 'Quota sampling', 'Stratified sampling'], answer: 3 },
    { tier: 'green', q: 'A researcher stands outside a shopping centre and surveys the first 50 people who pass. Which method is this?', options: ['Opportunity sampling', 'Systematic sampling', 'Stratified sampling', 'Simple random sampling'], answer: 0 },

    // --- AMBER (12) ---
    { tier: 'amber', q: 'A factory has 180 day-shift and 120 night-shift workers. A stratified sample of 30 is required. How many night-shift workers should be included?', options: ['10', '12', '18', '15'], answer: 1 },
    { tier: 'amber', q: 'State one disadvantage of systematic sampling.', options: ['It requires quotas to be filled', 'It cannot be used with large populations', 'Periodic patterns in the list can introduce bias', 'It never produces a representative sample'], answer: 2 },
    { tier: 'amber', q: 'Which of the following is an example of non-response bias?', options: ['Selecting every 10th person on a list', 'Using leading questions in a survey', 'Sampling only from one location', 'Surveys returned only by strongly-opinionated respondents'], answer: 3 },
    { tier: 'amber', q: 'For a simple random sample from a population of 500, numbers 001–500 are assigned. A random number table gives 623. What should the researcher do?', options: ['Ignore 623 and take the next random number', 'Use 623 − 500 = 123', 'Include the 623rd person from another list', 'Start the random number table again'], answer: 0 },
    { tier: 'amber', q: 'A survey uses random start 7 and interval k = 15. Which is the 3rd member selected?', options: ['7', '37', '22', '52'], answer: 1 },
    { tier: 'amber', q: 'Why might a questionnaire that asks "Don\'t you agree that exercise is important?" produce biased results?', options: ['It uses an open response format', 'The question is too short', 'It is a leading question that encourages agreement', 'The sample size is too small'], answer: 2 },
    { tier: 'amber', q: "A sample of 40 students is taken from 3 year groups of sizes 120, 160, and 80. How many should come from the group of 80?", options: ["16","12","10","9"], answer: 3 },
    { tier: 'amber', q: 'State one advantage of stratified sampling over simple random sampling.', options: ['It ensures proportional representation of each subgroup', 'It does not require a sampling frame', 'It is quicker and cheaper to carry out', 'It eliminates all sampling bias'], answer: 0 },
    { tier: 'amber', q: 'Which of the following is NOT a random sampling method?', options: ['Systematic sampling', 'Quota sampling', 'Simple random sampling', 'Stratified sampling'], answer: 1 },
    { tier: 'amber', q: 'A sample of 60 is needed from a company with 4 departments of sizes 200, 150, 100, 50. How many from the department of size 150?', options: ['12', '6', '18', '24'], answer: 2 },
    { tier: 'amber', q: 'Why does opportunity sampling tend to produce biased results?', options: ['It uses a random selection mechanism', 'It requires stratification of the population', 'It always overestimates the population mean', 'Those available may not be representative of the population'], answer: 3 },
    { tier: 'amber', q: 'In a systematic sample, the random start is 4 and k = 8. What is the 5th number selected?', options: ['36', '40', '44', '32'], answer: 0 },

    // --- RED (6) ---
    { tier: 'red', q: 'A researcher wants a sample of 24 from 3 strata: A(n=180), B(n=120), C(n=60). How many more from A than C?', options: ['4', '8', '6', '10'], answer: 1 },
    { tier: 'red', q: "A company uses systematic sampling with k = 12. If the random start is 9, which of these is NOT in the sample?", options: ["33","45","39","21"], answer: 2 },
    { tier: 'red', q: 'Which sampling method would be most appropriate when no sampling frame exists but subgroup representation is important?', options: ['Simple random sampling', 'Systematic sampling', 'Stratified sampling', 'Quota sampling'], answer: 3 },
    { tier: 'red', q: 'A census is taken of all 60 employees in a small company. Why is this preferable to a sample here?', options: ['The population is small enough that a census is practical and gives exact results', 'A census is always cheaper than a sample', 'Sampling would require a sampling frame', 'A census removes all sources of error'], answer: 0 },
    { tier: 'red', q: 'A sample has a sampling interval k = 25 and random start 17. Which value shows this IS a systematic sample member?', options: ['143', '142', '137', '140'], answer: 1 },
    { tier: 'red', q: 'A researcher claims stratified sampling is always better than simple random sampling. Why is this claim incorrect?', options: ['Stratified sampling cannot be applied to populations with more than two strata', 'Stratified sampling never produces representative samples', 'Stratified sampling requires knowledge of stratum sizes; if wrong, it introduces more bias', 'Simple random sampling is always biased'], answer: 2 },
  ],

  // ─────────────────────────────────────────────
  // S2: Data Presentation and Measures
  // ─────────────────────────────────────────────
  S2: [
    // --- GREEN (12) ---
    { tier: 'green', q: 'The number of goals scored in football matches is an example of which type of data?', options: ['Continuous quantitative', 'Qualitative', 'Ordinal', 'Discrete quantitative'], answer: 3 },
    { tier: 'green', q: 'In a histogram, what does the y-axis represent?', options: ['Frequency density', 'Frequency', 'Relative frequency', 'Cumulative frequency'], answer: 0 },
    { tier: 'green', q: 'How is frequency density calculated?', options: ['Cumulative frequency ÷ class width', 'Frequency ÷ class width', 'Class width ÷ frequency', 'Frequency × class width'], answer: 1 },
    { tier: 'green', q: 'The median is found from a cumulative frequency graph at which value?', options: ['3n/4', 'n', 'n/2', 'n/4'], answer: 2 },
    { tier: 'green', q: 'If \\(Q_1 = 12\\) and \\(Q_3 = 28\\), what is the IQR?', options: ['20', '40', '8', '16'], answer: 3 },
    { tier: 'green', q: 'For data 3, 5, 7, 7, 9, what is the mode?', options: ['7', '5', '9', '6.2'], answer: 0 },
    { tier: 'green', q: 'Which measure of spread is NOT affected by outliers?', options: ['Variance', 'Interquartile range', 'Range', 'Standard deviation'], answer: 1 },
    { tier: 'green', q: 'A data set has \\(\\bar{x} = 50\\) and \\(\\sigma = 10\\). If every value is increased by 5, what is the new mean?', options: ['60', '45', '55', '50'], answer: 2 },
    { tier: 'green', q: 'For positive skew, which relationship is correct?', options: ['Mean < Median < Mode', 'Mean = Median = Mode', 'Median > Mean > Mode', 'Mean > Median > Mode'], answer: 3 },
    { tier: 'green', q: 'A data set has \\(Q_1 = 10, Q_3 = 30\\). An outlier is defined as more than \\(1.5 \\times IQR\\) from the quartiles. What is the upper fence?', options: ['60', '45', '50', '70'], answer: 0 },
    { tier: 'green', q: 'In a box plot, the whisker extends to which value?', options: ['The mean', 'The most extreme value that is NOT an outlier', 'The maximum value in the dataset', '\\(Q_3 + 1.5 \\times IQR\\)'], answer: 1 },
    { tier: 'green', q: 'Which average is most affected by extreme values?', options: ['Mode', 'Midrange', 'Mean', 'Median'], answer: 2 },

    // --- AMBER (12) ---
    { tier: 'amber', q: 'A frequency table gives \\(\\sum fx = 540\\) and \\(\\sum f = 30\\). What is the mean?', options: ['16', '20', '540', '18'], answer: 3 },
    { tier: 'amber', q: 'Data is coded as \\(y = (x - 30)/5\\). If \\(\\bar{y} = 2.4\\), what is \\(\\bar{x}\\)?', options: ['42', '38', '44', '41'], answer: 0 },
    { tier: 'amber', q: 'Data is coded as \\(y = (x - 40)/4\\). If \\(\\sigma_y = 3\\), what is \\(\\sigma_x\\)?', options: ['1.5', '12', '3', '6'], answer: 1 },
    { tier: 'amber', q: 'A histogram bar has class width 10 and frequency 35. What is its frequency density?', options: ['0.35', '25', '3.5', '350'], answer: 2 },
    { tier: 'amber', q: 'A histogram bar has frequency density 4 and class width 5. What frequency does it represent?', options: ['0.8', '9', '4', '20'], answer: 3 },
    { tier: 'amber', q: 'Given \\(\\sum fx^2 = 3600\\), \\(\\sum f = 40\\), \\(\\bar{x} = 9\\), find the variance.', options: ['9', '81', '90', '3600'], answer: 0 },
    { tier: 'amber', q: 'A data set has mean 25, \\(\\sum fx^2 = 16250\\), and \\(\\sum f = 20\\). What is the standard deviation?', options: ['187.5', '\\(\\sqrt{187.5}\\) ≈ 13.69', '25', '\\(\\sqrt{625}\\) = 25'], answer: 1 },
    { tier: 'amber', q: 'Data: \\(Q_1 = 15, Q_2 = 22, Q_3 = 35\\). Is the data positively or negatively skewed?', options: ['Symmetric', 'Cannot be determined', 'Positively skewed, since \\(Q_3 - Q_2 > Q_2 - Q_1\\)', 'Negatively skewed, since \\(Q_3 - Q_2 > Q_2 - Q_1\\)'], answer: 2 },
    { tier: 'amber', q: 'Which of the following correctly identifies an outlier given \\(Q_1=20, Q_3=50\\)?', options: ['x = 95, since 95 > 50 + 1.5(30) = 95', 'x = 80, since 80 > 50', 'x = 5, since 5 < 20', 'x = 95 is not an outlier'], answer: 3 },
    { tier: 'amber', q: 'Every value in a dataset is multiplied by 3. What happens to the standard deviation?', options: ['It is multiplied by 3', 'It stays the same', 'It is multiplied by 9', 'It is divided by 3'], answer: 0 },
    { tier: 'amber', q: 'A dataset is negatively skewed. Which measure of central tendency is smallest?', options: ['They are all equal', 'Mean', 'Median', 'Mode'], answer: 1 },
    { tier: 'amber', q: 'A cumulative frequency graph shows 80 values. The upper quartile is read at which cumulative frequency?', options: ['20', '80', '60', '40'], answer: 2 },

    // --- RED (6) ---
    { tier: 'red', q: 'A grouped frequency table gives class 20–30 with frequency 15, and 30–50 with frequency 20. Which class has the higher frequency density?', options: ['30–50, with FD = 2.0', 'Both equal', '20–30, with FD = 15', '20–30, with FD = 1.5 vs FD = 1.0'], answer: 3 },
    { tier: 'red', q: 'Data is coded \\(y = (x-a)/b\\) with \\(\\bar{y}=3, \\sigma_y=2, a=50, b=5\\). Find the variance of x.', options: ['100', '50', '10', '25'], answer: 0 },
    { tier: 'red', q: "A dataset has \\(\\sum fx = 840, \\sum fx^2 = 13980, \\sum f = 60\\). What is the standard deviation?", options: ["\\(\\sqrt{233}\\) ≈ 15.26","\\(\\sqrt{37}\\) ≈ 6.08","14","37"], answer: 1 },
    { tier: 'red', q: 'The heights of 100 plants are recorded. \\(Q_1 = 12\\) cm, \\(Q_3 = 24\\) cm. A plant is 42 cm tall. Is it an outlier, and why?', options: ['No; only values above \\(Q_3 + 2 \\times IQR\\) are outliers', 'Yes; 42 > 24 + 1.5(12) = 42, so it lies exactly on the fence and is classified as an outlier', 'No; it must exceed the fence strictly', 'Yes; any value above \\(Q_3\\) is an outlier'], answer: 2 },
    { tier: 'red', q: "From a histogram, bar [10,15) has height 6 and bar [15,25) has height 3. What is the ratio of their frequencies?", options: ["2:1","1:2","3:2","1:1"], answer: 3 },
    { tier: 'red', q: 'A dataset has coding \\(y = x - 100\\). Given \\(\\bar{y} = -4.2\\) and \\(\\sum(y - \\bar{y})^2 = 504\\) with \\(n = 28\\). Find \\(\\sigma_x\\).', options: ['\\(\\sqrt{18} = 3\\sqrt{2} \\approx 4.24\\)', '18', '3', '\\(\\sqrt{504}\\)'], answer: 0 },
  ],

  // ─────────────────────────────────────────────
  // S3: Probability
  // ─────────────────────────────────────────────
  S3: [
    // --- GREEN (12) ---
    { tier: 'green', q: 'If \\(P(A) = 0.4\\), what is \\(P(A\')\\)?', options: ['0', '0.6', '0.4', '1.4'], answer: 1 },
    { tier: 'green', q: 'Events A and B are mutually exclusive. \\(P(A) = 0.3, P(B) = 0.45\\). Find \\(P(A \\cup B)\\).', options: ['1.05', '0.15', '0.75', '0.135'], answer: 2 },
    { tier: 'green', q: '\\(P(A) = 0.5, P(B) = 0.4, P(A \\cap B) = 0.2\\). Find \\(P(A \\cup B)\\).', options: ['0.2', '0.9', '1.1', '0.7'], answer: 3 },
    { tier: 'green', q: 'If A and B are independent with \\(P(A) = 0.3\\) and \\(P(B) = 0.6\\), find \\(P(A \\cap B)\\).', options: ['0.18', '0.9', '0.12', '0.5'], answer: 0 },
    { tier: 'green', q: 'A fair six-sided die is rolled. What is \\(P(\\text{even or greater than 4})\\)?', options: ['0.333', '0.667', '0.5', '0.833'], answer: 1 },
    { tier: 'green', q: 'A bag contains 3 red and 5 blue balls. One is drawn at random. What is \\(P(\\text{red})\\)?', options: ['5/8', '1/3', '3/8', '3/5'], answer: 2 },
    { tier: 'green', q: 'Which of these is the correct formula for conditional probability?', options: ['\\(P(A|B) = P(A) / P(B)\\)', '\\(P(A|B) = P(A) \\times P(B)\\)', '\\(P(A|B) = P(A \\cup B) - P(B)\\)', '\\(P(A|B) = P(A \\cap B) / P(B)\\)'], answer: 3 },
    { tier: 'green', q: 'If \\(\\sum P(X=x) = 0.85\\) for x = 1,2,3 and \\(P(X=4) = k\\), what is k?', options: ['0.15', '0.85', '0.05', '1'], answer: 0 },
    { tier: 'green', q: 'For a discrete distribution: \\(E(X) = 1(0.2) + 2(0.3) + 3(0.5)\\). What is \\(E(X)\\)?', options: ['3.0', '2.3', '2.0', '1.8'], answer: 1 },
    { tier: 'green', q: 'Two events A and B are independent. \\(P(A) = 0.4, P(B) = 0.5\\). Find \\(P(A|B)\\).', options: ['0.2', '0.8', '0.4', '0.5'], answer: 2 },
    { tier: 'green', q: 'In a Venn diagram, the region outside both circles A and B represents:', options: ['\\(P(A \\cap B)\\)', '\\(P(A \\cup B)\\)', '\\(P(A\' \\cap B)\\)', '\\(P((A \\cup B)\')\\)'], answer: 3 },
    { tier: 'green', q: 'On a tree diagram, when multiplying along a branch, you are using which rule?', options: ['The multiplication rule for probability', 'The addition rule', 'The complement rule', 'Bayes\' theorem'], answer: 0 },

    // --- AMBER (12) ---
    { tier: 'amber', q: '\\(P(A) = 0.6, P(B|A) = 0.3, P(B|A\') = 0.5\\). Find \\(P(B)\\).', options: ['0.8', '0.38', '0.3', '0.5'], answer: 1 },
    { tier: 'amber', q: '\\(P(A \\cap B) = 0.12, P(B) = 0.4\\). Find \\(P(A|B)\\).', options: ['0.048', '0.4', '0.3', '0.12'], answer: 2 },
    { tier: 'amber', q: "X has distribution: \\(P(X=1)=0.3, P(X=2)=0.5, P(X=3)=0.2\\). Find \\(E(X^2)\\).", options: ["1.9","3.61","2.0","4.1"], answer: 3 },
    { tier: 'amber', q: 'Given \\(E(X)=2.5\\) and \\(E(X^2)=7.5\\), find \\(\\text{Var}(X)\\).', options: ['1.25', '3.75', '7.5', '6.25'], answer: 0 },
    { tier: 'amber', q: '\\(P(A) = 0.5, P(B) = 0.4, P(A \\cup B) = 0.7\\). Are A and B independent?', options: ['No; \\(P(A \\cap B) = 0.7 - 0.5 = 0.2\\) is not equal to \\(P(A) \\times P(B) = 0.9\\)', 'Yes; since \\(P(A \\cap B) = 0.2 = 0.5 \\times 0.4\\)', 'No; mutually exclusive events cannot be independent', 'Cannot be determined'], answer: 1 },
    { tier: 'amber', q: 'A card is drawn from a standard deck. Given it is a heart, what is the probability it is a king?', options: ['4/13', '1/52', '1/13', '1/4'], answer: 2 },
    { tier: 'amber', q: 'Two dice are rolled. Find \\(P(\\text{sum} = 7)\\).', options: ['1/12', '5/36', '7/36', '1/6'], answer: 3 },
    { tier: 'amber', q: 'A box has 4 red and 6 blue balls. Two drawn without replacement. Find \\(P(\\text{both red})\\).', options: ['12/90 = 2/15', '16/100', '4/10 × 4/10 = 4/25', '1/6'], answer: 0 },
    { tier: 'amber', q: 'X has \\(P(X=0)=0.1, P(X=1)=0.3, P(X=2)=0.4, P(X=3)=0.2\\). Find \\(\\text{Var}(X)\\).', options: ['1.31', '0.81', '1.7', '2.89'], answer: 1 },
    { tier: 'amber', q: '\\(P(A) = 0.7, P(A \\cap B) = 0.42\\). Find \\(P(B|A)\\).', options: ['0.3', '0.294', '0.6', '0.42'], answer: 2 },
    { tier: 'amber', q: 'A and B are mutually exclusive. Can they be independent (assuming both have non-zero probability)?', options: ['Yes, always', 'Yes, if \\(P(A) + P(B) = 1\\)', 'Only if \\(P(A) = P(B)\\)', 'No; if mutually exclusive, \\(P(A \\cap B) = 0 \\neq P(A)P(B)\\)'], answer: 3 },
    { tier: 'amber', q: '\\(P(A\') = 0.35, P(B|A) = 0.4, P(B|A\') = 0.6\\). Find \\(P(A \\cap B)\\).', options: ['0.26', '0.4', '0.21', '0.6'], answer: 0 },

    // --- RED (6) ---
    { tier: 'red', q: '\\(P(A) = 0.6, P(B) = 0.5, P(A \\cup B) = 0.8\\). Find \\(P(A|B\')\\).', options: ['0.5', '0.6', '0.4', '0.3'], answer: 1 },
    { tier: 'red', q: 'A test for a disease has sensitivity 0.95 and specificity 0.90. The disease affects 1% of the population. A person tests positive. Find \\(P(\\text{disease}|\\text{positive})\\) to 3 s.f.', options: ['0.01', '0.5', '0.0876', '0.95'], answer: 2 },
    { tier: 'red', q: 'X has \\(P(X=x) = kx\\) for x = 1, 2, 3, 4. Find k.', options: ['0.25', '1/4', '0.4', '0.1'], answer: 3 },
    { tier: 'red', q: "For a discrete RV with \\(E(X) = 3\\) and \\(E(X^2) = 11\\), what is the standard deviation of X?", options: ["\\(\\sqrt{2}\\)","2","\\(\\sqrt{11}\\)","\\(\\sqrt{20}\\)"], answer: 0 },
    { tier: 'red', q: 'Three events A, B, C are such that \\(P(A) = 0.3, P(B) = 0.4, P(C) = 0.2\\) and all are mutually exclusive. Find \\(P(A \\cup B \\cup C)\\).', options: ['0.7', '0.9', '0.024', '1.0'], answer: 1 },
    { tier: 'red', q: '\\(P(A \\cap B) = 0.15, P(A \\cap B\') = 0.25, P(A\' \\cap B) = 0.3\\). Find \\(P(A\' \\cap B\')\\).', options: ['0.45', '0.7', '0.3', '0.15'], answer: 2 },
  ],

  // ─────────────────────────────────────────────
  // S4: Binomial Distribution
  // ─────────────────────────────────────────────
  S4: [
    // --- GREEN (12) ---
    { tier: 'green', q: 'Which notation indicates X follows a binomial distribution with 10 trials and probability 0.3?', options: ['\\(X \\sim N(10, 0.3)\\)', '\\(X \\sim B(0.3, 10)\\)', '\\(X = B(10, 0.3)\\)', '\\(X \\sim B(10, 0.3)\\)'], answer: 3 },
    { tier: 'green', q: 'Which is NOT a condition for a binomial distribution?', options: ['The trials must be dependent', 'Fixed number of trials', 'Constant probability of success', 'Only two outcomes per trial'], answer: 0 },
    { tier: 'green', q: 'If \\(X \\sim B(8, 0.5)\\), what is \\(E(X)\\)?', options: ['8', '4', '0.5', '2'], answer: 1 },
    { tier: 'green', q: 'If \\(X \\sim B(10, 0.4)\\), what is \\(\\text{Var}(X)\\)?', options: ['0.24', '10', '2.4', '4'], answer: 2 },
    { tier: 'green', q: '\\(X \\sim B(5, 0.5)\\). Find \\(P(X = 2)\\).', options: ['1/32', '5/32', '4/32', '10/32'], answer: 3 },
    { tier: 'green', q: 'If \\(X \\sim B(n,p)\\), which formula gives \\(P(X = r)\\)?', options: ['\\(\\binom{n}{r}p^r(1-p)^{n-r}\\)', '\\(np^r(1-p)^{n-r}\\)', '\\(\\binom{n}{r}p^{n-r}(1-p)^r\\)', '\\(p^r(1-p)^{n-r}\\)'], answer: 0 },
    { tier: 'green', q: '\\(X \\sim B(20, 0.3)\\). How do you calculate \\(P(X \\geq 5)\\)?', options: ['\\(P(X = 5) + P(X = 6) + \\ldots + P(X = 20)\\) only', '\\(1 - P(X \\leq 4)\\)', '\\(1 - P(X \\leq 5)\\)', '\\(P(X \\leq 5)\\)'], answer: 1 },
    { tier: 'green', q: 'For \\(X \\sim B(12, 0.25)\\), the standard deviation is:', options: ['2.25', '\\(\\sqrt{3}\\)', '\\(\\sqrt{12 \\times 0.25 \\times 0.75} = \\sqrt{2.25} = 1.5\\)', '3'], answer: 2 },
    { tier: 'green', q: '\\(X \\sim B(10, 0.3)\\). \\(P(X \\leq 3) = 0.6496\\). Find \\(P(X \\geq 4)\\).', options: ['0.6496', '0.2001', '0.4', '0.3504'], answer: 3 },
    { tier: 'green', q: "A fair coin is flipped 6 times. What is the probability of exactly 3 heads?", options: ["5/16","1/8","1/2","15/64"], answer: 0 },
    { tier: 'green', q: 'Which of these scenarios is best modelled by a binomial distribution?', options: ['Counting the number of different colours in a box', 'Rolling a die 20 times and counting sixes', 'Recording the exact height of 20 students', 'Measuring the time to complete a task'], answer: 1 },
    { tier: 'green', q: 'For \\(X \\sim B(n,p)\\), as n increases and p remains constant, the distribution becomes:', options: ['Unchanged', 'More concentrated around 0', 'More bell-shaped and symmetric', 'More skewed'], answer: 2 },

    // --- AMBER (12) ---
    { tier: 'amber', q: '\\(X \\sim B(15, 0.4)\\). Using a calculator, \\(P(X \\leq 7) = 0.7869\\). Find \\(P(X > 7)\\).', options: ['0.7869', '0.4131', '0.1', '0.2131'], answer: 3 },
    { tier: 'amber', q: '\\(X \\sim B(20, 0.35)\\). Find \\(P(5 \\leq X \\leq 9)\\) given \\(P(X \\leq 9) = 0.8782\\) and \\(P(X \\leq 4) = 0.1182\\).', options: ['0.7600', '0.8782', '0.6', '0.1182'], answer: 0 },
    { tier: 'amber', q: 'A biased coin has \\(P(\\text{heads}) = 0.6\\). It is tossed 8 times. Find \\(P(X = 5)\\) where X = number of heads.', options: ['0.12', '0.2787', '0.5', '0.3483'], answer: 1 },
    { tier: 'amber', q: '\\(X \\sim B(10, p)\\) and \\(E(X) = 3\\). Find p.', options: ['3', '0.03', '0.3', '0.7'], answer: 2 },
    { tier: 'amber', q: '\\(X \\sim B(n, 0.25)\\) and \\(\\text{Var}(X) = 3\\). Find n.', options: ['12', '48', '4', '16'], answer: 3 },
    { tier: 'amber', q: 'A student guesses all 10 answers on a multiple-choice test (4 options each). Find \\(P(\\text{at least 3 correct})\\).', options: ['0.4744', '0.2503', '0.25', '0.5'], answer: 0 },
    { tier: 'amber', q: '\\(X \\sim B(8, 0.3)\\). Find \\(P(X < 3)\\).', options: ['0.2553', '0.5518', '0.3828', '0.6496'], answer: 1 },
    { tier: 'amber', q: 'Why is a binomial model NOT appropriate for selecting 5 people from a group of 20 without replacement?', options: ['The number of trials is not fixed', 'p is not constant by definition of binomial', 'The probability changes after each selection, so trials are not independent', 'There are more than two outcomes'], answer: 2 },
    { tier: 'amber', q: '\\(X \\sim B(12, 0.4)\\). Find \\(P(X = 0)\\).', options: ['0.4', '\\(0.4^{12}\\)', '0', '\\(0.6^{12} \\approx 0.00218\\)'], answer: 3 },
    { tier: 'amber', q: '\\(X \\sim B(20, 0.5)\\). Find \\(P(8 \\leq X \\leq 12)\\) given \\(P(X \\leq 12) = 0.8684\\) and \\(P(X \\leq 7) = 0.1316\\).', options: ['0.7368', '0.8684', '0.5', '0.6'], answer: 0 },
    { tier: 'amber', q: 'The mean of \\(B(n,p)\\) is 6 and variance is 4.2. Find n and p.', options: ['n = 6, p = 1', 'n = 20, p = 0.3', 'n = 12, p = 0.5', 'n = 10, p = 0.6'], answer: 1 },
    { tier: 'amber', q: '30 seeds are planted. Each has probability 0.8 of germinating, independently. Find \\(P(X = 30)\\).', options: ['0', '1', '\\(0.8^{30} \\approx 0.00124\\)', '0.8'], answer: 2 },

    // --- RED (6) ---
    { tier: 'red', q: '\\(X \\sim B(15, 0.35)\\). Find the smallest value of r such that \\(P(X \\leq r) > 0.9\\).', options: ['5', '7', '6', '8'], answer: 3 },
    { tier: 'red', q: 'A factory has a 5% defect rate. A sample of 40 items is inspected. Find \\(P(\\text{at most 1 defective})\\) to 3 s.f.', options: ['0.399', '0.191', '0.278', '0.640'], answer: 0 },
    { tier: 'red', q: '\\(X \\sim B(n, 0.4)\\). Given \\(P(X = 0) < 0.01\\), find the minimum value of n.', options: ['9', '10', '8', '11'], answer: 1 },
    { tier: 'red', q: 'X and Y are independent, \\(X \\sim B(5, 0.3)\\), \\(Y \\sim B(4, 0.3)\\). Find \\(P(X + Y = 0)\\).', options: ['\\(0.3^9\\)', '0.49', '\\(0.7^9 \\approx 0.0404\\)', '\\(0.7^{20}\\)'], answer: 2 },
    { tier: 'red', q: 'For \\(X \\sim B(20, p)\\), it is given that \\(P(X=0) = P(X=1)\\). Find p.', options: ['\\(p = 0.05\\)', '\\(p = 1/20\\)', '\\(p = 0.5\\)', '\\(p = 1/21\\)'], answer: 3 },
    { tier: 'red', q: 'An archer hits a target with probability 0.7 per shot. How many shots must they take so that \\(P(\\text{at least one hit}) > 0.999\\)?', options: ['6', '8', '7', '5'], answer: 0 },
  ],

  // ─────────────────────────────────────────────
  // S5: Hypothesis Testing — Binomial
  // ─────────────────────────────────────────────
  S5: [
    // --- GREEN (12) ---
    { tier: 'green', q: 'In hypothesis testing, what does \\(H_0\\) represent?', options: ['The observed test statistic', 'The null hypothesis; the default assumption', 'The alternative hypothesis', 'The significance level'], answer: 1 },
    { tier: 'green', q: 'A hypothesis test is stated as \\(H_1: p > 0.5\\). Is this one-tailed or two-tailed?', options: ['One-tailed (lower)', 'Cannot be determined', 'One-tailed (upper)', 'Two-tailed'], answer: 2 },
    { tier: 'green', q: 'What is the significance level in a hypothesis test?', options: ['The probability that \\(H_0\\) is true', 'The p-value of the test', 'The observed value of the test statistic', 'The maximum probability of incorrectly rejecting \\(H_0\\)'], answer: 3 },
    { tier: 'green', q: 'When do we reject \\(H_0\\) using the p-value method?', options: ['When the p-value is less than the significance level', 'When the p-value is greater than the significance level', 'When the observed value equals \\(np\\)', 'When the test statistic is positive'], answer: 0 },
    { tier: 'green', q: 'For a one-tailed upper test at 5%, if \\(P(X \\geq x_{obs}) = 0.03\\), what is the correct conclusion?', options: ['The test is inconclusive', 'Reject \\(H_0\\); there is sufficient evidence at 5%', 'Do not reject \\(H_0\\); the p-value is too large', 'Accept \\(H_0\\)'], answer: 1 },
    { tier: 'green', q: 'A two-tailed test is used at the 10% significance level. What significance level is used in each tail?', options: ['2.5%', '1%', '5%', '10%'], answer: 2 },
    { tier: 'green', q: 'What is a Type I error?', options: ['Failing to reject \\(H_0\\) when it is false', 'Accepting \\(H_1\\) when it is false', 'A calculation error in the test statistic', 'Rejecting \\(H_0\\) when it is true'], answer: 3 },
    { tier: 'green', q: 'What is a Type II error?', options: ['Failing to reject \\(H_0\\) when \\(H_0\\) is false', 'Rejecting \\(H_0\\) when it is true', 'Using the wrong significance level', 'Setting up the wrong \\(H_1\\)'], answer: 0 },
    { tier: 'green', q: 'Under \\(H_0: p = 0.4\\), a binomial test is conducted with \\(n = 20\\). What distribution is assumed for X?', options: ['\\(X \\sim B(20, 0.5)\\)', '\\(X \\sim B(20, 0.4)\\)', '\\(X \\sim B(0.4, 20)\\)', '\\(X \\sim N(8, 4.8)\\)'], answer: 1 },
    { tier: 'green', q: 'The phrase "there is sufficient evidence at the 5% significance level to..." follows which decision?', options: ['Accepting \\(H_0\\)', 'Finding the critical region', 'Rejecting \\(H_0\\)', 'Not rejecting \\(H_0\\)'], answer: 2 },
    { tier: 'green', q: 'When should you use a two-tailed test?', options: ['When the sample size is large', 'When the significance level is 1%', 'When \\(p > 0.5\\)', 'When \\(H_1\\) states the proportion has changed (increased or decreased)'], answer: 3 },
    { tier: 'green', q: 'The critical region of a test is the set of values that leads to:', options: ['Rejection of \\(H_0\\)', 'Acceptance of \\(H_0\\)', 'No conclusion', 'A larger p-value'], answer: 0 },

    // --- AMBER (12) ---
    { tier: 'amber', q: '\\(H_0: p = 0.3, H_1: p > 0.3, n = 20\\). Observed \\(x = 10\\). \\(P(X \\geq 10) = 0.048\\) under \\(H_0\\). Test at 5%. What is the conclusion?', options: ['Inconclusive', 'Reject \\(H_0\\); there is sufficient evidence that \\(p > 0.3\\)', 'Do not reject \\(H_0\\); p-value > 0.05', 'Accept \\(H_1\\) at 10% but not 5%'], answer: 1 },
    { tier: 'amber', q: '\\(H_0: p = 0.5, H_1: p < 0.5, n = 15\\). Find the critical region at 5% given: \\(P(X \\leq 3) = 0.0176, P(X \\leq 4) = 0.0592\\).', options: ['\\(X \\leq 5\\)', '\\(X \\geq 12\\)', '\\(X \\leq 3\\)', '\\(X \\leq 4\\)'], answer: 2 },
    { tier: 'amber', q: 'A coin is tossed 25 times and gives 8 heads. Test \\(H_0: p = 0.5, H_1: p < 0.5\\) at 5%. \\(P(X \\leq 8) = 0.0539\\). Conclusion?', options: ['Reject \\(H_0\\); the p-value is close to 0.05', 'Reject \\(H_0\\); 0.0539 < 0.10', 'Accept \\(H_0\\)', 'Do not reject \\(H_0\\); 0.0539 > 0.05'], answer: 3 },
    { tier: 'amber', q: 'What is the actual significance level if the critical region is \\(X \\leq 2\\) and \\(P(X \\leq 2) = 0.0355\\) under \\(H_0\\)?', options: ['3.55%', '5%', '1%', '10%'], answer: 0 },
    { tier: 'amber', q: '\\(H_0: p = 0.25, H_1: p \\neq 0.25, n = 20, \\alpha = 0.05\\). Which tails are checked?', options: ['Both; use 5% in each tail', 'Both; use \\(\\alpha/2 = 0.025\\) in each tail', 'Upper only; use 5%', 'Lower only; use 5%'], answer: 1 },
    { tier: 'amber', q: 'A researcher claims 40% of people prefer tea. In a sample of 18, only 4 prefer tea. Test at 5%, \\(H_1: p < 0.4\\). \\(P(X \\leq 4) = 0.0563\\). Conclusion?', options: ['Reject \\(H_0\\); p-value < 0.10', 'Accept \\(H_1\\)', 'Do not reject \\(H_0\\); 0.0563 > 0.05', 'Reject \\(H_0\\); close enough'], answer: 2 },
    { tier: 'amber', q: 'For \\(X \\sim B(30, 0.2)\\) under \\(H_0\\), if the critical region is \\(X \\leq 2\\), what is the probability of a Type I error?', options: ['0.05', '0.2', '\\(P(X \\leq 3)\\)', '\\(P(X \\leq 2)\\) under \\(H_0\\)'], answer: 3 },
    { tier: 'amber', q: 'The significance level is set at 1%. For a two-tailed test, the p-value is 0.018. What is the conclusion?', options: ['Do not reject \\(H_0\\); 0.018 > 0.01', 'Reject \\(H_0\\); 0.018 < 0.05', 'Reject \\(H_0\\); 0.018/2 < 0.01', 'Cannot conclude'], answer: 0 },
    { tier: 'amber', q: 'In a two-tailed test at 10% with \\(n=25, p_0=0.4\\): lower critical value requires \\(P(X \\leq c) < 0.05\\). Given \\(P(X \\leq 5) = 0.0294, P(X \\leq 6) = 0.0736\\), find the lower critical value.', options: ['7', '5', '6', '4'], answer: 1 },
    { tier: 'amber', q: 'Why is it wrong to say "we accept \\(H_0\\)" in a hypothesis test?', options: ['\\(H_0\\) is never accepted in any context', 'Accepting \\(H_0\\) implies \\(H_1\\) is false', 'Failing to reject \\(H_0\\) does not prove it is true; it just means insufficient evidence against it', 'We always reject \\(H_0\\) in statistics'], answer: 2 },
    { tier: 'amber', q: 'A doctor tests whether a new drug increases recovery rate above 60%. Set up the hypotheses.', options: ['\\(H_0: p > 0.6, H_1: p = 0.6\\)', '\\(H_0: p = 0.6, H_1: p \\neq 0.6\\)', '\\(H_0: p < 0.6, H_1: p = 0.6\\)', '\\(H_0: p = 0.6, H_1: p > 0.6\\)'], answer: 3 },
    { tier: 'amber', q: "\\(n = 20, H_0: p = 0.45, H_1: p \\neq 0.45, \\alpha = 5\\%\\). Observed \\(x = 13\\). \\(P(X \\geq 13) = 0.0580\\). Compare with \\(\\alpha/2 = 0.025\\). Conclusion?", options: ["Do not reject \\(H_0\\); 0.0580 > 0.025","Reject \\(H_0\\); 0.0580 < 0.10","Reject \\(H_0\\); 13 is well above the expected value of 9","Accept \\(H_1\\)"], answer: 0 },

    // --- RED (6) ---
    { tier: 'red', q: "\\(H_0: p = 0.3, H_1: p > 0.3, n = 25, \\alpha = 5\\%\\). Find the critical region given: \\(P(X \\geq 12) = 0.0442, P(X \\geq 11) = 0.0978\\).", options: ["\\(X \\geq 12\\); actual significance level 5%","\\(X \\geq 12\\); actual significance level 4.42%","\\(X \\geq 11\\); actual significance level 9.78%","\\(X \\geq 13\\)"], answer: 1 },
    { tier: 'red', q: 'A two-tailed test at 5% has critical region \\(X \\leq 3\\) or \\(X \\geq 14\\) for \\(X \\sim B(18, p_0)\\). If \\(P(X \\leq 3) = 0.0154\\) and \\(P(X \\geq 14) = 0.0154\\), what is the actual significance level?', options: ['1.54%', '10%', '3.08%', '5%'], answer: 2 },
    { tier: 'red', q: '\\(H_0: p = 0.2, H_1: p \\neq 0.2, n = 30, \\alpha = 10%\\). Observed \\(x = 2\\). \\(P(X \\leq 2) = 0.0442\\). Compare with \\(\\alpha/2 = 5%\\). State a full conclusion.', options: ['Do not reject; 0.0442 < 0.1', 'Accept \\(H_0\\); inconclusive', 'Reject; any p-value below 0.1 is significant for two-tailed test', 'Reject \\(H_0\\); 0.0442 < 0.05, sufficient evidence at 10% that p ≠ 0.2'], answer: 3 },
    { tier: 'red', q: 'For \\(X \\sim B(20, 0.3)\\) under \\(H_0\\), the critical region is \\(X \\leq 2\\) (lower, 5%). If the true value is \\(p = 0.1\\), what type of error occurs if \\(X = 5\\)?', options: ['Type II error; X is not in the critical region even though \\(H_0\\) is false', 'Type I error; \\(H_0\\) is rejected incorrectly', 'No error; the test works correctly', 'Type II error; \\(H_0\\) is accepted and it is true'], answer: 0 },
    { tier: 'red', q: 'A school claims 35% of students walk to school. A student surveys 40 peers and finds 8 walk. \\(P(X \\leq 8) = 0.0311\\) under \\(H_0: p=0.35\\). Test at 5% with \\(H_1: p < 0.35\\) and write a full conclusion.', options: ['Inconclusive; p-value too close to 5%', 'Reject \\(H_0\\); 0.0311 < 0.05; there is sufficient evidence that fewer than 35% of students walk to school', 'Do not reject; sample too small', 'Accept \\(H_1\\) at 10% but not 5%'], answer: 1 },
    { tier: 'red', q: 'The probability of a Type I error is 0.032. The significance level was set at 5%. Explain the discrepancy.', options: ['The significance level should be 3.2%', 'Type I error probability always equals the significance level exactly', 'The binomial is discrete, so the critical region probability may be less than \\(\\alpha\\); 3.2% is the actual significance level', 'A calculation error was made'], answer: 2 },
  ],

};
