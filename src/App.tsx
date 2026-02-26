export function App() {
  const teamMembers = [
    "John Chastain",
    "Ryan Shea",
    "Daniel Adair",
    "Dechez Edmonds",
    "Camden Rewerts",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden px-6 py-10 text-[#11382d] md:px-12 md:py-14">
      <div className="pointer-events-none absolute -left-20 top-8 h-64 w-64 rounded-full bg-[#1e8a57]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-48 h-72 w-72 rounded-full bg-[#c5a26a]/20 blur-3xl" />

      <main className="relative mx-auto max-w-6xl space-y-10">
        <section className="animate-fade-up rounded-[2.1rem] border border-[#006241]/20 bg-gradient-to-br from-[#0f3d2e] via-[#006241] to-[#1d6f4d] p-7 text-[#f2ebe3] shadow-[0_30px_80px_rgb(15_61_46_/_35%)] md:p-12">
          <p className="mb-3 inline-flex rounded-full border border-[#f2ebe3]/30 bg-[#f2ebe3]/10 px-4 py-1 text-xs font-bold tracking-[0.2em] text-[#f8f5f0]">
            PURDUE MGMT 382 - TEAM PROJECT 1
          </p>
          <h1 className="font-display text-4xl leading-tight md:text-6xl">Barista Bot</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#e6ddd3] md:text-lg">
            A training and workflow assistant for coffee shops: baristas enter the drink and size, and
            Barista Bot returns the exact ingredients and step-by-step instructions needed for a smooth,
            consistent drink build.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-[#f2ebe3]/12 p-4 backdrop-blur-sm">
              <p className="text-3xl font-extrabold">92</p>
              <p className="text-sm text-[#e6ddd3]">Drink recipes supported</p>
            </div>
            <div className="rounded-2xl bg-[#f2ebe3]/12 p-4 backdrop-blur-sm">
              <p className="text-3xl font-extrabold">Dify</p>
              <p className="text-sm text-[#e6ddd3]">App framework used to build the model</p>
            </div>
            <div className="rounded-2xl bg-[#f2ebe3]/12 p-4 backdrop-blur-sm">
              <p className="text-3xl font-extrabold">GPT-5</p>
              <p className="text-sm text-[#e6ddd3]">Core LLM powering instructions</p>
            </div>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          <article className="animate-fade-up-delay-1 rounded-3xl border border-[#006241]/15 bg-[#f8f5f0]/95 p-6 shadow-xl shadow-[#0f3d2e]/10">
            <h2 className="font-display text-2xl text-[#0f3d2e]">1. Input</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#2d4f42]">
              The barista enters a drink name and size (for example: Iced Caramel Macchiato, Grande).
            </p>
          </article>

          <article className="animate-fade-up-delay-2 rounded-3xl border border-[#006241]/15 bg-[#f8f5f0]/95 p-6 shadow-xl shadow-[#0f3d2e]/10">
            <h2 className="font-display text-2xl text-[#0f3d2e]">2. Process</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#2d4f42]">
              The model interprets the order details and maps them to the correct recipe workflow and
              ingredient profile.
            </p>
          </article>

          <article className="animate-fade-up-delay-3 rounded-3xl border border-[#006241]/15 bg-[#f8f5f0]/95 p-6 shadow-xl shadow-[#0f3d2e]/10">
            <h2 className="font-display text-2xl text-[#0f3d2e]">3. Output</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#2d4f42]">
              Barista Bot displays the ingredients and concise build instructions, helping speed and
              consistency across shifts.
            </p>
          </article>
        </section>

        <section className="animate-fade-up-delay-2 rounded-3xl border border-[#c5a26a]/45 bg-gradient-to-r from-[#f4eee5] to-[#efe4d4] p-7 shadow-xl shadow-[#c5a26a]/20 md:p-9">
          <h2 className="font-display text-3xl text-[#0f3d2e]">Vision</h2>
          <p className="mt-3 max-w-4xl text-[#2d4f42]">
            Our vision is to optimize barista workflow and accelerate training of new baristas. By making
            recipe guidance instantly available, we reduce hesitation on complex orders and improve drink
            quality consistency during high-traffic hours.
          </p>
        </section>

        <section className="animate-fade-up-delay-3 rounded-3xl border border-[#006241]/20 bg-[#f8f5f0]/92 p-7 shadow-xl shadow-[#0f3d2e]/10 md:p-9">
          <h2 className="font-display text-3xl text-[#0f3d2e]">Team Members</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <li
                key={member}
                className="rounded-2xl border border-[#006241]/15 bg-white/70 px-4 py-3 text-sm font-semibold text-[#124637]"
              >
                {member}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="relative mx-auto mt-8 max-w-6xl px-1 text-center text-xs font-medium tracking-wide text-[#31594a]">
        Concept site only - the bot itself is not implemented here.
      </footer>
    </div>
  );
}
