import React, { useState, useEffect } from 'react';
import { Send, Lightbulb, MessageCircle, ChevronRight } from 'lucide-react';
import BackButton from '../atoms/BackButton.jsx';
import Bar from '../atoms/Bar.jsx';
import DiffBadge from '../atoms/DiffBadge.jsx';
import { getMasteryColor } from '../../engine/mastery.js';

// ── MCQ Option Card ───────────────────────────────────────────────────────────
function MCQOption({ label, text, selected, correct, wrong, disabled, onClick }) {
  let bg = 'rgba(255,255,255,0.04)';
  let border = '1px solid rgba(255,255,255,0.1)';
  let color = '#e2e8f0';
  if (correct) { bg = 'rgba(34,197,94,0.12)'; border = '1px solid #22c55e'; color = '#86efac'; }
  else if (wrong) { bg = 'rgba(239,68,68,0.12)'; border = '1px solid #ef4444'; color = '#fca5a5'; }
  else if (selected) { bg = 'rgba(99,102,241,0.15)'; border = '1px solid #6366f1'; color = '#a5b4fc'; }

  return (
    <button onClick={onClick} disabled={disabled} style={{
      width: '100%', textAlign: 'left', padding: '14px 16px',
      background: bg, border, borderRadius: 10, color,
      cursor: disabled ? 'default' : 'pointer', fontSize: 14,
      transition: 'all 0.2s', display: 'flex', alignItems: 'flex-start', gap: 10,
    }}
    onMouseEnter={e => { if (!disabled && !selected) e.currentTarget.style.borderColor = '#6366f1'; }}
    onMouseLeave={e => { if (!disabled && !selected) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
    >
      <span style={{
        width: 24, height: 24, borderRadius: '50%', border: `2px solid ${border.split(' ')[2]}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 1,
        background: correct ? '#22c55e22' : wrong ? '#ef444422' : selected ? '#6366f122' : 'transparent',
      }}>
        {label.split('.')[0]}
      </span>
      <span style={{ lineHeight: 1.5 }}>{text}</span>
      {correct && <span style={{ marginLeft: 'auto', color: '#22c55e', fontSize: 18 }}>✓</span>}
      {wrong && <span style={{ marginLeft: 'auto', color: '#ef4444', fontSize: 18 }}>✗</span>}
    </button>
  );
}

// ── Hint Panel ────────────────────────────────────────────────────────────────
function HintPanel({ hints, hintsRevealed, onReveal }) {
  return (
    <div style={{
      background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)',
      borderRadius: 12, padding: 16,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <Lightbulb size={16} style={{ color: '#f59e0b' }} />
        <span style={{ fontWeight: 600, color: '#fbbf24', fontSize: 14 }}>Hints</span>
        <span style={{ color: '#94a3b8', fontSize: 12 }}>({hintsRevealed}/{hints.length} revealed)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 12 }}>
        {hints.slice(0, hintsRevealed).map((h, i) => (
          <div key={i} style={{
            background: 'rgba(245,158,11,0.1)', borderRadius: 8, padding: '8px 12px',
            fontSize: 13, color: '#fcd34d', lineHeight: 1.5,
            animation: 'fadeIn 0.3s ease',
          }}>
            💡 {h}
          </div>
        ))}
      </div>
      {hintsRevealed < hints.length && (
        <button onClick={onReveal} style={{
          background: 'rgba(245,158,11,0.15)', color: '#f59e0b',
          border: '1px solid rgba(245,158,11,0.3)', borderRadius: 8,
          padding: '8px 14px', fontSize: 13, fontWeight: 600, cursor: 'pointer',
        }}>
          Reveal Next Hint
        </button>
      )}
    </div>
  );
}

// ── AI Tutor Chat ─────────────────────────────────────────────────────────────
function TutorChat({ questionText }) {
  const [messages, setMessages] = useState([
    { role: 'tutor', text: 'Hi! I\'m your AI tutor. Ask me anything about this question.' },
  ]);
  const [input, setInput] = useState('');

  const responses = [
    'Great question! Think about the key concepts involved here.',
    'Try breaking the problem into smaller steps.',
    'Remember to check the units if this is a numerical problem.',
    'Consider what formula or theorem applies to this type of question.',
    'Drawing a diagram can sometimes make this much clearer!',
    'Think about what information you\'re given and what you need to find.',
  ];

  const sendMsg = () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input };
    const tutorMsg = { role: 'tutor', text: responses[Math.floor(Math.random() * responses.length)] };
    setMessages(m => [...m, userMsg, tutorMsg]);
    setInput('');
  };

  return (
    <div style={{
      background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.2)',
      borderRadius: 12, overflow: 'hidden',
    }}>
      <div style={{ padding: '12px 16px', borderBottom: '1px solid rgba(99,102,241,0.15)', display: 'flex', alignItems: 'center', gap: 8 }}>
        <MessageCircle size={16} style={{ color: '#6366f1' }} />
        <span style={{ fontWeight: 600, color: '#818cf8', fontSize: 14 }}>AI Tutor</span>
      </div>
      <div style={{ height: 200, overflowY: 'auto', padding: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {messages.map((m, i) => (
          <div key={i} style={{
            alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
            background: m.role === 'user' ? 'rgba(99,102,241,0.2)' : 'rgba(255,255,255,0.06)',
            borderRadius: m.role === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
            padding: '8px 12px', maxWidth: '85%', fontSize: 13, lineHeight: 1.5,
            color: m.role === 'user' ? '#a5b4fc' : '#e2e8f0',
          }}>
            {m.text}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8, padding: 10, borderTop: '1px solid rgba(99,102,241,0.15)' }}>
        <input value={input} onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMsg()}
          placeholder="Ask about this question..."
          style={{
            flex: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 8, padding: '8px 12px', color: '#e2e8f0', fontSize: 13, outline: 'none',
          }}
        />
        <button onClick={sendMsg} style={{
          background: '#6366f1', color: '#fff', border: 'none',
          borderRadius: 8, padding: '0 12px', cursor: 'pointer',
        }}>
          <Send size={14} />
        </button>
      </div>
    </div>
  );
}

// ── Solution Panel ────────────────────────────────────────────────────────────
function SolutionPanel({ question, xpGained }) {
  return (
    <div className="fu" style={{
      background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 12, padding: 16, marginTop: 16,
    }}>
      <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: '#94a3b8' }}>Solution</h4>
      <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
        {question.sol.map((step, i) => (
          <li key={i} style={{ fontSize: 13, color: '#e2e8f0', lineHeight: 1.6 }}>{step}</li>
        ))}
      </ol>
      {question.mc.length > 0 && (
        <div style={{ marginTop: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#f59e0b', marginBottom: 8 }}>⚠️ Common Mistakes</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {question.mc.map((m, i) => (
              <div key={i} style={{
                background: 'rgba(245,158,11,0.1)', borderRadius: 8, padding: '7px 12px',
                fontSize: 12, color: '#fcd34d', lineHeight: 1.5,
              }}>
                {m}
              </div>
            ))}
          </div>
        </div>
      )}
      {xpGained > 0 && (
        <div style={{
          marginTop: 14, display: 'flex', alignItems: 'center', gap: 8,
          color: '#22c55e', fontWeight: 700, fontSize: 15,
        }}>
          <span style={{ fontSize: 20 }}>⚡</span> +{xpGained} XP earned!
        </div>
      )}
    </div>
  );
}

// ── Main Practice Screen ──────────────────────────────────────────────────────
export default function Practice({ questions, subtopic, mastery = 0, onFinish, onBack }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);      // MCQ
  const [numInput, setNumInput] = useState('');         // NUM
  const [shortInput, setShortInput] = useState('');     // SHORT
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [hintsRevealed, setHintsRevealed] = useState(0);
  const [showTutor, setShowTutor] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [currentMastery, setCurrentMastery] = useState(mastery);

  const q = questions[idx];
  if (!q) return null;

  const totalQs = questions.length;
  const progress = ((idx) / totalQs) * 100;

  const getIsCorrect = () => {
    if (q.type === 'MCQ') return selected === q.ans;
    if (q.type === 'NUM') return numInput.trim() === String(q.ans).trim();
    return true; // SHORT — always revealed, manual check
  };

  const handleSubmit = () => {
    if (submitted) return;
    const correct = getIsCorrect();
    const xpGained = correct ? q.xp : 0;
    setAnswers(prev => [...prev, {
      question: q, userAnswer: q.type === 'MCQ' ? selected : q.type === 'NUM' ? numInput : shortInput,
      correct, xp: xpGained,
    }]);
    setSubmitted(true);
  };

  const handleNext = () => {
    if (idx + 1 >= totalQs) {
      onFinish({ answers: [...answers], finalMastery: currentMastery });
    } else {
      setIdx(i => i + 1);
      setSelected(null);
      setNumInput('');
      setShortInput('');
      setSubmitted(false);
      setHintsRevealed(0);
      setShowHints(false);
    }
  };

  const isCorrect = submitted ? getIsCorrect() : null;

  const canSubmit = (
    (q.type === 'MCQ' && selected !== null) ||
    (q.type === 'NUM' && numInput.trim() !== '') ||
    (q.type === 'SHORT' && shortInput.trim() !== '')
  );

  return (
    <div style={{ minHeight: '100vh', padding: '0', background: '#0f0f1a' }}>
      {/* Top bar */}
      <div style={{
        padding: '12px 20px', background: '#1a1a2e',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <BackButton onClick={onBack} label="Exit" />
        <div style={{ flex: 1, padding: '0 8px' }}>
          <Bar value={idx} max={totalQs} color="#6366f1" height={6} />
        </div>
        <span style={{ fontSize: 13, color: '#94a3b8', whiteSpace: 'nowrap' }}>
          {idx + 1} / {totalQs}
        </span>
        <div style={{
          background: getMasteryColor(currentMastery) + '22',
          border: `1px solid ${getMasteryColor(currentMastery)}44`,
          borderRadius: 8, padding: '4px 10px',
          color: getMasteryColor(currentMastery), fontSize: 12, fontWeight: 700,
          whiteSpace: 'nowrap',
        }}>
          {currentMastery}% mastery
        </div>
      </div>

      <div style={{ padding: '20px 16px', maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: 20 }}>
        <div className="fu" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr)', gap: 16 }}>
          {/* Question card */}
          <div style={{
            background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 14, padding: '20px 20px 16px',
          }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
              <span style={{
                background: 'rgba(99,102,241,0.15)', color: '#818cf8',
                borderRadius: 6, padding: '3px 9px', fontSize: 11, fontWeight: 700,
              }}>
                {q.type}
              </span>
              <DiffBadge diff={q.diff} />
              <span style={{ color: '#94a3b8', fontSize: 12 }}>+{q.xp} XP</span>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
                <button onClick={() => { setShowHints(!showHints); setShowTutor(false); }} style={{
                  background: showHints ? 'rgba(245,158,11,0.15)' : 'transparent',
                  border: `1px solid ${showHints ? '#f59e0b' : 'rgba(255,255,255,0.1)'}`,
                  borderRadius: 8, padding: '5px 10px', color: '#f59e0b',
                  cursor: 'pointer', fontSize: 12, display: 'flex', alignItems: 'center', gap: 4,
                }}>
                  <Lightbulb size={13} /> Hint
                </button>
                <button onClick={() => { setShowTutor(!showTutor); setShowHints(false); }} style={{
                  background: showTutor ? 'rgba(99,102,241,0.15)' : 'transparent',
                  border: `1px solid ${showTutor ? '#6366f1' : 'rgba(255,255,255,0.1)'}`,
                  borderRadius: 8, padding: '5px 10px', color: '#818cf8',
                  cursor: 'pointer', fontSize: 12, display: 'flex', alignItems: 'center', gap: 4,
                }}>
                  <MessageCircle size={13} /> Tutor
                </button>
              </div>
            </div>

            {/* Question text */}
            <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 18, color: '#e2e8f0' }}>{q.text}</p>

            {/* MCQ */}
            {q.type === 'MCQ' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {(q.options || []).map((opt, i) => {
                  const letter = opt.split('.')[0].trim();
                  const isSelected = selected === letter;
                  const isCorrectOpt = submitted && letter === q.ans;
                  const isWrongOpt = submitted && isSelected && letter !== q.ans;
                  return (
                    <MCQOption key={i} label={opt} text={opt.substring(opt.indexOf('.') + 1).trim()}
                      selected={isSelected} correct={isCorrectOpt} wrong={isWrongOpt}
                      disabled={submitted} onClick={() => !submitted && setSelected(letter)}
                    />
                  );
                })}
              </div>
            )}

            {/* NUM */}
            {q.type === 'NUM' && (
              <div>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <input type="text" value={numInput}
                    onChange={e => !submitted && setNumInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && canSubmit && !submitted && handleSubmit()}
                    disabled={submitted}
                    placeholder="Enter your answer..."
                    style={{
                      flex: 1, background: 'rgba(255,255,255,0.06)',
                      border: submitted
                        ? isCorrect ? '1px solid #22c55e' : '1px solid #ef4444'
                        : '1px solid rgba(255,255,255,0.15)',
                      borderRadius: 10, padding: '12px 16px',
                      color: '#e2e8f0', fontSize: 15, outline: 'none',
                    }}
                  />
                </div>
                {submitted && (
                  <div style={{ marginTop: 10, fontSize: 14, color: isCorrect ? '#22c55e' : '#ef4444' }}>
                    {isCorrect ? '✓ Correct!' : `✗ Correct answer: ${q.ans}`}
                  </div>
                )}
              </div>
            )}

            {/* SHORT */}
            {q.type === 'SHORT' && (
              <div>
                <textarea value={shortInput}
                  onChange={e => !submitted && setShortInput(e.target.value)}
                  disabled={submitted}
                  placeholder="Write your answer here..."
                  rows={3}
                  style={{
                    width: '100%', background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: 10, padding: '12px 14px',
                    color: '#e2e8f0', fontSize: 14, outline: 'none', resize: 'vertical',
                  }}
                />
                {submitted && (
                  <div style={{ marginTop: 10, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 8, padding: '10px 14px', fontSize: 13, color: '#86efac' }}>
                    <strong>Model Answer:</strong> {q.ans}
                  </div>
                )}
              </div>
            )}

            {/* Submit / Next */}
            <div style={{ marginTop: 16, display: 'flex', gap: 10 }}>
              {!submitted ? (
                <button onClick={handleSubmit} disabled={!canSubmit} style={{
                  background: canSubmit ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'rgba(255,255,255,0.08)',
                  color: canSubmit ? '#fff' : '#94a3b8', border: 'none',
                  borderRadius: 10, padding: '11px 24px', fontSize: 14,
                  fontWeight: 600, cursor: canSubmit ? 'pointer' : 'default',
                  transition: 'all 0.2s',
                }}>
                  Submit Answer
                </button>
              ) : (
                <button onClick={handleNext} style={{
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  color: '#fff', border: 'none', borderRadius: 10,
                  padding: '11px 24px', fontSize: 14, fontWeight: 600,
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
                }}>
                  {idx + 1 >= totalQs ? 'See Results' : 'Next Question'}
                  <ChevronRight size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Hints / Tutor panel */}
          {showHints && (
            <HintPanel hints={q.hints || []} hintsRevealed={hintsRevealed}
              onReveal={() => setHintsRevealed(n => Math.min(n + 1, (q.hints || []).length))}
            />
          )}
          {showTutor && <TutorChat questionText={q.text} />}

          {/* Solution panel (after submit) */}
          {submitted && (
            <SolutionPanel question={q} xpGained={isCorrect ? q.xp : 0} />
          )}
        </div>
      </div>
    </div>
  );
}
