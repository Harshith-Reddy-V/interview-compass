import { Experience } from "@/data/mockData";
import { ThumbsUp, Bookmark, Share2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { useState } from "react";

interface Props {
  experience: Experience;
  onClick?: () => void;
}

const difficultyColors: Record<string, string> = {
  Easy: "bg-success/15 text-success",
  Medium: "bg-warning/15 text-warning",
  Hard: "bg-destructive/15 text-destructive",
};

const statusColors: Record<string, string> = {
  Selected: "text-success",
  Rejected: "text-destructive",
  Ongoing: "text-primary",
};

const ExperienceCard = ({ experience, onClick }: Props) => {
  const { user } = useAuth();
  const [votes, setVotes] = useState(experience.upvotes);
  const [voted, setVoted] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleUpvote = () => {
    if (!user) { toast.error("Login to upvote"); return; }
    setVoted(!voted);
    setVotes(voted ? votes - 1 : votes + 1);
  };

  const handleBookmark = () => {
    if (!user) { toast.error("Login to bookmark"); return; }
    setBookmarked(!bookmarked);
    toast.success(bookmarked ? "Removed from bookmarks" : "Saved to bookmarks");
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied!");
  };

  return (
    <div onClick={onClick} className="rounded-xl border border-border bg-card p-5 hover:border-primary/30 transition-all duration-200 animate-fade-in cursor-pointer">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <img
            src={experience.companyLogo}
            alt={experience.company}
            loading="lazy"
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg object-contain bg-secondary p-1 flex-shrink-0"
            onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
          />
          <div className="min-w-0">
            <h3 className="font-semibold text-foreground text-sm truncate">{experience.company}</h3>
            <p className="text-xs text-muted-foreground truncate">{experience.role}</p>
          </div>
        </div>
        <span className={`text-xs font-medium flex-shrink-0 ${statusColors[experience.status]}`}>
          {experience.status}
        </span>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-3">
        <span className={`text-xs px-2 py-0.5 rounded-md font-medium ${difficultyColors[experience.difficulty]}`}>
          {experience.difficulty}
        </span>
        <span className="text-xs px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground">
          {experience.rounds} rounds
        </span>
        <span className="text-xs px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground">
          {experience.problems} problems
        </span>
        <span className="text-xs px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground">
          {experience.workType}
        </span>
        <span className="text-xs px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground">
          {experience.experienceLevel}
        </span>
        {experience.stipend && (
          <span className="text-xs px-2 py-0.5 rounded-md bg-success/10 text-success">
            💰 {experience.stipend}
          </span>
        )}
        {experience.cgpa && (
          <span className="text-xs px-2 py-0.5 rounded-md bg-accent text-accent-foreground">
            📊 CGPA: {experience.cgpa}
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-1.5 mt-2">
        {experience.tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-primary/10 text-primary">
            {tag}
          </span>
        ))}
      </div>

      <p className="text-sm text-muted-foreground mt-3 line-clamp-3 leading-relaxed">
        {experience.description}
      </p>

      <div className="flex items-center gap-1 mt-4 pt-3 border-t border-border">
        <button
          onClick={handleUpvote}
          className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs transition-colors ${voted ? "bg-primary/15 text-primary" : "text-muted-foreground hover:bg-secondary"}`}
        >
          <ThumbsUp className="h-3.5 w-3.5" />
          {votes}
        </button>
        <button
          onClick={handleBookmark}
          className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs transition-colors ${bookmarked ? "bg-primary/15 text-primary" : "text-muted-foreground hover:bg-secondary"}`}
        >
          <Bookmark className="h-3.5 w-3.5" />
        </button>
        <button
          onClick={handleShare}
          className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs text-muted-foreground hover:bg-secondary transition-colors"
        >
          <Share2 className="h-3.5 w-3.5" />
        </button>
        <span className="ml-auto text-xs text-muted-foreground">{experience.createdAt}</span>
      </div>
    </div>
  );
};

export default ExperienceCard;
