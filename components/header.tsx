import Link from "next/link";

export default function Header() {
  return (
    <header className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round"
               strokeLinejoin="round" strokeWidth="2"
               className="h-10 w-10 rounded-full bg-indigo-500 p-2 text-white" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">吒哇科技</span>
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          <Link href="/explorer" className="mr-5 hover:text-gray-900">探索</Link>
          <Link href="/agi" className="mr-5 hover:text-gray-900">AGI</Link>
          <Link href="/docs" className="mr-5 hover:text-gray-900">Docs</Link>
          <Link href="/pricing" className="mr-5 hover:text-gray-900">Pricing</Link>
          <Link href="/get-started" className="mr-5 hover:text-gray-900">Get Started</Link>
        </nav>
        <button
          className="mt-4 inline-flex items-center rounded border-0 bg-gray-100 px-3 py-1 text-base hover:bg-gray-200 focus:outline-none md:mt-0">
          Login
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
               className="ml-1 h-4 w-4" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  )
}
