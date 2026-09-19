/* ==========================================================================
   PYTHON, BUT DIFFERENT — Application Controller & State Management
   Characters: Riya (R), Byte (B), Satyam Rana / SR (Teacher & Architect)
   ========================================================================== */

import { chaptersData } from './chapters.js';
import { dictionaryData } from './dictionary.js';

// Application State
const state = {
  currentWorld: 'learn',
  currentChapterId: 0, // Starts at Chapter 00
  chapterFilterCategory: 'all',
  chapterSearchQuery: '',
  dictionarySearchQuery: '',
  visualizerState: {
    varName: 'player_name',
    varVal: '"Riya"',
    ifSwitch: true,
    loopCurrentLap: 0
  }
};

// ==========================================================================
// 1. Initializer & Event Listeners
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initMobileDrawer();
  initDictionaryModal();
  initChaptersDirectory();
  renderSidebarChapters();
  renderChapter(state.currentChapterId);
  renderThinkWorld();
  bindKeyboardShortcuts();
  bindBannerEvents();
});

// Navigation between Worlds (Desktop & Mobile)
function initNavigation() {
  const navTabs = document.querySelectorAll('.nav-tab, .mobile-nav-tab');
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetWorld = tab.dataset.world;
      switchWorld(targetWorld);
      closeMobileDrawer();
    });
  });

  // Hero Actions
  const heroStartBtn = document.getElementById('hero-start-btn');
  if (heroStartBtn) {
    heroStartBtn.addEventListener('click', () => {
      renderChapter(0);
      document.getElementById('chapter-article')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const heroChaptersBtn = document.getElementById('hero-chapters-btn');
  if (heroChaptersBtn) {
    heroChaptersBtn.addEventListener('click', () => {
      switchWorld('chapters');
    });
  }

  const brandLink = document.getElementById('brand-link');
  if (brandLink) {
    brandLink.addEventListener('click', (e) => {
      e.preventDefault();
      switchWorld('learn');
    });
  }
}

function switchWorld(worldName) {
  state.currentWorld = worldName;
  
  // Update desktop tabs
  document.querySelectorAll('.nav-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.world === worldName);
  });

  // Update mobile tabs
  document.querySelectorAll('.mobile-nav-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.world === worldName);
  });

  // Toggle World Visibility
  document.querySelectorAll('.world-view').forEach(view => {
    view.classList.remove('active-view');
  });
  
  const activeView = document.getElementById(`world-${worldName}`);
  if (activeView) {
    activeView.classList.add('active-view');
  }

  if (worldName === 'chapters') {
    renderChaptersDirectory();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mobile Drawer Controls
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-nav-drawer');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.toggle('hidden');
    });
  }
}

function closeMobileDrawer() {
  const drawer = document.getElementById('mobile-nav-drawer');
  if (drawer) {
    drawer.classList.add('hidden');
  }
}

// ==========================================================================
// 2. Sidebar & Story Reader Rendering
// ==========================================================================
function renderSidebarChapters() {
  const sidebarList = document.getElementById('sidebar-chapter-list');
  if (!sidebarList) return;

  sidebarList.innerHTML = chaptersData.map(ch => `
    <li>
      <button class="chapter-item-btn ${ch.id === state.currentChapterId ? 'active' : ''}" data-id="${ch.id}">
        <span class="ch-num">${ch.number}</span>
        <span class="ch-title">${ch.title}</span>
      </button>
    </li>
  `).join('');

  sidebarList.querySelectorAll('.chapter-item-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const chId = parseInt(btn.dataset.id, 10);
      renderChapter(chId);
      window.scrollTo({ top: 200, behavior: 'smooth' });
    });
  });
}

