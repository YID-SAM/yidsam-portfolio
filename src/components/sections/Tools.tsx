"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { motion } from "framer-motion";

import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiCanva,
  SiCapcut,
  SiAudacity,
} from "react-icons/si";

import { FaFilm } from "react-icons/fa";

const tools = [
  {
    name: "Photoshop",
    icon: <SiAdobephotoshop size={42} className="text-[#31A8FF]" />,
  },
  {
    name: "Illustrator",
    icon: <SiAdobeillustrator size={42} className="text-[#FF9A00]" />,
  },
  {
    name: "Premiere Pro",
    icon: <SiAdobepremierepro size={42} className="text-[#9999FF]" />,
  },
  {
    name: "CapCut",
    icon: <SiCapcut size={42} />,
  },
  {
    name: "Canva",
    icon: <SiCanva size={42} className="text-[#00C4CC]" />,
  },
  {
    name: "Filmora",
    icon: <FaFilm size={40} className="text-green-500" />,
  },
  {
    name: "Audacity",
    icon: <SiAudacity size={42} className="text-orange-500" />,
  },
];

export default function Tools() {
  return (
    <section
      id="tools"
      className="py-24 bg-black"
    >
      <Container>

        <SectionTitle
          title="Tools I Use"
          subtitle="Professional software I use to create high-quality content."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">

          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              className="
                bg-zinc-900
                rounded-2xl
                border
                border-zinc-800
                p-6
                flex
                flex-col
                items-center
                justify-center
                gap-4
                hover:border-violet-500
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              {tool.icon}

              <p className="text-white font-medium text-center">
                {tool.name}
              </p>
            </motion.div>
          ))}

        </div>

      </Container>
    </section>
  );
}