import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Experience } from "@/data/mockData";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import CompanyCarousel from "@/components/CompanyCarousel";
import ExperienceCard from "@/components/ExperienceCard";
import ExperienceFilters from "@/components/ExperienceFilters";
import { Button } from "@/components/ui/button";
import { useExperiences } from "@/contexts/ExperiencesContext";
import { Plus } from "lucide-react";
import ExperienceDetailModal from "@/components/ExperienceDetailModal";

const Index = () => {
  const { user } = useAuth();
  const { experiences } = useExperiences();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [sortBy, setSortBy] = useState("latest");
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [status, setStatus] = useState("All");
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

  const filtered = useMemo(() => {
    let result = [...experiences];

    if (selectedCompany) {
      result = result.filter((e) => e.company === selectedCompany);
    }

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (e) => e.company.toLowerCase().includes(q) || e.role.toLowerCase().includes(q)
      );
    }

    if (difficulty !== "All") {
      result = result.filter((e) => e.difficulty === difficulty);
    }

    if (status !== "All") {
      result = result.filter((e) => e.status === status);
    }

    if (sortBy === "upvotes") {
      result.sort((a, b) => b.upvotes - a.upvotes);
    } else {
      result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    return result;
  }, [search, difficulty, sortBy, selectedCompany, status]);

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
        <CompanyCarousel selectedCompany={selectedCompany} onCompanyClick={setSelectedCompany} />

        {/* Experiences */}
        <section className="py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground">
              {selectedCompany ? `${selectedCompany} Experiences` : "Experiences"}
            </h2>
            {selectedCompany && (
              <button
                onClick={() => setSelectedCompany(null)}
                className="text-xs text-primary hover:underline"
              >
                Show all
              </button>
            )}
          </div>

          <ExperienceFilters
            search={search}
            onSearchChange={setSearch}
            difficulty={difficulty}
            onDifficultyChange={setDifficulty}
            sortBy={sortBy}
            onSortChange={setSortBy}
            status={status}
            onStatusChange={setStatus}
          />

          {filtered.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <p>No experiences found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
              {filtered.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} onClick={() => setSelectedExp(exp)} />
              ))}
            </div>
          )}
        </section>
      </div>

      <ExperienceDetailModal
        experience={selectedExp}
        open={!!selectedExp}
        onOpenChange={(open) => !open && setSelectedExp(null)}
      />
    </div>
  );
};

export default Index;
