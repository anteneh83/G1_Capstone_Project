import header from '../assets/package-hero.png'
import { Navbar } from '../components'
import Hero from '../components/Hero'
const Package = () => {
  return (
    <section
			className="bg-cover bg-center  h-screen"
			style={{ backgroundImage: `url(${header})` }}
		>
			<Hero className="items-center" title=" travel package" link={`package`}/>

			<h1>content</h1>
		</section>
  )
}

export default Package