export const CURRICULA = [
  { id: 'igcse', label: 'IGCSE', grades: ['Grade 9', 'Grade 10'] },
  { id: 'ib_myp', label: 'IB MYP', grades: ['Grade 6', 'Grade 7', 'Grade 8'] },
  { id: 'ib_dp', label: 'IB DP', grades: ['Grade 11', 'Grade 12'] },
  { id: 'canada', label: 'Canada General', grades: ['Grade 6', 'Grade 7', 'Grade 8'] },
  { id: 'ged', label: 'GED', grades: ['Grade 11', 'Grade 12'] },
];

export const SUBJECTS = {
  igcse: {
    'Grade 9': ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'],
    'Grade 10': ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'],
  },
  ib_myp: {
    'Grade 6': ['Mathematics', 'Sciences', 'Language & Literature'],
    'Grade 7': ['Mathematics', 'Sciences', 'Language & Literature'],
    'Grade 8': ['Mathematics', 'Sciences', 'Language & Literature'],
  },
  ib_dp: {
    'Grade 11': ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Economics'],
    'Grade 12': ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Economics'],
  },
  canada: {
    'Grade 6': ['Mathematics', 'Science', 'Language Arts'],
    'Grade 7': ['Mathematics', 'Science', 'Language Arts'],
    'Grade 8': ['Mathematics', 'Science', 'Language Arts'],
  },
  ged: {
    'Grade 11': ['Mathematical Reasoning', 'Science', 'Social Studies', 'Reasoning Through Language Arts'],
    'Grade 12': ['Mathematical Reasoning', 'Science', 'Social Studies', 'Reasoning Through Language Arts'],
  },
};

export const SUBTOPICS = {
  igcse: {
    'Grade 9': {
      Mathematics: ['Number and Algebra', 'Geometry and Trigonometry', 'Statistics', 'Probability'],
      Physics: ['Forces and Motion', 'Thermal Physics', 'Waves'],
      Chemistry: ['Atomic Structure', 'Bonding', 'Chemical Reactions'],
      Biology: ['Cell Biology', 'Genetics', 'Ecology'],
      English: ['Reading Comprehension', 'Writing Skills'],
    },
    'Grade 10': {
      Mathematics: ['Algebra and Functions', 'Geometry and Trigonometry', 'Statistics and Probability', 'Calculus Introduction'],
      Physics: ['Electricity and Magnetism', 'Atomic Physics', 'Nuclear Physics'],
      Chemistry: ['Electrochemistry', 'Organic Chemistry', 'Chemical Equilibrium'],
      Biology: ['Reproduction', 'Homeostasis', 'Evolution'],
      English: ['Literature Analysis', 'Extended Writing'],
    },
  },
  ib_myp: {
    'Grade 6': {
      Mathematics: ['Number Systems', 'Basic Algebra', 'Geometry Basics'],
      Sciences: ['Scientific Method', 'States of Matter', 'Living Things'],
      'Language & Literature': ['Reading Skills', 'Writing Basics'],
    },
    'Grade 7': {
      Mathematics: ['Fractions and Decimals', 'Linear Equations', 'Data Handling'],
      Sciences: ['Energy', 'Chemical Changes', 'Human Biology'],
      'Language & Literature': ['Comprehension', 'Creative Writing'],
    },
    'Grade 8': {
      Mathematics: ['Geometry', 'Statistics and Probability', 'Quadratic Equations'],
      Sciences: ['Forces', 'Periodic Table', 'Ecosystems'],
      'Language & Literature': ['Literary Analysis', 'Argumentative Writing'],
    },
  },
  ib_dp: {
    'Grade 11': {
      Mathematics: ['Algebra', 'Functions', 'Differential Calculus'],
      Physics: ['Mechanics', 'Thermal Physics', 'Waves and Optics'],
      Chemistry: ['Atomic Structure', 'Bonding', 'Energetics'],
      Biology: ['Cell Theory', 'Molecular Biology', 'Genetics'],
      Economics: ['Microeconomics', 'Macroeconomics'],
    },
    'Grade 12': {
      Mathematics: ['Integral Calculus', 'Statistics and Probability', 'Vectors'],
      Physics: ['Electromagnetism', 'Atomic Physics', 'Energy'],
      Chemistry: ['Equilibrium', 'Acids and Bases', 'Organic Chemistry'],
      Biology: ['Evolution', 'Ecology', 'Neurobiology'],
      Economics: ['International Economics', 'Development Economics'],
    },
  },
  canada: {
    'Grade 6': {
      Mathematics: ['Whole Numbers', 'Fractions', 'Patterns and Relations'],
      Science: ['Biodiversity', 'Flight', 'Electricity'],
      'Language Arts': ['Reading Strategies', 'Writing Process'],
    },
    'Grade 7': {
      Mathematics: ['Ratios and Proportional Reasoning', 'Integers', 'Data and Probability'],
      Science: ['Interactions in Ecosystems', 'Heat and Temperature', 'Structures and Forces'],
      'Language Arts': ['Research Skills', 'Media Literacy'],
    },
    'Grade 8': {
      Mathematics: ['Linear Relations', 'Geometry', 'Statistics'],
      Science: ['Optics', 'Fluids', 'Cells and Systems'],
      'Language Arts': ['Critical Thinking', 'Persuasive Writing'],
    },
  },
  ged: {
    'Grade 11': {
      'Mathematical Reasoning': ['Basic Math', 'Algebra', 'Geometry'],
      Science: ['Life Science', 'Physical Science', 'Earth Science'],
      'Social Studies': ['US History', 'Civics and Government', 'Geography'],
      'Reasoning Through Language Arts': ['Extended Response', 'Reading Comprehension'],
    },
    'Grade 12': {
      'Mathematical Reasoning': ['Advanced Algebra', 'Functions', 'Statistics'],
      Science: ['Advanced Life Science', 'Advanced Physical Science'],
      'Social Studies': ['Economics', 'World History'],
      'Reasoning Through Language Arts': ['Literary Texts', 'Informational Texts'],
    },
  },
};
