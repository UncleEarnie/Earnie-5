// Mortgage Maze Game Engine
const ROOMS = {
  start: {
    id: 'start',
    title: 'Mortgage Journey Begins',
    description: 'You\'re about to navigate the mortgage landscape. Each decision shapes your financial visibility.',
    choices: [
      { id: 'c1', text: 'Ask the broker detailed questions about rates', hint: 'Information gathering 📚' },
      { id: 'c2', text: 'Accept the first quote offered', hint: 'Speed over clarity ⚡' },
    ],
  },
  depositDecision: {
    id: 'depositDecision',
    title: 'How Much to Deposit?',
    description: 'The broker suggests you could put down 10% or save longer for 20%. What\'s your move?',
    choices: [
      { id: 'c1', text: 'Go with 10% to enter the market quickly', hint: 'More leverage 💪' },
      { id: 'c2', text: 'Wait and save for 20% deposit', hint: 'Lower risk profile 🛡️' },
    ],
  },
  loanTermDecision: {
    id: 'loanTermDecision',
    title: 'Choose Your Loan Term',
    description: 'A 30-year mortgage is cheaper monthly. A 15-year mortgage builds equity faster. Which suits you?',
    choices: [
      { id: 'c1', text: 'Lock in 15-year mortgage', hint: 'Fast equity build 📈' },
      { id: 'c2', text: 'Go with 30-year term', hint: 'Lower monthly payment 💰' },
    ],
  },
  rateShock1: {
    id: 'rateShock1',
    title: '⚡ SHOCK: Interest Rates Jump!',
    description: 'Overnight, the central bank raises rates 1.5%. Your mortgage cost just increased. Do you...',
    choices: [
      { id: 'c1', text: 'Immediately refinance to lock in before rates go higher', hint: 'Reactive 🏃' },
      { id: 'c2', text: 'Analyze your options and timeline first', hint: 'Deliberate 🤔' },
    ],
  },
  incomeChange: {
    id: 'incomeChange',
    title: 'Income Shift',
    description: 'A career change offers 20% more income but with 6 months of reduced pay during transition. Do you...',
    choices: [
      { id: 'c1', text: 'Take the change and lean on your emergency fund', hint: 'Growth-oriented 🚀' },
      { id: 'c2', text: 'Stay put for financial stability', hint: 'Risk-averse 🏠' },
    ],
  },
  breakFeeAwareness: {
    id: 'breakFeeAwareness',
    title: 'Break Fee Surprise',
    description: 'You discover your mortgage has a 2% break fee if you refinance early. You didn\'t know. How do you respond?',
    choices: [
      { id: 'c1', text: 'Review your loan documents more carefully going forward', hint: 'Learning moment 📖' },
      { id: 'c2', text: 'Blame the broker and move forward anyway', hint: 'Deflecting 🤷' },
    ],
  },
  refiDecision: {
    id: 'refiDecision',
    title: 'To Refinance or Not?',
    description: 'Rates have dropped. Refinancing costs $3k but saves you $200/month. Break-even: 15 months. Ready?',
    choices: [
      { id: 'c1', text: 'Refinance immediately', hint: 'Optimistic 😊' },
      { id: 'c2', text: 'Wait and see if rates drop further', hint: 'Patient 🧘' },
    ],
  },
  bufferCheck: {
    id: 'bufferCheck',
    title: 'Emergency Fund Check',
    description: 'How many months of mortgage + living expenses can you cover without income right now?',
    choices: [
      { id: 'c1', text: '1–2 months', hint: 'Low safety net 🪢' },
      { id: 'c2', text: '3–6 months', hint: 'Reasonable buffer 💪' },
      { id: 'c3', text: '6+ months', hint: 'Strong resilience 🛡️' },
    ],
  },
  endgame: {
    id: 'endgame',
    title: 'You\'ve Navigated the Maze',
    description: 'Time to see your Mortgage Visibility Index score.',
    choices: [
      { id: 'c1', text: 'See Results', hint: '' },
    ],
  },
};

