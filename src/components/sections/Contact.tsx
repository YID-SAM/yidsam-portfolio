"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import {
  FaTelegramPlane,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      title: "Telegram",
      value: "@Yidnekachew_Samuel",
      href: "https://t.me/Yidnekachew_Samuel",
      icon: <FaTelegramPlane size={28} />,
    },
    {
      title: "Email",
      value: "Yidnekachewsamuel47@gmail.com",
      href: "mailto:Yidnekachewsamuel47@gmail.com",
      icon: <FaEnvelope size={28} />,
    },
    {
      title: "Phone",
      value: "0952609490",
      href: "tel:+251952609490",
      icon: <FaPhoneAlt size={26} />,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-black"
    >
      <Container>

        <SectionTitle
          title="Let's Work Together"
          subtitle="Feel free to contact me through any of the platforms below."
        />

        <div className="grid md:grid-cols-3 gap-8">

          {contacts.map((contact, index) => (
            <motion.a
              key={contact.title}
              href={contact.href}
              target={
                contact.title === "Telegram"
                  ? "_blank"
                  : undefined
              }
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              className="
                bg-zinc-900
                border
                border-zinc-800
                rounded-3xl
                p-8
                flex
                flex-col
                items-center
                text-center
                hover:border-violet-500
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div
                className="
                  w-16
                  h-16
                  rounded-full
                  bg-violet-600
                  flex
                  items-center
                  justify-center
                  text-white
                  mb-5
                "
              >
                {contact.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {contact.title}
              </h3>

              <p className="text-gray-400 break-all">
                {contact.value}
              </p>

            </motion.a>
          ))}

        </div>

      </Container>
    </section>
  );
}