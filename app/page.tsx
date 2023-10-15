import {
  ChevronLeft,
  ChevronRight,
  Bell,
  User2,
  ArrowDownCircle,
  Play,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Sidebar from './components/sidebar'
import Footer from './components/footer'

export default function Home() {
  interface FavourItem {
    src: string
    name: string
    href: string
  }
  interface ForYouItem {
    src: string
    name: string
    description: string
    href: string
  }

  const Favour: FavourItem[] = [
    {
      src: '/metallica.jpeg',
      name: 'Queen',
      href: '#',
    },
    {
      src: '/bring-me-the-horizon.jpg',
      name: 'Red Hot Chili Peppers',
      href: '#',
    },
    {
      src: '/thousand-foot-krutch.jpg',
      name: 'Thousand Foot Kutch',
      href: '#',
    },
    {
      src: '/system-of-a-down.jpeg',
      name: 'Syntem of a Down',
      href: '#',
    },
    {
      src: '/bring-me-the-horizon.jpg',
      name: 'Bring me the Horizon',
      href: '#',
    },
    {
      src: '/metallica.jpeg',
      name: 'Metallica',
      href: '#',
    },
  ]

  const ForYou: ForYouItem[] = [
    {
      src: '/system-of-a-down.jpeg',
      name: 'Daily Mix 1',
      description: 'Lorem ipsum dolor sit amet',
      href: '#',
    },
    {
      src: '/bring-me-the-horizon.jpg',
      name: 'Daily Mix 2',
      description: 'Lorem ipsum dolor sit amet',
      href: '#',
    },
    {
      src: '/thousand-foot-krutch.jpg',
      name: 'Daily Mix 3',
      description: 'Lorem ipsum dolor sit amet',
      href: '#',
    },
    {
      src: '/system-of-a-down.jpeg',
      name: 'Daily Mix 4',
      description: 'Lorem ipsum dolor sit amet',
      href: '#',
    },
  ]

  return (
    <section>
      <div className="p-2">
        <div className="flex gap-2">
          <Sidebar />
          <main className="bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-md p-4 flex-1 mb-20">
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
                <button className="text-black bg-white px-3 py-2 rounded-full font-semibold text-sm">
                  Ver planos Premium
                </button>
                <button className="text-white bg-black px-3 py-2 rounded-full flex items-center gap-1 font-semibold text-sm">
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
            <div className="grid grid-cols-2 grid-rows-3 gap-2">
              {Favour.map((text, key) => {
                return (
                  <Link
                    key={key}
                    href={text.href}
                    className="flex items-center justify-between bg-white/10 hover:bg-white/20 rounded-md group"
                  >
                    <div className="flex gap-4 items-center">
                      <Image
                        className="rounded-s-md"
                        src={text.src}
                        width={50}
                        height={50}
                        alt={text.name}
                      />
                      <p className="text-white font-bold text-sm">
                        {text.name}
                      </p>
                    </div>
                    <div>
                      <button className="bg-green-500 rounded-full flex items-center justify-center ps-1 w-10 h-10 invisible group-hover:visible me-2">
                        <Play fill="bg-black" color="black" size={25} />
                      </button>
                    </div>
                  </Link>
                )
              })}
            </div>
            <div className="flex items-center justify-between">
              <p className="text-white text-2xl font-bold my-6">
                Feito para Carlos Alberto
              </p>
              <p className="text-zinc-400">Mostrar tudo</p>
            </div>
            <div className="grid grid-cols-4 gap-6">
              {ForYou.map((text, key) => {
                return (
                  <Link key={key} href={text.href}>
                    <div className="bg-zinc-800 hover:bg-white/10 rounded-lg p-3">
                      <Image
                        className="rounded-md w-full"
                        src={text.src}
                        width={100}
                        height={100}
                        alt={text.name}
                      />
                      <p className="text-white mt-4 mb-1 font-bold">
                        {text.name}
                      </p>
                      <p className="text-zinc-500">{text.description}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </section>
  )
}
