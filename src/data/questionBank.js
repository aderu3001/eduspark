// Question factory
let _id = 1;
export const q = (type, text, opts) => ({
  id: _id++,
  type,
  text,
  ans: opts.ans,
  options: opts.options || null,
  sol: opts.sol || [],
  mc: opts.mc || [],
  hints: opts.hints || [],
  xp: opts.xp || 10,
  diff: opts.diff || 2,
  topic: opts.topic || '',
});

// ─── IGCSE Grade 10 Mathematics – Geometry and Trigonometry ─────────────────
const igcse_g10_geom = [
  q('MCQ', 'A tangent to a circle is drawn from an external point P. If the tangent length is 6 cm and the radius is 4 cm, what is the distance from P to the centre?', {
    ans: 'C', options: ['A. 8 cm', 'B. 9 cm', 'C. √52 cm ≈ 7.2 cm', 'D. 10 cm'],
    sol: ['Use the Pythagorean theorem: PO² = PT² + r²', 'PO² = 6² + 4² = 36 + 16 = 52', 'PO = √52 ≈ 7.21 cm'],
    mc: ['Forgetting that the radius meets the tangent at 90°'],
    hints: ['Draw a radius to the point of tangency', 'The radius is perpendicular to the tangent', 'Use the Pythagorean theorem with PT and r', 'PT=6, r=4, so PO²=PT²+r²'],
    xp: 12, diff: 2, topic: 'Geometry and Trigonometry',
  }),
  q('MCQ', 'The angle in a semicircle is always:', {
    ans: 'B', options: ['A. 45°', 'B. 90°', 'C. 180°', 'D. 60°'],
    sol: ['This is Thales\' theorem', 'Any angle inscribed in a semicircle that subtends the diameter is 90°'],
    mc: ['Confusing the angle at the centre with the angle at the circumference'],
    hints: ['Think about the angle subtended by a diameter', 'Thales\' theorem is the key', 'The diameter subtends a right angle at the circumference', 'Answer: 90°'],
    xp: 8, diff: 1, topic: 'Geometry and Trigonometry',
  }),
  q('MCQ', 'Two tangents are drawn from point P to a circle with centre O. If angle POA = 35°, what is the angle between the two tangents (∠TPT\')?', {
    ans: 'C', options: ['A. 35°', 'B. 55°', 'C. 110°', 'D. 70°'],
    sol: ['The two tangents and the two radii form a quadrilateral', '∠OTP = ∠OT\'P = 90° (radius ⊥ tangent)', 'Sum of angles in quadrilateral = 360°', '∠TPT\' + 90° + ∠TOT\' + 90° = 360°', '∠TOT\' = 2×35° = 70° (angle at centre)', '∠TPT\' = 360° − 90° − 90° − 70° = 110°'],
    mc: ['Not recognising that the two radii subtend twice the given angle at the centre'],
    hints: ['Angles in a quadrilateral sum to 360°', 'Each tangent is perpendicular to the radius', 'Find ∠TOT\' first', 'Use 360° − 90° − 90° − ∠TOT\''],
    xp: 14, diff: 3, topic: 'Geometry and Trigonometry',
  }),
  q('MCQ', 'Which transformation maps triangle ABC to triangle A\'B\'C\' when every point is reflected in the y-axis?', {
    ans: 'A', options: ['A. (x,y) → (−x, y)', 'B. (x,y) → (x, −y)', 'C. (x,y) → (−x, −y)', 'D. (x,y) → (y, x)'],
    sol: ['A reflection in the y-axis negates the x-coordinate', 'The y-coordinate stays the same', 'So the rule is (x, y) → (−x, y)'],
    mc: ['Confusing reflection in x-axis vs y-axis'],
    hints: ['Reflection in y-axis changes the sign of x', 'y stays the same', 'Try with a specific point e.g. (3,2) → (−3,2)', 'Rule: (x,y) → (−x,y)'],
    xp: 10, diff: 2, topic: 'Geometry and Trigonometry',
  }),
  q('NUM', 'A vector v = (3, 4). Calculate |v| (the magnitude).', {
    ans: '5',
    sol: ['|v| = √(vₓ² + vᵧ²)', '|v| = √(3² + 4²) = √(9 + 16) = √25 = 5'],
    mc: ['Adding components directly instead of using Pythagoras'],
    hints: ['Use the Pythagorean theorem for 2D vectors', 'Square both components and add', '√(9+16) = ?', '√25 = 5'],
    xp: 10, diff: 2, topic: 'Geometry and Trigonometry',
  }),
  q('MCQ', 'ABCD is a cyclic quadrilateral. If ∠ABC = 115°, what is ∠ADC?', {
    ans: 'C', options: ['A. 115°', 'B. 180°', 'C. 65°', 'D. 245°'],
    sol: ['Opposite angles of a cyclic quadrilateral sum to 180°', '∠ABC + ∠ADC = 180°', '∠ADC = 180° − 115° = 65°'],
    mc: ['Not applying the cyclic quadrilateral theorem'],
    hints: ['A cyclic quadrilateral has all vertices on a circle', 'Opposite angles are supplementary', '∠ABC + ∠ADC = 180°', '180° − 115° = 65°'],
    xp: 12, diff: 2, topic: 'Geometry and Trigonometry',
  }),
  q('NUM', 'A rotation of 90° anticlockwise about the origin maps point (4, −2) to (x, y). What is x?', {
    ans: '2',
    sol: ['Rotation 90° anticlockwise: (x, y) → (−y, x)', '(4, −2) → (−(−2), 4) = (2, 4)', 'So x = 2'],
    mc: ['Using the clockwise formula instead of anticlockwise'],
    hints: ['90° anticlockwise rule: (x,y)→(−y,x)', 'x becomes −y', 'y becomes the original x', '−(−2) = 2'],
    xp: 12, diff: 3, topic: 'Geometry and Trigonometry',
  }),
  q('MCQ', 'Two chords AB and CD intersect inside a circle at point P. If AP = 4, PB = 6, CP = 3, find PD.', {
    ans: 'B', options: ['A. 6', 'B. 8', 'C. 9', 'D. 12'],
    sol: ['Intersecting chords theorem: AP × PB = CP × PD', '4 × 6 = 3 × PD', '24 = 3 × PD', 'PD = 8'],
    mc: ['Adding instead of multiplying the chord segments'],
    hints: ['Intersecting chords: the products of the segments are equal', 'AP × PB = CP × PD', '4 × 6 = 3 × PD', 'PD = 24/3 = 8'],
    xp: 14, diff: 3, topic: 'Geometry and Trigonometry',
  }),
  q('MCQ', 'A translation maps (2, 5) to (7, 3). What vector describes this translation?', {
    ans: 'A', options: ['A. (5, −2)', 'B. (−5, 2)', 'C. (9, 8)', 'D. (2, 5)'],
    sol: ['Subtract the original coordinates from the image: (7−2, 3−5) = (5, −2)', 'The translation vector is (5, −2)'],
    mc: ['Subtracting in the wrong order'],
    hints: ['Translation vector = image − object', '7 − 2 = 5 for the x-component', '3 − 5 = −2 for the y-component', 'Vector = (5, −2)'],
    xp: 10, diff: 2, topic: 'Geometry and Trigonometry',
  }),
  q('MCQ', 'The angle between a tangent and a chord at the point of tangency is called:', {
    ans: 'D', options: ['A. An inscribed angle', 'B. A central angle', 'C. An alternate segment angle', 'D. A tangent-chord angle'],
    sol: ['The angle between a tangent and a chord drawn from the point of tangency is the tangent-chord angle', 'By the alternate segment theorem it equals the inscribed angle in the alternate segment'],
    mc: ['Confusing tangent-chord angle with inscribed angle'],
    hints: ['The angle is formed at the point where the tangent touches the circle', 'A chord is drawn from that point', 'This is the tangent-chord angle'],
    xp: 8, diff: 1, topic: 'Geometry and Trigonometry',
  }),
];

