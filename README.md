# EduSpark

Adaptive mastery learning platform for Grades 5–12 — IGCSE, IB MYP, IB DP, Canada General, GED.

## Quick Start

```bash
npm install
npm run dev    # start dev server
npm run build  # production build
```

## Project Structure

```
src/
  App.jsx                        # Main app with screen-based routing (useState)
  main.jsx                       # React entry point
  data/
    curricula.js                 # CURRICULA, SUBJECTS, SUBTOPICS taxonomy
    questionBank.js              # Full question bank (QB) + getQs() helper
  engine/
    mastery.js                   # computeMastery, adaptDiff, motivational helpers
  components/
    atoms/
      Avatar.jsx                 # User avatar with initials
      Bar.jsx                    # Progress/mastery bar
      BackButton.jsx             # Chevron back button
      DiffBadge.jsx              # Difficulty badge (Easy→Master)
      MasteryRing.jsx            # Circular mastery progress ring
      NavBtn.jsx                 # Navigation button (icon + label)
      Pill.jsx                   # Colour badge/pill
      Stat.jsx                   # KPI stat card
      Toast.jsx                  # Auto-dismissing notification
    screens/
      Landing.jsx                # Marketing landing page
      Auth.jsx                   # Login / Sign-up / Admin login
      PickCurriculum.jsx         # Curriculum selector
      PickGrade.jsx              # Grade selector
      PickSubject.jsx            # Subject selector
      PickSubtopic.jsx           # Subtopic selector with coverage badges
      SubtopicDetail.jsx         # Topic overview + practice buttons
      Practice.jsx               # Full practice session (MCQ/NUM/SHORT)
      Results.jsx                # Session results with per-question review
      StudentDashboard.jsx       # Student dashboard (Home/Progress/Explore/Badges)
      AdminDashboard.jsx         # Admin dashboard (Overview/Students/Content/Reports)
  styles/
    global.css                   # Global CSS, animations, utilities
```

## Features

- **Adaptive Practice** — MCQ, numerical (NUM), and short-answer (SHORT) question types
- **Hint System** — Progressive hints revealed one at a time in a chat-bubble panel
- **AI Tutor Chat** — Collapsible panel to ask questions about any problem
- **Solution Panel** — Step-by-step solutions + common misconceptions after each answer
- **Mastery Engine** — Score updates after every answer; rings and bars animate live
- **Results Screen** — Score summary, XP earned, mastery change, per-question review
- **Student Dashboard** — Home / My Progress / Explore / Achievements tabs
- **Admin Dashboard** — Overview stats / Student roster / Content coverage / SVG reports
- **Responsive** — Bottom nav bar on mobile, fluid grid layouts

## Curricula Covered

| Curriculum | Grades |
|---|---|
| IGCSE | 9–10 |
| IB MYP | 6–8 |
| IB DP | 11–12 |
| Canada General | 6–8 |
| GED | 11–12 |

## Question Bank

Real curated questions exist for:

- IGCSE G10 Mathematics – Geometry and Trigonometry (10 Qs)
- IGCSE G9 Mathematics – Statistics (20 Qs)
- IGCSE G9 Chemistry – Atomic Structure (20 Qs)
- IB DP G11 Mathematics – Differential Calculus (10 Qs)
- IB MYP G8 Mathematics – Statistics and Probability (5 Qs)
- IB MYP G8 Mathematics – Geometry (20 Qs)
- Canada G7 Mathematics – Ratios and Proportional Reasoning (7 Qs)
- Canada G7 Mathematics – Data and Probability (20 Qs)

All other topics fall back to procedurally generated arithmetic questions.

## Tech Stack

- React 18 + Vite 5
- lucide-react for icons
- Inline styles + global.css (no external CSS framework)
- No TypeScript, no React Router — screen routing via `useState`
