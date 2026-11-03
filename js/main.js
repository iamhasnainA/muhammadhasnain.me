/**
 * MUHAMMAD HASNAIN — PERSONAL PORTFOLIO
 * Vanilla JavaScript (ES6+) Interactions
 * Zero Frameworks • Lightweight • High-Performance
 */

document.addEventListener('DOMContentLoaded', () => {
  initGsapEntrance();
  initMobileMenu();
  initNavDropdown();
  initHeroCharacter2D();
  initToolsInspector();
  initServicesSelector();
  initPortfolio();
  initTestimonialsMarquee();
  initFaqsAccordion();
  initCustomServiceDropdown();
  initContactForm();
  initBackToTop();
  initWhatsappAiWidget();
  initScrollReveal();
});

/* =========================================================================
   0. ENTRANCE REVEAL (GSAP / CSS FALLBACK)
   ========================================================================= */
function initGsapEntrance() {
  if (typeof gsap === 'undefined') return;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const bgPortrait = document.getElementById('heroBgPortrait');
  if (bgPortrait) {
    gsap.from(bgPortrait, {
      opacity: 0,
      scale: 0.96,
      duration: 1.2,
      ease: 'power2.out'
    });
  }
}

/* =========================================================================
   1. MOBILE NAVIGATION MENU
   ========================================================================= */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const closeBtn = document.getElementById('mobileMenuClose');
  const drawer = document.getElementById('mobileMenuDrawer');
  const backdrop = document.getElementById('mobileMenuBackdrop');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  function openMenu() {
    drawer.classList.remove('translate-x-full');
    drawer.classList.add('translate-x-0');
    if (backdrop) {
      backdrop.classList.remove('opacity-0', 'pointer-events-none');
      backdrop.classList.add('opacity-100', 'pointer-events-auto');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('translate-x-0');
    drawer.classList.add('translate-x-full');
    if (backdrop) {
      backdrop.classList.remove('opacity-100', 'pointer-events-auto');
      backdrop.classList.add('opacity-0', 'pointer-events-none');
    }
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

/* =========================================================================
   2b. DESKTOP NAVIGATION "MORE" DROPDOWN
   ========================================================================= */
function initNavDropdown() {
  const dropdownContainer = document.getElementById('navMoreDropdownContainer');
  const dropdownBtn = document.getElementById('navMoreBtn');
  const dropdownMenu = document.getElementById('navMoreDropdown');
  const dropdownLinks = document.querySelectorAll('.nav-dropdown-link');

  if (!dropdownContainer || !dropdownBtn || !dropdownMenu) return;

  function toggleDropdown(e) {
    e.stopPropagation();
    const isOpen = dropdownMenu.classList.contains('opacity-100');
    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  }

  function openDropdown() {
    dropdownMenu.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
    dropdownMenu.classList.add('opacity-100', 'pointer-events-auto', 'scale-100');
    dropdownBtn.setAttribute('aria-expanded', 'true');
    const chevron = dropdownBtn.querySelector('svg');
    if (chevron) chevron.classList.add('rotate-180');
  }

  function closeDropdown() {
    dropdownMenu.classList.remove('opacity-100', 'pointer-events-auto', 'scale-100');
    dropdownMenu.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
    dropdownBtn.setAttribute('aria-expanded', 'false');
    const chevron = dropdownBtn.querySelector('svg');
    if (chevron) chevron.classList.remove('rotate-180');
  }

  dropdownBtn.addEventListener('click', toggleDropdown);

  dropdownLinks.forEach(link => {
    link.addEventListener('click', closeDropdown);
  });

  document.addEventListener('click', (e) => {
    if (!dropdownContainer.contains(e.target)) {
      closeDropdown();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDropdown();
  });
}

/* =========================================================================
   3. HERO CHARACTER 2D SUBTLE CURSOR INTERACTION
   ========================================================================= */
function initHeroCharacter2D() {
  const heroSection = document.getElementById('hero');
  const portrait = document.getElementById('heroBgPortrait');

  if (!heroSection || !portrait) return;

  // Touch device check
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouch) return;

  // Respect reduced motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Normalized displacement from -1 to 1
    const normX = (e.clientX - centerX) / (rect.width / 2);
    const normY = (e.clientY - centerY) / (rect.height / 2);

    // Subtle gentle displacement with low transition/movement (max 8px)
    const moveX = Math.max(-8, Math.min(8, normX * 8));
    const moveY = Math.max(-6, Math.min(6, normY * 6));

    portrait.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.01)`;
  });

  heroSection.addEventListener('mouseleave', () => {
    portrait.style.transform = 'translate(0px, 0px) scale(1)';
  });
}

/* =========================================================================
   4. TOOLS I USE INTERACTIVE INSPECTOR
   ========================================================================= */
const TOOLS_DATA = [
  {
    name: 'GoHighLevel',
    category: 'CRM & Pipeline Automation',
    desc: 'Primary enterprise operating system for client acquisition, multi-location snapshot deployment, automated sales pipelines, and unified multi-channel messaging.',
    tags: ['Snapshots', 'Pipelines', 'SaaS Mode', 'Calendars', 'Custom Fields']
  },
  {
    name: 'Instantly.ai',
    category: 'Cold Outbound Engine',
    desc: 'Multi-domain cold email inbox rotation, automated warmup algorithms, and centralized Unibox lead triage maintaining 99%+ primary deliverability.',
    tags: ['Inbox Rotation', 'Warmup Engine', 'Unibox Triage', 'Deliverability Analytics']
  },
  {
    name: 'WordPress Core',
    category: 'CMS & Custom Architecture',
    desc: 'Custom headless and hybrid WordPress architectures, security hardening, high-converting landing pages, and direct API-connected lead funnels.',
    tags: ['Custom Themes', 'REST API', 'Security Hardening', 'Speed SEO']
  },
  {
    name: 'Smartlead',
    category: 'Enterprise Email Infrastructure',
    desc: 'High-volume mailbox distribution, automated ESP matching, and intelligent sender health monitoring across large-scale corporate outbound operations.',
    tags: ['ESP Matching', 'Unibox', 'API Webhooks', 'Warmup Automation']
  },
  {
    name: 'Tailwind CSS',
    category: 'Custom Front-End Engineering',
    desc: 'Modern utility-first CSS framework for ultra-fast, responsive, zero-runtime overhead user interfaces and clean design systems.',
    tags: ['Utility-First', 'Responsive Design', 'JIT Engine', 'Core Web Vitals']
  },
  {
    name: 'Twilio Telephony',
    category: 'Telecommunications Backend',
    desc: 'SMS, MMS, virtual call routing, whisper monitoring, and verified A2P 10DLC carrier compliance messaging backend for US/UK/CA.',
    tags: ['A2P 10DLC', 'Virtual Numbers', 'Call Tracking', 'SMS / MMS API']
  },
  {
    name: 'Apollo.io',
    category: 'B2B Prospect Intelligence',
    desc: 'Precision B2B decision-maker data extraction with verified direct dial phone, executive title, company revenue, and verified email attributes.',
    tags: ['B2B Data', 'Advanced Filters', 'Data Enrichment', 'Direct Dials']
  },
  {
    name: 'Elementor Pro',
    category: 'WordPress Visual Engineering',
    desc: 'Pixel-perfect visual design, dynamic loop templates, custom popups, and high-converting conversion landing page funnels.',
    tags: ['Dynamic Content', 'Custom Templates', 'Global Design', 'Visual Styling']
  },
  {
    name: 'Cloudflare DNS',
    category: 'DNS & Edge Security',
    desc: 'Ultra-low latency DNS routing, DDoS protection, edge SSL certificates, and strict DNS record propagation for enterprise cold outbound domains.',
    tags: ['Edge DNS', 'SPF / DKIM / DMARC', 'Proxy Caching', 'SSL / TLS']
  },
  {
    name: 'Stripe',
    category: 'Payment Infrastructure',
    desc: 'Automated recurring billing, one-click upsells, checkout webhooks, and seamless customer portal integration with GoHighLevel SaaS.',
    tags: ['Subscription Billing', 'Webhooks', 'Checkout Funnels', 'Customer Portal']
  },
  {
    name: 'MillionVerifier',
    category: 'Email Hygiene & Verification',
    desc: 'Deep SMTP handshake validation ensuring sub-1.5% bounce rates and total protection against spam trap blacklists.',
    tags: ['Hard Bounce Scrub', 'Spam Trap Filter', 'SMTP Handshake', 'Bulk Verification']
  },
  {
    name: 'HTML5 & Vanilla JS',
    category: 'Native Web Performance',
    desc: 'Clean semantic front-end code, modern ES6+ JavaScript, lightweight DOM manipulation, and 100/100 Core Web Vitals performance.',
    tags: ['Semantic HTML5', 'ES6+ JavaScript', 'DOM Manipulation', 'Zero Bloat']
  },
  {
    name: 'TCR A2P 10DLC',
    category: 'Carrier Compliance & Verification',
    desc: 'The Campaign Registry (TCR) brand registration, EIN validation, and campaign vetting ensuring high throughput and zero SMS carrier blocking.',
    tags: ['Brand Vetting', 'Campaign Approval', 'Carrier Compliance', 'High Throughput']
  },
  {
    name: 'Google Workspace',
    category: 'Outbound Secondary Inboxes',
    desc: 'Provisioning isolated secondary business domains with custom MX, SPF, DKIM, and DMARC security records for outbound scaling.',
    tags: ['Secondary Inboxes', 'Admin Console', 'DKIM 2048-bit', 'MX Routing']
  },
  {
    name: 'VAPI Voice AI',
    category: 'Autonomous Voice Agents',
    desc: 'Ultra-low latency conversational voice agents for inbound lead qualification, appointment booking, and automated CRM triage.',
    tags: ['Voice AI', 'Sub-500ms Latency', 'Live Booking', 'CRM Integration']
  },
  {
    name: 'WooCommerce',
    category: 'E-Commerce Infrastructure',
    desc: 'High-converting online store architectures, customized checkout flows, payment gateway integrations, and automated order fulfillment sync.',
    tags: ['Custom Checkout', 'Payment Gateways', 'Order Webhooks', 'Inventory Sync']
  },
  {
    name: 'Clay.com',
    category: 'Data Waterfall Enrichment',
    desc: 'Multi-source waterfall enrichment combining 50+ data providers for hyper-targeted cold outbound personalization and scoring.',
    tags: ['Waterfall Logic', 'Data Enrichment', 'AI Personalization', 'CRM Sync']
  },
  {
    name: 'Bricks Builder',
    category: 'High-Performance WordPress',
    desc: 'Lightweight, clean-markup visual site builder producing clean code, instant load times, and superior Core Web Vitals.',
    tags: ['Clean Code', 'Zero Bloat', 'Dynamic Data', 'Instant Load']
  },
  {
    name: 'LeadConnector API',
    category: 'GHL Developer Ecosystem',
    desc: 'Custom API v2 integrations, webhooks, and private marketplace apps extending GoHighLevel functionality for custom workflows.',
    tags: ['API v2', 'Custom Endpoints', 'Private Apps', 'Webhook Listeners']
  },
  {
    name: 'Make.com',
    category: 'Visual Integration Middleware',
    desc: 'Multi-step visual integration scenarios connecting legacy CRMs, custom databases, and external SaaS platforms with complex routing.',
    tags: ['Visual Scenarios', 'Data Routers', 'Error Handlers', 'Multi-Step Sync']
  },
  {
    name: 'Retell AI',
    category: 'Conversational Phone AI',
    desc: 'Human-like conversational phone bots trained on custom knowledge bases for 24/7 lead capture, qualifying, and live transfer.',
    tags: ['Phone Bots', 'Natural Voice', 'Knowledge Base', 'Live Transfers']
  },
  {
    name: 'ZeroBounce',
    category: 'Advanced Deliverability Defense',
    desc: 'Military-grade email validation, abuse email detection, catch-all server scoring, and comprehensive IP reputation tracking.',
    tags: ['Abuse Detection', 'Catch-All Scoring', 'Blacklist Monitor', 'API Verification']
  },
  {
    name: 'WP Rocket',
    category: 'WordPress Cache Engine',
    desc: 'Enterprise caching, CSS/JS minification, critical CSS generation, and lazy loading achieving sub-second page loads on WordPress.',
    tags: ['Page Caching', 'Critical CSS', 'Lazy Loading', 'Speed Optimization']
  },
  {
    name: 'GHL Funnels & Forms',
    category: 'Conversion Funnel Engine',
    desc: 'High-converting landing pages, multi-step qualification surveys, popups, and automated thank-you workflows built within GoHighLevel.',
    tags: ['Multi-Step Surveys', 'One-Click Upsells', 'Lead Capture', 'Instant Triggers']
  },
  {
    name: 'Zapier',
    category: 'Cloud Middleware Automation',
    desc: 'Instant event-triggered automations connecting thousands of applications to GoHighLevel pipelines and reporting dashboards.',
    tags: ['Multi-Step Zaps', 'Webhooks by Zapier', 'Formatter Logic', 'SaaS Sync']
  },
  {
    name: 'ACF Pro',
    category: 'Custom WordPress Schema',
    desc: 'Structured custom post types, flexible content fields, and dynamic schema architecture powering bespoke WordPress solutions.',
    tags: ['Custom Fields', 'Flexible Content', 'CPT Architecture', 'Dynamic Loops']
  },
  {
    name: 'Git & GitHub',
    category: 'Version Control & Deployments',
    desc: 'Enterprise source control, automated deployment pipelines, staging environments, and clean commit histories for all client web assets.',
    tags: ['Version Control', 'CI / CD Workflows', 'Staging Deployments', 'Clean Branching']
  },
  {
    name: 'n8n Workflows',
    category: 'Self-Hosted Automation',
    desc: 'Self-hosted workflow orchestrator connecting custom internal databases, webhook triggers, and complex JSON data transformations.',
    tags: ['Self-Hosted', 'JSON ETL', 'Webhook Triggers', 'Custom Functions']
  }
];

function initToolsInspector() {
  const toolButtons = document.querySelectorAll('.tool-btn');
  const indexEl = document.getElementById('inspectorToolIndex');
  const nameEl = document.getElementById('inspectorToolName');
  const catEl = document.getElementById('inspectorToolCategory');
  const descEl = document.getElementById('inspectorToolDesc');
  const tagsEl = document.getElementById('inspectorToolTags');
  const filterButtons = document.querySelectorAll('.tool-filter-btn');

  if (!toolButtons.length || !nameEl) return;

  let currentToolIndex = 0;

  function setTool(index) {
    currentToolIndex = index;
    const tool = TOOLS_DATA[index];
    if (!tool) return;

    toolButtons.forEach((btn, i) => {
      if (i === index) {
        btn.classList.add('border-black', 'bg-neutral-50');
        btn.classList.remove('border-neutral-200');
      } else {
        btn.classList.remove('border-black', 'bg-neutral-50');
        btn.classList.add('border-neutral-200');
      }
    });

    if (indexEl) {
      indexEl.textContent = `TOOL ${String(index + 1).padStart(2, '0')} / ${TOOLS_DATA.length}`;
    }
    nameEl.textContent = tool.name;
    catEl.textContent = tool.category;
    descEl.textContent = tool.desc;

    tagsEl.innerHTML = tool.tags.map(t =>
      `<span class="px-2.5 py-1 text-xs font-mono bg-white border border-neutral-300 rounded text-neutral-800">${t}</span>`
    ).join('');
  }

  toolButtons.forEach((btn, idx) => {
    btn.addEventListener('click', () => setTool(idx));
    btn.addEventListener('mouseenter', () => setTool(idx));
  });

  // Filter functionality
  if (filterButtons.length) {
    filterButtons.forEach(fBtn => {
      fBtn.addEventListener('click', () => {
        const filter = fBtn.getAttribute('data-filter');

        // Update active filter button styling
        filterButtons.forEach(b => {
          b.classList.remove('bg-black', 'text-white');
          b.classList.add('bg-white', 'text-black', 'border', 'border-neutral-300');
        });
        fBtn.classList.add('bg-black', 'text-white');
        fBtn.classList.remove('bg-white', 'border-neutral-300');

        // Show/hide tool buttons
        let firstVisibleIdx = -1;
        let isCurrentVisible = false;

        toolButtons.forEach((btn, idx) => {
          const cat = btn.getAttribute('data-category');
          const isMatch = (filter === 'all') || (cat === filter);
          if (isMatch) {
            btn.classList.remove('hidden');
            if (firstVisibleIdx === -1) firstVisibleIdx = idx;
            if (idx === currentToolIndex) isCurrentVisible = true;
          } else {
            btn.classList.add('hidden');
          }
        });

        // If current tool is hidden by the active filter, auto-inspect the first visible tool
        if (!isCurrentVisible && firstVisibleIdx !== -1) {
          setTool(firstVisibleIdx);
        }
      });
    });
  }

  // Default initial selection
  setTool(0);
}

/* =========================================================================
   5. SERVICES SPECIFICATION SELECTOR
   ========================================================================= */
const SERVICES_DATA = [
  {
    number: '01',
    title: 'GoHighLevel Setup & Pipeline Architecture',
    tagline: 'Turn chaotic client pipelines into an organized, automated revenue engine.',
    problem: 'Most businesses using GoHighLevel have disorganized contacts, broken triggers, messy pipelines, and unconfigured carrier messaging, causing high-value leads to slip through the cracks.',
    deliverables: [
      'Complete sub-account provisioning with custom multi-stage deal pipelines and opportunity stages',
      'Automated calendar booking workflows with round-robin lead distribution across sales reps',
      'A2P 10DLC brand registration, TCR verification, and dedicated messaging backend setup',
      'Sub-45-second instant speed-to-lead automated SMS, email, and missed-call text-back triggers',
      'Dynamic smart list segmentation, custom contact fields, and automated lead scoring rules',
      'End-to-end team walkthrough, custom SOP documentation, and recorded training video'
    ],
    workflowFit: 'Acts as your primary CRM command center, connecting website forms, ad channels, and sales reps in one unified view.',
    prerequisites: 'Active GoHighLevel account access, corporate entity details for A2P 10DLC, and sales calendar availability.',
    tools: ['GoHighLevel', 'Twilio', 'Stripe', 'Google Calendar', 'LeadConnector']
  },
  {
    number: '02',
    title: 'Cold Email & Multi-Domain Deliverability Infrastructure',
    tagline: 'Enterprise outbound engine engineered for 99%+ primary inbox placement.',
    problem: 'Sending cold outreach from your primary business domain ruins your company email reputation, lands you in spam traps, and blacklists your daily corporate communication.',
    deliverables: [
      '10 to 30+ isolated secondary domains provisioned on Google Workspace & Microsoft 365',
      'Complete DNS security hardening: SPF, DKIM (2048-bit), DMARC (p=reject ready), and custom tracking domains',
      '21-day automated ramp-up and peer-to-peer warmup schedules across all mailboxes',
      'SMTP handshake verification & spam-trap scrubbing via MillionVerifier (<1% hard bounce rate)',
      'Spam-word algorithmic audit and high-converting copy optimization for maximum reply rates',
      'Centralized Unibox management configured for real-time positive reply triage and CRM handoff'
    ],
    workflowFit: 'Runs silently in parallel with your sales team, filling your GoHighLevel calendar with pre-warmed, pre-qualified appointments without touching your main domain.',
    prerequisites: 'Domain registrar access (Cloudflare/Namecheap/GoDaddy) and target ICP criteria.',
    tools: ['Instantly.ai', 'Smartlead', 'MillionVerifier', 'Cloudflare DNS', 'Google Workspace']
  },
  {
    number: '03',
    title: 'WordPress & Elementor Pro Portal Engineering',
    tagline: 'High-converting, bespoke WordPress portals engineered to capture and convert traffic.',
    problem: 'Off-the-shelf WordPress themes are bloated, slow-loading, and disconnected from your CRM, leading to high bounce rates and lost leads.',
    deliverables: [
      'Bespoke WordPress architecture built with Elementor Pro, Bricks Builder, or lightweight custom themes',
      'Direct webhook and REST API integrations funneling lead form submissions instantly into GoHighLevel',
      'WooCommerce store setup with custom checkout flows, payment gateways, and member portals',
      'Speed optimization achieving 90+ mobile PageSpeed scores and sub-second load times',
      'Technical on-page SEO, schema markup, OpenGraph social tags, and Google Tag Manager tracking',
      'Automated daily offsite backups, SSL certificates, firewall rules, and malware protection'
    ],
    workflowFit: 'Acts as your central digital flagship, converting organic search, referrals, and paid visitors into automated GoHighLevel nurture funnels.',
    prerequisites: 'Hosting credentials (or cPanel/Cloudways), branding assets, and page outline/copy draft.',
    tools: ['WordPress Core', 'Elementor Pro', 'ACF Pro', 'WP Rocket', 'WooCommerce']
  },
  {
    number: '04',
    title: 'Custom Front-End Web Development & Funnels',
    tagline: 'Ultra-fast, mobile-first responsive web pages built for maximum conversion velocity.',
    problem: 'Cluttered or slow funnels fail on mobile devices, frustrate buyers, and waste valuable ad spend without capturing leads.',
    deliverables: [
      'Hand-coded semantic HTML5, modern Tailwind CSS, and lightweight Vanilla JavaScript architecture',
      'Mobile-first responsive layouts with sub-second Core Web Vitals performance (100/100 score)',
      'High-converting lead capture funnels, multi-step qualification surveys, and embedded booking widgets',
      'Meta CAPI server-side event tracking and Google Ads conversion tag integration',
      'Exit-intent modal triggers, sticky CTAs, and automated lead magnet delivery webhooks',
      'Cross-browser and cross-device testing across all iOS, Android, and desktop viewports'
    ],
    workflowFit: 'Serves as the high-velocity landing environment for cold email outreach and paid traffic, feeding qualified contacts into GoHighLevel instantly.',
    prerequisites: 'Funnel wireframe or goals, copywriting draft, and tracking IDs.',
    tools: ['HTML5', 'Tailwind CSS', 'Vanilla JS', 'GHL Funnels', 'Meta CAPI']
  },
  {
    number: '05',
    title: 'Lead Velocity & Multi-Channel Inbound Nurture',
    tagline: 'Sub-45-second inbound triage that turns interested prospects into booked calls.',
    problem: 'Inbound leads who wait longer than 5 minutes for a response are 80% less likely to convert, leaving high-intent prospects to buy from faster competitors.',
    deliverables: [
      'Sub-45-second automated SMS, email, and internal team notification trigger sequences',
      'Whisper call forwarding and automated round-robin live transfers to active sales reps',
      'Dynamic appointment reminder sequences with 1-click calendar rescheduling and SMS confirmations',
      'Stale-lead revival campaigns reactivating unresponsive contacts after 30, 60, and 90 days',
      'Real-time UTM parameter tracking mapping closed revenue back to specific campaigns',
      'Standard Operating Procedure (SOP) guide for internal team management of the unified conversation inbox'
    ],
    workflowFit: 'Plugs directly into your GoHighLevel sub-account, working 24/7 to guarantee every lead receives rapid, personalized follow-up.',
    prerequisites: 'GoHighLevel account access and sales phone routing preference.',
    tools: ['GoHighLevel', 'Twilio Telephony', 'Stripe', 'Google Calendar']
  },
  {
    number: '06',
    title: 'A2P 10DLC Carrier Compliance & Messaging Gateway',
    tagline: 'Ensure your business SMS messages reach client phones with zero carrier filtering.',
    problem: 'US cellular carriers actively filter and fine unregistered business SMS traffic, causing message drop-offs, suspended accounts, and severe deliverability penalties.',
    deliverables: [
      'Standard or Sole Proprietor brand verification submission with The Campaign Registry (TCR)',
      'Carrier-compliant campaign submission with exact opt-in disclosures, privacy links, and HELP/STOP copy',
      'Website privacy policy and terms update satisfying strict Tier-1 carrier review guidelines',
      'Twilio messaging service configuration and dedicated phone number assignment',
      'Real-time throughput monitoring and message status callback webhook error handlers',
      'Expedited resolution of any carrier compliance flags, vetting errors, or rejection notices'
    ],
    workflowFit: 'Essential compliance foundation for all GoHighLevel SMS automations, appointment reminders, and missed-call text-backs targeting US customers.',
    prerequisites: 'Legal business entity details (EIN/Tax ID), corporate address, and working website.',
    tools: ['Twilio', 'The Campaign Registry (TCR)', 'GoHighLevel', 'Carrier Gateways']
  },
  {
    number: '07',
    title: 'AI Voice Agents & 24/7 Conversational Phone Bots',
    tagline: 'Autonomous inbound & outbound call agents with natural human inflection.',
    problem: 'Hiring an in-house 24/7 human receptionist team is prohibitively expensive, leaving evening and weekend inquiries completely unanswered.',
    deliverables: [
      'Sub-500ms latency conversational voice agent with natural speech inflection and custom persona',
      'Custom business knowledge base trained on service pricing, FAQs, and objection handling',
      'Live calendar booking function calling during active voice phone conversations',
      'Automatic audio call recording, transcript summarization, and lead score tagging in CRM',
      'Instant post-call SMS confirmation and summary webhook sent directly to sales reps',
      'Conditional fallback routing to human agents during live business operating hours'
    ],
    workflowFit: 'Acts as your frontline qualification agent, fielding calls and web chat around the clock to capture every lead.',
    prerequisites: 'Standard qualification script, business FAQ sheet, and Twilio phone number.',
    tools: ['VAPI Voice AI', 'Retell AI', 'OpenAI', 'Twilio', 'GoHighLevel']
  },
  {
    number: '08',
    title: 'Cold Outreach Scaling & Clay Data Enrichment',
    tagline: 'Hyper-personalized B2B outbound sending 50k+ emails monthly at scale.',
    problem: 'Generic blast cold emails generate low reply rates, burn through domain reputations, and fail to engage high-value enterprise decision makers.',
    deliverables: [
      'Clay waterfall data enrichment integrating 50+ data providers for validated contact information',
      'Dynamic AI-assisted icebreakers personalized with recent company news, hiring trends, and tech stack',
      'Multi-inbox rotation scaling across 30 to 100+ warm secondary mailboxes simultaneously',
      'Automated sender inbox health monitoring with automatic pause on any reputation drop',
      'A/B testing matrix for subject lines, offer structures, and call-to-action variants',
      'Automated lead synchronization pushing warm positive replies into GoHighLevel opportunities'
    ],
    workflowFit: 'Scales outbound pipeline generation to hundreds of meetings per quarter without human prospecting overhead.',
    prerequisites: 'Ideal Customer Profile (ICP) definition and budget for secondary domains.',
    tools: ['Clay.com', 'Instantly.ai', 'Smartlead', 'Apollo.io', 'GoHighLevel']
  },
  {
    number: '09',
    title: 'WordPress Speed Optimization & Core Web Vitals',
    tagline: 'Achieve 90+ mobile PageSpeed scores and sub-second page rendering.',
    problem: 'Slow WordPress sites lose up to 53% of mobile visitors before the page even loads, severely damaging Google SEO rankings and paid ad conversions.',
    deliverables: [
      'Comprehensive performance audit identifying render-blocking scripts, unoptimized queries, and bloated plugins',
      'WP Rocket enterprise configuration with advanced page caching, Gzip/Brotli compression, and preloading',
      'Critical CSS generation and deferred loading of non-essential JavaScript assets',
      'Next-gen image conversion (WebP/AVIF) with adaptive responsive sizing and lazy loading',
      'Cloudflare edge caching, CDN routing, and HTTP/3 protocol activation',
      'WordPress database cleanup, autoloaded options optimization, and post revision purging'
    ],
    workflowFit: 'Instantly elevates site credibility, lowers bounce rates, and boosts Google ranking positions for all WordPress assets.',
    prerequisites: 'WordPress admin credentials and hosting server access.',
    tools: ['WP Rocket', 'Cloudflare CDN', 'Google PageSpeed', 'WordPress Core']
  },
  {
    number: '10',
    title: 'GoHighLevel Snapshot Architecture & SaaS Mode Setup',
    tagline: 'Turnkey multi-location snapshot deployment and automated client onboarding.',
    problem: 'Agencies and multi-location businesses struggle with manual client onboarding, leading to inconsistent setups, configuration bugs, and high churn.',
    deliverables: [
      'Modular master snapshot architecture with linked custom values, custom fields, and email/SMS templates',
      'Automated sub-account provisioning triggered immediately upon client Stripe checkout',
      'Pre-built industry pipelines, appointment workflows, and review generation automations',
      'Custom white-label desktop and mobile branding with bespoke CSS styling and custom domain login',
      'SaaS Pro configurator setup with automated tier pricing, feature gating, and Stripe billing plans',
      'Comprehensive snapshot deployment documentation and automated client onboarding guide'
    ],
    workflowFit: 'Allows agencies and SaaS founders to onboard unlimited clients instantly with zero manual CRM buildout.',
    prerequisites: 'GoHighLevel Agency Pro plan (or SaaS mode) and Stripe merchant account.',
    tools: ['GoHighLevel SaaS', 'Stripe', 'LeadConnector API', 'Zapier']
  },
  {
    number: '11',
    title: 'Landing Page Optimization & Meta CAPI Server Tracking',
    tagline: 'Eliminate ad tracking loss and maximize return on ad spend (ROAS).',
    problem: 'iOS privacy updates and ad blockers destroy standard browser pixel tracking, blinding ad algorithms and making customer acquisition 40%+ more expensive.',
    deliverables: [
      'Meta Conversions API (CAPI) server-side event tracking capturing purchases, leads, and calendar bookings',
      'Google Tag Manager (GTM) server-side container setup with custom domain endpoint',
      'Accurate event deduplication between browser pixel and server events for 100% data integrity',
      'High-converting direct response landing page redesign focused on clarity and speed',
      'Enhanced conversion data matching passing hashed emails and phone numbers to ad platforms',
      'Real-time testing and verification report inside Meta Events Manager and Google Analytics 4'
    ],
    workflowFit: 'Restores full visibility to your advertising campaigns, feeding ad algorithms clean data to lower your cost-per-acquisition.',
    prerequisites: 'Meta Business Manager access, Google Tag Manager account, and landing page hosting.',
    tools: ['Meta CAPI', 'Google Tag Manager', 'Cloudflare', 'GoHighLevel Funnels', 'GA4']
  },
  {
    number: '12',
    title: 'WooCommerce Store Engineering & Gateway Sync',
    tagline: 'Robust e-commerce infrastructure with frictionless checkout and automated CRM sync.',
    problem: 'Clunky checkout experiences cause high cart abandonment, while disconnected orders force teams into manual fulfillment and invoice handling.',
    deliverables: [
      'Streamlined 1-page checkout flow with Apple Pay, Google Pay, and Stripe credit card processing',
      'Automated abandoned cart recovery workflows triggered in GoHighLevel within 15 minutes',
      'Dynamic customer segmentation based on lifetime value (LTV), purchase frequency, and product categories',
      'Automated invoice generation, tax calculation, and order tracking emails',
      'Direct webhook sync sending new buyers into GoHighLevel VIP customer nurture sequences',
      'Inventory tracking, automated low-stock notifications, and fraud detection rules'
    ],
    workflowFit: 'Connects your WordPress e-commerce store directly to GoHighLevel for automated post-purchase marketing and repeat sales.',
    prerequisites: 'WordPress site access, Stripe/PayPal merchant accounts, and product catalog.',
    tools: ['WooCommerce', 'WordPress', 'Stripe', 'GoHighLevel', 'Make.com']
  },
  {
    number: '13',
    title: 'Stripe SaaS Billing & Customer Portal Integration',
    tagline: 'Automated recurring revenue billing, one-click upsells, and failed payment recovery.',
    problem: 'Failed credit card payments, manual invoicing, and messy subscription changes drain agency revenue and waste dozens of hours every month.',
    deliverables: [
      'Stripe customer billing portal integration allowing clients to update payment methods and view invoices',
      'Automated dunning and smart payment retry workflows recovering 60%+ of failed recurring charges',
      'One-click order bumps and post-purchase upsell funnels integrated into GoHighLevel',
      'Subscription cancellation prevention workflows offering automated pauses or discount down-sells',
      'Automated webhook listeners syncing paid invoices, refunds, and cancellations directly to CRM contact records',
      'Financial reporting dashboard tracking MRR, churn rate, and lifetime value in real time'
    ],
    workflowFit: 'Automates all financial operations between Stripe and GoHighLevel so you never have to chase a late payment again.',
    prerequisites: 'Verified Stripe account and GoHighLevel sub-account.',
    tools: ['Stripe Billing', 'GoHighLevel', 'Webhooks', 'Customer Portal']
  },
  {
    number: '14',
    title: 'Webhook Integrations & Event-Driven Middleware',
    tagline: 'Seamless bidirectional data synchronization across your entire tech stack.',
    problem: 'Disjointed software tools create isolated data silos, forcing tedious copy-pasting, causing duplicate contacts, and creating costly operational errors.',
    deliverables: [
      'Custom webhook endpoints capturing lead submissions, calendar bookings, and transactions in real time',
      'Multi-branch data transformation and JSON payload formatting via Make and n8n',
      'Bidirectional synchronization between WordPress portals, external CRMs, and GoHighLevel pipelines',
      'Automated retry mechanisms and instant error notification alerts delivered to Slack or Telegram',
      'Strict deduplication rules preventing multiple records for the same contact',
      'Complete visual architecture diagram and exportable JSON blueprint schemas'
    ],
    workflowFit: 'Operates silently in the background, ensuring all your web platforms, marketing databases, and CRM records remain 100% synchronized.',
    prerequisites: 'API access or webhook support for the platforms being connected.',
    tools: ['Make.com', 'Zapier', 'n8n Workflows', 'REST APIs', 'GoHighLevel API']
  }
];

function initServicesSelector() {
  const serviceButtons = document.querySelectorAll('.service-nav-btn');
  const numEl = document.getElementById('serviceSpecNum');
  const titleEl = document.getElementById('serviceSpecTitle');
  const tagEl = document.getElementById('serviceSpecTagline');
  const probEl = document.getElementById('serviceSpecProblem');
  const delivEl = document.getElementById('serviceSpecDeliverables');
  const fitEl = document.getElementById('serviceSpecWorkflowFit');
  const preEl = document.getElementById('serviceSpecPrerequisites');
  const toolsEl = document.getElementById('serviceSpecTools');

  if (!serviceButtons.length || !titleEl) return;

  function renderService(idx) {
    const srv = SERVICES_DATA[idx];
    if (!srv) return;

    serviceButtons.forEach((btn, i) => {
      if (i === idx) {
        btn.classList.add('border-black', 'bg-neutral-50');
        btn.classList.remove('border-neutral-200');
      } else {
        btn.classList.remove('border-black', 'bg-neutral-50');
        btn.classList.add('border-neutral-200');
      }
    });

    numEl.textContent = `SERVICE ${srv.number}`;
    titleEl.textContent = srv.title;
    tagEl.textContent = `"${srv.tagline}"`;
    probEl.textContent = srv.problem;
    fitEl.textContent = srv.workflowFit;
    preEl.textContent = srv.prerequisites;

    delivEl.innerHTML = srv.deliverables.map(d =>
      `<li class="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800">
        <span class="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0"></span>
        <span>${d}</span>
      </li>`
    ).join('');

    toolsEl.innerHTML = srv.tools.map(t =>
      `<span class="px-2.5 py-1 text-xs font-mono bg-white border border-neutral-300 rounded text-neutral-800">${t}</span>`
    ).join('');
  }

  serviceButtons.forEach((btn, idx) => {
    btn.addEventListener('click', () => renderService(idx));
  });

  // Default initial selection
  renderService(0);
}

/* =========================================================================
   6. PORTFOLIO GALLERY, REAL-TIME SEARCH, FILTERS & LIGHTBOX MODAL
   ========================================================================= */
function initPortfolio() {
  const projects = window.PROJECTS_DATA || [];
  const grid = document.getElementById('portfolioGrid');
  const countEl = document.getElementById('projectCount');
  const searchInput = document.getElementById('projectSearchInput');
  const filterBtns = document.querySelectorAll('.portfolio-filter-btn');

  // Modal elements
  const modal = document.getElementById('caseStudyModal');
  const closeBtn = document.getElementById('closeModalBtn');
  const prevBtn = document.getElementById('modalPrevBtn');
  const nextBtn = document.getElementById('modalNextBtn');
  const counterEl = document.getElementById('modalProjectCounter');
  const imageLink = document.getElementById('modalImageLink');

  if (!grid) return;

  let activeCategory = 'all';
  let activeSearch = '';
  let filteredProjects = [...projects];
  let currentModalIndex = 0;

  function filterProjects() {
    filteredProjects = projects.filter(p => {
      const matchCat = activeCategory === 'all' || p.category === activeCategory;
      const searchTerms = activeSearch.toLowerCase().trim();
      const matchSearch = !searchTerms || 
        p.title.toLowerCase().includes(searchTerms) ||
        p.categoryLabel.toLowerCase().includes(searchTerms) ||
        p.client.toLowerCase().includes(searchTerms) ||
        (p.tools && p.tools.some(t => t.toLowerCase().includes(searchTerms))) ||
        p.overview.toLowerCase().includes(searchTerms);

      return matchCat && matchSearch;
    });

    if (countEl) countEl.textContent = filteredProjects.length;
    renderGrid();
  }

  function renderGrid() {
    if (filteredProjects.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full py-16 text-center text-neutral-600 font-mono text-sm border border-neutral-200 rounded-lg bg-neutral-50">
          No projects found matching "${activeSearch}". Try another keyword or clear the filter.
        </div>
      `;
      return;
    }

    grid.innerHTML = filteredProjects.map((p) => `
      <article class="project-card flex flex-col bg-white border border-neutral-200 rounded-lg overflow-hidden hover:border-black transition-all group shadow-sm hover:shadow-md" data-category="${p.category}">
        <div class="relative aspect-video bg-neutral-100 overflow-hidden border-b border-neutral-200 cursor-pointer" onclick="openModalById('${p.id}')">
          <img 
            src="${p.image}" 
            alt="${p.title}" 
            class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" 
            loading="lazy"
            decoding="async"
          >
          <div class="absolute top-3 left-3">
            <span class="badge-black text-[10px]">${p.categoryLabel}</span>
          </div>
        </div>
        <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
          <div>
            <div class="text-[11px] font-mono text-neutral-700 font-semibold uppercase tracking-wider">${p.client}</div>
            <h3 class="text-base font-bold text-black mt-1 leading-snug line-clamp-2">${p.title}</h3>
            <p class="text-xs text-neutral-800 mt-2 line-clamp-2 leading-relaxed">
              ${p.overview}
            </p>
          </div>
          <div class="pt-4 border-t border-neutral-100 flex items-center justify-between">
            <div class="font-mono text-xs font-bold text-black">
              ${p.metrics && p.metrics[0] ? `${p.metrics[0].label}: ${p.metrics[0].value}` : 'Verified Blueprint'}
            </div>
            <button type="button" class="case-study-trigger text-xs font-mono font-bold text-black hover:underline flex items-center gap-1 focus:outline-none" onclick="openModalById('${p.id}')">
              Inspect Screenshot
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </div>
        </div>
      </article>
    `).join('');
  }

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.getAttribute('data-category');

      filterBtns.forEach(b => {
        b.classList.remove('bg-black', 'text-white');
        b.classList.add('bg-white', 'text-black');
      });
      btn.classList.remove('bg-white', 'text-black');
      btn.classList.add('bg-black', 'text-white');

      filterProjects();
    });
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeSearch = e.target.value;
      filterProjects();
    });
  }

  // Modal Handlers
  window.openModalById = function(projectId) {
    const idx = filteredProjects.findIndex(p => p.id === projectId);
    if (idx !== -1) {
      currentModalIndex = idx;
      displayModalProject(filteredProjects[idx]);
    } else {
      const proj = projects.find(p => p.id === projectId);
      if (proj) {
        currentModalIndex = 0;
        displayModalProject(proj);
      }
    }
  };

  function displayModalProject(project) {
    if (!project || !modal) return;

    document.getElementById('modalCategory').textContent = project.categoryLabel;
    document.getElementById('modalClient').textContent = `${project.client} • ${project.industry}`;
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalOverview').textContent = project.overview;
    
    const imgEl = document.getElementById('modalImage');
    if (imgEl) {
      imgEl.src = project.image;
      imgEl.alt = project.title;
    }

    if (imageLink) {
      imageLink.href = project.image;
    }

    if (counterEl) {
      counterEl.textContent = `${currentModalIndex + 1} / ${filteredProjects.length}`;
    }

    document.getElementById('modalChallenge').textContent = project.challenge;
    document.getElementById('modalSolution').textContent = project.solution;

    const metricsContainer = document.getElementById('modalMetrics');
    if (metricsContainer && project.metrics) {
      metricsContainer.innerHTML = project.metrics.map(m =>
        `<div class="text-center p-3 border-r border-neutral-200 last:border-r-0">
          <div class="text-lg sm:text-2xl font-bold font-mono text-black">${m.value}</div>
          <div class="text-[11px] font-mono text-neutral-700 font-semibold uppercase tracking-wider">${m.label}</div>
        </div>`
      ).join('');
    }

    const workflowContainer = document.getElementById('modalWorkflow');
    if (workflowContainer && project.workflow) {
      workflowContainer.innerHTML = project.workflow.map((w, idx) =>
        `<div class="flex items-start gap-3 text-xs sm:text-sm text-neutral-800">
          <span class="w-5 h-5 rounded-full bg-black text-white font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5">${idx + 1}</span>
          <span>${w}</span>
        </div>`
      ).join('');
    }

    const toolsContainer = document.getElementById('modalTools');
    if (toolsContainer && project.tools) {
      toolsContainer.innerHTML = project.tools.map(t =>
        `<span class="px-2.5 py-1 text-xs font-mono bg-neutral-100 border border-neutral-300 rounded text-neutral-800">${t}</span>`
      ).join('');
    }

    modal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  function navigateModal(direction) {
    if (!filteredProjects.length) return;
    currentModalIndex = (currentModalIndex + direction + filteredProjects.length) % filteredProjects.length;
    displayModalProject(filteredProjects[currentModalIndex]);
  }

  if (prevBtn) prevBtn.addEventListener('click', () => navigateModal(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => navigateModal(1));
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (!modal || !modal.classList.contains('is-active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') navigateModal(-1);
    if (e.key === 'ArrowRight') navigateModal(1);
  });

  // Initial render
  filterProjects();
}

