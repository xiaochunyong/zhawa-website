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
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1633311905139-7b6088a69e33?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8YWl8fHx8fHwxNjgwODM4OTM4&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=720"/>
            {/*<img className="object-cover object-center rounded" alt="hero" src="https://source.unsplash.com/720x600/?ai"/>*/}
          </div>
          <div
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">AGI 介绍
              <br className="hidden lg:inline-block"/>AGI Introduction
            </h1>
            <p className="mb-8 leading-relaxed">当谈论人工智能（AI）时，通常提到的是强化学习、深度学习和机器学习等技术。但是，人工智能的最终目标是建立一种能够自主学习、理解和创造的智能系统，这就是人工通用智能（AGI）。

              AGI是一种智能系统，它可以像人类一样，具有类似感知、思考和行动能力。与其他形式的AI相比，AGI的最大特点是能够自主学习和适应新的情况和问题。

              AGI在许多领域都有应用潜力，包括自动驾驶、医疗保健、教育、金融、军事、制造业等等。在这些领域，AGI可以帮助人类更好地理解和解决复杂的问题，同时减少人类的劳动力成本和风险。

              虽然AGI的发展还面临着许多技术和伦理方面的挑战，但这一领域的研究一直在不断推进。随着越来越多的科学家和工程师加入AGI的研究中，相信未来不久的将来，我们会看到更加先进和智能的AGI系统的出现，为人类带来更多的帮助和便利。</p>
            <div className="flex justify-center">
              <button
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button
              </button>
              <button
                className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button
              </button>
            </div>
          </div>
        </div>
      </section>
      <Content/>
      <Gallery/>
      <Blog/>
      <Team/>
      <Contact/>
      <Footer/>
    </>
  )
}
