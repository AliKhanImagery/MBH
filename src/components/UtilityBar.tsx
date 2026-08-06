export default function UtilityBar() {
  return (
    <div className="bg-near-black">
      <div className="mx-auto flex max-w-[1400px] items-center justify-end gap-2 px-6 py-2 md:px-12">
        <a
          href="https://wa.me/"
          className="text-nav-link rounded-full border border-white/10 px-3 py-1 text-white/60 transition-colors hover:border-white/20 hover:text-white"
        >
          WhatsApp
        </a>
        <a
          href="#contact"
          className="text-nav-link rounded-full border border-white/10 px-3 py-1 text-white/60 transition-colors hover:border-white/20 hover:text-white"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