/* =========================================================================
   7. CLIENT REVIEWS HORIZONTAL MARQUEE
   ========================================================================= */
function initTestimonialsMarquee() {
  // Pure CSS animation with hover-to-pause handles the continuous infinite loop
}

/* =========================================================================
   8. FAQS ACCORDION, CATEGORY FILTER & REAL-TIME SEARCH
   ========================================================================= */
function initFaqsAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  const filterBtns = document.querySelectorAll('.faq-filter-btn');
  const searchInput = document.getElementById('faqSearchInput');
  const expandAllBtn = document.getElementById('faqExpandAllBtn');
  const expandAllText = document.getElementById('faqExpandAllText');
  const noResultsEl = document.getElementById('faqNoResults');

  if (!faqItems.length) return;

  // 1. Accordion Toggle
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    if (!btn || !answer) return;

    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      if (isExpanded) {
        btn.setAttribute('aria-expanded', 'false');
        answer.classList.add('hidden');
        item.classList.remove('border-black', 'shadow-sm');
        item.classList.add('border-neutral-200');
        if (icon) icon.classList.remove('rotate-45');
      } else {
        btn.setAttribute('aria-expanded', 'true');
        answer.classList.remove('hidden');
        item.classList.add('border-black', 'shadow-sm');
        item.classList.remove('border-neutral-200');
        if (icon) icon.classList.add('rotate-45');
      }
    });
  });

  // 2. Expand All / Collapse All Toggle
  if (expandAllBtn) {
    let allExpanded = false;
    expandAllBtn.addEventListener('click', () => {
      allExpanded = !allExpanded;
      faqItems.forEach(item => {
        if (item.style.display === 'none') return;
        const btn = item.querySelector('.faq-question-btn');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');

        if (allExpanded) {
          btn.setAttribute('aria-expanded', 'true');
          answer.classList.remove('hidden');
          item.classList.add('border-black', 'shadow-sm');
          item.classList.remove('border-neutral-200');
          if (icon) icon.classList.add('rotate-45');
        } else {
          btn.setAttribute('aria-expanded', 'false');
          answer.classList.add('hidden');
          item.classList.remove('border-black', 'shadow-sm');
          item.classList.remove('border-neutral-200');
          if (icon) icon.classList.remove('rotate-45');
        }
      });
      if (expandAllText) {
        expandAllText.textContent = allExpanded ? 'Collapse All' : 'Expand All';
      }
    });
  }

  // 3. Category Filter & Search Synchronization
  let currentCategory = 'all';
  let currentSearch = '';

  function applyFaqFilters() {
    let visibleCount = 0;
    const query = currentSearch.toLowerCase().trim();

    faqItems.forEach(item => {
      const category = item.getAttribute('data-category');
      const matchesCategory = currentCategory === 'all' || category === currentCategory;
      const textContent = item.textContent.toLowerCase();
      const matchesSearch = !query || textContent.includes(query);

      if (matchesCategory && matchesSearch) {
        item.style.display = 'block';
        visibleCount++;
      } else {
        item.style.display = 'none';
      }
    });

    if (noResultsEl) {
      if (visibleCount === 0) {
        noResultsEl.classList.remove('hidden');
      } else {
        noResultsEl.classList.add('hidden');
      }
    }
  }

  // Category Tab Click
  if (filterBtns.length) {
    filterBtns.forEach(fBtn => {
      fBtn.addEventListener('click', () => {
        currentCategory = fBtn.getAttribute('data-filter');

        filterBtns.forEach(b => {
          b.classList.remove('bg-black', 'text-white');
          b.classList.add('bg-white', 'text-neutral-800', 'border', 'border-neutral-200');
          const badge = b.querySelector('.faq-filter-count');
          if (badge) {
            badge.classList.remove('bg-neutral-800', 'text-neutral-300');
            badge.classList.add('bg-neutral-100', 'text-neutral-700');
          }
        });

        fBtn.classList.add('bg-black', 'text-white');
        fBtn.classList.remove('bg-white', 'border-neutral-200');
        const activeBadge = fBtn.querySelector('.faq-filter-count');
        if (activeBadge) {
          activeBadge.classList.add('bg-neutral-800', 'text-neutral-300');
          activeBadge.classList.remove('bg-neutral-100', 'text-neutral-700');
        }

        applyFaqFilters();
      });
    });
  }

  // Real-time Search Input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      applyFaqFilters();
    });
  }
}

