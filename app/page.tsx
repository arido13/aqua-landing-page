export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100">
      <style>{`html { scroll-behavior: smooth; }`}</style>
      
      <nav className="sticky top-0 z-50 w-full bg-white shadow-[0_4px_25px_rgba(0,0,0,0.12)]">
        <div className="mx-auto hidden w-full max-w-6xl items-center justify-between px-6 py-4 text-center text-sm font-extrabold uppercase tracking-wide text-[#003882] lg:flex">
          <div className="cursor-pointer transition-colors hover:text-blue-500">HANYA AQUA<br />100% MURNI</div>
          <div className="cursor-pointer transition-colors hover:text-blue-500">AQUA X TIMNAS<br />INDONESIA</div>
          <div className="cursor-pointer transition-colors hover:text-blue-500">PRODUK<br />AQUA</div>
          
          <img src="/logo-aqua.webp" alt="Logo AQUA" className="mx-4 h-24 w-auto object-contain transition-transform hover:scale-105" />

          <div className="cursor-pointer transition-colors hover:text-blue-500">AQUA<br />HOME SERVICE</div>
          <div className="cursor-pointer transition-colors hover:text-blue-500">RAMADAN</div>
          <div className="cursor-pointer transition-colors hover:text-blue-500">ARTIKEL</div>
        </div>

        <div className="flex justify-center py-4 lg:hidden">
          <img src="/logo-aqua.webp" alt="Logo AQUA" className="h-16 w-auto object-contain" />
        </div>
      </nav>

      <section className="border-b border-gray-100 bg-white py-12">
        <div className="mx-auto flex max-w-4xl flex-row flex-wrap justify-center gap-8 px-6 sm:flex-nowrap md:gap-16">
          <a href="#botol" className="group flex flex-col items-center justify-center gap-4 transition-transform hover:-translate-y-1">
            <div className="flex h-16 w-16 items-center justify-center">
              <img src="/produk-botol.svg" alt="botol" className="h-full w-full object-contain transition-transform group-hover:scale-105" />
            </div>
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#003882] group-hover:text-blue-500">aqua botol</span>
          </a>
          <a href="#galon" className="group flex flex-col items-center justify-center gap-4 transition-transform hover:-translate-y-1">
            <div className="flex h-16 w-16 items-center justify-center">
              <img src="/produk-galon.svg" alt="galon" className="h-full w-full object-contain transition-transform group-hover:scale-105" />
            </div>
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#003882] group-hover:text-blue-500">aqua galon</span>
          </a>
          <a href="#cube" className="group flex flex-col items-center justify-center gap-4 transition-transform hover:-translate-y-1">
            <div className="flex h-16 w-16 items-center justify-center">
              <img src="/produk-cube.svg" alt="cube" className="h-full w-full object-contain transition-transform group-hover:scale-105" />
            </div>
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#003882] group-hover:text-blue-500">aqua cube</span>
          </a>
          <a href="#life" className="group flex flex-col items-center justify-center gap-4 transition-transform hover:-translate-y-1">
            <div className="flex h-16 w-16 items-center justify-center">
              <img src="/produk-life.svg" alt="life" className="h-full w-full object-contain transition-transform group-hover:scale-105" />
            </div>
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#003882] group-hover:text-blue-500">aqua life</span>
          </a>
          <a href="#reflections" className="group flex flex-col items-center justify-center gap-4 transition-transform hover:-translate-y-1">
            <div className="flex h-16 w-16 items-center justify-center">
              <img src="/produk-reflections.svg" alt="reflections" className="h-full w-full object-contain transition-transform group-hover:scale-105" />
            </div>
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#003882] group-hover:text-blue-500">aqua reflections</span>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex flex-col gap-24">
          
          <div id="botol" className="flex scroll-mt-32 flex-col items-center gap-10 md:flex-row">
            <div className="flex w-full justify-center md:w-1/2">
              <div className="relative flex aspect-square w-full max-w-lg items-center justify-center">
                <img src="/aqua-botol.webp" alt="AQUA Botol" className="h-[120%] w-auto object-contain transition-transform duration-500 hover:scale-105" />
              </div>
            </div>
            <div className="w-full space-y-4 md:w-1/2 text-center">
              <h2 className="text-3xl font-extrabold uppercase text-[#003882] md:text-4xl">AQUA Botol</h2>
              <p className="mx-auto max-w-sm text-lg text-gray-500 md:text-2xl">Kapanpun, Di Manapun.</p>
              <div className="pt-4"><button className="cursor-pointer border-2 border-[#00a3e0] bg-white px-8 py-3 text-sm font-bold uppercase text-[#00a3e0] transition-colors hover:bg-blue-50">temukan produk &rarr;</button></div>
            </div>
          </div>

          <div id="galon" className="flex scroll-mt-32 flex-col items-center gap-10 md:flex-row-reverse">
            <div className="flex w-full justify-center md:w-1/2">
              <div className="relative flex aspect-square w-full max-w-lg items-center justify-center">
                <img src="/aqua-galon.webp" alt="AQUA Galon" className="h-[120%] w-auto object-contain transition-transform duration-500 hover:scale-105" />
              </div>
            </div>
            <div className="w-full space-y-4 md:w-1/2 text-center">
              <h2 className="text-3xl font-extrabold uppercase text-[#003882] md:text-4xl">AQUA Galon</h2>
              <p className="mx-auto max-w-sm text-lg text-gray-500 md:text-2xl">Untuk Keluarga Sehat.</p>
              <div className="pt-4"><button className="cursor-pointer border-2 border-[#00a3e0] bg-white px-8 py-3 text-sm font-bold uppercase text-[#00a3e0] transition-colors hover:bg-blue-50">temukan produk &rarr;</button></div>
            </div>
          </div>

          <div id="cube" className="flex scroll-mt-32 flex-col items-center gap-10 md:flex-row">
            <div className="flex w-full justify-center md:w-1/2">
              <div className="relative flex aspect-square w-full max-w-lg items-center justify-center">
                <img src="/aqua-cube.webp" alt="AQUA Cube" className="h-[120%] w-auto object-contain transition-transform duration-500 hover:scale-105" />
              </div>
            </div>
            <div className="w-full space-y-4 md:w-1/2 text-center">
              <h2 className="text-3xl font-extrabold uppercase text-[#003882] md:text-4xl">AQUA Cube</h2>
              <p className="mx-auto max-w-sm text-lg text-gray-500 md:text-2xl">Mini. Praktis.</p>
              <div className="pt-4"><button className="cursor-pointer border-2 border-[#00a3e0] bg-white px-8 py-3 text-sm font-bold uppercase text-[#00a3e0] transition-colors hover:bg-blue-50">temukan produk &rarr;</button></div>
            </div>
          </div>

          <div id="life" className="flex scroll-mt-32 flex-col items-center gap-10 md:flex-row-reverse">
            <div className="flex w-full justify-center md:w-1/2">
              <div className="relative flex aspect-square w-full max-w-lg items-center justify-center">
                <img src="/aqua-life.webp" alt="AQUA Life" className="h-[120%] w-auto object-contain transition-transform duration-500 hover:scale-105" />
              </div>
            </div>
            <div className="w-full space-y-4 md:w-1/2 text-center">
              <h2 className="text-3xl font-extrabold uppercase text-[#003882] md:text-4xl">AQUA Life</h2>
              <p className="mx-auto max-w-sm text-lg text-gray-500 md:text-2xl">Dari 100% plastik daur ulang, 100% dapat didaur ulang</p>
              <div className="pt-4"><button className="cursor-pointer border-2 border-[#00a3e0] bg-white px-8 py-3 text-sm font-bold uppercase text-[#00a3e0] transition-colors hover:bg-blue-50">temukan produk &rarr;</button></div>
            </div>
          </div>

          <div id="reflections" className="flex scroll-mt-32 flex-col items-center gap-10 md:flex-row">
            <div className="flex w-full justify-center md:w-1/2">
              <div className="relative flex aspect-square w-full max-w-lg items-center justify-center">
                <img src="/aqua-reflections.webp" alt="AQUA Reflections" className="h-[120%] w-auto object-contain transition-transform duration-500 hover:scale-105" />
              </div>
            </div>
            <div className="w-full space-y-4 md:w-1/2 text-center">
              <h2 className="text-3xl font-extrabold uppercase text-[#003882] md:text-4xl">AQUA Reflections</h2>
              <p className="mx-auto max-w-sm text-lg text-gray-500 md:text-2xl">Nature's Fine Selection</p>
              <div className="pt-4"><button className="cursor-pointer border-2 border-[#00a3e0] bg-white px-8 py-3 text-sm font-bold uppercase text-[#00a3e0] transition-colors hover:bg-blue-50">temukan produk &rarr;</button></div>
            </div>
          </div>

        </div>
      </section>

      <footer className="mt-20 border-t border-gray-200 bg-gray-50 px-6 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm font-medium text-gray-500">&copy; 2026 Danone AQUA. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-[#003882]">
            <a href="#" className="hover:underline">Corporate Site</a>
            <a href="#" className="hover:underline">Kontak</a>
            <a href="#" className="hover:underline">Privasi</a>
            <a href="#" className="hover:underline">Syarat & Ketentuan</a>
          </div>
        </div>
      </footer>
    </main>
  )
}