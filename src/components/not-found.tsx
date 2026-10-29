import Link from "next/link"

export function NotFound() {
  return (
    <div className="grid min-h-svh place-items-center px-4 py-6">
      <section className="flex flex-col items-center gap-4 text-center">
        <p className="font-pixel text-sm text-muted-foreground uppercase">
          Erro 404
        </p>
        <h1 className="font-pixel text-5xl text-red-500 sm:text-7xl">
          GAME OVER
        </h1>
        <p className="text-muted-foreground">Essa página não existe.</p>
        <Link
          href="/"
          className="mt-2 border-2 border-frame bg-card px-4 py-2 font-pixel text-sm uppercase shadow-[4px_4px_0_0_var(--frame-shadow)] hover:translate-px hover:text-game hover:shadow-[3px_3px_0_0_var(--frame-shadow)]"
        >
          Continuar? Voltar ao início
        </Link>
      </section>
    </div>
  )
}
