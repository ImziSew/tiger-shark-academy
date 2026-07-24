import Image from "next/image";
import Link from "next/link";

    import {
  Trophy,
  Medal,
  Globe,
  Flag,
  Award,
  GraduationCap,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HEADER */}
<header className="bg-[#03142e] border-b border-blue-900">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

    <div className="flex items-center gap-4">
      <Image
        src="/logo.png"
        alt="Tiger Shark Logo"
        width={70}
        height={70}
      />

      <div>
        <h1 className="text-3xl font-bold text-white">
          Tiger Shark Aquatic Academy
        </h1>

        <p className="text-sky-400">
          About the Academy
        </p>
      </div>
    </div>

    <Link
      href="/"
      className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-lg font-semibold transition"
    >
      Back Home
    </Link>

  </div>
</header>
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <Image
              src="/dilanka.png"
              alt="Dilanka Shehan"
              width={600}
              height={800}
              className="w-full max-w-md mx-auto"
            />
          </div>

          <div>
            <p className="text-sky-400 uppercase font-bold tracking-wider">
              Founder
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold mt-2">
              Dilanka Shehan
            </h1>

            <p className="text-xl text-gray-300 mt-6 leading-relaxed">
              International swimmer, national record holder,
              Team Sri Lanka captain, and founder of Tiger Shark
              Aquatic Academy.
            </p>

            <p className="text-gray-400 mt-6 leading-relaxed">
              With years of international competition experience,
              Dilanka is committed to helping the next generation
              of Sri Lankan swimmers develop world-class skills,
              discipline, confidence, and a passion for excellence
              in and out of the water.
            </p>
          </div>

        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-4xl font-bold text-center mb-12">
          Career Highlights
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-slate-900 p-6 rounded-xl">
  <h3 className="text-sky-400 text-xl font-bold mb-6">
    National Achievements
  </h3>

  <div className="space-y-4">

    <div className="flex gap-3 items-start">
      <Trophy className="text-sky-400 mt-1" size={20} />
      <p>National Record Holder – 800m Freestyle (Short Course)</p>
    </div>

    <div className="flex gap-3 items-start">
      <Trophy className="text-sky-400 mt-1" size={20} />
      <p>National Record Holder – 5km Open Water Swimming</p>
    </div>

    <div className="flex gap-3 items-start">
      <Trophy className="text-sky-400 mt-1" size={20} />
      <p>Multiple Sri Lanka National Championship Titles</p>
    </div>

    <div className="flex gap-3 items-start">
      <Medal className="text-sky-400 mt-1" size={20} />
      <p>South Asian Games 2019 – Two Silver Medals</p>
    </div>

  </div>
</div>


          <div className="bg-slate-900 p-6 rounded-xl">
  <h3 className="text-sky-400 text-xl font-bold mb-6">
    World Championships
  </h3>

  <div className="space-y-4">

    <div className="flex gap-3 items-start">
      <Globe className="text-sky-400 mt-1" size={20} />
      <p>World Aquatics Championships Doha 2024 – Open Water 5km</p>
    </div>

    <div className="flex gap-3 items-start">
      <Globe className="text-sky-400 mt-1" size={20} />
      <p>World Aquatics Championships 2025 – Open Water 5km</p>
    </div>

    <div className="flex gap-3 items-start">
      <Globe className="text-sky-400 mt-1" size={20} />
      <p>FINA World Championships Budapest 2022 – Selected Athlete</p>
    </div>

    <div className="flex gap-3 items-start">
      <Award className="text-sky-400 mt-1" size={20} />
      <p>Asian Beach Games 2026 – 14th Place</p>
    </div>

  </div>
</div>
<div className="bg-slate-900 p-6 rounded-xl">
  <h3 className="text-sky-400 text-xl font-bold mb-6">
    Leadership
  </h3>

  <div className="space-y-4">

    <div className="flex gap-3 items-start">
      <Flag className="text-sky-400 mt-1" size={20} />
      <p>Sri Lanka Team Captain – Singapore National Championships 2023</p>
    </div>

    <div className="flex gap-3 items-start">
      <Flag className="text-sky-400 mt-1" size={20} />
      <p>Sri Lanka Team Captain – Malaysia International Age Group Championships 2018</p>
    </div>

    <div className="flex gap-3 items-start">
      <Flag className="text-sky-400 mt-1" size={20} />
      <p>Team Sri Lanka Captain – Lifesaving World Championships 2024</p>
    </div>

  </div>
</div>

<div className="bg-slate-900 p-6 rounded-xl">
  <h3 className="text-sky-400 text-xl font-bold mb-6">
    Medals & Coaching
  </h3>

  <div className="space-y-4">

    <div className="flex gap-3 items-start">
      <Medal className="text-sky-400 mt-1" size={20} />
      <p>Malaysia International Age Group Championships 2018 – Bronze Medalist</p>
    </div>

    <div className="flex gap-3 items-start">
      <Medal className="text-sky-400 mt-1" size={20} />
      <p>South Asian Games 2019 – Two Silver Medals</p>
    </div>

    <div className="flex gap-3 items-start">
      <GraduationCap className="text-sky-400 mt-1" size={20} />
      <p>ASCA Level 1 Certified Coach</p>
    </div>

    <div className="flex gap-3 items-start">
      <GraduationCap className="text-sky-400 mt-1" size={20} />
      <p>ASCA Level 2 Certified Coach</p>
    </div>

  </div>
</div>

        </div>
      </section>

      {/* CO-COACHES */}
<section className="max-w-7xl mx-auto px-6 py-16">

  <div className="text-center mb-12">

    <p className="text-sky-400 uppercase font-bold tracking-wider">
      Coaching Team
    </p>

    <h2 className="text-5xl font-bold mt-2">
      Meet Our Co-Coaches
    </h2>

    <p className="text-gray-400 text-lg mt-4 max-w-3xl mx-auto">
      Tiger Shark Aquatic Academy is supported by a passionate team of
      qualified coaches and national athletes who bring years of
      competitive experience, leadership, and professional coaching to
      every training camp.
    </p>

  </div>

  <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-xl">

    <Image
      src="/cocoaches.jpeg"
      alt="Tiger Shark Aquatic Academy Coaching Team"
      width={1200}
      height={1700}
      className="w-full h-auto"
    />

  </div>

</section>

      {/* WHY TRAIN */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Train With Tiger Shark?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-900 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">
              International Experience
            </h3>

            <p className="text-gray-400">
              Learn from an athlete who has competed on the world stage.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">
              Proven Performance
            </h3>

            <p className="text-gray-400">
              National records, international medals, and world championship participation.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">
              Athlete Development
            </h3>

            <p className="text-gray-400">
              Technique, discipline, race strategy, and long-term growth.
            </p>
          </div>

        </div>
      </section>

      {/* MISSION */}
      <section className="max-w-5xl mx-auto px-6 pb-20">

        <div className="bg-sky-500/10 border border-sky-500/20 rounded-2xl p-10 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Our Mission
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed">
            To inspire, educate, and develop the next generation of
            Sri Lankan swimmers by combining international experience,
            modern coaching methods, and a culture of excellence.
          </p>

        </div>

      </section>

    </main>
  );
}