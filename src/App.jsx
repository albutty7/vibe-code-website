import { About } from './components/About'
import { Background } from './components/Background'
import { BackToTop } from './components/BackToTop'
import { DiscordCTA } from './components/DiscordCTA'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Pricing } from './components/Pricing'
import { ScrollProgress } from './components/ScrollProgress'
import { Services } from './components/Services'
import { Showcase } from './components/Showcase'
import { Stats } from './components/Stats'
import { WhyVibeCode } from './components/WhyVibeCode'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Pricing />
        <Showcase />
        <WhyVibeCode />
        <About />
        <DiscordCTA />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
