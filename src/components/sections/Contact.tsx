"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-black"
    >
      <Container>

        <SectionTitle
          title="Contact Me"
          subtitle="Let's work together and bring your ideas to life."
        />

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="
              rounded-3xl
              border
              border-zinc-800
              bg-white/[0.03]
              backdrop-blur-xl
              p-8
            "
          >
            <h3
              className="
                text-2xl
                font-bold
                mb-8
              "
            >
              Get In Touch
            </h3>

            <div className="space-y-8">

              <div className="flex gap-4 items-center">
                <Mail
                  size={24}
                  className="text-violet-500"
                />

                <div>
                  <p className="text-gray-400">
                    Email
                  </p>

                  <p className="font-medium">
                    your@email.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <Phone
                  size={24}
                  className="text-violet-500"
                />

                <div>
                  <p className="text-gray-400">
                    Phone
                  </p>

                  <p className="font-medium">
                    +251 XXX XXX XXX
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <MapPin
                  size={24}
                  className="text-violet-500"
                />

                <div>
                  <p className="text-gray-400">
                    Location
                  </p>

                  <p className="font-medium">
                    Ethiopia
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Side */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="
              rounded-3xl
              border
              border-zinc-800
              bg-white/[0.03]
              backdrop-blur-xl
              p-8
              space-y-6
            "
          >
            <input
              type="text"
              placeholder="Your Name"
              className="
                w-full
                p-4
                rounded-xl
                bg-zinc-900
                border
                border-zinc-800
                outline-none
                focus:border-violet-500
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
                w-full
                p-4
                rounded-xl
                bg-zinc-900
                border
                border-zinc-800
                outline-none
                focus:border-violet-500
              "
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="
                w-full
                p-4
                rounded-xl
                bg-zinc-900
                border
                border-zinc-800
                outline-none
                resize-none
                focus:border-violet-500
              "
            />

            <button
              type="submit"
              className="
                w-full
                py-4
                rounded-xl
                bg-violet-600
                hover:bg-violet-500
                transition-all
                duration-300
                font-semibold
              "
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </Container>
    </section>
  );
}