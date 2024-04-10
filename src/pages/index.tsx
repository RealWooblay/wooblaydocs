import Opener from '@/components/Overview/Opener'
import ProjectIntro from '@/components/Overview/ProjectIntro'
import Monetise from '@/components/Overview/Monetise'
import { Inter } from 'next/font/google'
import Community from '@/components/Overview/Community'
import PM from '@/components/Overview/PM'
import Faq from '@/components/Faq'
import Team from '@/components/Team'
import Involve from '@/components/Involve'

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
          <PM />
        </section>
        <section className="snap-center">
          <Monetise />
        </section>
        {/* <section className="snap-center">
          <Community />
  </section> */}
        <section className="snap-center">
          <Involve />
        </section>
        <section className="snap-center">
          <Team />
        </section>
        <section className="snap-center">
          <Faq />
        </section>
      </div>
    </>
  )
}
