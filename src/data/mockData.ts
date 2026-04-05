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
  status: "Selected" | "Rejected";
  tags: string[];
  workType: "Remote" | "Onsite" | "Hybrid";
  experienceLevel: string;
  description: string;
  upvotes: number;
  createdAt: string;
}

export const companies: Company[] = [
  { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com", type: "Product Based", experienceCount: 42 },
  { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com", type: "Product Based", experienceCount: 38 },
  { name: "Google", logo: "https://logo.clearbit.com/google.com", type: "Product Based", experienceCount: 55 },
  { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com", type: "Product Based", experienceCount: 21 },
  { name: "Goldman Sachs", logo: "https://logo.clearbit.com/goldmansachs.com", type: "Product Based", experienceCount: 18 },
  { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com", type: "Service Based", experienceCount: 30 },
  { name: "TCS", logo: "https://logo.clearbit.com/tcs.com", type: "Service Based", experienceCount: 25 },
  { name: "Meta", logo: "https://logo.clearbit.com/meta.com", type: "Product Based", experienceCount: 33 },
];

export const mockExperiences: Experience[] = [
  {
    id: "1",
    userId: "u1",
    company: "Amazon",
    companyLogo: "https://logo.clearbit.com/amazon.com",
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
    companyLogo: "https://logo.clearbit.com/google.com",
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
    companyLogo: "https://logo.clearbit.com/microsoft.com",
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
    companyLogo: "https://logo.clearbit.com/goldmansachs.com",
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
    companyLogo: "https://logo.clearbit.com/oracle.com",
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
    companyLogo: "https://logo.clearbit.com/meta.com",
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
];
