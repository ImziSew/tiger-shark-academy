import Link from "next/link";

export default function OnlineCoachingPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center">

          <div className="inline-block bg-green-500 text-black px-5 py-2 rounded-full font-bold mb-6">
            🎉 20% OFF FOR NEW ATHLETES
          </div>

          <h1 className="text-5xl md:text-7xl font-black">
            ONLINE
            <span className="text-sky-500"> COACHING</span>
          </h1>

          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            Train with an International Swimmer and Certified Coach
            from anywhere in the world.
          </p>

        </div>

      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Beginner Swimmers
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Intermediate Swimmers
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Competitive Swimmers
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Open Water Swimmers
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Special Needs Athletes
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Personalized Training Plans
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Stroke Technique Analysis
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Nutrition Guidance
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Mental Preparation
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Motivation & Goal Setting
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Dryland Strength Training
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Balance & Coordination Development
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Race Strategy Planning
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Video Analysis & Feedback
          </div>

        </div>

      </section>

      {/* PRICING */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Coaching Packages
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-900 p-8 rounded-2xl border border-sky-500">

            <h3 className="text-3xl font-bold mb-6 text-sky-400">
              Weekly Package
            </h3>

            <ul className="space-y-4 text-lg">
              <li>• 3 Classes Per Week</li>
              <li>• 45 Minutes Per Session</li>
              <li>• Personalized Coaching</li>
              <li>• Progress Monitoring</li>
            </ul>

            <div className="mt-8 text-4xl font-bold text-sky-500">
              LKR 3,000
            </div>

            <div className="text-gray-400">
              Approximately USD $10 Per Week
            </div>

          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-green-500">

            <h3 className="text-3xl font-bold mb-6 text-green-400">
              Monthly Package
            </h3>

            <ul className="space-y-4 text-lg">
              <li>• 12 Sessions Per Month</li>
              <li>• 45 Minutes Per Session</li>
              <li>• Personalized Coaching</li>
              <li>• Progress Monitoring</li>
            </ul>

            <div className="mt-8 text-4xl font-bold text-green-400">
              LKR 10,000
            </div>

            <div className="text-gray-400">
              Best Value Package
            </div>

          </div>

        </div>

      </section>

      {/* WHATSAPP CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-24">

        <div className="bg-slate-900 rounded-2xl p-10 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Ready To Start?
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            Contact us directly on WhatsApp and begin your
            personalized swimming journey today.
          </p>

          <a
            href="https://wa.me/94764321999?text=Hi%20Tiger%20Shark%20Aquatic%20Academy,%20I%20am%20interested%20in%20the%20Online%20Coaching%20Program."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-black font-bold px-10 py-4 rounded-xl text-lg"
          >
            Register Via WhatsApp
          </a>

          <div className="mt-6">
            <Link
              href="/"
              className="text-sky-400 hover:text-sky-300"
            >
              ← Back to Home
            </Link>
          </div>

        </div>

      </section>

    </main>
  );
}