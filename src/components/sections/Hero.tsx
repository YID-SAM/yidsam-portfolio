"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        bg-gradient-to-b
        from-black
        via-zinc-950
        to-black
        pt-28
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-violet-700/10 blur-[140px] rounded-full" />

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-6
          grid
          lg:grid-cols-2
          gap-16
          items-center
          z-10
        "
      >
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="
              inline-block
              px-5
              py-2
              rounded-full
              bg-violet-500/10
              border
              border-violet-500/20
              text-violet-400
              text-sm
              mb-8
            "
          >
            ✨ Available For Freelance Work
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
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
          </motion.h1>

         <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ delay: 0.45 }}
  className="mb-8"
>
  <TypeAnimation
    sequence={[
      "Graphic Designer",
      2000,
      "Video Editor",
      2000,
      "Content Creator",
      2000,
      "Voice Over Artist",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
    className="
      text-2xl
      md:text-3xl
      font-semibold
      text-violet-400
      h-10
      block
    "
  />
</motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.6 }}
            className="
              text-gray-400
              text-lg
              leading-8
              max-w-xl
              mb-10
            "
          >
            I create powerful visual stories,
            engaging content, professional
            video edits, and compelling voice-over
            experiences that help brands stand out.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-5"
          >
            <a
              href="#portfolio"
              className="
                px-8
                py-4
                rounded-xl
                bg-violet-600
                font-semibold
                transition-all
                duration-300
                hover:scale-105
                hover:bg-violet-500
                hover:shadow-xl
                hover:shadow-violet-500/40
              "
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="
                px-8
                py-4
                rounded-xl
                border
                border-zinc-700
                transition-all
                duration-300
                hover:border-violet-500
                hover:bg-violet-500/10
                hover:scale-105
              "
            >
              Contact Me
            </a>
          </motion.div>

          {/* Stats */}
          {/* Stats */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ delay: 1 }}
  className="grid grid-cols-3 gap-8 mt-14"
>
  <div>
    <h3 className="text-3xl md:text-4xl font-bold text-violet-500">
      <CountUp end={4} duration={2.5} />+
    </h3>

    <p className="text-gray-400 mt-2">
      Years Experience
    </p>
  </div>

  <div>
    <h3 className="text-3xl md:text-4xl font-bold text-violet-500">
      <CountUp end={100} duration={2.5} />+
    </h3>

    <p className="text-gray-400 mt-2">
      Projects
    </p>
  </div>

  <div>
    <h3 className="text-3xl md:text-4xl font-bold text-violet-500">
      <CountUp
        end={1.3}
        decimals={1}
        duration={2.5}
      />
      K+
    </h3>

    <p className="text-gray-400 mt-2">
      Audience
    </p>
  </div>
</motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                bg-violet-600
                blur-[90px]
                opacity-40
                rounded-full
                scale-110
              "
            />

            {/* Ring */}
            <div
              className="
                absolute
                -inset-3
                rounded-full
                border
                border-violet-500/20
                animate-pulse
              "
            />

            {/* Image */}
            <div
              className="
                relative
                w-[330px]
                h-[330px]
                md:w-[430px]
                md:h-[430px]
                rounded-full
                overflow-hidden
                border-4
                border-violet-500/40
                shadow-2xl
                shadow-violet-500/30
              "
            >
              <Image
                src="/images/profile/profile.jpg"
                alt="YIDSAM"
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
        "
      >
        <div
          className="
            w-7
            h-12
            rounded-full
            border-2
            border-zinc-600
            flex
            justify-center
            pt-2
          "
        >
          <div
            className="
              w-1.5
              h-3
              rounded-full
              bg-violet-500
            "
          />
        </div>
      </motion.div>
    </section>
  );
}