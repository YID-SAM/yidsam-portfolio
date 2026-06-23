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
      className="py-28 bg-zinc-950"
    >
      <Container>

        <SectionTitle
          title="Skills"
          subtitle="A combination of creativity, technical expertise, and storytelling developed through years of practical experience."
        />

        <div className="max-w-4xl mx-auto space-y-8">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="
                rounded-3xl
                border
                border-zinc-800
                bg-white/[0.03]
                backdrop-blur-xl
                p-6
              "
            >
              <div className="flex justify-between mb-4">

                <h3
                  className="
                    text-lg
                    font-semibold
                  "
                >
                  {skill.name}
                </h3>

                <span
                  className="
                    text-violet-400
                    font-semibold
                  "
                >
                  {skill.percentage}%
                </span>

              </div>

              <div
                className="
                  w-full
                  h-3
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
                  viewport={{ once: false }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.2,
                  }}
                  className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-violet-600
                    to-cyan-500
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