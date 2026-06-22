"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const projects = [
  {
    title: "Brand Identity Design",
    category: "Graphic Design",
    image: "/images/projects/project1.jpg",
  },
  {
    title: "Marketing Poster",
    category: "Graphic Design",
    image: "/images/projects/project2.jpg",
  },
  {
    title: "YouTube Documentary",
    category: "Video Editing",
    image: "/images/projects/project3.jpg",
  },
  {
    title: "Commercial Video",
    category: "Video Editing",
    image: "/images/projects/project4.jpg",
  },
  {
    title: "Social Media Campaign",
    category: "Content Creation",
    image: "/images/projects/project5.jpg",
  },
  {
    title: "Voice Over Demo",
    category: "Voice Over",
    image: "/images/projects/project6.jpg",
  },
];

const categories = [
  "All",
  "Graphic Design",
  "Video Editing",
  "Content Creation",
  "Voice Over",
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeCategory
        );

  return (
    <section
      id="projects"
      className="py-24 bg-zinc-950"
    >
      <Container>
        <SectionTitle
          title="Featured Projects"
          subtitle="A showcase of my creative work."
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setActiveCategory(category)
              }
              className={`
                px-5 py-2 rounded-full transition
                ${
                  activeCategory === category
                    ? "bg-violet-600 text-white"
                    : "bg-zinc-900 text-gray-300"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(
            (project, index) => (
              <motion.div
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="
                  overflow-hidden
                  rounded-3xl
                  bg-zinc-900
                  border
                  border-zinc-800
                  group
                "
              >
                <div className="overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="
                      w-full
                      h-60
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />
                </div>

                <div className="p-6">
                  <span className="text-violet-400 text-sm">
                    {project.category}
                  </span>

                  <h3 className="text-xl font-bold mt-2">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            )
          )}
        </div>
      </Container>
    </section>
  );
}