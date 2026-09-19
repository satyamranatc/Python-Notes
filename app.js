/* ==========================================================================
   PYTHON, BUT DIFFERENT — Application Controller & State Management
   Characters: Riya (R), Byte (B), Satyam Sir / SR (Teacher & Architect)
   ========================================================================== */

import { chaptersData } from './chapters.js';
import { dictionaryData } from './dictionary.js';
import { cleanCodePriorityTable, top20EssentialSyllabus, cleanCodeLevels } from './cleanCodeData.js';

// Application State
const state = {
  currentWorld: 'learn',
  currentChapterId: 0,
  chapterFilterCategory: 'all',
  chapterSearchQuery: '',
  dictionarySearchQuery: '',
  isCleanCodeStyle: true,
  thinkActiveTab: 'top20',
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

function initNavigation() {
  const navTabs = document.querySelectorAll('.nav-tab, .mobile-nav-tab');
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetWorld = tab.dataset.world;
      switchWorld(targetWorld);
      closeMobileDrawer();
    });
  });

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
  
  document.querySelectorAll('.nav-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.world === worldName);
  });

  document.querySelectorAll('.mobile-nav-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.world === worldName);
  });

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
// 2. Sidebar & Reader Rendering
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

  document.querySelectorAll('.chapter-item-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.id, 10) === chapterId);
  });

  const article = document.getElementById('chapter-article');
  if (!article) return;

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

  const visualizerHtml = ch.visualizerType ? getVisualizerHtml(ch.visualizerType) : '';

  const predictionHtml = ch.predictionQuestion ? `
    <div class="prediction-box">
      <div class="prediction-title">🔮 PREDICT BEFORE RUNNING: Test Your Intuition</div>
      <p style="font-weight: 600; margin-bottom: 0.75rem;">${ch.predictionQuestion.question}</p>
      <div class="prediction-options">
        ${ch.predictionQuestion.options.map((opt, idx) => `
          <button class="pred-opt-btn" data-idx="${idx}">${opt}</button>
        `).join('')}
      </div>
      <div class="prediction-feedback hidden" id="pred-feedback"></div>
    </div>
  ` : '';

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
        <div class="line-numbers">1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10</div>
        <textarea id="pg-code-textarea" class="code-textarea" spellcheck="false">${ch.interactiveCode.initialCode}</textarea>
      </div>
      <div class="playground-console">
        <div class="console-label">Console Output:</div>
        <div class="console-output" id="pg-console-output">Click ▶ Run Code to execute...</div>
      </div>
    </div>
  ` : '';

  const challengeHtml = ch.challenge ? `
    <div class="challenge-box">
      <div class="challenge-title">🎯 MINI PRACTICE CHALLENGE</div>
      <p style="font-weight: 600; font-size: 0.95rem; margin-bottom: 0.5rem;">${ch.challenge.prompt}</p>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">Type your solution in the code editor above and hit <strong>▶ Run Code</strong>!</p>
    </div>
  ` : '';

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

  // Satyam Sir's Signature Block HTML at the end of each chapter
  const signatureBlockHtml = `
    <div class="chapter-signature-block">
      <img src="signature.png" alt="Signature of Satyam Sir (S. Rana)" class="chapter-signature-img">
      <span class="signature-caption">Curriculum &amp; Story Architect &bull; <strong>Satyam Sir (S. Rana)</strong></span>
    </div>
  `;

  article.innerHTML = `
    <div class="chapter-header">
      <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 0.5rem;">
        <span class="chapter-number-tag">${ch.number} &bull; ${ch.readTime}</span>
        <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-blue); background: var(--accent-blue-light); padding: 0.15rem 0.5rem; border-radius: 4px; font-weight: 700;">${ch.depthTag || ''}</span>
      </div>
      <h1 class="chapter-main-title">${ch.title}</h1>
      <p class="chapter-lead">${ch.subtitle}</p>
    </div>

    ${ch.story}

    ${comicHtml}

    ${ch.explanation}

    ${visualizerHtml}

    ${predictionHtml}

    ${playgroundHtml}

    ${challengeHtml}

    ${dontMemorizeHtml}

    ${underHoodHtml}

    ${signatureBlockHtml}

    <div style="display: flex; justify-content: space-between; margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color); flex-wrap: wrap; gap: 1rem;">
      ${chapterId > 0 ? `<button class="btn btn-secondary" id="ch-prev-btn">← Previous Chapter</button>` : '<div></div>'}
      ${chapterId < chaptersData.length - 1 ? `<button class="btn btn-primary" id="ch-next-btn">Next Chapter →</button>` : '<div></div>'}
    </div>
  `;

  if (ch.predictionQuestion) {
    const predBtns = article.querySelectorAll('.pred-opt-btn');
    const predFeedback = document.getElementById('pred-feedback');
    predBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedIdx = parseInt(btn.dataset.idx, 10);
        const correct = selectedIdx === ch.predictionQuestion.correctIndex;

        predBtns.forEach(b => b.classList.remove('selected-correct', 'selected-wrong'));
        if (correct) {
          btn.classList.add('selected-correct');
          predFeedback.className = "prediction-feedback pred-success";
          predFeedback.innerHTML = `✅ <strong>Correct!</strong> ${ch.predictionQuestion.explanation}`;
        } else {
          btn.classList.add('selected-wrong');
          predFeedback.className = "prediction-feedback pred-error";
          predFeedback.innerHTML = `❌ <strong>Not quite!</strong> ${ch.predictionQuestion.explanation}`;
        }
        predFeedback.classList.remove('hidden');
      });
    });
  }

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

  if (ch.visualizerType) {
    bindVisualizerEvents(ch.visualizerType);
  }

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

  document.querySelectorAll('.term-link').forEach(link => {
    link.addEventListener('click', () => {
      const termId = link.dataset.id;
      openDictionaryModal(termId);
    });
  });
}

// ==========================================================================
// 3. World 2: All Chapters Directory
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
// 5. Enhanced Simulated Python Engine
// ==========================================================================
function executePythonSimulated(code, outputElement) {
  outputElement.classList.remove('error-output');
  outputElement.textContent = "Executing code...";

  setTimeout(() => {
    try {
      const lines = code.split('\n').map(l => l.trim()).filter(l => l.length > 0 && !l.startsWith('#'));
      let rawBuffer = "";
      let vars = {};

      for (let line of lines) {
        if (line.includes('=') && !line.startsWith('if') && !line.includes('==') && !line.includes('>') && !line.startsWith('print(')) {
          const parts = line.split('=');
          const varName = parts[0].trim();
          let varVal = parts[1].trim();

          if ((varVal.startsWith('"') && varVal.endsWith('"')) || (varVal.startsWith("'") && varVal.endsWith("'"))) {
            vars[varName] = varVal.slice(1, -1);
          }
          else if (varVal.startsWith('int(') && varVal.endsWith(')')) {
            const inside = varVal.substring(4, varVal.length - 1).trim();
            const innerVal = vars[inside] !== undefined ? vars[inside] : inside.replace(/['"]/g, '');
            vars[varName] = parseInt(innerVal, 10);
          }
          else if (varVal.includes('*')) {
            const mParts = varVal.split('*').map(p => p.trim());
            const v1 = vars[mParts[0]] !== undefined ? vars[mParts[0]] : Number(mParts[0]);
            const v2 = vars[mParts[1]] !== undefined ? vars[mParts[1]] : Number(mParts[1]);
            vars[varName] = v1 * v2;
          }
          else if (varVal.includes('+')) {
            const aParts = varVal.split('+').map(p => p.trim());
            const v1 = vars[aParts[0]] !== undefined ? vars[aParts[0]] : Number(aParts[0]);
            const v2 = vars[aParts[1]] !== undefined ? vars[aParts[1]] : Number(aParts[1]);
            vars[varName] = v1 + v2;
          }
          else if (!isNaN(Number(varVal))) {
            vars[varName] = Number(varVal);
          } else if (varVal === 'True') {
            vars[varName] = true;
          } else if (varVal === 'False') {
            vars[varName] = false;
          }
          continue;
        }

        if (line.startsWith('print(') && line.endsWith(')')) {
          let inside = line.substring(6, line.length - 1).trim();

          let sepVal = ' ';
          let endVal = '\n';

          if (inside.includes('sep=')) {
            const sepMatch = inside.match(/sep=['"](.*?)['"]/);
            if (sepMatch) {
              sepVal = sepMatch[1];
              inside = inside.replace(/,\s*sep=['"].*?['"]/, '').replace(/sep=['"].*?['"]/, '');
            }
          }

          if (inside.includes('end=')) {
            const endMatch = inside.match(/end=['"](.*?)['"]/);
            if (endMatch) {
              endVal = endMatch[1].replace(/\\n/g, '\n');
              inside = inside.replace(/,\s*end=['"].*?['"]/, '').replace(/end=['"].*?['"]/, '');
            }
          }

          if (inside.startsWith('f"') || inside.startsWith("f'")) {
            let fStr = inside.slice(2, -1);
            fStr = fStr.replace(/\{([^}]+)\}/g, (_, key) => {
              const trimmedKey = key.trim();
              return vars[trimmedKey] !== undefined ? vars[trimmedKey] : trimmedKey;
            });
            rawBuffer += fStr + endVal;
            continue;
          }

          if (inside.includes('>')) {
            const items = inside.split(',').map(i => i.trim());
            const evaluatedItems = items.map(item => {
              if (item.includes('>')) {
                const parts = item.split('>').map(p => p.trim());
                const v1 = vars[parts[0]] !== undefined ? vars[parts[0]] : Number(parts[0]);
                const v2 = vars[parts[1]] !== undefined ? vars[parts[1]] : Number(parts[1]);
                return (v1 > v2) ? 'True' : 'False';
              }
              if ((item.startsWith('"') && item.endsWith('"')) || (item.startsWith("'") && item.endsWith("'"))) {
                return item.slice(1, -1);
              }
              return vars[item] !== undefined ? vars[item] : item;
            });
            rawBuffer += evaluatedItems.join(sepVal) + endVal;
            continue;
          }

          const items = inside.split(',').map(i => i.trim()).filter(i => i.length > 0);
          let printedItems = items.map(item => {
            if ((item.startsWith('"') && item.endsWith('"')) || (item.startsWith("'") && item.endsWith("'"))) {
              return item.slice(1, -1);
            }
            if (vars[item] !== undefined) {
              return vars[item];
            }
            return item;
          });

          rawBuffer += printedItems.join(sepVal) + endVal;
          continue;
        }
      }

      outputElement.textContent = rawBuffer.length > 0 ? rawBuffer : "Executed cleanly (no output).";

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
// 7. World 3: Think Renderer & Clean Code Switcher
// ==========================================================================
function renderThinkWorld() {
  renderCleanCodeShowcase();
  bindThinkPills();
  renderThinkContent();
}

function bindThinkPills() {
  const pills = document.querySelectorAll('#level-pills .pill');
  pills.forEach(pill => {
    if (!pill.dataset.bound) {
      pill.dataset.bound = 'true';
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.thinkActiveTab = pill.dataset.level;
        renderThinkContent();
      });
    }
  });
}

function renderThinkContent() {
  const container = document.getElementById('think-cards-container');
  if (!container) return;

  const tab = state.thinkActiveTab;

  if (tab === 'top20') {
    container.innerHTML = `
      <div style="grid-column: 1/-1; margin-bottom: 1rem;">
        <h3 style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--text-primary); margin-bottom: 0.25rem;">
          The Top 20 Essential Python Clean Code Syllabus
        </h3>
        <p style="color: var(--text-secondary); font-size: 0.95rem;">
          If you only have time for a short mandatory syllabus, Satyam Sir recommends mastering these 20 core concepts first:
        </p>
      </div>
      ${top20EssentialSyllabus.map(item => `
        <div class="think-card" style="border-left: 4px solid var(--accent-blue);">
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <span class="card-num" style="color: var(--accent-blue);">ESSENTIAL #${item.rank}</span>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; background: var(--accent-blue-light); color: var(--accent-blue); padding: 0.2rem 0.5rem; border-radius: 4px; font-weight: 700;">MANDATORY</span>
          </div>
          <h3 style="font-size: 1.15rem; margin: 0.4rem 0;">${item.title}</h3>
          <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 0;">${item.desc}</p>
        </div>
      `).join('')}
    `;
    return;
  }

  if (tab === 'table') {
    container.innerHTML = `
      <div style="grid-column: 1/-1; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; overflow-x: auto;">
        <div style="margin-bottom: 1rem;">
          <h3 style="font-family: var(--font-serif); font-size: 1.4rem;">Satyam Sir's 40-Topic Master Priority Matrix</h3>
          <p style="color: var(--text-secondary); font-size: 0.9rem;">Clean Code concepts mapped for new Python programmers with priority weighting.</p>
        </div>
        <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; text-align: left;">
          <thead>
            <tr style="background: var(--bg-subtle); border-bottom: 2px solid var(--border-color);">
              <th style="padding: 0.75rem 0.5rem; width: 45px;">#</th>
              <th style="padding: 0.75rem 0.5rem;">Chapter / Concept</th>
              <th style="padding: 0.75rem 0.5rem;">New Programmer Priority?</th>
              <th style="padding: 0.75rem 0.5rem; width: 140px;">Priority Stars</th>
            </tr>
          </thead>
          <tbody>
            ${cleanCodePriorityTable.map(row => `
              <tr style="border-bottom: 1px solid var(--border-color);">
                <td style="padding: 0.6rem 0.5rem; font-weight: bold; color: var(--text-muted);">${row.id}</td>
                <td style="padding: 0.6rem 0.5rem; font-weight: 600;">${row.topic}</td>
                <td style="padding: 0.6rem 0.5rem;">
                  <span style="display: inline-block; padding: 0.2rem 0.6rem; border-radius: 4px; font-size: 0.8rem; font-weight: 600; background: ${row.learn.includes('Very') ? '#FEF3C7' : row.learn === 'Yes' ? '#DCFCE7' : '#F3F4F6'}; color: ${row.learn.includes('Very') ? '#92400E' : row.learn === 'Yes' ? '#166534' : '#374151'};">
                    ${row.learn}
                  </span>
                </td>
                <td style="padding: 0.6rem 0.5rem; letter-spacing: 2px;">${row.stars}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
    return;
  }

  // Handle Level Filters (l1 to l12)
  const selectedLevel = cleanCodeLevels.find(lvl => lvl.id === tab);
  const levelsToRender = selectedLevel ? [selectedLevel] : cleanCodeLevels;

  container.innerHTML = levelsToRender.map(lvl => `
    <div style="grid-column: 1/-1; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.75rem; margin-bottom: 1rem; transition: transform 0.2s;">
      <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.5rem;">
        <span class="card-num" style="color: var(--accent-terracotta);">LEVEL ${lvl.level}</span>
        <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-terracotta); background: #FFEDD5; padding: 0.25rem 0.6rem; border-radius: 4px; font-weight: 700;">
          STEP-BY-STEP PROGRESSION
        </span>
      </div>
      <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--text-primary); margin-bottom: 0.25rem;">${lvl.title}</h3>
      <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.25rem;">${lvl.subtitle}</p>

      <div style="margin-bottom: 1.25rem; background: var(--bg-subtle); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-color);">
        <strong style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); display: block; margin-bottom: 0.5rem;">Key Topics Taught:</strong>
        <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
          ${lvl.topics.map(t => `<span style="font-size: 0.82rem; background: var(--bg-card); padding: 0.25rem 0.5rem; border-radius: 4px; border: 1px solid var(--border-color);">${t}</span>`).join('')}
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
        <div style="background: #FEF2F2; border: 1px solid #FCA5A5; border-radius: 8px; padding: 1rem;">
          <div style="color: #991B1B; font-weight: 700; font-size: 0.85rem; margin-bottom: 0.5rem;">❌ BAD CODE EXAMPLE</div>
          <pre style="font-family: var(--font-mono); font-size: 0.82rem; background: #FFFFFF; padding: 0.75rem; border-radius: 6px; overflow-x: auto;"><code>${lvl.badCode}</code></pre>
        </div>
        <div style="background: #ECFDF5; border: 1px solid #A7F3D0; border-radius: 8px; padding: 1rem;">
          <div style="color: #065F46; font-weight: 700; font-size: 0.85rem; margin-bottom: 0.5rem;">✅ CLEAN PYTHON CODE</div>
          <pre style="font-family: var(--font-mono); font-size: 0.82rem; background: #FFFFFF; padding: 0.75rem; border-radius: 6px; overflow-x: auto;"><code>${lvl.cleanCode}</code></pre>
        </div>
      </div>

      <div style="background: #EFF6FF; border: 1px solid #BFDBFE; padding: 0.85rem 1rem; border-radius: 6px; color: #1E40AF; font-size: 0.9rem;">
        💡 <strong>Satyam Sir's Insight:</strong> ${lvl.explanation}
      </div>
    </div>
  `).join('');
}

function renderCleanCodeShowcase() {
  const box = document.getElementById('clean-code-preview-box');
  const btn = document.getElementById('toggle-clean-code-btn');
  if (!box) return;

  const cleanSnippet = `# Satyam Sir's Standard: Single Responsibility Principle (SRP)
