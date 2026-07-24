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

{/* COACHING TEAM */}
<section className="max-w-7xl mx-auto px-6 py-20">

  <div className="text-center mb-14">

    <p className="text-sky-400 uppercase font-bold tracking-widest">
      Coaching Team
    </p>

    <h2 className="text-5xl font-bold mt-3">
      Meet Our Coaches
    </h2>

    <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-5">
      Tiger Shark Aquatic Academy is supported by experienced swimmers,
      certified coaches, and dedicated mentors who are passionate about
      developing the next generation of athletes.
    </p>

  </div>

  <div className="grid lg:grid-cols-2 gap-8">

    {/* Coach 1 */}
    <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">

      <div className="flex gap-6">

        <div className="w-36 h-44 rounded-xl bg-slate-800 flex items-center justify-center text-gray-500 text-sm">
          Photo
        </div>

        <div className="flex-1">

          <h3 className="text-2xl font-bold text-sky-400">
            Nileesha Deshanjana
          </h3>

          <p className="text-gray-400 mb-5">
            Senior Coach
          </p>

          <ul className="space-y-2 text-gray-300">
            <li>• National Swimmer</li>
            <li>• ASCA Level 1 & Level 2 Certified Coach</li>
            <li>• Former Assistant Coach – Ananda College</li>
            <li>• Present Assistant Coach – Nalanda College</li>
            <li>• Represented Sri Lanka at the 2016 South Asian Aquatic Championships</li>
            <li>• Sri Lanka Lifesaving Bronze Medalist</li>
            <li>• National Medalist</li>
          </ul>

        </div>

      </div>

    </div>

    {/* Coach 2 */}
    <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">

      <div className="flex gap-6">

        <div className="w-36 h-44 rounded-xl bg-slate-800 flex items-center justify-center text-gray-500 text-sm">
          Photo
        </div>

        <div className="flex-1">

          <h3 className="text-2xl font-bold text-sky-400">
            Senal Pathirana
          </h3>

          <p className="text-gray-400 mb-5">
            Intermediate Coach
          </p>

          <ul className="space-y-2 text-gray-300">
            <li>• National Swimmer</li>
            <li>• Former Head Prefect – Ananda College</li>
            <li>• Vice Captain – Ananda Swimming Team (2025)</li>
            <li>• Sri Lanka Lifesaving Bronze Medalist</li>
            <li>• Represented Sri Lanka at the 2024 World Championships (Australia)</li>
            <li>• Sri Lanka U-19 Team Vice Captain</li>
          </ul>

        </div>

      </div>

    </div>

    {/* Coach 3 */}
    <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">

      <div className="flex gap-6">

        <div className="w-36 h-44 rounded-xl bg-slate-800 flex items-center justify-center text-gray-500 text-sm">
          Photo
        </div>

        <div className="flex-1">

          <h3 className="text-2xl font-bold text-sky-400">
            Meedum Mendis
          </h3>

          <p className="text-gray-400 mb-5">
            Performance Coach
          </p>

          <ul className="space-y-2 text-gray-300">
            <li>• National Swimmer</li>
            <li>• Sri Lanka Lifesaving Commonwealth Gold Medalist</li>
            <li>• Competitive Athlete</li>
            <li>• Former Student – Ananda College, Colombo</li>
          </ul>

        </div>

      </div>

    </div>

    {/* Coach 4 */}
    <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">

      <div className="flex gap-6">

        <div className="w-36 h-44 rounded-xl bg-slate-800 flex items-center justify-center text-gray-500 text-sm">
          Photo
        </div>

        <div className="flex-1">

          <h3 className="text-2xl font-bold text-sky-400">
            Gayan Madusanka
          </h3>

          <p className="text-gray-400 mb-5">
            Assistant Coach
          </p>

          <ul className="space-y-2 text-gray-300">
            <li>• Trinity College Assistant Coach</li>
            <li>• Sri Lanka Lifesaving Bronze Medalist</li>
            <li>• ASCA Level 1 Certified Coach</li>
            <li>• ASCA Level 2 Certified Coach</li>
          </ul>

        </div>

      </div>

    </div>

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