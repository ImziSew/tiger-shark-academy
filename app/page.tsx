"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import {
  Trophy,
  Medal,
  Globe,
  MapPin,
  Waves,
  DollarSign,
  Users,
  Calendar,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <main className="bg-black text-white min-h-screen">

{/* NAVBAR */}
<nav className="bg-[#03142e] border-b border-blue-900">
  <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-0">

    {/* LOGO */}
    <div className="flex items-center gap-3">
      <Image
        src="/logo.png"
        alt="Tiger Shark Logo"
        width={120}
        height={120}
        className="object-contain md:w-[220px]"
      />

      <Image
  src="/tiger-shark-text.png"
  alt="Tiger Shark Aquatic"
  width={280}
  height={90}
  className="object-contain w-[180px] md:w-[360px]"
/>
    </div>

    {/* DESKTOP MENU */}
    <div className="hidden md:flex gap-8 text-white items-center">
      <a href="#">Home</a>
      <Link href="/about">About</Link>
      <a href="#">Programs</a>
      <a href="#">Camp</a>
      <Link
        href="/gallery"
        className="hover:text-sky-400 transition"
      >
        Gallery
      </Link>

      <a href="#">Contact</a>
    </div>

    {/* RIGHT SIDE */}
    <div className="flex items-center gap-4">

      {/* Desktop Register Button */}
      <Link
        href="/register"
        className="hidden md:block"
      >
        <button className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-lg font-semibold">
          Register Now
        </button>
      </Link>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? "✕" : "☰"}
      </button>

    </div>
  </div>
</nav>

{/* MOBILE MENU */}
{mobileMenuOpen && (
  <div className="md:hidden bg-[#03142e] border-b border-blue-900">
    <div className="flex flex-col gap-4 p-6 text-white">

      <a href="#">Home</a>

      <Link href="/about">About</Link>

      <a href="#">Programs</a>

      <a href="#">Camp</a>

      <Link href="/gallery">Gallery</Link>

      <a href="#">Contact</a>

      <Link href="/register">
        <button className="bg-sky-500 w-full py-3 rounded-lg font-semibold">
          Register Now
        </button>
      </Link>

    </div>
  </div>
)}

      {/* HERO */}
<section className="max-w-7xl mx-auto px-6 py-8">

  <div className="grid lg:grid-cols-[38%_62%] gap-0 items-center">
    {/* LEFT */}
    <div>

      <h1 className="text-6xl lg:text-7xl font-black leading-[0.88] tracking-tight">
        SWIM.
        <br />
        TRAIN.
        <br />
        <span className="text-sky-500">
          COMPETE.
        </span>
        <br />
        EXCEL.
      </h1>

      <p className="text-xl text-gray-300 mt-8 max-w-md">
        Professional Swimming Coaching &
        Development Camps
      </p>

      <div className="flex gap-4 mt-8 flex-wrap">

        <Link href="/register">
          <button className="bg-sky-500 hover:bg-sky-600 px-8 py-4 rounded-lg font-semibold">
            REGISTER FOR CAMP
          </button>
        </Link>

      </div>

    </div>

    {/* RIGHT */}
<div className="relative h-[600px] overflow-hidden">

  <Image
    src="/swimmer.jpeg"
    alt="Swimmer"
    fill
    className="object-cover"
  />

  {/* Smooth fade into text side */}
  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black"></div>

</div>

</div>

</section>

{/* FOUNDER */}
      <section className="max-w-6xl mx-auto px-6 py-2">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div> 
            <Image
    src="/dilanka.png"
    alt="Dilanka"
    width={500}
    height={700}
    className="w-full max-w-md mx-auto"
  />
