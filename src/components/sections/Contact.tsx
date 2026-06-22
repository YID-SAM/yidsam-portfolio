"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-[#09090B]"
    >
      <Container>
        <SectionTitle
          title="Let's Work Together"
          subtitle="Ready to bring your ideas to life? Let's create something amazing together."
        />

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              bg-zinc-900
              border
              border-zinc-800
              rounded-3xl
              p-8
            "
          >
            <h3 className="text-2xl font-bold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <Mail className="text-violet-500" />
                <div>
                  <p className="text-gray-400 text-sm">
                    Email
                  </p>
                  <p>
                    yidnekachewsamuel47@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-violet-500" />
                <div>
                  <p className="text-gray-400 text-sm">
                    Phone
                  </p>
                  <p>
                    0952609490
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-10">
              <a
                href="mailto:yidnekachewsamuel47@gmail.com"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-6
                  py-3
                  bg-violet-600
                  rounded-xl
                  hover:bg-violet-700
                  transition
                "
              >
                Hire Me
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              bg-zinc-900
              border
              border-zinc-800
              rounded-3xl
              p-8
              space-y-5
            "
          >
            <input
              type="text"
              placeholder="Your Name"
              className="
                w-full
                p-4
                rounded-xl
                bg-zinc-800
                border
                border-zinc-700
                outline-none
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
                w-full
                p-4
                rounded-xl
                bg-zinc-800
                border
                border-zinc-700
                outline-none
              "
            />

            <textarea
              rows={5}
              placeholder="Tell me about your project..."
              className="
                w-full
                p-4
                rounded-xl
                bg-zinc-800
                border
                border-zinc-700
                outline-none
              "
            />

            <button
              type="submit"
              className="
                w-full
                bg-violet-600
                py-4
                rounded-xl
                font-semibold
                hover:bg-violet-700
                transition
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