export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  category: 'Fullstack' | 'AI/ML' | 'DevOps' | 'Game Dev' | 'Web Dev';
  tags: string[];
  period: string;
  summary: string;
  contributions: string[];
  technologies: string[];
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
  accentStrip: string;
  imageUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: string;
  period: string;
  description: string;
  highlights?: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  activities: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  award: string;
  year: string;
  description: string;
  certificateUrl?: string;
  imageUrl?: string;
}

export interface PortfolioData {
  hero: {
    name: string;
    role: string;
    bio: string;
    statusPill: string;
    ctaExplore: string;
    contacts: {
      email: string;
      linkedin: string;
      github: string;
    };
    quickStats: { label: string; value: string }[];
  };
  techMarquee: string[];
  projects: ProjectItem[];
  experiences: ExperienceItem[];
  education: EducationItem;
  skills: {
    hardSkillsTitle: string;
    hardSkillsDesc: string;
    hardSkills: string[];
    toolsTitle: string;
    toolsDesc: string;
    toolsAndCloud: string[];
    softSkillsTitle: string;
    softSkillsDesc: string;
    softSkills: string[];
  };
  certifications: CertificationItem[];
  achievements: AchievementItem[];
  labels: {
    nav: {
      home: string;
      projects: string;
      experience: string;
      achievements: string;
      skills: string;
      certifications: string;
    };
    projects: {
      badge: string;
      title: string;
      allCategory: string;
      viewDetails: string;
      contributionsHeader: string;
      techStackHeader: string;
      viewRepo: string;
      liveDemo: string;
    };
    experience: {
      badge: string;
      title: string;
      educationTitle: string;
      gpaLabel: string;
    };
    achievements: {
      badge: string;
      title: string;
    };
    skills: {
      badge: string;
      title: string;
    };
    certifications: {
      badge: string;
      title: string;
    };
  };
}

