import HeroPage from '@/components/HeroPage'
import NavbarPage from '@/components/NavbarPage'
import AboutPage from '@/components/AboutPage'
import TestimonialsPage from '@/components/TestimonialsPage'
import ContactPage from '@/components/ContactPage'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
    <NavbarPage />
    <HeroPage />
    <AboutPage />
    <TestimonialsPage />
    <ContactPage />
    <Footer />
    </>
  )
}