// ─── IB DP Grade 11 Mathematics – Differential Calculus ─────────────────────
const ib_dp_g11_calc = [
  q('MCQ', 'Differentiate y = (3x² + 2)⁴ using the chain rule.', {
    ans: 'B', options: ['A. 4(3x² + 2)³', 'B. 24x(3x² + 2)³', 'C. 4(6x)³', 'D. 12x(3x² + 2)³'],
    sol: ['Let u = 3x² + 2, so y = u⁴', 'dy/du = 4u³ and du/dx = 6x', 'dy/dx = dy/du × du/dx = 4u³ × 6x = 24x(3x² + 2)³'],
    mc: ['Forgetting to multiply by the derivative of the inner function'],
    hints: ['Identify the inner function u = 3x² + 2', 'Differentiate the outer: 4u³', 'Differentiate the inner: 6x', 'Multiply: 4u³ × 6x'],
    xp: 14, diff: 3, topic: 'Differential Calculus',
  }),
  q('MCQ', 'Find dy/dx if x² + y² = 25 (implicit differentiation).', {
    ans: 'C', options: ['A. y/x', 'B. x', 'C. −x/y', 'D. −y/x'],
    sol: ['Differentiate both sides w.r.t. x', '2x + 2y(dy/dx) = 0', '2y(dy/dx) = −2x', 'dy/dx = −x/y'],
    mc: ['Forgetting to apply the chain rule to the y² term'],
    hints: ['Differentiate both sides with respect to x', 'd/dx(y²) = 2y(dy/dx) by chain rule', 'Solve for dy/dx', '2x + 2y(dy/dx) = 0'],
    xp: 14, diff: 3, topic: 'Differential Calculus',
  }),
  q('MCQ', 'A balloon is being inflated so that its volume V increases at 50 cm³/s. When r = 5 cm, how fast is the radius increasing? (V = 4/3 πr³)', {
    ans: 'B', options: ['A. 50/(4π) cm/s', 'B. 1/(2π) cm/s', 'C. 10π cm/s', 'D. 50π cm/s'],
    sol: ['dV/dt = 4πr²(dr/dt) (chain rule)', '50 = 4π(5)²(dr/dt)', '50 = 100π(dr/dt)', 'dr/dt = 50/(100π) = 1/(2π) cm/s'],
    mc: ['Not using the chain rule for related rates', 'Forgetting to square the radius'],
    hints: ['Differentiate V = 4/3 πr³ with respect to t', 'dV/dt = 4πr²(dr/dt)', 'Substitute dV/dt=50 and r=5', 'Solve for dr/dt'],
    xp: 16, diff: 4, topic: 'Differential Calculus',
  }),
  q('MCQ', 'Differentiate y = x² × sin(x).', {
    ans: 'A', options: ['A. 2x sin(x) + x² cos(x)', 'B. 2x cos(x)', 'C. x² cos(x)', 'D. 2x sin(x)'],
    sol: ['Use the product rule: d/dx(uv) = u\'v + uv\'', 'u = x², u\' = 2x; v = sin(x), v\' = cos(x)', 'dy/dx = 2x sin(x) + x² cos(x)'],
    mc: ['Forgetting the product rule and only differentiating one factor'],
    hints: ['This is a product of two functions', 'Product rule: (uv)\' = u\'v + uv\'', 'u = x², v = sin(x)', 'u\' = 2x, v\' = cos(x)'],
    xp: 12, diff: 2, topic: 'Differential Calculus',
  }),
  q('NUM', 'Find the gradient of y = 3x³ − 5x + 2 at x = 1.', {
    ans: '4',
    sol: ['dy/dx = 9x² − 5', 'At x = 1: dy/dx = 9(1)² − 5 = 9 − 5 = 4'],
    mc: ['Forgetting to evaluate at the given x-value'],
    hints: ['Differentiate term by term', 'Derivative of 3x³ is 9x²', 'Derivative of −5x is −5', 'Substitute x = 1'],
    xp: 10, diff: 2, topic: 'Differential Calculus',
  }),
  q('MCQ', 'Which rule is used to differentiate y = ln(sin(x))?', {
    ans: 'C', options: ['A. Product rule', 'B. Quotient rule', 'C. Chain rule', 'D. Power rule'],
    sol: ['y = ln(f(x)) requires the chain rule', 'dy/dx = f\'(x)/f(x) = cos(x)/sin(x) = cot(x)'],
    mc: ['Confusing when to apply which rule'],
    hints: ['ln is a function of another function (sin x)', 'This is composition, so use chain rule', 'd/dx[ln(u)] = (1/u)(du/dx)', 'du/dx = cos(x) here'],
    xp: 12, diff: 2, topic: 'Differential Calculus',
  }),
  q('MCQ', 'Differentiate y = eˣ/x using the quotient rule.', {
    ans: 'B', options: ['A. eˣ/(x²)', 'B. eˣ(x−1)/x²', 'C. eˣ/x − eˣ/x²', 'D. xeˣ'],
    sol: ['Quotient rule: d/dx(u/v) = (u\'v − uv\')/v²', 'u = eˣ, u\' = eˣ; v = x, v\' = 1', 'dy/dx = (eˣ·x − eˣ·1)/x² = eˣ(x−1)/x²'],
    mc: ['Applying the quotient rule in wrong order (vdu − udv)'],
    hints: ['Quotient rule: (u\'v − uv\')/v²', 'u = eˣ, v = x', 'u\' = eˣ, v\' = 1', 'eˣ·x − eˣ·1 = eˣ(x−1)'],
    xp: 14, diff: 3, topic: 'Differential Calculus',
  }),
  q('MCQ', 'The derivative of sin(x) is cos(x). What is the second derivative of sin(x)?', {
    ans: 'C', options: ['A. cos(x)', 'B. sin(x)', 'C. −sin(x)', 'D. −cos(x)'],
    sol: ['First derivative of sin(x) = cos(x)', 'Second derivative = d/dx[cos(x)] = −sin(x)'],
    mc: ['Forgetting the sign change when differentiating cos(x)'],
    hints: ['d/dx[sin(x)] = cos(x)', 'Now differentiate cos(x)', 'd/dx[cos(x)] = −sin(x)', 'So d²/dx²[sin(x)] = −sin(x)'],
    xp: 10, diff: 2, topic: 'Differential Calculus',
  }),
  q('NUM', 'If y = 5x⁴ − 3x² + 7, find d²y/dx² at x = 0.', {
    ans: '-6',
    sol: ['dy/dx = 20x³ − 6x', 'd²y/dx² = 60x² − 6', 'At x = 0: d²y/dx² = 60(0)² − 6 = −6'],
    mc: ['Differentiating only once instead of twice'],
    hints: ['Find dy/dx first', 'dy/dx = 20x³ − 6x', 'Differentiate again to get d²y/dx²', 'Substitute x = 0'],
    xp: 14, diff: 3, topic: 'Differential Calculus',
  }),
  q('MCQ', 'At what x-value does y = x³ − 3x have a local minimum?', {
    ans: 'B', options: ['A. x = 0', 'B. x = 1', 'C. x = −1', 'D. x = 3'],
    sol: ['dy/dx = 3x² − 3 = 0', 'x² = 1, so x = ±1', 'd²y/dx² = 6x', 'At x = 1: d²y/dx² = 6 > 0 (local minimum)', 'At x = −1: d²y/dx² = −6 < 0 (local maximum)'],
    mc: ['Not using the second derivative test to distinguish min from max'],
    hints: ['Set dy/dx = 0', '3x² − 3 = 0 → x = ±1', 'Use second derivative test', 'd²y/dx² = 6x; positive = minimum'],
    xp: 14, diff: 3, topic: 'Differential Calculus',
  }),
];

// ─── Canada Grade 7 Mathematics – Ratios and Proportional Reasoning ──────────
const canada_g7_ratios = [
  q('NUM', 'If 5 apples cost $3.25, how much do 8 apples cost? (Answer in dollars, 2 decimal places)', {
    ans: '5.20',
    sol: ['Unit cost = 3.25 ÷ 5 = $0.65 per apple', '8 apples = 8 × $0.65 = $5.20'],
    mc: ['Setting up the proportion upside down'],
    hints: ['Find the cost of 1 apple first', '3.25 ÷ 5 = 0.65', 'Multiply by 8', '8 × 0.65 = ?'],
    xp: 10, diff: 2, topic: 'Ratios and Proportional Reasoning',
  }),
  q('MCQ', 'A recipe uses 3 cups of flour for every 2 cups of sugar. To make a batch needing 9 cups of flour, how many cups of sugar are needed?', {
    ans: 'B', options: ['A. 4 cups', 'B. 6 cups', 'C. 5 cups', 'D. 8 cups'],
    sol: ['The ratio flour:sugar = 3:2', 'If flour = 9, then 9 = 3k, so k = 3', 'Sugar = 2k = 2 × 3 = 6 cups'],
    mc: ['Adding instead of multiplying the scale factor'],
    hints: ['Find the scale factor: 9 ÷ 3 = 3', 'Multiply sugar by the same factor', '2 × 3 = 6'],
    xp: 10, diff: 2, topic: 'Ratios and Proportional Reasoning',
  }),
  q('MCQ', 'A car travels 180 km in 2.5 hours. What is its speed in km/h?', {
    ans: 'C', options: ['A. 60 km/h', 'B. 64 km/h', 'C. 72 km/h', 'D. 80 km/h'],
    sol: ['Speed = Distance ÷ Time', 'Speed = 180 ÷ 2.5 = 72 km/h'],
    mc: ['Multiplying instead of dividing'],
    hints: ['Speed = Distance / Time', '180 ÷ 2.5 = ?', 'Convert 2.5 hours if needed', '180/2.5 = 72'],
    xp: 10, diff: 2, topic: 'Ratios and Proportional Reasoning',
  }),
  q('MCQ', 'The scale on a map is 1:50,000. If two cities are 4 cm apart on the map, how far apart are they in real life?', {
    ans: 'B', options: ['A. 1 km', 'B. 2 km', 'C. 4 km', 'D. 20 km'],
    sol: ['Real distance = map distance × scale factor', 'Real distance = 4 cm × 50,000 = 200,000 cm', '200,000 cm ÷ 100,000 = 2 km'],
    mc: ['Forgetting to convert cm to km'],
    hints: ['Multiply map distance by scale factor', '4 × 50,000 = 200,000 cm', 'Convert to km: 200,000 ÷ 100,000', '= 2 km'],
    xp: 12, diff: 2, topic: 'Ratios and Proportional Reasoning',
  }),
  q('NUM', 'A store marks up a $40 item by 25%. What is the selling price?', {
    ans: '50',
    sol: ['Markup = 25% of $40 = 0.25 × 40 = $10', 'Selling price = $40 + $10 = $50'],
    mc: ['Finding 25% but forgetting to add it to the original price'],
    hints: ['Find 25% of 40', '0.25 × 40 = 10', 'Add markup to original price', '40 + 10 = 50'],
    xp: 10, diff: 2, topic: 'Ratios and Proportional Reasoning',
  }),
  q('MCQ', 'Jack and Jill share money in the ratio 3:5. If the total is $120, how much does Jack get?', {
    ans: 'A', options: ['A. $45', 'B. $72', 'C. $40', 'D. $75'],
    sol: ['Total parts = 3 + 5 = 8', 'Jack\'s share = (3/8) × $120 = $45'],
    mc: ['Dividing by 3 instead of by the total number of parts'],
    hints: ['Add the ratio parts: 3 + 5 = 8', 'Jack gets 3 out of 8 parts', '(3/8) × 120 = ?', '= 45'],
    xp: 10, diff: 2, topic: 'Ratios and Proportional Reasoning',
  }),
  q('MCQ', 'If y varies directly with x and y = 15 when x = 5, what is y when x = 9?', {
    ans: 'C', options: ['A. 19', 'B. 25', 'C. 27', 'D. 3'],
    sol: ['Direct variation: y = kx', 'k = y/x = 15/5 = 3', 'When x = 9: y = 3 × 9 = 27'],
    mc: ['Confusing direct and inverse variation'],
    hints: ['Direct variation: y = kx', 'Find k using given values', 'k = 15/5 = 3', 'y = 3 × 9 = 27'],
    xp: 12, diff: 2, topic: 'Ratios and Proportional Reasoning',
  }),
];

