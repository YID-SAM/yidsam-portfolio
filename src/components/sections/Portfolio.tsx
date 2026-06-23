"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const projects = [
  {
    title: "Graphic Design Collection",
    category: "Graphic Design",
    image: "/images/projects/project1.jpg",
  },
  {
    title: "YouTube Video Editing",
    category: "Video Editing",
    image: "/images/projects/project2.jpg",
  },
  {
    title: "Social Media Campaign",
    category: "Content Creation",
    image: "/images/projects/project3.jpg",
  },
  {
    title: "Brand Identity",
    category: "Graphic Design",
    image: "/images/projects/project4.jpg",
  },
  {
    title: "Commercial Video",
    category: "Video Editing",
    image: "/images/projects/project5.jpg",
  },
  {
    title: "Voice Over Project",
    category: "Voice Over",
    image: "/images/projects/project6.jpg",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-28 bg-zinc-950"
    >
      <Container>

        <SectionTitle
          title="Portfolio"
          subtitle="A selection of creative projects showcasing design, editing, storytelling and visual communication."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: .6,
                delay: index * .12,
              }}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-zinc-800
                bg-white/[0.03]
                backdrop-blur-xl
              "
            >

              {/* Image */}

              <div className="relative h-72 overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/30
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                    flex
                    items-end
                    p-6
                  "
                >

                  <button
                    className="
                      flex
                      items-center
                      gap-2
                      px-5
                      py-3
                      rounded-xl
                      bg-violet-600
                      hover:bg-violet-500
                      transition
                    "
                  >
                    View Project

                    <ArrowUpRight size={18} />
                  </button>

                </div>

              </div>

              {/* Content */}

              <div className="p-7">

                <span
                  className="
                    inline-block
                    text-sm
                    text-violet-400
                    mb-3
                  "
                >
                  {project.category}
                </span>

                <h3
                  className="
                    text-2xl
                    font-semibold
                  "
                >
                  {project.title}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}