import Opener from '@/components/Overview/Opener'
import ProjectIntro from '@/components/Overview/ProjectIntro'
import Socialise from '@/components/Overview/Community'
import { Inter } from 'next/font/google'
import BountiesandTesting from '@/components/Overview/BountiesTesting'
import Courses from '@/components/Overview/Courses'

// HOME PAGE AT LOCALHOST 3000

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="snap-y snap-mandatory h-screen w-screen overflow-auto overflow-x-hidden">
        <section className="snap-center">
          <Opener />
        </section>
        <section className="snap-center">
          <ProjectIntro />
        </section>
        <section className="snap-center">
          <Socialise />
        </section>
        <section className="snap-center">
          <Courses />
        </section>
        <section className="snap-center">
          <BountiesandTesting />
        </section>
      </div>
    </>
  )
}
