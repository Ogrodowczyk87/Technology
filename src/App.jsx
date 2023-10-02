import { Footer, Hero, Section2, Section3 } from "./sections"
import Nav from "./components/Nav";
const App = () => {
  return (
    <main className='relative'>
      {/* pamietac zeby nie dawac wysokosci na sztywno */}
      <section className="padding bg-slate-500 bg-hero w-full h-[500px]">
        <Nav />
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