/* =========================================================================
   9. CUSTOM SERVICE DROPDOWN (EDITORIAL & UNIQUE)
   ========================================================================= */
function initCustomServiceDropdown() {
  const container = document.getElementById('customServiceDropdown');
  const triggerBtn = document.getElementById('serviceDropdownBtn');
  const menu = document.getElementById('serviceDropdownMenu');
  const chevron = document.getElementById('serviceDropdownChevron');
  const hiddenInput = document.getElementById('formService');
  const tagEl = document.getElementById('selectedServiceTag');
  const titleEl = document.getElementById('selectedServiceTitle');
  const subEl = document.getElementById('selectedServiceSub');
  const options = document.querySelectorAll('.custom-option');

  if (!container || !triggerBtn || !menu || !options.length) return;

  function openDropdown() {
    menu.classList.remove('hidden');
    triggerBtn.setAttribute('aria-expanded', 'true');
    triggerBtn.classList.add('border-black', 'bg-white', 'shadow-md');
    triggerBtn.classList.remove('border-neutral-300', 'bg-neutral-50');
    if (chevron) chevron.classList.add('rotate-180');
  }

  function closeDropdown() {
    menu.classList.add('hidden');
    triggerBtn.setAttribute('aria-expanded', 'false');
    triggerBtn.classList.remove('border-black', 'bg-white', 'shadow-md');
    triggerBtn.classList.add('border-neutral-300', 'bg-neutral-50');
    if (chevron) chevron.classList.remove('rotate-180');
  }

  triggerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = !menu.classList.contains('hidden');
    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  });

  function selectOption(opt) {
    const value = opt.getAttribute('data-value');
    const tag = opt.getAttribute('data-tag');
    const title = opt.getAttribute('data-title');
    const sub = opt.getAttribute('data-sub');

    if (hiddenInput) hiddenInput.value = value;
    if (tagEl) tagEl.textContent = tag;
    if (titleEl) titleEl.textContent = title;
    if (subEl) subEl.textContent = sub;

    // Update active highlight across options
    options.forEach(o => {
      const isCurrent = (o === opt);
      const optTag = o.querySelector('.option-tag');
      const checkIcon = o.querySelector('.check-icon');

      if (isCurrent) {
        o.classList.add('is-selected', 'border-neutral-300', 'bg-neutral-50');
        o.classList.remove('border-transparent');
        if (optTag) {
          optTag.classList.remove('bg-neutral-100', 'text-neutral-800');
          optTag.classList.add('bg-black', 'text-white');
        }
        if (checkIcon) checkIcon.classList.remove('hidden');
      } else {
        o.classList.remove('is-selected', 'border-neutral-300', 'bg-neutral-50');
        o.classList.add('border-transparent');
        if (optTag) {
          optTag.classList.remove('bg-black', 'text-white');
          optTag.classList.add('bg-neutral-100', 'text-neutral-800');
        }
        if (checkIcon) checkIcon.classList.add('hidden');
      }
    });

    closeDropdown();
  }

  options.forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      selectOption(opt);
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!container.contains(e.target)) {
      closeDropdown();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
      closeDropdown();
      triggerBtn.focus();
    }
  });

  // Expose reset helper globally for contact form reset
  window.resetCustomServiceDropdown = function() {
    if (options.length > 0) {
      selectOption(options[0]);
    }
  };
}

