"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-zinc-950"
    >
      <Container>

        <SectionTitle
          title="About Me"
          subtitle="Creative Designer, Video Editor, Content Creator & Voice Over Artist."
        />

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Video */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="
                overflow-hidden
                rounded-3xl
                border
                border-violet-500/20
                shadow-2xl
                shadow-violet-500/20
              "
            >
              <video
                controls
                preload="metadata"
                poster="/images/profile/profile.jpg"
                className="w-full rounded-3xl"
              >
                <source
                  src="/videos/introduction.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </motion.div>

          {/* About Text */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
          >

            <h3 className="text-3xl font-bold mb-6">
              Bringing Ideas To Life Through Creativity
            </h3>

            <p className="text-gray-400 leading-8 mb-6">
              I am <span className="text-violet-400 font-semibold">Yidnekachew Samuel</span>,
              a passionate creative professional dedicated to producing
              high-quality visual and audio content.
            </p>

            <p className="text-gray-400 leading-8 mb-8">
              From graphic design and professional video editing
              to content creation and voice-over production,
              I help brands and individuals communicate their
              stories with creativity and impact.
            </p>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-zinc-900 rounded-2xl p-5">
                <h4 className="text-violet-500 font-bold mb-2">
                  Graphic Design
                </h4>

                <p className="text-gray-400 text-sm">
                  Social media, branding & print designs.
                </p>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-5">
                <h4 className="text-violet-500 font-bold mb-2">
                  Video Editing
                </h4>

                <p className="text-gray-400 text-sm">
                  Promotional, cinematic & YouTube videos.
                </p>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-5">
                <h4 className="text-violet-500 font-bold mb-2">
                  Content Creation
                </h4>

                <p className="text-gray-400 text-sm">
                  Engaging content for modern audiences.
                </p>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-5">
                <h4 className="text-violet-500 font-bold mb-2">
                  Voice Over
                </h4>

                <p className="text-gray-400 text-sm">
                  Professional narration in Amharic & English.
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </Container>
    </section>
  );
}