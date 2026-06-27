"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const testimonials = [
  {
    name: "Client One",
    role: "Business Owner",
    text: "Exceptional creativity and professionalism. The final result exceeded expectations.",
  },
  {
    name: "Client Two",
    role: "Content Creator",
    text: "Outstanding video editing skills and attention to detail. Highly recommended.",
  },
  {
    name: "Client Three",
    role: "Marketing Manager",
    text: "Professional communication, creative solutions, and excellent delivery time.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-28 bg-zinc-950"
    >
      <Container>

        <SectionTitle
          title="Testimonials"
          subtitle="Feedback from clients and collaborators."
        />

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="
                rounded-3xl
                border
                border-zinc-800
                bg-white/[0.03]
                backdrop-blur-xl
                p-8
              "
            >
              <p
                className="
                  text-gray-400
                  leading-8
                  mb-6
                "
              >
                &quot;{item.text}&quot;
              </p>

              <h3
                className="
                  font-semibold
                  text-lg
                "
              >
                {item.name}
              </h3>

              <p className="text-violet-400">
                {item.role}
              </p>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}
