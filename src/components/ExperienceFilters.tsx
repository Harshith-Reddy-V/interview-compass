import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface Props {
  search: string;
  onSearchChange: (val: string) => void;
  difficulty: string;
  onDifficultyChange: (val: string) => void;
  sortBy: string;
  onSortChange: (val: string) => void;
  status: string;
  onStatusChange: (val: string) => void;
}

const difficulties = ["All", "Easy", "Medium", "Hard"];
const statuses = ["All", "Selected", "Rejected", "Ongoing"];
const sorts = [
  { value: "latest", label: "Latest" },
  { value: "upvotes", label: "Most Upvoted" },
];

const ExperienceFilters = ({
  search, onSearchChange, difficulty, onDifficultyChange,
  sortBy, onSortChange, status, onStatusChange,
}: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center flex-wrap">
        <div className="relative flex-1 w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search company or role..."
            className="pl-9"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <div className="flex gap-1.5 flex-wrap">
          {difficulties.map((d) => (
            <button
              key={d}
              onClick={() => onDifficultyChange(d)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                difficulty === d
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="flex gap-1.5">
          {sorts.map((s) => (
            <button
              key={s.value}
              onClick={() => onSortChange(s.value)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                sortBy === s.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <span className="hidden sm:block w-px h-5 bg-border" />

        <div className="flex gap-1.5 flex-wrap">
          {statuses.map((s) => (
            <button
              key={s}
              onClick={() => onStatusChange(s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                status === s
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceFilters;
