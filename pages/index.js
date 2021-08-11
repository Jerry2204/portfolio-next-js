import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Project from "../components/Project";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <Skills />
      <Project />
      <ContactSection />
      <Footer />
    </>
  );
}