/* =========================================================================
   10. CONTACT FORM VALIDATION & FORMSPREE BACKEND INTEGRATION
   ========================================================================= */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const alertContainer = document.getElementById('contactFormAlert');
  const successContainer = document.getElementById('contactFormSuccess');
  const resetBtn = document.getElementById('resetContactFormBtn');
  const submitBtn = document.getElementById('contactSubmitBtn');
  const submitText = document.getElementById('contactSubmitText');

  if (!form) return;

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwlparnp';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Spam honeypot detection
    const botField = document.getElementById('botField');
    if (botField && botField.value.trim() !== '') {
      return;
    }

    const name = document.getElementById('formName').value.trim();
    const email = document.getElementById('formEmail').value.trim();
    const service = document.getElementById('formService').value;
    const details = document.getElementById('formDetails').value.trim();

    // Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || name.length < 2) {
      showAlert('Please enter your full name (at least 2 characters).');
      return;
    }

    if (!email || !emailRegex.test(email)) {
      showAlert('Please enter a valid business email address.');
      return;
    }

    if (!details || details.length < 10) {
      showAlert('Please provide project details (at least 10 characters).');
      return;
    }

    hideAlert();

    // UI Loading state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.classList.add('opacity-75', 'cursor-not-allowed');
    }
    if (submitText) {
      submitText.textContent = 'Transmitting Message...';
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          service: service,
          message: details,
          _subject: `New Portfolio Lead: ${name} (${service})`
        })
      });

      if (response.ok) {
        form.reset();
        form.classList.add('hidden');
        if (successContainer) successContainer.classList.remove('hidden');
      } else {
        const data = await response.json().catch(() => ({}));
        if (data && data.errors && data.errors.length) {
          const errorMsg = data.errors.map(err => err.message).join(', ');
          showAlert(`Submission notice: ${errorMsg}`);
        } else {
          showAlert('There was an issue transmitting your message. Please try again or email directly at iamhasnainalisabri@gmail.com.');
        }
      }
    } catch (err) {
      showAlert('Network error: Unable to reach the server. Please check your connection or email directly at iamhasnainalisabri@gmail.com.');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
      }
      if (submitText) {
        submitText.textContent = 'Submit Project Details';
      }
    }
  });

  function showAlert(msg) {
    if (!alertContainer) return;
    alertContainer.textContent = msg;
    alertContainer.classList.remove('hidden');
  }

  function hideAlert() {
    if (!alertContainer) return;
    alertContainer.textContent = '';
    alertContainer.classList.add('hidden');
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      if (typeof window.resetCustomServiceDropdown === 'function') {
        window.resetCustomServiceDropdown();
      }
      form.classList.remove('hidden');
      if (successContainer) successContainer.classList.add('hidden');
      hideAlert();
    });
  }
}

