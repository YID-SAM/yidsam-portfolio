"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { Play, X } from "lucide-react";

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

            {/* Video */}

           <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: false }}
  transition={{ duration: .7 }}
>
  <button
    onClick={() => setOpen(true)}
    className="
      group
      relative
      w-full
      h-[360px]
      rounded-3xl
      overflow-hidden
      border
      border-violet-500/20
      hover:border-violet-500
      transition-all
      duration-500
      shadow-xl
      shadow-violet-500/20
    "
  >
    {/* Thumbnail */}
    <img
      src="/images/introduction-thumbnail.jpg"
      alt="Introduction Video"
      className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        group-hover:scale-105
        transition-transform
        duration-500
      "
    />

    {/* Dark Overlay */}
    <div
      className="
        absolute
        inset-0
        bg-black/45
        group-hover:bg-black/35
        transition
      "
    />

    {/* Play Button */}
    <div
      className="
        absolute
        inset-0
        flex
        items-center
        justify-center
      "
    >
      <div
        className="
          w-24
          h-24
          rounded-full
          bg-violet-600
          flex
          items-center
          justify-center
          shadow-2xl
          shadow-violet-500/40
          group-hover:scale-110
          transition
          duration-300
        "
      >
        <Play
          fill="white"
          size={42}
          className="ml-1"
        />
      </div>
    </div>

    {/* Bottom Text */}
    <div
      className="
        absolute
        bottom-6
        left-6
        right-6
      "
    >
      <span
        className="
          inline-block
          px-3
          py-1
          rounded-full
          bg-violet-600
          text-xs
          font-semibold
          mb-3
        "
      >
        INTRODUCTION
      </span>

      <h3 className="text-2xl font-bold text-white">
        Watch My Introduction
      </h3>

      <p className="text-gray-200 mt-2">
        Learn more about my creative journey.
      </p>
    </div>

    {/* Duration Badge */}
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
      1:35
    </div>

  </button>
</motion.div>
              
                {/* Placeholder */}

                <div className="absolute inset-0 bg-violet-600/10" />

                {/* Play Button */}

                <div
                  className="
                    absolute
                    inset-0
                    flex
                    flex-col
                    items-center
                    justify-center
                  "
                >
                  <div
                    className="
                      w-24
                      h-24
                      rounded-full
                      bg-violet-600
                      flex
                      items-center
                      justify-center
                      group-hover:scale-110
                      transition
                    "
                  >
                    <Play
                      fill="white"
                      className="ml-1"
                      size={40}
                    />
                  </div>

                  <h3 className="text-2xl font-bold mt-8">
                    View Introduction Video
                  </h3>

                  <p className="text-gray-400 mt-2">
                    Click to watch
                  </p>
                </div>
              </button>
            </motion.div>

            {/* About */}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
            >

              <h3 className="text-3xl font-bold mb-6">
                Bringing Ideas To Life Through Creativity
              </h3>

              <p className="text-gray-400 leading-8 mb-6">
                I am <span className="text-violet-400 font-semibold">
                  Yidnekachew Samuel
                </span>,
                a passionate creative professional dedicated to producing
                high-quality visual and audio content.
              </p>

              <p className="text-gray-400 leading-8 mb-8">
                I specialize in Graphic Design,
                Video Editing,
                Content Creation,
                and Professional Voice Over,
                helping brands tell their stories with creativity and impact.
              </p>

              <div className="grid grid-cols-2 gap-4">

                {[
                  "Graphic Design",
                  "Video Editing",
                  "Content Creation",
                  "Voice Over",
                ].map((skill) => (

                  <div
                    key={skill}
                    className="
                      bg-zinc-900
                      rounded-2xl
                      p-5
                      border
                      border-zinc-800
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

      {/* Video Modal */}

      {open && (

        <div
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
        >

          <button
            onClick={() => setOpen(false)}
            className="
              absolute
              top-6
              right-6
              bg-zinc-900
              p-3
              rounded-full
              hover:bg-violet-600
              transition
            "
          >
            <X size={24} />
          </button>

          <div
            className="
              w-full
              max-w-5xl
              aspect-video
              rounded-2xl
              overflow-hidden
            "
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/GjE4t8eBA6I?autoplay=1"
              title="Introduction Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

        </div>

      )}
    </>
  );
}