// ─── IB MYP Grade 8 Mathematics – Statistics and Probability ────────────────
const ib_myp_g8_stats = [
  q('MCQ', 'A bag has 3 red and 5 blue marbles. A marble is drawn, replaced, then another is drawn. What is P(both red)?', {
    ans: 'B', options: ['A. 3/64', 'B. 9/64', 'C. 6/64', 'D. 3/8'],
    sol: ['P(red) = 3/8 each draw (with replacement)', 'P(both red) = 3/8 × 3/8 = 9/64'],
    mc: ['Not recognising replacement means events are independent'],
    hints: ['With replacement, the probabilities don\'t change', 'P(red) = 3/8', 'Multiply for independent events', '3/8 × 3/8 = 9/64'],
    xp: 12, diff: 2, topic: 'Statistics and Probability',
  }),
  q('MCQ', 'Using a tree diagram: P(A) = 0.4, P(B|A) = 0.7, P(B|A\') = 0.3. What is P(B)?', {
    ans: 'C', options: ['A. 0.28', 'B. 0.30', 'C. 0.46', 'D. 0.52'],
    sol: ['P(B) = P(A)·P(B|A) + P(A\')·P(B|A\')', 'P(A\') = 1 − 0.4 = 0.6', 'P(B) = 0.4×0.7 + 0.6×0.3 = 0.28 + 0.18 = 0.46'],
    mc: ['Forgetting the second branch of the tree'],
    hints: ['Draw a tree diagram with branches A and A\'', 'P(A) = 0.4, P(A\') = 0.6', 'P(B) = P(A)P(B|A) + P(A\')P(B|A\')', '= 0.4×0.7 + 0.6×0.3'],
    xp: 16, diff: 3, topic: 'Statistics and Probability',
  }),
  q('MCQ', 'P(A) = 0.5, P(B) = 0.4, P(A∩B) = 0.2. Are A and B independent?', {
    ans: 'A', options: ['A. Yes, because P(A)·P(B) = P(A∩B)', 'B. No, they are mutually exclusive', 'C. Yes, because P(A) = P(B)', 'D. Cannot determine'],
    sol: ['For independence: P(A∩B) = P(A) × P(B)', 'P(A) × P(B) = 0.5 × 0.4 = 0.2 = P(A∩B)', 'So A and B are independent'],
    mc: ['Confusing mutually exclusive with independence'],
    hints: ['Test independence: P(A∩B) = P(A)×P(B)?', 'P(A)×P(B) = 0.5×0.4 = 0.2', 'P(A∩B) = 0.2 ✓', 'They are independent'],
    xp: 14, diff: 3, topic: 'Statistics and Probability',
  }),
  q('MCQ', 'Two dice are rolled. What is the probability of getting a sum of 7?', {
    ans: 'B', options: ['A. 1/6', 'B. 6/36', 'C. 7/36', 'D. 5/36'],
    sol: ['Possible outcomes totalling 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) — 6 ways', 'Total outcomes = 6 × 6 = 36', 'P(sum=7) = 6/36 = 1/6'],
    mc: ['Listing only some of the favourable outcomes'],
    hints: ['Total sample space = 36 outcomes', 'Count pairs that sum to 7', '(1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 pairs', 'P = 6/36'],
    xp: 12, diff: 2, topic: 'Statistics and Probability',
  }),
  q('NUM', 'The data set is: 4, 8, 15, 16, 23, 42. What is the median?', {
    ans: '15.5',
    sol: ['Sort the data: 4, 8, 15, 16, 23, 42', '6 values, so median = average of 3rd and 4th', 'Median = (15 + 16) / 2 = 15.5'],
    mc: ['Taking only the middle value without averaging two middle values for an even count'],
    hints: ['Sort the data in ascending order', 'Count: 6 values (even number)', 'Average the 3rd and 4th values', '(15 + 16) / 2 = 15.5'],
    xp: 10, diff: 2, topic: 'Statistics and Probability',
  }),
];