function renderChapter(chapterId) {
  state.currentChapterId = chapterId;
  const ch = chaptersData.find(c => c.id === chapterId);
  if (!ch) return;

  // Update sidebar active status
  document.querySelectorAll('.chapter-item-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.id, 10) === chapterId);
  });

  const article = document.getElementById('chapter-article');
  if (!article) return;

  // Build Comic Panels HTML (Riya = R, Byte = B, Satyam Rana = SR)
  const comicHtml = ch.comicPanels ? `
    <div class="comic-panel-container">
      ${ch.comicPanels.map(panel => `
        <div class="comic-dialogue ${panel.speaker}-speaker speaker-${panel.speaker}">
          <div class="avatar-badge avatar-${panel.speaker}">
            ${panel.speaker === 'riya' ? 'R' : panel.speaker === 'byte' ? 'B' : 'SR'}
          </div>
          <div class="speech-bubble">
            <strong>${panel.name}</strong>
            <p>${panel.text}</p>
          </div>
        </div>
      `).join('')}
    </div>
  ` : '';

  // Visualizer Widget HTML if specified
  const visualizerHtml = ch.visualizerType ? getVisualizerHtml(ch.visualizerType) : '';

  // Playground HTML
  const playgroundHtml = ch.interactiveCode ? `
    <div class="code-playground">
      <div class="playground-bar">
        <span class="playground-title">Python Interactive Playground — ${ch.number}</span>
        <div class="playground-actions">
          ${ch.interactiveCode.brokenCode ? `<button class="pg-btn pg-btn-break" id="pg-break-btn">⚡ Break It!</button>` : ''}
          <button class="pg-btn pg-btn-run" id="pg-run-btn">▶ Run Code</button>
        </div>
      </div>
      <div class="playground-editor-area">
        <div class="line-numbers">1<br>2<br>3<br>4<br>5<br>6<br>7<br>8</div>
        <textarea id="pg-code-textarea" class="code-textarea" spellcheck="false">${ch.interactiveCode.initialCode}</textarea>
      </div>
      <div class="playground-console">
        <div class="console-label">Console Output:</div>
        <div class="console-output" id="pg-console-output">Click ▶ Run Code to execute...</div>
      </div>
    </div>
  ` : '';

  // Cards HTML
  const dontMemorizeHtml = ch.dontMemorize ? `
    <div class="concept-card card-dont-memorize">
      <h4>📌 ${ch.dontMemorize.title}</h4>
      <p>${ch.dontMemorize.content}</p>
    </div>
  ` : '';

  const underHoodHtml = ch.underHood ? `
    <details class="concept-card card-under-hood">
      <summary>🔍 ${ch.underHood.title}</summary>
      <div class="hood-content">
        <p>${ch.underHood.content}</p>
      </div>
    </details>
  ` : '';

  // Render Full Article
  article.innerHTML = `
    <div class="chapter-header">
      <span class="chapter-number-tag">${ch.number} &bull; ${ch.readTime}</span>
      <h1 class="chapter-main-title">${ch.title}</h1>
      <p class="chapter-lead">${ch.subtitle}</p>
    </div>

    ${ch.story}

    ${comicHtml}

    ${ch.explanation}

    ${visualizerHtml}

    ${playgroundHtml}

    ${dontMemorizeHtml}

    ${underHoodHtml}

    <!-- Chapter Footer Navigation -->
    <div style="display: flex; justify-content: space-between; margin-top: 3.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color); flex-wrap: wrap; gap: 1rem;">
      ${chapterId > 0 ? `<button class="btn btn-secondary" id="ch-prev-btn">← Previous Chapter</button>` : '<div></div>'}
      ${chapterId < chaptersData.length - 1 ? `<button class="btn btn-primary" id="ch-next-btn">Next Chapter →</button>` : '<div></div>'}
    </div>
  `;

  // Attach Code Execution Events
  if (ch.interactiveCode) {
    const runBtn = document.getElementById('pg-run-btn');
    const breakBtn = document.getElementById('pg-break-btn');
    const textarea = document.getElementById('pg-code-textarea');
    const consoleOutput = document.getElementById('pg-console-output');

    if (runBtn && textarea && consoleOutput) {
      runBtn.addEventListener('click', () => {
        executePythonSimulated(textarea.value, consoleOutput);
      });
    }

    if (breakBtn && textarea && consoleOutput) {
      breakBtn.addEventListener('click', () => {
        textarea.value = ch.interactiveCode.brokenCode;
        consoleOutput.classList.add('error-output');
        consoleOutput.innerHTML = ch.interactiveCode.brokenExplanation;
      });
    }
  }

  // Attach Visualizer Listeners
  if (ch.visualizerType) {
    bindVisualizerEvents(ch.visualizerType);
  }

  // Attach Previous/Next Navigation
  const prevBtn = document.getElementById('ch-prev-btn');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      renderChapter(chapterId - 1);
      window.scrollTo({ top: 200, behavior: 'smooth' });
    });
  }
  const nextBtn = document.getElementById('ch-next-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      renderChapter(chapterId + 1);
      window.scrollTo({ top: 200, behavior: 'smooth' });
    });
  }

  // Bind Term Highlight Links
  document.querySelectorAll('.term-link').forEach(link => {
    link.addEventListener('click', () => {
      const termId = link.dataset.id;
      openDictionaryModal(termId);
    });
  });
}

