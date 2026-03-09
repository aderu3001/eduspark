import React, { useState, useCallback } from 'react';
import './styles/global.css';

import Landing from './components/screens/Landing.jsx';
import Auth from './components/screens/Auth.jsx';
import PickCurriculum from './components/screens/PickCurriculum.jsx';
import PickGrade from './components/screens/PickGrade.jsx';
import PickSubject from './components/screens/PickSubject.jsx';
import PickSubtopic from './components/screens/PickSubtopic.jsx';
import SubtopicDetail from './components/screens/SubtopicDetail.jsx';
import Practice from './components/screens/Practice.jsx';
import Results from './components/screens/Results.jsx';
import StudentDashboard from './components/screens/StudentDashboard.jsx';
import AdminDashboard from './components/screens/AdminDashboard.jsx';
import Toast from './components/atoms/Toast.jsx';

import { getQs } from './data/questionBank.js';
import { computeMastery, computeSessionXP } from './engine/mastery.js';

export default function App() {
  const [screen, setScreen] = useState('landing');
  const [authMode, setAuthMode] = useState('login');
  const [user, setUser] = useState(null);

  // Curriculum pick state
  const [curriculum, setCurriculum] = useState(null);
  const [grade, setGrade] = useState(null);
  const [subject, setSubject] = useState(null);
  const [subtopic, setSubtopic] = useState(null);

  // Practice state
  const [questions, setQuestions] = useState([]);
  const [practiceResults, setPracticeResults] = useState(null);

  // Persistent state
  const [masteryMap, setMasteryMap] = useState({});   // key → mastery score
  const [totalXP, setTotalXP] = useState(0);
  const [streak, setStreak] = useState(1);
  const [recentTopics, setRecentTopics] = useState([]);

  // Toast
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message, type = 'info') => {
    setToast({ message, type });
  }, []);

  // ── Navigation helpers ────────────────────────────────────────────────────

  const handleGoAuth = (mode) => {
    setAuthMode(mode);
    setScreen('auth');
  };

  const handleAuthSuccess = (userData) => {
    setUser(userData);
    if (userData.role === 'admin') {
      setScreen('admin');
    } else {
      setScreen('student');
    }
    showToast(`Welcome, ${userData.name}!`, 'success');
  };

  const handleLogout = () => {
    setUser(null);
    setScreen('landing');
    showToast('Logged out successfully.', 'info');
  };

  // ── Curriculum pick flow ──────────────────────────────────────────────────

  const startPickFlow = (cur, grd, sub, sbt) => {
    setCurriculum(cur || null);
    setGrade(grd || null);
    setSubject(sub || null);
    setSubtopic(sbt || null);

    if (cur && grd && sub && sbt) {
      setScreen('subDetail');
    } else if (cur && grd && sub) {
      setScreen('pickSubtopic');
    } else if (cur && grd) {
      setScreen('pickSubject');
    } else if (cur) {
      setScreen('pickGrade');
    } else {
      setScreen('pickCurriculum');
    }
  };

  const handlePickCurriculum = (c) => {
    setCurriculum(c);
    setScreen('pickGrade');
  };

  const handlePickGrade = (g) => {
    setGrade(g);
    setScreen('pickSubject');
  };

  const handlePickSubject = (s) => {
    setSubject(s);
    setScreen('pickSubtopic');
  };

  const handlePickSubtopic = (st) => {
    setSubtopic(st);
    setScreen('subDetail');
  };

  const handleStartPractice = (count) => {
    const qs = getQs(curriculum, grade, subject, subtopic, count);
    setQuestions(qs);
    setRecentTopics(prev => {
      const key = `${curriculum}:${grade}:${subject}:${subtopic}`;
      const filtered = prev.filter(t => `${t.curriculum}:${t.grade}:${t.subject}:${t.subtopic}` !== key);
      return [{ curriculum, grade, subject, subtopic }, ...filtered].slice(0, 8);
    });
    setScreen('practice');
  };

  const handlePracticeFinish = ({ answers, finalMastery }) => {
    const key = `${curriculum}:${grade}:${subject}:${subtopic}`;
    const prevMastery = masteryMap[key] || 0;

    // Compute new mastery from answers
    let newMastery = prevMastery;
    answers.forEach(a => {
      newMastery = computeMastery(newMastery, a.correct, a.question.diff);
    });

    const sessionXP = computeSessionXP(answers);
    setMasteryMap(prev => ({ ...prev, [key]: newMastery }));
    setTotalXP(prev => prev + sessionXP);

    setPracticeResults({ answers, prevMastery, newMastery, sessionXP });
    setScreen('results');

    if (sessionXP > 0) showToast(`+${sessionXP} XP earned!`, 'success');
  };

  // ── Screen key for re-mount animation ────────────────────────────────────
  const masteryKey = `${curriculum}:${grade}:${subject}:${subtopic}`;
  const currentMastery = masteryMap[masteryKey] || 0;

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div style={{ minHeight: '100vh', background: '#0f0f1a', color: '#e2e8f0' }}>
      {screen === 'landing' && (
        <Landing onGo={(scr, opts) => {
          if (scr === 'auth') handleGoAuth(opts.mode);
        }} />
      )}

      {screen === 'auth' && (
        <Auth mode={authMode} onSuccess={handleAuthSuccess} onBack={() => setScreen('landing')} />
      )}

      {screen === 'student' && user && (
        <StudentDashboard
          user={user} xp={totalXP} streak={streak}
          masteryMap={masteryMap} recentTopics={recentTopics}
          onPickFlow={startPickFlow} onLogout={handleLogout}
        />
      )}

      {screen === 'admin' && (
        <AdminDashboard onLogout={handleLogout} />
      )}

      {screen === 'pickCurriculum' && (
        <PickCurriculum onPick={handlePickCurriculum} onBack={() => setScreen(user ? 'student' : 'landing')} />
      )}

      {screen === 'pickGrade' && curriculum && (
        <PickGrade curriculum={curriculum} onPick={handlePickGrade} onBack={() => setScreen('pickCurriculum')} />
      )}

      {screen === 'pickSubject' && curriculum && grade && (
        <PickSubject curriculum={curriculum} grade={grade} onPick={handlePickSubject} onBack={() => setScreen('pickGrade')} />
      )}

      {screen === 'pickSubtopic' && curriculum && grade && subject && (
        <PickSubtopic curriculum={curriculum} grade={grade} subject={subject} onPick={handlePickSubtopic} onBack={() => setScreen('pickSubject')} />
      )}

      {screen === 'subDetail' && curriculum && grade && subject && subtopic && (
        <SubtopicDetail
          curriculum={curriculum} grade={grade} subject={subject} subtopic={subtopic}
          mastery={currentMastery}
          onStart={handleStartPractice}
          onBack={() => setScreen('pickSubtopic')}
        />
      )}

      {screen === 'practice' && questions.length > 0 && (
        <Practice
          questions={questions} subtopic={subtopic}
          mastery={currentMastery}
          onFinish={handlePracticeFinish}
          onBack={() => setScreen('subDetail')}
        />
      )}

      {screen === 'results' && practiceResults && (
        <Results
          answers={practiceResults.answers}
          subtopic={subtopic}
          prevMastery={practiceResults.prevMastery}
          newMastery={practiceResults.newMastery}
          sessionXP={practiceResults.sessionXP}
          onTryAgain={() => handleStartPractice(practiceResults.answers.length)}
          onNewTopic={() => setScreen('pickCurriculum')}
          onDashboard={() => setScreen(user ? 'student' : 'landing')}
        />
      )}

      {/* Toast notifications */}
      {toast && (
        <Toast
          key={toast.message}
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
