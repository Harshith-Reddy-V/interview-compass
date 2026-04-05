import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import CompanyCarousel from "@/components/CompanyCarousel";
import ExperienceCard from "@/components/ExperienceCard";
import ExperienceFilters from "@/components/ExperienceFilters";
import { Button } from "@/components/ui/button";
import { mockExperiences } from "@/data/mockData";
import { Plus } from "lucide-react";

const Index = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [sortBy, setSortBy] = useState("latest");

  const filtered = useMemo(() => {
    let result = [...mockExperiences];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (e) => e.company.toLowerCase().includes(q) || e.role.toLowerCase().includes(q)
      );
    }

    if (difficulty !== "All") {
      result = result.filter((e) => e.difficulty === difficulty);
    }

    if (sortBy === "upvotes") {
      result.sort((a, b) => b.upvotes - a.upvotes);
    } else {
      result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    return result;
  }, [search, difficulty, sortBy]);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="container mx-auto px-4 pt-16 pb-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
          Ace your interview with{" "}
          <span className="text-primary">Interview Experience</span>
        </h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
          Real interview experiences from VIT students. Learn from peers, prepare better, and land your dream role.
        </p>
        {user && (
          <Button size="lg" className="mt-6" onClick={() => navigate("/add-experience")}>
            <Plus className="h-4 w-4" />
            Submit yours
          </Button>
        )}
      </section>

      <div className="container mx-auto px-4">
        <CompanyCarousel />

        {/* Experiences */}
        <section className="py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground">Experiences</h2>
          </div>

          <ExperienceFilters
            search={search}
            onSearchChange={setSearch}
            difficulty={difficulty}
            onDifficultyChange={setDifficulty}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />

          {filtered.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <p>No experiences found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
              {filtered.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Index;
