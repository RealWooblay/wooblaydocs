import Opener from '@/components/Overview/Opener'
import ProjectIntro from '@/components/Overview/ProjectIntro'
import { Inter } from 'next/font/google'

// HOME PAGE AT LOCALHOST 3000

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="snap-x snap-mandatory h-screen w-screen overflow-auto flex flex-row">
        <section className="snap-center flex-shrink-0 h-full w-screen">
          <Opener />
        </section>
        <section className="snap-center flex-shrink-0 h-full w-screen">
          <ProjectIntro />
        </section>
      </div>
    </>
  )
}
