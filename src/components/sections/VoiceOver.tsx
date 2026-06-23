"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const voiceSamples = [
  {
    title: "Commercial Voice Over",
    file: "/audio/voice-demo-1.mp3",
  },
  {
    title: "Narration Demo",
    file: "/audio/voice-demo-2.mp3",
  },
  {
    title: "Promotional Voice Over",
    file: "/audio/voice-demo-3.mp3",
  },
];

export default function VoiceOver() {
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);

  const handlePlay = (currentIndex: number) => {
    audioRefs.current.forEach((audio, index) => {
      if (audio && index !== currentIndex) {
        audio.pause();
        audio.currentTime = 0;
      }
    });
  };

  return (
    <section
      id="voiceover"
      className="py-28 bg-black"
    >
      <Container>
        <SectionTitle
          title="Voice Over"
          subtitle="Listen to a selection of professional voice-over samples showcasing clarity, expression, and versatility."
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {voiceSamples.map((sample, index) => (
            <motion.div
              key={sample.title}
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
                transition-all
                duration-500
                hover:border-violet-500
                hover:shadow-xl
                hover:shadow-violet-500/10
              "
            >
              <h3
                className="
                  text-xl
                  font-semibold
                  mb-5
                "
              >
                {sample.title}
              </h3>

              <audio
                ref={(el) => {
                  audioRefs.current[index] = el;
                }}
                controls
                className="w-full"
                onPlay={() => handlePlay(index)}
              >
                <source
                  src={sample.file}
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