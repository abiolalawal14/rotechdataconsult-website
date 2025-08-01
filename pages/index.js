import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Courses from '../components/Courses'
import Services from '../components/Services'
import Team from '../components/Team'
import Blog from '../components/Blog'
import Research from '../components/Research'
import Careers from '../components/Careers'
import Community from '../components/Community'
import Videos from '../components/Videos'
import Testimonials from '../components/Testimonials'
import BookingForm from '../components/BookingForm'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rotech Data Consult - Monitor. Analyze. Thrive.</title>
        <meta name="description" content="Premier data analysis training, consulting services, and business intelligence solutions across Africa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Rotech Data Consult - Monitor. Analyze. Thrive." />
        <meta property="og:description" content="Premier data analysis training, consulting services, and business intelligence solutions across Africa" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://rotechconsult.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-gray-light">
        <Header />
        
        <main>
          <Hero />
          <Stats />
          <Courses />
          <Services />
          <Team />
          <Blog />
          <Research />
          <Careers />
          <Community />
          <Videos />
          <Testimonials />
          <BookingForm />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  )
}