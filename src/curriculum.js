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
    const count = random(3, challenge ? 12 : 8)
    prompt = `Count the objects: ${Array.from({ length: count }, () => 'o').join(' ')}`
    answer = count
    type = 'Counting'
  } else if (grade <= 2) {
    const a = random(4, challenge ? 40 : 20)
    const b = random(2, challenge ? 20 : 12)
    if (Math.random() > 0.45) {
      prompt = `${a} + ${b} = ?`
      answer = a + b
      type = 'Addition'
    } else {
      prompt = `${a} - ${Math.min(a, b)} = ?`
      answer = a - Math.min(a, b)
      type = 'Subtraction'
    }
  } else if (grade <= 5) {
    const a = random(3, challenge ? 16 : 12)
    const b = random(2, challenge ? 14 : 10)
    const choice = random(1, 4)
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
    } else {
      prompt = `What is one half of ${a * 2}?`
      answer = a
      type = 'Fractions'
    }
  } else if (grade <= 8) {
    const a = random(2, challenge ? 12 : 8)
    const b = random(4, challenge ? 24 : 16)
    const x = random(2, challenge ? 14 : 9)
    const choice = random(1, 4)
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
    } else {
      prompt = `Find the slope from (0, ${b}) to (2, ${b + 2 * a}).`
      answer = a
      type = 'Linear relationships'
    }
  } else {
    const a = random(2, challenge ? 9 : 6)
    const b = random(2, challenge ? 12 : 8)
    const x = random(2, challenge ? 10 : 7)
    const choice = random(1, 4)
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
    } else {
      prompt = `A value grows from ${b * 10} to ${b * 10 + a * 10}. What is the increase?`
      answer = a * 10
      type = 'Modeling'
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
  q(1, 2, 'Phonics', 'Choose the word with a long a sound.', 'cake', ['cake', 'cat', 'map', 'ran']),
  q(1, 2, 'Sentence sense', 'Which is a complete sentence?', 'The dog runs.', ['The dog runs.', 'Runs fast', 'The dog', 'Fast blue']),
  q(2, 3, 'Text features', 'What helps readers find a topic quickly in a nonfiction book?', 'index', ['index', 'dialogue', 'stanza', 'rhyme']),
  q(3, 4, 'Vocabulary', 'What does the prefix "pre-" mean?', 'before', ['before', 'again', 'not', 'after']),
  q(3, 5, 'Comprehension', 'The main idea is the...', 'most important point', ['most important point', 'last sentence only', 'author name', 'page number']),
  q(4, 5, 'Writing', 'Which sentence uses evidence?', 'The text says that the bridge opened in 1937.', ['The text says that the bridge opened in 1937.', 'I like bridges.', 'This is cool.', 'Everyone knows it.']),
  q(5, 6, 'Figurative language', 'A comparison using "like" or "as" is a...', 'simile', ['simile', 'theme', 'noun', 'summary']),
  q(6, 7, 'Analysis', 'Tone means the author\'s...', 'attitude toward the subject', ['attitude toward the subject', 'alphabetical order', 'page count', 'setting only']),
  q(7, 8, 'Argument', 'A strong claim should be...', 'debatable and specific', ['debatable and specific', 'a random fact', 'a question only', 'one word']),
  q(8, 9, 'Source use', 'Which source is usually most credible for population data?', 'a government census page', ['a government census page', 'an anonymous comment', 'a movie poster', 'a shopping ad']),
  q(9, 10, 'Rhetoric', 'Ethos appeals to...', 'credibility', ['credibility', 'sound effects', 'chronology', 'setting']),
  q(10, 11, 'Literature', 'Symbolism is when an object...', 'represents a larger idea', ['represents a larger idea', 'lists every event', 'names the speaker', 'counts syllables']),
  q(11, 12, 'Research', 'A synthesis essay should...', 'combine ideas from multiple sources', ['combine ideas from multiple sources', 'copy one source exactly', 'avoid evidence', 'use only opinions']),
  q(12, 12, 'Style', 'Concise writing avoids...', 'unnecessary words', ['unnecessary words', 'clear verbs', 'specific nouns', 'evidence']),
]

