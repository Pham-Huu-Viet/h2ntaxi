export default function BlogLayout({
  children,
  title,
  description,
  image,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <main className="bg-gray-50">
      {/* HERO */}
      <div
        className="relative h-72 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col justify-center px-6 text-white">
          <h1 className="text-white">{title}</h1>
          <p className="mt-4 text-white/90">{description}</p>
        </div>
      </div>

      {/* CONTENT */}
      <article className="mx-auto max-w-3xl px-4 py-12">
        <div className="rounded-2xl bg-white p-6 shadow-lg md:p-10">
          <div className="prose prose-lg max-w-none">{children}</div>
        </div>
      </article>
    </main>
  );
}
