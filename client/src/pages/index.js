import AboutMe from '@/components/about-me-short/about-me';
import CaseStudies from '@/components/case-studies/case-studies';
import ContactMeForm from '@/components/contact-me-form/contact-me-form';
import Featured from '@/components/featured/featured';
import HeroBanner from '@/components/hero-banner/hero-banner';
import PopularBlogs from '@/components/popular-blogs/popular-blogs';
import Services from '@/components/services/services';
import Testimonials from '@/components/testimonials/testimonials';
import Head from 'next/head'

// const inter = Inter({ subsets: ['latin'] })

const metaKeywords = 'a blog site by siayed farhan, powerd by next js';
const metaDesc = 'a blogsite on digital marketing by saiyed farhan marketing correctely'

export default function Home() {
  return (
    <>
      <Head>
        <title>Saiyed Farhan</title>
        <meta name="keywords" content={metaKeywords} />
        <meta name="description" content={metaDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <HeroBanner />
      <Services />
      <CaseStudies />
      <Featured />
      <PopularBlogs />
      <AboutMe />
      <Testimonials />
      <ContactMeForm />
    </>
  )
}