// ==========================================================================
// 3. World 2: All Chapters Directory Engine
// ==========================================================================
function initChaptersDirectory() {
  const searchInput = document.getElementById('chapters-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.chapterSearchQuery = e.target.value.toLowerCase();
      renderChaptersDirectory();
    });
  }

  const pills = document.querySelectorAll('.category-pills .pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.chapterFilterCategory = pill.dataset.cat;
      renderChaptersDirectory();
    });
  });
}

function renderChaptersDirectory() {
  const container = document.getElementById('chapters-directory-grid');
  if (!container) return;

  const filtered = chaptersData.filter(ch => {
    const matchesCat = state.chapterFilterCategory === 'all' || ch.category === state.chapterFilterCategory;
    const matchesSearch = ch.title.toLowerCase().includes(state.chapterSearchQuery) ||
                          ch.subtitle.toLowerCase().includes(state.chapterSearchQuery) ||
                          ch.number.toLowerCase().includes(state.chapterSearchQuery);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem 0;">No chapters found matching your filter criteria.</p>`;
    return;
  }

  container.innerHTML = filtered.map(ch => `
    <div class="chapter-card">
      <div>
        <span class="card-num">${ch.number} &bull; ${ch.readTime}</span>
        <h3>${ch.title}</h3>
        <p>${ch.subtitle}</p>
      </div>
      <button class="btn btn-secondary read-chapter-card-btn" data-id="${ch.id}">Read Chapter →</button>
    </div>
  `).join('');

  container.querySelectorAll('.read-chapter-card-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const chId = parseInt(btn.dataset.id, 10);
      switchWorld('learn');
      renderChapter(chId);
    });
  });
}

// ==========================================================================
// 4. Interactive Visualizers
// ==========================================================================
function getVisualizerHtml(type) {
  if (type === 'variable-inspector') {
    return `
      <div class="visualizer-box">
        <div class="visualizer-title">Interactive Mental Model: Variable Box Inspector</div>
        <p style="font-size: 0.9rem; color: var(--text-secondary);">
          Type a variable label and value below to watch Python assign memory space:
        </p>
        <div class="var-inspector-stage">
          <div class="var-tag" id="vis-var-tag">player_name</div>
          <div class="pointer-arrow">➔</div>
          <div class="memory-box">
            <span class="box-label">RAM Drawer</span>
            <div class="box-val" id="vis-box-val">"Riya"</div>
          </div>
        </div>
        <div class="interactive-inputs">
          <input type="text" id="vis-name-input" value="player_name" placeholder="Variable Name" style="width: 140px;">
          <span style="align-self: center; font-weight: bold;">=</span>
          <input type="text" id="vis-val-input" value='"Riya"' placeholder="Value" style="width: 140px;">
        </div>
      </div>
    `;
  }
  return '';
}

function bindVisualizerEvents(type) {
  if (type === 'variable-inspector') {
    const nameInput = document.getElementById('vis-name-input');
    const valInput = document.getElementById('vis-val-input');
    const varTag = document.getElementById('vis-var-tag');
    const boxVal = document.getElementById('vis-box-val');

    if (nameInput && valInput && varTag && boxVal) {
      nameInput.addEventListener('input', () => {
        varTag.textContent = nameInput.value || 'x';
      });
      valInput.addEventListener('input', () => {
        boxVal.textContent = valInput.value || 'None';
      });
    }
  }
}

