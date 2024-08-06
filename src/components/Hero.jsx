import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-3xl font-bold tracking-tighter text-blue-600 sm:text-5xl">
            <span className="sr-only">DeceptiConf - </span>
            Yeşil Kimya : Yeşil Dünya
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Projenin Amacı:
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Proje ile; yeşil kimya felsefesinin günlük yaşam tercihlerinde kullanılabilirliği, atık yönetimi, sürdürülebilir yaşam uygulamaları konularını destekleyen deneysel ve gözlemsel uygulamalar, AR uygulaması, dijital içerik kullanımı, saha çalışması, oyun, tasarım, drama gibi farklı yöntemleri barındıran etkinlikler ile kapsamlı bir farkındalık kazandırılması ve bu kazanımlarını gelecek nesillere aktarabilecek bilinçli ve sorumlu nesiller yetiştirilmesi hedeflenmektedir. Proje sonunda belirlenen hedefler doğrultusunda öğrencilerden beklenen temel kazanımlar şöyle sıralanabilir.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Kişisel davranış seçimlerini analiz eder ve bunların çevre üzerindeki potansiyel etkilerini belirler.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Günlük yaşam seçimlerinde çevre dostu alternatifleri seçer ve benimser.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Çevreyi ve insan sağlığını korumak amacıyla zararlı kimyasalların önlenmesi, azaltılması veya alternatiflerinin bulunmasına yönelik stratejileri belirlemek ve uygulamak için yeşil kimya ilkelerini uygular.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Çevre sorunlarını değerlendirir ve mümkün olduğunca çevre dostu davranışlarda bulunur.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Çevre okuryazarlığı ile ilgili bilgi ve becerilerini etkin bir şekilde geliştirir
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Çevresel sorumluluğa katılır ve toplumlarında etkili bir değişim ajanı olarak hareket eder.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Atık yönetimi, geri dönüşüm, ileri dönüşüm ve sıfır atığı tanımlar.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Sürdürülebilir ürünler seçmek, atıkları azaltmak ve çevre dostu yaşam tarzı seçimleri yapmak gibi çevresel etkileri göz önünde bulundurarak bilinçli kararlar alırlar.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Sürdürülebilir yaşam uygulamaları konusunda farkındalık gösterir.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Doğal kaynakların sürdürülebilir kullanımına aktif olarak katkıda bulunur.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Doğal dünyayı korurken ve yönetirken bilimsel bilginin faydalarından yararlanmanın yollarını seçer.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Bilimsel bilgi ve yaşam becerilerini bir arada kullanarak günlük sorunlara bilimsel çözümler üretir.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Benzer zorlukları nasıl çözdüklerini anlamak için organizmaları ve ekosistemleri gözlemleyerek ve inceleyerek doğal dünyayı sürekli sorgular
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Doğanın stratejilerini taklit ederek çevre dostu ve sosyal açıdan sorumlu çözümler geliştirmek için çaba gösterir.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Doğanın tasarımının bilgeliğine ve verimliliğine saygı duyar.
            </p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            Get your tickets
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Katılımcı', '25'],
              ['Yer', 'ODTÜ, Ankara'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
