// ==========================================================================
// APEX MOTO - Interactive Controller & State Management (Expanded Edition)
// ==========================================================================

// State
let currentTab = 'africa'; // 'africa' | 'global' | 'all'
let currentCategory = 'all';
let currentBrand = 'all';
let searchQuery = '';
let currentFactIndex = 0;
let currentConceptIndex = 0;
let currentEngineTab = 'cars'; // 'cars' | 'motos' | 'comparisons' | 'facts'

// Fallback high-contrast motorcycle silhouette SVG if an image fails to load
const FALLBACK_MOTO_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="350" viewBox="0 0 600 350" fill="none"><rect width="600" height="350" fill="%23111723"/><circle cx="160" cy="230" r="55" stroke="%23ff3b30" stroke-width="8"/><circle cx="440" cy="230" r="55" stroke="%23ff3b30" stroke-width="8"/><path d="M160 230L260 140L350 140L440 230M260 140L320 230L440 230M260 140L230 110L200 110" stroke="%23f8fafc" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><text x="300" y="70" fill="%2394a3b8" font-family="sans-serif" font-size="16" font-weight="700" text-anchor="middle">POWERBIKE EDITIONS</text></svg>`;

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  initNavbarNavigation();
  initHistoryFact();
  initDailyConcepts();
  initEngineLab();
  initRegionTabs();
  initCategoryFilters();
  initBrandFilters();
  initSearch();
  initModalListeners();
  renderBikes();
  updateCounts();
});

// ==========================================================================
// 0. Navbar Dynamic Focus & Scroll Spy
// ==========================================================================
function initNavbarNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = [
    { id: 'history-section', el: document.getElementById('history-section') },
    { id: 'concepts-section', el: document.getElementById('concepts-section') },
    { id: 'engines-section', el: document.getElementById('engines-section') },
    { id: 'bikes-section', el: document.getElementById('bikes-section') }
  ];

  let isClickScrolling = false;
  let clickTimeout = null;

  function setActiveLink(targetId) {
    navLinks.forEach(link => {
      const href = link.getAttribute('href') || '';
      link.classList.toggle('active', href === `#${targetId}`);
    });
  }

  // Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const navLinksContainer = document.getElementById('nav-links');

  if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinksContainer.classList.toggle('open');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navLinksContainer.classList.contains('open') && !navLinksContainer.contains(e.target) && e.target !== mobileToggle) {
        navLinksContainer.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Handle click on nav items
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetId = href.substring(1);
        setActiveLink(targetId);

        // Close mobile drawer if open
        if (navLinksContainer) {
          navLinksContainer.classList.remove('open');
          if (mobileToggle) {
            mobileToggle.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
          }
        }
        
        // Lock scroll spy while smooth scrolling to target
        isClickScrolling = true;
        clearTimeout(clickTimeout);
        clickTimeout = setTimeout(() => {
          isClickScrolling = false;
        }, 900);
      }
    });
  });

  // Dynamic Scroll Spy
  window.addEventListener('scroll', () => {
    // Skip scroll-spy while animated click scroll is in progress
    if (isClickScrolling) return;

    // If near the top hero area, remove active indicator
    if (window.scrollY < 200) {
      navLinks.forEach(link => link.classList.remove('active'));
      return;
    }

    // Check if scrolled near the bottom of the page
    if ((window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 60)) {
      setActiveLink('bikes-section');
      return;
    }

    const scrollPosition = window.scrollY + 120; // sticky navbar offset
    let activeSectionId = '';

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section.el) {
        const top = section.el.offsetTop;
        if (scrollPosition >= top) {
          activeSectionId = section.id;
          break;
        }
      }
    }

    if (activeSectionId) {
      setActiveLink(activeSectionId);
    }
  }, { passive: true });
}