// ─── IGCSE Grade 9 Mathematics – Statistics (full set) ───────────────────────
const igcse_g9_stats = [
  q('MCQ', 'The mean of 5 numbers is 12. What is their sum?', {
    ans: 'C', options: ['A. 12', 'B. 50', 'C. 60', 'D. 17'],
    sol: ['Mean = Sum / Count', 'Sum = Mean × Count = 12 × 5 = 60'],
    mc: ['Dividing instead of multiplying'],
    hints: ['Mean = Sum ÷ Count', 'Rearrange: Sum = Mean × Count', 'Sum = 12 × 5', '= 60'],
    xp: 8, diff: 1, topic: 'Statistics',
  }),
  q('NUM', 'Find the range of the data: 3, 7, 2, 14, 9, 5.', {
    ans: '12',
    sol: ['Range = Maximum − Minimum', 'Max = 14, Min = 2', 'Range = 14 − 2 = 12'],
    mc: ['Finding the difference between non-extreme values'],
    hints: ['Identify the maximum value', 'Identify the minimum value', 'Range = Max − Min', '14 − 2 = 12'],
    xp: 8, diff: 1, topic: 'Statistics',
  }),
  q('MCQ', 'Which measure of central tendency is most affected by outliers?', {
    ans: 'B', options: ['A. Median', 'B. Mean', 'C. Mode', 'D. Range'],
    sol: ['The mean uses all values in its calculation, so extreme values (outliers) strongly affect it', 'The median and mode are more resistant to outliers'],
    mc: ['Thinking the mode is most affected because it changes with any new value'],
    hints: ['Mean uses every data point', 'Adding a very large outlier increases the sum', 'The median only uses the middle value(s)', 'Mean is most sensitive to outliers'],
    xp: 8, diff: 1, topic: 'Statistics',
  }),
  q('MCQ', 'A frequency table shows that 30 students scored between 60-70 (midpoint 65) and 20 students scored between 70-80 (midpoint 75). What is the estimated mean score?', {
    ans: 'A', options: ['A. 69', 'B. 70', 'C. 65', 'D. 72'],
    sol: ['Estimated mean = Σ(midpoint × frequency) / Σfrequency', 'Numerator = 65×30 + 75×20 = 1950 + 1500 = 3450', 'Denominator = 30 + 20 = 50', 'Mean = 3450 / 50 = 69'],
    mc: ['Adding midpoints and dividing by 2 instead of using weighted mean'],
    hints: ['Use the formula: Σ(f×x) / Σf', 'Calculate 65×30 and 75×20', 'Add these products and divide by total frequency', '3450 / 50 = 69'],
    xp: 12, diff: 2, topic: 'Statistics',
  }),
  q('MCQ', 'What does a box-and-whisker plot show?', {
    ans: 'D', options: ['A. Only the mean and median', 'B. Only the range', 'C. The mode and mean', 'D. Minimum, Q1, Median, Q3, Maximum'],
    sol: ['A box plot displays the 5-number summary:', 'Minimum, Lower Quartile (Q1), Median (Q2), Upper Quartile (Q3), Maximum'],
    mc: ['Confusing a box plot with a histogram'],
    hints: ['A box plot uses the 5-number summary', 'The box spans Q1 to Q3', 'The line inside the box is the median', 'The whiskers extend to min and max'],
    xp: 8, diff: 1, topic: 'Statistics',
  }),
  q('NUM', 'The IQR of a data set is calculated as Q3 − Q1. If Q1 = 15 and Q3 = 27, what is the IQR?', {
    ans: '12',
    sol: ['IQR = Q3 − Q1 = 27 − 15 = 12'],
    mc: ['Subtracting in the wrong order'],
    hints: ['IQR = Q3 − Q1', 'Q3 = 27, Q1 = 15', '27 − 15 = ?', '= 12'],
    xp: 8, diff: 1, topic: 'Statistics',
  }),
  q('MCQ', 'A scatter plot shows points closely following a line going from bottom-left to top-right. This indicates:', {
    ans: 'A', options: ['A. Strong positive correlation', 'B. Strong negative correlation', 'C. No correlation', 'D. Weak positive correlation'],
    sol: ['Points going bottom-left to top-right means as x increases, y increases', 'Closely packed points means strong correlation', 'Together: strong positive correlation'],
    mc: ['Confusing positive (rising) and negative (falling) trends'],
    hints: ['Look at the direction of the trend', 'Bottom-left to top-right = positive', 'Points close to the line = strong correlation', 'Answer: strong positive'],
    xp: 8, diff: 1, topic: 'Statistics',
  }),
  q('MCQ', 'Data: 4, 4, 7, 9, 9, 9, 10. What is the mode?', {
    ans: 'C', options: ['A. 4', 'B. 7', 'C. 9', 'D. 10'],
    sol: ['The mode is the value that appears most frequently', '4 appears 2 times, 7 appears 1 time, 9 appears 3 times, 10 appears 1 time', 'Mode = 9'],
    mc: ['Choosing the largest value instead of the most frequent'],
    hints: ['Count how often each value appears', '4: twice, 9: three times', 'Most frequent value is the mode', 'Mode = 9'],
    xp: 8, diff: 1, topic: 'Statistics',
  }),
  q('MCQ', 'A cumulative frequency graph can be used to estimate the:', {
    ans: 'B', options: ['A. Mode', 'B. Median and quartiles', 'C. Mean only', 'D. Standard deviation'],
    sol: ['The cumulative frequency curve (ogive) allows you to read off the median at the 50th percentile', 'Q1 at 25th percentile and Q3 at 75th percentile can also be read off'],
    mc: ['Trying to find the mode from a cumulative frequency graph'],
    hints: ['Cumulative frequency shows running totals', 'Find 50% of total for the median', 'Find 25% for Q1, 75% for Q3', 'Median and quartiles are readable'],
    xp: 10, diff: 2, topic: 'Statistics',
  }),
  q('NUM', 'A student scores 80, 75, 90, 85, 70. What is the mean? (Enter as integer)', {
    ans: '80',
    sol: ['Sum = 80+75+90+85+70 = 400', 'Mean = 400 ÷ 5 = 80'],
    mc: ['Adding numbers incorrectly'],
    hints: ['Add all the scores', '80+75+90+85+70 = 400', 'Divide by the number of scores (5)', '400/5 = 80'],
    xp: 8, diff: 1, topic: 'Statistics',
  }),
  q('MCQ', 'In a histogram, the area of each bar represents:', {
    ans: 'B', options: ['A. The frequency density', 'B. The frequency (or relative frequency)', 'C. The class width only', 'D. The cumulative frequency'],
    sol: ['Area = frequency density × class width = frequency', 'So the area of each bar in a histogram represents frequency'],
    mc: ['Thinking the height alone represents frequency'],
    hints: ['In a histogram, bars have varying widths', 'Area = height × width', 'Height = frequency density', 'Area = frequency'],
    xp: 10, diff: 2, topic: 'Statistics',
  }),
  q('MCQ', 'Which type of data is best displayed with a pie chart?', {
    ans: 'D', options: ['A. Continuous data', 'B. Time-series data', 'C. Bivariate data', 'D. Categorical data (parts of a whole)'],
    sol: ['Pie charts show how a total is divided into categories', 'Each sector represents a proportion of the whole', 'Best for categorical data showing parts of a whole'],
    mc: ['Using pie charts for continuous data'],
    hints: ['Pie charts show proportions/percentages', 'Each slice is a category', 'Good for showing "parts of a whole"', 'Best for categorical data'],
    xp: 8, diff: 1, topic: 'Statistics',
  }),
  q('MCQ', 'The standard deviation measures:', {
    ans: 'A', options: ['A. How spread out data is from the mean', 'B. The middle value of the data', 'C. The most common value', 'D. The difference between max and min'],
    sol: ['Standard deviation measures the average distance of data points from the mean', 'A higher standard deviation means data is more spread out'],
    mc: ['Confusing standard deviation with range'],
    hints: ['Standard deviation is about spread', 'It measures average distance from the mean', 'High SD = more spread', 'Not the same as range'],
    xp: 8, diff: 1, topic: 'Statistics',
  }),
  q('NUM', 'There are 30 students. If P(passing) = 0.6, how many students are expected to pass?', {
    ans: '18',
    sol: ['Expected number = probability × total', '= 0.6 × 30 = 18'],
    mc: ['Confusing expected value with certainty'],
    hints: ['Expected number = P × n', 'P = 0.6, n = 30', '0.6 × 30 = ?', '= 18'],
    xp: 8, diff: 1, topic: 'Statistics',
  }),
  q('MCQ', 'Negative correlation means:', {
    ans: 'B', options: ['A. As x increases, y increases', 'B. As x increases, y decreases', 'C. No relationship between x and y', 'D. x and y are equal'],
    sol: ['Negative correlation: as one variable increases, the other decreases', 'E.g., as temperature increases, heating costs decrease'],
    mc: ['Confusing the direction of correlation'],
    hints: ['Think of the slope of the line of best fit', 'Negative slope = negative correlation', 'As x goes up, y goes down', 'This is negative correlation'],
    xp: 8, diff: 1, topic: 'Statistics',
  }),
  q('MCQ', 'In a data set 1, 2, 3, 4, 100 — which average best represents the "typical" value?', {
    ans: 'B', options: ['A. Mean (22)', 'B. Median (3)', 'C. Mode (none)', 'D. Range (99)'],
    sol: ['The mean is heavily influenced by the outlier 100', 'The median (middle value = 3) better represents typical values', 'Median is more robust to outliers'],
    mc: ['Always choosing the mean as the best average'],
    hints: ['The value 100 is an outlier', 'Mean = 110/5 = 22, which is not typical', 'Median = 3 (middle value)', 'Median better represents the group'],
    xp: 10, diff: 2, topic: 'Statistics',
  }),
  q('NUM', 'A data set has values 5, 10, 15, 20, 25. What is the mean deviation from the mean? (Calculate mean first, then avg |deviation|)', {
    ans: '6',
    sol: ['Mean = (5+10+15+20+25)/5 = 75/5 = 15', 'Deviations: |5-15|=10, |10-15|=5, |15-15|=0, |20-15|=5, |25-15|=10', 'Mean deviation = (10+5+0+5+10)/5 = 30/5 = 6'],
    mc: ['Forgetting to take absolute values of deviations'],
    hints: ['Find the mean: (5+10+15+20+25)/5 = 15', 'Find |each value - mean|', '|5-15|=10, |10-15|=5, |15-15|=0, etc.', 'Average the absolute deviations'],
    xp: 14, diff: 3, topic: 'Statistics',
  }),
  q('MCQ', 'Two events A and B are mutually exclusive. P(A) = 0.3, P(B) = 0.4. What is P(A or B)?', {
    ans: 'C', options: ['A. 0.12', 'B. 0.7 × 0.6', 'C. 0.7', 'D. 1'],
    sol: ['Mutually exclusive events cannot occur together, so P(A∩B) = 0', 'P(A∪B) = P(A) + P(B) = 0.3 + 0.4 = 0.7'],
    mc: ['Adding and then multiplying probabilities'],
    hints: ['Mutually exclusive: can\'t happen at the same time', 'P(A∩B) = 0', 'P(A∪B) = P(A) + P(B)', '0.3 + 0.4 = 0.7'],
    xp: 12, diff: 2, topic: 'Statistics',
  }),
  q('MCQ', 'Which of the following is NOT a measure of spread?', {
    ans: 'D', options: ['A. Range', 'B. Standard deviation', 'C. IQR', 'D. Mean'],
    sol: ['Range, standard deviation, and IQR all measure spread/variability', 'The mean measures the centre (average), not spread'],
    mc: ['Thinking the mean measures spread'],
    hints: ['Measures of spread describe variability', 'Range = Max − Min', 'Standard deviation = average distance from mean', 'Mean is a measure of centre, not spread'],
    xp: 8, diff: 1, topic: 'Statistics',
  }),
  q('MCQ', 'A sample of 5 has a standard deviation of 0. What does this tell you?', {
    ans: 'A', options: ['A. All values in the sample are the same', 'B. The mean is 0', 'C. There are no values', 'D. The data is skewed'],
    sol: ['SD = 0 means there is no variation from the mean', 'This only happens when all values are identical', 'E.g., {5, 5, 5, 5, 5} has SD = 0'],
    mc: ['Thinking SD = 0 means the mean = 0'],
    hints: ['SD measures spread from the mean', 'SD = 0 means no deviation from mean', 'Every value equals the mean', 'All values must be the same'],
    xp: 10, diff: 2, topic: 'Statistics',
  }),
];

