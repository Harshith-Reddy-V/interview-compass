import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const difficulties = ["Easy", "Medium", "Hard"];
const statuses = ["Selected", "Rejected"];
const workTypes = ["Remote", "Onsite", "Hybrid"];

const AddExperience = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    company: "",
    role: "",
    difficulty: "Medium",
    rounds: "",
    problems: "",
    status: "Selected",
    workType: "Onsite",
    experienceLevel: "0-1 years",
    tags: "",
    description: "",
  });

  const update = (key: string, val: string) => setForm((f) => ({ ...f, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success("Experience submitted successfully!");
      setLoading(false);
      navigate("/");
    }, 800);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-10 max-w-2xl">
        <h1 className="text-2xl font-bold text-foreground mb-1">Share your experience</h1>
        <p className="text-muted-foreground text-sm mb-8">Help fellow VIT students prepare better</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Company</Label>
              <Input placeholder="e.g. Amazon" value={form.company} onChange={(e) => update("company", e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label>Role</Label>
              <Input placeholder="e.g. SDE Intern" value={form.role} onChange={(e) => update("role", e.target.value)} required />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label>Difficulty</Label>
              <div className="flex flex-col gap-1">
                {difficulties.map((d) => (
                  <button key={d} type="button" onClick={() => update("difficulty", d)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${form.difficulty === d ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
                    {d}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label>Status</Label>
              <div className="flex flex-col gap-1">
                {statuses.map((s) => (
                  <button key={s} type="button" onClick={() => update("status", s)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${form.status === s ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label>Rounds</Label>
              <Input type="number" min={1} placeholder="3" value={form.rounds} onChange={(e) => update("rounds", e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label>Problems</Label>
              <Input type="number" min={0} placeholder="5" value={form.problems} onChange={(e) => update("problems", e.target.value)} required />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Work Type</Label>
              <div className="flex gap-1.5">
                {workTypes.map((w) => (
                  <button key={w} type="button" onClick={() => update("workType", w)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${form.workType === w ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
                    {w}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label>Experience Level</Label>
              <Input placeholder="e.g. 0-1 years" value={form.experienceLevel} onChange={(e) => update("experienceLevel", e.target.value)} />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Tags (comma separated)</Label>
            <Input placeholder="DSA, System Design, Behavioral" value={form.tags} onChange={(e) => update("tags", e.target.value)} />
          </div>

          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              placeholder="Describe your interview experience in detail..."
              className="min-h-[150px]"
              value={form.description}
              onChange={(e) => update("description", e.target.value)}
              required
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            {loading ? "Submitting..." : "Submit Experience"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddExperience;
