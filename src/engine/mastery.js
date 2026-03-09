// Mastery levels (0–100)
export const MASTERY_LABELS = ['Beginner', 'Developing', 'Proficient', 'Advanced', 'Master'];

export const getMasteryLabel = (score) => {
  if (score < 20) return MASTERY_LABELS[0];
  if (score < 40) return MASTERY_LABELS[1];
  if (score < 60) return MASTERY_LABELS[2];
  if (score < 80) return MASTERY_LABELS[3];
  return MASTERY_LABELS[4];
};

export const getMasteryColor = (score) => {
  if (score < 20) return '#ef4444';
  if (score < 40) return '#f97316';
  if (score < 60) return '#eab308';
  if (score < 80) return '#22c55e';
  return '#6366f1';
};

/**
 * Compute new mastery score after answering a question.
 * @param {number} current - Current mastery (0–100)
 * @param {boolean} correct - Whether the answer was correct
 * @param {number} diff - Question difficulty (1–5)
 * @returns {number} New mastery score
 */
export const computeMastery = (current, correct, diff = 2) => {
  const gain = correct ? Math.round(5 + diff * 3) : 0;
  const loss = correct ? 0 : Math.round(2 + diff);
  const next = correct ? Math.min(100, current + gain) : Math.max(0, current - loss);
  return next;
};

/**
 * Adapt difficulty based on recent performance.
 * @param {number[]} recentResults - Array of 1 (correct) / 0 (wrong) for last N answers
 * @param {number} currentDiff - Current difficulty (1–5)
 * @returns {number} New difficulty level
 */
export const adaptDiff = (recentResults, currentDiff = 2) => {
  if (recentResults.length < 3) return currentDiff;
  const last3 = recentResults.slice(-3);
  const correct = last3.filter(Boolean).length;
  if (correct === 3 && currentDiff < 5) return currentDiff + 1;
  if (correct === 0 && currentDiff > 1) return currentDiff - 1;
  return currentDiff;
};

/**
 * Compute XP earned this session.
 * @param {Array} answers - Array of { correct, xp } objects
 * @returns {number} Total XP
 */
export const computeSessionXP = (answers) => {
  return answers.reduce((sum, a) => sum + (a.correct ? a.xp : 0), 0);
};

/**
 * Get motivational message based on score percentage.
 * @param {number} pct - Score percentage (0–100)
 * @returns {string} Motivational message
 */
export const getMotivationalMessage = (pct) => {
  if (pct >= 90) return '🏆 Outstanding! You\'re a master of this topic!';
  if (pct >= 75) return '🌟 Great work! Keep pushing to reach mastery!';
  if (pct >= 60) return '👍 Good effort! Review the questions you missed and try again.';
  if (pct >= 40) return '💪 Keep going! Every mistake is a learning opportunity.';
  return '🌱 Don\'t give up! Review the material and give it another shot.';
};