// ─── IGCSE Grade 9 Chemistry – Atomic Structure (full set) ───────────────────
const igcse_g9_chem_atomic = [
  q('MCQ', 'What are the three main subatomic particles in an atom?', {
    ans: 'A', options: ['A. Proton, neutron, electron', 'B. Proton, positron, electron', 'C. Proton, neutron, photon', 'D. Quark, neutron, electron'],
    sol: ['The three main subatomic particles are proton (positive), neutron (neutral), and electron (negative)', 'Protons and neutrons are in the nucleus; electrons orbit the nucleus'],
    mc: ['Confusing positron (antiparticle) with proton'],
    hints: ['Two particles are in the nucleus', 'Protons have positive charge', 'Neutrons have no charge', 'Electrons are in shells outside the nucleus'],
    xp: 8, diff: 1, topic: 'Atomic Structure',
  }),
  q('MCQ', 'Carbon has atomic number 6 and mass number 12. How many neutrons does it have?', {
    ans: 'B', options: ['A. 6 neutrons, 6 protons', 'B. 6 neutrons', 'C. 12 neutrons', 'D. 18 neutrons'],
    sol: ['Number of neutrons = Mass number − Atomic number', 'Neutrons = 12 − 6 = 6'],
    mc: ['Confusing mass number with neutron number'],
    hints: ['Atomic number = number of protons', 'Mass number = protons + neutrons', 'Neutrons = mass number − atomic number', '12 − 6 = 6'],
    xp: 8, diff: 1, topic: 'Atomic Structure',
  }),
  q('MCQ', 'Isotopes are atoms of the same element that have:', {
    ans: 'C', options: ['A. Same mass number, different atomic number', 'B. Same number of neutrons, different protons', 'C. Same number of protons, different number of neutrons', 'D. Same number of electrons, same mass'],
    sol: ['Isotopes of an element have the same atomic number (same number of protons)', 'But different mass numbers due to different numbers of neutrons'],
    mc: ['Thinking isotopes have different proton numbers'],
    hints: ['Isotopes are of the same element', 'Same element = same atomic number = same protons', 'They differ in mass number', 'Different mass number = different neutrons'],
    xp: 10, diff: 2, topic: 'Atomic Structure',
  }),
  q('NUM', 'Chlorine-35 has 17 protons. How many neutrons does it have?', {
    ans: '18',
    sol: ['Neutrons = Mass number − Atomic number', 'Neutrons = 35 − 17 = 18'],
    mc: ['Using atomic number instead of mass number'],
    hints: ['Mass number = protons + neutrons', 'Neutrons = mass number − protons', 'Neutrons = 35 − 17', '= 18'],
    xp: 8, diff: 1, topic: 'Atomic Structure',
  }),
  q('MCQ', 'What is the electron configuration of oxygen (atomic number 8)?', {
    ans: 'B', options: ['A. 2, 4', 'B. 2, 6', 'C. 8', 'D. 2, 2, 4'],
    sol: ['Oxygen has 8 electrons', 'Shell 1 can hold up to 2 electrons: 2', 'Shell 2 gets the remaining 6: 6', 'Configuration: 2, 6'],
    mc: ['Not knowing the maximum electrons per shell (2, 8, 8, ...)'],
    hints: ['First shell holds max 2 electrons', 'Second shell holds max 8 electrons', 'Oxygen has 8 electrons total', '2 in shell 1, 6 in shell 2'],
    xp: 10, diff: 2, topic: 'Atomic Structure',
  }),
  q('MCQ', 'An ion has 11 protons and 10 electrons. What is its charge?', {
    ans: 'B', options: ['A. −1', 'B. +1', 'C. +2', 'D. −2'],
    sol: ['Charge = number of protons − number of electrons', 'Charge = 11 − 10 = +1'],
    mc: ['Reversing the sign of the charge'],
    hints: ['Protons are positive, electrons are negative', 'More protons than electrons = positive ion', 'Charge = protons − electrons', '11 − 10 = +1'],
    xp: 10, diff: 2, topic: 'Atomic Structure',
  }),
  q('MCQ', 'The mass number is the total number of:', {
    ans: 'C', options: ['A. Electrons and protons', 'B. Electrons and neutrons', 'C. Protons and neutrons', 'D. Protons, neutrons, and electrons'],
    sol: ['Mass number = number of protons + number of neutrons', 'Electrons have negligible mass and are not included'],
    mc: ['Including electrons in the mass number'],
    hints: ['Electrons have very little mass', 'Mass number is the count of heavy particles', 'Heavy particles are in the nucleus', 'Protons + neutrons = mass number'],
    xp: 8, diff: 1, topic: 'Atomic Structure',
  }),
  q('MCQ', 'Which model of the atom came FIRST historically?', {
    ans: 'A', options: ['A. Dalton\'s solid sphere model', 'B. Thomson\'s plum pudding model', 'C. Rutherford\'s nuclear model', 'D. Bohr\'s planetary model'],
    sol: ['Dalton proposed atoms as indivisible solid spheres in 1803', 'Thomson discovered the electron in 1897 (plum pudding model)', 'Rutherford\'s nuclear model came in 1911', 'Bohr\'s model came in 1913'],
    mc: ['Ordering the atomic models incorrectly'],
    hints: ['The timeline goes Dalton → Thomson → Rutherford → Bohr', 'Dalton was early 1800s', 'Thomson discovered electrons in 1897', 'Rutherford\'s gold foil experiment was 1911'],
    xp: 10, diff: 2, topic: 'Atomic Structure',
  }),
  q('MCQ', 'In Rutherford\'s gold foil experiment, most alpha particles passed straight through. This shows that:', {
    ans: 'B', options: ['A. All atoms are the same', 'B. Most of the atom is empty space', 'C. Electrons surround the nucleus closely', 'D. Gold is not dense'],
    sol: ['Most alpha particles passing straight through means most of the atom is empty', 'A few particles were deflected back — showing a small, dense, positive nucleus'],
    mc: ['Thinking deflected particles prove empty space'],
    hints: ['Most particles passed through without deflection', 'This means most of the atom is empty space', 'A few particles bounced back', 'This proves a small, dense nucleus'],
    xp: 10, diff: 2, topic: 'Atomic Structure',
  }),
  q('MCQ', 'Elements in the same group of the periodic table have the same:', {
    ans: 'D', options: ['A. Mass number', 'B. Number of neutrons', 'C. Number of electron shells', 'D. Number of outer shell electrons'],
    sol: ['Elements in the same group have the same number of electrons in their outer shell', 'This gives them similar chemical properties'],
    mc: ['Confusing groups (columns) with periods (rows)'],
    hints: ['Groups are columns in the periodic table', 'Elements in a group have similar properties', 'This is because of their electron arrangement', 'Same number of outer shell electrons'],
    xp: 10, diff: 2, topic: 'Atomic Structure',
  }),
  q('MCQ', 'The atomic number of an element tells you the number of:', {
    ans: 'C', options: ['A. Neutrons', 'B. Mass units', 'C. Protons (and electrons in a neutral atom)', 'D. Both protons and neutrons'],
    sol: ['Atomic number = number of protons', 'In a neutral atom, number of electrons = number of protons', 'So atomic number also tells you the number of electrons in a neutral atom'],
    mc: ['Thinking atomic number = mass number'],
    hints: ['Atomic number identifies the element', 'Atomic number = number of protons', 'In a neutral atom, electrons = protons', 'So atomic number = protons = electrons (neutral)'],
    xp: 8, diff: 1, topic: 'Atomic Structure',
  }),
  q('MCQ', 'Carbon-14 and Carbon-12 are isotopes. What do they have in common?', {
    ans: 'B', options: ['A. Same mass number', 'B. Same number of protons', 'C. Same number of neutrons', 'D. Same physical properties'],
    sol: ['Both are carbon, so both have 6 protons (atomic number 6)', 'C-12 has 6 neutrons; C-14 has 8 neutrons'],
    mc: ['Thinking isotopes have the same mass number'],
    hints: ['They are both carbon', 'Carbon has atomic number 6', 'Same element = same number of protons', 'C-12: 6n, C-14: 8n'],
    xp: 8, diff: 1, topic: 'Atomic Structure',
  }),
  q('MCQ', 'Electrons are arranged in energy levels (shells). The second shell can hold a maximum of:', {
    ans: 'C', options: ['A. 2', 'B. 4', 'C. 8', 'D. 18'],
    sol: ['Shell capacities: Shell 1 = 2, Shell 2 = 8, Shell 3 = 18 (but fills to 8 first)', 'The second shell holds a maximum of 8 electrons'],
    mc: ['Using 2 (shell 1 capacity) or 18 (shell 3 maximum)'],
    hints: ['Shell 1 holds max 2', 'Shell 2 holds max 8', 'Shell 3 holds max 18 (but fills 8 first)', 'Answer: 8'],
    xp: 8, diff: 1, topic: 'Atomic Structure',
  }),
  q('NUM', 'Sodium has atomic number 11 and mass number 23. How many neutrons does a sodium atom have?', {
    ans: '12',
    sol: ['Neutrons = Mass number − Atomic number', 'Neutrons = 23 − 11 = 12'],
    mc: ['Subtracting atomic number from electrons or vice versa'],
    hints: ['Neutrons = mass number − atomic number', 'Mass number = 23', 'Atomic number = 11', '23 − 11 = 12'],
    xp: 8, diff: 1, topic: 'Atomic Structure',
  }),
  q('MCQ', 'What holds the nucleus together despite the repulsion between protons?', {
    ans: 'C', options: ['A. Electromagnetic force', 'B. Gravity', 'C. Strong nuclear force', 'D. Weak nuclear force'],
    sol: ['The strong nuclear force acts between nucleons (protons and neutrons)', 'It is much stronger than the electromagnetic repulsion at very short distances'],
    mc: ['Thinking gravity holds the nucleus together'],
    hints: ['Protons repel each other (same charge)', 'But nuclei are stable', 'A special force overcomes repulsion', 'It\'s the strong nuclear force'],
    xp: 10, diff: 2, topic: 'Atomic Structure',
  }),
  q('MCQ', 'Which of the following has the same electron configuration as a noble gas?', {
    ans: 'B', options: ['A. Na atom', 'B. Na⁺ ion', 'C. Cl atom', 'D. S²⁻ ion'],
    sol: ['Na has 11 electrons (2,8,1)', 'Na⁺ loses 1 electron → 10 electrons (2,8), same as Ne (noble gas)', 'S²⁻ has 18 electrons (2,8,8) same as Ar — also noble gas config', 'But Na⁺ is the most straightforward example here'],
    mc: ['Thinking atoms naturally have noble gas configuration'],
    hints: ['Noble gases have full outer shells', 'Na⁺ has lost one electron', 'Na⁺ has 10 electrons like Ne (2,8)', 'Na⁺ has noble gas electron configuration'],
    xp: 12, diff: 2, topic: 'Atomic Structure',
  }),
  q('MCQ', 'The relative mass of a proton compared to an electron is approximately:', {
    ans: 'D', options: ['A. 1:1', 'B. 10:1', 'C. 100:1', 'D. 1836:1'],
    sol: ['A proton is about 1836 times heavier than an electron', 'This is why the mass of an atom is concentrated in the nucleus'],
    mc: ['Thinking protons and electrons have similar masses'],
    hints: ['Electrons are very light', 'Almost all atomic mass is in the nucleus', 'The proton mass is much greater', 'Approximately 1836 times heavier than electron'],
    xp: 10, diff: 2, topic: 'Atomic Structure',
  }),
  q('MCQ', 'What is the electron configuration of the chloride ion (Cl⁻, atomic number 17)?', {
    ans: 'C', options: ['A. 2, 8, 7', 'B. 2, 8, 8, 1', 'C. 2, 8, 8', 'D. 2, 7, 8'],
    sol: ['Cl atom has 17 electrons: 2, 8, 7', 'Cl⁻ gains 1 electron: 17 + 1 = 18 electrons', 'Configuration: 2, 8, 8 (same as Ar)'],
    mc: ['Forgetting that Cl⁻ has gained an electron'],
    hints: ['Cl⁻ has gained one extra electron', 'Cl has 17 electrons normally', 'Cl⁻ has 18 electrons', '18 electrons: 2, 8, 8'],
    xp: 10, diff: 2, topic: 'Atomic Structure',
  }),
  q('SHORT', 'Explain the difference between atomic number and mass number.', {
    ans: 'Atomic number = number of protons; mass number = total number of protons + neutrons. They differ when neutrons ≠ 0 (always). Isotopes have same atomic number but different mass numbers.',
    sol: ['Atomic number identifies the element and equals the number of protons', 'Mass number = protons + neutrons (the nucleons)', 'Isotopes: same atomic number, different mass numbers', 'In neutral atoms, atomic number also equals number of electrons'],
    mc: ['Saying atomic number = total particles', 'Confusing mass number with the symbol A'],
    hints: ['Atomic number relates to protons', 'Mass number relates to the total nucleons', 'A nucleus contains protons AND neutrons', 'Isotopes differ in mass number only'],
    xp: 14, diff: 3, topic: 'Atomic Structure',
  }),
  q('MCQ', 'When an atom becomes a cation (positive ion), it:', {
    ans: 'A', options: ['A. Loses electrons', 'B. Gains electrons', 'C. Loses protons', 'D. Gains neutrons'],
    sol: ['Cations are formed by losing electrons', 'Losing electrons creates a positive charge (more protons than electrons)', 'The nuclear composition (protons and neutrons) does not change'],
    mc: ['Thinking cations gain protons'],
    hints: ['Cation = positive ion', 'To become positive, the ion must have fewer electrons than protons', 'Electrons are removed, not protons', 'Atom → cation by losing electrons'],
    xp: 8, diff: 1, topic: 'Atomic Structure',
  }),
];

