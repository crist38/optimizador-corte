import { Optimizer } from "@/components/Optimizer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-cyan-500/30">
      <div className="max-w-[1600px] mx-auto p-4 md:p-8">
        <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              GlassOpt
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">
              Optimizador de Corte Avanzado para Vidrio Plano
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-sm font-medium">v1.1.0</span>
          </div>
        </header>

        <Optimizer />
      </div>
    </main>
  );
}
