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
      "Professional branding, social media designs, posters, flyers, thumbnails, and visual identity solutions.",
    icon: Palette,
  },
  {
    title: "Video Editing",
    description:
      "High-quality video editing for YouTube, social media, promotional videos, documentaries, and commercials.",
    icon: Video,
  },
  {
    title: "Content Creation",
    description:
      "Creative content planning, storytelling, audience engagement, and social media growth strategies.",
    icon: Megaphone,
  },
  {
    title: "Voice Over",
    description:
      "Clear, professional, and engaging voice-over services for commercials, narrations, explainers, and media projects.",
    icon: Mic,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-[#09090B]"
    >
      <Container>
        <SectionTitle
          title="Services"
          subtitle="Creative solutions designed to help brands stand out and connect with their audience."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="
                  group
                  bg-zinc-900
                  border
                  border-zinc-800
                  rounded-3xl
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-violet-500
                  hover:shadow-xl
                  hover:shadow-violet-500/20
                "
              >
                <div
                  className="
                    w-14 h-14
                    rounded-2xl
                    bg-violet-500/10
                    flex
                    items-center
                    justify-center
                    mb-6
                  "
                >
                  <Icon
                    size={28}
                    className="text-violet-500"
                  />
                </div>

                <h3
                  className="
                    text-xl
                    font-bold
                    mb-4
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    text-gray-400
                    leading-7
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