</div>

          <div>
            <p className="text-sky-500 uppercase font-bold">
              About The Founder
            </p>

            <h2 className="text-5xl font-bold mt-2">
              Dilanka Shehan
            </h2>

            <p className="text-gray-300 mt-6">
              A dedicated athlete passionate about excellence
              in and out of the water.
            </p>

          <div className="space-y-4 mt-8">

            <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
              <Trophy className="text-sky-400" size={28} />
              <div>
                <h4 className="font-semibold">
                  Sri Lanka National Record Holder
                </h4>
                <p className="text-gray-400 text-sm">
                  Multiple national records in freestyle events
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
              <Medal className="text-sky-400" size={28} />
              <div>
                <h4 className="font-semibold">
                  South Asian Games Silver Medalist
                </h4>
                <p className="text-gray-400 text-sm">
                  Represented Sri Lanka with pride
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
              <Globe className="text-sky-400" size={28} />
              <div>
                <h4 className="font-semibold">
                  World Aquatics Scholarship Athlete
                </h4>
                <p className="text-gray-400 text-sm">
                  Awarded by World Aquatics
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
              <MapPin className="text-sky-400" size={28} />
              <div>
                <h4 className="font-semibold">
                  Currently Training in Florida, USA
                </h4>
                <p className="text-gray-400 text-sm">
                  Pursuing higher-level competition
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Waves className="text-sky-400" size={28} />
              <div>
                <h4 className="font-semibold">
                  14th Ranked Open Water Swimmer in Asia
                </h4>
                <p className="text-gray-400 text-sm">
                  Recognized across the region
                </p>
              </div>
            </div>

                    </div>

        </div>

      </div>

      </section>

      {/* CAMPS */}
      <section className="max-w-7xl mx-auto px-2 py-12">

        <p className="text-center text-sky-500 font-bold uppercase">
          Development Training Camp 2026
        </p>

        <h2 className="text-center text-6xl font-bold mt-3">
          Train. Learn. Improve.
        </h2>

        <p className="text-center text-gray-300 mt-4 mb-12">
          Join our intensive development camps across Sri Lanka.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Colombo */}
          <div className="bg-[#071633] rounded-xl overflow-hidden">
            <Image
              src="/colombo.jpeg"
              alt="Colombo"
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-3xl font-bold">Colombo</h3>
              <p className="mt-2">August 10</p>

              <Link href="/register">
                <button className="mt-4 border border-sky-500 px-6 py-3 rounded-lg w-full">
                  REGISTER NOW
                </button>
              </Link>
            </div>
          </div>

          {/* Kandy */}
          <div className="bg-[#071633] rounded-xl overflow-hidden">
            <Image
              src="/kandy.jpg"
              alt="Kandy"
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-3xl font-bold">Kandy</h3>
              <p className="mt-2">August 12</p>

              <Link href="/register">
                <button className="mt-4 border border-sky-500 px-6 py-3 rounded-lg w-full">
                  REGISTER NOW
                </button>
              </Link>
            </div>
          </div>

          {/* Matara */}
          <div className="bg-[#071633] rounded-xl overflow-hidden">
            <Image
              src="/matara.jpg"
              alt="Matara"
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-3xl font-bold">Matara</h3>
              <p className="mt-2">August 14</p>

              <Link href="/register">
                <button className="mt-4 border border-sky-500 px-6 py-3 rounded-lg w-full">
                  REGISTER NOW
                </button>
              </Link>
            </div>
          </div>

        </div>

      </section>

 {/* STATS */}
<section className="pt-0 pb-8">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-slate-800 rounded-xl p-3 text-center">
        <p className="text-white text-sm uppercase tracking-wide">
          Fee
        </p>
        <h3 className="text-sky-400 text-3xl font-bold mt-1">
          LKR 4,000
        </h3>
      </div>

      <div className="bg-slate-800 rounded-xl p-3 text-center">
        <p className="text-white text-sm uppercase tracking-wide">
          Age
        </p>
        <h3 className="text-sky-400 text-3xl font-bold mt-1">
          12+
        </h3>
      </div>

      <div className="bg-slate-800 rounded-xl p-3 text-center">
        <p className="text-white text-sm uppercase tracking-wide">
          Registration Deadline
        </p>
        <h3 className="text-sky-400 text-3xl font-bold mt-1">
          July 15
        </h3>
      </div>

    </div>

  </div>
</section>

{/* WHATSAPP SECTION */}
<section
  className="mt-4 bg-cover bg-center"
  style={{
    backgroundImage: "url('/bottom-banner.png')",
  }}
>
  <div className="bg-black/35">

    <div className="max-w-7xl mx-auto px-6 py-12">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>

          <div className="flex items-center gap-4">

            <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center">
  <FaWhatsapp size={38} className="text-white" />
</div>

            <div>
              <h3 className="text-3xl font-bold">
                Have Questions?
              </h3>

              <p className="text-lg text-gray-200">
                Chat with us on WhatsApp
              </p>
            </div>

          </div>

          <a
            href="https://wa.me/94764321999"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-6 border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition">
              CHAT NOW
            </button>
          </a>

        </div>

        {/* RIGHT */}
        <div className="md:-ml-24">

          <p className="text-2xl italic font-semibold leading-relaxed">
            Discipline in training.
            <br />
            Excellence in competition.
            <br />
            Character for life.
          </p>

        </div>

      </div>

    </div>

  </div>
</section>

</main>
  );
}