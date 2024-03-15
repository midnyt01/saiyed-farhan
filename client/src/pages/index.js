// import { useRouter } from "next/router";
import AboutMe from "@/components/about-me-short/about-me";
// import CaseStudies from "@/components/case-studies/case-studies";
// import ContactMeForm from "@/components/contact-me-form/contact-me-form";
// import Featured from "@/components/featured/featured";
import HeroBanner from "@/components/hero-banner/hero-banner";
import PopularBlogs from "@/components/popular-blogs/popular-blogs";
// import Services from "@/components/services/services";
// import Testimonials from "@/components/testimonials/testimonials";
import Head from "next/head";
// import { useContext, useEffect } from "react";
// import { Global } from "@emotion/react";
// import { GlobalContext } from "@/context/global.context";

const metaKeywords = "a blog site by siayed farhan, powerd by next js";
const metaDesc =
  "a blogsite on digital marketing by saiyed farhan marketing correctely";

export default function Home() {

  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5L293W2');`,
          }}
        />
        <title>
          Result Driven Digital Marketing Consultant - Saiyed Farhan
        </title>
        <meta
          name="description"
          content="Elevate your online presence with me - Expert Digital Marketing Consultant. Drive traffic, and increase leads and sales. Get in touch now."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="imageindex, index, follow, snippet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5L293W2" height="0" width="0" style="display: none; visibility: hidden;" />`,
        }}
      />
      <HeroBanner />
      {/* <Testimonials /> */}
      {/* <Services /> */}
      {/* <CaseStudies /> */}
      {/* <Featured /> */}
      <PopularBlogs />
      <AboutMe />
      {/* <ContactMeForm /> */}
    </>
  );
}
