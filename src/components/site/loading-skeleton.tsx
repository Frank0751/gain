export function LoadingSkeleton() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar skeleton */}
      <div className="h-16 w-full border-b border-border bg-background/92" />

      <main className="flex-1">
        {/* Hero skeleton */}
        <div className="h-[60vh] w-full bg-secondary animate-pulse" />

        {/* Content skeleton */}
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          {/* Section heading skeleton */}
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="mx-auto h-10 w-2/3 rounded-lg bg-secondary animate-pulse" />
            <div className="mx-auto h-5 w-full rounded-lg bg-secondary animate-pulse" />
          </div>

          {/* Cards skeleton */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-border">
                <div className="aspect-[16/10] w-full bg-secondary animate-pulse" />
                <div className="space-y-3 p-5">
                  <div className="h-5 w-3/4 rounded bg-secondary animate-pulse" />
                  <div className="h-4 w-full rounded bg-secondary animate-pulse" />
                  <div className="h-4 w-5/6 rounded bg-secondary animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer skeleton */}
      <div className="h-64 w-full bg-secondary/30 animate-pulse" />
    </div>
  );
}
