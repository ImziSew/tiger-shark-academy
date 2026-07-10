"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import {
  Sparkles,
  Trophy,
  Globe,
  Newspaper,
} from "lucide-react";

const featured = [
  "/galleryline33.jpeg",
  "/galleryline34.jpeg",
];

const competition = [
  "/galleryline11.jpeg",
  "/galleryline12.jpeg",
  "/galleryline14.jpeg",
  "/galleryline21.jpeg",
  "/galleryline22.jpeg",
  "/galleryline23.jpeg",
  "/galleryline24.jpeg",
  "/galleryline13.jpeg",
];

const international = [
  "/galleryline31.jpeg",
  "/galleryline32.jpeg",
  "/galleryline33.jpeg",
  "/galleryline34.jpeg",
];

const media = [
  "/galleryline41.jpeg",
  "/galleryline42.jpeg",
  "/galleryline43.jpeg",
  "/galleryline44.jpeg",
];

function GalleryGrid({
  title,
  images,
  icon,
}: {
  title: string;
  images: string[];
  icon: ReactNode;
}) {
  return (
    <section className="mb-20">

      <div className="flex items-center gap-4 mb-8">
        {icon}

        <h2 className="text-3xl md:text-4xl font-bold text-sky-400">
          {title}
        </h2>
      </div>

      <div className="columns-1 md:columns-3 gap-6 space-y-6">
        {images.map((img) => (
          <div
            key={img}
            className="mb-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 break-inside-avoid"
          >
            <Image
              src={img}
              alt={title}
              width={1200}
              height={900}
              className="w-full h-auto hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </div>

    </section>
  );
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <div className="border-b border-blue-900 bg-[#03142e]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Tiger Shark Academy"
              width={80}
              height={80}
            />

            <div>
              <h1 className="text-2xl font-bold">
                Tiger Shark Aquatic Academy
              </h1>

              <p className="text-sky-400 text-sm">
                Gallery & Career Highlights
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="bg-sky-500 hover:bg-sky-600 px-5 py-2 rounded-lg font-semibold"
          >
            Back Home
          </Link>

        </div>
      </div>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Gallery
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          A journey through international competitions,
          world championships, national records,
          training experiences and career milestones.
        </p>

      </section>

      <div className="max-w-7xl mx-auto px-6 pb-20">

        <GalleryGrid
          title="Featured Highlights"
          images={featured}
          icon={<Sparkles className="text-sky-400" size={36} />}
        />

        <GalleryGrid
          title="Competition Highlights"
          images={competition}
          icon={<Trophy className="text-yellow-400" size={36} />}
        />

        <GalleryGrid
          title="International Experience"
          images={international}
          icon={<Globe className="text-sky-400" size={36} />}
        />

        <GalleryGrid
          title="Media Coverage & Recognition"
          images={media}
          icon={<Newspaper className="text-sky-400" size={36} />}
        />

      </div>

    </main>
  );
}