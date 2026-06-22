"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
        min-h-screen
        flex
        items-center
        bg-gradient-to-b
        from-black
        to-zinc-950
        pt-28
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          grid
          lg:grid-cols-2
          gap-12
          items-center
        "
      >
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span
            className="
              inline-block
              px-4
              py-2
              rounded-full
              bg-violet-500/10
              text-violet-400
              text-sm
              mb-6
            "
          >
            Available For Freelance Work
          </span>

          <h1
            className="
              text-5xl
              md:text-7xl
              font-bold
              leading-tight
              mb-6
            "
          >
            Hi, I'm{" "}
            <span className="text-violet-500">
              YIDSAM
            </span>
          </h1>

          <h2
            className="
              text-2xl
              md:text-3xl
              text-gray-300
              mb-6
            "
          >
            Graphic Designer • Video Editor •
            Content Creator • Voice Over Artist
          </h2>

          <p
            className="
              text-gray-400
              text-lg
              leading-8
              max-w-xl
              mb-8
            "
          >
            I create powerful visual stories,
            engaging content, professional
            video edits, and compelling voice-over
            experiences that help brands stand out.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="
                px-8
                py-4
                bg-violet-600
                rounded-xl
                font-semibold
                hover:bg-violet-700
                transition
              "
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="
                px-8
                py-4
                border
                border-zinc-700
                rounded-xl
                font-semibold
                hover:border-violet-500
                transition
              "
            >
              Contact Me
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12">
            <div>
              <h3 className="text-3xl font-bold text-violet-500">
                4+
              </h3>
              <p className="text-gray-400">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-violet-500">
                100+
              </h3>
              <p className="text-gray-400">
                Creative Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-violet-500">
                1.3K+
              </h3>
              <p className="text-gray-400">
                YouTube Audience
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="flex justify-center"
>
  <div className="relative">
    {/* Glow Effect */}
    <div
      className="
        absolute
        inset-0
        bg-violet-600
        blur-3xl
        opacity-30
        rounded-full
        scale-110
      "
    />

    <div
      className="
        relative
        w-[320px]
        h-[320px]
        md:w-[420px]
        md:h-[420px]
        rounded-full
        overflow-hidden
        border-4
        border-violet-500/40
        shadow-2xl
        shadow-violet-500/20
      "
    >
      <Image
        src="/images/profile/profile.jpg"
        alt="YIDSAM"
        fill
        className="object-cover"
        priority
      />
    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
}