import React, { createContext, useContext, useState, ReactNode } from "react";
import { Experience, mockExperiences, companyLogos } from "@/data/mockData";

interface ExperiencesContextType {
  experiences: Experience[];
  addExperience: (data: {
    company: string;
    role: string;
    difficulty: string;
    rounds: string;
    problems: string;
    status: string;
    workType: string;
    experienceLevel: string;
    tags: string;
    description: string;
    stipend?: string;
    cgpa?: string;
  }, userId: string) => void;
}

const ExperiencesContext = createContext<ExperiencesContextType | undefined>(undefined);

export const useExperiences = () => {
  const ctx = useContext(ExperiencesContext);
  if (!ctx) throw new Error("useExperiences must be used within ExperiencesProvider");
  return ctx;
};

export const ExperiencesProvider = ({ children }: { children: ReactNode }) => {
  const [experiences, setExperiences] = useState<Experience[]>(mockExperiences);

  const addExperience = (data: any, userId: string) => {
    const newExp: Experience = {
      id: crypto.randomUUID(),
      userId,
      company: data.company,
      companyLogo: companyLogos[data.company] || "/placeholder.svg",
      role: data.role,
      difficulty: data.difficulty as Experience["difficulty"],
      rounds: parseInt(data.rounds) || 1,
      problems: parseInt(data.problems) || 0,
      status: data.status as Experience["status"],
      tags: data.tags ? data.tags.split(",").map((t: string) => t.trim()).filter(Boolean) : [],
      workType: data.workType as Experience["workType"],
      experienceLevel: data.experienceLevel,
      description: data.description,
      upvotes: 0,
      createdAt: new Date().toISOString().split("T")[0],
      stipend: data.stipend || undefined,
      cgpa: data.cgpa || undefined,
    };
    setExperiences((prev) => [newExp, ...prev]);
  };

  return (
    <ExperiencesContext.Provider value={{ experiences, addExperience }}>
      {children}
    </ExperiencesContext.Provider>
  );
};
