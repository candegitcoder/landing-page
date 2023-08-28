import 'bootstrap/dist/css/bootstrap.css';
import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <main className='todotestimonials'>

    <section>
        <h1 className='textglobal' >Huge Global Network of Fast VPN</h1>
        <p className='subglobal' >See <b>LaslesVPN</b> everywhere to make it easier for you when you move locations.</p>
        <img className='imgglobal' src="/src/assets/img/global.jpeg" alt="" />
        <img className='imgmarcas' src="/src/assets/img/marcas.jpeg" alt="" />
    </section>

    <section id='testimonials'>
        <h1 className='texttestimonials' >Trusted by Thousands of </h1>
        <h1 className='texttestimonialss'>Happy Customer</h1>
        <p className='subtexttestimonials'>These are the stories of our customers who have joined us with great</p>
        <p className='subtexttestimonialss'>pleasure when using this crazy feature.</p>
    </section>

    <section>
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
      <section className="embla__container">
            <div className="embla__slide">
            <img className='imgtestimonials' src="src/assets/img/testimonials1.jpeg" alt="" />
            <p className='nombretestimonials'>Viezh Robert</p>
            <p className='ciudadtestimonials'>Warsaw, Poland</p>
            <p className='textotestimonials'>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”</p>
            </div>

            <div className="embla__slide">
            <img className='imgtestimonials' src="src/assets/img/testimonials2.jpeg" alt="" />
            <p className='nombretestimonials'>Yessica Christy</p>
            <p className='ciudadtestimonials'>Shanxi, China</p>
            <p className='textotestimonials'>“I like it because I like to travel far and still can connect with high speed”</p>
            </div>

            <div className="embla__slide">
            <img className='imgtestimonials' src="src/assets/img/testimonials3.jpeg" alt="" />
            <p className='nombretestimonials'>Kim Young Jou</p>
            <p className='ciudadtestimonials'>Seoul, South Korea</p>
            <p className='textotestimonials'>“This is very unusual for my business that currently requires a virtual private network that has high security”</p>
            </div>
      </section>
        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}></button>
      <button className="embla__next" onClick={scrollNext}></button>
    </section>

    </main>
  )
}

export default EmblaCarousel;