const scienceQuestionBank = [
  q(0, 0, 'Observation', 'Which tool can help you see something tiny?', 'magnifying glass', ['magnifying glass', 'ruler', 'calendar', 'map']),
  q(0, 1, 'Weather', 'Rain, snow, wind, and sunshine describe...', 'weather', ['weather', 'gravity', 'fiction', 'money']),
  q(1, 2, 'Life science', 'What do plants need to grow?', 'water and light', ['water and light', 'plastic and glue', 'sand only', 'darkness only']),
  q(2, 3, 'Matter', 'Water is a liquid because it...', 'takes the shape of its container', ['takes the shape of its container', 'keeps one fixed shape', 'is always invisible', 'cannot move']),
  q(3, 4, 'Forces', 'A magnet can attract objects made with...', 'iron', ['iron', 'paper', 'wood', 'rubber']),
  q(4, 5, 'Earth systems', 'Weathering is the process that...', 'breaks rocks into smaller pieces', ['breaks rocks into smaller pieces', 'makes stars', 'stops gravity', 'creates electricity']),
  q(5, 6, 'Ecosystems', 'In a food web, arrows usually show...', 'energy flow', ['energy flow', 'map direction', 'weather speed', 'age']),
  q(6, 7, 'Earth science', 'Tectonic plates move on top of the...', 'mantle', ['mantle', 'cloud layer', 'moon', 'outer space']),
  q(7, 8, 'Cells', 'The nucleus of a cell stores...', 'genetic information', ['genetic information', 'rain water', 'sound waves', 'sunlight']),
  q(8, 9, 'Physical science', 'Acceleration means a change in...', 'velocity', ['velocity', 'mass only', 'color only', 'volume only']),
  q(9, 10, 'Biology', 'DNA is best described as...', 'instructions for traits', ['instructions for traits', 'a type of rock', 'a weather pattern', 'a force']),
  q(10, 11, 'Chemistry', 'Atoms with the same number of protons are the same...', 'element', ['element', 'solution', 'mixture', 'force']),
  q(11, 12, 'Physics', 'Momentum depends on mass and...', 'velocity', ['velocity', 'temperature', 'color', 'shape']),
  q(12, 12, 'Environment', 'Biodiversity means the variety of...', 'living things in an area', ['living things in an area', 'cloud shapes', 'road signs', 'metal tools']),
]

const historyQuestionBank = [
  q(0, 0, 'Community', 'A rule is made to help people...', 'stay safe and fair', ['stay safe and fair', 'hide maps', 'stop learning', 'forget names']),
  q(1, 2, 'Maps', 'A map key explains...', 'symbols on a map', ['symbols on a map', 'song lyrics', 'animal sounds', 'math answers']),
  q(2, 3, 'Economics', 'People use money to...', 'buy goods and services', ['buy goods and services', 'measure rain', 'grow sunlight', 'write laws by itself']),
  q(3, 4, 'Sources', 'A primary source is created...', 'during the time being studied', ['during the time being studied', 'only in fiction', 'without evidence', 'by a calculator']),
  q(4, 5, 'U.S. history', 'The Declaration of Independence was approved in...', '1776', ['1776', '1492', '1865', '1918']),
  q(5, 6, 'Civics', 'The Constitution begins with the words...', 'We the People', ['We the People', 'Once upon a time', 'Dear Reader', 'Chapter One']),
  q(6, 7, 'Ancient history', 'The Nile River was central to ancient...', 'Egypt', ['Egypt', 'Japan', 'Canada', 'Brazil']),
  q(7, 8, 'World history', 'The Silk Road was mainly a network for...', 'trade and cultural exchange', ['trade and cultural exchange', 'volcano research only', 'space travel', 'telephone calls']),
  q(8, 9, 'U.S. history', 'The U.S. Civil War ended in...', '1865', ['1865', '1776', '1914', '1945']),
  q(9, 10, 'World history', 'The Industrial Revolution changed society through...', 'machine production', ['machine production', 'stone tools only', 'less trade', 'no cities']),
  q(10, 11, 'Modern history', 'World War II ended in...', '1945', ['1945', '1918', '1969', '1989']),
  q(11, 12, 'Government', 'Separation of powers means...', 'government power is divided among branches', ['government power is divided among branches', 'one branch holds all power', 'courts collect taxes only', 'citizens cannot vote']),
  q(12, 12, 'Economics', 'Inflation means...', 'overall prices rise over time', ['overall prices rise over time', 'all prices disappear', 'money becomes weather', 'trade stops forever']),
]

function q(min, max, type, prompt, answer, options) {
  return { min, max, type, prompt, answer, options }
}
