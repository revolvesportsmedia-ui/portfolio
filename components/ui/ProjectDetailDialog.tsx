import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectDetailDialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function ProjectDetailDialog({ isOpen, onClose, children }: ProjectDetailDialogProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Dialog content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] rounded-xl bg-surface-elevated border border-divider shadow-2xl overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-ink-muted hover:text-ink transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