// ==========================================================================
// 5. Simulated Python Engine
// ==========================================================================
function executePythonSimulated(code, outputElement) {
  outputElement.classList.remove('error-output');
  outputElement.textContent = "Executing code...";

  setTimeout(() => {
    try {
      const lines = code.split('\n').map(l => l.trim()).filter(l => l.length > 0 && !l.startsWith('#'));
      let logs = [];
      let vars = {};

      for (let line of lines) {
        // Variable Assignment
        if (line.includes('=') && !line.startsWith('if') && !line.includes('==') && !line.includes('>')) {
          const parts = line.split('=');
          const varName = parts[0].trim();
          let varVal = parts[1].trim();

          // Strings
          if ((varVal.startsWith('"') && varVal.endsWith('"')) || (varVal.startsWith("'") && varVal.endsWith("'"))) {
            vars[varName] = varVal.slice(1, -1);
          }
          // int()
          else if (varVal.startsWith('int(') && varVal.endsWith(')')) {
            const inside = varVal.substring(4, varVal.length - 1).trim();
            const innerVal = vars[inside] !== undefined ? vars[inside] : inside.replace(/['"]/g, '');
            vars[varName] = parseInt(innerVal, 10);
          }
          // Math multiplication
          else if (varVal.includes('*')) {
            const mParts = varVal.split('*').map(p => p.trim());
            const v1 = vars[mParts[0]] !== undefined ? vars[mParts[0]] : Number(mParts[0]);
            const v2 = vars[mParts[1]] !== undefined ? vars[mParts[1]] : Number(mParts[1]);
            vars[varName] = v1 * v2;
          }
          // Math addition
          else if (varVal.includes('+')) {
            const aParts = varVal.split('+').map(p => p.trim());
            const v1 = vars[aParts[0]] !== undefined ? vars[aParts[0]] : Number(aParts[0]);
            const v2 = vars[aParts[1]] !== undefined ? vars[aParts[1]] : Number(aParts[1]);
            vars[varName] = v1 + v2;
          }
          // Numbers
          else if (!isNaN(Number(varVal))) {
            vars[varName] = Number(varVal);
          } else if (varVal === 'True') {
            vars[varName] = true;
          } else if (varVal === 'False') {
            vars[varName] = false;
          }
          continue;
        }

        // Print Statement
        if (line.startsWith('print(') && line.endsWith(')')) {
          const inside = line.substring(6, line.length - 1).trim();
          
          if (inside.includes('>')) {
            const compParts = inside.split('>').map(p => p.trim());
            const val1 = vars[compParts[0]] !== undefined ? vars[compParts[0]] : Number(compParts[0]);
            const val2 = vars[compParts[1]] !== undefined ? vars[compParts[1]] : Number(compParts[1]);
            logs.push((val1 > val2) ? 'True' : 'False');
            continue;
          }

          if (inside.includes('+')) {
            const concatParts = inside.split('+').map(p => p.trim());
            let resultStr = concatParts.map(part => {
              if ((part.startsWith('"') && part.endsWith('"')) || (part.startsWith("'") && part.endsWith("'"))) {
                return part.slice(1, -1);
              }
              if (part.startsWith('str(') && part.endsWith(')')) {
                const inner = part.substring(4, part.length - 1).trim();
                return vars[inner] !== undefined ? String(vars[inner]) : inner;
              }
              return vars[part] !== undefined ? String(vars[part]) : part;
            }).join('');
            logs.push(resultStr);
            continue;
          }

          if ((inside.startsWith('"') && inside.endsWith('"')) || (inside.startsWith("'") && inside.endsWith("'"))) {
            logs.push(inside.slice(1, -1));
          } else if (vars[inside] !== undefined) {
            logs.push(String(vars[inside]));
          } else if (!isNaN(Number(inside))) {
            logs.push(inside);
          } else {
            logs.push(inside);
          }
          continue;
        }
      }

      outputElement.textContent = logs.length > 0 ? logs.join('\n') : "Executed cleanly (no print output).";

    } catch (err) {
      outputElement.classList.add('error-output');
      outputElement.textContent = `Python Runtime Exception: ${err.message}`;
    }
  }, 200);
}

// ==========================================================================
// 6. Modal Dictionary
// ==========================================================================
function initDictionaryModal() {
  const modalBackdrop = document.getElementById('idea-modal-backdrop');
  const searchInput = document.getElementById('dictionary-search-input');
  const searchBtn = document.getElementById('search-trigger-btn');

  if (searchBtn) {
    searchBtn.addEventListener('click', () => openDictionaryModal());
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeDictionaryModal();
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.dictionarySearchQuery = e.target.value.toLowerCase();
      renderDictionaryResults();
    });
  }
}