export const PORTFOLIO_DATA: Record<'id' | 'en', PortfolioData> = {
  id: {
    hero: {
      name: "Muhammad Faiz Adya",
      role: "Software Engineering Student · Fullstack Developer · AI Enthusiast",
      bio: "Mahasiswa Rekayasa Perangkat Lunak di Universitas Telkom dengan ketertarikan mendalam pada pengembangan Web Fullstack, arsitektur DevOps, Project Management, serta integrasi Artificial Intelligence. Terbiasa membangun aplikasi skala produksi dan memimpin tim berfokus pada kualitas & performa.",
      statusPill: "TERSEDIA UNTUK PELUANG BARU & MAGANG",
      ctaExplore: "Jelajahi Proyek Unggulan",
      contacts: {
        email: "m.faiz.adya@gmail.com",
        linkedin: "https://linkedin.com/in/mfaizadya",
        github: "https://github.com/mfaizadya"
      },
      quickStats: [
        { label: "Repositories", value: "43" },
        { label: "Languages", value: "6+" },
        { label: "Followers", value: "7" },
        { label: "Status", value: "GitHub Pro" }
      ]
    },

    techMarquee: [
      "React 18", "TypeScript", "Node.js", "Express.js", "Tailwind CSS",
      "Flutter & Dart", "Docker", "AWS (EC2/RDS)", "Firebase", "PostgreSQL",
      "GitHub Actions", "SonarCloud", "Godot Engine", "GDScript", "Vercel"
    ],

    projects: [
      {
        id: "cerdasku",
        title: "CerdasKu — AI Learning Insight",
        imageUrl: "/assets/projects/cerdasku.png",
        role: "React & Back-End Dev · Project Manager",
        category: "AI/ML",
        tags: ["Fullstack", "AI/ML", "Capstone", "Cloud"],
        period: "Sep 2025 – Jan 2026",
        summary: "Platform prediksi gaya & pola belajar berbasis Machine Learning yang dirancang sebagai proyek Capstone unggulan program Asah by Dicoding.",
        contributions: [
          "Memimpin manajemen proyek lintas divisi (Machine Learning, Cloud Engineering, Front-End & Back-End) hingga rilis tepat waktu.",
          "Mengembangkan antarmuka interaktif menggunakan React.js serta membangun arsitektur Back-End API yang cepat dan skalabel.",
          "Men-deploy dan mengintegrasikan ekosistem aplikasi di atas infrastruktur AWS dan Vercel dengan pipeline yang stabil.",
          "Berkontribusi aktif dengan 89 Commits pada repositori utama proyek."
        ],
        technologies: ["React", "Node.js", "AWS", "Vercel", "Machine Learning", "Tailwind CSS"],
        metrics: "89 Commits",
        githubUrl: "https://github.com/mfaizadya/AI-Learning-Insight",
        accentStrip: "#b19cd9"
      },
      {
        id: "logilearn",
        title: "LogiLearn",
        imageUrl: "/assets/projects/logilearn.png",
        role: "System Analyst & Fullstack Developer",
        category: "Fullstack",
        tags: ["Fullstack", "DevOps", "Hybrid", "CI/CD"],
        period: "2025 - 2026",
        summary: "Ekosistem pembelajaran hybrid berskala penuh dengan Web Admin Dashboard dan aplikasi mobile Flutter, berjalan aktif pada domain logilearn.my.id.",
        contributions: [
          "Merancang spesifikasi arsitektur sistem, skema basis data PostgreSQL, dan alur komunikasi API hybrid.",
          "Membangun portal Web Admin responsif serta Aplikasi Mobile interaktif berbasis Flutter/Dart.",
          "Membangun CI/CD otomatis menggunakan GitHub Actions serta pemantauan kualitas & keamanan kode via SonarCloud.",
          "Tercatat dengan intensitas pengembangan tinggi mencapai 489 Commits."
        ],
        technologies: ["Flutter", "Dart", "React", "Node.js", "GitHub Actions", "SonarCloud", "PostgreSQL"],
        metrics: "489 Commits",
        liveUrl: "https://logilearn.my.id",
        githubUrl: "https://github.com/mfaizadya/logilearn-admin-webapp",
        accentStrip: "#1e90ff "
      },
      {
        id: "neuronpath",
        title: "NeuronPath",
        imageUrl: "/assets/projects/neuronpath.png",
        role: "Fullstack Developer",
        category: "AI/ML",
        tags: ["SaaS", "AI Chat", "Web App"],
        period: "Feb 2026 - May 2026",
        summary: "Aplikasi SaaS interaktif bertenaga AI Chat dengan model tier langganan premium, terintegrasi OpenRouter AI dan database real-time Firebase.",
        contributions: [
          "Membangun antarmuka percakapan AI yang responsif dengan streaming respons real-time via OpenRouter AI.",
          "Mengintegrasikan autentikasi aman dan penyimpanan data serverless menggunakan Firebase.",
          "Menerapkan logika pembatasan kuota token serta fitur eksklusif untuk tier pengguna Free vs Premium."
        ],
        technologies: ["React", "OpenRouter AI", "Firebase", "Tailwind CSS", "SaaS"],
        metrics: "Live Deployed",
        githubUrl: "https://github.com/mfaizadya/NeuronPath",
        accentStrip: "#3cb371"
      },
      {
        id: "gamedev-lab",
        title: "Game Dev & Lab Projects",
        imageUrl: "/assets/projects/towerbloxx.png",
        role: "Game Artist & Designer",
        category: "Game Dev",
        tags: ["Game Dev", "Organization", "Godot"],
        period: "2024 – 2025",
        summary: "Pengembangan game indie Tower Bloxx berbasis Godot Engine serta kontribusi riset open project bersama ASE Lab Telkom University.",
        contributions: [
          "Merancang aset visual, antarmuka game, serta mekanik ketepatan fisika untuk Tower Bloxx di Godot Engine.",
          "Mengimplementasikan skrip logika permainan menggunakan GDScript dan C#.",
          "Berpartisipasi aktif dalam riset dan lokakarya internal divisi Game Developer Community di ASE Lab."
        ],
        technologies: ["Godot Engine", "GDScript", "C#", "Game Design", "ASE Lab"],
        metrics: "ASE Lab Open Project",
        githubUrl: "https://github.com/mfaizadya",
        accentStrip: "#8DA4BE"
      },
      {
        id: "codecraft-tasks",
        title: "CODECRAFT Intern Tasks",
        imageUrl: "/assets/projects/codecraft.png",
        role: "Web Development Intern",
        category: "Web Dev",
        tags: ["Internship", "Web Dev", "Vanilla JS"],
        period: "Des 2024 – Jan 2025",
        summary: "Penyelesaian dua proyek penugasan komprehensif selama program magang pengembangan web yang berfokus pada clean code dan responsivitas.",
        contributions: [
          "Membangun antarmuka web interaktif dengan standar kompatibilitas lintas peramban.",
          "Menerapkan best practice manipulasi DOM dan arsitektur modular Vanilla JavaScript."
        ],
        technologies: ["HTML5", "CSS3", "Vanilla JS", "Responsive Design"],
        metrics: "2 Submissions",
        githubUrl: "https://github.com/mfaizadya",
        accentStrip: "#4A4A4A"
      }
    ],

    experiences: [
      {
        id: "rh-petrogas-intern",
        role: "Information Technology Intern",
        organization: "RH Petrogas Companies in Indonesia, Jakarta Office",
        type: "Magang On-site",
        period: "Jul 2026 – Sept 2026",
        description: "Berkontribusi dalam pengembangan dan digitalisasi sistem informasi internal serta dukungan infrastruktur teknologi di lingkungan perusahaan migas.",
        highlights: [
          "Mengembangkan dan mengoptimalkan modul aplikasi internal berbasis web untuk mendukung efisiensi operasional.",
          "Berkoordinasi dengan tim IT dalam pemeliharaan basis data serta pemecahan kendala teknis sistem."
        ]
      },
      {
        id: "lab-assistant",
        role: "Asisten Praktikum",
        organization: "Telkom University · Faculty of Informatics",
        type: "Asistensi Akademik",
        period: "2025 – Sekarang",
        description: "Membimbing mahasiswa dalam sesi praktikum pemrograman serta membantu evaluasi pemahaman konsep rekayasa perangkat lunak dan algoritma sistem.",
        highlights: [
          "Membimbing sesi praktikum rutin dan memberikan asistensi teknis pemrograman kepada puluhan mahasiswa.",
          "Mengevaluasi kode tugas laboratorium (code review) dan memberikan masukan konstruktif terkait clean code serta struktur algoritma."
        ]
      },
      {
        id: "asah-dicoding",
        role: "React & Back-End with AI Cohort · Project Manager Capstone",
        organization: "Asah led by Dicoding",
        type: "Program Magang",
        period: "Sept 2025 – Jan 2026",
        description: "Terpilih dalam program intensif pengembangan fullstack web & AI. Memimpin tim Capstone CerdasKu sebagai Project Manager & Fullstack Dev hingga berhasil rilis di AWS dan Vercel dengan performa optimal.",
        highlights: [
          "Memimpin koordinasi sprint mingguan untuk tim 5+ developer lintas spesialisasi.",
          "Mengembangkan REST API aman berkinerja tinggi serta antarmuka React modern.",
          "Lulus dengan kualifikasi terbaik dan predikat proyek capstone unggulan."
        ]
      },
      {
        id: "codecraft-intern",
        role: "Web Development Intern",
        organization: "Codecraft Infotech",
        type: "Magang Remote",
        period: "Des 2024 – Jan 2025",
        description: "Menyelesaikan serangkaian penugasan front-end web development terstruktur dengan fokus pada rancangan UI/UX responsif, optimasi DOM, dan implementasi spesifikasi ketat.",
        highlights: [
          "Menghasilkan 2 submission proyek web dengan skor evaluasi tinggi.",
          "Meningkatkan keahlian fundamental arsitektur front-end tanpa library berat."
        ]
      }
    ],

    education: {
      institution: "Telkom University",
      degree: "S1 Rekayasa Perangkat Lunak (Software Engineering)",
      period: "2023 – Sekarang (Semester 6)",
      gpa: "3.52 / 4.00",
      activities: "Asisten Praktikum · Kontributor proyek tugas kuliah · Anggota Aktif ASE Lab (Divisi Game Developer Community)"
    },

    skills: {
      hardSkillsTitle: "Hard Skills & Languages",
      hardSkillsDesc: "Bahasa pemrograman & framework inti",
      hardSkills: [
        "JavaScript (ES6+)", "TypeScript", "React.js", "Node.js", "Express.js",
        "HTML5 & CSS3", "C#", "Java", "C++", "PostgreSQL", "MySQL",
        "Oracle SQL", "PHP", "Dart & Flutter", "GDScript", "Python"
      ],
      toolsTitle: "Tools, Cloud & DevOps",
      toolsDesc: "Infrastruktur cloud, CI/CD, dan alat desain",
      toolsAndCloud: [
        "Ansible", "Prometheus", "Grafana", "Docker", "GitOps", "Git & GitHub", "GitHub Actions (CI/CD)", "AWS (EC2, RDS)",
        "Firebase", "Vercel", "Tailwind CSS", "Shadcn UI", "SonarCloud",
        "Postman", "Figma"
      ],
      softSkillsTitle: "Soft Skills & Leadership",
      softSkillsDesc: "Keahlian kolaborasi tim & manajemen proyek",
      softSkills: [
        "Team Leadership", "Project Management", "Effective Communication",
        "Agile & Scrum", "Cross-functional Collaboration", "Problem Solving"
      ]
    },

    certifications: [
      {
        id: "cert-react",
        title: "Belajar Fundamental Aplikasi Web dengan React",
        issuer: "Dicoding Indonesia",
        year: "2025"
      },
      {
        id: "cert-backend",
        title: "Belajar Fundamental Back-End dengan JavaScript",
        issuer: "Dicoding Indonesia",
        year: "2025"
      },
      {
        id: "cert-ai",
        title: "Belajar Dasar AI",
        issuer: "Dicoding Indonesia",
        year: "2025"
      },
      {
        id: "cert-cloud-genai",
        title: "Belajar Dasar Cloud dan Gen AI",
        issuer: "Dicoding Indonesia",
        year: "2025"
      }
    ],

    achievements: [
      {
        id: "ach-capstone",
        title: "Capstone Project Terbaik dari tim A25-CS225 — CerdasKu",
        event: "Program Asah led by Dicoding in Association with Accenture",
        award: "Capstone Project Terbaik",
        year: "2026",
        description: "Proyek sistem prediksi gaya & pola belajar berbasis Machine Learning terpilih menjadi salah satu proyek capstone unggulan dengan standar arsitektur dan kepemimpinan terbaik.",
        certificateUrl: "https://drive.google.com/file/d/1BaqBzqmhMH0Hr6DZnXf1W1wHU-J_QbjO/view?usp=sharing"
      }
    ],

    labels: {
      nav: {
        home: "Home",
        projects: "Proyek",
        experience: "Pengalaman",
        achievements: "Prestasi",
        skills: "Skills",
        certifications: "Sertifikasi"
      },
      projects: {
        badge: "FEATURED WORK & CAPSTONE",
        title: "Proyek Unggulan",
        allCategory: "Semua",
        viewDetails: "Detail Spesifikasi →",
        contributionsHeader: "Kontribusi & Dampak Teknis",
        techStackHeader: "Tech Stack & Tools",
        viewRepo: "Lihat Repository",
        liveDemo: "Live Demo Website"
      },
      experience: {
        badge: "CAREER & APPRENTICESHIP TIMELINE",
        title: "Pengalaman & Apprenticeship",
        educationTitle: "Pendidikan & Akademik",
        gpaLabel: "IPK"
      },
      achievements: {
        badge: "HONORS & RECOGNITION",
        title: "Prestasi & Penghargaan"
      },
      skills: {
        badge: "TECHNICAL PROFICIENCY",
        title: "Keahlian Teknis & Kompetensi"
      },
      certifications: {
        badge: "OFFICIAL CREDENTIALS",
        title: "Sertifikasi Resmi"
      }
    }
  },

  en: {
    hero: {
      name: "Muhammad Faiz Adya",
      role: "Software Engineering Student · Fullstack Developer · AI Enthusiast",
      bio: "Software Engineering student at Telkom University with a deep passion for Fullstack Web Development, DevOps architecture, Project Management, and Artificial Intelligence integration. Experienced in building production-scale applications and leading teams focused on quality & performance.",
      statusPill: "AVAILABLE FOR NEW OPPORTUNITIES & APPRENTICESHIP",
      ctaExplore: "Explore Featured Projects",
      contacts: {
        email: "m.faiz.adya@gmail.com",
        linkedin: "https://linkedin.com/in/mfaizadya",
        github: "https://github.com/mfaizadya"
      },
      quickStats: [
        { label: "Repositories", value: "43" },
        { label: "Languages", value: "6+" },
        { label: "Followers", value: "7" },
        { label: "Status", value: "GitHub Pro" }
      ]
    },

    techMarquee: [
      "React 18", "TypeScript", "Node.js", "Express.js", "Tailwind CSS",
      "Flutter & Dart", "Docker", "AWS (EC2/RDS)", "Firebase", "PostgreSQL",
      "GitHub Actions", "SonarCloud", "Godot Engine", "GDScript", "Vercel"
    ],

    projects: [
      {
        id: "cerdasku",
        title: "CerdasKu — AI Learning Insight",
        imageUrl: "/assets/projects/cerdasku.png",
        role: "React & Back-End Dev · Project Manager",
        category: "AI/ML",
        tags: ["Fullstack", "AI/ML", "Capstone", "Cloud"],
        period: "Sep 2025 – Jan 2026",
        summary: "A Machine Learning-based learning style & pattern prediction platform designed as a flagship Capstone project for the Asah by Dicoding program.",
        contributions: [
          "Led cross-divisional project management (Machine Learning, Cloud Engineering, Front-End & Back-End) to ensure on-time release.",
          "Developed interactive user interface using React.js and built a fast, scalable Back-End API architecture.",
          "Deployed and integrated application ecosystem on AWS and Vercel infrastructure with a stable pipeline.",
          "Actively contributed 89 Commits to the main project repository."
        ],
        technologies: ["React", "Node.js", "AWS", "Vercel", "Machine Learning", "Tailwind CSS"],
        metrics: "89 Commits",
        githubUrl: "https://github.com/mfaizadya/AI-Learning-Insight",
        accentStrip: "#b19cd9"
      },
      {
        id: "logilearn",
        title: "LogiLearn",
        imageUrl: "/assets/projects/logilearn.png",
        role: "System Analyst & Fullstack Developer",
        category: "Fullstack",
        tags: ["Fullstack", "DevOps", "Hybrid", "CI/CD"],
        period: "2025 - 2026",
        summary: "A full-scale hybrid learning ecosystem featuring a Web Admin Dashboard and a Flutter mobile app, actively running on logilearn.my.id.",
        contributions: [
          "Designed system architecture specifications, PostgreSQL database schemas, and hybrid API communication flows.",
          "Built responsive Web Admin portal and interactive Mobile Application using Flutter/Dart.",
          "Established automated CI/CD using GitHub Actions and code quality/security monitoring via SonarCloud.",
          "Recorded high development intensity with 489 Commits."
        ],
        technologies: ["Flutter", "Dart", "React", "Node.js", "GitHub Actions", "SonarCloud", "PostgreSQL"],
        metrics: "489 Commits",
        liveUrl: "https://logilearn.my.id",
        githubUrl: "https://github.com/mfaizadya/logilearn-admin-webapp",
        accentStrip: "#1e90ff "
      },
      {
        id: "neuronpath",
        title: "NeuronPath",
        imageUrl: "/assets/projects/neuronpath.png",
        role: "Fullstack Developer",
        category: "AI/ML",
        tags: ["SaaS", "AI Chat", "Web App"],
        period: "Feb 2026 - May 2026",
        summary: "An interactive AI Chat-powered SaaS application featuring subscription tiers, integrated with OpenRouter AI and Firebase real-time database.",
        contributions: [
          "Built responsive AI conversation interface with real-time response streaming via OpenRouter AI.",
          "Integrated secure authentication and serverless data storage using Firebase.",
          "Implemented token quota limit logic and exclusive features for Free vs Premium user tiers."
        ],
        technologies: ["React", "OpenRouter AI", "Firebase", "Tailwind CSS", "SaaS"],
        metrics: "Live Deployed",
        githubUrl: "https://github.com/mfaizadya/NeuronPath",
        accentStrip: "#3cb371"
      },
      {
        id: "gamedev-lab",
        title: "Game Dev & Lab Projects",
        imageUrl: "/assets/projects/towerbloxx.png",
        role: "Game Artist & Designer",
        category: "Game Dev",
        tags: ["Game Dev", "Organization", "Godot"],
        period: "2024 – 2025",
        summary: "Development of indie game Tower Bloxx using Godot Engine alongside research contributions to open projects with ASE Lab Telkom University.",
        contributions: [
          "Designed visual assets, game interface, and physics precision mechanics for Tower Bloxx in Godot Engine.",
          "Implemented game logic scripts using GDScript and C#.",
          "Actively participated in research and internal workshops of the Game Developer Community division at ASE Lab."
        ],
        technologies: ["Godot Engine", "GDScript", "C#", "Game Design", "ASE Lab"],
        metrics: "ASE Lab Open Project",
        githubUrl: "https://github.com/mfaizadya",
        accentStrip: "#8DA4BE"
      },
      {
        id: "codecraft-tasks",
        title: "CODECRAFT Intern Tasks",
        imageUrl: "/assets/projects/codecraft.png",
        role: "Web Development Intern",
        category: "Web Dev",
        tags: ["Internship", "Web Dev", "Vanilla JS"],
        period: "Dec 2024 – Jan 2025",
        summary: "Completion of two comprehensive assignment projects during web development internship focusing on clean code and responsiveness.",
        contributions: [
          "Built interactive web interfaces meeting cross-browser compatibility standards.",
          "Applied DOM manipulation best practices and Vanilla JavaScript modular architecture."
        ],
        technologies: ["HTML5", "CSS3", "Vanilla JS", "Responsive Design"],
        metrics: "2 Submissions",
        githubUrl: "https://github.com/mfaizadya",
        accentStrip: "#4A4A4A"
      }
    ],

    experiences: [
      {
        id: "rh-petrogas-intern",
        role: "Information Technology Intern",
        organization: "RH Petrogas Companies in Indonesia, Jakarta Office",
        type: "On-site Internship",
        period: "Jul 2026 – Sep 2026",
        description: "Contributed to the development and digitalization of internal information systems and tech infrastructure support in an oil & gas corporate environment.",
        highlights: [
          "Developed and optimized web-based internal application modules to enhance operational efficiency.",
          "Coordinated with the IT team in database maintenance and technical system troubleshooting."
        ]
      },
      {
        id: "lab-assistant",
        role: "Practicum Assistant",
        organization: "Telkom University · Faculty of Informatics",
        type: "Academic Assistantship",
        period: "2025 – Present",
        description: "Guided students in programming lab sessions and assisted in evaluating understanding of software engineering concepts and system algorithms.",
        highlights: [
          "Guided routine practicum sessions and provided technical programming assistance to dozens of students.",
          "Evaluated lab assignment code (code reviews) and provided constructive feedback regarding clean code and algorithmic structure."
        ]
      },
      {
        id: "asah-dicoding",
        role: "React & Back-End with AI Cohort · Project Manager Capstone",
        organization: "Asah led by Dicoding",
        type: "Apprenticeship Program",
        period: "Sep 2025 – Jan 2026",
        description: "Selected for an intensive fullstack web & AI development program. Led the CerdasKu Capstone team as Project Manager & Fullstack Dev to a successful launch on AWS and Vercel with optimal performance.",
        highlights: [
          "Led weekly sprint coordination for a team of 5+ developers across multiple specialties.",
          "Developed high-performance, secure REST APIs and modern React user interfaces.",
          "Graduated with top qualifications and achieved a flagship capstone project award."
        ]
      },
      {
        id: "codecraft-intern",
        role: "Web Development Intern",
        organization: "Codecraft Infotech",
        type: "Remote Internship",
        period: "Dec 2024 – Jan 2025",
        description: "Completed a series of structured front-end web development assignments focusing on responsive UI/UX design, DOM optimization, and strict specification implementation.",
        highlights: [
          "Produced 2 web project submissions with high evaluation scores.",
          "Enhanced fundamental front-end architecture skills without heavy libraries."
        ]
      }
    ],

    education: {
      institution: "Telkom University",
      degree: "B.S. in Software Engineering",
      period: "2023 – Present (6th Semester)",
      gpa: "3.52 / 4.00",
      activities: "Practicum Assistant · Coursework Project Contributor · Active Member of ASE Lab (Game Developer Community Division)"
    },

    skills: {
      hardSkillsTitle: "Hard Skills & Languages",
      hardSkillsDesc: "Core programming languages & frameworks",
      hardSkills: [
        "JavaScript (ES6+)", "TypeScript", "React.js", "Node.js", "Express.js",
        "HTML5 & CSS3", "C#", "Java", "C++", "PostgreSQL", "MySQL",
        "Oracle SQL", "PHP", "Dart & Flutter", "GDScript", "Python"
      ],
      toolsTitle: "Tools, Cloud & DevOps",
      toolsDesc: "Cloud infrastructure, CI/CD, and design tools",
      toolsAndCloud: [
        "Ansible", "Prometheus", "Grafana", "Docker", "GitOps", "Git & GitHub", "GitHub Actions (CI/CD)", "AWS (EC2, RDS)",
        "Firebase", "Vercel", "Tailwind CSS", "Shadcn UI", "SonarCloud",
        "Postman", "Figma"
      ],
      softSkillsTitle: "Soft Skills & Leadership",
      softSkillsDesc: "Team collaboration & project management skills",
      softSkills: [
        "Team Leadership", "Project Management", "Effective Communication",
        "Agile & Scrum", "Cross-functional Collaboration", "Problem Solving"
      ]
    },

    certifications: [
      {
        id: "cert-react",
        title: "Web Application Fundamentals with React",
        issuer: "Dicoding Indonesia",
        year: "2025"
      },
      {
        id: "cert-backend",
        title: "Back-End Fundamentals with JavaScript",
        issuer: "Dicoding Indonesia",
        year: "2025"
      },
      {
        id: "cert-ai",
        title: "AI Basics & Fundamentals",
        issuer: "Dicoding Indonesia",
        year: "2025"
      },
      {
        id: "cert-cloud-genai",
        title: "Cloud & Gen AI Fundamentals",
        issuer: "Dicoding Indonesia",
        year: "2025"
      }
    ],

    achievements: [
      {
        id: "ach-capstone",
        title: "Best Capstone Project from Team A25-CS225 — CerdasKu",
        event: "Asah Program led by Dicoding in Association with Accenture",
        award: "Best Capstone Project",
        year: "2026",
        description: "Machine Learning-based learning style & pattern prediction system selected as a flagship capstone project with outstanding architecture and leadership standards.",
        certificateUrl: "https://drive.google.com/file/d/1BaqBzqmhMH0Hr6DZnXf1W1wHU-J_QbjO/view?usp=sharing"
      }
    ],

    labels: {
      nav: {
        home: "Home",
        projects: "Projects",
        experience: "Experience",
        achievements: "Achievements",
        skills: "Skills",
        certifications: "Certifications"
      },
      projects: {
        badge: "FEATURED WORK & CAPSTONE",
        title: "Featured Projects",
        allCategory: "All",
        viewDetails: "View Details →",
        contributionsHeader: "Key Contributions & Technical Impact",
        techStackHeader: "Tech Stack & Tools",
        viewRepo: "View Repository",
        liveDemo: "Live Demo Website"
      },
      experience: {
        badge: "CAREER & APPRENTICESHIP TIMELINE",
        title: "Experience & Apprenticeship",
        educationTitle: "Education & Academics",
        gpaLabel: "GPA"
      },
      achievements: {
        badge: "HONORS & RECOGNITION",
        title: "Achievements & Awards"
      },
      skills: {
        badge: "TECHNICAL PROFICIENCY",
        title: "Technical Skills & Competencies"
      },
      certifications: {
        badge: "OFFICIAL CREDENTIALS",
        title: "Official Certifications"
      }
    }
  }
};
