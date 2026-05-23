import './style.css'
import heroImage from './assets/hero.png'
import {
  courseCatalog,
  createQuestion,
  getCourse,
  getGradeNumber,
  gradeLabels,
  subjectMeta,
} from './curriculum.js'

const STORAGE_KEY = 'school-hero-v2-state'

const shopItems = [
  {
    id: 'classic',
    name: 'Classic',
    color: '#d95f4f',
    cost: 0,
    upgrades: [
      {
        perk: 'Balanced starter outfit',
      },
      {
        cost: 60,
        perk: '+1 coin per correct answer',
        coinBonus: 1,
      },
      {
        cost: 120,
        perk: '+1 coin and +3 XP every 3-streak',
        coinBonus: 1,
        streakXpBonus: 3,
      },
      {
        cost: 210,
        perk: '+2 coins, +5 XP every 3-streak, +1 heart on level up',
        coinBonus: 2,
        streakXpBonus: 5,
        levelHeartBonus: 1,
        maxHearts: 9,
      },
    ],
  },
  {
    id: 'summit',
    name: 'Summit',
    color: '#277da1',
    cost: 90,
    upgrades: [
      {
        perk: '+2 coins per correct answer',
        coinBonus: 2,
      },
      {
        cost: 110,
        perk: '+4 coins per correct answer',
        coinBonus: 4,
      },
      {
        cost: 190,
        perk: '+6 coins and +3 XP every 3-streak',
        coinBonus: 6,
        streakXpBonus: 3,
      },
      {
        cost: 320,
        perk: '+8 coins and +1 heart on level up',
        coinBonus: 8,
        levelHeartBonus: 1,
        maxHearts: 9,
      },
    ],
  },
  {
    id: 'sprout',
    name: 'Sprout',
    color: '#43aa8b',
    cost: 140,
    upgrades: [
      {
        perk: '+5 XP every 3-streak',
        streakXpBonus: 5,
      },
      {
        cost: 130,
        perk: '+8 XP every 3-streak',
        streakXpBonus: 8,
      },
      {
        cost: 220,
        perk: '+11 XP every 3-streak and +1 coin',
        streakXpBonus: 11,
        coinBonus: 1,
      },
      {
        cost: 360,
        perk: '+14 XP every 3-streak and +2 coins',
        streakXpBonus: 14,
        coinBonus: 2,
      },
    ],
  },
  {
    id: 'solar',
    name: 'Solar',
    color: '#f9a03f',
    cost: 210,
    upgrades: [
      {
        perk: '+1 extra heart on level up',
        levelHeartBonus: 1,
        maxHearts: 9,
      },
      {
        cost: 160,
        perk: '+2 extra hearts on level up',
        levelHeartBonus: 2,
        maxHearts: 10,
      },
      {
        cost: 270,
        perk: '+3 extra hearts on level up and +1 coin',
        levelHeartBonus: 3,
        maxHearts: 11,
        coinBonus: 1,
      },
      {
        cost: 420,
        perk: '+4 extra hearts on level up and +2 coins',
        levelHeartBonus: 4,
        maxHearts: 12,
        coinBonus: 2,
      },
    ],
  },
]

const defaultState = {
  selectedGrade: '6',
  selectedSubject: 'math',
  screen: 'setup',
  difficulty: 'practice',
  coins: 0,
  hearts: 5,
  streak: 0,
  xp: 0,
  level: 1,
  currentQuestion: null,
  answered: false,
  feedback: '',
  ownedSkins: ['classic'],
  activeSkin: 'classic',
  skinUpgrades: {
    classic: 1,
  },
  progress: {},
}

const app = document.querySelector('#app')
let state = normalizeState(loadState())

app.addEventListener('click', (event) => {
  const button = event.target.closest('[data-action]')
  if (!button) return

  const { action } = button.dataset

  if (action === 'select-grade') {
    state.selectedGrade = button.dataset.grade
    state.feedback = ''
    state.currentQuestion = null
    saveAndRender()
  }

  if (action === 'select-subject') {
    state.selectedSubject = button.dataset.subject
    state.feedback = ''
    state.currentQuestion = null
    saveAndRender()
  }

  if (action === 'set-difficulty') {
    state.difficulty = button.dataset.difficulty
    state.currentQuestion = null
    state.answered = false
    saveAndRender()
  }

  if (action === 'start-course') {
    startCourse()
  }

  if (action === 'back-to-courses') {
    state.screen = 'setup'
    state.currentQuestion = null
    state.answered = false
    state.feedback = ''
    saveAndRender()
  }

  if (action === 'answer-question') {
    answerQuestion(button.dataset.answer)
  }

  if (action === 'next-question') {
    state.currentQuestion = createQuestion(
      state.selectedSubject,
      getGradeNumber(state.selectedGrade),
      state.difficulty,
    )
    state.answered = false
    state.feedback = ''
    saveAndRender()
  }

  if (action === 'reset-session') {
    resetSession()
  }

  if (action === 'buy-skin') {
    buySkin(button.dataset.skin)
  }

  if (action === 'equip-skin') {
    equipSkin(button.dataset.skin)
  }

  if (action === 'upgrade-skin') {
    upgradeSkin(button.dataset.skin)
  }
})

