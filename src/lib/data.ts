export const personalInfo = {
  name: "Naveen Kumar",
  role: "Backend Engineer",
  tagline:
    "Backend Engineer focused on scalable systems, search infrastructure, and AI powered applications.",
  email: "connect.naveenk@gmail.com",
  phone: "+91 6397930569",
  github: "https://github.com/itsnaveenk",
  linkedin: "https://www.linkedin.com/in/itsnaveenk",
  resumeUrl: "/resume.pdf",
  location: "Gurugram, India",
  availability: "Open to Backend & Platform Engineering Opportunities",
};

export const education = {
  school: "Institute of Engineering & Technology, Lucknow",
  degree: "Master of Computer Applications (MCA)",
  duration: "Jun 2024",
  cgpa: "8.19 / 10.0",
};

export const aboutContent = {
  intro:
    "I'm a backend engineer at Adda247 building scalable systems for one of India's largest edtech platforms. I own subscription billing, search infrastructure, and event driven services that touch millions of users every day.",
  paragraphs: [
    "My focus sits at the intersection of backend engineering, distributed systems, and AI infrastructure. I architect event driven systems with Kafka, design search platforms with Elasticsearch and vector databases, and ship cloud native services on AWS.",
    "I care deeply about latency budgets, throughput, and the kind of subtle architectural choices that separate prototypes from production. Whether it's reducing search latency by 40%, contributing to migrating 5M+ users with zero downtime, or processing millions of in app events per day, I love building systems that move serious volume.",
    "Right now I'm exploring how LLMs, vector retrieval, and traditional search can fuse into next generation product experiences. RAG, semantic reranking, hybrid search. The stack that makes AI feel intelligent rather than novel.",
  ],
  pillars: [
    {
      label: "Distributed Systems",
      description:
        "Event driven architectures, Kafka pipelines, async processing at scale.",
    },
    {
      label: "Search & AI",
      description:
        "Elasticsearch, vector search, RAG, and LLM powered retrieval systems.",
    },
    {
      label: "Performance",
      description:
        "Latency optimization, caching strategy, query tuning, throughput engineering.",
    },
    {
      label: "Cloud Native",
      description:
        "AWS first design. EC2, S3, Lambda, SQS, CloudFront, Docker.",
    },
  ],
};

