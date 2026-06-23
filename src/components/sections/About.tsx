"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const stats = [
  {
    number: "50+",
    title: "Projects Completed",
  },
  {
    number: "4+",
    title: "Years Experience",
  },
  {
    number: "100%",
    title: "Passion & Dedication",
  },
  {
    number: "24/7",
    title: "Creative Thinking",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-zinc-950"
    >
      <Container>

        <SectionTitle
          title="About Me"
          subtitle="Creative Designer, Video Editor, Content Creator and Voice Over Artist."
        />

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: .8 }}
          >
            <h3 className="text-4xl font-bold mb-8 leading-tight">
              Turning Ideas Into
              <span className="text-violet-500">
                {" "}Creative Experiences
              </span>
            </h3>

            <p className="text-gray-400 leading-8 text-lg mb-6">
              I am <span className="text-white font-semibold">
                Yidnekachew Samuel
              </span>, a passionate creative professional
              specializing in graphic design, video editing,
              content creation, and professional voice-over
              services.
            </p>

            <p className="text-gray-400 leading-8 text-lg mb-6">
              Every project is an opportunity to tell a
              story, strengthen a brand, and create an
              unforgettable experience through visuals,
              motion, and sound.
            </p>

            <p className="text-gray-400 leading-8 text-lg">
              My goal is not simply to design beautiful
              content, but to help businesses and creators
              communicate their message with confidence and
              creativity.
            </p>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: .8 }}
            className="grid grid-cols-2 gap-6"
          >

            {stats.map((item, index) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  delay: index * .15,
                  duration: .6,
                }}
                className="
                  group
                  rounded-3xl
                  border
                  border-zinc-800
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-violet-500
                  hover:bg-violet-500/5
                  hover:shadow-xl
                  hover:shadow-violet-500/10
                "
              >
                <h2
                  className="
                    text-4xl
                    font-bold
                    text-violet-500
                    mb-3
                  "
                >
                  {item.number}
                </h2>

                <p
                  className="
                    text-gray-400
                    leading-7
                  "
                >
                  {item.title}
                </p>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </Container>
    </section>
  );
}