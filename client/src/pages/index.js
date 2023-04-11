import { useRouter } from 'next/router';
import AboutMe from '@/components/about-me-short/about-me';
import CaseStudies from '@/components/case-studies/case-studies';
import ContactMeForm from '@/components/contact-me-form/contact-me-form';
import Featured from '@/components/featured/featured';
import HeroBanner from '@/components/hero-banner/hero-banner';
import PopularBlogs from '@/components/popular-blogs/popular-blogs';
import Services from '@/components/services/services';
import Testimonials from '@/components/testimonials/testimonials';
import Head from 'next/head';
import { useContext, useEffect } from 'react';
import { Global } from '@emotion/react';
import { GlobalContext } from '@/context/global.context';

const metaKeywords = 'a blog site by siayed farhan, powerd by next js';
const metaDesc = 'a blogsite on digital marketing by saiyed farhan marketing correctely';

export default function Home() {
  const router = useRouter();
  
  const {isLogin} = useContext(GlobalContext)

  if (!isLogin) {
    useEffect(() => {
      if (!isLogin) {
        router.push('/login');
      }
    }, [isLogin, router])
    return null;
  }

  return (
    <>
      <Head>
        {/* <title>Saiyed Farhan</title>
        <meta name="keywords" content={metaKeywords} />
        <meta name="description" content={metaDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta name="robots" content="noindex,nofollow"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroBanner />
      <Testimonials />
      <Services />
      <CaseStudies />
      <Featured />
      <PopularBlogs />
      <AboutMe />
      <ContactMeForm />
    </>
  );
}