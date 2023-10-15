import {
  SkipForward,
  SkipBack,
  Shuffle,
  Repeat2,
  Play,
  Volume1,
  Mic2,
  MonitorSpeaker,
  PictureInPicture2,
  ListMusic,
  PlaySquare,
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black grid grid-cols-3 py-4 fixed bottom-0">
      <div></div>
      <div>
        <div className="flex items-center justify-center gap-6">
          <Shuffle color="#3f3f46" size={15} />
          <SkipBack fill="#71717a" color="#71717a" size={25} />
          <button className="bg-[#71717a] rounded-full flex items-center justify-center ps-1 w-10 h-10">
            <Play fill="#000" color="#000" size={25} />
          </button>
          <SkipForward fill="#71717a" color="#71717a" size={25} />
          <Repeat2 color="#3f3f46" size={15} />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-zinc-500 text-xs">00:00</p>
          <div className="w-96 h-1 bg-white/30 rounded-full"></div>
          <p className="text-zinc-500 text-xs">00:00</p>
        </div>
      </div>
      <div className="flex gap-4 justify-end items-center pe-2">
        <PlaySquare color="#3f3f46" size={20} />
        <Mic2 color="#3f3f46" size={20} />
        <ListMusic color="#3f3f46" size={20} />
        <MonitorSpeaker color="#3f3f46" size={20} />
        <Volume1 color="#3f3f46" size={20} />
        <div className="w-20 h-1 bg-white/30 rounded-full"></div>
        <PictureInPicture2 color="#3f3f46" size={20} />
      </div>
    </footer>
  )
}
