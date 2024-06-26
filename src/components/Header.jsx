import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Logo } from '@/components/Logo'

export function Header() {
  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Logo className="h-12 w-auto text-slate-900" />
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-sm text-blue-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>
              <time dateTime="2022-04-04">02</time>-
              <time dateTime="2022-04-06">06 Eylül, 2024</time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <p>ODTÜ, Ankara</p>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="https://docs.google.com/forms/d/e/1FAIpQLSeGoH49Ss1DSMDFnQlUWPHcuRwVB30kVeYPwe9zTVjC17P0PQ/viewform?fbclid=PAZXh0bgNhZW0CMTEAAabfYPJBSD2hQLssbXT6XfvvcbdM2em1XWPXG0wbQ4SSI39TA-w_NJZYZlc_aem_PjqGFJet-8cl8Qla5AnMxw">Başvuru Formu</Button>
        </div>
      </Container>
    </header>
  )
}
