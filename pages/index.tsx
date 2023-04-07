import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from "@/components/header";
import Hero from "@/components/hero";
import Gallery from "@/components/gallery";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import Team from "@/components/team";
import Blog from "@/components/blog";
import Content from "@/components/content";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Content/>
      <Gallery/>
      <Blog/>
      <Team/>
      <Contact/>
      <Footer/>
    </>
  )
}
