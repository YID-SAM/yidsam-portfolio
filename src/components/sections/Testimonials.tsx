"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const testimonials = [
  {
    name: "Abel M.",
    role: "Business Owner",
    review:
      "YIDSAM delivered exceptional graphic designs that elevated our brand identity. Highly recommended!",
  },
  {
    name: "Sara K.",
    role: "Content Creator",
    review:
      "The video editing quality was outstanding. Fast delivery and professional communication throughout the project.",
  },
  {
    name: "Daniel T.",
    role: "Marketing Manager",
    review:
      "The voice-over work was clear, engaging, and exactly what we needed for our campaign.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-[#09090B]"
    >
      <Container>
        <SectionTitle
          title="Testimonials"
          subtitle="What clients say about working with me."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="
                bg-zinc-900
                border
                border-zinc-800
                rounded-3xl
                p-8
              "
            >
              <p className="text-gray-400 leading-7 mb-6">
                "{item.review}"
              </p>

              <div>
                <h3 className="font-bold">
                  {item.name}
                </h3>

                <p className="text-violet-400 text-sm">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}