render()

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : { ...defaultState }
  } catch (error) {
    console.warn('Unable to load progress.', error)
    return { ...defaultState }
  }
}

function normalizeState(rawState) {
  const normalized = {
    ...defaultState,
    ...rawState,
    progress: rawState?.progress || {},
    ownedSkins: Array.isArray(rawState?.ownedSkins) ? rawState.ownedSkins : ['classic'],
    skinUpgrades: rawState?.skinUpgrades || { classic: 1 },
  }

  if (!gradeLabels.includes(normalized.selectedGrade)) {
    normalized.selectedGrade = defaultState.selectedGrade
  }

  if (!subjectMeta[normalized.selectedSubject]) {
    normalized.selectedSubject = defaultState.selectedSubject
  }

  if (!['setup', 'play'].includes(normalized.screen)) {
    normalized.screen = 'setup'
  }

  if (!['practice', 'challenge'].includes(normalized.difficulty)) {
    normalized.difficulty = 'practice'
  }

  if (!normalized.ownedSkins.includes('classic')) {
    normalized.ownedSkins.unshift('classic')
  }

  if (!normalized.ownedSkins.includes(normalized.activeSkin)) {
    normalized.activeSkin = 'classic'
  }

  normalized.ownedSkins.forEach((skinId) => {
    normalized.skinUpgrades[skinId] = normalizeSkinLevel(skinId, normalized.skinUpgrades[skinId])
  })

  return normalized
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

function saveAndRender() {
  saveState()
  render()
}

function render() {
  app.innerHTML = state.screen === 'play' ? renderPractice() : renderSetup()
}

function renderSetup() {
  const course = selectedCourse()
  const progress = progressForCourse()
  const currentUnitIndex = getCurrentUnitIndex(course, progress)
  const percent = getCoursePercent(course, progress)

  return `
    <div class="app-shell">
      ${renderTopbar('Course Builder')}
      <main class="setup-layout">
        <aside class="panel selector-panel" aria-label="Course filters">
          <div class="panel-heading">
            <p class="eyebrow">Grade</p>
            <h2>Choose level</h2>
          </div>
          <div class="grade-grid">
            ${gradeLabels
              .map(
                (grade) => `
                  <button
                    class="grade-chip ${grade === state.selectedGrade ? 'is-selected' : ''}"
                    data-action="select-grade"
                    data-grade="${grade}"
                    aria-pressed="${grade === state.selectedGrade}"
                  >${grade}</button>
                `,
              )
              .join('')}
          </div>

          <div class="panel-heading subject-heading">
            <p class="eyebrow">Course</p>
            <h2>Pick a subject</h2>
          </div>
          <div class="subject-list">
            ${Object.entries(subjectMeta)
              .map(([subject, meta]) => renderSubjectButton(subject, meta))
              .join('')}
          </div>
        </aside>

        <section class="panel course-panel" aria-label="Selected course">
          <div class="course-hero">
            <div>
              <p class="eyebrow">${state.selectedGrade} ${subjectMeta[state.selectedSubject].label}</p>
              <h1>${course.title}</h1>
              <p>${course.overview}</p>
            </div>
            <img src="${heroImage}" alt="" class="course-art" />
          </div>

          <div class="course-toolbar">
            <div>
              <span class="metric-label">Course progress</span>
              <div class="progress-track" aria-hidden="true">
                <span style="width:${percent}%"></span>
              </div>
            </div>
            <button class="primary-button" data-action="start-course">
              <span class="button-icon">▶</span>
              Start Practice
            </button>
          </div>

          <div class="unit-grid">
            ${course.units
              .map((unit, index) => renderUnit(unit, index, currentUnitIndex, progress.correct))
              .join('')}
          </div>

          <div class="outcome-band">
            <p class="eyebrow">Skills you will build</p>
            <ul>
              ${course.outcomes.map((outcome) => `<li>${outcome}</li>`).join('')}
            </ul>
          </div>
        </section>

        <aside class="side-stack" aria-label="Profile and rewards">
          ${renderProfilePanel()}
          ${renderShopPanel()}
        </aside>
      </main>
    </div>
  `
}

function renderPractice() {
  if (!state.currentQuestion) {
    state.currentQuestion = createQuestion(
      state.selectedSubject,
      getGradeNumber(state.selectedGrade),
      state.difficulty,
    )
  }

  const course = selectedCourse()
  const progress = progressForCourse()
  const percent = getCoursePercent(course, progress)
  const currentUnitIndex = getCurrentUnitIndex(course, progress)

  return `
    <div class="app-shell">
      ${renderTopbar('Practice Session')}
      <main class="practice-layout">
        <aside class="panel course-rail" aria-label="Course outline">
          <button class="ghost-button full-width" data-action="back-to-courses">
            <span class="button-icon">←</span>
            Courses
          </button>
          <div class="rail-course">
            <p class="eyebrow">${state.selectedGrade} ${subjectMeta[state.selectedSubject].label}</p>
            <h2>${course.title}</h2>
            <div class="progress-track" aria-hidden="true">
              <span style="width:${percent}%"></span>
            </div>
          </div>
          <ol class="rail-unit-list">
            ${course.units
              .map((unit, index) => renderRailUnit(unit, index, currentUnitIndex))
              .join('')}
          </ol>
        </aside>

        <section class="panel practice-panel" aria-label="Question practice">
          <div class="practice-header">
            <div>
              <p class="eyebrow">Question ${progress.attempted + 1}</p>
              <h1>${subjectMeta[state.selectedSubject].label} Practice</h1>
            </div>
            <div class="segmented-control" aria-label="Difficulty">
              ${['practice', 'challenge']
                .map(
                  (difficulty) => `
                    <button
                      class="${state.difficulty === difficulty ? 'is-selected' : ''}"
                      data-action="set-difficulty"
                      data-difficulty="${difficulty}"
                      aria-pressed="${state.difficulty === difficulty}"
                    >${titleCase(difficulty)}</button>
                  `,
                )
                .join('')}
            </div>
          </div>

          <div class="question-surface">
            <p class="question-type">${escapeHtml(state.currentQuestion.type)}</p>
            <h2>${escapeHtml(state.currentQuestion.prompt)}</h2>
            <div class="answer-grid">
              ${state.currentQuestion.options
                .map((option) => renderAnswerButton(option))
                .join('')}
            </div>
          </div>

          <div class="feedback-row ${state.feedback ? 'has-feedback' : ''}">
            <p>${state.feedback || 'Choose an answer to keep the lesson moving.'}</p>
            <div class="practice-actions">
              <button class="ghost-button" data-action="reset-session">
                <span class="button-icon">↺</span>
                Reset
              </button>
              <button class="primary-button" data-action="next-question">
                <span class="button-icon">→</span>
                ${state.answered ? 'Next Question' : 'Skip'}
              </button>
            </div>
          </div>
        </section>

        <aside class="side-stack" aria-label="Session rewards">
          ${renderProfilePanel()}
          ${renderShopPanel()}
        </aside>
      </main>
    </div>
  `
}

function renderTopbar(contextLabel) {
  const activeSkin = getActiveSkin()

  return `
    <header class="topbar">
      <div class="brand-group">
        <div class="brand-mark" style="--skin:${activeSkin.color}">
          <span>SH</span>
        </div>
        <div>
          <p class="eyebrow">${contextLabel}</p>
          <h1>School Hero</h1>
        </div>
      </div>
      <div class="top-metrics" aria-label="Player stats">
        ${renderMetric('Level', state.level)}
        ${renderMetric('Coins', state.coins)}
        ${renderMetric('Hearts', state.hearts)}
        ${renderMetric('Streak', state.streak)}
      </div>
    </header>
  `
}

function renderMetric(label, value) {
  return `
    <div class="metric">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `
}

function renderSubjectButton(subject, meta) {
  const course = getCourse(state.selectedGrade, subject)
  const isSelected = subject === state.selectedSubject

  return `
    <button
      class="subject-button ${isSelected ? 'is-selected' : ''}"
      data-action="select-subject"
      data-subject="${subject}"
      aria-pressed="${isSelected}"
      style="--subject-color:${meta.color}"
    >
      <span class="subject-code">${meta.short}</span>
      <span>
        <strong>${meta.label}</strong>
        <small>${course.title}</small>
      </span>
    </button>
  `
}

function renderUnit(unit, index, currentUnitIndex, correctCount) {
  const completed = correctCount >= (index + 1) * 4
  const current = index === currentUnitIndex && !completed
  const status = completed ? 'Completed' : current ? 'Current' : 'Upcoming'

  return `
    <article class="unit-card ${completed ? 'is-complete' : ''} ${current ? 'is-current' : ''}">
      <span>${index + 1}</span>
      <div>
        <h3>${unit}</h3>
        <p>${status}</p>
      </div>
    </article>
  `
}

function renderRailUnit(unit, index, currentUnitIndex) {
  const isCurrent = index === currentUnitIndex

  return `
    <li class="${isCurrent ? 'is-current' : ''}">
      <span>${index + 1}</span>
      <p>${unit}</p>
    </li>
  `
}

function renderProfilePanel() {
  const activeSkin = getActiveSkin()
  const level = getSkinLevel(activeSkin.id)
  const activeUpgrade = getSkinUpgrade(activeSkin)

  return `
    <section class="panel profile-panel">
      <div class="avatar" style="--skin:${activeSkin.color}">
        <span></span>
      </div>
      <div>
        <p class="eyebrow">Hero profile</p>
        <h2>${activeSkin.name} Lv. ${level}</h2>
        <p>${activeUpgrade.perk}</p>
      </div>
      <div class="xp-block">
        <span class="metric-label">XP ${state.xp}/100</span>
        <div class="progress-track" aria-hidden="true">
          <span style="width:${state.xp}%"></span>
        </div>
      </div>
    </section>
  `
}

function renderShopPanel() {
  return `
    <section class="panel shop-panel">
      <div class="panel-heading">
        <p class="eyebrow">Reward shop</p>
        <h2>Skins and perks</h2>
      </div>
      <div class="shop-list">
        ${shopItems.map(renderShopItem).join('')}
      </div>
    </section>
  `
}

function renderShopItem(item) {
  const owned = state.ownedSkins.includes(item.id)
  const active = state.activeSkin === item.id
  const canBuy = state.coins >= item.cost
  const level = getSkinLevel(item.id)
  const nextUpgrade = getNextSkinUpgrade(item)
  const maxed = owned && !nextUpgrade
  const canUpgrade = owned && nextUpgrade && state.coins >= nextUpgrade.cost
  const upgradeLabel = maxed ? 'Maxed' : 'Upgrade'
  const priceLine = owned
    ? maxed
      ? 'Max level'
      : `Upgrade: ${nextUpgrade.cost} coins`
    : item.cost === 0
      ? 'Included'
      : `${item.cost} coins`

  return `
    <article class="shop-item ${active ? 'is-active' : ''}">
      <span class="skin-swatch" style="--skin:${item.color}"></span>
      <div class="shop-info">
        <h3>${item.name} Lv. ${level}</h3>
        <p>${getSkinUpgrade(item).perk}</p>
        <small>${priceLine}</small>
      </div>
      <div class="shop-actions">
        <button
          class="small-button"
          data-action="${owned ? 'equip-skin' : 'buy-skin'}"
          data-skin="${item.id}"
          ${active || (!owned && !canBuy) ? 'disabled' : ''}
        >${active ? 'Active' : owned ? 'Equip' : 'Buy'}</button>
        <button
          class="small-button upgrade-button"
          data-action="upgrade-skin"
          data-skin="${item.id}"
          ${!canUpgrade ? 'disabled' : ''}
        >${upgradeLabel}</button>
      </div>
    </article>
  `
}

function renderAnswerButton(option) {
  const isCorrect = state.answered && option === state.currentQuestion.answer

  return `
    <button
      class="answer-button ${isCorrect ? 'is-correct' : ''}"
      data-action="answer-question"
      data-answer="${escapeHtml(option)}"
      ${state.answered ? 'disabled' : ''}
    >${escapeHtml(option)}</button>
  `
}

function selectedCourse() {
  return getCourse(state.selectedGrade, state.selectedSubject)
}

function courseKey() {
  return `${state.selectedGrade}:${state.selectedSubject}`
}

function progressForCourse() {
  const key = courseKey()
  const existing = state.progress[key] || { attempted: 0, correct: 0 }
  state.progress[key] = existing
  return existing
}

function getCurrentUnitIndex(course, progress) {
  return Math.min(Math.floor(progress.correct / 4), course.units.length - 1)
}

function getCoursePercent(course, progress) {
  const target = course.units.length * 4
  return Math.min(100, Math.round((progress.correct / target) * 100))
}

function startCourse() {
  state.screen = 'play'
  state.hearts = Math.max(state.hearts, 3)
  state.feedback = `Started ${selectedCourse().title}.`
  state.currentQuestion = createQuestion(
    state.selectedSubject,
    getGradeNumber(state.selectedGrade),
    state.difficulty,
  )
  state.answered = false
  saveAndRender()
}

function answerQuestion(answer) {
  if (!state.currentQuestion || state.answered) return

  const progress = progressForCourse()
  const isCorrect = String(answer) === String(state.currentQuestion.answer)
  state.answered = true
  progress.attempted += 1

  if (isCorrect) {
    const activeSkin = getActiveSkin()
    const activeUpgrade = getSkinUpgrade(activeSkin)
    const baseCoins = state.difficulty === 'challenge' ? 14 : 10
    const skinCoinBonus = activeUpgrade.coinBonus || 0
    const streakBonus = Math.min(state.streak, 5)
    const earnedCoins = baseCoins + skinCoinBonus + streakBonus
    const xpGain = state.difficulty === 'challenge' ? 24 : 18
    let bonusXp = 0

    state.streak += 1
    progress.correct += 1
    state.coins += earnedCoins
    state.xp += xpGain

    if (activeUpgrade.streakXpBonus && state.streak % 3 === 0) {
      bonusXp = activeUpgrade.streakXpBonus
      state.xp += bonusXp
    }

    levelUpIfReady(activeUpgrade)
    state.feedback = `Correct. +${earnedCoins} coins and +${xpGain + bonusXp} XP.`
  } else {
    state.streak = 0
    state.hearts = Math.max(0, state.hearts - 1)
    state.feedback = `Not quite. Correct answer: ${state.currentQuestion.answer}.`

    if (state.hearts === 0) {
      state.feedback = 'Hearts reached zero. Session reset; progress and coins were kept.'
      state.hearts = 5
      state.screen = 'setup'
      state.currentQuestion = null
    }
  }

  saveAndRender()
}

function levelUpIfReady(activeUpgrade) {
  while (state.xp >= 100) {
    state.xp -= 100
    state.level += 1
    const maxHearts = activeUpgrade.maxHearts || 8
    const heartGain = 1 + (activeUpgrade.levelHeartBonus || 0)
    state.hearts = Math.min(maxHearts, state.hearts + heartGain)
  }
}

function resetSession() {
  state.hearts = 5
  state.streak = 0
  state.currentQuestion = createQuestion(
    state.selectedSubject,
    getGradeNumber(state.selectedGrade),
    state.difficulty,
  )
  state.answered = false
  state.feedback = 'Session reset. Course progress and coins were kept.'
  saveAndRender()
}

function buySkin(skinId) {
  const item = shopItems.find((skin) => skin.id === skinId)
  if (!item || state.ownedSkins.includes(item.id) || state.coins < item.cost) return

  state.coins -= item.cost
  state.ownedSkins.push(item.id)
  state.skinUpgrades[item.id] = 1
  state.activeSkin = item.id
  state.feedback = `${item.name} skin unlocked.`
  saveAndRender()
}

function equipSkin(skinId) {
  if (!state.ownedSkins.includes(skinId)) return
  const item = shopItems.find((skin) => skin.id === skinId)
  state.activeSkin = skinId
  state.feedback = `${item?.name || 'Selected'} skin equipped.`
  saveAndRender()
}

function upgradeSkin(skinId) {
  const item = shopItems.find((skin) => skin.id === skinId)
  if (!item || !state.ownedSkins.includes(item.id)) return

  const nextUpgrade = getNextSkinUpgrade(item)
  if (!nextUpgrade || state.coins < nextUpgrade.cost) return

  state.coins -= nextUpgrade.cost
  state.skinUpgrades[item.id] = getSkinLevel(item.id) + 1
  state.feedback = `${item.name} upgraded to level ${state.skinUpgrades[item.id]}.`
  saveAndRender()
}

function getActiveSkin() {
  return shopItems.find((skin) => skin.id === state.activeSkin) || shopItems[0]
}

function getSkinLevel(skinId) {
  return normalizeSkinLevel(skinId, state.skinUpgrades[skinId])
}

function normalizeSkinLevel(skinId, level) {
  const item = shopItems.find((skin) => skin.id === skinId)
  const maxLevel = item?.upgrades.length || 1
  const parsed = Number(level) || 1
  return Math.min(maxLevel, Math.max(1, parsed))
}

function getSkinUpgrade(item) {
  return item.upgrades[getSkinLevel(item.id) - 1] || item.upgrades[0]
}

function getNextSkinUpgrade(item) {
  return item.upgrades[getSkinLevel(item.id)]
}

function titleCase(value) {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}