function openDictionaryModal(filterTermId = null) {
  const modalBackdrop = document.getElementById('idea-modal-backdrop');
  const searchInput = document.getElementById('dictionary-search-input');
  if (!modalBackdrop) return;

  modalBackdrop.classList.remove('hidden');

  if (filterTermId && searchInput) {
    const item = dictionaryData.find(d => d.id === filterTermId);
    if (item) {
      searchInput.value = item.term;
      state.dictionarySearchQuery = item.term.toLowerCase();
    }
  } else if (searchInput) {
    searchInput.value = '';
    state.dictionarySearchQuery = '';
    searchInput.focus();
  }

  renderDictionaryResults();
}

function closeDictionaryModal() {
  const modalBackdrop = document.getElementById('idea-modal-backdrop');
  if (modalBackdrop) {
    modalBackdrop.classList.add('hidden');
  }
}

function renderDictionaryResults() {
  const container = document.getElementById('dictionary-results-container');
  if (!container) return;

  const filtered = dictionaryData.filter(item => {
    return item.term.toLowerCase().includes(state.dictionarySearchQuery) ||
           item.metaphor.toLowerCase().includes(state.dictionarySearchQuery) ||
           item.explanation.toLowerCase().includes(state.dictionarySearchQuery);
  });

  if (filtered.length === 0) {
    container.innerHTML = `<p style="color: var(--text-muted); padding: 1rem 0;">No matching concepts found for "${state.dictionarySearchQuery}". Try 'Variable' or 'Operator'.</p>`;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="dict-item">
      <div class="dict-term">${item.term}</div>
      <div class="dict-metaphor">💡 <strong>Metaphor:</strong> ${item.metaphor}</div>
      <p style="font-size: 0.95rem; margin-bottom: 0.5rem;">${item.explanation}</p>
      <pre style="font-family: var(--font-mono); font-size: 0.82rem; background: var(--bg-subtle); padding: 0.4rem 0.6rem; border-radius: 4px;"><code>${item.example}</code></pre>
    </div>
  `).join('');
}

function bindKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      const modalBackdrop = document.getElementById('idea-modal-backdrop');
      if (modalBackdrop && !modalBackdrop.classList.contains('hidden')) {
        closeDictionaryModal();
      } else {
        openDictionaryModal();
      }
    }
    if (e.key === 'Escape') {
      closeDictionaryModal();
      closeMobileDrawer();
    }
  });

  const footerShortcutBtn = document.getElementById('footer-shortcut-btn');
  if (footerShortcutBtn) {
    footerShortcutBtn.addEventListener('click', () => openDictionaryModal());
  }

  const footerResetBtn = document.getElementById('footer-reset-btn');
  if (footerResetBtn) {
    footerResetBtn.addEventListener('click', () => {
      renderChapter(0);
      switchWorld('learn');
    });
  }
}

function bindBannerEvents() {
  const closeBtn = document.getElementById('close-banner-btn');
  const banner = document.getElementById('announcement-banner');
  if (closeBtn && banner) {
    closeBtn.addEventListener('click', () => {
      banner.style.display = 'none';
    });
  }
}

// ==========================================================================
// 7. World 3: Think Renderer
// ==========================================================================
function renderThinkWorld() {
  const container = document.getElementById('think-cards-container');
  if (!container) return;

  const thinkTopics = [
    {
      num: "01. MENTAL MODEL",
      title: "Problem Decomposition",
      desc: "Satyam Rana's First Rule: Never try to code an entire system at once. Break big intimidating problems into 3 tiny child problems until each fits on a single napkin."
    },
    {
      num: "02. MENTAL MODEL",
      title: "The Debugging Mindset",
      desc: "Python isn't angry at you when an error pops up. Treat errors like clues at a crime scene. Ask: 'What assumption did I make that turned out to be false?'"
    },
    {
      num: "03. MENTAL MODEL",
      title: "Typecasting & Data Contracts",
      desc: "Data doesn't mix by magic. Always make sure your functions and operations receive the exact data type they expect."
    },
    {
      num: "04. MENTAL MODEL",
      title: "Clean Code Aesthetics",
      desc: "Code is read 10x more often than it is written. Write your code for human beings first, and for the Python interpreter second."
    }
  ];

  container.innerHTML = thinkTopics.map(t => `
    <div class="think-card">
      <span class="card-num">${t.num}</span>
      <h3>${t.title}</h3>
      <p style="color: var(--text-secondary); font-size: 0.95rem;">${t.desc}</p>
    </div>
  `).join('');
}