// ==========================================================================
// 1. Fun History Fact Section
// ==========================================================================
function initHistoryFact() {
  const rollBtn = document.getElementById('roll-fact-btn');
  const dotsContainer = document.getElementById('history-dots');

  if (dotsContainer && typeof HISTORY_FACTS !== 'undefined') {
    dotsContainer.innerHTML = HISTORY_FACTS.map((_, i) => 
      `<div class="history-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`
    ).join('');

    dotsContainer.addEventListener('click', (e) => {
      const dot = e.target.closest('.history-dot');
      if (dot) {
        currentFactIndex = parseInt(dot.dataset.index, 10);
        renderCurrentFact();
      }
    });
  }

  if (rollBtn) {
    rollBtn.addEventListener('click', () => {
      rollBtn.classList.add('spinning');
      currentFactIndex = (currentFactIndex + 1) % HISTORY_FACTS.length;
      renderCurrentFact();
      setTimeout(() => rollBtn.classList.remove('spinning'), 600);
    });
  }

  renderCurrentFact();
}

function renderCurrentFact() {
  if (typeof HISTORY_FACTS === 'undefined' || !HISTORY_FACTS.length) return;
  const fact = HISTORY_FACTS[currentFactIndex];
  
  const badgeEl = document.getElementById('fact-badge');
  const yearEl = document.getElementById('fact-year');
  const titleEl = document.getElementById('fact-title');
  const summaryEl = document.getElementById('fact-summary');
  const storyEl = document.getElementById('fact-story');
  const takeawayEl = document.getElementById('fact-takeaway');
  const contentWrapper = document.getElementById('history-content-wrapper');

  if (badgeEl) badgeEl.textContent = fact.tag;
  if (yearEl) yearEl.textContent = `Era: ${fact.year}`;
  if (titleEl) titleEl.textContent = fact.title;
  if (summaryEl) summaryEl.textContent = fact.summary;
  if (storyEl) storyEl.textContent = fact.story;
  if (takeawayEl) takeawayEl.textContent = fact.takeaway;

  if (contentWrapper) {
    contentWrapper.classList.remove('history-content-body');
    void contentWrapper.offsetWidth;
    contentWrapper.classList.add('history-content-body');
  }

  const dots = document.querySelectorAll('.history-dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentFactIndex);
  });
}

// ==========================================================================
// 2. Daily Knowledge / Concepts Section
// ==========================================================================
function initDailyConcepts() {
  const pillsBar = document.getElementById('concept-pills-bar');
  if (!pillsBar || typeof BIKE_CONCEPTS === 'undefined') return;

  pillsBar.innerHTML = BIKE_CONCEPTS.map((concept, idx) => `
    <button class="concept-pill-btn ${idx === 0 ? 'active' : ''}" data-index="${idx}">
      <span class="pill-dot">•</span>
      ${concept.name}
    </button>
  `).join('');

  pillsBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.concept-pill-btn');
    if (btn) {
      currentConceptIndex = parseInt(btn.dataset.index, 10);
      updateConceptDisplay();
    }
  });

  updateConceptDisplay();
}

function updateConceptDisplay() {
  if (typeof BIKE_CONCEPTS === 'undefined' || !BIKE_CONCEPTS.length) return;
  const concept = BIKE_CONCEPTS[currentConceptIndex];

  document.querySelectorAll('.concept-pill-btn').forEach((btn, idx) => {
    btn.classList.toggle('active', idx === currentConceptIndex);
  });

  document.getElementById('concept-category').textContent = concept.category;
  document.getElementById('concept-title').textContent = concept.name;
  document.getElementById('concept-subtitle').textContent = concept.subtitle;
  document.getElementById('concept-analogy').textContent = concept.analogy;
  document.getElementById('concept-how').textContent = concept.howItWorks;

  const whyList = document.getElementById('concept-why-list');
  if (whyList) {
    whyList.innerHTML = concept.whyItMatters.map(pt => `<li>${pt}</li>`).join('');
  }

  const bikesTags = document.getElementById('concept-bike-tags');
  if (bikesTags) {
    bikesTags.innerHTML = concept.signatureBikes.map(bName => 
      `<span class="concept-bike-tag" onclick="searchBikeName('${bName.replace(/'/g, "\\'")}')">${bName}</span>`
    ).join('');
  }
}

window.searchBikeName = function(bikeName) {
  const searchInput = document.getElementById('bike-search-input');
  if (searchInput) {
    const shortName = bikeName.split(' ')[0];
    searchInput.value = shortName;
    searchQuery = shortName.toLowerCase();
    setTab('all');
    renderBikes();
    
    const bikesSection = document.getElementById('bikes-section');
    if (bikesSection) {
      bikesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

// ==========================================================================
// 2.5 Automobile & Motorcycle Engine Engineering Lab
// ==========================================================================
function initEngineLab() {
  const tabBtns = document.querySelectorAll('.engine-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentEngineTab = btn.dataset.engineTab;
      tabBtns.forEach(b => b.classList.toggle('active', b.dataset.engineTab === currentEngineTab));
      renderEngineContent();
    });
  });

  renderEngineContent();
}

