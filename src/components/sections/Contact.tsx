"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Contact() {
  const contacts = [
    {
      title: "Telegram",
      value: "@Yidnekachew_Samuel",
      href: "https://t.me/Yidnekachew_Samuel",
    },
    {
      title: "Email",
      value: "Yidnekachewsamuel47@gmail.com",
      href: "mailto:Yidnekachewsamuel47@gmail.com",
    },
    {
      title: "Phone",
      value: "0952609490",
      href: "tel:+251952609490",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-black"
    >
      <Container>

        <SectionTitle
          title="Contact Me"
          subtitle="Let's work together. Feel free to reach out anytime."
        />

        <div className="grid md:grid-cols-3 gap-6">

          {contacts.map((contact, index) => (
            <motion.a
              key={contact.title}
              href={contact.href}
              target={contact.title === "Telegram" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              className="
                bg-zinc-900
                border
                border-zinc-800
                rounded-2xl
                p-8
                text-center
                hover:border-violet-500
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <h3 className="text-xl font-semibold text-violet-400 mb-3">
                {contact.title}
              </h3>

              <p className="text-gray-300 break-all">
                {contact.value}
              </p>
            </motion.a>
          ))}

        </div>

      </Container>
    </section>
  );
}