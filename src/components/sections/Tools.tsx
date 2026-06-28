"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { motion } from "framer-motion";

const tools = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe Premiere Pro",
  "CapCut",
  "Canva",
  "Audacity",
  "PixelLab",
];

export default function Tools() {
  return (
    <section
      id="tools"
      className="py-24 bg-black"
    >
      <Container>

        <SectionTitle
          title="Tools I Use"
          subtitle="Professional software I use to create high-quality creative work."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {tools.map((tool, index) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              className="
                bg-zinc-900
                rounded-2xl
                border
                border-zinc-800
                p-6
                flex
                items-center
                justify-center
                text-center
                hover:border-violet-500
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <p className="text-lg font-semibold text-white">
                {tool}
              </p>
            </motion.div>
          ))}

        </div>

      </Container>
    </section>
  );
}