function renderEngineContent() {
  const container = document.getElementById('engines-content-area');
  if (!container) return;

  if (currentEngineTab === 'cars') {
    if (typeof AUTOMOBILE_ENGINES === 'undefined') return;
    container.innerHTML = `
      <div class="engines-grid">
        ${AUTOMOBILE_ENGINES.map(eng => `
          <article class="engine-card">
            <div class="engine-card-header">
              <div class="engine-badge-row">
                <span class="engine-badge">${eng.badge}</span>
                <span class="engine-category-tag">${eng.category}</span>
              </div>
              <h3 class="engine-card-title">${eng.name}</h3>
              <p class="engine-summary">${eng.summary}</p>
            </div>

            <div class="engine-card-body">
              <div class="engine-physics-box">
                <div class="engine-physics-label">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                  Physics & Balancing Mechanics
                </div>
                <p class="engine-physics-text">${eng.physicsExplained.replace(/\n\n/g, '<br><br>')}</p>
              </div>

              <div class="engine-tradeoffs-row">
                <div>
                  <strong style="font-size:0.75rem; text-transform:uppercase; color:var(--accent-emerald); display:block; margin-bottom:6px;">Advantages</strong>
                  <ul class="engine-pro-list">
                    ${eng.pros.map(p => `<li>${p}</li>`).join('')}
                  </ul>
                </div>
                <div>
                  <strong style="font-size:0.75rem; text-transform:uppercase; color:#f87171; display:block; margin-bottom:6px;">Trade-offs</strong>
                  <ul class="engine-con-list">
                    ${eng.cons.map(c => `<li>${c}</li>`).join('')}
                  </ul>
                </div>
              </div>

              <div class="engine-vehicles-block">
                <div class="engine-vehicles-label">Iconic Vehicles Equipped:</div>
                <div class="engine-vehicle-tags">
                  ${eng.famousVehicles.map(v => `<span class="engine-vehicle-tag">${v}</span>`).join('')}
                </div>
              </div>

              <div class="engine-fact-callout">
                <strong style="color:var(--accent-orange);">💡 Engineering Marvel: </strong>
                <span>${eng.engineeringFact}</span>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    `;
  } else if (currentEngineTab === 'motos') {
    if (typeof MOTORCYCLE_ENGINES === 'undefined') return;
    container.innerHTML = `
      <div class="engines-grid">
        ${MOTORCYCLE_ENGINES.map(eng => `
          <article class="engine-card">
            <div class="engine-card-header">
              <div class="engine-badge-row">
                <span class="engine-badge" style="background:rgba(255,119,0,0.15); color:#ff9f43; border-color:rgba(255,119,0,0.3);">${eng.badge}</span>
                <span class="engine-category-tag">${eng.category}</span>
              </div>
              <h3 class="engine-card-title">${eng.name}</h3>
              <p class="engine-summary">${eng.summary}</p>
            </div>

            <div class="engine-card-body">
              <div class="engine-physics-box">
                <div class="engine-physics-label" style="color:var(--accent-blue);">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                  Motorcycle Dynamics & Crank Mechanics
                </div>
                <p class="engine-physics-text">${eng.physicsExplained.replace(/\n\n/g, '<br><br>')}</p>
              </div>

              <div class="engine-tradeoffs-row">
                <div>
                  <strong style="font-size:0.75rem; text-transform:uppercase; color:var(--accent-emerald); display:block; margin-bottom:6px;">Advantages</strong>
                  <ul class="engine-pro-list">
                    ${eng.pros.map(p => `<li>${p}</li>`).join('')}
                  </ul>
                </div>
                <div>
                  <strong style="font-size:0.75rem; text-transform:uppercase; color:#f87171; display:block; margin-bottom:6px;">Trade-offs</strong>
                  <ul class="engine-con-list">
                    ${eng.cons.map(c => `<li>${c}</li>`).join('')}
                  </ul>
                </div>
              </div>

              <div class="engine-vehicles-block">
                <div class="engine-vehicles-label">Iconic Powerbikes Equipped:</div>
                <div class="engine-vehicle-tags">
                  ${eng.famousBikes.map(b => `<span class="engine-vehicle-tag" style="cursor:pointer;" onclick="searchBikeName('${b.split(' ')[0]}')">${b}</span>`).join('')}
                </div>
              </div>

              <div class="engine-fact-callout">
                <strong style="color:var(--accent-orange);">💡 Moto Engineering Fact: </strong>
                <span>${eng.engineeringFact}</span>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    `;
  } else if (currentEngineTab === 'comparisons') {
    if (typeof CAR_VS_MOTO_COMPARISONS === 'undefined') return;
    container.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:20px;">
        ${CAR_VS_MOTO_COMPARISONS.map(cmp => `
          <article class="comparison-card">
            <div class="comparison-header">
              <h3 class="comparison-title">${cmp.title}</h3>
              <span class="engine-badge">${cmp.category}</span>
            </div>
            <p style="font-size:1.05rem; color:#cbd5e1; margin-bottom:14px; font-weight:600;">${cmp.summary}</p>
            <div class="comparison-text">${cmp.deepDive.replace(/\n\n/g, '<br><br>')}</div>
            <div class="comparison-takeaway-bar">
              <span style="color:var(--accent-blue); font-weight:800;">🔑 Core Engineering Takeaway: </span>
              ${cmp.takeaway}
            </div>
          </article>
        `).join('')}
      </div>
    `;
  } else if (currentEngineTab === 'facts') {
    if (typeof ENGINE_ENGINEERING_FACTS === 'undefined') return;
    container.innerHTML = `
      <div class="engines-grid">
        ${ENGINE_ENGINEERING_FACTS.map(fact => `
          <article class="engine-card" style="border-color:rgba(255,119,0,0.3);">
            <div class="engine-card-header">
              <div class="engine-badge-row">
                <span class="history-badge">${fact.tag}</span>
                <span class="history-year-tag">${fact.year}</span>
              </div>
              <h3 class="engine-card-title">${fact.title}</h3>
            </div>
            <div class="engine-card-body">
              <p style="font-size:0.95rem; line-height:1.7; color:#cbd5e1; margin-bottom:18px;">${fact.story}</p>
              <div class="history-takeaway-box" style="margin-top:auto;">
                <div class="takeaway-icon">⚡</div>
                <div class="takeaway-text">
                  <strong style="color:var(--accent-orange);">Engineering Lesson: </strong>
                  ${fact.takeaway}
                </div>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    `;
  }
}

// ==========================================================================
// 3. Region Tabs & Filtering (Africa, Global, All)
// ==========================================================================
function initRegionTabs() {
  const tabButtons = document.querySelectorAll('.region-tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      setTab(tab);
    });
  });
}

function setTab(tab) {
  currentTab = tab;
  document.querySelectorAll('.region-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });
  renderBikes();
}

function initCategoryFilters() {
  const chips = document.querySelectorAll('.cat-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      currentCategory = chip.dataset.category;
      chips.forEach(c => c.classList.toggle('active', c.dataset.category === currentCategory));
      renderBikes();
    });
  });
}