const MAZE_SEQUENCE_QUICK = [
  'start',
  'depositDecision',
  'loanTermDecision',
  'bufferCheck',
  'endgame',
];

const MAZE_SEQUENCE_DEEP = [
  'start',
  'depositDecision',
  'loanTermDecision',
  'rateShock1',
  'incomeChange',
  'breakFeeAwareness',
  'refiDecision',
  'bufferCheck',
  'endgame',
];

const PERSONAS = ['First-time buyer', 'Upgrading homeowner', 'Investor'];
const DEPOSIT_BANDS = ['<10%', '10-15%', '15-20%', '20%+'];
const TIME_PRESSURES = ['High pressure', 'Moderate', 'No rush'];

class MortgageMazeGame {
  constructor() {
    this.gameState = {
      mode: null,
      persona: null,
      depositBand: null,
      timePressure: null,
      stats: {
        cashflow: 50,
        bufferMonths: 2,
        riskFog: 0,
        confidenceBias: 0,
        timeSpent: 0,
        knowledge: 0,
      },
      history: [],
      currentRoomIndex: 0,
      maze: [],
    };
    this.screen = 'landing';
    this.init();
  }

  init() {
    this.render();
    this.setupEventListeners();
  }

  setupEventListeners() {
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-action]')) {
        const action = e.target.getAttribute('data-action');
        this.handleAction(action, e.target);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.screen !== 'landing') {
        this.screen = 'landing';
        this.render();
      }
    });
  }

  handleAction(action, element) {
    if (action === 'mode') {
      const mode = element.getAttribute('data-mode');
      this.startSetup(mode);
    } else if (action === 'setup-submit') {
      this.startGame();
    } else if (action === 'setup-back') {
      this.screen = 'landing';
      this.render();
    } else if (action === 'choice') {
      const choiceId = element.getAttribute('data-choice');
      this.makeChoice(choiceId);
    } else if (action === 'results-copy') {
      this.copySummary();
    } else if (action === 'results-playagain') {
      this.screen = 'landing';
      this.gameState.history = [];
      this.gameState.currentRoomIndex = 0;
      this.render();
    } else if (action.startsWith('setup-')) {
      const field = action.split('-')[1];
      const value = element.getAttribute('data-value');
      this.gameState[field] = value;
      // Update active button styling
      document.querySelectorAll(`[data-action="${action}"]`).forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-value') === value);
      });
    }
  }

  startSetup(mode) {
    this.gameState.mode = mode;
    this.screen = 'setup';
    this.render();
  }

  startGame() {
    if (!this.gameState.persona || !this.gameState.depositBand || !this.gameState.timePressure) {
      alert('Please select all options.');
      return;
    }
    const sequence = this.gameState.mode === 'deep' ? MAZE_SEQUENCE_DEEP : MAZE_SEQUENCE_QUICK;
    this.gameState.maze = sequence;
    this.gameState.currentRoomIndex = 0;
    this.screen = 'game';
    this.render();
    this.notifyParent();
  }

  makeChoice(choiceId) {
    const room = ROOMS[this.gameState.maze[this.gameState.currentRoomIndex]];
    const choice = room.choices.find(c => c.id === choiceId);

    // Apply stat deltas
    const deltas = this.calculateDeltas(room.id, choiceId);
    Object.keys(deltas).forEach(key => {
      this.gameState.stats[key] = Math.max(0, Math.min(100, this.gameState.stats[key] + deltas[key]));
    });

    // Log history
    this.gameState.history.push({
      roomId: room.id,
      choiceId: choiceId,
      deltas,
      timestamp: Date.now(),
    });

    // Move to next room
    this.gameState.currentRoomIndex++;

    if (this.gameState.currentRoomIndex >= this.gameState.maze.length) {
      this.screen = 'results';
      this.calculateScore();
    }

    this.render();
    this.notifyParent();
  }

  calculateDeltas(roomId, choiceId) {
    const deltas = {
      cashflow: 0,
      bufferMonths: 0,
      riskFog: 0,
      confidenceBias: 0,
      knowledge: 0,
    };

    // Simplified logic: choice c1 is usually "informed/careful", c2 is "quick/risky"
    if (roomId === 'start' && choiceId === 'c1') {
      deltas.knowledge += 10;
    }
    if (roomId === 'depositDecision' && choiceId === 'c2') {
      deltas.riskFog -= 5;
      deltas.bufferMonths += 1;
    }
    if (roomId === 'loanTermDecision' && choiceId === 'c1') {
      deltas.cashflow -= 5;
      deltas.bufferMonths -= 1;
    } else if (choiceId === 'c2') {
      deltas.knowledge += 5;
    }
    if (roomId === 'rateShock1' && choiceId === 'c2') {
      deltas.knowledge += 8;
      deltas.confidenceBias -= 5;
    }
    if (roomId === 'breakFeeAwareness' && choiceId === 'c1') {
      deltas.knowledge += 10;
    }
    if (roomId === 'bufferCheck' && choiceId === 'c2') {
      deltas.bufferMonths += 2;
    } else if (choiceId === 'c3') {
      deltas.bufferMonths += 4;
    }

    return deltas;
  }

  calculateScore() {
    const { stats } = this.gameState;

    // Start at 50
    let visibilityIndex = 50;

    // Add knowledge and buffer
    visibilityIndex += stats.knowledge * 0.5;
    visibilityIndex += Math.min(stats.bufferMonths * 5, 20);

    // Subtract for fog and bias
    visibilityIndex -= stats.riskFog * 0.3;
    visibilityIndex -= stats.confidenceBias * 0.2;

    // Clamp to 0–100
    visibilityIndex = Math.max(0, Math.min(100, visibilityIndex));

    // Calculate subscores
    const visibleScore = Math.min(100, stats.knowledge + stats.bufferMonths * 10);
    const partialScore = Math.max(0, 50 - stats.riskFog);
    const hiddenScore = Math.max(0, 100 - visibleScore - partialScore);

    this.gameState.visibilityIndex = Math.round(visibilityIndex);
    this.gameState.subscores = {
      visible: Math.round(visibleScore),
      partial: Math.round(partialScore),
      hidden: Math.round(hiddenScore),
    };
  }

  copySummary() {
    const { visibilityIndex, subscores, gameState } = this;
    const summary = `
Mortgage Visibility Index: ${visibilityIndex}/100

Breakdown:
- Visible: ${subscores.visible}/100
- Partial: ${subscores.partial}/100
- Hidden: ${subscores.hidden}/100

Your Profile:
- Persona: ${gameState.persona}
- Deposit: ${gameState.depositBand}
- Time Pressure: ${gameState.timePressure}

Stats:
- Cashflow: ${Math.round(gameState.stats.cashflow)}/100
- Buffer: ${Math.round(gameState.stats.bufferMonths)} months
- Knowledge: ${Math.round(gameState.stats.knowledge)}/100

Play Mortgage Maze at Uncle Earnie!
    `.trim();

    navigator.clipboard.writeText(summary).then(() => {
      alert('Summary copied to clipboard!');
    });
  }

  notifyParent() {
    const height = document.documentElement.scrollHeight;
    window.parent.postMessage(
      { type: 'MORTGAGE_MAZE_HEIGHT', height },
      '*'
    );
  }

  render() {
    const container = document.getElementById('game-container');
    container.innerHTML = '';

    if (this.screen === 'landing') {
      container.appendChild(this.renderLanding());
    } else if (this.screen === 'setup') {
      container.appendChild(this.renderSetup());
    } else if (this.screen === 'game') {
      container.appendChild(this.renderGame());
    } else if (this.screen === 'results') {
      container.appendChild(this.renderResults());
    }

    // Notify parent of height change
    setTimeout(() => this.notifyParent(), 100);
  }

  renderLanding() {
    const div = document.createElement('div');
    div.className = 'landing-screen';
    div.innerHTML = `
      <div class="landing-content">
        <h1 class="landing-title">🏠 Mortgage Maze</h1>
        <p class="landing-subtitle">
          Navigate mortgage decisions in a fog of war. Gather information, face shocks, and discover your financial visibility.
        </p>
        <div class="mode-buttons">
          <button class="mode-btn primary" data-action="mode" data-mode="quick">⚡ Quick Mode (5 min)</button>
          <button class="mode-btn" data-action="mode" data-mode="deep">🔍 Deep Mode (10 min)</button>
        </div>
      </div>
    `;
    return div;
  }

  renderSetup() {
    const div = document.createElement('div');
    div.className = 'setup-screen';

    const personaActive = this.gameState.persona;
    const depositActive = this.gameState.depositBand;
    const pressureActive = this.gameState.timePressure;

    div.innerHTML = `
      <h2 class="setup-title">Quick Setup</h2>
      <div class="setup-form">
        <div class="form-group">
          <label class="form-label">Your Scenario</label>
          <div class="form-options">
            ${PERSONAS.map(p => `
              <button class="option-btn ${personaActive === p ? 'active' : ''}" 
                data-action="setup-persona" data-value="${p}">${p}</button>
            `).join('')}
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Deposit Band</label>
          <div class="form-options">
            ${DEPOSIT_BANDS.map(b => `
              <button class="option-btn ${depositActive === b ? 'active' : ''}" 
                data-action="setup-depositBand" data-value="${b}">${b}</button>
            `).join('')}
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Time Pressure</label>
          <div class="form-options">
            ${TIME_PRESSURES.map(t => `
              <button class="option-btn ${pressureActive === t ? 'active' : ''}" 
                data-action="setup-timePressure" data-value="${t}">${t}</button>
            `).join('')}
          </div>
        </div>
        <div class="setup-actions">
          <button class="btn btn-secondary" data-action="setup-back">← Back</button>
          <button class="btn btn-primary" data-action="setup-submit">Start Game →</button>
        </div>
      </div>
    `;
    return div;
  }

  renderGame() {
    const div = document.createElement('div');
    div.className = 'game-screen';

    const currentRoomId = this.gameState.maze[this.gameState.currentRoomIndex];
    const room = ROOMS[currentRoomId];
    const { stats } = this.gameState;

    const header = document.createElement('div');
    header.className = 'game-header';
    header.innerHTML = `
      <h2 class="game-title">Mortgage Maze</h2>
      <div class="game-stats">
        <div class="stat"><span class="stat-label">Knowledge:</span> <span class="stat-value">${Math.round(stats.knowledge)}</span></div>
        <div class="stat"><span class="stat-label">Buffer:</span> <span class="stat-value">${Math.round(stats.bufferMonths)} mo</span></div>
        <div class="stat"><span class="stat-label">Fog:</span> <span class="stat-value">${Math.round(stats.riskFog)}</span></div>
      </div>
    `;
    div.appendChild(header);

    const mazePanel = document.createElement('div');
    mazePanel.className = 'maze-panel';
    mazePanel.innerHTML = `
      <h3>Room ${this.gameState.currentRoomIndex + 1} of ${this.gameState.maze.length}</h3>
      <div class="maze-view">
        <canvas class="maze-canvas" width="400" height="300"></canvas>
        <div class="fog-overlay"></div>
      </div>
      <div class="maze-controls">📍 Use arrow keys to navigate. Click choices below to proceed.</div>
    `;
    div.appendChild(mazePanel);

    // Draw simple maze visualization
    const canvas = mazePanel.querySelector('canvas');
    if (canvas && canvas.getContext) {
      this.drawMazeVisualization(canvas);
    }

    const decisionPanel = document.createElement('div');
    decisionPanel.className = 'decision-panel';
    decisionPanel.innerHTML = `
      <h3 class="room-title">${room.title}</h3>
      <p class="room-description">${room.description}</p>
      <div class="choices">
        ${room.choices.map(choice => `
          <button class="choice-btn" data-action="choice" data-choice="${choice.id}">
            ${choice.text}
            ${choice.hint ? `<span class="choice-hint">${choice.hint}</span>` : ''}
          </button>
        `).join('')}
      </div>
      <div class="room-info">Progress: ${this.gameState.currentRoomIndex + 1}/${this.gameState.maze.length} rooms completed</div>
    `;
    div.appendChild(decisionPanel);

    return div;
  }

  drawMazeVisualization(canvas) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    const nodeSize = 40;

    // Clear
    ctx.fillStyle = '#111917';
    ctx.fillRect(0, 0, w, h);

    // Draw grid of nodes
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1;

    for (let x = 50; x < w; x += 70) {
      for (let y = 40; y < h; y += 70) {
        ctx.beginPath();
        ctx.arc(x, y, nodeSize / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }
    }

    // Draw player (current progress)
    const playerProgress = this.gameState.currentRoomIndex / this.gameState.maze.length;
    const playerX = 50 + playerProgress * (w - 100);
    const playerY = h / 2;

    ctx.fillStyle = '#86efac';
    ctx.beginPath();
    ctx.arc(playerX, playerY, nodeSize / 2 + 4, 0, Math.PI * 2);
    ctx.fill();

    // Draw glow
    ctx.strokeStyle = '#86efac';
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    ctx.arc(playerX, playerY, nodeSize / 2 + 12, 0, Math.PI * 2);
    ctx.stroke();
    ctx.globalAlpha = 1;
  }

  renderResults() {
    const div = document.createElement('div');
    div.className = 'results-screen';

    const { visibilityIndex, subscores, gameState } = this;

    div.innerHTML = `
      <div class="results-header">
        <h2 class="results-title">Your Mortgage Visibility Index</h2>
        <div class="visibility-score">${visibilityIndex}</div>
      </div>

      <div class="subscores">
        <div class="subscore">
          <div class="subscore-label">Visible</div>
          <div class="subscore-value">${subscores.visible}</div>
        </div>
        <div class="subscore">
          <div class="subscore-label">Partial</div>
          <div class="subscore-value">${subscores.partial}</div>
        </div>
        <div class="subscore">
          <div class="subscore-label">Hidden</div>
          <div class="subscore-value">${subscores.hidden}</div>
        </div>
      </div>

      <div class="outcome-snapshot">
        <h3 class="outcome-title">Your Outcome Snapshot</h3>
        <div class="outcome-item">
          <span class="outcome-label">Monthly Payment Range</span>
          <span class="outcome-value">$1,200–$1,800</span>
        </div>
        <div class="outcome-item">
          <span class="outcome-label">Buffer (Emergency Months)</span>
          <span class="outcome-value">${Math.round(gameState.stats.bufferMonths)} months</span>
        </div>
        <div class="outcome-item">
          <span class="outcome-label">Resilience Score</span>
          <span class="outcome-value">${Math.round(gameState.stats.cashflow)}/100</span>
        </div>
        <div class="outcome-item">
          <span class="outcome-label">Refi Readiness</span>
          <span class="outcome-value">${Math.round(gameState.stats.knowledge > 50 ? 'High' : 'Medium')}</span>
        </div>
      </div>

      <div class="next-steps">
        <h3 class="steps-title">Next Steps to Improve Visibility</h3>
        <div class="steps-list">
          <div class="step-item">
            <span class="step-check">✓</span>
            <span class="step-text">Schedule a mortgage review meeting with your lender</span>
          </div>
          <div class="step-item">
            <span class="step-check">✓</span>
            <span class="step-text">Document your loan terms, rates, and break fees</span>
          </div>
          <div class="step-item">
            <span class="step-check">✓</span>
            <span class="step-text">Build a 6-month emergency buffer</span>
          </div>
          <div class="step-item">
            <span class="step-check">✓</span>
            <span class="step-text">Set reminders for rate review windows and refi opportunities</span>
          </div>
        </div>
      </div>

      <div class="results-actions">
        <button class="btn-large btn-copy" data-action="results-copy">📋 Copy Summary</button>
        <button class="btn-large btn-play-again" data-action="results-playagain">Play Again</button>
      </div>
    `;

    return div;
  }
}

// Initialize game when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new MortgageMazeGame();
});
