/**
 * MUHAMMAD HASNAIN — VERIFIED PROJECTS DATASET
 * 56 Real Systems Blueprints & Architectures
 * Complete Metadata, Workflows, Challenges & Solutions
 */

window.PROJECTS_DATA = [
  // ==========================================
  // 1. GOHIGHLEVEL CRM ARCHITECTURES (21 Items)
  // ==========================================
  {
    id: "ghl-pipeline-system",
    title: "Enterprise GoHighLevel Pipeline & Sales Architecture",
    category: "gohighlevel",
    categoryLabel: "GoHighLevel CRM",
    client: "Commercial Solar & Roofing Agency",
    industry: "Renewable Energy & Home Services",
    image: "./assets/projects/ss1.png",
    overview: "Complete ground-up GoHighLevel deployment replacing three fragmented tools with a single automated sales engine.",
    challenge: "The client was losing 40% of inbound leads due to a 3-hour average response delay and disconnected scheduling software resulting in frequent double-bookings.",
    solution: "Engineered a custom GHL snapshot featuring round-robin rep distribution, automated sub-45s SMS lead triage, multi-calendar routing with dynamic time-zone detection, and automated stage progression.",
    workflow: [
      "Inbound Facebook ad or web lead submits form",
      "n8n webhook verifies phone number & checks DNC list",
      "Sub-45s personalized SMS & ringless voicemail triggered",
      "Prospect selects time slot on GHL round-robin calendar",
      "Opportunity automatically advances to 'Meeting Booked' stage in pipeline",
      "Automated 24h & 1h reminder cadence with 2-way confirmation check"
    ],
    tools: ["GoHighLevel", "Twilio", "Round-Robin", "Stripe Payments"],
    results: "Cut response time from 3 hours to 45 seconds; increased booked discovery calls by 240% in first 60 days.",
    metrics: [
      { label: "Speed to Lead", value: "45s" },
      { label: "Bookings Surge", value: "+240%" },
      { label: "Monthly Pipeline", value: "$420K" }
    ]
  },
  {
    id: "ghl-subaccount-snapshot",
    title: "GHL Sub-Account Snapshot & Custom Field Mapping",
    category: "gohighlevel",
    categoryLabel: "GoHighLevel CRM",
    client: "White-Label Agency Partner",
    industry: "Marketing & SaaS",
    image: "./assets/projects/ss2.png",
    overview: "Turnkey GoHighLevel snapshot architecture configured for rapid client deployment across 20+ agency accounts.",
    challenge: "Onboarding new agency clients took 10+ days of manual pipeline recreation and custom field entry, creating a massive fulfillment bottleneck.",
    solution: "Developed an enterprise master snapshot with 40+ standardized custom fields, custom values, pre-built workflow templates, and automated onboarding forms.",
    workflow: [
      "New agency client signs contract in Stripe",
      "Automated GHL snapshot deploys into new sub-account in <5 minutes",
      "Custom values automatically populate agency branding and business hours",
      "Twilio sub-account and dedicated phone number provisioned via API",
      "Automated testing suite fires sample leads through all notification nodes"
    ],
    tools: ["GoHighLevel SaaS", "Custom Values", "Snapshots", "Twilio API"],
    results: "Reduced client onboarding time from 10 days down to 45 minutes with 100% setup consistency.",
    metrics: [
      { label: "Onboarding Time", value: "45m" },
      { label: "Custom Fields", value: "40+" },
      { label: "Deploy Errors", value: "0%" }
    ]
  },
  {
    id: "ghl-multi-calendar-booking",
    title: "Round-Robin Team Calendar & Automated Booking Funnel",
    category: "gohighlevel",
    categoryLabel: "GoHighLevel CRM",
    client: "B2B Legal & Financial Advisory",
    industry: "Legal & Professional Services",
    image: "./assets/projects/ss3.png",
    overview: "Round-robin team calendar system with time-zone detection, automated booking confirmations, and dynamic intake forms.",
    challenge: "High client no-show rate (38%) and frequent scheduling conflicts between six senior partners across US and European time zones.",
    solution: "Engineered a unified GHL team calendar funnel with intelligent round-robin routing based on attorney specialization, automated Stripe deposit payments, and multi-channel SMS/email reminder cadences.",
    workflow: [
      "Prospective client selects legal inquiry category on dynamic form",
      "Calendar engine identifies available attorney matching specific practice area",
      "Stripe consultation fee captured directly on calendar confirmation step",
      "Automated calendar invitation created in attorney Google Workspace calendar",
      "Multi-touch SMS reminder sequence (24h, 2h, 15m) with easy reschedule link",
      "Post-consultation follow-up triggered based on meeting attendance status"
    ],
    tools: ["GoHighLevel", "Google Calendar Sync", "Stripe API", "Twilio SMS"],
    results: "Reduced no-show rate from 38% down to 6.2%; eliminated 100% of internal scheduling conflicts.",
    metrics: [
      { label: "No-Show Drop", value: "38% → 6%" },
      { label: "Scheduling Conflicts", value: "0" },
      { label: "Collected Fees", value: "100% Auto" }
    ]
  },
  {
    id: "ghl-lead-nurture-sequence",
    title: "Automated Multi-Touch Lead Nurture Sequence",
    category: "gohighlevel",
    categoryLabel: "GoHighLevel CRM",
    client: "Premier Real Estate Brokerage",
    industry: "Real Estate & Property",
    image: "./assets/projects/ss5.png",
    overview: "30-day multi-channel automated drip sequence nurturing cold real estate prospects into booked home tour appointments.",
    challenge: "Over 80% of real estate leads go cold after 48 hours without persistent, multi-channel touchpoints.",
    solution: "Built a behavioral GHL workflow combining conversational SMS check-ins, value-driven email market reports, and automated voicemail drops triggered by lead engagement.",
    workflow: [
      "Lead registers on home listing landing page",
      "Instant SMS delivers listing photos and price sheet link",
      "Follow-up SMS triggers next morning asking specific home buying timeline",
      "Dynamic email drip educates buyer on current mortgage rate trends",
      "Ringless voicemail dropped on Day 5 from dedicated buyer specialist",
      "Hot leads replying 'YES' instantly transferred to agent's cell phone"
    ],
    tools: ["GoHighLevel", "Twilio SMS", "Voicemail Drops", "Dynamic Email"],
    results: "Reactivated 28 dormant buyer leads generating $1.4M in closed real estate transaction volume.",
    metrics: [
      { label: "Reactivated Leads", value: "28 Deals" },
      { label: "Response Rate", value: "+140%" },
      { label: "Closed Volume", value: "$1.4M" }
    ]
  },
  {
    id: "ghl-communication-hub",
    title: "Two-Way SMS & Email Unified Communication Hub",
    category: "gohighlevel",
    categoryLabel: "GoHighLevel CRM",
    client: "Multi-Provider Medical Specialty Clinic",
    industry: "Healthcare & Patient Care",
    image: "./assets/projects/ss6.png",
    overview: "Centralized communication platform routing patient inquiries, reminders, and staff messages into a single compliant inbox.",
    challenge: "Clinic staff were switching between three personal phones and an outdated email client, causing missed patient inquiries and compliance risks.",
    solution: "Consolidated all SMS, phone calls, web chats, and emails into GoHighLevel Conversations with staff role permissions, quick-response snippets, and automated after-hours replies.",
    workflow: [
      "Patient sends SMS or submits website chat message",
      "Unified GHL inbox displays patient profile, appointment history, and notes",
      "Staff uses one-click canned responses for standard prep instructions",
      "Automated after-hours workflow acknowledges patient and books next-day call",
      "Call recordings and SMS history securely archived under patient record"
    ],
    tools: ["GoHighLevel Conversations", "Twilio Telephony", "Snippet Templates", "Role-Based Permissions"],
    results: "Reduced average patient response time to under 1 minute; eliminated 100% of lost communication records.",
    metrics: [
      { label: "Response Time", value: "<1 min" },
      { label: "Lost Messages", value: "0" },
      { label: "Staff Efficiency", value: "+45%" }
    ]
  },
  {
    id: "ghl-conditional-triggers",
    title: "Conditional Trigger Workflow & Tagging Engine",
    category: "gohighlevel",
    categoryLabel: "GoHighLevel CRM",
    client: "D2C Health & Wellness Brand",
    industry: "E-Commerce & Supplements",
    image: "./assets/projects/ss7.png",
    overview: "Advanced behavioral tagging and conditional branching engine segmenting customers based on lifetime purchase value and email clicks.",
    challenge: "Client was blasting the same generic promotion to all 50,000 subscribers, driving high unsubscribe rates and low conversions.",
    solution: "Implemented multi-condition If/Else GHL workflows that dynamically tag contacts by purchase count, product interest, and engagement level.",
    workflow: [
      "Customer completes checkout or clicks specific email link",
      "Conditional logic evaluates purchase tier ($0-$50, $50-$200, $200+)",
      "Smart tags applied instantly: 'VIP Buyer', 'At-Risk', or 'Cart Abandoner'",
      "Targeted discount sequence sent based strictly on tag profile",
      "Suppressed inactive users to protect overall domain sender score"
    ],
    tools: ["GoHighLevel Workflows", "If/Else Branching", "Smart Tagging", "Webhook Sync"],
    results: "Boosted repeat purchase rate by 34% while reducing unsubscribe complaints by 60%.",
    metrics: [
      { label: "Repeat Sales", value: "+34%" },
      { label: "Unsubscribe Drop", value: "-60%" },
      { label: "Active Tags", value: "25+ Rules" }
    ]
  },
  {
    id: "ghl-pipeline-velocity",
    title: "Sales Pipeline Velocity & Stage Progression Logic",
    category: "gohighlevel",
    categoryLabel: "GoHighLevel CRM",
    client: "B2B Growth Consultancy",
    industry: "Professional Services & SaaS",
    image: "./assets/projects/ss8.png",
    overview: "Automated opportunity pipeline with strict stage criteria, automated task assignments, and stale-deal re-engagement.",
    challenge: "Sales deals sat in limbo for weeks with no follow-up because reps forgot manual pipeline updates.",
    solution: "Designed automated stage progression where deal status moves automatically when proposals are viewed, contracts signed, or calls completed.",
    workflow: [
      "Discovery call completed advances deal to 'Proposal Sent'",
      "If proposal not viewed within 48h, automated task assigned to account executive",
      "Stripe or PandaDoc signature advances deal to 'Closed Won' automatically",
      "Automated Slack alert fires celebrating deal win with revenue amount",
      "Stale deals inactive for 14 days moved to automated 'Re-engagement Loop'"
    ],
    tools: ["GoHighLevel Opportunities", "PandaDoc API", "Slack Webhooks", "Automated Tasks"],
    results: "Shortened average sales cycle from 24 days to 9 days; tracked $420,000 in closed pipeline.",
    metrics: [
      { label: "Sales Cycle", value: "24d → 9d" },
      { label: "Closed Pipeline", value: "$420K" },
      { label: "Task Adherence", value: "100%" }
    ]
  },
  {
    id: "ghl-missed-call-textback",
    title: "Missed-Call Text-Back & Voice Drop Automation",
    category: "gohighlevel",
    categoryLabel: "GoHighLevel CRM",
    client: "Emergency HVAC & Plumbing Contractors",
    industry: "Home Services & Contracting",
    image: "./assets/projects/ss9.png",
    overview: "Instant automated SMS dispatch triggered whenever an incoming contractor call goes unanswered or busy.",
    challenge: "Contractors working on job sites missed 30% of incoming phone inquiries; 85% of those callers immediately called the next competitor on Google.",
    solution: "Deployed a sub-10s missed-call text-back system asking the caller how they can be helped and providing a direct booking link.",
    workflow: [
      "Customer dials contractor's Google Maps tracking number",
      "Call goes unanswered for 15 seconds or reaches busy tone",
      "GHL workflow triggers in <8 seconds with personalized SMS: 'Hi! Sorry we missed your call, we're on a job site. How can we help?'",
      "Customer replies with plumbing emergency description",
      "Automated dispatch alert sent to on-call technician's mobile app",
      "Customer given instant option to book priority dispatch slot"
    ],
    tools: ["GoHighLevel Call Routing", "Twilio Telephony", "Interactive SMS", "Mobile App Push"],
    results: "Recovered 82% of previously lost phone inquiries, generating $68,000 in additional service calls in month one.",
    metrics: [
      { label: "Trigger Speed", value: "<8s" },
      { label: "Lead Recovery", value: "82%" },
      { label: "Added Revenue", value: "$68,000" }
    ]
  },
  {
    id: "ghl-dynamic-survey",
    title: "GHL Form & Survey Dynamic Qualification Engine",
    category: "gohighlevel",
    categoryLabel: "GoHighLevel CRM",
    client: "High-Net-Worth Wealth Management",
    industry: "Financial Advisory",
    image: "./assets/projects/ss10.png",
    overview: "Multi-step interactive survey with conditional logic routing qualified high-asset prospects to senior partners.",
    challenge: "Senior financial advisors were wasting valuable time on consultation calls with prospects who did not meet minimum investable asset thresholds.",
    solution: "Engineered a dynamic qualifying survey that branches based on investable net worth, timeline, and financial goals.",
    workflow: [
      "Prospect clicks ads and enters financial qualification survey",
      "Multi-step form uses conditional branching based on asset answers",
      "Prospects with $500k+ assets routed to senior partner executive calendar",
      "Prospects below threshold routed to automated digital educational resources",
      "Comprehensive asset report PDF automatically generated and attached to contact"
    ],
    tools: ["GoHighLevel Surveys", "Conditional Logic", "Custom Fields", "PDF Generation"],
    results: "Increased advisor consultation conversion from 22% to 65% by filtering 100% of unqualified prospects upfront.",
    metrics: [
      { label: "Qualified Rate", value: "+65%" },
      { label: "Advisor Time Saved", value: "18h/wk" },
      { label: "Asset Floor Filter", value: "100% Strict" }
    ]
  },
  {
    id: "ghl-smartlist-segmentation",
    title: "Smart List Segmentation & Filter Configuration",
    category: "gohighlevel",
    categoryLabel: "GoHighLevel CRM",
    client: "Performance Marketing Agency",
    industry: "Digital Advertising",
    image: "./assets/projects/ss11.png",
    overview: "Dynamic CRM segmentation engine organizing 45,000 contacts into 18 operational smart lists for laser-focused marketing.",
    challenge: "Cluttered CRM contacts with no clear segmentation caused marketing messages to be sent to inappropriate audiences.",
    solution: "Configured 18 dynamic smart lists utilizing multiple boolean filter combinations (last activity, pipeline stage, tag presence, location).",
    workflow: [
      "Contacts continuously evaluated against multi-variable filter queries",
      "Smart lists update in real time without manual list exports",
      "Sales reps access pre-built views: 'Hot Leads Today', 'Pending Contracts', 'Stale Follow-ups'",
      "Automated email campaigns triggered specifically to dynamic smart list members",
      "Automated removal from list as soon as contact criteria change"
    ],
    tools: ["GoHighLevel Smart Lists", "Boolean Filters", "Custom Views", "Audience Sync"],
    results: "Allowed sales team to prioritize high-intent leads instantly, boosting daily outbound call connection rates by 48%.",
    metrics: [
      { label: "Smart Lists", value: "18 Configured" },
      { label: "Connect Rate", value: "+48%" },
      { label: "Total Contacts", value: "45,000" }
    ]
  },
  {
    id: "ghl-payment-invoicing",
    title: "Payment Processing & Stripe Invoice Automation",
    category: "gohighlevel",
    categoryLabel: "GoHighLevel CRM",
    client: "Executive Coaching & Mastermind",
    industry: "Education & Coaching",
    image: "./assets/projects/ss12.png",
    overview: "Automated recurring billing, installment plans, and failed-payment dunning workflows inside GoHighLevel.",
    challenge: "Client spent 15 hours every month manually chasing failed credit card payments and sending overdue reminders.",
    solution: "Integrated direct Stripe billing with automated multi-touch dunning workflows that send SMS/email update links when cards fail.",
    workflow: [
      "Client selects 3-pay or full-pay option on GHL order form",
      "Stripe securely captures tokenized payment credentials",
      "Automated invoice PDF generated and delivered via email",
      "If card expires or declines, automated dunning sequence triggers on Day 1, 3, 5",
      "Client self-updates card via secure 1-click portal link",
      "Opportunity pipeline updated instantly to 'Paid in Full' upon settlement"
    ],
    tools: ["GoHighLevel Invoices", "Stripe Connect", "Dunning Workflows", "Customer Portal"],
    results: "Automated 100% of recurring invoice generation and recovered $24,500 in otherwise lost declined payments.",
    metrics: [
      { label: "Recovered Revenue", value: "$24,500" },
      { label: "Manual Invoicing", value: "0 hours" },
      { label: "Collection Speed", value: "<24h" }
    ]
  },
  {
    id: "ghl-affiliate-management",
    title: "Affiliate & Referral Partner Management Hub",
    category: "gohighlevel",
    categoryLabel: "GoHighLevel CRM",
    client: "B2B SaaS Provider",
    industry: "Software & Technology",
    image: "./assets/projects/ss13.png",
    overview: "Built-in affiliate portal tracking referral links, commissions, cookie duration, and automated monthly payouts.",
    challenge: "Affiliate partners had no visibility into lead status, causing partner friction and lost referral growth opportunities.",
    solution: "Deployed GoHighLevel Affiliate Manager with dedicated partner dashboards, customized tracking links, and real-time commission tracking.",
    workflow: [
      "Affiliate partner registers via custom onboarding form",
      "Unique affiliate tracking link generated with 60-day cookie window",
      "Referred leads tracked automatically through CRM pipeline stages",
      "When referred deal closes, commission percentage calculated instantly",
      "Affiliate portal displays live referral clicks, leads, and pending payouts",
      "Automated monthly commission summary dispatched to finance department"
    ],
    tools: ["GHL Affiliate Manager", "Cookie Tracking", "Partner Dashboards", "Commission Automation"],
    results: "Onboarded 45 active affiliate partners generating $85,000 in new monthly recurring revenue within 90 days.",
    metrics: [
      { label: "Active Affiliates", value: "45 Partners" },
      { label: "New MRR", value: "$85,000" },
      { label: "Payout Accuracy", value: "100%" }
    ]
  },
  {
    id: "ghl-reputation-management",
    title: "Automated Review Generation & Reputation Engine",
    category: "gohighlevel",
    categoryLabel: "GoHighLevel CRM",
    client: "Dental & Orthodontic Practice Group",
    industry: "Healthcare & Local Services",
    image: "./assets/projects/ss14.png",
    overview: "Automated post-appointment SMS review generation funnel with negative sentiment filtering and direct Google 5-star acceleration.",
    challenge: "Practice had only 14 Google reviews despite serving hundreds of patients each month, losing local search visibility to competitors.",
    solution: "Created an automated GHL workflow triggered 2 hours after appointment completion. Sends an interactive 1-click sentiment survey that routes happy patients directly to Google Review page and routes feedback to clinic management.",
    workflow: [
      "Patient appointment marked as 'Completed' in practice software",
      "GHL receives webhook and delays trigger by 120 minutes for ideal timing",
      "Patient receives personalized SMS asking for a 1-tap rating experience",
      "Ratings of 4 or 5 stars automatically open practice Google Review profile",
      "Ratings of 1 to 3 stars open internal private feedback form for management",
      "Staff receives instant alert to resolve any patient concern before public review"
    ],
    tools: ["GoHighLevel", "Google My Business API", "Twilio SMS", "Webhooks"],
    results: "Generated 68 authentic 5-star Google reviews in 45 days, pushing the clinic into the top 3 Google Maps local pack.",
    metrics: [
      { label: "New Reviews", value: "+68" },
      { label: "Google Rating", value: "4.9 / 5.0" },
      { label: "Map Rank", value: "#1 Local Pack" }
    ]
  },
  {
    id: "ghl-kpi-dashboard",
    title: "Custom Dashboard & Executive Revenue KPI Tracker",
    category: "gohighlevel",
    categoryLabel: "GoHighLevel CRM",
    client: "Commercial Facilities Management",
    industry: "Facilities & Operations",
    image: "./assets/projects/ss15.png",
    overview: "Custom-configured GoHighLevel executive dashboard providing real-time visibility into conversion rates, pipeline values, and rep activity.",
    challenge: "Executive leadership had to manually compile spreadsheets every Friday to assess sales velocity and lead acquisition costs.",
    solution: "Built a consolidated executive KPI dashboard displaying real-time deal stages, conversion velocity, cash collected, and rep performance.",
    workflow: [
      "CRM pipeline updates reflect instantaneously on central dashboard",
      "Visual chart widgets break down lead sources (Google, Meta, Referrals)",
      "Automated conversion rate calculation from Lead -> Appointment -> Closed Deal",
      "Rep leaderboards track calls made, demos conducted, and revenue closed",
      "Automated weekly PDF snapshot dispatched to CEO every Monday at 8:00 AM"
    ],
    tools: ["GoHighLevel Dashboards", "KPI Widgets", "Attribution Models", "Executive Reporting"],
    results: "Saved executive team 6 hours weekly while providing 100% accurate, real-time revenue attribution.",
    metrics: [
      { label: "Report Time Saved", value: "6h/wk" },
      { label: "Data Accuracy", value: "100%" },
      { label: "Live Metrics", value: "Realtime" }
    ]
  },
  {
    id: "ghl-multilocation-hierarchy",
    title: "Multi-Location Sub-Account Hierarchy & Routing",
    category: "gohighlevel",
    categoryLabel: "GoHighLevel CRM",
    client: "National Home Services Franchise",
    industry: "Franchising & Multi-Unit",
    image: "./assets/projects/ss16.png",
    overview: "Enterprise multi-location GHL infrastructure with centralized corporate oversight and isolated branch sub-accounts.",
    challenge: "Corporate marketing leads were getting mixed up between 15 regional franchise branches, causing regional partner disputes.",
    solution: "Architected a master agency account structure with location-based automated lead routing using zip code and phone area code lookups.",
    workflow: [
      "National advertising campaign captures prospect lead on central landing page",
      "Zip code lookup script matches prospect to nearest franchise territory",
      "Webhook routes lead into specific regional sub-account in <3 seconds",
      "Regional team notified via local SMS and assigned to local calendar",
      "Corporate master dashboard tracks aggregated performance across all 15 branches"
    ],
    tools: ["GHL Multi-Location", "Territory Routing", "Master Reporting", "Twilio Sub-Accounts"],
    results: "Completely eliminated territory disputes across 15 branches; increased lead contact speed by 300%.",
    metrics: [
      { label: "Branches Connected", value: "15 Units" },
      { label: "Routing Latency", value: "<3s" },
      { label: "Territory Conflicts", value: "0" }
    ]
  },
  {
    id: "ghl-landing-001",
    title: "High-Converting GHL Lead Capture Landing Page",
    category: "gohighlevel",
    categoryLabel: "GoHighLevel CRM",
    client: "Luxury Home Remodeling Group",
    industry: "Construction & Interior Design",
    image: "./assets/projects/001.jpg",
    overview: "Custom responsive GHL landing page optimized for conversion velocity, high mobile speed, and dynamic portfolio galleries.",
    challenge: "Previous WordPress website loaded in 6.4 seconds and converted cold traffic at under 2.5%, wasting ad spend.",
    solution: "Rebuilt the landing page inside GoHighLevel Funnels with clean layout, optimized assets, and sub-1.2s Core Web Vitals.",
    workflow: [
      "Traffic arrives from local Google Local Services ads",
      "Dynamic headline adapts to specific service searched (Kitchen vs Bath)",
      "Fast 2-step lead capture form captures name and phone upfront",
      "Interactive project gallery showcases recent remodeling transformations",
      "Lead automatically pushed into instant SMS callback workflow"
    ],
    tools: ["GoHighLevel Funnels", "Core Web Vitals", "Mobile Optimization", "Dynamic Copy"],
    results: "Boosted landing page conversion rate from 2.5% to 18.4%; slashed cost-per-lead by 54%.",
    metrics: [
      { label: "Conversion Rate", value: "18.4%" },
      { label: "Page Load Speed", value: "<1.2s" },
      { label: "CPL Reduction", value: "-54%" }
    ]
  },
  {
    id: "ghl-intake-002",
    title: "Multi-Step Booking & Intake Funnel Architecture",
    category: "gohighlevel",
    categoryLabel: "GoHighLevel CRM",
    client: "Executive Management Consultancy",
    industry: "Management Consulting",
    image: "./assets/projects/002.jpg",
    overview: "Sleek multi-step booking funnel with progressive profiling, company revenue screening, and automatic calendar placement.",
    challenge: "Long single-page forms caused high bounce rates (65%) among busy C-suite executive prospects.",
    solution: "Structured a smooth multi-step interactive funnel that reduces cognitive friction while capturing complete organizational data.",
    workflow: [
      "Executive answers 3 quick multiple-choice questions regarding company size",
      "Step 2 captures business email and executive role",
      "Step 3 displays available strategy consultation slots",
      "Calendar integration verifies executive Google Calendar availability",
      "Preparation briefing PDF automatically sent 24h prior to consultation"
    ],
    tools: ["GHL Funnels", "Progressive Profiling", "Calendar Embeds", "Automated Prep Drips"],
    results: "Decreased form abandonment by 42%; generated 38 qualified enterprise consultations in 60 days.",
    metrics: [
      { label: "Form Completion", value: "78%" },
      { label: "Bounce Rate", value: "-42%" },
      { label: "Consults Booked", value: "38 Calls" }
    ]
  },
  {
    id: "ghl-confirm-003",
    title: "Automated Appointment Confirmation & Calendar Sync",
    category: "gohighlevel",
    categoryLabel: "GoHighLevel CRM",
    client: "Specialized Orthopedic Surgery Center",
    industry: "Healthcare & Surgery",
    image: "./assets/projects/003.jpg",
    overview: "Bidirectional calendar synchronization ensuring surgeon clinic hours are updated instantly across external calendars.",
    challenge: "Double-bookings and manual calendar entry errors caused patient delays and surgeon scheduling conflicts.",
    solution: "Engineered two-way sync between GoHighLevel and surgeon Google/Outlook calendars with buffer times and automated confirmations.",
    workflow: [
      "Patient selects consultation slot on clinic portal",
      "GHL immediately blocks time slot on surgeon personal Google calendar",
      "Dynamic 15-minute buffer added automatically before and after each surgery consult",
      "Patient receives SMS confirmation with one-tap add-to-calendar link",
      "Any cancellation automatically frees slot and notifies waitlist patients"
    ],
    tools: ["GoHighLevel Calendars", "Google Calendar Sync", "Outlook Exchange", "Waitlist Automation"],
    results: "Completely eliminated double bookings; reduced clinic scheduling administration by 20 hours monthly.",
    metrics: [
      { label: "Double Bookings", value: "0" },
      { label: "Sync Latency", value: "<3s" },
      { label: "Admin Time Saved", value: "20h/mo" }
    ]
  },
  {
    id: "ghl-portal-004",
    title: "GHL Customer Portal & Client Onboarding Flow",
    category: "gohighlevel",
    categoryLabel: "GoHighLevel CRM",
    client: "Full-Service Creative Marketing Agency",
    industry: "Agency & Digital Services",
    image: "./assets/projects/004.jpg",
    overview: "Self-service client onboarding portal where newly signed clients submit brand assets, passwords, and project briefs.",
    challenge: "Client asset collection was scattered across messy Google Drive folders and endless back-and-forth email chains.",
    solution: "Constructed a centralized client portal in GHL with progress checklists, secure file upload fields, and onboarding video guides.",
    workflow: [
      "Client completes onboarding payment",
      "Automated welcome email delivers secure portal login credentials",
      "Client completes step-by-step checklist (Brand assets, social logins, target audience)",
      "Each uploaded asset triggers automated verification task for account manager",
      "Onboarding kickoff call automatically unlocked once all assets are received"
    ],
    tools: ["GHL Client Portal", "Secure File Uploads", "Progress Checklists", "Account Tasks"],
    results: "Cut client kickoff lag from 14 days down to 48 hours; client satisfaction score reached 98%.",
    metrics: [
      { label: "Kickoff Time", value: "48 hours" },
      { label: "Asset Drop Rate", value: "0%" },
      { label: "Client CSAT", value: "98%" }
    ]
  },
  {
    id: "ghl-mobile-005",
    title: "Responsive Mobile CRM Layout & Lead Triage",
    category: "gohighlevel",
    categoryLabel: "GoHighLevel CRM",
    client: "Field Sales & Solar Installation Team",
    industry: "Field Sales & Construction",
    image: "./assets/projects/005.jpg",
    overview: "Custom-configured mobile CRM workspace optimized for on-the-go solar sales reps conducting in-home consultations.",
    challenge: "Field sales reps found desktop CRM interfaces cumbersome on mobile devices while meeting homeowners.",
    solution: "Customized GHL mobile layout with quick-tap opportunity stage updates, one-touch calling, and instant proposal generation.",
    workflow: [
      "Field rep arrives at homeowner address",
      "One tap opens homeowner notes, utility bill uploads, and solar roof map",
      "Rep taps 'Demo Completed' advancing pipeline stage in real time",
      "One tap triggers DocuSign proposal directly to homeowner tablet",
      "Deal signature updates company dashboard and dispatches engineering survey team"
    ],
    tools: ["GHL Mobile App", "Quick Action Workflows", "Field Layouts", "Instant Signatures"],
    results: "Increased daily rep quote output by 65%; eliminated all post-meeting evening data entry.",
    metrics: [
      { label: "Quote Output", value: "+65%" },
      { label: "Evening Admin", value: "0 hours" },
      { label: "Mobile Speed", value: "Instant" }
    ]
  },
  {
    id: "ghl-enterprise-overview",
    title: "Enterprise GHL Infrastructure & Systems Overview",
    category: "gohighlevel",
    categoryLabel: "GoHighLevel CRM",
    client: "High-Growth SaaS & Agency Network",
    industry: "Enterprise Technology",
    image: "./assets/projects/67a5e2f94bbd7d08714fd58a_Overview.png",
    overview: "Holistic architectural diagram and systems blueprint integrating CRM, pipelines, telephony, and marketing automation.",
    challenge: "Fragmented legacy systems resulted in data silos between marketing, sales reps, and customer success teams.",
    solution: "Architected a unified enterprise ecosystem blueprint linking all customer touchpoints into a centralized GoHighLevel CRM core.",
    workflow: [
      "Inbound traffic channeled through verified high-speed funnels",
      "Leads authenticated and scrubbed against national compliance registries",
      "Opportunity pipeline coordinates automated follow-up and sales rep routing",
      "Stripe and QuickBooks APIs ensure 100% financial and invoice synchronization",
      "Executive BI dashboards pull unified reporting data for strategic planning"
    ],
    tools: ["GoHighLevel Enterprise", "API Gateways", "Data Warehousing", "Architecture Schemas"],
    results: "Scalable architecture processing over 10,000 monthly leads with 99.98% pipeline uptime.",
    metrics: [
      { label: "Monthly Leads", value: "10,000+" },
      { label: "System Uptime", value: "99.98%" },
      { label: "Data Silos", value: "Eliminated" }
    ]
  },

  // ==========================================
  // 2. N8N WORKFLOW AUTOMATION (7 Items)
  // ==========================================
  {
    id: "n8n-webhook-orchestrator",
    title: "n8n Multi-Branch Webhook & Event Orchestrator",
    category: "n8n",
    categoryLabel: "n8n Workflows",
    client: "Digital Operations & Logistics Firm",
    industry: "Logistics & E-Commerce",
    image: "./assets/projects/n8n worflow image.jpg",
    overview: "Self-hosted n8n pipeline orchestrating multi-system order-to-fulfillment tracking, inventory checks, and team alerts.",
    challenge: "Operations staff spent 35+ hours every week manually copying order data from customer intake portals into CRM and accounting spreadsheets.",
    solution: "Constructed an event-driven n8n workflow canvas connecting webhooks, parsing complex nested JSON, updating PostgreSQL records, and notifying warehouse dispatch in Slack.",
    workflow: [
      "Order created in e-commerce checkout triggers live webhook",
      "n8n node validates signature and checks stock levels via database query",
      "Conditional if/else branch routes order to nearest warehouse location",
      "GoHighLevel contact updated with order tracking metadata",
      "Automated Slack alert broadcast to warehouse fulfillment channel",
      "Error handling node captures any API timeouts and triggers retry loop"
    ],
    tools: ["n8n", "PostgreSQL", "JavaScript", "Slack Webhooks", "REST APIs"],
    results: "Automated 100% of order processing, saving 35+ hours of manual labor per week with zero dropped data records.",
    metrics: [
      { label: "Time Saved", value: "35h/wk" },
      { label: "Dropped Records", value: "0" },
      { label: "Execution Time", value: "<850ms" }
    ]
  },
  {
    id: "n8n-workflow-port",
    title: "Event-Driven PostgreSQL & CRM Database Sync",
    category: "n8n",
    categoryLabel: "n8n Workflows",
    client: "Fintech Platform & Payment Gateway",
    industry: "Fintech & Financial Software",
    image: "./assets/projects/n8n workflow port.jpg",
    overview: "Real-time bidirectional synchronization pipeline linking self-hosted PostgreSQL database to GoHighLevel contacts.",
    challenge: "Customer payment statuses in PostgreSQL were out of sync with CRM records, resulting in mistaken payment reminder calls.",
    solution: "Built a high-throughput event listener in n8n polling database change streams and synchronizing CRM stages within 850 milliseconds.",
    workflow: [
      "PostgreSQL change data capture (CDC) emits transaction event",
      "n8n validates payload integrity and decrypts sensitive identifiers",
      "GHL contact API queried by customer email",
      "Opportunity stage updated to 'Settled' with exact transaction ID",
      "Audit log record appended to administrative monitoring database"
    ],
    tools: ["n8n", "PostgreSQL", "GHL REST API", "Docker", "Node.js"],
    results: "Achieved sub-second data synchronization across 50,000+ monthly financial records.",
    metrics: [
      { label: "Sync Latency", value: "<850ms" },
      { label: "Monthly Records", value: "50,000+" },
      { label: "Error Rate", value: "0.001%" }
    ]
  },
  {
    id: "n8n-port-p1",
    title: "Complex JSON ETL & API Data Normalizer",
    category: "n8n",
    categoryLabel: "n8n Workflows",
    client: "Multi-Store Global E-Commerce Group",
    industry: "Retail & Multi-Channel E-Commerce",
    image: "./assets/projects/port n8n p1.jpg",
    overview: "Custom JSON parsing, flattening, and data normalization workflow mapping 15 external vendor feeds into uniform CRM records.",
    challenge: "15 third-party vendors supplied product inventory in conflicting XML, CSV, and deeply nested JSON formats.",
    solution: "Constructed an automated ETL pipeline in n8n that parses incoming data feeds, extracts normalized schema attributes, and updates warehouse inventory.",
    workflow: [
      "Scheduled cron trigger fetches product feeds every 15 minutes",
      "Function node flattens deep nested JSON objects into standard key-value pairs",
      "Data sanitation node strips non-standard characters and formats SKU strings",
      "Batching node uploads records in 50-item chunks avoiding API rate limits",
      "Summary report sent to Slack channel outlining processed SKUs"
    ],
    tools: ["n8n", "JavaScript Code Nodes", "JSON ETL", "Rate Limiters"],
    results: "Processed 15,000 daily inventory updates with 100% data uniformity.",
    metrics: [
      { label: "Daily SKUs", value: "15,000" },
      { label: "Feeds Unified", value: "15 Vendors" },
      { label: "Data Errors", value: "0" }
    ]
  },
  {
    id: "n8n-port-p2",
    title: "Automated Error Handling & Dead-Letter Queue",
    category: "n8n",
    categoryLabel: "n8n Workflows",
    client: "B2B SaaS Growth Operations",
    industry: "Software & Technology",
    image: "./assets/projects/port n8n p2.jpg",
    overview: "Enterprise fail-safe automation architecture with automated error interception, retries, and dead-letter queue recovery.",
    challenge: "Occasional third-party API rate limits caused webhook executions to fail silently, dropping valuable customer demo requests.",
    solution: "Engineered a persistent dead-letter queue in n8n with exponential backoff retry algorithms and instant Telegram alerts for unrecoverable errors.",
    workflow: [
      "Incoming webhook execution triggers error-catcher sub-node on any 4xx/5xx failure",
      "Failed payload stored securely in temporary Redis queue",
      "Exponential backoff retry attempts delivery at 1m, 5m, 15m intervals",
      "If 3 retries fail, high-priority alert broadcast to engineer Telegram/Slack",
      "One-click manual replay button provided for instant recovery"
    ],
    tools: ["n8n Error Trigger", "Redis Queue", "Telegram Bot API", "Slack Webhooks"],
    results: "Eliminated 100% of silent webhook failures; recovered 142 high-value enterprise leads over 6 months.",
    metrics: [
      { label: "Dropped Leads", value: "0" },
      { label: "Recovered Leads", value: "142 Deals" },
      { label: "Uptime", value: "99.99%" }
    ]
  },
  {
    id: "n8n-port-p3",
    title: "Multi-Platform Order Fulfillment Webhook Canvas",
    category: "n8n",
    categoryLabel: "n8n Workflows",
    client: "Supply Chain & On-Demand Dispatch",
    industry: "Manufacturing & Distribution",
    image: "./assets/projects/port n8n p3.jpg",
    overview: "Event-driven supply chain workflow synchronizing warehouse inventory, order printing, and automated delivery tracking.",
    challenge: "Orders placed on web portals required manual copy-pasting to shipping carriers, causing 24-hour fulfillment delays.",
    solution: "Architected a webhook workflow that generates shipping labels via Shippo API, updates warehouse packing queues, and notifies customers via SMS.",
    workflow: [
      "Order created on web portal",
      "n8n generates commercial shipping label with tracking code via carrier API",
      "Thermal printer trigger prints packaging slip in fulfillment center",
      "Tracking number linked to GoHighLevel customer order record",
      "Customer receives SMS with live package tracking link"
    ],
    tools: ["n8n", "Shippo API", "PrintNode API", "Twilio SMS", "GoHighLevel"],
    results: "Cut order fulfillment turnaround from 24 hours down to under 15 minutes.",
    metrics: [
      { label: "Fulfillment Lag", value: "24h → 15m" },
      { label: "Tracking Sync", value: "100% Auto" },
      { label: "Label Accuracy", value: "100%" }
    ]
  },
  {
    id: "n8n-port-new",
    title: "Custom API Endpoint & Token Refresh Middleware",
    category: "n8n",
    categoryLabel: "n8n Workflows",
    client: "Cloud Infrastructure & SaaS Operations",
    industry: "Cloud & DevSecOps",
    image: "./assets/projects/port new.jpg",
    overview: "OAuth2 automated token refresh middleware ensuring continuous uninterrupted API connectivity between legacy tools.",
    challenge: "External third-party API tokens expired every 60 minutes, repeatedly breaking zap automations and stalling data flow.",
    solution: "Constructed an automated token keeper in n8n that monitors token expiration timestamps and executes OAuth refresh handshakes automatically.",
    workflow: [
      "Scheduled check triggers 10 minutes prior to token expiration",
      "n8n sends authenticated POST request with refresh token credentials",
      "New bearer token parsed and updated in centralized environment variable store",
      "All active workflows read updated bearer token dynamically",
      "Failure alerts dispatched to engineering team in case of revoked grants"
    ],
    tools: ["n8n", "OAuth2 Protocol", "Environment Secrets", "REST APIs"],
    results: "Achieved 99.98% continuous API availability without a single manual re-authentication event in 12 months.",
    metrics: [
      { label: "API Availability", value: "99.98%" },
      { label: "Token Refresh", value: "100% Auto" },
      { label: "Manual Interventions", value: "0" }
    ]
  },
  {
    id: "n8n-workflow-png",
    title: "Complete End-to-End Enterprise Automation Blueprint",
    category: "n8n",
    categoryLabel: "n8n Workflows",
    client: "Global Systems Integration Agency",
    industry: "Enterprise IT & Systems Integration",
    image: "./assets/projects/work-flow.png",
    overview: "Master workflow architecture schema coordinating lead capture, CRM pipeline transitions, invoicing, and telephony handoffs.",
    challenge: "Corporate client had twelve disparate business applications operating in isolation with zero unified data flow.",
    solution: "Designed and engineered an overarching master integration architecture connecting all tools into a synchronized operations engine.",
    workflow: [
      "Multi-channel lead ingestion (Meta, Google, Inbound Calls, Cold Email)",
      "Central validation and deduplication layer in n8n",
      "GHL CRM opportunity pipeline stage orchestration",
      "Accounting settlement trigger linking QuickBooks and Stripe",
      "Fulfillment handoff to operations and project management channels"
    ],
    tools: ["n8n Canvas", "GoHighLevel", "Twilio", "Stripe", "QuickBooks", "Slack"],
    results: "Unified 12 enterprise tools into a synchronized operations engine, reducing operating overhead by $4,500/month.",
    metrics: [
      { label: "Connected Apps", value: "12 Tools" },
      { label: "Monthly Savings", value: "$4,500" },
      { label: "Pipeline Errors", value: "0" }
    ]
  },

  // ==========================================
  // 3. ZAPIER & INTEGRATIONS (11 Items)
  // ==========================================
  {
    id: "zap-stripe-crm",
    title: "Zapier Stripe Webhook to CRM Opportunity Pipeline",
    category: "zapier",
    categoryLabel: "Zapier Automation",
    client: "SaaS Subscription Business",
    industry: "B2B SaaS & Memberships",
    image: "./assets/projects/zap.2.jpg",
    overview: "Real-time Stripe webhook integration that creates or updates CRM opportunities whenever a new subscription is started or upgraded.",
    challenge: "Subscription upgrades and cancellations inside Stripe were not reflected in CRM pipelines, leading to inaccurate customer records.",
    solution: "Engineered a multi-action Zapier workflow that parses Stripe invoice customer tokens and dynamically updates GHL deal stages.",
    workflow: [
      "Stripe 'customer.subscription.created' event emits live webhook",
      "Zapier Formatter extracts customer metadata and plan tier",
      "CRM queried for existing contact; created if new",
      "Deal moved to 'Active Subscriber' stage with lifetime value updated",
      "Automated welcome email with login credentials triggered"
    ],
    tools: ["Zapier", "Stripe Webhooks", "GoHighLevel API", "Formatter by Zapier"],
    results: "Automated 100% of subscription pipeline updates with zero manual intervention across 1,200 monthly subscribers.",
    metrics: [
      { label: "Subscribers Synced", value: "1,200/mo" },
      { label: "Manual Entry", value: "0 hours" },
      { label: "Sync Speed", value: "<4s" }
    ]
  },
  {
    id: "zap-enrichment",
    title: "Multi-Step Lead Enrichment via Clearbit & Apollo",
    category: "zapier",
    categoryLabel: "Zapier Automation",
    client: "B2B Outbound Agency",
    industry: "Lead Generation & Outbound",
    image: "./assets/projects/zap.3.jpg",
    overview: "Automated data enrichment Zap appending company size, industry, revenue, and LinkedIn URLs to newly captured email addresses.",
    challenge: "Inbound leads only provided an email address; sales reps spent 10 minutes per lead researching company details before calling.",
    solution: "Created an automated enrichment sequence in Zapier pulling verified company attributes from Apollo and Clearbit APIs within 5 seconds.",
    workflow: [
      "New lead submits business email on consultation form",
      "Zapier passes domain to enrichment API endpoint",
      "Company revenue, headcount, industry, and executive title retrieved",
      "Enriched fields populated directly into GoHighLevel custom contact fields",
      "Lead scoring formula assigns priority score for immediate sales rep triage"
    ],
    tools: ["Zapier", "Apollo.io API", "Clearbit", "GoHighLevel"],
    results: "Saved sales reps 10 minutes per lead; increased same-day call connection rate by 42%.",
    metrics: [
      { label: "Rep Time Saved", value: "10m/lead" },
      { label: "Enrichment Match", value: "96%" },
      { label: "Connection Surge", value: "+42%" }
    ]
  },
  {
    id: "zap-contract-docusign",
    title: "Automated Contract Generation & DocuSign Dispatch",
    category: "zapier",
    categoryLabel: "Zapier Automation",
    client: "B2B Legal & Consulting Firm",
    industry: "Professional Services",
    image: "./assets/projects/zap.4.jpg",
    overview: "Zero-touch contract generation Zap that creates custom service agreements in DocuSign when deals reach 'Proposal Accepted'.",
    challenge: "Account managers spent up to 45 minutes manually preparing and emailing customized contract PDFs for every new client.",
    solution: "Constructed an automated Zapier workflow pulling contract scope, pricing, and client details directly from CRM into DocuSign templates.",
    workflow: [
      "Deal moved to 'Contract Requested' in GoHighLevel pipeline",
      "Zapier formats client legal name, company address, and retainer fee",
      "DocuSign template pre-filled and dispatched to client CEO for e-signature",
      "Slack notification alerts account manager that agreement has been delivered",
      "Signed agreement automatically archived in client Google Drive folder"
    ],
    tools: ["Zapier", "DocuSign API", "Google Drive", "GoHighLevel"],
    results: "Reduced contract delivery time from 45 minutes to 30 seconds; 80% signed within 4 hours.",
    metrics: [
      { label: "Delivery Time", value: "<30s" },
      { label: "4h Sign Rate", value: "80%" },
      { label: "Typo Errors", value: "0" }
    ]
  },
  {
    id: "zap-quickbooks-sync",
    title: "QuickBooks Invoice Sync & Accounting Handoff",
    category: "zapier",
    categoryLabel: "Zapier Automation",
    client: "Industrial Equipment & Wholesale Distributor",
    industry: "Manufacturing & Wholesale",
    image: "./assets/projects/zap.5.jpg",
    overview: "Bidirectional sync linking CRM closed deals directly to QuickBooks Online invoices, customer accounts, and tax categories.",
    challenge: "Accounting staff re-entered closed deals into QuickBooks every week, resulting in billing errors and reconciliation delays.",
    solution: "Built a robust Zapier integration mapping CRM opportunity line items directly into QuickBooks invoices with automatic tax calculation.",
    workflow: [
      "Sales rep marks deal 'Closed Won' in GoHighLevel",
      "Zapier searches QuickBooks for existing customer profile by Tax ID/email",
      "Customer created or updated in QuickBooks Online",
      "Line-item invoice generated with payment terms and dispatched to accounting",
      "Invoice number and PDF link written back to CRM deal record"
    ],
    tools: ["Zapier", "QuickBooks Online", "GoHighLevel", "Tax Rate Calculators"],
    results: "Eliminated 100% of duplicate accounting entries; reduced invoicing turnaround by 5 days.",
    metrics: [
      { label: "Duplicate Entries", value: "0" },
      { label: "Turnaround Cut", value: "5 Days" },
      { label: "Invoice Accuracy", value: "100%" }
    ]
  },
  {
    id: "zap-slack-alerts",
    title: "Slack Notification Router & Real-Time Deal Alerts",
    category: "zapier",
    categoryLabel: "Zapier Automation",
    client: "High-Ticket Enterprise Sales Organization",
    industry: "Enterprise B2B Software",
    image: "./assets/projects/zap.6.jpg",
    overview: "Dynamic Slack notification hub that routes high-priority lead notifications, demo alerts, and deal wins to specific rep channels.",
    challenge: "Sales reps missed critical inbound lead notifications buried in cluttered email inboxes, delaying urgent follow-ups.",
    solution: "Engineered a conditional Slack notification router in Zapier that posts rich interactive cards into dedicated sales Slack channels.",
    workflow: [
      "High-value lead submits enterprise demo request form",
      "Zapier formats prospect company details, revenue, and pain points",
      "Rich block-kit Slack message posted to '#enterprise-leads' channel",
      "Direct phone number and CRM link provided for immediate 1-click calling",
      "Assigned sales rep reacts with ':call:' emoji to claim the lead"
    ],
    tools: ["Zapier", "Slack API", "Block Kit Builder", "GoHighLevel"],
    results: "Cut internal lead claiming time from 40 minutes to under 2 minutes; energized team sales culture.",
    metrics: [
      { label: "Claim Time", value: "<2m" },
      { label: "Response Speed", value: "+300%" },
      { label: "Channel Alerts", value: "Instant" }
    ]
  },
  {
    id: "zap-support-tasks",
    title: "Customer Support Ticket to GHL Task Assignment",
    category: "zapier",
    categoryLabel: "Zapier Automation",
    client: "Customer Success & Tech Support Agency",
    industry: "Support & Customer Success",
    image: "./assets/projects/zap.7.jpg",
    overview: "Automated workflow converting Zendesk and email support tickets into organized CRM tasks with priority deadlines.",
    challenge: "Support requests submitted via email fell through the cracks because reps lacked centralized task accountability.",
    solution: "Created an automated ticket-to-task Zap that creates CRM tasks assigned to account owners with 4-hour SLA timers.",
    workflow: [
      "Customer submits support inquiry via email or web portal",
      "Zapier extracts customer record and identifies assigned account manager",
      "GHL task created with urgent priority flag and description of issue",
      "SMS notification sent to account manager's mobile phone",
      "Task automatically marked completed when customer receives response"
    ],
    tools: ["Zapier", "Zendesk API", "GoHighLevel Tasks", "Twilio SMS"],
    results: "Reduced average support resolution time by 40%; eliminated 100% of forgotten support inquiries.",
    metrics: [
      { label: "Resolution Time", value: "-40%" },
      { label: "Forgotten Tickets", value: "0" },
      { label: "SLA Adherence", value: "98.5%" }
    ]
  },
  {
    id: "zap-data-cleaning",
    title: "Multi-Branch Form Formatter & Data Cleaning Zap",
    category: "zapier",
    categoryLabel: "Zapier Automation",
    client: "Commercial Insurance Brokerage",
    industry: "Insurance & Financial Services",
    image: "./assets/projects/zap.8.jpg",
    overview: "Data cleaning and standardization pipeline formatting phone numbers, capitalized names, and addresses before CRM storage.",
    challenge: "Leads submitted names in lowercase, malformed phone numbers without country codes, and incorrect address formats.",
    solution: "Built a multi-step Formatter Zap that validates phone numbers against E.164 standard, capitalizes proper names, and parses postal codes.",
    workflow: [
      "Inbound lead submitted from external advertising landing page",
      "Zapier Formatter converts names to title case (e.g. 'john' -> 'John')",
      "Phone numbers formatted to standard E.164 format (+1XXXXXXXXXX)",
      "State and zip code validated against US Postal Service database",
      "Cleaned, verified record stored in GoHighLevel with high data hygiene score"
    ],
    tools: ["Zapier Formatter", "Regex Operations", "Phone Standardization", "GHL"],
    results: "Cleaned and standardized 10,000+ incoming contact records, eliminating phone dialing errors completely.",
    metrics: [
      { label: "Records Cleaned", value: "10,000+" },
      { label: "Dialing Errors", value: "0" },
      { label: "Format Standard", value: "E.164" }
    ]
  },
  {
    id: "zap-sheets-reporting",
    title: "Google Sheets Real-Time Reporting & Pivot Automation",
    category: "zapier",
    categoryLabel: "Zapier Automation",
    client: "Performance Marketing Agency",
    industry: "Advertising & Marketing",
    image: "./assets/projects/zap.9.jpg",
    overview: "Live data sync writing marketing leads, ad attribution UTMs, and contract values into structured Google Sheets for client reporting.",
    challenge: "Clients demanded real-time Google Sheets dashboards, requiring agency account managers to spend hours on daily data entry.",
    solution: "Constructed an automated Zapier integration that appends every qualified lead and deal value into client master reporting spreadsheets.",
    workflow: [
      "New qualified lead created in GoHighLevel",
      "Zapier captures UTM parameters, lead score, and assigned salesperson",
      "Row appended to client Google Sheets master tracking tab in <3s",
      "Automated pivot formulas update daily cost-per-lead and conversion charts",
      "Client accesses transparent, real-time reporting without asking for updates"
    ],
    tools: ["Zapier", "Google Sheets API", "UTM Tracking", "Formula Automation"],
    results: "Saved 20 hours of manual spreadsheet reporting weekly across 15 agency clients.",
    metrics: [
      { label: "Time Saved", value: "20h/wk" },
      { label: "Sheets Updated", value: "Realtime" },
      { label: "Data Delay", value: "<3s" }
    ]
  },
  {
    id: "zap-webinar-triage",
    title: "Automated Webinar Attendee Triage & Replay Sequence",
    category: "zapier",
    categoryLabel: "Zapier Automation",
    client: "Online Education & Mastermind Host",
    industry: "Digital Media & Events",
    image: "./assets/projects/zap.10.jpg",
    overview: "Event automation Zap that tracks Zoom webinar attendance duration and segments attendees from no-shows for targeted follow-up.",
    challenge: "Webinar hosts treated all registrants the same after events, missing the chance to close high-intent attendees who stayed until the pitch.",
    solution: "Engineered a Zoom-to-GHL Zapier workflow tracking minute-by-minute attendance duration and triggering tailored post-webinar offers.",
    workflow: [
      "Zoom Webinar finishes; attendee log emitted via webhook",
      "Zapier segments users: 'Attended 45m+', 'Left Early (<15m)', and 'No-Show'",
      "High-intent attendees receive direct booking link for private consultation",
      "No-shows receive 24h replay link with automated expiration countdown",
      "CRM opportunity stage updated based on actual webinar engagement"
    ],
    tools: ["Zapier", "Zoom API", "GoHighLevel Workflows", "Time Calculation Nodes"],
    results: "Increased post-webinar sales conversion by 32%; booked 44 consultation calls from high-intent attendees.",
    metrics: [
      { label: "Sales Surge", value: "+32%" },
      { label: "Consults Booked", value: "44 Calls" },
      { label: "Attendance Sync", value: "100% Auto" }
    ]
  },
  {
    id: "zap-enterprise-suite",
    title: "Zapier Enterprise Folder Structure & Workflow Suite",
    category: "zapier",
    categoryLabel: "Zapier Automation",
    client: "Growth Operations Consultancy",
    industry: "Operations & Systems Architecture",
    image: "./assets/projects/zaps.jpg",
    overview: "Master Zapier workspace architecture organizing 50+ enterprise automations into structured folders with error monitors.",
    challenge: "Disorganized Zaps created duplicate executions, conflicting triggers, and hard-to-diagnose operational errors.",
    solution: "Restructured the entire Zapier workspace with standardized naming conventions, folder hierarchies, and centralized shared connections.",
    workflow: [
      "Folder separation by operational department (Sales, Fulfillment, Finance, Support)",
      "Standardized nomenclature: '[SYSTEM] Event -> Target Action'",
      "Centralized OAuth connections with role-based access management",
      "Automated Zapier error alerts routed to dedicated operations channel",
      "Quarterly audit checklist implemented to prune inactive workflows"
    ],
    tools: ["Zapier Enterprise", "Folder Governance", "OAuth Connections", "Error Monitoring"],
    results: "Brought order to 50+ business Zaps; reduced Zapier task consumption by 35% through filter optimization.",
    metrics: [
      { label: "Zaps Governed", value: "50+ Active" },
      { label: "Task Usage Cut", value: "-35%" },
      { label: "Folder Uptime", value: "99.9%" }
    ]
  },
  {
    id: "zap-ecosystem-suite-1",
    title: "Multi-App Automated Operations Ecosystem",
    category: "zapier",
    categoryLabel: "Zapier Automation",
    client: "Global Business Consultancy",
    industry: "Management Consulting",
    image: "./assets/projects/zaps.1.jpg",
    overview: "Comprehensive integration suite connecting CRM, calendars, cloud storage, payment processors, and client communication.",
    challenge: "Consulting partners lost hours switching between eight software tools with manual data duplication across platforms.",
    solution: "Designed an integrated operations hub connecting Stripe, GoHighLevel, Google Workspace, and Slack with automated error safeguards.",
    workflow: [
      "Client onboarded in Stripe automatically triggers GHL contact creation",
      "Dedicated Google Drive client folder generated with standard sub-folders",
      "Automated Slack channel created with welcome notification to account team",
      "Calendar scheduling link dispatched with pre-populated client parameters",
      "All operational milestones logged automatically in executive tracking sheet"
    ],
    tools: ["Zapier", "Stripe", "GoHighLevel", "Google Workspace", "Slack API"],
    results: "Reduced client onboarding administration by 85%; achieved 99.9% integration reliability.",
    metrics: [
      { label: "Admin Cut", value: "-85%" },
      { label: "Reliability", value: "99.9%" },
      { label: "Tools Unified", value: "8 Apps" }
    ]
  },

  // ==========================================
  // 4. COLD OUTBOUND & INSTANTLY (3 Items)
  // ==========================================
  {
    id: "cold-outbound-instantly",
    title: "Instantly.ai Multi-Domain Outbound Response Engine",
    category: "cold-email",
    categoryLabel: "Cold Email Outbound",
    client: "B2B SaaS & Growth Consultancy",
    industry: "Software & Technology",
    image: "./assets/projects/instantly 2026 response screensort.jpg",
    overview: "Construction of a 30-domain cold email acquisition infrastructure delivering 30,000+ outreach emails monthly with zero primary domain risk.",
    challenge: "The client's main domain had been flagged by Spamhaus due to prior unauthenticated mass mailings, halting corporate sales emails completely.",
    solution: "Provisioned 30 secondary Google Workspace domains, established 2048-bit DKIM, SPF, DMARC, and custom tracking subdomains, and initiated a strict 21-day algorithmic warmup ramp before launching ICP-targeted campaigns.",
    workflow: [
      "Secondary domains configured with isolated Google Workspace tenants",
      "DNS authentication verified (SPF, DKIM, DMARC, CNAME tracking)",
      "Automated 21-day ramp-up on Instantly.ai with 70% reply simulation",
      "B2B prospect lists enriched via Apollo and scrubbed through MillionVerifier",
      "Multi-touch sequences sent with spintax personalization and custom fields",
      "Positive replies automatically classified and piped into GHL CRM"
    ],
    tools: ["Instantly.ai", "MillionVerifier", "Google Workspace", "Apollo.io", "GoHighLevel"],
    results: "Achieved 99.4% inbox placement, a 62.4% open rate, and generated 14+ qualified enterprise discovery calls within 30 days.",
    metrics: [
      { label: "Inbox Placement", value: "99.4%" },
      { label: "Open Rate", value: "62.4%" },
      { label: "Qualified Calls", value: "14 Booked" }
    ]
  },
  {
    id: "cold-update-2026",
    title: "2026 Deliverability & Algorithmic Warmup Protocol",
    category: "cold-email",
    categoryLabel: "Cold Email Outbound",
    client: "B2B Outbound Growth Agency",
    industry: "Outbound Marketing & Lead Generation",
    image: "./assets/projects/instantly 2026 update screenshort.jpg",
    overview: "2026 Google & Yahoo compliant sending infrastructure with dynamic mailbox rotation, automated ramp-up, and spam rate guardrails.",
    challenge: "New Google & Yahoo bulk sender requirements enforced strict 0.3% spam thresholds, blocking unprepared outbound sales teams.",
    solution: "Configured Google Workspace secondary domains with strict DMARC enforcement (p=reject), custom tracking domains, and daily volume throttles.",
    workflow: [
      "Domain DNS authenticated with custom MX, SPF (include:_spf.google.com), and DKIM",
      "DMARC record published with strict rua reporting to monitor spoofing attempts",
      "Sending limits capped at a safe 30 emails per inbox per day with random delays",
      "Real-time mailbox health checks monitor spam rates below 0.1%",
      "Positive reply notifications sent instantly to account executive via SMS"
    ],
    tools: ["Instantly.ai", "Google Workspace Admin", "DNS Manager", "DMARC Analyzer"],
    results: "Maintained sub-0.05% spam complaint rates across 25 corporate mailboxes; zero domain blacklisting.",
    metrics: [
      { label: "Spam Rate", value: "<0.05%" },
      { label: "Mailboxes Active", value: "25 Inboxes" },
      { label: "Daily Safe Limit", value: "30/inbox" }
    ]
  },
  {
    id: "cold-mailbox-ss",
    title: "30-Domain Mailbox Rotation & 99.4% Inbox Analytics",
    category: "cold-email",
    categoryLabel: "Cold Email Outbound",
    client: "Enterprise Outbound Lead Generation Firm",
    industry: "Enterprise Sales",
    image: "./assets/projects/instantly ss.jpg",
    overview: "High-volume distributed outbound engine using multi-inbox rotation and AI-driven reply classification.",
    challenge: "Sending 50,000 monthly outreach emails from a single domain damaged reputation and triggered severe spam filtering.",
    solution: "Distributed sending load across 30 dedicated secondary domains with algorithmic rotation and centralized Unibox triage.",
    workflow: [
      "Prospect batch split dynamically across 30 verified sender inboxes",
      "ESP matching routes Google-to-Google and Microsoft-to-Microsoft for optimal deliverability",
      "Unibox centralizes all replies in a single dashboard for rapid response",
      "AI reply classification tags responses as 'Interested', 'Not Now', or 'Unsubscribe'",
      "Interested prospects automatically pushed to GoHighLevel appointment pipeline"
    ],
    tools: ["Instantly.ai", "MillionVerifier", "Apollo.io", "GoHighLevel"],
    results: "Generated 38 qualified enterprise sales meetings in 60 days; delivered 99.4% average inbox placement.",
    metrics: [
      { label: "Meetings Booked", value: "38 Calls" },
      { label: "Inbox Placement", value: "99.4%" },
      { label: "Domains Rotated", value: "30 Domains" }
    ]
  },

  // ==========================================
  // 5. AI VOICE & TELEPHONY (4 Items)
  // ==========================================
  {
    id: "ai-a2p-10dlc",
    title: "A2P 10DLC Carrier Messaging Compliance & TCR Approval",
    category: "ai-voice",
    categoryLabel: "AI & Telephony",
    client: "Multi-Location Property Management Firm",
    industry: "Real Estate & Leasing",
    image: "./assets/projects/a2p-10dlc.png",
    overview: "Enterprise A2P 10DLC brand registration, TCR compliance, and carrier approval setup across 15 sub-accounts.",
    challenge: "All tenant appointment reminders and maintenance SMS alerts were being blocked by US tier-1 carriers due to missing A2P 10DLC campaign registration.",
    solution: "Audited existing messaging flows, implemented compliant double opt-in disclosures on web intake forms, authored TCR-compliant campaign descriptions, and secured direct carrier approvals.",
    workflow: [
      "Legal entity EIN and address verification filed with TCR",
      "Web intake forms updated with explicit carrier consent disclosures",
      "Campaign use cases authored with mandatory HELP & STOP keyword logic",
      "Twilio messaging service linked with dedicated 10-digit long code numbers",
      "Carrier vetting completed with 100% approval across all major US networks",
      "Automated daily message delivery rate reporting configured in GHL"
    ],
    tools: ["Twilio", "The Campaign Registry (TCR)", "GoHighLevel", "DNS"],
    results: "Restored 100% SMS deliverability with zero message drop-offs across 20,000+ monthly notifications.",
    metrics: [
      { label: "Delivery Rate", value: "100%" },
      { label: "Carrier Approval", value: "Verified" },
      { label: "Monthly SMS", value: "20,000+" }
    ]
  },
  {
    id: "ai-call-agent-vapi",
    title: "VAPI Telephony Conversational Voice Inbound Agent",
    category: "ai-voice",
    categoryLabel: "AI & Telephony",
    client: "High-Ticket Medical Aesthetics Clinic",
    industry: "Healthcare & Aesthetics",
    image: "./assets/projects/ai-call-agent.png",
    overview: "Autonomous VAPI telephony voice agent answering incoming inquiries and qualifying treatment candidacy 24/7.",
    challenge: "The clinic's front-desk staff was overwhelmed during peak hours, missing up to 35% of inbound consultation calls after 5:00 PM.",
    solution: "Engineered a low-latency conversational AI voice agent running on VAPI with telephony webhook triggers, natural speech synthesis, and real-time calendar booking function calling.",
    workflow: [
      "Inbound patient call connects to virtual Twilio number",
      "VAPI conversational agent initiates conversational triage in <2s",
      "Agent answers clinic FAQs regarding treatments, pricing, and downtime",
      "Agent checks calendar availability via API and books consultation slot",
      "Call audio transcribed, summarized, and mapped to GHL patient contact",
      "Automated SMS booking confirmation dispatched to patient instantly"
    ],
    tools: ["VAPI", "Twilio", "OpenAI", "GoHighLevel", "n8n"],
    results: "Zero missed inbound calls; captured 47 additional consultation bookings in month one alone.",
    metrics: [
      { label: "Call Latency", value: "<2.4s" },
      { label: "Missed Call Drop", value: "100%" },
      { label: "Added Bookings", value: "+47/mo" }
    ]
  },
  {
    id: "ai-agent-qualification",
    title: "Autonomous AI Qualification & Scheduling Assistant",
    category: "ai-voice",
    categoryLabel: "AI & Telephony",
    client: "High-Ticket Business Coaching Group",
    industry: "Executive Consulting",
    image: "./assets/projects/ai-agent.png",
    overview: "Interactive AI assistant conducting real-time qualification conversations on website chat and SMS channels.",
    challenge: "Consulting prospects requested callback times at all hours of the night when sales staff were offline.",
    solution: "Deployed an intelligent AI qualification agent that handles real-time conversational triage, answers objection queries, and books appointments.",
    workflow: [
      "Visitor initiates chat on website or replies to SMS campaign",
      "AI assistant analyzes intent using OpenAI GPT-4o function calling",
      "Agent asks 3 qualifying questions regarding monthly revenue and business model",
      "Qualified prospects offered direct calendar slots on executive calendar",
      "Complete conversation transcript and sentiment analysis pushed to CRM"
    ],
    tools: ["OpenAI API", "GoHighLevel AI Bot", "Twilio SMS", "Function Calling"],
    results: "Captured 34 after-hours appointments in first 30 days without human staff intervention.",
    metrics: [
      { label: "After-Hours Calls", value: "+34 Booked" },
      { label: "Response Latency", value: "<2.2s" },
      { label: "Qualification Accuracy", value: "95%" }
    ]
  },
  {
    id: "ai-solution-architecture",
    title: "Full-Stack AI Customer Service & Voice Architecture",
    category: "ai-voice",
    categoryLabel: "AI & Telephony",
    client: "Commercial Equipment Rental Co.",
    industry: "Equipment & Commercial Rentals",
    image: "./assets/projects/ai-sultion.png",
    overview: "Unified conversational AI architecture connecting telephone voice bots, web chat, and GHL CRM automation.",
    challenge: "Rental inquiries flooded in via phone, SMS, and website, causing 2-hour quote delays and lost contractor rentals.",
    solution: "Designed a multi-channel AI system providing instant equipment availability, pricing quotes, and rental reservation booking.",
    workflow: [
      "Inbound inquiry arrives via phone call or web chat",
      "AI engine queries real-time equipment database for machinery availability",
      "Accurate pricing quote calculated including delivery distance and rental duration",
      "Customer provided instant SMS reservation link with credit card authorization",
      "Equipment marked reserved in warehouse dispatch calendar"
    ],
    tools: ["VAPI Telephony", "Twilio", "OpenAI", "GoHighLevel", "n8n Webhooks"],
    results: "Reduced quote delivery time from 2 hours to 45 seconds; rental bookings increased by 38%.",
    metrics: [
      { label: "Quote Speed", value: "45s" },
      { label: "Bookings Surge", value: "+38%" },
      { label: "Call Coverage", value: "24/7/365" }
    ]
  },

  // ==========================================
  // 6. FUNNELS & ADS ATTRIBUTION (10 Items)
  // ==========================================
  {
    id: "funnel-fb-perf",
    title: "Meta Conversion API (CAPI) & Closed-Deal Attribution",
    category: "funnels",
    categoryLabel: "Funnels & Tracking",
    client: "High-Ticket Coaching Agency",
    industry: "Education & Consulting",
    image: "./assets/projects/facebook performance.png",
    overview: "Full-funnel Meta Conversion API (CAPI) and Google Ads tracking linked to actual closed revenue inside GoHighLevel.",
    challenge: "Client was spending $15k/month on paid ads with zero visibility into which campaigns, ad sets, or creative variants actually generated cash-collected sales.",
    solution: "Implemented server-side Meta Conversions API via Google Tag Manager and n8n, passing offline conversion events back to Meta and Google when deals marked as 'Won' inside GoHighLevel.",
    workflow: [
      "Prospect clicks Meta/Google ad with UTM parameters and fbclid/gclid",
      "Landing page captures lead and stores click IDs in GHL custom fields",
      "Sales rep closes contract inside GoHighLevel opportunity pipeline",
      "Webhook triggers n8n node which formats offline conversion payload",
      "Meta CAPI and Google Ads receive offline 'Purchase' event with exact deal value",
      "Ad algorithm optimizes bidding specifically around high-value closed clients"
    ],
    tools: ["Meta CAPI", "Google Tag Manager", "GoHighLevel", "n8n", "Zapier"],
    results: "Improved return on ad spend (ROAS) from 1.8x to 4.3x by feeding verified cash-collected conversion data back to ad algorithms.",
    metrics: [
      { label: "ROAS Increase", value: "1.8x → 4.3x" },
      { label: "Attribution Match", value: "96.8%" },
      { label: "Monthly Spend", value: "$25,000" }
    ]
  },
  {
    id: "funnel-fb-dash",
    title: "Paid Ads Attribution & ROI Analytics Dashboard",
    category: "funnels",
    categoryLabel: "Funnels & Tracking",
    client: "Digital Growth & Performance Agency",
    industry: "Paid Media & Growth",
    image: "./assets/projects/facebook-ads-dashboard-template.png",
    overview: "Consolidated performance dashboard tracking Meta ads, Google ads, cost-per-lead, and pipeline ROI in real time.",
    challenge: "Agencies struggled to prove ROI to clients because ad platform metrics differed drastically from CRM closed sales.",
    solution: "Constructed a centralized attribution dashboard connecting Meta Ads API, Google Ads API, and GHL revenue pipelines.",
    workflow: [
      "Daily ad spend and impression metrics fetched via Meta Marketing API",
      "CRM pipeline updates pull exact cash collected per ad campaign",
      "Dashboard visualizes blended CAC (Customer Acquisition Cost) and ROAS",
      "Automatic email report sent to clients every Monday morning",
      "Underperforming ad sets flagged for budget reallocation"
    ],
    tools: ["Meta Ads API", "Google Tag Manager", "GoHighLevel", "Data Studio"],
    results: "Provided 100% transparent attribution across $25,000 in monthly ad spend.",
    metrics: [
      { label: "Match Rate", value: "96.8%" },
      { label: "Client Retainers", value: "+45%" },
      { label: "Data Latency", value: "<15m" }
    ]
  },
  {
    id: "funnel-meta-creative",
    title: "Creative Performance & ROAS Intelligence Matrix",
    category: "funnels",
    categoryLabel: "Funnels & Tracking",
    client: "Direct-to-Consumer Brand Group",
    industry: "E-Commerce & Retail",
    image: "./assets/projects/meta-ads-creatives-dashboard.png",
    overview: "Ad creative analysis matrix tracking hook rates, hold rates, and direct revenue attribution by video creative.",
    challenge: "Marketing team produced dozens of ad creatives without knowing which specific hooks drove profitable purchasers.",
    solution: "Configured granular UTM tagging and GTM event tracking linking individual creative IDs to closed GHL purchase records.",
    workflow: [
      "Dynamic UTM tagging tracks specific video creative ID and hook variant",
      "Server-side tracking captures purchase and links back to creative ID",
      "Dashboard ranks creatives by actual cash collected, not just vanity clicks",
      "Top-performing video hooks identified for rapid iteration and scaling",
      "Losing creatives automatically paused before wasting ad budget"
    ],
    tools: ["Meta CAPI", "Google Tag Manager", "UTM Tracking", "GoHighLevel"],
    results: "Increased winning creative scale rate by 55%; reduced creative testing ad waste by 40%.",
    metrics: [
      { label: "Creative Scale", value: "+55%" },
      { label: "Wasted Spend", value: "-40%" },
      { label: "ROAS Lift", value: "3.2x" }
    ]
  },
  {
    id: "funnel-intake-10",
    title: "Client Intake Funnel & Automated Scheduling Flow",
    category: "funnels",
    categoryLabel: "Funnels & Tracking",
    client: "Strategic Advisory & Consulting Group",
    industry: "Professional Services",
    image: "./assets/projects/umair port 10.jpg",
    overview: "Editorial high-converting client intake funnel designed for corporate advisory consultations.",
    challenge: "Cluttered generic funnel layouts resulted in low booking conversion among corporate executive clients.",
    solution: "Designed a clean, minimalist consultation funnel with frictionless time slot selection and automated SMS confirmations.",
    workflow: [
      "Client visits high-authority strategy booking page",
      "Dynamic time-zone selector detects prospect location automatically",
      "Intake questions gather organizational objectives before slot confirmation",
      "Automated calendar invite created with direct Zoom meeting URL",
      "Preparation briefing dispatched via email 24h before meeting"
    ],
    tools: ["GHL Funnels", "Calendar Sync", "Zoom Integration", "SMS Reminders"],
    results: "Increased consultation booking conversion rate by 28%; reduced client scheduling friction.",
    metrics: [
      { label: "Conversion Lift", value: "+28%" },
      { label: "Executive CSAT", value: "98%" },
      { label: "No-Show Rate", value: "<5%" }
    ]
  },
  {
    id: "funnel-pipeline-11",
    title: "High-Ticket Client Acquisition Pipeline Layout",
    category: "funnels",
    categoryLabel: "Funnels & Tracking",
    client: "Strategic Advisory & Wealth Consulting",
    industry: "Financial & Advisory",
    image: "./assets/projects/umair port 11.jpg",
    overview: "End-to-end client acquisition funnel with integrated VSL (Video Sales Letter), social proof, and calendar embed.",
    challenge: "Previous landing page had high bounce rates (68%) and failed to establish credibility with high-ticket prospects.",
    solution: "Restructured the acquisition funnel with high-impact editorial layout, verified client case studies, and progressive intake forms.",
    workflow: [
      "Targeted prospect lands on value-packed Video Sales Letter",
      "Interactive case study carousel showcases quantifiable client outcomes",
      "Call-to-action button reveals embedded consultation calendar at key timestamp",
      "Prospect books discovery call and receives instant SMS confirmation",
      "Lead record created in GHL opportunity pipeline with complete UTM attribution"
    ],
    tools: ["GoHighLevel Funnels", "Video Player", "Calendar Embeds", "Twilio SMS"],
    results: "Boosted consultation booking rate from 4.2% to 14.2%; lowered client acquisition cost by 45%.",
    metrics: [
      { label: "Booking Rate", value: "14.2%" },
      { label: "CAC Reduction", value: "-45%" },
      { label: "Average Deal", value: "$8,500" }
    ]
  },
  {
    id: "funnel-crm-tracker-1",
    title: "Custom CRM Dashboard & Lead Velocity Tracker",
    category: "funnels",
    categoryLabel: "Funnels & Tracking",
    client: "Financial Services & Investment Advisory",
    industry: "Finance & Wealth",
    image: "./assets/projects/Umair portfolio 1.jpg",
    overview: "Real-time CRM dashboard visualizing sales pipeline stages, lead response speed, and upcoming consultations.",
    challenge: "Branch managers lacked real-time visibility into whether inbound leads were being contacted within the required 5-minute window.",
    solution: "Constructed a live dashboard with response time tracking metrics and automated alerts for any lead uncontacted after 3 minutes.",
    workflow: [
      "Inbound lead enters CRM from digital campaigns",
      "Response timer starts tracking rep first-action timestamp",
      "If uncontacted at 3 minutes, flashing alert displayed on manager dashboard",
      "Dashboard calculates daily average speed-to-lead across all advisors",
      "Leaderboard tracks appointments booked and closed conversion rate"
    ],
    tools: ["GoHighLevel Dashboards", "Velocity Metrics", "SLA Timers", "Manager Alerts"],
    results: "Reduced average lead response time from 45 minutes to 48 seconds; increased connect rate by 85%.",
    metrics: [
      { label: "Response Speed", value: "48s" },
      { label: "Connect Rate", value: "+85%" },
      { label: "SLA Adherence", value: "99.4%" }
    ]
  },
  {
    id: "funnel-kanban-2",
    title: "Sales Opportunity Kanban & Deal Stages View",
    category: "funnels",
    categoryLabel: "Funnels & Tracking",
    client: "Commercial B2B Services Provider",
    industry: "Commercial Operations",
    image: "./assets/projects/Umair portfolio 2.jpg",
    overview: "Visual Kanban pipeline view organizing active deals by sales stages with automated drag-and-drop workflow triggers.",
    challenge: "Sales reps struggled to track deal progress, leaving follow-up tasks incomplete and proposals unmonitored.",
    solution: "Designed a clean visual Kanban pipeline where dragging a deal card to a new stage automatically executes follow-up actions.",
    workflow: [
      "Rep drags deal card from 'Meeting Held' to 'Proposal Sent'",
      "Automated workflow dispatches email with proposal PDF and tracking link",
      "If client views proposal, rep receives instant mobile app notification",
      "Dragging card to 'Closed Won' triggers automated invoice generation in Stripe",
      "Dragging card to 'Lost' triggers feedback survey asking reason for non-selection"
    ],
    tools: ["GoHighLevel Kanban", "Stage Triggers", "Proposal Tracking", "Stripe API"],
    results: "Shortened sales deal cycle by 40%; increased deal win rate by 35%.",
    metrics: [
      { label: "Win Rate Surge", value: "+35%" },
      { label: "Cycle Shortened", value: "-40%" },
      { label: "Deals Tracked", value: "150+ Deals" }
    ]
  },
  {
    id: "funnel-scoring-2-1",
    title: "Lead Scoring & Activity Timeline Architecture",
    category: "funnels",
    categoryLabel: "Funnels & Tracking",
    client: "High-Growth Agency Systems",
    industry: "Marketing & Agency",
    image: "./assets/projects/Umair portfolio 2-1.jpg",
    overview: "Dynamic lead scoring engine that assigns points based on email opens, website visits, and form submissions.",
    challenge: "Sales reps were treating all 5,000 monthly leads equally, wasting calls on low-intent tire-kickers.",
    solution: "Implemented an automated behavioral scoring system that flags 'Hot Leads' (+50 points) for immediate priority outreach.",
    workflow: [
      "Lead visits pricing page (+15 points), opens email (+5 points), clicks link (+10 points)",
      "Score accumulates automatically in GoHighLevel custom field",
      "When score reaches 50 points, lead automatically moved to 'High Intent' smart list",
      "Senior sales executive receives instant SMS: 'Hot lead active on website right now'",
      "Rep calls while prospect is actively reviewing pricing details"
    ],
    tools: ["GoHighLevel Scoring", "Web Tracking", "Behavioral Triggers", "SMS Alerts"],
    results: "Increased sales call close rate by 60% by focusing reps exclusively on high-scoring prospects.",
    metrics: [
      { label: "Close Rate Lift", value: "+60%" },
      { label: "Score Accuracy", value: "94%" },
      { label: "Time on Tires", value: "0 hours" }
    ]
  },
  {
    id: "funnel-drip-3",
    title: "Multi-Channel Follow-Up & Drip Funnel Design",
    category: "funnels",
    categoryLabel: "Funnels & Tracking",
    client: "Professional B2B Services Firm",
    industry: "Consulting & Professional Services",
    image: "./assets/projects/umair portfolio 3.jpg",
    overview: "Omnichannel nurture sequence coordinating email drips, SMS check-ins, and direct voicemail drops.",
    challenge: "Prospects who didn't book on the initial visit rarely returned, leading to high cost per acquisition.",
    solution: "Engineered a persistent 14-day value-first follow-up sequence delivering case studies, industry benchmarks, and booking reminders.",
    workflow: [
      "Prospect opts in for industry whitepaper but doesn't book consultation",
      "Hour 2: Educational case study delivered via email with key insights",
      "Day 2: Friendly SMS asking if they had any questions on the whitepaper",
      "Day 5: Direct voicemail drop sharing client success story",
      "Day 10: Final opportunity invite to claim strategy roadmap consultation"
    ],
    tools: ["GoHighLevel Drips", "Dynamic Content", "SMS Engine", "Voicemail Automation"],
    results: "Recovered 24% of non-booking leads into booked discovery calls within 14 days.",
    metrics: [
      { label: "Lead Recovery", value: "24%" },
      { label: "Email Open Rate", value: "58%" },
      { label: "Consults Booked", value: "+52/mo" }
    ]
  },
  {
    id: "funnel-contact-timeline-4",
    title: "Unified Contact Record & Communication Timeline",
    category: "funnels",
    categoryLabel: "Funnels & Tracking",
    client: "Operations & Client Success Team",
    industry: "Operations & Delivery",
    image: "./assets/projects/Umair portfolio 4.jpg",
    overview: "Comprehensive 360-degree customer profile displaying complete message history, payments, notes, and activity logs.",
    challenge: "Client interaction history was split across Gmail, Slack, Stripe, and spreadsheets, causing awkward customer conversations.",
    solution: "Consolidated all touchpoints into a unified GoHighLevel contact view with chronological activity timeline and one-click communication.",
    workflow: [
      "Contact record aggregates every email sent/opened, SMS exchanged, and call recording",
      "Stripe payment history, invoices, and subscriptions displayed in right sidebar",
      "Staff notes and assigned tasks visible chronologically on timeline",
      "One-click calling and texting directly from contact interface",
      "Automated tag history records customer journey from lead to renewal"
    ],
    tools: ["GoHighLevel Contact View", "Activity Timeline", "Stripe Integration", "Call Recordings"],
    results: "Empowered support and sales teams with complete customer context, increasing renewal rate by 30%.",
    metrics: [
      { label: "Renewal Rate", value: "+30%" },
      { label: "Context Switching", value: "0" },
      { label: "Data Completeness", value: "100%" }
    ]
  }
];

// Ensure backwards compatibility with any existing scripts
window.PROJECTS_DATA = window.PROJECTS_DATA || [];