// ─── IB MYP Grade 8 Mathematics – Geometry (full set) ───────────────────────
const ib_myp_g8_geom = [
  q('NUM', 'Find the area of a circle with radius 7 cm. (Use π ≈ 3.14159, round to 1 dp)', {
    ans: '153.9',
    sol: ['Area = πr²', 'Area = π × 7² = π × 49 ≈ 153.938', 'Rounded to 1 dp: 153.9 cm²'],
    mc: ['Using diameter instead of radius', 'Forgetting to square the radius'],
    hints: ['Area = πr²', 'r = 7', '7² = 49', 'π × 49 ≈ 153.9'],
    xp: 10, diff: 2, topic: 'Geometry',
  }),
  q('MCQ', 'The interior angles of a polygon with n sides sum to:', {
    ans: 'C', options: ['A. 180n degrees', 'B. 360 degrees', 'C. (n−2) × 180 degrees', 'D. n × 90 degrees'],
    sol: ['The sum of interior angles of an n-sided polygon = (n−2) × 180°', 'E.g., triangle (n=3): (3−2)×180 = 180°', 'Quadrilateral (n=4): (4−2)×180 = 360°'],
    mc: ['Using 180n instead of (n−2)×180'],
    hints: ['Try with n=3 (triangle): should be 180°', '(3−2)×180 = 180 ✓', 'For quadrilateral n=4: (4−2)×180 = 360 ✓', 'Formula: (n−2)×180'],
    xp: 10, diff: 2, topic: 'Geometry',
  }),
  q('MCQ', 'A right triangle has legs of length 5 cm and 12 cm. What is the hypotenuse?', {
    ans: 'B', options: ['A. 11 cm', 'B. 13 cm', 'C. 15 cm', 'D. 17 cm'],
    sol: ['Pythagorean theorem: c² = a² + b²', 'c² = 5² + 12² = 25 + 144 = 169', 'c = √169 = 13 cm'],
    mc: ['Adding the legs directly (5+12=17)'],
    hints: ['Use the Pythagorean theorem: a² + b² = c²', '5² + 12² = 25 + 144 = 169', '√169 = ?', '= 13'],
    xp: 10, diff: 2, topic: 'Geometry',
  }),
  q('NUM', 'Find the volume of a rectangular prism with length 4 m, width 3 m, height 5 m.', {
    ans: '60',
    sol: ['Volume = length × width × height', 'V = 4 × 3 × 5 = 60 m³'],
    mc: ['Finding surface area instead of volume'],
    hints: ['Volume of a box = l × w × h', 'l=4, w=3, h=5', '4×3=12, then 12×5=?', '= 60'],
    xp: 8, diff: 1, topic: 'Geometry',
  }),
  q('MCQ', 'Two triangles are similar if:', {
    ans: 'D', options: ['A. They have the same area', 'B. Their perimeters are equal', 'C. Two sides are proportional', 'D. All corresponding angles are equal (and sides are proportional)'],
    sol: ['Similar triangles have: all corresponding angles equal AND all corresponding sides proportional', 'This is the AA (angle-angle) or SSS similarity criterion'],
    mc: ['Thinking same area means similar triangles'],
    hints: ['Similar means same shape, possibly different size', 'All angles must be equal', 'All sides must be in the same ratio', 'AA similarity: if 2 angles match, all 3 do'],
    xp: 10, diff: 2, topic: 'Geometry',
  }),
  q('NUM', 'Calculate the surface area of a cube with side length 4 cm.', {
    ans: '96',
    sol: ['A cube has 6 square faces', 'Area of one face = 4² = 16 cm²', 'Total surface area = 6 × 16 = 96 cm²'],
    mc: ['Finding volume (64) instead of surface area'],
    hints: ['A cube has 6 faces', 'Each face is a square with area = side²', '4² = 16', '6 × 16 = 96'],
    xp: 10, diff: 2, topic: 'Geometry',
  }),
  q('MCQ', 'A triangle has angles 60°, 80°, and x°. Find x.', {
    ans: 'C', options: ['A. 30°', 'B. 35°', 'C. 40°', 'D. 50°'],
    sol: ['Sum of angles in a triangle = 180°', '60° + 80° + x° = 180°', '140° + x° = 180°', 'x = 40°'],
    mc: ['Forgetting that triangle angles sum to 180°'],
    hints: ['All angles in a triangle add to 180°', '60 + 80 = 140', '180 − 140 = ?', '= 40'],
    xp: 8, diff: 1, topic: 'Geometry',
  }),
  q('MCQ', 'The perimeter of a regular hexagon with side length 5 cm is:', {
    ans: 'B', options: ['A. 25 cm', 'B. 30 cm', 'C. 36 cm', 'D. 24 cm'],
    sol: ['A regular hexagon has 6 equal sides', 'Perimeter = 6 × side = 6 × 5 = 30 cm'],
    mc: ['Multiplying by 5 instead of 6'],
    hints: ['How many sides does a hexagon have?', 'Regular means all sides equal', 'Perimeter = number of sides × side length', '6 × 5 = 30'],
    xp: 8, diff: 1, topic: 'Geometry',
  }),
  q('MCQ', 'The surface area of a cylinder with radius r and height h is:', {
    ans: 'C', options: ['A. πr²h', 'B. 2πrh', 'C. 2πr² + 2πrh', 'D. πr²h + 2πrh'],
    sol: ['Surface area = 2 circles + curved surface', '= 2πr² + 2πrh'],
    mc: ['Forgetting to include the two circular ends'],
    hints: ['A cylinder has 2 circular ends and one curved surface', 'Area of each circle = πr²', 'Curved surface area = 2πrh', 'Total = 2πr² + 2πrh'],
    xp: 10, diff: 2, topic: 'Geometry',
  }),
  q('MCQ', 'What type of triangle has all sides equal and all angles equal to 60°?', {
    ans: 'A', options: ['A. Equilateral', 'B. Isosceles', 'C. Scalene', 'D. Right-angled'],
    sol: ['An equilateral triangle has all three sides equal and all angles = 60°'],
    mc: ['Confusing equilateral (all equal) with isosceles (2 equal)'],
    hints: ['Equilateral = all equal', 'Each angle = 60° since 180°/3 = 60°', 'All sides are the same length', 'This is the equilateral triangle'],
    xp: 8, diff: 1, topic: 'Geometry',
  }),
  q('NUM', 'A circle has circumference 31.4 cm. Find the radius. (Use π ≈ 3.14)', {
    ans: '5',
    sol: ['C = 2πr', '31.4 = 2 × 3.14 × r', 'r = 31.4 / (2 × 3.14) = 31.4 / 6.28 = 5 cm'],
    mc: ['Using C = πr² (area formula) instead of C = 2πr'],
    hints: ['Circumference formula: C = 2πr', 'Solve for r: r = C/(2π)', 'r = 31.4 / (2 × 3.14)', '= 31.4 / 6.28 = 5'],
    xp: 10, diff: 2, topic: 'Geometry',
  }),
  q('MCQ', 'Two parallel lines are cut by a transversal. Alternate interior angles are:', {
    ans: 'B', options: ['A. Supplementary (add to 180°)', 'B. Equal', 'C. Complementary (add to 90°)', 'D. Always 90°'],
    sol: ['Alternate interior angles formed when a transversal cuts parallel lines are equal', 'They are sometimes called "Z angles"'],
    mc: ['Confusing alternate angles with co-interior (same-side) angles'],
    hints: ['These are "Z angles" or "zigzag angles"', 'They sit on opposite sides of the transversal', 'When lines are parallel, Z angles are equal', 'Not supplementary — those are co-interior angles'],
    xp: 10, diff: 2, topic: 'Geometry',
  }),
  q('NUM', 'Find the area of a trapezium with parallel sides 6 cm and 10 cm and height 4 cm.', {
    ans: '32',
    sol: ['Area = ½ × (a + b) × h', 'Area = ½ × (6 + 10) × 4 = ½ × 16 × 4 = 32 cm²'],
    mc: ['Forgetting the ½ factor'],
    hints: ['Trapezium area = ½ × (sum of parallel sides) × height', 'Parallel sides: 6 and 10', 'Height: 4', '½ × 16 × 4 = 32'],
    xp: 10, diff: 2, topic: 'Geometry',
  }),
  q('MCQ', 'Which of these is NOT a property of a rhombus?', {
    ans: 'D', options: ['A. All sides are equal', 'B. Diagonals bisect each other at right angles', 'C. Opposite angles are equal', 'D. All angles are 90°'],
    sol: ['A rhombus has all sides equal, diagonals bisect each other at 90°, and opposite angles are equal', 'However, the angles are NOT necessarily 90° — that would make it a square'],
    mc: ['Confusing a rhombus with a square'],
    hints: ['A rhombus is like a "squashed" square', 'All sides are equal length', 'Diagonals cross at 90°', 'But the corner angles are NOT necessarily 90°'],
    xp: 10, diff: 2, topic: 'Geometry',
  }),
  q('MCQ', 'A map has a scale of 1:25,000. A distance of 8 cm on the map represents what real distance?', {
    ans: 'B', options: ['A. 1 km', 'B. 2 km', 'C. 25 km', 'D. 0.5 km'],
    sol: ['Real distance = map distance × scale', '= 8 cm × 25,000 = 200,000 cm', '200,000 cm = 2,000 m = 2 km'],
    mc: ['Forgetting to convert cm to km'],
    hints: ['Multiply map distance by scale factor', '8 × 25,000 = 200,000 cm', 'Convert: 200,000 cm ÷ 100 = 2,000 m', '2,000 m ÷ 1000 = 2 km'],
    xp: 12, diff: 2, topic: 'Geometry',
  }),
  q('MCQ', 'An exterior angle of a triangle equals:', {
    ans: 'B', options: ['A. The adjacent interior angle', 'B. The sum of the two non-adjacent interior angles', 'C. 90°', 'D. 180° minus all three angles'],
    sol: ['The exterior angle theorem states that an exterior angle = sum of the two remote interior angles', 'This is because all three angles sum to 180°, and the exterior angle + adjacent interior angle = 180°'],
    mc: ['Thinking the exterior angle is always 90°'],
    hints: ['An exterior angle is formed by extending one side', 'Three interior angles sum to 180°', 'Exterior angle + one interior angle = 180°', 'So exterior angle = sum of the OTHER two interior angles'],
    xp: 10, diff: 2, topic: 'Geometry',
  }),
  q('NUM', 'Find the length of the diagonal of a square with side 6 cm. (Round to 1 dp)', {
    ans: '8.5',
    sol: ['Diagonal = side × √2', 'Diagonal = 6 × √2 = 6 × 1.4142 ≈ 8.485', 'Rounded to 1 dp: 8.5 cm'],
    mc: ['Not applying Pythagoras for the diagonal'],
    hints: ['The diagonal of a square divides it into two right triangles', 'Use Pythagorean theorem: d² = 6² + 6²', 'd² = 36 + 36 = 72', 'd = √72 ≈ 8.485 ≈ 8.5'],
    xp: 12, diff: 3, topic: 'Geometry',
  }),
  q('MCQ', 'Two triangles are congruent if they satisfy:', {
    ans: 'D', options: ['A. Same area', 'B. All angles equal', 'C. One side and one angle equal', 'D. SSS, SAS, AAS, or RHS conditions'],
    sol: ['Congruence means same size AND same shape', 'The conditions are: SSS (3 sides), SAS (2 sides and included angle), AAS (2 angles and a side), RHS (right angle, hypotenuse, side)'],
    mc: ['Thinking same angles alone make triangles congruent (they would be similar, not necessarily congruent)'],
    hints: ['Congruent = identical shape AND size', 'SSS: three sides equal', 'SAS: two sides and the angle between them', 'AAS or RHS also work'],
    xp: 12, diff: 2, topic: 'Geometry',
  }),
  q('MCQ', 'The volume of a pyramid with base area B and height h is:', {
    ans: 'C', options: ['A. Bh', 'B. 2Bh/3', 'C. Bh/3', 'D. πBh'],
    sol: ['Volume of a pyramid = (1/3) × base area × height', '= Bh/3'],
    mc: ['Using Bh (prism formula) instead of Bh/3'],
    hints: ['Volume of prism = Bh', 'A pyramid is 1/3 of a prism with the same base and height', 'V = (1/3)Bh', '= Bh/3'],
    xp: 10, diff: 2, topic: 'Geometry',
  }),
  q('NUM', 'A sector of a circle has radius 9 cm and a central angle of 80°. What is its arc length? (Use π ≈ 3.14159, round to 1 dp)', {
    ans: '12.6',
    sol: ['Arc length = (angle/360°) × 2πr', '= (80/360) × 2π × 9', '= (2/9) × 18π', '= 4π ≈ 12.566', 'Rounded: 12.6 cm'],
    mc: ['Using area formula instead of arc length formula'],
    hints: ['Arc length = (θ/360) × 2πr', 'θ = 80°, r = 9', '(80/360) × 2π × 9', '= 80×2π×9/360 ≈ 12.6'],
    xp: 12, diff: 3, topic: 'Geometry',
  }),
];

