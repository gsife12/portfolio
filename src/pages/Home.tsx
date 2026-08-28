import { useSEO } from '../seo'
import { Hero } from '../components/sections/home/Hero'
import { Intro } from '../components/sections/home/Intro'
import { FeaturedProject } from '../components/sections/home/FeaturedProject'
import { CurrentRole } from '../components/sections/home/CurrentRole'
import { AWSBlock } from '../components/sections/home/AWSBlock'
import { ContactCTA } from '../components/sections/home/ContactCTA'

export function Home() {
  useSEO({ path: '/' })

  return (
    <>
      <Hero />
      <Intro />
      <FeaturedProject />
      <CurrentRole />
      <AWSBlock />
      <ContactCTA />
    </>
  )
}
