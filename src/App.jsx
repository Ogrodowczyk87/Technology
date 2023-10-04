import { Footer, Hero, Section2, Section3 } from "./sections"
import Nav from "./components/Nav";
const App = () => {
  return (
    <main className='relative'>
      <section className="w-full bg-hero bg-primary">

        {/* pamietac zeby nie dawac wysokosci na sztywno */}
        <section className="padding bg-hero w-full  bg-primary ">
          <Nav />
        </section>
        <section>
          <Hero />
        </section>
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