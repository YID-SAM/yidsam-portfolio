"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        id="about"
        className="py-24 bg-zinc-950"
      >
        <Container>

          <SectionTitle
            title="About Me"
            subtitle="Creative Designer, Video Editor, Content Creator & Voice Over Artist."
          />

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* ================= Video Card ================= */}

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <button
  onClick={() => setOpen(true)}
  className="
    group
    relative
    w-full
    aspect-video
    overflow-hidden
    rounded-3xl
    border
    border-violet-500/20
    shadow-2xl
    shadow-violet-500/10
    hover:border-violet-500
    transition-all
    duration-500
  "
>
  {/* Thumbnail */}
  <Image
    src="/images/introduction-thumbnail.jpg"
    alt="Introduction Video"
    fill
    priority
    className="
      object-cover
      transition-transform
      duration-500
      group-hover:scale-105
    "
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />

  {/* Play Button */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div
      className="
        w-20
        h-20
        md:w-24
        md:h-24
        rounded-full
        bg-violet-600
        flex
        items-center
        justify-center
        shadow-2xl
        shadow-violet-500/40
        group-hover:scale-110
        transition
      "
    >
      <Play
        fill="white"
        size={40}
        className="ml-1"
      />
    </div>
  </div>

  {/* Duration */}
  <div
    className="
      absolute
      right-4
      bottom-4
      bg-black/80
      px-3
      py-1
      rounded-lg
      text-sm
      font-medium
    "
  >
    35 sec
  </div>
</button>

            </motion.div>

            {/* ================= About Content ================= */}

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: .8 }}
            >

              <h3 className="text-4xl font-bold mb-6">
                Bringing Ideas To Life Through Creativity
              </h3>

              <p className="text-gray-400 leading-8 mb-6">
                I'm{" "}
                <span className="text-violet-400 font-semibold">
                  Yidnekachew Samuel
                </span>
                , a passionate creative professional dedicated to producing
                high-quality visual content, compelling videos,
                engaging social media content and professional
                voice over productions.
              </p>

              <p className="text-gray-400 leading-8 mb-10">
                My goal is simple:
                transform ideas into visuals that connect,
                inspire and leave a lasting impression.
              </p>

              <div className="grid grid-cols-2 gap-5"> 
                                {[
                  "Graphic Design",
                  "Video Editing",
                  "Content Creation",
                  "Voice Over",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="
                      rounded-2xl
                      border
                      border-zinc-800
                      bg-zinc-900
                      p-6
                      transition
                      duration-300
                      hover:border-violet-500
                      hover:-translate-y-1
                    "
                  >
                    <h4 className="font-semibold text-violet-400">
                      {skill}
                    </h4>
                  </div>
                ))}
              </div>

            </motion.div>

          </div>

        </Container>

      </section>

      {/* ================= Video Modal ================= */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[100]
              bg-black/90
              backdrop-blur-md
              flex
              items-center
              justify-center
              p-4
            "
            onClick={() => setOpen(false)}
          >

            <motion.div
              initial={{ scale: .8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: .8, opacity: 0 }}
              transition={{ duration: .3 }}
              className="
                relative
                w-full
                max-w-5xl
                aspect-video
                rounded-2xl
                overflow-hidden
                shadow-2xl
              "
              onClick={(e) => e.stopPropagation()}
            >

              {/* Close Button */}

              <button
                onClick={() => setOpen(false)}
                className="
                  absolute
                  top-4
                  right-4
                  z-20
                  bg-black/70
                  p-3
                  rounded-full
                  hover:bg-violet-600
                  transition
                "
              >
                <X size={22} />
              </button>

              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/GjE4t8eBA6I?autoplay=1&rel=0"
                title="Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
}