function initBrandFilters() {
  const brandChips = document.querySelectorAll('.brand-chip');
  brandChips.forEach(chip => {
    chip.addEventListener('click', () => {
      currentBrand = chip.dataset.brand;
      brandChips.forEach(c => c.classList.toggle('active', c.dataset.brand === currentBrand));
      renderBikes();
    });
  });
}

function initSearch() {
  const searchInput = document.getElementById('bike-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderBikes();
    });
  }
}

function updateCounts() {
  if (typeof BIKES_DATABASE === 'undefined') return;
  const africaCount = BIKES_DATABASE.filter(b => b.isAfricaFamous).length;
  const globalCount = BIKES_DATABASE.filter(b => b.isGlobalFamous).length;
  const totalCount = BIKES_DATABASE.length;

  const countAfrica = document.getElementById('count-africa');
  const countGlobal = document.getElementById('count-global');
  const countAll = document.getElementById('count-all');

  if (countAfrica) countAfrica.textContent = africaCount;
  if (countGlobal) countGlobal.textContent = globalCount;
  if (countAll) countAll.textContent = totalCount;
}

// ==========================================================================
// 4. Bike Cards Rendering (Intelligent Search & Non-Overloaded Grid)
// ==========================================================================
function renderBikes() {
  const grid = document.getElementById('bikes-grid');
  if (!grid || typeof BIKES_DATABASE === 'undefined') return;

  // Filter based on Tab
  let filtered = BIKES_DATABASE.filter(bike => {
    if (currentTab === 'africa') return bike.isAfricaFamous;
    if (currentTab === 'global') return bike.isGlobalFamous;
    return true; // 'all'
  });

  // Filter based on Category
  if (currentCategory !== 'all') {
    filtered = filtered.filter(bike => 
      bike.category.toLowerCase().includes(currentCategory.toLowerCase())
    );
  }

  // Filter based on Brand
  if (currentBrand !== 'all') {
    filtered = filtered.filter(bike => 
      bike.brand.toLowerCase().includes(currentBrand.toLowerCase())
    );
  }

  // Intelligent Tokenized Search Query with Aliases
  if (searchQuery) {
    const tokens = searchQuery.split(/\s+/).filter(Boolean);

    filtered = filtered.filter(bike => {
      const searchableFields = [
        bike.name.toLowerCase(),
        bike.brand.toLowerCase(),
        bike.category.toLowerCase(),
        bike.country.toLowerCase(),
        bike.specs.engineType.toLowerCase(),
        ...(bike.aliases || []).map(a => a.toLowerCase()),
        ...(bike.popularityAreas?.regions || []).map(r => r.toLowerCase())
      ].join(' ');

      // Every word typed must match in the searchable text
      return tokens.every(token => {
        // Special alias normalization for common motorcycle queries
        if (token === 'gs' || token === 'gss') {
          return searchableFields.includes('gs') || searchableFields.includes('bmw');
        }
        if (token === 'african' || token === 'africa') {
          return searchableFields.includes('africa');
        }
        return searchableFields.includes(token);
      });
    });
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results-box">
        <div class="no-results-icon">🏍️</div>
        <h3>No Powerbikes Found</h3>
        <p>No motorcycles match your current filter "${searchQuery || currentBrand || currentCategory}". Try switching tabs or resetting filters.</p>
        <button style="margin-top:16px; padding:10px 24px; background:var(--accent-gradient); color:#fff; border-radius:9999px; font-weight:700; cursor:pointer;" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(bike => {
    let regionTagClass = 'global';
    let regionTagLabel = 'Global Icon';
    if (bike.isAfricaFamous && bike.isGlobalFamous) {
      regionTagClass = 'both';
      regionTagLabel = 'Africa & Global';
    } else if (bike.isAfricaFamous) {
      regionTagClass = 'africa';
      regionTagLabel = 'Africa Favorite';
    }

    return `
      <article class="bike-card" data-id="${bike.id}">
        <div class="bike-image-container">
          <img class="bike-img" 
               src="${bike.heroImage}" 
               alt="${bike.brand} ${bike.name}" 
               loading="lazy" 
               onerror="this.onerror=null; this.src='${FALLBACK_MOTO_SVG}';" />
          <div class="bike-badges-overlay">
            <span class="region-tag ${regionTagClass}">${regionTagLabel}</span>
            <span class="category-badge-overlay">${bike.category}</span>
          </div>
        </div>

        <div class="bike-card-body">
          <div class="bike-brand-header">
            <span class="bike-brand">${bike.brand}</span>
            <span class="bike-country">${bike.country}</span>
          </div>
          <h3 class="bike-name">${bike.name}</h3>
          <p class="bike-hook">${bike.quickHook}</p>

          <!-- Clean specs strip to prevent information overload -->
          <div class="bike-specs-strip">
            <div class="spec-block">
              <span class="spec-val">${bike.specs.displacementCc}</span>
              <span class="spec-unit">CC</span>
            </div>
            <div class="spec-block">
              <span class="spec-val">${bike.specs.horsepowerHp}</span>
              <span class="spec-unit">HP</span>
            </div>
            <div class="spec-block">
              <span class="spec-val">${bike.specs.topSpeedKmh}</span>
              <span class="spec-unit">KM/H</span>
            </div>
            <div class="spec-block">
              <span class="spec-val">${bike.specs.weightKg}</span>
              <span class="spec-unit">KG</span>
            </div>
          </div>

          <button class="read-more-btn" onclick="openBikeModal('${bike.id}')">
            <span>Read Deep-Dive & Features</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </article>
    `;
  }).join('');
}

window.resetFilters = function() {
  currentTab = 'all';
  currentCategory = 'all';
  currentBrand = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('bike-search-input');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.cat-chip').forEach(c => c.classList.toggle('active', c.dataset.category === 'all'));
  document.querySelectorAll('.brand-chip').forEach(c => c.classList.toggle('active', c.dataset.brand === 'all'));
  setTab('all');
};

// ==========================================================================
// 5. Deep-Dive Modal (Preventing Overload until Requested)
// ==========================================================================
function initModalListeners() {
  const backdrop = document.getElementById('bike-modal-backdrop');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeBikeModal);
  }

  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeBikeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeBikeModal();
  });
}