// ─── Canada Grade 7 Mathematics – Data and Probability (full set) ────────────
const canada_g7_data = [
  q('MCQ', 'A fair coin is flipped once. What is the probability of getting tails?', {
    ans: 'B', options: ['A. 1/4', 'B. 1/2', 'C. 3/4', 'D. 1'],
    sol: ['A fair coin has 2 equally likely outcomes: heads or tails', 'P(tails) = 1/2'],
    mc: ['Thinking the probability of tails depends on previous flips'],
    hints: ['A fair coin has 2 outcomes', 'Both outcomes are equally likely', 'P(tails) = favourable outcomes / total outcomes', '= 1/2'],
    xp: 6, diff: 1, topic: 'Data and Probability',
  }),
  q('NUM', 'A bag contains 4 red, 3 blue, and 3 green marbles. What is the probability of drawing a red marble?', {
    ans: '0.4',
    sol: ['Total marbles = 4 + 3 + 3 = 10', 'P(red) = 4/10 = 0.4'],
    mc: ['Counting only the red marbles without dividing by total'],
    hints: ['Total = 4 + 3 + 3 = 10', 'P(red) = red / total', '= 4/10', '= 0.4'],
    xp: 8, diff: 1, topic: 'Data and Probability',
  }),
  q('MCQ', 'What is the probability of an impossible event?', {
    ans: 'A', options: ['A. 0', 'B. 1/2', 'C. 1', 'D. −1'],
    sol: ['An impossible event can never happen', 'Its probability is 0'],
    mc: ['Thinking impossible events have probability 1'],
    hints: ['Probability ranges from 0 to 1', 'Certain events have probability 1', 'Impossible events have probability 0', 'P(impossible) = 0'],
    xp: 6, diff: 1, topic: 'Data and Probability',
  }),
  q('MCQ', 'Which graph is BEST for showing change over time?', {
    ans: 'C', options: ['A. Pie chart', 'B. Bar chart', 'C. Line graph', 'D. Pictograph'],
    sol: ['Line graphs are best for showing trends over time', 'They connect data points and make it easy to see increases/decreases'],
    mc: ['Choosing bar chart for time series data'],
    hints: ['Think about which graph shows trends', 'Time goes on the x-axis', 'A connected line shows the trend clearly', 'Line graphs are best for time series'],
    xp: 6, diff: 1, topic: 'Data and Probability',
  }),
  q('MCQ', 'A spinner has 4 equal sections: red, blue, green, yellow. If you spin it 40 times, how many times do you expect red?', {
    ans: 'B', options: ['A. 4', 'B. 10', 'C. 20', 'D. 40'],
    sol: ['P(red) = 1/4', 'Expected frequency = P × number of trials = (1/4) × 40 = 10'],
    mc: ['Confusing probability with frequency'],
    hints: ['P(red) = 1/4 (one of 4 equal sections)', 'Expected frequency = probability × trials', '= (1/4) × 40', '= 10'],
    xp: 8, diff: 1, topic: 'Data and Probability',
  }),
  q('MCQ', 'The mode of the data set {3, 5, 5, 7, 8, 8, 8, 9} is:', {
    ans: 'C', options: ['A. 5', 'B. 7', 'C. 8', 'D. 9'],
    sol: ['Mode = most frequently occurring value', '8 appears 3 times, more than any other value', 'Mode = 8'],
    mc: ['Choosing the median or mean instead of mode'],
    hints: ['Mode = most frequent value', 'Count: 3→1, 5→2, 7→1, 8→3, 9→1', '8 appears the most (3 times)', 'Mode = 8'],
    xp: 6, diff: 1, topic: 'Data and Probability',
  }),
  q('MCQ', 'Which of the following shows P(A) + P(not A) = ?', {
    ans: 'D', options: ['A. 0', 'B. 0.5', 'C. P(A)', 'D. 1'],
    sol: ['An event either happens or it doesn\'t', 'P(A) + P(not A) = 1 always'],
    mc: ['Thinking complementary probabilities don\'t add to 1'],
    hints: ['An event either occurs or it doesn\'t', 'These two outcomes cover all possibilities', 'P(A) + P(A\') = 1', 'This is the complementary rule'],
    xp: 6, diff: 1, topic: 'Data and Probability',
  }),
  q('MCQ', 'A data set has values 10, 12, 14, 16, 18. What is the mean?', {
    ans: 'C', options: ['A. 12', 'B. 13', 'C. 14', 'D. 15'],
    sol: ['Mean = Sum / Count', 'Sum = 10+12+14+16+18 = 70', 'Mean = 70/5 = 14'],
    mc: ['Choosing the middle value without calculating'],
    hints: ['Add all values: 10+12+14+16+18 = 70', 'Divide by the count (5)', '70/5 = ?', '= 14'],
    xp: 8, diff: 1, topic: 'Data and Probability',
  }),
  q('MCQ', 'Two dice are rolled. P(both show 6) = ?', {
    ans: 'B', options: ['A. 1/6', 'B. 1/36', 'C. 2/6', 'D. 1/12'],
    sol: ['P(first die = 6) = 1/6', 'P(second die = 6) = 1/6', 'P(both = 6) = 1/6 × 1/6 = 1/36 (independent events)'],
    mc: ['Adding instead of multiplying independent probabilities'],
    hints: ['These are independent events', 'For independent events, multiply probabilities', 'P(6) × P(6) = 1/6 × 1/6', '= 1/36'],
    xp: 10, diff: 2, topic: 'Data and Probability',
  }),
  q('MCQ', 'What is the median of: 2, 5, 8, 11, 14?', {
    ans: 'B', options: ['A. 5', 'B. 8', 'C. 11', 'D. 7'],
    sol: ['Sort: 2, 5, 8, 11, 14 (already sorted)', '5 values → middle is 3rd value', 'Median = 8'],
    mc: ['Calculating mean instead of finding the middle value'],
    hints: ['Sort the data (already done)', 'Find the middle value', '5 values: 1st, 2nd, 3rd, 4th, 5th', 'Middle = 3rd value = 8'],
    xp: 8, diff: 1, topic: 'Data and Probability',
  }),
  q('MCQ', 'A bar chart shows 30 students prefer football and 20 prefer basketball. What percentage prefer football?', {
    ans: 'C', options: ['A. 30%', 'B. 40%', 'C. 60%', 'D. 50%'],
    sol: ['Total students = 30 + 20 = 50', 'Percentage = (30/50) × 100% = 60%'],
    mc: ['Not adding both groups to find the total'],
    hints: ['Total = 30 + 20 = 50', 'Football percentage = 30/50', 'Multiply by 100 to get percentage', '(30/50) × 100 = 60%'],
    xp: 8, diff: 1, topic: 'Data and Probability',
  }),
  q('MCQ', 'If P(rain tomorrow) = 0.7, what is P(no rain tomorrow)?', {
    ans: 'B', options: ['A. 0.7', 'B. 0.3', 'C. 0.14', 'D. 1'],
    sol: ['P(no rain) = 1 − P(rain) = 1 − 0.7 = 0.3'],
    mc: ['Subtracting from 0 instead of 1'],
    hints: ['Use the complement rule', 'P(event doesn\'t happen) = 1 − P(event happens)', '1 − 0.7 = ?', '= 0.3'],
    xp: 6, diff: 1, topic: 'Data and Probability',
  }),
  q('MCQ', 'A tally chart shows: cats = 8, dogs = 12, birds = 5. What fraction of pets are dogs?', {
    ans: 'C', options: ['A. 12/8', 'B. 12/17', 'C. 12/25', 'D. 2/5'],
    sol: ['Total = 8 + 12 + 5 = 25', 'Fraction of dogs = 12/25'],
    mc: ['Dividing dogs by a partial total'],
    hints: ['Find total: 8 + 12 + 5 = 25', 'Dogs = 12', 'Fraction = dogs / total', '= 12/25'],
    xp: 6, diff: 1, topic: 'Data and Probability',
  }),
  q('MCQ', 'A pictograph uses a symbol to represent 5 students. If there are 4 symbols, how many students are there?', {
    ans: 'B', options: ['A. 4', 'B. 20', 'C. 9', 'D. 15'],
    sol: ['Multiply the number of symbols by the value each represents', '4 × 5 = 20 students'],
    mc: ['Adding 4 and 5 instead of multiplying'],
    hints: ['Each symbol = 5 students', 'Number of symbols = 4', '4 × 5 = ?', '= 20'],
    xp: 6, diff: 1, topic: 'Data and Probability',
  }),
  q('MCQ', 'Which measure of average is best used when data is skewed by extreme values?', {
    ans: 'B', options: ['A. Mean', 'B. Median', 'C. Mode', 'D. Range'],
    sol: ['The median is resistant to extreme values (outliers)', 'The mean is affected by outliers', 'Median better represents the "typical" value in skewed data'],
    mc: ['Always choosing mean as the best average'],
    hints: ['Outliers pull the mean toward them', 'The median is the middle value', 'Outliers don\'t affect the median much', 'Median is best for skewed data'],
    xp: 8, diff: 1, topic: 'Data and Probability',
  }),
  q('NUM', 'A card is drawn from a standard 52-card deck. P(drawing an Ace) = ? (Enter as fraction, e.g. 1/13)', {
    ans: '1/13',
    sol: ['There are 4 Aces in a 52-card deck', 'P(Ace) = 4/52 = 1/13'],
    mc: ['Counting the number of suits instead of aces'],
    hints: ['How many aces are in a deck?', '4 aces (one per suit)', 'Total cards = 52', 'P(Ace) = 4/52 = 1/13'],
    xp: 8, diff: 1, topic: 'Data and Probability',
  }),
  q('MCQ', 'A data set: 2, 4, 4, 6, 8, 10. The range is:', {
    ans: 'C', options: ['A. 4', 'B. 6', 'C. 8', 'D. 10'],
    sol: ['Range = Maximum − Minimum = 10 − 2 = 8'],
    mc: ['Finding the median instead of the range'],
    hints: ['Range = max − min', 'Max = 10', 'Min = 2', '10 − 2 = 8'],
    xp: 6, diff: 1, topic: 'Data and Probability',
  }),
  q('MCQ', 'In a frequency table, the "frequency" column shows:', {
    ans: 'A', options: ['A. How many times each value occurs', 'B. The value divided by the total', 'C. The cumulative count', 'D. The average'],
    sol: ['Frequency = the count (how many times each value/category occurs)'],
    mc: ['Confusing frequency with relative frequency'],
    hints: ['Frequency means "how often"', 'It\'s just a count', 'Not a proportion or percentage', 'E.g., if 5 students scored 80, frequency = 5'],
    xp: 6, diff: 1, topic: 'Data and Probability',
  }),
  q('MCQ', 'What type of graph uses sectors (slices) to show parts of a whole?', {
    ans: 'D', options: ['A. Bar chart', 'B. Line graph', 'C. Histogram', 'D. Pie chart'],
    sol: ['A pie chart is a circle divided into sectors', 'Each sector represents a category\'s proportion of the total'],
    mc: ['Confusing a pie chart with a histogram'],
    hints: ['Think of a round pizza cut into slices', 'Each slice is a category', 'Slices = sectors', 'This is a pie chart'],
    xp: 6, diff: 1, topic: 'Data and Probability',
  }),
  q('MCQ', 'In a bag of 10 marbles: 3 red, 4 blue, 3 green. You draw one at random. P(not blue) = ?', {
    ans: 'C', options: ['A. 4/10', 'B. 3/10', 'C. 6/10', 'D. 7/10'],
    sol: ['P(blue) = 4/10', 'P(not blue) = 1 − 4/10 = 6/10'],
    mc: ['Forgetting to use the complement'],
    hints: ['P(not blue) = 1 − P(blue)', 'P(blue) = 4/10', '1 − 4/10 = 6/10', '= 6/10'],
    xp: 8, diff: 1, topic: 'Data and Probability',
  }),
];

