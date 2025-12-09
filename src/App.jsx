import Navbar from "./component/navbar"

import pagi from "./assets/pagi.png"
import sore from "./assets/sore.png"
import malam from "./assets/malam.png"
function App() {
  return (
    <>
      <div className="py-3 px-1 md:px-20 space-y-3">
        <Navbar/>
      <div className="max-w-5xl mx-auto px-4 py-10 text-white mt-5">
        <div className="space-y-4">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <div className="relative group overflow-hidden bg-[#050816]/50 border border-slate-700 rounded-2xl p-4 ">
              <img
                src={pagi}
                alt="Scene pagi"
                className="w-full h-[200px] md:h-[300px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/60 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Morning Breeze
              </div>
            </div>
            <div className="relative group overflow-hidden bg-[#050816]/50 border border-slate-700 rounded-2xl p-4">
              <img
                src={sore}
                alt="Scene sore"
                className="w-full h-[200px] md:h-[300px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/60 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Golden Hour
              </div>
            </div>
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <div className="relative group overflow-hidden bg-[#050816]/50 border border-slate-700 rounded-2xl p-4">
              <img
                src={malam}
                alt="Scene malam"
                className="w-full h-[200px] md:h-[300px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/60 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Midnight Chill
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-[#050816]/50 border border-slate-700 rounded-2xl p-4 h-[100px]">
                <h3 className="text-sm font-semibold">Morning Breeze</h3>
                <p className="text-xs text-slate-300">
                  Mario stands happily near a swing, surrounded by bright green trees and small colorful flowers. The scene feels lively and fresh.
                </p>
              </div>
              <div className="bg-[#050816]/50 border border-slate-700 rounded-2xl p-4 h-[100px]">
                <h3 className="text-sm font-semibold">Golden Hour</h3>
                <p className="text-xs text-slate-300">
                  Mario sits relaxed beneath a tree with an empty swing beside him. The warm orange light makes the leaves glow softly.
                </p>
              </div>
              <div className="bg-[#050816]/50 border border-slate-700 rounded-2xl p-4 h-[100px]">
                <h3 className="text-sm font-semibold">Midnight Chill</h3>
                <p className="text-xs text-slate-300">
                  Mario sleeps peacefully under a glowing streetlamp, with a crescent moon and stars shining in the sky. The atmosphere is calm and quiet.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#050816]/50 border border-slate-700 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-2
                      bg-gradient-to-r from-[#ba72eb] to-[#00A7FF]
                      bg-clip-text text-transparent text-center">
              SkyShift – Day to Night Pixel World
            </h2>
          </div>
        </div>
      </div>

      </div>
    </>
  )
}

export default App
