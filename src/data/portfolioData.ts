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

export const PORTFOLIO_DATA = {
  hero: {
    name: "Muhammad Faiz Adya",
    role: "Software Engineering Student · Fullstack Developer · AI Enthusiast",
    bio: "Mahasiswa Rekayasa Perangkat Lunak di Universitas Telkom dengan ketertarikan mendalam pada pengembangan Web Fullstack, arsitektur DevOps, Project Management, serta integrasi Artificial Intelligence. Terbiasa membangun aplikasi skala produksi dan memimpin tim berfokus pada kualitas & performa.",
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
  ] as ProjectItem[],

  experiences: [
    {
      id: "rh-petrogas-intern",
      role: "Information Technology Intern",
      organization: "RH Petrogas Companies in Indonesia, Jakarta Office ",
      type: "On-site Internship",
      period: "Jul 2026 – Sept 2026",
      description: "Berkontribusi dalam pengembangan dan digitalisasi sistem informasi internal serta dukungan infrastruktur teknologi di lingkungan perusahaan migas.",
      highlights: [
        "Mengembangkan dan mengoptimalkan modul aplikasi internal berbasis web untuk mendukung efisiensi operasional.",
        "Berkoordinasi dengan tim IT dalam pemeliharaan basis data serta pemecahan kendala teknis sistem."
      ]
    },
    {
      id: "lab-assistant",
      role: "Practicum Assistant",
      organization: "Telkom University · Faculty of Informatics",
      type: "Academic Assistantship",
      period: "2025 – Sekarang",
      description: "Membimbing mahasiswa dalam sesi praktikum pemrograman serta membantu evaluasi pemahaman konsep rekayasa perangkat lunak dan algoritma sistem.",
      highlights: [
        "Membimbing sesi praktikum rutin dan memberikan asistensi teknis pemrograman kepada puluhan mahasiswa.",
        "Mengevaluasi kode tugas laboratorium (*code review*) dan memberikan masukan konstruktif terkait clean code serta struktur algoritma."
      ]
    },
    {
      id: "asah-dicoding",
      role: "React & Back-End with AI Cohort · Project Manager Capstone",
      organization: "Asah led by Dicoding",
      type: "Apprenticeship Program",
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
      type: "Remote Internship",
      period: "Des 2024 – Jan 2025",
      description: "Menyelesaikan serangkaian penugasan front-end web development terstruktur dengan fokus pada rancangan UI/UX responsif, optimasi DOM, dan implementasi spesifikasi ketat.",
      highlights: [
        "Menghasilkan 2 submission proyek web dengan skor evaluasi tinggi.",
        "Meningkatkan keahlian fundamental arsitektur front-end tanpa library berat."
      ]
    }
  ] as ExperienceItem[],

  education: {
    institution: "Telkom University",
    degree: "S1 Rekayasa Perangkat Lunak (Software Engineering)",
    period: "2023 – Sekarang (Semester 6)",
    gpa: "3.52 / 4.00",
    activities: "Asisten Praktikum · Kontributor proyek tugas kuliah · Anggota Aktif ASE Lab (Divisi Game Developer Community)"
  } as EducationItem,

  skills: {
    hardSkills: [
      "JavaScript (ES6+)", "TypeScript", "React.js", "Node.js", "Express.js",
      "HTML5 & CSS3", "C#", "Java", "C++", "PostgreSQL", "MySQL",
      "Oracle SQL", "PHP", "Dart & Flutter", "GDScript", "Python"
    ],
    toolsAndCloud: [
      "Ansible", "Prometheus", "Grafana", "Docker", "GitOps", "Git & GitHub", "GitHub Actions (CI/CD)", "AWS (EC2, RDS)",
      "Firebase", "Vercel", "Tailwind CSS", "Shadcn UI", "SonarCloud",
      "Postman", "Figma"
    ],
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
  ] as CertificationItem[],

  achievements: [
    {
      id: "ach-capstone",
      title: "Capstone Project Terbaik dari tim A25-CS225 — CerdasKu",
      event: "Program Asah led by Dicoding in Association with Accenture",
      award: "Capstone Project Terbaik",
      year: "2026",
      description: "Proyek sistem prediksi gaya & pola belajar berbasis Machine Learning terpilih menjadi salah satu proyek capstone unggulan dengan standar arsitektur dan kepemimpinan terbaik.",
      certificateUrl: "https://drive.google.com/file/d/1BaqBzqmhMH0Hr6DZnXf1W1wHU-J_QbjO/view?usp=sharing"
    },

  ] as AchievementItem[]
};
