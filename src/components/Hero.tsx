
import pizza from '../assets/hero.png'

function Hero() {
  return (
    <div>
        <img src={pizza} className='w-full max-h-[600px] object-cover'/>
    </div>
  )
}

export default Hero