export const skillCategories = [
  {
    name: "Languages",
    icon: "Code2",
    accent: "from-violet-500/20 to-violet-500/0",
    skills: [
      { name: "Java", level: 95 },
      { name: "Python", level: 88 },
      { name: "SQL", level: 92 },
      { name: "TypeScript", level: 75 },
      { name: "Bash", level: 78 },
    ],
  },
  {
    name: "Frameworks & Concepts",
    icon: "Server",
    accent: "from-blue-500/20 to-blue-500/0",
    skills: [
      { name: "Spring Boot", level: 95 },
      { name: "Spring Security", level: 90 },
      { name: "Spring Data JPA", level: 92 },
      { name: "Hibernate", level: 90 },
      { name: "FastAPI", level: 85 },
      { name: "REST APIs", level: 95 },
      { name: "Microservices", level: 92 },
      { name: "Event Driven Architecture", level: 88 },
      { name: "WebSockets", level: 78 },
    ],
  },
  {
    name: "Databases & Storage",
    icon: "Database",
    accent: "from-cyan-500/20 to-cyan-500/0",
    skills: [
      { name: "MySQL", level: 92 },
      { name: "MongoDB", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "Redis", level: 92 },
      { name: "Elasticsearch", level: 92 },
      { name: "Vector Databases", level: 80 },
      { name: "Schema Design & Indexing", level: 88 },
      { name: "Query Optimization", level: 88 },
      { name: "ETL Pipelines (Logstash)", level: 85 },
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: "Cloud",
    accent: "from-indigo-500/20 to-indigo-500/0",
    skills: [
      { name: "AWS EC2", level: 88 },
      { name: "AWS S3 / CloudFront", level: 85 },
      { name: "AWS SQS / Lambda", level: 82 },
      { name: "Azure", level: 75 },
      { name: "Apache Kafka", level: 92 },
      { name: "Docker", level: 90 },
      { name: "Docker Compose", level: 88 },
      { name: "CI/CD Pipelines", level: 85 },
      { name: "Git / GitHub", level: 95 },
      { name: "Linux", level: 85 },
    ],
  },
  {
    name: "Security & Auth",
    icon: "ShieldCheck",
    accent: "from-emerald-500/20 to-emerald-500/0",
    skills: [
      { name: "OAuth 2.0", level: 88 },
      { name: "JWT", level: 90 },
      { name: "OTP / Mobile Login", level: 92 },
      { name: "AES Encryption", level: 85 },
      { name: "Multi tenancy", level: 88 },
      { name: "Session Management", level: 90 },
      { name: "Rate Limiting", level: 88 },
      { name: "Role Based Access Control", level: 85 },
    ],
  },
  {
    name: "Performance & Tooling",
    icon: "Gauge",
    accent: "from-orange-500/20 to-orange-500/0",
    skills: [
      { name: "Redis Caching Strategies", level: 92 },
      { name: "@Cacheable / @CacheEvict", level: 90 },
      { name: "HikariCP Connection Pool", level: 85 },
      { name: "G1GC / JVM Tuning", level: 80 },
      { name: "Thread Pool Isolation", level: 82 },
      { name: "Sliding Window Rate Limiting", level: 88 },
      { name: "Profiling & Load Testing", level: 78 },
    ],
  },
  {
    name: "Observability & Analytics",
    icon: "LineChart",
    accent: "from-rose-500/20 to-rose-500/0",
    skills: [
      { name: "Kibana", level: 88 },
      { name: "Grafana", level: 82 },
      { name: "Logstash", level: 85 },
      { name: "Google BigQuery", level: 80 },
      { name: "Google Analytics", level: 80 },
      { name: "MoEngage / Meta SDK", level: 80 },
      { name: "Incident Response", level: 82 },
    ],
  },
  {
    name: "Payments & Integrations",
    icon: "Wallet",
    accent: "from-amber-500/20 to-amber-500/0",
    skills: [
      { name: "Razorpay", level: 88 },
      { name: "UPI AutoPay", level: 90 },
      { name: "Recurring Subscriptions", level: 92 },
      { name: "Coupon Validation", level: 88 },
      { name: "Payment Verification", level: 88 },
      { name: "Webhook Handling", level: 85 },
      { name: "Google Sheets API", level: 80 },
    ],
  },
  {
    name: "AI / Search",
    icon: "Sparkles",
    accent: "from-fuchsia-500/20 to-fuchsia-500/0",
    skills: [
      { name: "RAG", level: 85 },
      { name: "OpenAI API", level: 88 },
      { name: "Embeddings", level: 85 },
      { name: "Semantic Search", level: 88 },
      { name: "Hybrid Search", level: 85 },
      { name: "LLM Reranking", level: 82 },
      { name: "Whisper", level: 80 },
      { name: "GitHub Copilot", level: 95 },
      { name: "Claude Code", level: 92 },
      { name: "Cursor", level: 92 },
    ],
  },
];

export const experiences = [
  {
    company: "Adda247",
    role: "Software Development Engineer 1",
    duration: "Oct 2024 / Present",
    location: "Gurugram, India",
    summary:
      "Building backend infrastructure for one of India's largest edtech platforms. Owning subscription billing, search infrastructure, and AI driven personalization systems across the TestPrime product and the wider Adda247 platform.",
    highlights: [
      "Designed and implemented REST APIs for subscription management, order processing, and full membership lifecycle including coupon validation, payment verification, and cancellation.",
      "Implemented freemium content access control with paywall integration, dynamically locking premium content for free tier users and triggering purchase flow.",
      "Integrated UPI AutoPay for recurring subscriptions; contributed to migrating 5M+ users from course based to monthly subscription model.",
      "Designed exam personalization APIs allowing users to select target exams; content APIs dynamically filter results based on user preferences stored in MySQL.",
      "Integrated analytics event tracking (Meta, Google Analytics, MoEngage, Trackier) for login, paywall view, subscription purchase, and test lifecycle events; synced events into Google Cloud BigQuery.",
      "Revamped User Authentication Service with multi tenancy, OTP mobile login, AES encryption, and 2 device session enforcement.",
      "Built Search Module on Elasticsearch across quizzes, articles, current affairs, job alerts, and magazines; processing 600K+ weekly queries with 40% lower search latency.",
      "Built and maintained RESTful microservices; integrated Apache Kafka to process millions of in app events daily for real time service communication.",
      "Reduced load times by 30% via Redis caching and improved query performance by 40% through MySQL & MongoDB schema indexing optimizations.",
      "Automated 700K+ record migration to Elasticsearch using Logstash ETL pipelines with near real time sync.",
      "Cut manual operational effort by 80% through automation pipelines for license keys and internal reporting via Google Sheets API.",
      "Maintained CI/CD pipelines and used Kibana / Grafana for log analysis, achieving a 20% reduction in downtime through faster incident resolution.",
    ],
    metrics: [
      { value: "5M+", label: "Users Migrated" },
      { value: "40%", label: "Latency Reduction" },
      { value: "600K+", label: "Weekly Searches" },
      { value: "700K+", label: "Records Migrated" },
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Kafka",
      "Elasticsearch",
      "Redis",
      "MySQL",
      "MongoDB",
      "AWS",
      "Logstash",
    ],
  },
];

export const projects = [
  {
    slug: "codearena",
    title: "CodeArena",
    subtitle: "Distributed Competitive Programming Platform",
    description:
      "A production grade competitive programming platform with an async, Kafka driven code execution engine. Submissions stream through dedicated topics per language into a fleet of Docker sandboxes, with results pushed to real time leaderboards backed by Redis sorted sets.",
    features: [
      "Tournament style execution engine using Kafka producer / consumer pattern with dedicated topics per language",
      "Horizontal scaling via consumer groups and partition level parallelism",
      "Real time leaderboards with Redis sorted sets and sliding window rate limiting (5 req / min)",
      "@CacheEvict strategy with Redis (5 min TTL) reducing DB load by 95% during peak contest traffic",
      "Multi language sandboxing for 8 languages (Java, Python, C++, Go, Rust, TypeScript, JS, C) with strict CPU / memory limits and network isolation",
      "Hybrid data architecture: PostgreSQL + HikariCP for relational data, MongoDB for write heavy submissions and audit logs, Redis for caching and sessions",
      "Stateless Spring Boot backend deployed via Docker Compose with G1GC tuned JVM and thread pool isolation between API handlers and stream consumers",
    ],
    metrics: [
      { value: "1000+", label: "Concurrent Submissions" },
      { value: "95%", label: "DB Load Reduction" },
      { value: "8", label: "Languages Sandboxed" },
    ],
    stack: [
      "Java 21",
      "Spring Boot",
      "Apache Kafka",
      "Redis",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "HikariCP",
    ],
    github: "https://github.com/itsnaveenk",
    demo: null,
    accent: "violet",
  },
  {
    slug: "ai-product-search",
    title: "AI Product Search Assistant",
    subtitle: "Semantic + Vector Hybrid Search with LLM Reranking",
    description:
      "A conversational commerce search engine combining classical lexical search with vector embeddings and LLM reranking. Refines ambiguous queries through context, then surfaces results that actually match user intent, not just keywords.",
    features: [
      "Hybrid search: BM25 plus dense vector retrieval",
      "OpenAI powered query refinement",
      "LLM reranking layer for relevance",
      "Conversational query memory",
      "RAG pipeline for product Q&A",
      "Sub second p95 retrieval latency",
    ],
    metrics: [
      { value: "<400ms", label: "p95 Latency" },
      { value: "+38%", label: "Click through Lift" },
      { value: "Hybrid", label: "Retrieval Strategy" },
    ],
    stack: [
      "Spring Boot",
      "OpenAI API",
      "Elasticsearch",
      "Vector Embeddings",
      "Redis",
      "PostgreSQL",
    ],
    github: "https://github.com/itsnaveenk",
    demo: null,
    accent: "blue",
  },
  {
    slug: "smartchapter",
    title: "SmartChapter+",
    subtitle: "AI Powered Video Chapter & Quiz Generation",
    description:
      "A FastAPI service that ingests long form video, transcribes it via Whisper, and uses LLMs to generate timestamp based chapters, summaries, and personalized quizzes. Turning passive viewing into structured learning.",
    features: [
      "Whisper based transcription pipeline",
      "AI generated chapter timestamps",
      "Section level summaries",
      "Personalized quiz generation",
      "Async job queue for long videos",
      "FastAPI plus worker architecture",
    ],
    metrics: [
      { value: "15+", label: "Languages Supported" },
      { value: "10x", label: "Faster Indexing" },
      { value: "AI", label: "Quiz Generation" },
    ],
    stack: [
      "FastAPI",
      "Python",
      "Whisper",
      "OpenAI API",
      "Redis",
      "PostgreSQL",
    ],
    github: "https://github.com/itsnaveenk",
    demo: null,
    accent: "cyan",
  },
];

export const engineeringHighlights = [
  {
    value: "5M+",
    label: "Users Migrated",
    description: "Course based to monthly subscription with zero downtime.",
  },
  {
    value: "600K+",
    label: "Weekly Searches",
    description: "Served via Elasticsearch with layered Redis caching.",
  },
  {
    value: "Millions",
    label: "Kafka Events / Day",
    description: "Real time service communication across microservices.",
  },
  {
    value: "1000+",
    label: "Concurrent Submissions",
    description: "Sustained on the CodeArena execution engine.",
  },
  {
    value: "40%",
    label: "Search Latency Reduction",
    description: "Through Elasticsearch tuning and cache warming.",
  },
  {
    value: "95%",
    label: "DB Load Reduction",
    description: "Via Redis caching and @CacheEvict strategy at peak load.",
  },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Architecture", href: "#architecture" },
  { name: "Contact", href: "#contact" },
];