/* =========================================================================
   9. DYNAMIC SCROLL PROGRESS BACK-TO-TOP BUTTON (DESKTOP + MOBILE TOUCH)
   ========================================================================= */
function initBackToTop() {
  const floatingController = document.getElementById('floatingBackToTop');
  const floatingBtn = document.getElementById('floatingTopBtn');
  const progressCircle = document.getElementById('floatingTopProgressCircle');
  const percentText = document.getElementById('floatingTopPercent');
  const sideHud = document.getElementById('sideScrollHUD');
  const sidePercentText = document.getElementById('sideScrollPercent');
  const topProgressBar = document.getElementById('progressBar');
  const footerBtn = document.getElementById('backToTopBtn');

  const CIRCUMFERENCE = 87.96; // 2 * PI * 14 (r=14)
  let sideScrollTimeout = null;

  function getScrollTop() {
    return window.pageYOffset || 
           (document.documentElement && document.documentElement.scrollTop) || 
           (document.body && document.body.scrollTop) || 
           0;
  }

  function getDocHeight() {
    const doc = document.documentElement;
    const body = document.body;
    return Math.max(
      doc ? doc.scrollHeight : 0,
      body ? body.scrollHeight : 0,
      doc ? doc.offsetHeight : 0,
      body ? body.offsetHeight : 0,
      doc ? doc.clientHeight : 0
    ) - window.innerHeight;
  }

  function updateScrollProgress() {
    const scrollY = getScrollTop();
    const docHeight = getDocHeight();
    const progress = docHeight > 0 ? Math.min(Math.max(scrollY / docHeight, 0), 1) : 0;
    const percentVal = Math.round(progress * 100);

    // Update circular SVG progress ring
    if (progressCircle) {
      const offset = CIRCUMFERENCE - (progress * CIRCUMFERENCE);
      progressCircle.style.strokeDashoffset = offset.toFixed(2);
    }

    // Update live percentage readout in floating capsule
    if (percentText) {
      percentText.textContent = `${percentVal}%`;
    }

    // Update top luxury reading progress bar
    if (topProgressBar) {
      topProgressBar.style.width = `${(progress * 100).toFixed(1)}%`;
    }

    // Update side floating scroll HUD (tracks alongside the native scrollbar on desktop)
    if (sideHud && sidePercentText) {
      sidePercentText.textContent = `${percentVal}%`;
      const minTop = 80;
      const maxTop = window.innerHeight - 90;
      const currentTop = minTop + progress * (maxTop - minTop);
      sideHud.style.top = `${currentTop}px`;

      if (scrollY > 60) {
        sideHud.classList.add('is-visible');
        clearTimeout(sideScrollTimeout);
        sideScrollTimeout = setTimeout(() => {
          sideHud.classList.remove('is-visible');
        }, 1200);
      } else {
        sideHud.classList.remove('is-visible');
      }
    }

    // Toggle visibility of the floating controller (appears smoothly as soon as scrolling starts > 70px)
    if (floatingController) {
      if (scrollY > 70) {
        floatingController.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4', 'scale-90');
        floatingController.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0', 'scale-100');
      } else {
        floatingController.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0', 'scale-100');
        floatingController.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4', 'scale-90');
      }
    }
  }

  // Multi-target scroll listeners (captures touch scrolling on iOS & Android)
  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  document.addEventListener('scroll', updateScrollProgress, { passive: true });
  window.addEventListener('touchmove', updateScrollProgress, { passive: true });
  window.addEventListener('resize', updateScrollProgress, { passive: true });
  updateScrollProgress();

  // Multi-tier smooth scroll to top that never fails on mobile Safari or Android
  function performScrollToTop(e) {
    if (e) {
      if (typeof e.preventDefault === 'function') e.preventDefault();
      if (typeof e.stopPropagation === 'function') e.stopPropagation();
    }

    const startY = getScrollTop();
    if (startY <= 0) return;

    // 1. Native window smooth scroll
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } catch (err) {
      window.scrollTo(0, 0);
    }

    // 2. Also scroll documentElement & body
    if (document.documentElement) {
      try {
        document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      } catch (err) {
        document.documentElement.scrollTop = 0;
      }
    }
    if (document.body) {
      try {
        document.body.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      } catch (err) {
        document.body.scrollTop = 0;
      }
    }

    // 3. Robust RAF (requestAnimationFrame) fallback ensuring mobile devices reach top
    let startTime = null;
    const duration = 380; // ms

    function animateStep(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // cubic ease-out
      const nextY = Math.round(startY * (1 - ease));

      window.scrollTo(0, nextY);
      if (document.documentElement) document.documentElement.scrollTop = nextY;
      if (document.body) document.body.scrollTop = nextY;

      if (progress < 1) {
        window.requestAnimationFrame(animateStep);
      } else {
        window.scrollTo(0, 0);
        if (document.documentElement) document.documentElement.scrollTop = 0;
        if (document.body) document.body.scrollTop = 0;
      }
    }
    window.requestAnimationFrame(animateStep);
  }

  // Bind click & touchend events for instantaneous mobile response
  if (floatingBtn) {
    floatingBtn.addEventListener('click', performScrollToTop);
    floatingBtn.addEventListener('touchend', performScrollToTop, { passive: false });
  }

  if (floatingController) {
    floatingController.addEventListener('click', performScrollToTop);
  }

  if (footerBtn) {
    footerBtn.addEventListener('click', performScrollToTop);
    footerBtn.addEventListener('touchend', performScrollToTop, { passive: false });
  }
}

