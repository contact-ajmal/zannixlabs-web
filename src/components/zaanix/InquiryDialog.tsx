import { useState, type FormEvent } from "react";
import confetti from "canvas-confetti";
import { toast } from "sonner";
import { Send, Building, Mail, User, MessageSquare, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CYAN = "#00F2FE";
const VIOLET = "#7B2CBF";

interface InquiryDialogProps {
  children?: React.ReactNode;
}

export function InquiryDialog({ children }: InquiryDialogProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    const trimmedMsg = message.trim();

    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmedEmail)) {
      toast.error("Please provide a valid academic or professional email address");
      return;
    }

    if (trimmedMsg.length < 10) {
      toast.error("Please provide more detail regarding your inquiry (minimum 10 characters)");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim() || undefined,
          email: trimmedEmail,
          organization: organization.trim() || undefined,
          message: trimmedMsg,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Inquiry submission failed");
      }

      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: [CYAN, VIOLET, "#ffffff"],
      });

      toast.success("Collaboration Inquiry Dispatched", {
        description: data.message || "Thank you. Our Principal Investigators will review your inquiry.",
      });

      // Reset & close
      setName("");
      setEmail("");
      setOrganization("");
      setMessage("");
      setOpen(false);
    } catch (err: any) {
      toast.error(err.message || "Could not submit inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button variant="glow">
            Submit Academic Inquiry <Sparkles className="ml-2 size-4" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="border-primary/40 bg-background/95 backdrop-blur-2xl sm:max-w-lg">
        <DialogHeader className="space-y-2">
          <div className="flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="size-3.5" />
            <span>INSTITUTIONAL COLLABORATION</span>
          </div>
          <DialogTitle className="font-display text-2xl font-bold text-foreground">
            Connect with ZannixLabs PIs
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground leading-relaxed">
            Submit dataset proposals, academic peer-review invitations, or inquiries to replicate empirical findings across our autonomous AI pipeline.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="space-y-1.5">
            <label className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
              <User className="size-3 text-primary" /> Principal Investigator / Name
            </label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Dr. Katherine Johnson"
              className="bg-glass text-sm h-9"
              maxLength={120}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                <Mail className="size-3 text-primary" /> Academic / Institutional Email *
              </label>
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="kjohnson@lab.org"
                className="bg-glass text-sm h-9"
                maxLength={255}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                <Building className="size-3 text-primary" /> Organization / Lab
              </label>
              <Input
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="Department of AI / University"
                className="bg-glass text-sm h-9"
                maxLength={150}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
              <MessageSquare className="size-3 text-primary" /> Collaboration Scope or Dataset Brief *
            </label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your research question, candidate telemetry dataset (e.g. scale, modality), or replication request..."
              className="w-full rounded-md border border-border bg-glass px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary resize-none"
              maxLength={2000}
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setOpen(false)}
              className="text-xs font-mono"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="glow"
              size="sm"
              disabled={isSubmitting}
              className="text-xs font-mono"
            >
              {isSubmitting ? "Dispatching..." : (
                <>
                  Transmit to Institute <Send className="ml-1.5 size-3.5" />
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
