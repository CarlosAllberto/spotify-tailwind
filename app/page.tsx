import {
  Search,
  Home as House,
  Library,
  Plus,
  ArrowRight,
  List,
  ChevronLeft,
  ChevronRight,
  Bell,
  User2,
  ArrowDownCircle,
  PauseCircle,
  SkipForward,
  SkipBack,
  Shuffle,
  Repeat2,
} from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="container p-2">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-md p-4 mb-2">
              <div className="flex items-center gap-4 mb-4">
                <House color="#a1a1aa" size={25} />
                <p className="text-zinc-400">Início</p>
              </div>
              <div className="flex items-center gap-4">
                <Search color="#a1a1aa" size={25} />
                <p className="text-zinc-400">Buscar</p>
              </div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-md p-4">
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <Library color="#a1a1aa" size={25} />
                  <p className="text-zinc-400">Sua Biblioteca</p>
                </div>
                <div className="flex gap-4">
                  <button>
                    <Plus color="#a1a1aa" size={25} />
                  </button>
                  <button>
                    <ArrowRight color="#a1a1aa" size={25} />
                  </button>
                </div>
              </div>
              <div className="flex gap-2 my-6">
                <button className="text-white bg-zinc-800 px-2 py-1 rounded-full">
                  Playlists
                </button>
                <button className="text-white bg-zinc-800 px-2 py-1 rounded-full">
                  Artistas
                </button>
              </div>
              <div className="h-80 overflow-y-scroll">
                <div className="flex justify-between my-6">
                  <div>
                    <Search color="#a1a1aa" size={20} />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-zinc-400">Recentes</p>
                    <List color="#a1a1aa" size={20} />
                  </div>
                </div>
                <div className="flex items-center gap-2 my-4">
                  <div>
                    <Image
                      className="rounded-full"
                      src="/metallica.jpeg"
                      width={50}
                      height={50}
                      alt="metallica"
                    />
                  </div>
                  <div>
                    <p className="text-white">Metallica</p>
                    <p className="text-zinc-500">Artista</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 my-4">
                  <div>
                    <Image
                      className="rounded-full"
                      src="/bring-me-the-horizon.jpg"
                      width={50}
                      height={50}
                      alt="metallica"
                    />
                  </div>
                  <div>
                    <p className="text-white">Bring Me The Horizon</p>
                    <p className="text-zinc-500">Artista</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 my-4">
                  <div>
                    <Image
                      className="rounded-full"
                      src="/system-of-a-down.jpeg"
                      width={50}
                      height={50}
                      alt="metallica"
                    />
                  </div>
                  <div>
                    <p className="text-white">System Of A Down</p>
                    <p className="text-zinc-500">Artista</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 my-4">
                  <div>
                    <Image
                      className="rounded-full"
                      src="/thousand-foot-krutch.jpg"
                      width={50}
                      height={50}
                      alt="metallica"
                    />
                  </div>
                  <div>
                    <p className="text-white">Thousand Foot Krutch</p>
                    <p className="text-zinc-500">Artista</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 my-4">
                  <div>
                    <Image
                      className="rounded-full"
                      src="/red-hot-chili-peppers.jpeg"
                      width={50}
                      height={50}
                      alt="metallica"
                    />
                  </div>
                  <div>
                    <p className="text-white">Red Hot Chili Peppers</p>
                    <p className="text-zinc-500">Artista</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 my-4">
                  <div>
                    <Image
                      className="rounded-full"
                      src="/queen.jpg"
                      width={50}
                      height={50}
                      alt="metallica"
                    />
                  </div>
                  <div>
                    <p className="text-white">Queen</p>
                    <p className="text-zinc-500">Artista</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 border border-zinc-800 rounded-md p-4">
            <div className="flex justify-between">
              <div className="flex gap-2 my-auto">
                <button className="bg-zinc-900 p-2 rounded-full">
                  <ChevronLeft color="white" size={20} />
                </button>
                <button className="bg-black p-2 rounded-full">
                  <ChevronRight color="white" size={20} />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-black bg-white px-2 py-1 rounded-full">
                  Ver planos Premium
                </button>
                <button className="text-white bg-black px-2 py-1 rounded-full flex items-center gap-1">
                  <ArrowDownCircle color="white" size={20} />
                  Instalar aplicativo
                </button>
                <button className="bg-black p-2 rounded-full">
                  <Bell color="white" size={25} />
                </button>
                <button className="bg-black p-2 rounded-full">
                  <User2 color="white" size={25} />
                </button>
              </div>
            </div>
            <p className="text-white text-3xl font-black my-6">Boa noite</p>
            <div className="grid grid-cols-3 grid-rows-2 gap-2">
              <div className="flex items-center gap-2 bg-zinc-700 rounded-md">
                <Image
                  className="rounded-s-md"
                  src="/queen.jpg"
                  width={50}
                  height={50}
                  alt="metallica"
                />
                <p className="text-white">Queen</p>
              </div>
              <div className="flex items-center gap-2 bg-zinc-700 rounded-md">
                <Image
                  className="rounded-s-md"
                  src="/queen.jpg"
                  width={50}
                  height={50}
                  alt="metallica"
                />
                <p className="text-white">Queen</p>
              </div>
              <div className="flex items-center gap-2 bg-zinc-700 rounded-md">
                <Image
                  className="rounded-s-md"
                  src="/queen.jpg"
                  width={50}
                  height={50}
                  alt="metallica"
                />
                <p className="text-white">Queen</p>
              </div>
              <div className="flex items-center gap-2 bg-zinc-700 rounded-md">
                <Image
                  className="rounded-s-md"
                  src="/queen.jpg"
                  width={50}
                  height={50}
                  alt="metallica"
                />
                <p className="text-white">Queen</p>
              </div>
              <div className="flex items-center gap-2 bg-zinc-700 rounded-md">
                <Image
                  className="rounded-s-md"
                  src="/queen.jpg"
                  width={50}
                  height={50}
                  alt="metallica"
                />
                <p className="text-white">Queen</p>
              </div>
              <div className="flex items-center gap-2 bg-zinc-700 rounded-md">
                <Image
                  className="rounded-s-md"
                  src="/queen.jpg"
                  width={50}
                  height={50}
                  alt="metallica"
                />
                <p className="text-white">Queen</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-white text-2xl font-bold my-6">
                Feito para Carlos Alberto
              </p>
              <p className="text-zinc-400">Mostrar tudo</p>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-zinc-800 rounded-lg p-4">
                <Image
                  className="rounded-md"
                  src="/queen.jpg"
                  width={100}
                  height={100}
                  alt="metallica"
                />
                <p className="text-white mt-4 mb-1">kdjdkjkd</p>
                <p className="text-zinc-500">
                  Lorem ipsum dolor sit amet consectetur elit.
                </p>
              </div>
              <div className="bg-zinc-800 rounded-lg p-4">
                <Image
                  className="rounded-md"
                  src="/queen.jpg"
                  width={100}
                  height={100}
                  alt="metallica"
                />
                <p className="text-white mt-4 mb-1">kdjdkjkd</p>
                <p className="text-zinc-500">
                  Lorem ipsum dolor sit amet consectetur elit.
                </p>
              </div>
              <div className="bg-zinc-800 rounded-lg p-4">
                <Image
                  className="rounded-md"
                  src="/queen.jpg"
                  width={100}
                  height={100}
                  alt="metallica"
                />
                <p className="text-white mt-4 mb-1">kdjdkjkd</p>
                <p className="text-zinc-500">
                  Lorem ipsum dolor sit amet consectetur elit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black flex items-center justify-between py-4">
          <div></div>
          <div>
            <div className="flex items-center gap-6">
              <Shuffle color="#3f3f46" size={15} />
              <SkipBack color="#71717a" size={25} />
              <PauseCircle color="#71717a" size={40} />
              <SkipForward color="#71717a" size={25} />
              <Repeat2 color="#3f3f46" size={15} />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </main>
  )
}
