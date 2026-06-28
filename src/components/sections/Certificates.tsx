"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Graphic Design Certificate",
    image: "/certificates/graphic-design.jpg",
    issuer: "Professional Certification",
  },
  {
    title: "Video Editing Certificate",
    image: "/certificates/video-editing.jpg",
    issuer: "Professional Certification",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="py-24 bg-black"
    >
      <Container>

        <SectionTitle
          title="Professional Certificates"
          subtitle="Certified skills that demonstrate my knowledge and commitment to continuous learning."
        />

        <div className="grid md:grid-cols-2 gap-10">

          {certificates.map((certificate, index) => (

            <motion.a
              key={certificate.title}
              href={certificate.image}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="
                group
                rounded-3xl
                overflow-hidden
                border
                border-zinc-800
                bg-zinc-900/50
                backdrop-blur-lg
                hover:border-violet-500
                transition-all
                duration-500
              "
            >

              <div className="overflow-hidden bg-white">

  <Image
    src={certificate.image}
    alt={certificate.title}
    width={1200}
    height={1700}
    className="
      w-full
      h-auto
      transition-transform
      duration-700
      group-hover:scale-105
    "
  />

</div>

              <div className="p-6">

                <div className="flex items-center gap-3 mb-3">

                  <Award className="text-violet-500" size={22} />

                  <h3 className="text-xl font-bold">
                    {certificate.title}
                  </h3>

                </div>

                <p className="text-gray-400 mb-6">
                  {certificate.issuer}
                </p>

                <div className="flex items-center gap-2 text-violet-400 font-medium">

                  View Certificate

                  <ExternalLink size={18} />

                </div>

              </div>

            </motion.a>

          ))}

        </div>

      </Container>
    </section>
  );
}