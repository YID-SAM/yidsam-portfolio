"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { Play } from "lucide-react";

const gallery = [
  {
    type: "image",
    src: "/images/project/project1.jpg",
  },
  {
    type: "image",
    src: "/images/project/project2.jpg",
  },
  {
    type: "image",
    src: "/images/project/project3.jpg",
  },
  {
    type: "image",
    src: "/images/project/project4.jpg",
  },
  {
    type: "video",
    thumbnail: "/images/project/video1-thumbnail.jpg",
    url: "https://youtu.be/1_28MInemD4?si=IdrPXerbStXVLuLS",
  },
  {
    type: "video",
    thumbnail: "/images/project/video2-thumbnail.jpg",
    url: "https://youtu.be/sQerrHdmA7I",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-28 bg-zinc-950"
    >
      <Container>

        <SectionTitle
          title="Portfolio"
          subtitle="A collection of my recent creative works."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {gallery.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="
                overflow-hidden
                rounded-3xl
                border
                border-zinc-800
                hover:border-violet-500
                transition-all
                duration-500
              "
            >

              {item.type === "image" ? (

                <a
                  href={item.src}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative h-72">

                    <Image
                      src={item.src}
                      alt="Project"
                      fill
                      className="
                        object-cover
                        hover:scale-110
                        transition-transform
                        duration-700
                      "
                    />

                  </div>
                </a>

              ) : (

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative h-72 group">

                    <Image
                      src={item.thumbnail}
                      alt="Video"
                      fill
                      className="
                        object-cover
                        group-hover:scale-105
                        transition-transform
                        duration-700
                      "
                    />

                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

                      <div
                        className="
                          w-20
                          h-20
                          rounded-full
                          bg-violet-600
                          flex
                          items-center
                          justify-center
                          group-hover:scale-110
                          transition
                        "
                      >
                        <Play
                          fill="white"
                          size={34}
                          className="ml-1"
                        />
                      </div>

                    </div>

                  </div>
                </a>

              )}

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}