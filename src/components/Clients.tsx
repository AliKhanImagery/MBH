// Placeholder wordmarks — swap for real client/partner logos once supplied.
const PLACEHOLDER_CLIENTS = [
  "Food & Beverage Group",
  "FMCG Manufacturer",
  "Power Generation Co.",
  "Process Manufacturing Ltd.",
  "Packaging Industries",
  "Textile Group",
];

export default function Clients() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12">
        <p className="text-eyebrow text-center text-steel-text">
          Trusted By Manufacturers Across Pakistan
        </p>

        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {PLACEHOLDER_CLIENTS.map((name) => (
            <div
              key={name}
              className="flex h-16 items-center justify-center rounded-md border border-black/5 bg-off-white px-3 text-center"
            >
              <span
                className="text-[#6A7A9A]"
                style={{ fontWeight: 500, fontSize: 12 }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
