import Logo from "../common/Logo";

function AuthLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white">

      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-orange-600/10 blur-[140px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">

        <div className="grid w-full grid-cols-1 gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="hidden flex-col justify-center lg:flex">

            <Logo />

            <h2 className="mt-12 text-5xl font-bold leading-tight">
              Land Your Dream Job
              <span className="text-orange-500"> Faster.</span>
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-400">
              CareerPilot AI helps you discover jobs, improve your resume,
              check ATS compatibility, compare job descriptions, and prepare
              for interviews—all in one place.
            </p>

            <div className="mt-10 space-y-5">

              <Feature text="AI Resume Enhancement" />

              <Feature text="ATS Resume Checker" />

              <Feature text="JD Match Analysis" />

              <Feature text="AI Interview Preparation" />

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="flex items-center justify-center">

            {children}

          </div>

        </div>

      </div>

    </div>
  );
}

function Feature({ text }) {
  return (
    <div className="flex items-center gap-3">

      <div className="h-2.5 w-2.5 rounded-full bg-orange-500"></div>

      <span className="text-lg text-zinc-300">
        {text}
      </span>

    </div>
  );
}

export default AuthLayout;