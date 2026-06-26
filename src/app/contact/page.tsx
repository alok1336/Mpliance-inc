export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Glow Effects */}
      <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[140px]" />
      <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="relative mx-auto max-w-4xl px-5 py-20">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-6 py-2 text-sm font-medium text-cyan-400">
            Get In Touch
          </span>

          <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Have questions about our medical equipment,
            AMC services or AERB licensing? We'd love
            to hear from you.
          </p>
        </div>

        {/* Form Card */}
        <form className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,.08)]">
          <div className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            />

            <textarea
              rows={6}
              placeholder="Tell us about your requirements..."
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            />

            <button
              type="submit"
              className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,.35)] transition-all hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(59,130,246,.6)]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}