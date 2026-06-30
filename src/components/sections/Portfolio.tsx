"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

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
      src: "",
    thumbnail: "https://img.youtube.com/vi/1_28MInemD4/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/1_28MInemD4?autoplay=1",
  },
  {
    type: "video",
      src: "",
    thumbnail: "https://img.youtube.com/vi/sQerrHdmA7I/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/sQerrHdmA7I?autoplay=1",
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
                    onClick={() => setSelectedVideo(item.video)}
                    className="block w-full"
                  >
                    <div className="relative h-72 group">

                      <Image
                        src={item.thumbnail}
                        alt="Video Thumbnail"
                        fill
                        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                        unoptimized
                        className="
                          object-cover
                          group-hover:scale-105
                          transition-transform
                          duration-700
                        "
                      />

                      <div
                        className="
                          absolute
                          inset-0
                          bg-black/40
                          flex
                          items-center
                          justify-center
                        "
                      >

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
                  </button>

                )}

              </motion.div>

            ))}

          </div>

        </Container>
      </section>
      ```
      {/* Video Modal */}

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
          {/* Close Button */}
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

          {/* Video */}
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
