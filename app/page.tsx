export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Tiger Shark Aquatic Academy
        </h1>

        <p className="text-xl md:text-2xl text-sky-400 mb-8">
          Swim. Train. Compete. Excel.
        </p>

        <p className="max-w-3xl mx-auto text-gray-300 mb-10">
          Founded by Dilanka Shehan, Sri Lanka National Record Holder,
          South Asian Games Silver Medalist, and World Aquatics Scholarship
          Athlete.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-lg font-semibold">
            Register for Camp
          </button>

          <button className="border border-sky-500 px-6 py-3 rounded-lg font-semibold">
            Online Coaching
          </button>
        </div>
      </section>
    </main>
  );
}