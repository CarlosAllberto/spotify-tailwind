import {
  Search,
  Home as House,
  Library,
  Plus,
  ArrowRight,
  List,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Sidebar() {
  interface MusicListItem {
    src: string
    name: string
    type: string
    href: string
  }

  const MusicList: MusicListItem[] = [
    {
      src: '/metallica.jpeg',
      name: 'Metallica',
      type: 'Artista',
      href: '#',
    },
    {
      src: '/bring-me-the-horizon.jpg',
      name: 'Bring me the Horizon',
      type: 'Artista',
      href: '#',
    },
    {
      src: '/system-of-a-down.jpeg',
      name: 'Syntem of a Down',
      type: 'Artista',
      href: '#',
    },
    {
      src: '/thousand-foot-krutch.jpg',
      name: 'Thousand Foot Kutch',
      type: 'Artista',
      href: '#',
    },
    {
      src: '/queen.jpg',
      name: 'Queen',
      type: 'Artista',
      href: '#',
    },
  ]

  return (
    <nav className="w-96 space-y-2">
      <div className="bg-zinc-900 rounded-md p-4 space-y-4">
        <div className="flex items-center gap-4">
          <House color="#a1a1aa" size={25} />
          <p className="text-zinc-400">Início</p>
        </div>
        <div className="flex items-center gap-4">
          <Search color="#a1a1aa" size={25} />
          <p className="text-zinc-400">Buscar</p>
        </div>
      </div>
      <div className="bg-zinc-900 rounded-md p-4 space-y-6">
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
        <div className="flex gap-2">
          <button className="text-white bg-zinc-800 px-2 py-1 rounded-full">
            Playlists
          </button>
          <button className="text-white bg-zinc-800 px-2 py-1 rounded-full">
            Artistas
          </button>
        </div>
        <div className="h-80 overflow-y-scroll space-y-4">
          <div className="flex justify-between">
            <div>
              <Search color="#a1a1aa" size={20} />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-zinc-400">Recentes</p>
              <List color="#a1a1aa" size={20} />
            </div>
          </div>
          {MusicList.map((text, key) => {
            return (
              <Link key={key} href={text.href}>
                <div className="flex items-center gap-2 my-4">
                  <div>
                    <Image
                      className="rounded-full"
                      src={text.src}
                      width={50}
                      height={50}
                      alt={text.name}
                    />
                  </div>
                  <div>
                    <p className="text-white">{text.name}</p>
                    <p className="text-zinc-500">{text.type}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