window.openBikeModal = function(bikeId) {
  const bike = BIKES_DATABASE.find(b => b.id === bikeId);
  if (!bike) return;

  const backdrop = document.getElementById('bike-modal-backdrop');
  
  // Header
  document.getElementById('modal-bike-title').textContent = `${bike.brand} ${bike.name}`;
  document.getElementById('modal-brand-hero').textContent = `${bike.brand} • ${bike.country}`;
  document.getElementById('modal-name-hero').textContent = bike.name;
  
  const heroImg = document.getElementById('modal-hero-img');
  if (heroImg) {
    heroImg.src = bike.heroImage;
    heroImg.onerror = function() {
      this.onerror = null;
      this.src = FALLBACK_MOTO_SVG;
    };
  }

  // Deep Technical Specs
  document.getElementById('spec-cc').textContent = `${bike.specs.displacementCc} cc`;
  document.getElementById('spec-hp').textContent = `${bike.specs.horsepowerHp} HP`;
  document.getElementById('spec-hp-rpm').textContent = `@ ${bike.specs.rpmPeakHp.toLocaleString()} RPM`;
  document.getElementById('spec-torque').textContent = `${bike.specs.torqueNm} Nm`;
  document.getElementById('spec-torque-rpm').textContent = `@ ${bike.specs.rpmPeakTorque.toLocaleString()} RPM`;
  document.getElementById('spec-speed').textContent = `${bike.specs.topSpeedKmh} km/h`;
  document.getElementById('spec-weight').textContent = `${bike.specs.weightKg} kg`;
  document.getElementById('spec-tank').textContent = `${bike.specs.fuelCapacityL} Litres`;
  document.getElementById('spec-seat').textContent = `${bike.specs.seatHeightMm} mm`;
  document.getElementById('spec-engine-type').textContent = bike.specs.engineType;
  document.getElementById('spec-trans').textContent = bike.specs.transmission;

  // Physical Features
  document.getElementById('feat-chassis').textContent = bike.physicalFeatures.frameAndChassis;
  document.getElementById('feat-ergo').textContent = bike.physicalFeatures.ergonomics;
  document.getElementById('feat-suspension').textContent = bike.physicalFeatures.frontSuspension;
  document.getElementById('feat-aero').textContent = bike.physicalFeatures.aerodynamicsAndBody;
  document.getElementById('feat-brakes').textContent = bike.physicalFeatures.brakingAndWheels;

  // Economic Reasons
  document.getElementById('econ-title').textContent = bike.economicReasons.title;
  document.getElementById('econ-desc').textContent = bike.economicReasons.explanation;

  // Popularity & Cultural Context
  const popRegions = document.getElementById('pop-regions');
  if (popRegions) {
    popRegions.innerHTML = bike.popularityAreas.regions.map(r => 
      `<span class="pop-region-tag">${r}</span>`
    ).join('');
  }
  document.getElementById('pop-cultural').textContent = bike.popularityAreas.culturalInsight;

  // Show modal & prevent background body scroll
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeBikeModal = function() {
  const backdrop = document.getElementById('bike-modal-backdrop');
  if (backdrop) backdrop.classList.remove('open');
  document.body.style.overflow = '';
};
