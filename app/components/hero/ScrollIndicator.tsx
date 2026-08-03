"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{
        repeat: Infinity,
        duration: 1.8,
      }}
      className="
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        text-white/70
      "
    >
      <ChevronDown size={34} />
    </motion.div>
  );
}