import { Experience } from "@/data/mockData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ThumbsUp, Bookmark, Share2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { useState } from "react";

interface Props {
  experience: Experience | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
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

const ExperienceDetailModal = ({ experience, open, onOpenChange }: Props) => {
  const { user } = useAuth();
  const [votes, setVotes] = useState(0);
  const [voted, setVoted] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  // Reset state when experience changes
  if (experience && votes === 0 && !voted) {
    // This is fine for initial render
  }

  if (!experience) return null;

  const handleUpvote = () => {
    if (!user) { toast.error("Login to upvote"); return; }
    setVoted(!voted);
    setVotes(voted ? experience.upvotes - 1 : experience.upvotes + 1);
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <img
              src={experience.companyLogo}
              alt={experience.company}
              className="h-14 w-14 rounded-xl object-contain bg-secondary p-2 flex-shrink-0"
              onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
            />
            <div className="min-w-0">
              <DialogTitle className="text-xl font-bold text-foreground">
                {experience.company}
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground mt-0.5">
                {experience.role}
              </DialogDescription>
            </div>
            <span className={`ml-auto text-sm font-semibold flex-shrink-0 ${statusColors[experience.status]}`}>
              {experience.status}
            </span>
          </div>
        </DialogHeader>

        <div className="flex flex-wrap gap-2 mt-2">
          <span className={`text-xs px-2.5 py-1 rounded-lg font-medium ${difficultyColors[experience.difficulty]}`}>
            {experience.difficulty}
          </span>
          <span className="text-xs px-2.5 py-1 rounded-lg bg-secondary text-secondary-foreground">
            {experience.rounds} rounds
          </span>
          <span className="text-xs px-2.5 py-1 rounded-lg bg-secondary text-secondary-foreground">
            {experience.problems} problems
          </span>
          <span className="text-xs px-2.5 py-1 rounded-lg bg-secondary text-secondary-foreground">
            {experience.workType}
          </span>
          <span className="text-xs px-2.5 py-1 rounded-lg bg-secondary text-secondary-foreground">
            {experience.experienceLevel}
          </span>
          {experience.stipend && (
            <span className="text-xs px-2.5 py-1 rounded-lg bg-success/10 text-success">
              💰 {experience.stipend}
            </span>
          )}
          {experience.cgpa && (
            <span className="text-xs px-2.5 py-1 rounded-lg bg-accent/10 text-accent-foreground">
              📊 CGPA: {experience.cgpa}
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5 mt-1">
          {experience.tags.map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-1 rounded-lg bg-primary/10 text-primary font-medium">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 p-4 rounded-xl bg-secondary/50 border border-border">
          <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
            {experience.description}
          </p>
        </div>

        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
          <button
            onClick={handleUpvote}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm transition-colors ${voted ? "bg-primary/15 text-primary" : "text-muted-foreground hover:bg-secondary"}`}
          >
            <ThumbsUp className="h-4 w-4" />
            {voted ? votes : experience.upvotes}
          </button>
          <button
            onClick={handleBookmark}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm transition-colors ${bookmarked ? "bg-primary/15 text-primary" : "text-muted-foreground hover:bg-secondary"}`}
          >
            <Bookmark className="h-4 w-4" />
            Save
          </button>
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-muted-foreground hover:bg-secondary transition-colors"
          >
            <Share2 className="h-4 w-4" />
            Share
          </button>
          <span className="ml-auto text-xs text-muted-foreground">{experience.createdAt}</span>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExperienceDetailModal;
