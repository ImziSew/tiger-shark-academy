import Link from "next/link";
import {
  Waves,
  Activity,
  Trophy,
  Users,
  Brain,
  MonitorSmartphone,
  BadgePercent,
  ArrowRight,
} from "lucide-react";

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <div className="border-b border-blue-900 bg-[#03142e]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div>
            <h1 className="text-4xl font-bold">
              Our Programs
            </h1>

            <p className="text-sky-400 mt-1">
              Professional Swimming Development
            </p>
          </div>

          <Link
            href="/"
            className="bg-sky-500 hover:bg-sky-600 px-5 py-3 rounded-lg font-semibold"
          >
            Back Home
          </Link>

        </div>
      </div>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">

        <h1 className="text-5xl md:text-7xl font-black">
          OUR <span className="text-sky-500">PROGRAMS</span>
        </h1>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-8">
          Whether you're learning to swim for the first time or preparing
          for international competition, Tiger Shark Aquatic Academy
          provides professional coaching for swimmers of every age and level.
        </p>

      </section>

      {/* PROGRAM CARDS */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Beginner */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 hover:border-sky-500 transition">

            <Waves
              size={42}
              className="text-sky-400 mb-6"
            />

            <h2 className="text-2xl font-bold mb-4">
              Beginner Swimming
            </h2>

            <p className="text-gray-300 leading-8">
              Perfect for swimmers beginning their journey.
              Learn water confidence, breathing, floating,
              body position and the foundations of all
              swimming strokes.
            </p>

          </div>

          {/* Intermediate */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 hover:border-sky-500 transition">

            <Activity
              size={42}
              className="text-sky-400 mb-6"
            />

            <h2 className="text-2xl font-bold mb-4">
              Intermediate Swimming
            </h2>

            <p className="text-gray-300 leading-8">
              Improve stroke efficiency, starts,
              turns, endurance, breathing techniques
              and overall swimming performance.
            </p>

          </div>

          {/* Competitive */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 hover:border-sky-500 transition">

            <Trophy
              size={42}
              className="text-yellow-400 mb-6"
            />

            <h2 className="text-2xl font-bold mb-4">
              Competitive Swimming
            </h2>

            <p className="text-gray-300 leading-8">
              High-performance coaching for school,
              club, national and international swimmers.
              Race preparation, technique refinement and
              competition planning.
            </p>

          </div>

          {/* Open Water */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 hover:border-sky-500 transition">

            <Waves
              size={42}
              className="text-cyan-400 mb-6"
            />

            <h2 className="text-2xl font-bold mb-4">
              Open Water Swimming
            </h2>

            <p className="text-gray-300 leading-8">
              Specialized coaching in navigation,
              drafting, endurance, ocean safety,
              pacing and race strategy.
            </p>

          </div>

          {/* Special Needs */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 hover:border-sky-500 transition">

            <Users
              size={42}
              className="text-green-400 mb-6"
            />

            <h2 className="text-2xl font-bold mb-4">
              Special Needs Coaching
            </h2>

            <p className="text-gray-300 leading-8">
              Individualized coaching programs
              designed to help every swimmer
              build confidence, improve skills
              and enjoy the sport.
            </p>

          </div>

          {/* Athlete Development */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 hover:border-sky-500 transition">

            <Brain
              size={42}
              className="text-orange-400 mb-6"
            />

            <h2 className="text-2xl font-bold mb-4">
              Athlete Development
            </h2>

            <ul className="space-y-3 text-gray-300">

              <li>• Personalized Workout Plans</li>
              <li>• Dryland Strength Training</li>
              <li>• Nutrition Guidance</li>
              <li>• Mental Preparation</li>
              <li>• Goal Setting</li>
              <li>• Motivation</li>
              <li>• Video Analysis</li>
              <li>• Recovery Planning</li>

            </ul>

          </div>

        </div>

      </section>

      {/* ONLINE COACHING CTA */}
<section className="max-w-5xl mx-auto px-6 pb-24">

  <div className="bg-slate-900 border border-sky-500 rounded-3xl p-12 text-center">

    <h2 className="text-4xl font-bold mb-6">
      Interested in Online Coaching?
    </h2>

    <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
      Train with an International Swimmer and Certified Coach from anywhere in
      the world through our personalized online coaching program.
    </p>

    <Link
      href="/online-coaching"
      className="inline-flex items-center gap-3 bg-sky-500 hover:bg-sky-600 px-10 py-5 rounded-xl font-bold text-xl transition"
    >
      Learn More About Online Coaching
      <ArrowRight size={24} />
    </Link>

  </div>

</section>

</main>
  );
}


