import React from "react";
import { motion } from "framer-motion";

export function SpecCheckDetail() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="page-container py-16 md:py-24"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-5xl font-bold tracking-tight text-ink mb-6"
        >
          SpecCheck
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-xl text-ink-muted mb-12"
        >
          Engineering the conditions for deep focus.
        </motion.p>

        {/* Large Product Visual Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="w-full h-96 bg-gradient-to-br from-surface-elevated to-surface border border-divider rounded-xl shadow-lg flex items-center justify-center mb-16"
        >
          <span className="text-ink-muted text-lg">Product Visual / Mockup Placeholder</span>
        </motion.div>

        {/* The Problem */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-3xl font-semibold text-ink mb-4"
          >
            The Problem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="body-text"
          >
            Modern productivity tools often focus on managing tasks rather than managing attention. I wanted to explore whether software could help users intentionally create the conditions for deep focus.
          </motion.p>
        </div>

        {/* The Approach */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-3xl font-semibold text-ink mb-4"
          >
            The Approach
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="body-text"
          >
            SpecCheck translates principles from cognitive science and human performance into a structured experience designed to reduce distractions, establish attention cues, and progressively engage the user with their task.
          </motion.p>
        </div>

        {/* What I Built */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="text-3xl font-semibold text-ink mb-4"
          >
            What I Built
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="body-text"
          >
            I built the full-stack application using HTML, CSS, and JavaScript, including the underlying product logic, interface, interactions, and the complete flow-state experience.
          </motion.p>
        </div>

        {/* Why It Matters */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="text-3xl font-semibold text-ink mb-4"
          >
            Why It Matters
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="body-text"
          >
            Technology should expand what humans are capable of doing, not simply automate humans out of the process. SpecCheck is an exploration into augmenting human capability through thoughtful software design.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}