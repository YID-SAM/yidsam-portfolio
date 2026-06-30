"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

type GalleryItem =
  | {
      type: "image";
      src: string;
    }
  | {
      type: "video";
      videoId: string;
    };

const gallery: GalleryItem[] = [
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
    videoId: "1_28MInemD4",
  },
  {
    type: "video",
    videoId: "sQerrHdmA7I",
  },
];

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <>
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
                        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
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

                  <button
                    onClick={() => setSelectedVideo(item.videoId)}
                    className="relative h-72 w-full group"
                  >

                    <img
                      src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
                      alt="Video Thumbnail"
                      className="
                        w-full
                        h-full
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

                  </button>

                )}

              </motion.div>

            ))}

          </div>

        </Container>
      </section>

      {selectedVideo && (

        <div
          className="
            fixed
            inset-0
            z-[100]
            bg-black/90
            backdrop-blur-md
            flex
            items-center
            justify-center
            p-4
          "
        >

          <button
            onClick={() => setSelectedVideo(null)}
            className="
              absolute
              top-6
              right-6
              bg-zinc-900
              p-3
              rounded-full
              hover:bg-violet-600
              transition
            "
          >
            <X size={24} />
          </button>

          <div
            className="
              w-full
              max-w-5xl
              aspect-video
              rounded-2xl
              overflow-hidden
            "
          >

            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="Portfolio Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

          </div>

        </div>

      )}
    </>
  );
}