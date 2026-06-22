"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const tools = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe Premiere Pro",
  "Adobe After Effects",
  "Adobe Audition",
  "Canva",
  "CapCut",
  "Figma",
];

export default function Tools() {
  return (
    <section
      id="tools"
      className="py-24 bg-zinc-950"
    >
      <Container>
        <SectionTitle
          title="Tools & Software"
          subtitle="Professional tools I use to deliver high-quality creative work."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              className="
                bg-zinc-900
                border
                border-zinc-800
                rounded-2xl
                p-6
                text-center
                hover:border-violet-500
                transition-all
              "
            >
              <h3 className="font-semibold">
                {tool}
              </h3>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}