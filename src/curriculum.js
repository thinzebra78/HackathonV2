export const gradeLabels = ['K', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

export const subjectMeta = {
  math: {
    label: 'Math',
    short: 'M',
    color: '#0f766e',
  },
  ela: {
    label: 'English Language Arts',
    short: 'E',
    color: '#6d5dfc',
  },
  science: {
    label: 'Science',
    short: 'S',
    color: '#2f7d32',
  },
  history: {
    label: 'Social Studies',
    short: 'H',
    color: '#b45309',
  },
}

export const courseCatalog = {
  math: [
    course('K', 'Kindergarten Math: Counting and Shapes', 'Build number sense through counting, comparing, shapes, and simple story problems.', [
      'Counting objects to 20',
      'Comparing more, fewer, and equal groups',
      'Two-dimensional and three-dimensional shapes',
      'Putting together and taking apart numbers',
      'Patterns, positions, and measurement words',
    ]),
    course('1', 'Grade 1 Math: Addition and Subtraction', 'Practice place value, fluency within 20, measurement, and early word problems.', [
      'Addition and subtraction within 20',
      'Place value with tens and ones',
      'Length, time, and data',
      'Equal shares and simple geometry',
      'One-step story problems',
    ]),
    course('2', 'Grade 2 Math: Place Value and Fluency', 'Strengthen two-digit operations, time, money, measurement, and arrays.', [
      'Place value to 1,000',
      'Fluent addition and subtraction',
      'Money, time, and measurement',
      'Arrays and equal groups',
      'Word problem strategies',
    ]),
    course('3', 'Grade 3 Math: Multiplication and Fractions', 'Move from repeated addition into multiplication, division, fractions, and measurement.', [
      'Multiplication and division facts',
      'Fractions on number lines',
      'Area and perimeter',
      'Rounding and multi-step problems',
      'Representing data',
    ]),
    course('4', 'Grade 4 Math: Factors, Fractions, and Geometry', 'Connect multi-digit operations to fraction equivalence, angles, and measurement conversions.', [
      'Multi-digit multiplication and division',
      'Equivalent fractions and decimals',
      'Angles, lines, and symmetry',
      'Measurement conversions',
      'Multi-step word problems',
    ]),
    course('5', 'Grade 5 Math: Decimal and Fraction Fluency', 'Use place value, fraction operations, volume, and coordinate grids to solve richer problems.', [
      'Decimal operations',
      'Fraction addition and multiplication',
      'Volume and coordinate planes',
      'Powers of ten',
      'Problem solving with models',
    ]),
    course('6', 'Grade 6 Math: Ratios and Expressions', 'Develop ratio reasoning, integer fluency, statistical thinking, and equation solving.', [
      'Ratios, rates, and percentages',
      'Integer operations',
      'Expressions and one-step equations',
      'Area, surface area, and volume',
      'Statistical distributions',
    ]),
    course('7', 'Grade 7 Math: Proportional Reasoning', 'Use proportional relationships, rational numbers, probability, and equations.', [
      'Proportional relationships',
      'Operations with rational numbers',
      'Percents and scale drawings',
      'Probability models',
      'Linear equations and inequalities',
    ]),
    course('8', 'Grade 8 Math: Linear Functions and Geometry', 'Bridge middle school math into algebra with functions, transformations, and the Pythagorean theorem.', [
      'Linear equations and slope',
      'Functions and graphs',
      'Systems of equations',
      'Transformations and congruence',
      'Pythagorean theorem',
    ]),
    course('9', 'Algebra I: Expressions, Equations, and Functions', 'Model relationships with equations, inequalities, functions, and data.', [
      'Linear equations and inequalities',
      'Systems and modeling',
      'Exponents and polynomials',
      'Quadratic functions',
      'Data interpretation',
    ]),
    course('10', 'Geometry: Proof, Shape, and Measurement', 'Use logic, transformations, similarity, trigonometry, and circles to reason about space.', [
      'Geometric proof',
      'Congruence and similarity',
      'Right triangle trigonometry',
      'Circles and coordinate geometry',
      'Area and volume applications',
    ]),
    course('11', 'Algebra II and Statistics', 'Extend algebraic fluency with functions, complex numbers, probability, and statistical inference.', [
      'Polynomial and rational functions',
      'Exponential and logarithmic models',
      'Sequences and series',
      'Probability and statistics',
      'Function transformations',
    ]),
    course('12', 'Precalculus and Applied Modeling', 'Prepare for college math through advanced functions, trigonometry, vectors, and modeling.', [
      'Advanced function analysis',
      'Trigonometric identities',
      'Vectors and matrices',
      'Limits and rates of change',
      'Applied data modeling',
    ]),
  ],
  ela: [
    course('K', 'Kindergarten ELA: Letters, Sounds, and Stories', 'Connect letters, sounds, sight words, and listening skills through short texts.', [
      'Letter names and sounds',
      'Rhyming and syllables',
      'High-frequency words',
      'Story sequence',
      'Speaking in complete thoughts',
    ]),
    course('1', 'Grade 1 ELA: Reading Foundations', 'Build decoding, fluency, vocabulary, and story comprehension.', [
      'Short and long vowel sounds',
      'Consonant blends',
      'Sight word fluency',
      'Character and setting',
      'Opinion and narrative writing',
    ]),
    course('2', 'Grade 2 ELA: Fluency and Text Features', 'Read with accuracy, use text features, and write organized paragraphs.', [
      'Phonics patterns',
      'Fluency and expression',
      'Main idea and details',
      'Informational text features',
      'Paragraph structure',
    ]),
    course('3', 'Grade 3 ELA: Vocabulary and Paragraphs', 'Use context, prefixes, suffixes, and evidence to understand stories and articles.', [
      'Context clues',
      'Prefixes and suffixes',
      'Theme and lesson',
      'Text evidence',
      'Informative writing',
    ]),
    course('4', 'Grade 4 ELA: Close Reading and Writing', 'Analyze point of view, compare texts, and write clear explanations.', [
      'Theme and point of view',
      'Academic vocabulary',
      'Comparing texts',
      'Research notes',
      'Opinion writing with reasons',
    ]),
    course('5', 'Grade 5 ELA: Argument and Research', 'Read complex texts, evaluate evidence, and write structured arguments.', [
      'Figurative language',
      'Text structure',
      'Evidence-based responses',
      'Research and source use',
      'Argument writing',
    ]),
    course('6', 'Grade 6 ELA: Literature and Informational Text', 'Study narrative craft, central ideas, word choice, and explanatory writing.', [
      'Plot and character development',
      'Central idea and summary',
      'Word choice and tone',
      'Sentence variety',
      'Explanatory essays',
    ]),
    course('7', 'Grade 7 ELA: Analysis and Evidence', 'Develop analysis with stronger evidence, grammar control, and formal discussion.', [
      'Theme development',
      'Claims and evidence',
      'Rhetorical choices',
      'Conventions and punctuation',
      'Analytical paragraphs',
    ]),
    course('8', 'Grade 8 ELA: Rhetoric and Composition', 'Prepare for high school reading and writing with argument, style, and source synthesis.', [
      'Argument structure',
      'Author purpose',
      'Media and source credibility',
      'Sentence craft',
      'Research synthesis',
    ]),
    course('9', 'English I: Literature and Composition', 'Analyze literary elements and write clear arguments with textual evidence.', [
      'Short fiction and poetry',
      'Theme and symbolism',
      'Argument essays',
      'Vocabulary in context',
      'Revision and editing',
    ]),
    course('10', 'English II: World Literature and Argument', 'Read world literature and informational texts while strengthening analysis.', [
      'World literature themes',
      'Rhetorical analysis',
      'Comparative writing',
      'Grammar for style',
      'Research presentations',
    ]),
    course('11', 'English III: American Literature and Research', 'Study American voices, rhetoric, research, and synthesis writing.', [
      'American literary movements',
      'Historical context',
      'Rhetorical appeals',
      'Research methods',
      'Synthesis essays',
    ]),
    course('12', 'English IV: College Readiness Composition', 'Practice advanced reading, argument, style, and college-ready composition.', [
      'Complex nonfiction',
      'Literary criticism',
      'Advanced argument',
      'College essays',
      'Independent research',
    ]),
  ],
  science: [
    course('K', 'Kindergarten Science: Observing the World', 'Ask questions, make observations, and describe plants, animals, weather, and materials.', [
      'Weather observations',
      'Plant and animal needs',
      'Pushes and pulls',
      'Light and shadows',
      'Sorting materials',
    ]),
    course('1', 'Grade 1 Science: Patterns in Nature', 'Explore sound, light, plants, animals, and sky patterns.', [
      'Sound and vibration',
      'Light and shadows',
      'Plant structures',
      'Animal parents and offspring',
      'Sun, moon, and stars',
    ]),
    course('2', 'Grade 2 Science: Matter, Habitats, and Earth', 'Investigate properties of matter, habitats, landforms, and erosion.', [
      'Solids, liquids, and materials',
      'Plant needs and pollination',
      'Habitats and biodiversity',
      'Land and water shapes',
      'Engineering with materials',
    ]),
    course('3', 'Grade 3 Science: Forces, Life Cycles, and Climate', 'Model forces, inherited traits, life cycles, and weather patterns.', [
      'Balanced and unbalanced forces',
      'Magnets and motion',
      'Life cycles',
      'Inherited and learned traits',
      'Weather and climate patterns',
    ]),
    course('4', 'Grade 4 Science: Energy, Waves, and Earth Systems', 'Study energy transfer, waves, fossils, and changing landscapes.', [
      'Energy transfer',
      'Waves and information',
      'Fossils and rock layers',
      'Weathering and erosion',
      'Natural hazards',
    ]),
    course('5', 'Grade 5 Science: Matter, Ecosystems, and Space', 'Use models to explain matter, food webs, Earth systems, and stars.', [
      'Particles and mixtures',
      'Food webs and ecosystems',
      'Water cycle and Earth systems',
      'Stars and solar system',
      'Engineering design tests',
    ]),
    course('6', 'Grade 6 Science: Earth Science', 'Analyze Earth materials, plate motion, weather, climate, and human impact.', [
      'Rocks and minerals',
      'Plate tectonics',
      'Weather systems',
      'Climate data',
      'Resource use and impact',
    ]),
    course('7', 'Grade 7 Science: Life Science', 'Connect cells, body systems, genetics, ecosystems, and evolution.', [
      'Cells and organization',
      'Body systems',
      'Genetics and traits',
      'Ecosystem interactions',
      'Natural selection',
    ]),
    course('8', 'Grade 8 Science: Physical Science', 'Model matter, chemical reactions, forces, energy, and waves.', [
      'Atoms and periodic patterns',
      'Chemical reactions',
      'Forces and motion',
      'Energy transformations',
      'Waves and information',
    ]),
    course('9', 'Biology: Cells, Genetics, and Ecology', 'Study living systems from molecules and cells to ecosystems and evolution.', [
      'Cell structure and function',
      'DNA and inheritance',
      'Evolution and adaptation',
      'Ecology and energy flow',
      'Human body systems',
    ]),
    course('10', 'Chemistry: Matter and Reactions', 'Explain matter through atomic structure, bonding, reactions, energy, and solutions.', [
      'Atomic structure',
      'Periodic trends',
      'Chemical bonding',
      'Reaction types and stoichiometry',
      'Acids, bases, and solutions',
    ]),
    course('11', 'Physics: Motion, Energy, and Waves', 'Use mathematical models for motion, forces, energy, electricity, and waves.', [
      'Kinematics and forces',
      'Energy and momentum',
      'Electricity and magnetism',
      'Waves and optics',
      'Modern physics models',
    ]),
    course('12', 'Environmental Science and Engineering', 'Analyze ecosystems, climate, resources, sustainability, and design solutions.', [
      'Biodiversity and ecosystems',
      'Climate systems',
      'Water and land resources',
      'Energy choices',
      'Engineering for sustainability',
    ]),
  ],
  history: [
    course('K', 'Kindergarten Social Studies: My Community', 'Learn about self, family, school, maps, rules, and community helpers.', [
      'Family and identity',
      'School routines and rules',
      'Community helpers',
      'Simple maps',
      'Past and present',
    ]),
    course('1', 'Grade 1 Social Studies: Communities Then and Now', 'Compare communities, symbols, leaders, and daily life over time.', [
      'Neighborhood roles',
      'Maps and directions',
      'National symbols',
      'Past and present life',
      'Problem solving in groups',
    ]),
    course('2', 'Grade 2 Social Studies: Geography and Citizenship', 'Study local geography, government, culture, and civic responsibility.', [
      'Landforms and maps',
      'Local government',
      'Goods and services',
      'Cultural traditions',
      'Responsible citizenship',
    ]),
    course('3', 'Grade 3 Social Studies: World Communities', 'Explore world regions, cultures, economies, and historical timelines.', [
      'World geography',
      'Culture and traditions',
      'Resources and trade',
      'Timelines and sources',
      'Community decisions',
    ]),
    course('4', 'Grade 4 Social Studies: State and U.S. Foundations', 'Connect state history, geography, early peoples, and the formation of government.', [
      'State geography',
      'Indigenous peoples',
      'Exploration and settlement',
      'Early government',
      'Primary sources',
    ]),
    course('5', 'Grade 5 Social Studies: U.S. History I', 'Study early America, the Revolution, the Constitution, expansion, and reform.', [
      'Colonial regions',
      'American Revolution',
      'Constitutional principles',
      'Westward expansion',
      'Reform movements',
    ]),
    course('6', 'Grade 6 Social Studies: Ancient Civilizations', 'Analyze early humans, river civilizations, classical societies, and world religions.', [
      'Early humans and agriculture',
      'Mesopotamia and Egypt',
      'Ancient India and China',
      'Greece and Rome',
      'World religions and trade',
    ]),
    course('7', 'Grade 7 Social Studies: World History and Geography', 'Trace civilizations, empires, trade networks, and cultural exchange across regions.', [
      'Medieval worlds',
      'Islamic civilizations',
      'African kingdoms',
      'Asian empires',
      'Trade and cultural diffusion',
    ]),
    course('8', 'Grade 8 Social Studies: U.S. History II and Civics', 'Study the founding era through Reconstruction with civic principles and source analysis.', [
      'Founding documents',
      'Early republic',
      'Expansion and conflict',
      'Civil War',
      'Reconstruction and citizenship',
    ]),
    course('9', 'World History: Patterns and Turning Points', 'Analyze global changes from early modern societies to industrialization.', [
      'Renaissance and Reformation',
      'Global exploration',
      'Revolutions and rights',
      'Industrialization',
      'Imperialism and resistance',
    ]),
    course('10', 'Modern World History', 'Study global conflict, decolonization, human rights, and modern interdependence.', [
      'World War I',
      'World War II',
      'Cold War',
      'Decolonization',
      'Globalization and human rights',
    ]),
    course('11', 'U.S. History and Government', 'Investigate modern U.S. history, constitutional systems, civil rights, and policy debates.', [
      'Industrial America',
      'Progressive era',
      'World wars and home front',
      'Civil rights movements',
      'Government and policy',
    ]),
    course('12', 'Civics, Economics, and Global Issues', 'Prepare for civic life through government, economics, media literacy, and global challenges.', [
      'Constitutional government',
      'Civil liberties and rights',
      'Microeconomics and macroeconomics',
      'Media and public policy',
      'Global institutions',
    ]),
  ],
}

export function getGradeNumber(gradeLabel) {
  return gradeLabel === 'K' ? 0 : Number(gradeLabel)
}

export function getCourse(gradeLabel, subject) {
  return courseCatalog[subject].find((item) => item.grade === gradeLabel)
}

export function createQuestion(subject, gradeNumber, difficulty) {
  if (subject === 'math') return createMathQuestion(gradeNumber, difficulty)
  if (subject === 'ela') return chooseQuestion(elaQuestionBank, gradeNumber)
  if (subject === 'science') return chooseQuestion(scienceQuestionBank, gradeNumber)
  return chooseQuestion(historyQuestionBank, gradeNumber)
}

function course(grade, title, overview, units) {
  return {
    grade,
    title,
    overview,
    units,
    outcomes: [
      'Practice grade-level vocabulary and concepts',
      'Answer mixed questions with immediate feedback',
      'Build accuracy, streaks, and course progress',
    ],
  }
}

function createMathQuestion(grade, difficulty) {
  const challenge = difficulty === 'challenge'
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
  let prompt = ''
  let answer = 0
  let type = 'Number sense'

  if (grade === 0) {
    const choice = random(1, 4)
    if (choice === 1) {
      const count = random(3, challenge ? 12 : 8)
      prompt = `Count the objects: ${Array.from({ length: count }, () => 'o').join(' ')}`
      answer = count
      type = 'Counting'
    } else if (choice === 2) {
      const a = random(1, 9)
      const b = random(1, 9)
      prompt = `Which number is bigger: ${a} or ${b}?`
      answer = Math.max(a, b)
      type = 'Comparing numbers'
    } else if (choice === 3) {
      const a = random(1, 5)
      const b = random(1, 5)
      prompt = `${a} + ${b} = ?`
      answer = a + b
      type = 'Adding small numbers'
    } else {
      const start = random(1, 6)
      prompt = `What number comes after ${start}?`
      answer = start + 1
      type = 'Number order'
    }
  } else if (grade <= 2) {
    const a = random(4, challenge ? 40 : 20)
    const b = random(2, challenge ? 20 : 12)
    const choice = random(1, 6)
    if (choice === 1) {
      prompt = `${a} + ${b} = ?`
      answer = a + b
      type = 'Addition'
    } else if (choice === 2) {
      prompt = `${a} - ${Math.min(a, b)} = ?`
      answer = a - Math.min(a, b)
      type = 'Subtraction'
    } else if (choice === 3) {
      const missing = random(2, 9)
      prompt = `${a} + ? = ${a + missing}`
      answer = missing
      type = 'Missing addend'
    } else if (choice === 4) {
      const tens = random(2, challenge ? 9 : 6)
      const ones = random(0, 9)
      prompt = `${tens} tens and ${ones} ones equals what number?`
      answer = tens * 10 + ones
      type = 'Place value'
    } else if (choice === 5) {
      const groups = random(2, 6)
      prompt = `Count by 5s: what is 5 x ${groups}?`
      answer = 5 * groups
      type = 'Skip counting'
    } else {
      const total = random(10, challenge ? 40 : 25)
      const part = random(2, total - 2)
      prompt = `${total} - ? = ${part}`
      answer = total - part
      type = 'Missing subtrahend'
    }
  } else if (grade <= 5) {
    const a = random(3, challenge ? 16 : 12)
    const b = random(2, challenge ? 14 : 10)
    const choice = random(1, 8)
    if (choice === 1) {
      prompt = `${a} x ${b} = ?`
      answer = a * b
      type = 'Multiplication'
    } else if (choice === 2) {
      prompt = `${a * b} / ${a} = ?`
      answer = b
      type = 'Division'
    } else if (choice === 3) {
      prompt = `A rectangle is ${a} by ${b}. What is its area?`
      answer = a * b
      type = 'Area'
    } else if (choice === 4) {
      prompt = `What is one half of ${a * 2}?`
      answer = a
      type = 'Fractions'
    } else if (choice === 5) {
      prompt = `A rectangle is ${a} by ${b}. What is its perimeter?`
      answer = 2 * (a + b)
      type = 'Perimeter'
    } else if (choice === 6) {
      const base = random(12, challenge ? 90 : 60)
      prompt = `Round ${base} to the nearest ten.`
      answer = Math.round(base / 10) * 10
      type = 'Rounding'
    } else if (choice === 7) {
      const groupSize = random(3, 9)
      const groups = random(2, 8)
      prompt = `${groups} packs have ${groupSize} items each. How many items total?`
      answer = groupSize * groups
      type = 'Word problems'
    } else {
      const whole = b * 4
      prompt = `What is 3/4 of ${whole}?`
      answer = b * 3
      type = 'Fractions'
    }
  } else if (grade <= 8) {
    const a = random(2, challenge ? 12 : 8)
    const b = random(4, challenge ? 24 : 16)
    const x = random(2, challenge ? 14 : 9)
    const choice = random(1, 8)
    if (choice === 1) {
      prompt = `Solve: ${a}x + ${b} = ${a * x + b}`
      answer = x
      type = 'Equations'
    } else if (choice === 2) {
      prompt = `What is ${a * 10}% of ${b * 10}?`
      answer = a * b
      type = 'Percents'
    } else if (choice === 3) {
      prompt = `A ratio is ${a}:${b}. What is the total parts?`
      answer = a + b
      type = 'Ratios'
    } else if (choice === 4) {
      prompt = `Find the slope from (0, ${b}) to (2, ${b + 2 * a}).`
      answer = a
      type = 'Linear relationships'
    } else if (choice === 5) {
      prompt = `Find the median of ${a}, ${b}, and ${a + b}.`
      answer = Math.max(a, b)
      type = 'Statistics'
    } else if (choice === 6) {
      const total = random(6, 12)
      const favorable = random(1, total - 1)
      prompt = `${favorable} out of ${total} tiles are blue. How many are not blue?`
      answer = total - favorable
      type = 'Probability'
    } else if (choice === 7) {
      const rate = random(2, 9)
      const hours = random(3, 8)
      prompt = `A bike travels ${rate * hours} miles in ${hours} hours. What is the unit rate?`
      answer = rate
      type = 'Unit rates'
    } else {
      prompt = `Solve: ${a}x - ${b} = ${a * x - b}`
      answer = x
      type = 'Equations'
    }
  } else {
    const a = random(2, challenge ? 9 : 6)
    const b = random(2, challenge ? 12 : 8)
    const x = random(2, challenge ? 10 : 7)
    const choice = random(1, 8)
    if (choice === 1) {
      prompt = `Solve: ${a}x - ${b} = ${a * x - b}`
      answer = x
      type = 'Algebra'
    } else if (choice === 2) {
      prompt = `Evaluate ${a} squared + ${b} squared.`
      answer = a * a + b * b
      type = 'Powers'
    } else if (choice === 3) {
      prompt = `If f(x) = ${a}x + ${b}, what is f(${x})?`
      answer = a * x + b
      type = 'Functions'
    } else if (choice === 4) {
      prompt = `A value grows from ${b * 10} to ${b * 10 + a * 10}. What is the increase?`
      answer = a * 10
      type = 'Modeling'
    } else if (choice === 5) {
      prompt = `What common factor do ${a * b} and ${a * x} share?`
      answer = a
      type = 'Factoring'
    } else if (choice === 6) {
      prompt = `If g(x) = x squared - ${a}, what is g(${b})?`
      answer = b * b - a
      type = 'Quadratics'
    } else if (choice === 7) {
      prompt = `A sequence starts at ${a} and adds ${b}. What is term 5?`
      answer = a + 4 * b
      type = 'Sequences'
    } else {
      prompt = `What is the range of the values ${a}, ${b}, ${x}, and ${a + b + x}?`
      answer = a + b + x - Math.min(a, b, x)
      type = 'Statistics'
    }
  }

  return {
    type,
    prompt,
    answer: String(answer),
    options: buildNumberOptions(answer, challenge),
  }
}

function buildNumberOptions(answer, challenge) {
  const spread = challenge ? 18 : 10
  const options = new Set([answer])

  while (options.size < 4) {
    const offset = Math.floor(Math.random() * spread) + 1
    const next = Math.max(0, answer + (Math.random() > 0.5 ? offset : -offset))
    options.add(next)
  }

  return shuffle([...options].map(String))
}

function chooseQuestion(bank, grade) {
  const eligible = bank.filter((item) => grade >= item.min && grade <= item.max)
  const fallback = bank.filter((item) => grade >= item.min)
  const pool = eligible.length ? eligible : fallback
  const selected = pool[Math.floor(Math.random() * pool.length)]

  return {
    type: selected.type,
    prompt: selected.prompt,
    answer: selected.answer,
    options: shuffle([...selected.options]),
  }
}

function shuffle(items) {
  return items.sort(() => Math.random() - 0.5)
}

const elaQuestionBank = [
  q(0, 0, 'Letters', 'Which letter starts the word "sun"?', 'S', ['S', 'M', 'T', 'B']),
  q(0, 0, 'Rhyming', 'Which word rhymes with "cat"?', 'hat', ['hat', 'dog', 'sun', 'pen']),
  q(0, 0, 'Letters', 'Which letter starts the word "ball"?', 'B', ['B', 'D', 'P', 'T']),
  q(0, 1, 'Story order', 'What usually comes first in a story?', 'beginning', ['beginning', 'ending', 'author bio', 'page number']),
  q(0, 1, 'Sounds', 'Which word starts with the same sound as "moon"?', 'map', ['map', 'sun', 'fish', 'cup']),
  q(1, 2, 'Phonics', 'Choose the word with a long a sound.', 'cake', ['cake', 'cat', 'map', 'ran']),
  q(1, 2, 'Sentence sense', 'Which is a complete sentence?', 'The dog runs.', ['The dog runs.', 'Runs fast', 'The dog', 'Fast blue']),
  q(1, 2, 'Phonics', 'Which word has the sh sound?', 'ship', ['ship', 'sip', 'chip', 'tip']),
  q(1, 2, 'Vocabulary', 'Which word means almost the same as "big"?', 'large', ['large', 'tiny', 'quiet', 'cold']),
  q(2, 3, 'Grammar', 'Which word is a noun?', 'teacher', ['teacher', 'quickly', 'blue', 'jump']),
  q(2, 3, 'Text features', 'What helps readers find a topic quickly in a nonfiction book?', 'index', ['index', 'dialogue', 'stanza', 'rhyme']),
  q(2, 4, 'Comprehension', 'A detail in a text should...', 'support the main idea', ['support the main idea', 'replace the title', 'hide the topic', 'change the author']),
  q(3, 4, 'Vocabulary', 'What does the prefix "pre-" mean?', 'before', ['before', 'again', 'not', 'after']),
  q(3, 4, 'Vocabulary', 'What does the suffix "-less" mean?', 'without', ['without', 'full of', 'before', 'again']),
  q(3, 5, 'Comprehension', 'The main idea is the...', 'most important point', ['most important point', 'last sentence only', 'author name', 'page number']),
  q(4, 5, 'Grammar', 'Which sentence uses a conjunction?', 'I packed lunch, but I forgot water.', ['I packed lunch, but I forgot water.', 'The tall tree.', 'Running quickly.', 'Blue and bright.']),
  q(4, 5, 'Writing', 'Which sentence uses evidence?', 'The text says that the bridge opened in 1937.', ['The text says that the bridge opened in 1937.', 'I like bridges.', 'This is cool.', 'Everyone knows it.']),
  q(5, 6, 'Figurative language', 'A comparison using "like" or "as" is a...', 'simile', ['simile', 'theme', 'noun', 'summary']),
  q(5, 6, 'Text structure', 'A cause-and-effect text explains...', 'why something happened and what followed', ['why something happened and what followed', 'only character names', 'alphabetical definitions', 'random dates']),
  q(5, 7, 'Point of view', 'First-person narration often uses...', 'I and me', ['I and me', 'he and she only', 'chapter titles', 'footnotes']),
  q(6, 7, 'Analysis', 'Tone means the author\'s...', 'attitude toward the subject', ['attitude toward the subject', 'alphabetical order', 'page count', 'setting only']),
  q(6, 8, 'Theme', 'A theme is best described as...', 'a message about life', ['a message about life', 'the page count', 'the author photo', 'a punctuation mark']),
  q(7, 8, 'Grammar', 'A semicolon can connect...', 'two closely related independent clauses', ['two closely related independent clauses', 'a noun and an adjective', 'only two verbs', 'a title and subtitle']),
  q(7, 8, 'Argument', 'A strong claim should be...', 'debatable and specific', ['debatable and specific', 'a random fact', 'a question only', 'one word']),
  q(8, 9, 'Source use', 'Which source is usually most credible for population data?', 'a government census page', ['a government census page', 'an anonymous comment', 'a movie poster', 'a shopping ad']),
  q(8, 10, 'Media literacy', 'A biased source may...', 'favor one side unfairly', ['favor one side unfairly', 'include no viewpoint', 'always be a dictionary', 'avoid all word choice']),
  q(9, 10, 'Rhetoric', 'Ethos appeals to...', 'credibility', ['credibility', 'sound effects', 'chronology', 'setting']),
  q(9, 10, 'Rhetoric', 'Pathos appeals to...', 'emotion', ['emotion', 'calendar order', 'font size', 'paragraph count']),
  q(9, 11, 'Poetry', 'Imagery helps readers...', 'picture sensory details', ['picture sensory details', 'skip the text', 'count pages', 'find only dates']),
  q(10, 11, 'Literature', 'Symbolism is when an object...', 'represents a larger idea', ['represents a larger idea', 'lists every event', 'names the speaker', 'counts syllables']),
  q(10, 12, 'Analysis', 'A motif is...', 'a repeated element with meaning', ['a repeated element with meaning', 'a spelling error', 'a page heading', 'a source list']),
  q(11, 12, 'Research', 'A synthesis essay should...', 'combine ideas from multiple sources', ['combine ideas from multiple sources', 'copy one source exactly', 'avoid evidence', 'use only opinions']),
  q(11, 12, 'Argument', 'A counterclaim is...', 'an opposing argument', ['an opposing argument', 'a repeated title', 'a source citation style', 'a sentence fragment']),
  q(12, 12, 'Style', 'Concise writing avoids...', 'unnecessary words', ['unnecessary words', 'clear verbs', 'specific nouns', 'evidence']),
  q(12, 12, 'Research', 'A strong thesis should be...', 'specific and arguable', ['specific and arguable', 'a single vague word', 'only a quotation', 'hidden in the bibliography']),
]

const scienceQuestionBank = [
  q(0, 0, 'Observation', 'Which tool can help you see something tiny?', 'magnifying glass', ['magnifying glass', 'ruler', 'calendar', 'map']),
  q(0, 1, 'Weather', 'Rain, snow, wind, and sunshine describe...', 'weather', ['weather', 'gravity', 'fiction', 'money']),
  q(0, 0, 'Senses', 'Which sense helps you hear a bell?', 'hearing', ['hearing', 'taste', 'touch', 'sight']),
  q(0, 1, 'Motion', 'A push or pull is a...', 'force', ['force', 'habitat', 'shadow', 'season']),
  q(1, 2, 'Light', 'A shadow forms when light is...', 'blocked', ['blocked', 'eaten', 'frozen', 'counted']),
  q(1, 2, 'Life science', 'What do plants need to grow?', 'water and light', ['water and light', 'plastic and glue', 'sand only', 'darkness only']),
  q(1, 3, 'Animals', 'A habitat is...', 'where an organism lives', ['where an organism lives', 'a type of weather', 'a metal tool', 'a measuring cup']),
  q(2, 3, 'Matter', 'Water is a liquid because it...', 'takes the shape of its container', ['takes the shape of its container', 'keeps one fixed shape', 'is always invisible', 'cannot move']),
  q(2, 4, 'Matter', 'Which property describes how heavy something is?', 'mass', ['mass', 'color', 'shape', 'sound']),
  q(3, 4, 'Forces', 'A magnet can attract objects made with...', 'iron', ['iron', 'paper', 'wood', 'rubber']),
  q(3, 5, 'Life cycles', 'A butterfly changes from a caterpillar through...', 'metamorphosis', ['metamorphosis', 'evaporation', 'erosion', 'condensation']),
  q(4, 5, 'Earth systems', 'Weathering is the process that...', 'breaks rocks into smaller pieces', ['breaks rocks into smaller pieces', 'makes stars', 'stops gravity', 'creates electricity']),
  q(4, 6, 'Energy', 'Energy can be transferred as heat, light, sound, or...', 'motion', ['motion', 'fiction', 'grammar', 'currency']),
  q(5, 6, 'Ecosystems', 'In a food web, arrows usually show...', 'energy flow', ['energy flow', 'map direction', 'weather speed', 'age']),
  q(5, 7, 'Space', 'Earth rotates once about every...', '24 hours', ['24 hours', '7 days', '30 days', '365 years']),
  q(6, 7, 'Earth science', 'Tectonic plates move on top of the...', 'mantle', ['mantle', 'cloud layer', 'moon', 'outer space']),
  q(6, 8, 'Weather', 'Air pressure is measured with a...', 'barometer', ['barometer', 'microscope', 'spring scale', 'telescope']),
  q(7, 8, 'Cells', 'The nucleus of a cell stores...', 'genetic information', ['genetic information', 'rain water', 'sound waves', 'sunlight']),
  q(7, 9, 'Genetics', 'An inherited trait is passed from...', 'parents to offspring', ['parents to offspring', 'rocks to rivers', 'weather to maps', 'books to shelves']),
  q(8, 9, 'Physical science', 'Acceleration means a change in...', 'velocity', ['velocity', 'mass only', 'color only', 'volume only']),
  q(8, 10, 'Chemistry', 'A chemical reaction creates...', 'new substances', ['new substances', 'only bigger pieces', 'no changes', 'only shadows']),
  q(9, 10, 'Biology', 'DNA is best described as...', 'instructions for traits', ['instructions for traits', 'a type of rock', 'a weather pattern', 'a force']),
  q(9, 11, 'Ecology', 'Carrying capacity is the...', 'largest population an environment can support', ['largest population an environment can support', 'speed of an object', 'temperature of boiling water', 'number of protons']),
  q(10, 11, 'Chemistry', 'Atoms with the same number of protons are the same...', 'element', ['element', 'solution', 'mixture', 'force']),
  q(10, 12, 'Chemistry', 'A catalyst changes the rate of a reaction without being...', 'used up', ['used up', 'measured', 'heated', 'named']),
  q(11, 12, 'Physics', 'Momentum depends on mass and...', 'velocity', ['velocity', 'temperature', 'color', 'shape']),
  q(11, 12, 'Physics', 'Newton\'s first law describes...', 'inertia', ['inertia', 'photosynthesis', 'plate tectonics', 'evaporation']),
  q(12, 12, 'Environment', 'Biodiversity means the variety of...', 'living things in an area', ['living things in an area', 'cloud shapes', 'road signs', 'metal tools']),
  q(12, 12, 'Environment', 'A renewable resource can be...', 'replaced naturally over time', ['replaced naturally over time', 'used only once forever', 'made only from plastic', 'found only in cities']),
]

const historyQuestionBank = [
  q(0, 0, 'Community', 'A rule is made to help people...', 'stay safe and fair', ['stay safe and fair', 'hide maps', 'stop learning', 'forget names']),
  q(0, 1, 'Community', 'A community helper who puts out fires is a...', 'firefighter', ['firefighter', 'author', 'astronaut', 'painter']),
  q(1, 2, 'Maps', 'A map key explains...', 'symbols on a map', ['symbols on a map', 'song lyrics', 'animal sounds', 'math answers']),
  q(1, 2, 'Citizenship', 'Voting is one way people...', 'make choices in a democracy', ['make choices in a democracy', 'measure temperature', 'plant seeds', 'draw maps only']),
  q(2, 3, 'Economics', 'People use money to...', 'buy goods and services', ['buy goods and services', 'measure rain', 'grow sunlight', 'write laws by itself']),
  q(2, 3, 'Geography', 'A compass rose shows...', 'directions', ['directions', 'prices', 'laws', 'birthdays']),
  q(3, 4, 'Sources', 'A primary source is created...', 'during the time being studied', ['during the time being studied', 'only in fiction', 'without evidence', 'by a calculator']),
  q(3, 5, 'Geography', 'Lines of latitude measure distance north or south of the...', 'Equator', ['Equator', 'Prime Meridian', 'North Pole only', 'Pacific Ocean']),
  q(4, 5, 'U.S. history', 'The Declaration of Independence was approved in...', '1776', ['1776', '1492', '1865', '1918']),
  q(4, 6, 'Government', 'A constitution is a...', 'plan for government', ['plan for government', 'weather report', 'trade route', 'tax receipt']),
  q(5, 6, 'Civics', 'The Constitution begins with the words...', 'We the People', ['We the People', 'Once upon a time', 'Dear Reader', 'Chapter One']),
  q(5, 7, 'U.S. history', 'The Louisiana Purchase doubled the size of the...', 'United States', ['United States', 'Roman Empire', 'Nile River', 'United Nations']),
  q(6, 7, 'Ancient history', 'The Nile River was central to ancient...', 'Egypt', ['Egypt', 'Japan', 'Canada', 'Brazil']),
  q(6, 7, 'Ancient history', 'Cuneiform first developed in...', 'Mesopotamia', ['Mesopotamia', 'Australia', 'Canada', 'Antarctica']),
  q(7, 8, 'World history', 'The Silk Road was mainly a network for...', 'trade and cultural exchange', ['trade and cultural exchange', 'volcano research only', 'space travel', 'telephone calls']),
  q(7, 9, 'World history', 'The Magna Carta limited the power of the...', 'king', ['king', 'newspaper', 'factory', 'railroad']),
  q(8, 9, 'U.S. history', 'The U.S. Civil War ended in...', '1865', ['1865', '1776', '1914', '1945']),
  q(8, 10, 'Civics', 'The Bill of Rights is the first ten amendments to the...', 'U.S. Constitution', ['U.S. Constitution', 'Declaration of Independence', 'Mayflower Compact', 'Treaty of Paris']),
  q(9, 10, 'World history', 'The Industrial Revolution changed society through...', 'machine production', ['machine production', 'stone tools only', 'less trade', 'no cities']),
  q(9, 11, 'World history', 'The Renaissance began in Europe with renewed interest in...', 'classical learning', ['classical learning', 'factory assembly lines', 'space stations', 'television advertising']),
  q(10, 11, 'Modern history', 'World War II ended in...', '1945', ['1945', '1918', '1969', '1989']),
  q(10, 12, 'Modern history', 'The Cold War was mainly a rivalry between the U.S. and the...', 'Soviet Union', ['Soviet Union', 'Roman Republic', 'Mongol Empire', 'Aztec Empire']),
  q(11, 12, 'Government', 'Separation of powers means...', 'government power is divided among branches', ['government power is divided among branches', 'one branch holds all power', 'courts collect taxes only', 'citizens cannot vote']),
  q(11, 12, 'Government', 'Federalism divides power between national and...', 'state governments', ['state governments', 'newspapers', 'private banks', 'weather stations']),
  q(12, 12, 'Economics', 'Inflation means...', 'overall prices rise over time', ['overall prices rise over time', 'all prices disappear', 'money becomes weather', 'trade stops forever']),
  q(12, 12, 'Economics', 'Opportunity cost is...', 'the next best choice given up', ['the next best choice given up', 'a tax on imports', 'a type of election', 'a court opinion']),
]

function q(min, max, type, prompt, answer, options) {
  return { min, max, type, prompt, answer, options }
}
