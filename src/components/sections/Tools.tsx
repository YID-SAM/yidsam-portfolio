"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const tools = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe Premiere Pro",
  "After Effects",
  "Audition",
  "Canva",
  "CapCut",
  "ChatGPT",
];

export default function Tools() {
  return (
    <section
      id="tools"
      className="py-28 bg-black"
    >
      <Container>

        <SectionTitle
          title="Tools & Software"
          subtitle="Professional tools that power my creative workflow and help deliver high-quality results."
        />

        <div className="flex flex-wrap justify-center gap-5">

          {tools.map((tool, index) => (

            <motion.div
              key={tool}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              className="
                px-6
                py-4
                rounded-2xl
                border
                border-zinc-800
                bg-white/[0.03]
                backdrop-blur-xl
                text-white
                transition-all
                duration-300
                hover:border-violet-500
                hover:bg-violet-500/10
                hover:-translate-y-1
              "
            >
              {tool}
            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}