"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Video,
  Megaphone,
  Mic,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const services = [
  {
    title: "Graphic Design",
    description:
      "Professional branding, logos, posters, social media graphics, thumbnails, flyers, and complete visual identity solutions.",
    icon: Palette,
  },
  {
    title: "Video Editing",
    description:
      "Cinematic editing for YouTube, documentaries, commercials, promotional videos, and social media content.",
    icon: Video,
  },
  {
    title: "Content Creation",
    description:
      "Creative storytelling, content strategy, audience engagement, and digital marketing solutions.",
    icon: Megaphone,
  },
  {
    title: "Voice Over",
    description:
      "Professional voice-over for commercials, narration, explainer videos, documentaries, and media projects.",
    icon: Mic,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 bg-black"
    >
      <Container>

        <SectionTitle
          title="Services"
          subtitle="Helping brands communicate through creativity, storytelling, and professional digital solutions."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: .6,
                  delay: index * .15,
                }}
                className="
                  group
                  relative
                  overflow-hidden
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
                  hover:shadow-2xl
                  hover:shadow-violet-500/10
                "
              >

                {/* Top Glow */}

                <div
                  className="
                    absolute
                    top-0
                    left-0
                    h-1
                    w-0
                    bg-violet-500
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

                {/* Icon */}

                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-violet-500/10
                    border
                    border-violet-500/20
                    flex
                    items-center
                    justify-center
                    mb-8
                    transition-all
                    duration-300
                    group-hover:bg-violet-500
                  "
                >
                  <Icon
                    size={30}
                    className="
                      text-violet-500
                      group-hover:text-white
                    "
                  />
                </div>

                <h3
                  className="
                    text-2xl
                    font-bold
                    mb-5
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    text-gray-400
                    leading-8
                  "
                >
                  {service.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </Container>
    </section>
  );
}