/* =========================================================================
   10. WHATSAPP AI ASSISTANT CHATBOT MODAL WIDGET (ZERO REDIRECT • ON-SITE AI CHAT)
   ========================================================================= */
function initWhatsappAiWidget() {
  const container = document.getElementById('whatsappAiWidget');
  const triggerBtn = document.getElementById('whatsappTriggerBtn');
  const chatbox = document.getElementById('whatsappChatbox');
  const closeBtn = document.getElementById('closeWhatsappChatBtn');
  const toggleIcon = document.getElementById('whatsappToggleIcon');
  const promptPills = document.querySelectorAll('.chat-prompt-pill');
  const messageInput = document.getElementById('whatsappMessageInput');
  const sendBtn = document.getElementById('sendWhatsappBtn');
  const sendBtnText = document.getElementById('sendWhatsappBtnText');
  const chatFeed = document.getElementById('whatsappChatFeed');
  const chatStatusText = document.getElementById('chatStatusText');
  const fallbackLink = document.getElementById('directWhatsappFallbackLink');

  if (!container || !triggerBtn || !chatbox || !chatFeed) return;

  const phone = (container.getAttribute('data-phone') || '923045760822').replace(/[^0-9]/g, '');
  if (fallbackLink) {
    fallbackLink.href = `https://wa.me/${phone}`;
  }

  let isOpen = false;
  let conversationStep = 0; // 0: inquiry, 1: contact info, 2+: additional notes
  const conversationLog = [];

  function openChat() {
    isOpen = true;
    chatbox.classList.remove('is-collapsed');
    chatbox.classList.add('is-open');
    triggerBtn.setAttribute('aria-expanded', 'true');
    if (toggleIcon) toggleIcon.textContent = '✕';
    setTimeout(() => {
      if (messageInput) messageInput.focus();
    }, 150);
  }

  function closeChat() {
    isOpen = false;
    chatbox.classList.remove('is-open');
    chatbox.classList.add('is-collapsed');
    triggerBtn.setAttribute('aria-expanded', 'false');
    if (toggleIcon) toggleIcon.textContent = '💬';
  }

  function toggleChat() {
    if (isOpen) {
      closeChat();
    } else {
      openChat();
    }
  }

  triggerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleChat();
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeChat();
    });
  }

  // Quick prompt pills selection
  promptPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.stopPropagation();
      const promptText = pill.getAttribute('data-msg') || pill.textContent.trim();
      if (messageInput) {
        messageInput.value = promptText;
        messageInput.focus();
      }
      // Brief visual feedback on pill
      pill.classList.add('bg-black', 'text-white');
      pill.classList.remove('bg-white', 'text-neutral-800');
      setTimeout(() => {
        pill.classList.remove('bg-black', 'text-white');
        pill.classList.add('bg-white', 'text-neutral-800');
      }, 300);
    });
  });

  function scrollToBottom() {
    chatFeed.scrollTo({
      top: chatFeed.scrollHeight,
      behavior: 'smooth'
    });
  }

  function appendUserBubble(text) {
    const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const bubbleWrapper = document.createElement('div');
    bubbleWrapper.className = 'flex items-end justify-end gap-2 text-right';
    bubbleWrapper.innerHTML = `
      <div class="chat-bubble-user p-3 max-w-[85%] text-left space-y-1 shadow-sm">
        <p class="text-white text-xs leading-relaxed font-sans">${escaped}</p>
        <div class="flex items-center justify-end gap-1 text-[9px] font-mono text-neutral-400">
          <span>${timeStr}</span>
          <span>•</span>
          <span class="text-emerald-400 font-bold">Delivered ✓✓</span>
        </div>
      </div>
    `;
    chatFeed.appendChild(bubbleWrapper);
    scrollToBottom();
  }

  function showTypingIndicator() {
    const indicator = document.createElement('div');
    indicator.id = 'chatTypingIndicator';
    indicator.className = 'flex items-start gap-2.5';
    indicator.innerHTML = `
      <div class="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5">
        MH
      </div>
      <div class="chat-bubble-agent p-2.5 shadow-2xs flex items-center gap-2">
        <div class="chat-typing-indicator">
          <span class="chat-typing-dot"></span>
          <span class="chat-typing-dot"></span>
          <span class="chat-typing-dot"></span>
        </div>
        <span class="text-[10px] font-mono text-neutral-500">Hasnain is typing...</span>
      </div>
    `;
    chatFeed.appendChild(indicator);
    scrollToBottom();
  }

  function removeTypingIndicator() {
    const indicator = document.getElementById('chatTypingIndicator');
    if (indicator) indicator.remove();
  }

  function appendAgentBubble(htmlContent) {
    removeTypingIndicator();
    const bubbleWrapper = document.createElement('div');
    bubbleWrapper.className = 'flex items-start gap-2.5';
    bubbleWrapper.innerHTML = `
      <div class="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5">
        MH
      </div>
      <div class="chat-bubble-agent p-3 shadow-2xs max-w-[85%] space-y-1.5 leading-relaxed">
        ${htmlContent}
      </div>
    `;
    chatFeed.appendChild(bubbleWrapper);
    scrollToBottom();
  }

  // Silent background transmission to Formspree
  async function transmitSilently(payload) {
    try {
      if (chatStatusText) chatStatusText.textContent = 'Transmitting...';
      const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwlparnp';
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          targetWhatsApp: '+923045760822',
          targetPhone: '+923045760822',
          whatsappDirectLink: `https://wa.me/${phone}`,
          ...payload
        })
      });
      if (chatStatusText) chatStatusText.textContent = 'Delivered ✓';
      return response.ok;
    } catch (err) {
      if (chatStatusText) chatStatusText.textContent = 'Sent on site';
      return false;
    }
  }

  // Direct redirect to WhatsApp inbox (+923045760822)
  async function handleSend() {
    if (!messageInput) return;
    let rawMsg = messageInput.value.trim();
    if (!rawMsg) {
      rawMsg = "Hi Muhammad Hasnain, I saw your portfolio and would like to discuss an AI automation / GoHighLevel / web development project with you.";
    }

    // 1. Render message in chat history
    appendUserBubble(rawMsg);
    messageInput.value = '';

    // 2. Silent background backup transmission to Formspree
    transmitSilently({
      source: 'WhatsApp AI Agent Modal (Direct Inbox Redirect)',
      inquiryMessage: rawMsg,
      timestamp: new Date().toISOString()
    });

    // 3. Immediate AI agent status bubble
    showTypingIndicator();
    setTimeout(() => {
      removeTypingIndicator();
      appendAgentBubble(`
        <p class="font-semibold text-black">Opening WhatsApp... 🚀</p>
        <p class="text-neutral-700">
          Your inquiry is opening directly in Muhammad Hasnain's WhatsApp inbox (<strong>+92 304 5760822</strong>).
        </p>
        <div class="mt-2 pt-2 border-t border-neutral-200">
          <a href="https://wa.me/${phone}?text=${encodeURIComponent(rawMsg)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-[11px] transition-all shadow-sm">
            <span>Tap here if WhatsApp did not open automatically</span>
            <span>↗</span>
          </a>
        </div>
      `);
    }, 350);

    // 4. Direct redirect / popup to WhatsApp with pre-filled message
    const targetUrl = `https://wa.me/${phone}?text=${encodeURIComponent(rawMsg)}`;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');

    if (sendBtn) {
      sendBtn.disabled = false;
      sendBtn.classList.remove('opacity-75');
    }
  }

  if (sendBtn) {
    sendBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      handleSend();
    });
  }

  if (messageInput) {
    messageInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    });
  }

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (isOpen && !container.contains(e.target)) {
      closeChat();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      closeChat();
    }
  });
}

/* =========================================================================
   11. SCROLL REVEAL ANIMATIONS
   ========================================================================= */
function initScrollReveal() {
  const items = document.querySelectorAll('.reveal-on-scroll');
  if (!items.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  items.forEach(el => observer.observe(el));
}
