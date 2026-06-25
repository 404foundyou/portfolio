import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const links = ['Home', 'About', 'Projects', 'Experience', 'Contact']

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/95 border-b border-[#1a1a1a]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-sm text-gray-500 tracking-widest">
          <span className="text-purple-500">//</span> ATTENDRA DEV
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {links.map((link, i) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-xs text-gray-500 tracking-widest hover:text-white transition-colors duration-200"
              >
                {`0${i + 1}. ${link.toUpperCase()}`}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-500 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-[#1a1a1a] px-6 py-4">
          {links.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-xs text-gray-500 tracking-widest hover:text-white py-2 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {`0${i + 1}. ${link.toUpperCase()}`}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}