// ─── Master Question Bank ────────────────────────────────────────────────────
export const QB = {
  'igcse:Grade 10:Mathematics:Geometry and Trigonometry': igcse_g10_geom,
  'ib_dp:Grade 11:Mathematics:Differential Calculus': ib_dp_g11_calc,
  'canada:Grade 7:Mathematics:Ratios and Proportional Reasoning': canada_g7_ratios,
  'ib_myp:Grade 8:Mathematics:Statistics and Probability': ib_myp_g8_stats,
  'igcse:Grade 9:Mathematics:Statistics': igcse_g9_stats,
  'igcse:Grade 9:Chemistry:Atomic Structure': igcse_g9_chem_atomic,
  'ib_myp:Grade 8:Mathematics:Geometry': ib_myp_g8_geom,
  'canada:Grade 7:Mathematics:Data and Probability': canada_g7_data,
};

export const getQs = (curriculum, grade, subject, subtopic, count = 10) => {
  const key = `${curriculum}:${grade}:${subject}:${subtopic}`;
  const bank = QB[key];
  if (bank && bank.length > 0) {
    const shuffled = [...bank].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  }
  // Fallback: generate generic questions
  return generateFallback(subtopic, count);
};

const generateFallback = (subtopic, count) => {
  const fallback = [];
  for (let i = 0; i < count; i++) {
    const a = Math.floor(Math.random() * 10) + 2;
    const b = Math.floor(Math.random() * 10) + 2;
    fallback.push(q('NUM', `[${subtopic}] Evaluate: ${a} × ${b} = ?`, {
      ans: String(a * b),
      sol: [`Multiply ${a} and ${b}`, `${a} × ${b} = ${a * b}`],
      mc: ['Confusing multiplication with addition'],
      hints: [
        `Think of ${a} groups of ${b}`,
        `Or add ${b} to itself ${a} times`,
        `${a} × ${b} is a multiplication problem`,
        `Answer: ${a * b}`,
      ],
      xp: 8, diff: 1, topic: subtopic,
    }));
  }
  return fallback;
};