def validate_student(student: Student) -> bool:
    """Validate student input data."""
    return bool(student.name and student.age >= 18)

def calculate_marks(student: Student) -> float:
    """Calculate aggregate grade marks."""
    return sum(student.scores) / len(student.scores)

def save_student(student: Student) -> None:
    """Save clean record to database."""
    database.save(student)

def send_welcome_email(student: Student) -> None:
    """Send confirmation email."""
    mailer.send(student.email, "Welcome!")`;

  const messySnippet = `# Messy Anti-Pattern: One Giant God Function doing 5 unrelated jobs
def process_student(name, age, city, course, phone, email, scores):
    # 1. Read & validate student
    if not name or age < 18:
        return False
    # 2. Calculate marks
    total = 0
    for s in scores:
        total += s
    avg = total / len(scores)
    # 3. Save student
    db_conn.execute("INSERT INTO students VALUES (?, ?)", (name, avg))
    # 4. Send email
    smtp.sendmail("admin@school.com", email, "Welcome!")`;

  box.innerHTML = `<pre style="font-family: var(--font-mono); font-size: 0.88rem; padding: 1rem; background: var(--bg-subtle); border-radius: 8px;"><code>${state.isCleanCodeStyle ? cleanSnippet : messySnippet}</code></pre>`;

  if (btn && !btn.dataset.bound) {
    btn.dataset.bound = 'true';
    btn.addEventListener('click', () => {
      state.isCleanCodeStyle = !state.isCleanCodeStyle;
      renderCleanCodeShowcase();
    });
  }
}
