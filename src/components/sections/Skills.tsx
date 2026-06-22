"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const skills = [
  {
    name: "Graphic Design",
    percentage: 95,
  },
  {
    name: "Video Editing",
    percentage: 92,
  },
  {
    name: "Content Creation",
    percentage: 90,
  },
  {
    name: "Voice Over",
    percentage: 88,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-zinc-950"
    >
      <Container>
        <SectionTitle
          title="My Skills"
          subtitle="Years of experience crafting creative solutions across multiple disciplines."
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold">
                  {skill.name}
                </span>

                <span className="text-violet-400">
                  {skill.percentage}%
                </span>
              </div>

              <div
                className="
                  h-4
                  bg-zinc-800
                  rounded-full
                  overflow-hidden
                "
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${skill.percentage}%`,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                  }}
                  className="
                    h-full
                    bg-violet-500
                    rounded-full
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}