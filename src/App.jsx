import { Footer, Hero, Section2, Section3 } from "./sections"
import Nav from "./components/Nav";
const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className="padding bg-slate-500 w-full">
        <Hero />
      </section>
      <section className='padding'>
        <Section2 />
      </section>
      <section className='padding'>
        <Section3 />
      </section>
      <section className='padding-x py-10'>
        <Footer />
      </section>
    </main>
  )
}

export default App;