import Navbar from '@/components/Navbar'
import Opener from '@/components/Overview/Opener'
import ProjectIntro from '@/components/Overview/ProjectIntro'
import { Inter } from 'next/font/google'

// HOME PAGE AT LOCALHOST 3000

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="snap-y snap-mandatory h-screen w-screen overflow-auto">
        <section className="snap-center ">
          <Opener />
        </section>
        <section className="snap-center">
          <ProjectIntro />
        </section>
      </div>
    </>
  )
}
