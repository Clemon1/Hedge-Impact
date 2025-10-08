"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import eee from "../../../public/images/larm-rmah-AEaTUnvneik-unsplash.jpg";
import image1 from "../../../public/images/IMG_9827.jpg";
import image2 from "../../../public/images/IMG_9828.jpg";
import image3 from "../../../public/images/IMG_9829.jpg";
import image4 from "../../../public/images/IMG_9830.jpg";
import image5 from "../../../public/images/IMG_9832.jpg";
import image6 from "../../../public/images/IMG_9834.jpg";
import { useMemo } from "react";

const images = [image1, image2, image3, image4, image5, image6];

export default function Marquee() {
  // 🔀 Randomize the image order once per render
  const shuffledImages = useMemo(
    () => [...images].sort(() => Math.random() - 0.5),
    []
  );

  return (
    <section className="w-full flex flex-col items-center justify-center py-12 font-serif">
      {/* Testimonial Text */}
      <div className="max-w-3xl text-center mb-10">
        <p className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
          "Charis has truly changed lives with their dedication and support.
          Their efforts in education and emergency relief have given hope to so
          many. I'm proud to be part of this mission."
        </p>
        <p className="mt-4 text-gray-600 font-medium">
          — Oluwaseun Adetutu, Founder
        </p>
      </div>

      {/* Auto-scrolling marquee */}
      <div className="relative w-full overflow-hidden py-6">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 30, // adjust speed (lower = faster)
            ease: "linear",
          }}
        >
          {[...shuffledImages, ...shuffledImages].map((src, idx) => (
            <div key={idx} className="flex-shrink-0 rounded-xl overflow-hidden">
              <Image
                src={src}
                alt={`marquee-${idx}`}
                width={250}
                height={180}
                className="rounded-xl object-cover shadow-md"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
