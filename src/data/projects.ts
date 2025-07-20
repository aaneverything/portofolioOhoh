export type Project = {
  id: number;
  title: string;
  role: string;
  duration: string;
  description: string;
  link: string;
  techStack: string[];
  bgImage: string;
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
    title: "SweetLifeApp",
    role: "Mobile Developer",
    duration: "2024",
    description: "AI-Powered Wellness & Diabetes-Friendly Lifestyle Companion.",
    link: "https://github.com/SweetLife-Core/SweetLifeApp",
    techStack: ["Kotlin", "Android Studio", "Golang", "PostgreSQL"],
    bgImage: "bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800"
  },
  {
    id: 2,
    title: "roastyourgram",
    role: "Fullstack Developer",
    duration: "2025",
    description: "A social media platform for coffee enthusiasts to share their favorite brews, cafes, and brewing techniques.",
    link: "https://roastyourgram.vercel.app",
    techStack: ["React", "Javascript", "Node.js"],
    bgImage: "bg-gradient-to-br from-green-600 via-teal-600 to-green-800"
  },
  {
    id: 3,
    title: "Resepku",
    role: "Fullstack Developer", 
    duration: "2025",
    description: "A modern recipe sharing and management platform built with Next.js 13+ App Router and JavaScript. Share your favorite recipes, discover new dishes, and manage your cooking collection with ease.",
    link: "https://resepku.tech",
    techStack: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Zod"],
    bgImage: "bg-gradient-to-br from-red-600 via-pink-600 to-red-800"
  },
  {
    id: 4,
    title: "SeeSawith",
    role: "Mobile Developer",
    duration: "2025",
    description: "SeeSawith is a cutting-edge Flutter application designed to predict diseases in oil palm leaf trees 🌴 by simply scanning the leaf. Empower farmers and researchers with instant insights to protect crops and ensure sustainable agriculture.",
    link: "https://github.com/aaneverything/seesawithMobile",
    techStack: ["Flutter", "Dart"],
    bgImage: "bg-gradient-to-br from-yellow-600 via-orange-600 to-yellow-800"
  },
  {
    id: 5,
    title: "WeatherApp",
    role: "Mobile Developer",
    duration: "2024",
    description: "A modern and responsive weather application providing real-time weather updates, forecasts, and alerts. Built with a focus on user experience and performance.",
    link: "https://github.com/aaneverything/weatherApp",
    techStack: ["Kotlin", "Android Studio"],
    bgImage: "bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-800"
  },
  {
    id: 6,
    title: "Mobile Banking App",
    role: "Mobile Developer",
    duration: "2023",
    description: "A secure mobile banking application with features like account management, money transfers, bill payments, and transaction history. Implements biometric authentication and follows banking security standards.",
    link: "https://github.com/aaneverything/mobile-banking",
    techStack: ["React Native", "Firebase", "Redux", "Expo"],
    bgImage: "bg-gradient-to-br from-purple-600 via-pink-600 to-purple-800"
  },
  // 📝 Template untuk menambah project baru:
  // {
  //   id: 7,
  //   title: "Nama Project Anda",
  //   role: "Posisi/Role Anda",
  //   duration: "Tahun/Periode",
  //   description: "Deskripsi lengkap project Anda. Jelaskan fitur-fitur utama, teknologi yang digunakan, dan masalah yang diselesaikan.",
  //   link: "https://github.com/username/project-name",
  //   techStack: ["Tech1", "Tech2", "Tech3", "Tech4"],
  //   bgImage: "bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-800"
  // },
];
