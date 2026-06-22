"use client";

import { motion } from "framer-motion";
import { Mic } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const demos = [
  {
    title: "Commercial Voice Over",
    file: "/audio/voice-demo-1.mp3",
  },
  {
    title: "Narration Demo",
    file: "/audio/voice-demo-2.mp3",
  },
  {
    title: "Storytelling Demo",
    file: "/audio/voice-demo-3.mp3",
  },
];

export default function VoiceOver() {
  return (
    <section
      id="voice-over"
      className="py-24 bg-[#09090B]"
    >
      <Container>
        <SectionTitle
          title="Voice Over Showcase"
          subtitle="Listen to samples of my professional voice-over work."
        />

        <div className="grid gap-6 max-w-4xl mx-auto">
          {demos.map((demo, index) => (
            <motion.div
              key={demo.title}
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
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="
                    w-12 h-12
                    rounded-full
                    bg-violet-500/10
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Mic
                    size={24}
                    className="text-violet-500"
                  />
                </div>

                <h3 className="text-xl font-bold">
                  {demo.title}
                </h3>
              </div>

              <audio
                controls
                className="w-full"
              >
                <source
                  src={demo.file}
                  type="audio/mpeg"
                />
              </audio>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}