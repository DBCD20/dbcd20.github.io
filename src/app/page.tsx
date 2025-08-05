import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contacts';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
