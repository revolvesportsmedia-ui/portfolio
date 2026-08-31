import { Dialog, DialogContent } from "@/components/ui/ProjectDetailDialog";
import { type Project } from "@/lib/data";
import { motion } from "framer-motion";

interface FlowcusDetailProps {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FlowcusDetail({ project, open, onOpenChange }: FlowcusDetailProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0">
        <div className="rounded-lg border border-divider bg-surface-elevated shadow-card overflow-hidden">
          {/* Browser Mockup Header */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-divider bg-surface">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 mx-4 p-1 rounded-md bg-surface-muted text-center text-xs text-ink-muted">
              Flowcus.app
            </div>
            <div className="w-8" /> {/* Placeholder for alignment */}
          </div>

          {/* Main Content Area */}
          <div className="p-8 sm:p-10 lg:p-12 space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[32px] sm:text-[40px] font-semibold tracking-tight text-ink"
            >
              {project.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[18px] text-ink-muted"
            >
              {project.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2>The Problem</h2>
              <p>{project.details?.problem}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2>The Approach</h2>
              <p>{project.details?.approach}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2>What I Built</h2>
              <p>{project.details?.built}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2>Why It Matters</h2>
              <p>{project.details?.why_it_matters}</p>
            </motion.div>

            {/* Placeholder for actual product interface visuals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-surface border border-divider rounded-lg h-96 flex items-center justify-center text-ink-muted"
            >
              <p>Flowcus Product Interface Mockup</p>
            </motion.div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
