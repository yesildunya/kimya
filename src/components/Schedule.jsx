'use client'

import { useEffect, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'

const schedule = [
  {
    date: 'Proje Ekibi',
    dateTime: '2022-04-04',
    summary:
      'The first day of the conference is focused on dark patterns for ecommerce.',
    timeSlots: [
      {
        name: 'Sevil ERKUT',
        description: 'Proje Yürütücüsü, ODTÜ Merkezi Laboratuvarı',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Doc.Dr.Salih ÖZÇUBUKÇU',
        description: 'Proje Uzmanı, ODTÜ Fen Fakültesi',
        start: '10:00AM',
        end: '11:00AM',
      },
      {
        name: 'Doç.Dr.Pervin Oya TANERİ',
        description: 'Proje Uzmanı, ODTÜ Eğitim Fakültesi',
        start: '11:00AM',
        end: '12:00PM',
      },
      {
        name: 'Özlem GÖKTAS',
        description: 'Proje Uzmani, Mersin il Milli Egitim Müd.',
        start: '12:00PM',
        end: '1:00PM',
      }
    ],
  },
  {
    date: 'PROJE EGITMENLERI',
    dateTime: '2022-04-05',
    summary:
      'Next we spend the day talking about deceiving people with technology.',
    timeSlots: [
      {
        name: 'Öğr.Gör. Dr. İ.Cihan AYANOGLU',
        description: 'The invisible card reader',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Öğr Gör. Dr. Tugba DOGAN',
        description: 'Stealing fingerprints',
        start: '10:00AM',
        end: '11:00AM',
      },
      {
        name: 'Öğr.Gor. Dr. Eda TUNAOZTÜRK',
        description: 'Voting machines',
        start: '11:00AM',
        end: '12:00PM',
      },
      {
        name: 'Dr. Fulya KARAHAN DAĞ',
        description: '',
        start: '12:00PM',
        end: '1:00PM',
      },
      {
        name: 'Aras.Gör. Ezgi BAYER KÖMÜŞDOĞAN',
        description: 'Blackhat SEO that works',
        start: '1:00PM',
        end: '2:00PM',
      },
      {
        name: 'Özgür NORMAN',
        description: 'Turning your audience into a botnet',
        start: '2:00PM',
        end: '3:00PM',
      },
      {
        name: 'Mete ESENCAN',
        description: 'Fly phishing',
        start: '3:00PM',
        end: '4:00PM',
      },
      {
        name: 'Nazlıcan DEMIRKIRAN',
        description: 'Turning your audience into a botnet',
        start: '2:00PM',
        end: '3:00PM',
      },
      {
        name: 'Semiha Seda TERZI',
        description: 'Fly phishing',
        start: '3:00PM',
        end: '4:00PM',
      },
    ],
  },
  {
    date: 'PROJE REHBERLERI',
    dateTime: '2022-04-06',
    summary:
      'We close out the event previewing new techniques that are still in development.',
    timeSlots: [
      {
        name: 'Deniz ERKUT',
        description: 'Neuralink dark patterns',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Eda DURKAN',
        description: 'DALL-E for passports',
        start: '10:00AM',
        end: '11:00AM',
      },
      {
        name: 'Tezcan SEYMENLER',
        description: 'Quantum password cracking',
        start: '11:00AM',
        end: '12:00PM',
      },
      {
        name: 'Omer DOGAN',
        description: '',
        start: '12:00PM',
        end: '1:00PM',
      },
      {
        name: 'Abdussamed TURABİ',
        description: 'SkyNet is coming',
        start: '1:00PM',
        end: '2:00PM',
      }
    ],
  },
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <TabGroup
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <TabList className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) => (
          <>
            {schedule.map((day, dayIndex) => (
              <div
                key={day.dateTime}
                className={clsx(
                  'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                  dayIndex !== selectedIndex && 'opacity-70',
                )}
              >
                <DaySummary
                  day={{
                    ...day,
                    date: (
                      <Tab className="ui-not-focus-visible:outline-none">
                        <span className="absolute inset-0" />
                        {day.date}
                      </Tab>
                    ),
                  }}
                />
              </div>
            ))}
          </>
        )}
      </TabList>
      <TabPanels>
        {schedule.map((day) => (
          <TabPanel
            key={day.dateTime}
            className="ui-not-focus-visible:outline-none"
          >
            <TimeSlots day={day} />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}

function DaySummary({ day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-blue-900">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur',
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} PST`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-blue-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-blue-900">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{' '}
            PST
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Ekiplerimiz
          </h2>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <BackgroundImage position="right" className="-bottom-32 -top-40" />
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
