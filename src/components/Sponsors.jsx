import Image from 'next/image'

import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

const sponsors = [
  { name: 'Milli Eğitim Bakanlığı', logo: logoTransistor },
  { name: 'Petrol Ofisi', logo: logoTransistor },
]

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="5 sm:py-2">
      <Container>
          <div>

          </div>
      </Container>
    </section>
  )
}
