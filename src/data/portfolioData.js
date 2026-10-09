export const portfolioData = {
  personal: {
    name: "M. Abdullah Akram",
    initials: "AA",
    title: "Software Engineer | Flutter & Dart Developer",
    headline: "Software Engineer | Flutter & Dart Developer, Pakistan",
    location: "Pakistan",
    greeting: "Hi, I'm",
    statement: "I build responsive cross-platform mobile apps and AI-driven features.",
    availability: "Open to entry-level roles",
    email: "abdullah.akram.dev@gmail.com",
    phone: "+92 300 1234567",
    whatsapp: "https://wa.me/923001234567",
    github: "https://github.com/abdullahakram",
    githubUser: "abdullahakram",
    linkedin: "https://linkedin.com/in/abdullah-akram",
    linkedinUser: "in/abdullah-akram",
    summary: [
      "BS Software Engineering graduate from UET Taxila (2022–2026) specializing in cross-platform mobile development with Flutter & Dart, along with modern backend and AI workflow automations.",
      "Dedicated to building scalable, user-centric applications with clean architecture, robust state management, and seamless API integrations. Eager to bring high enthusiasm and engineering precision to an entry-level Software Developer or Flutter Developer role."
    ],
    quickFacts: {
      location: "Pakistan",
      education: "BS Software Engineering, UET Taxila (2022–2026)",
      focus: "Flutter, Mobile Craftsmanship, AI Chatbots, Automation",
      currentRole: "Software Engineering Intern at CodyMentor Software House"
    }
  },

  skills: [
    {
      category: "Languages",
      icon: "Code2",
      description: "Core programming languages for application and system logic",
      items: ["Dart", "C++", "Java", "JavaScript (ES6+)", "Python", "SQL", "HTML5 / CSS3"]
    },
    {
      category: "Mobile & Frontend",
      icon: "Smartphone",
      description: "Cross-platform mobile UI engineering and reactive web interfaces",
      items: ["Flutter", "Dart", "Provider", "Riverpod", "Bloc Pattern", "Material Design 3", "React.js", "Responsive Layouts"]
    },
    {
      category: "Backend & Data",
      icon: "Database",
      description: "Data persistence, cloud services, and RESTful APIs",
      items: ["Firebase Auth", "Cloud Firestore", "Cloud Functions", "REST APIs", "SQLite (sqflite)", "Node.js", "FastAPI"]
    },
    {
      category: "AI & Automation",
      icon: "Cpu",
      description: "Generative AI, conversational voice agents, and workflows",
      items: ["Vapi AI", "n8n Workflows", "LangChain", "Prompt Engineering", "OpenAI API", "Webhooks Automation"]
    },
    {
      category: "Tools & DevOps",
      icon: "Wrench",
      description: "Development environments, version control, and design tooling",
      items: ["Git", "GitHub", "Android Studio", "VS Code", "Postman", "Figma", "npm / Vite"]
    }
  ],

  experience: [
    {
      role: "Software Engineering Intern",
      company: "CodyMentor Software House",
      period: "Sept 2026 – Present",
      type: "Internship",
      location: "On-site / Hybrid",
      bullets: [
        "Developing and maintaining cross-platform mobile modules using Flutter & Dart following clean architecture guidelines.",
        "Integrating RESTful endpoints, implementing state management solutions, and optimizing app performance across varied screen densities.",
        "Collaborating in agile sprints, participating in peer code reviews, and resolving UI/UX edge cases for client releases."
      ]
    },
    {
      role: "E-Commerce & Dropshipping Operator",
      company: "Self-Employed",
      period: "2023 – 2025",
      type: "Self-Employed / Entrepreneurship",
      location: "Remote",
      bullets: [
        "Managed end-to-end e-commerce store operations, product sourcing, order automation, and customer relationship funnels.",
        "Utilized data analytics and conversion-rate optimization strategies to increase store traffic and streamline fulfillment workflows.",
        "Engineered customized automation scripts to synchronize inventory updates and customer notification dispatches."
      ]
    }
  ],

  projects: [
    {
      id: "ai-student-guide",
      title: "AI Chatbot for Virtual Student Guide",
      category: "AI",
      categoryLabel: "AI & Full-Stack",
      shortDesc: "Intelligent campus companion utilizing LLMs and RAG to answer queries, navigate campus, and deliver timely academic notifications.",
      tech: ["Flutter", "Python", "FastAPI", "LangChain", "Firebase"],
      role: "Lead Developer (Final Year Project)",
      github: "https://github.com/abdullahakram/ai-virtual-student-guide",
      demo: "https://ai-student-guide-demo.web.app",
      overview: "An AI-powered mobile and web guide engineered for university students. It serves as a 24/7 personalized advisor answering academic questions, timetable queries, department locations, and campus policies.",
      problem: "University students frequently struggle with fragmented information sources, missed timetable changes, and long waits for administrative staff responses.",
      solution: "Built a high-performance Flutter mobile client connected to a Python/FastAPI backend utilizing Retrieval-Augmented Generation (RAG) to serve instant, source-grounded answers to campus inquiries.",
      keyFeatures: [
        "Instant conversational AI assistant with university knowledge base grounding.",
        "Interactive campus department finder and course prerequisite navigator.",
        "Automated push notifications for timetable changes, exam alerts, and announcements.",
        "Offline-cached conversation history and fast vector search responses."
      ],
      learned: "Mastered building RAG pipelines with LangChain, optimizing real-time streaming responses in Flutter apps, and implementing robust mobile state caching."
    },
    {
      id: "weather-application",
      title: "Weather Application",
      category: "Mobile",
      categoryLabel: "Mobile / Flutter",
      shortDesc: "A sleek, responsive mobile weather app with dynamic atmospheric visuals, 7-day forecast cards, and real-time geolocation.",
      tech: ["Flutter", "Dart", "Provider", "OpenWeatherMap API", "Geocoding"],
      role: "Solo Flutter Developer",
      github: "https://github.com/abdullahakram/flutter-weather-app",
      demo: "https://flutter-weather-preview.web.app",
      overview: "A clean and intuitive weather application designed with Flutter, showcasing fluid transitions, responsive layout across all device widths, and atmospheric visual effects matching live conditions.",
      problem: "Many weather apps are cluttered with intrusive ads, complex interfaces, and poor battery/network efficiency on mobile devices.",
      solution: "Engineered a minimalist, ad-free Flutter app using Provider state management and OpenWeatherMap REST APIs with smart caching for instant load times.",
      keyFeatures: [
        "Live temperature, humidity, wind velocity, UV index, and atmospheric pressure.",
        "Dynamic background gradients shifting smoothly according to sunrise, sunset, rain, and snow.",
        "7-day detailed forecasting with interactive hourly precipitation curves.",
        "City search with auto-complete and GPS instant geolocation retrieval."
      ],
      learned: "Deepened expertise in asynchronous state handling with Provider, responsive multi-device layouts, and handling API rate limits with local cache fallbacks."
    },
    {
      id: "student-notes-app",
      title: "Student Notes App",
      category: "Mobile",
      categoryLabel: "Mobile / Flutter",
      shortDesc: "Fast, offline-first student note-taking app featuring markdown preview, category tagging, and local SQLite database persistence.",
      tech: ["Flutter", "Dart", "SQLite (sqflite)", "Provider", "Material 3"],
      role: "Solo Mobile Developer",
      github: "https://github.com/abdullahakram/student-notes-flutter",
      demo: "https://student-notes-app-demo.web.app",
      overview: "An offline-first notes organization utility tailored for university students. Features lightning-fast startup, rich text markdown formatting, color-coded tag sorting, and instant search.",
      problem: "Cloud-heavy note apps frequently stutter on intermittent campus Wi-Fi networks and fail during lecture note-taking without connectivity.",
      solution: "Developed an entirely local-first mobile architecture powered by SQLite (sqflite) ensuring zero-lag note creation, instant search, and complete privacy.",
      keyFeatures: [
        "Instant offline read/write with zero loading latency using SQLite.",
        "Markdown syntax rendering with code block highlighting, lists, and headers.",
        "Multi-tag filtering, pinned notes, and prioritized search indexing.",
        "Material Design 3 themed dynamic color palette with Dark Mode support."
      ],
      learned: "Gained comprehensive command over relational database schemas in mobile apps, database migrations with SQLite in Dart, and markdown parser rendering."
    },
    {
      id: "ai-voice-receptionist",
      title: "AI Voice Receptionist",
      category: "Automation",
      categoryLabel: "AI & Workflow Automation",
      shortDesc: "Autonomous voice AI agent handling inbound calls, booking calendar slots, and synchronizing customer inquiries via automated n8n workflows.",
      tech: ["Vapi AI", "n8n Automation", "Webhooks", "Google Sheets", "Google Calendar API"],
      role: "AI & Automation Engineer",
      github: "https://github.com/abdullahakram/ai-voice-receptionist-n8n",
      demo: "https://vapi.ai/demo-receptionist",
      overview: "An enterprise-grade conversational voice agent capable of holding natural telephone dialogues with clients, answering service inquiries, checking calendar availability in real-time, and confirming appointments.",
      problem: "Small businesses and clinics lose significant revenue due to missed calls outside business hours and time-consuming manual appointment booking.",
      solution: "Connected Vapi AI voice agents to an n8n webhook orchestration pipeline that checks live Google Calendar availability, confirms bookings, and logs leads into Google Sheets automatically.",
      keyFeatures: [
        "Ultra-low latency (<600ms) realistic voice conversations with customizable persona.",
        "Bi-directional webhook synchronization with n8n server workflows.",
        "Real-time Google Calendar slot validation and automatic invite dispatches.",
        "Instant SMS / Email notification triggers sent to administrators upon lead capture."
      ],
      learned: "Engineered complex asynchronous webhook architectures, resilient error fallbacks in n8n automation pipelines, and optimized LLM function-calling schemas for voice agents."
    }
  ],

  education: [
    {
      degree: "Bachelor of Science in Software Engineering (BSSE)",
      institution: "University of Engineering and Technology (UET) Taxila",
      period: "2022 – 2026",
      status: "Graduating 2026",
      location: "Taxila, Pakistan",
      details: "Comprehensive coursework in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Software Architecture, Mobile Application Development, and Artificial Intelligence.",
      highlight: "Final Year Project: Lead Developer for Campus AI Virtual Student Guide."
    },
    {
      degree: "FSc Pre-Engineering",
      institution: "Punjab College Mailsi",
      period: "2020 – 2022",
      status: "Grade A1 (First Division)",
      location: "Mailsi, Pakistan",
      details: "Rigorous foundation in Higher Mathematics, Physics, Chemistry, and Analytical Problem Solving.",
      highlight: "Graduated with Grade A1 Distinction."
    }
  ]
};
