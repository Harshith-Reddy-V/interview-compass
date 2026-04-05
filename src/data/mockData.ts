import amazonLogo from "@/assets/logos/amazon.png";
import microsoftLogo from "@/assets/logos/microsoft.png";
import googleLogo from "@/assets/logos/google.png";
import oracleLogo from "@/assets/logos/oracle.png";
import goldmanSachsLogo from "@/assets/logos/goldman-sachs.png";
import infosysLogo from "@/assets/logos/infosys.png";
import tcsLogo from "@/assets/logos/tcs.png";
import metaLogo from "@/assets/logos/meta.png";

export interface Company {
  name: string;
  logo: string;
  type: "Product Based" | "Service Based";
  experienceCount: number;
}

export interface Experience {
  id: string;
  userId: string;
  company: string;
  companyLogo: string;
  role: string;
  difficulty: "Easy" | "Medium" | "Hard";
  rounds: number;
  problems: number;
  status: "Selected" | "Rejected" | "Ongoing";
  tags: string[];
  workType: "Remote" | "Onsite" | "Hybrid";
  experienceLevel: string;
  description: string;
  upvotes: number;
  createdAt: string;
}

export const companyLogos: Record<string, string> = {
  Amazon: amazonLogo,
  Microsoft: microsoftLogo,
  Google: googleLogo,
  Oracle: oracleLogo,
  "Goldman Sachs": goldmanSachsLogo,
  Infosys: infosysLogo,
  TCS: tcsLogo,
  Meta: metaLogo,
};

export const companies: Company[] = [
  { name: "Amazon", logo: amazonLogo, type: "Product Based", experienceCount: 42 },
  { name: "Microsoft", logo: microsoftLogo, type: "Product Based", experienceCount: 38 },
  { name: "Google", logo: googleLogo, type: "Product Based", experienceCount: 55 },
  { name: "Oracle", logo: oracleLogo, type: "Product Based", experienceCount: 21 },
  { name: "Goldman Sachs", logo: goldmanSachsLogo, type: "Product Based", experienceCount: 18 },
  { name: "Infosys", logo: infosysLogo, type: "Service Based", experienceCount: 30 },
  { name: "TCS", logo: tcsLogo, type: "Service Based", experienceCount: 25 },
  { name: "Meta", logo: metaLogo, type: "Product Based", experienceCount: 33 },
];

export const mockExperiences: Experience[] = [
  {
    id: "1",
    userId: "u1",
    company: "Amazon",
    companyLogo: amazonLogo,
    role: "Software Engineering Intern",
    difficulty: "Medium",
    rounds: 3,
    problems: 5,
    status: "Selected",
    tags: ["DSA", "System Design"],
    workType: "Onsite",
    experienceLevel: "0-1 years",
    description: "The interview process consisted of an online assessment with 2 coding questions, followed by two technical rounds focusing on data structures and algorithms. The final round was a behavioral interview discussing leadership principles.",
    upvotes: 24,
    createdAt: "2024-12-15",
  },
  {
    id: "2",
    userId: "u2",
    company: "Google",
    companyLogo: googleLogo,
    role: "Software Engineer",
    difficulty: "Hard",
    rounds: 5,
    problems: 8,
    status: "Rejected",
    tags: ["DSA", "System Design", "Behavioral"],
    workType: "Onsite",
    experienceLevel: "0-1 years",
    description: "Google's interview process was rigorous with 5 rounds. Two focused on coding with complex graph and dynamic programming problems. One system design round for designing a URL shortener, and two behavioral rounds.",
    upvotes: 45,
    createdAt: "2024-11-20",
  },
  {
    id: "3",
    userId: "u3",
    company: "Microsoft",
    companyLogo: microsoftLogo,
    role: "Product Management Intern",
    difficulty: "Medium",
    rounds: 3,
    problems: 2,
    status: "Selected",
    tags: ["Product Sense", "Case Study"],
    workType: "Hybrid",
    experienceLevel: "0-1 years",
    description: "Started with a phone screen about my background, followed by a product case study round where I had to improve Microsoft Teams for education. The final round was a cultural fit discussion with the hiring manager.",
    upvotes: 18,
    createdAt: "2025-01-05",
  },
  {
    id: "4",
    userId: "u4",
    company: "Goldman Sachs",
    companyLogo: goldmanSachsLogo,
    role: "Technology Analyst",
    difficulty: "Hard",
    rounds: 4,
    problems: 6,
    status: "Selected",
    tags: ["DSA", "OOPS", "Database"],
    workType: "Onsite",
    experienceLevel: "0-1 years",
    description: "The HackerRank test had 5 coding questions in 90 minutes. Then two technical rounds covering OOP concepts, SQL queries, and data structures. The final round focused on puzzles and behavioral questions.",
    upvotes: 32,
    createdAt: "2025-02-10",
  },
  {
    id: "5",
    userId: "u5",
    company: "Oracle",
    companyLogo: oracleLogo,
    role: "Application Developer",
    difficulty: "Easy",
    rounds: 2,
    problems: 3,
    status: "Selected",
    tags: ["Java", "SQL", "OOPS"],
    workType: "Remote",
    experienceLevel: "0-1 years",
    description: "A fairly straightforward process — online assessment with Java and SQL questions, followed by a single technical interview covering core Java concepts, design patterns, and database fundamentals.",
    upvotes: 12,
    createdAt: "2025-03-01",
  },
  {
    id: "6",
    userId: "u6",
    company: "Meta",
    companyLogo: metaLogo,
    role: "Frontend Engineer Intern",
    difficulty: "Hard",
    rounds: 4,
    problems: 7,
    status: "Rejected",
    tags: ["React", "JavaScript", "System Design"],
    workType: "Remote",
    experienceLevel: "1-2 years",
    description: "Phone screen followed by two coding rounds with focus on React internals and JavaScript closures. The system design round asked me to design a real-time chat system. Very competitive — got positive feedback but didn't make the final cut.",
    upvotes: 38,
    createdAt: "2025-01-22",
  },
  {
    id: "7",
    userId: "u7",
    company: "Infosys",
    companyLogo: infosysLogo,
    role: "Systems Engineer",
    difficulty: "Easy",
    rounds: 2,
    problems: 3,
    status: "Ongoing",
    tags: ["Aptitude", "Java", "Communication"],
    workType: "Onsite",
    experienceLevel: "0-1 years",
    description: "First round was an aptitude and coding test on their platform. Currently waiting for the technical interview round. The process seems straightforward so far with focus on basic programming and communication skills.",
    upvotes: 8,
    createdAt: "2025-03-20",
  },
];
