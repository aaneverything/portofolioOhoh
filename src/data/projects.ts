export type Project = {
  id: number;
  title: string;
  role: string;
  duration: string;
  description: string;
  link: string;
  techStack: string[];
  bgImage: string;
  image?: string;
};

// 🎨 Available background gradients:
// "bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800"
// "bg-gradient-to-br from-green-600 via-teal-600 to-green-800"
// "bg-gradient-to-br from-red-600 via-pink-600 to-red-800"
// "bg-gradient-to-br from-yellow-600 via-orange-600 to-yellow-800"
// "bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-800"
// "bg-gradient-to-br from-purple-600 via-pink-600 to-purple-800"
// "bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-800"
// "bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-800"
// "bg-gradient-to-br from-pink-600 via-rose-600 to-pink-800"
// "bg-gradient-to-br from-amber-600 via-yellow-600 to-amber-800"

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Justisia — Indonesian Legal AI Chatbot",
    role: "AI Engineer (Final Thesis)",
    duration: "2025",
    description:
      "AI legal chatbot using Retrieval-Augmented Generation (RAG) to answer questions grounded in Indonesian laws and regulations. Built the ingestion pipeline, semantic search, and vector indexing, with hybrid retrieval and reranking for factual consistency.",
    link: "#",
    techStack: [
      "Python",
      "LangChain",
      "Qdrant",
      "Google Gemini",
      "Sentence Transformers",
    ],
    bgImage: "bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-800",
  },
  {
    id: 4,
    title: "SweetLife — AI Wellness Companion",
    role: "Mobile Developer",
    duration: "2024",
    description:
      "AI-powered wellness app delivering personalized, diabetes-friendly lifestyle recommendations. Focused on accessible, engaging UI built with a cross-functional team.",
    link: "https://github.com/SweetLife-Core/SweetLifeApp",
    techStack: ["Kotlin", "Android Studio", "Golang", "PostgreSQL"],
    bgImage: "bg-gradient-to-br from-purple-600 via-pink-600 to-purple-800",
  },
  {
    id: 5,
    title: "Resepku — Recipe Discovery Platform",
    role: "Frontend Developer",
    duration: "2025",
    description:
      "Modern recipe platform supporting text and image-based discovery. Responsive, component-based UI with search and dynamic content over REST APIs.",
    link: "https://resepku.tech",
    techStack: ["Next.js", "React", "Prisma", "PostgreSQL"],
    bgImage: "bg-gradient-to-br from-red-600 via-pink-600 to-red-800",
  },
  {
    id: 2,
    title: "EV Charging Management System",
    role: "Frontend Developer",
    duration: "2026",
    description:
      "Real-time EV charging platform for monitoring sessions and station activity. Built responsive user/admin dashboards over REST + WebSocket (OCPP) with live status, QR station access, OTP auth, and payment integration.",
    link: "https://qrem.app",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Laravel",
      "PostgreSQL",
      "WebSocket",
    ],
    bgImage: "bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-800",
    image: "qrem.png",
  },
  {
    id: 3,
    title: "ASAP Monitor — IoT Real-Time Dashboard",
    role: "Full Stack Developer",
    duration: "2026",
    description:
      "Real-time IoT dashboard visualizing environmental and water-quality sensor data from ESP32 devices. Live charts, gauges, and actuator control over Socket.IO, on a Dockerized architecture connecting devices, backend, and frontend.",
    link: "https://smokefilter.my.id",
    techStack: [
      "Next.js",
      "Node.js",
      "Socket.IO",
      "PostgreSQL",
      "Redis",
      "Docker",
      "ESP32",
    ],
    bgImage: "bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-800",
    image: "/asap.png",
  },
  {
    id: 6,
    title: "Jack's Place Catering",
    role: "Frontend Developer",
    duration: "2026",
    description:
      "Online catering platform for Jack's Place SG. Built responsive web pages for menu browsing, catering packages, and online order bookings.",
    link: "https://jacksplace.com.sg/catering/",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    bgImage: "bg-gradient-to-br from-yellow-600 via-orange-600 to-yellow-800",
    image: "/jack.png",
  },
  {
    id: 7,
    title: "Web Profile Desa Bukit Bakar",
    role: "Fullstack Developer",
    duration: "to be launched",
    description:
      "Official village profile and public information portal for Desa Bukit Bakar. Features village statistics, news publication, public service info, and administrative announcements built on Golang and React.",
    link: "#",
    techStack: ["Golang", "React", "PostgreSQL"],
    bgImage: "bg-gradient-to-br from-red-600 via-pink-600 to-red-800",
    image: "/bukit.png",
  },
];
