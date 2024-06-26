import { Hero } from '@/components/Hero'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import { Schedule } from "@/components/Schedule";

export default function Home() {
  return (
    <>
      <Hero />
      <Speakers />
      <Sponsors />
      <Schedule />
    </>
  )
}
