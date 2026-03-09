import React from 'react';

const DIFF_COLORS = {
  1: '#22c55e',
  2: '#84cc16',
  3: '#eab308',
  4: '#f97316',
  5: '#ef4444',
};
const DIFF_LABELS = { 1: 'Easy', 2: 'Medium', 3: 'Hard', 4: 'Expert', 5: 'Master' };

export default function DiffBadge({ diff = 2 }) {
  const color = DIFF_COLORS[diff] || DIFF_COLORS[2];
  return (
    <span style={{
      background: color + '22', color, border: `1px solid ${color}44`,
      borderRadius: 999, padding: '2px 10px', fontSize: 11, fontWeight: 700,
    }}>
      {DIFF_LABELS[diff] || 'Medium'}
    </span>
  );
}
