import { useEffect, useState } from 'react'
import profile from '../assets/profile.png'

const roles = [
  'Frontend Developer',
  'Competitive Programmer',
  'Problem Solver',
  'ECE Student',
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const role = roles[current]
    let timeout

    if (!deleting && displayed.length < role.length) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === role.length) {
      timeout = setTimeout(() => setDeleting(true), 1500)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setCurrent((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, current])

  return (
    <section id="home" className="min-h-screen flex items-center border-b border-[#1a1a1a] px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs text-purple-500 tracking-[0.2em] uppercase mb-4">Hello, I'm Attendra</p>
          <h1 className="text-5xl md:text-6xl font-medium leading-tight tracking-tight mb-4">
            I BUILD<br />DIGITAL<br />EXPERIENCES<br />THAT MATTER.
          </h1>
          <p className="text-purple-400 text-lg mb-4 h-6">
            {displayed}<span className="animate-pulse">|</span>
          </p>
          <p className="text-gray-500 text-sm leading-relaxed max-w-md mb-8">
            Frontend-focused engineering student at IIIT Bhagalpur with hands-on experience building web applications using HTML, CSS, JavaScript, and React.js.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#projects" className="bg-white text-black text-xs tracking-widest px-6 py-3 hover:bg-gray-200 transition-colors">
              VIEW MY WORK →
            </a>
            <a href="#contact" className="border border-[#333] text-gray-500 text-xs tracking-widest px-6 py-3 hover:text-white hover:border-gray-500 transition-colors">
              CONTACT ME
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border border-[#222]">
              <img src={profile} alt="Attendra" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="absolute -bottom-4 -right-4 border border-[#333] px-4 py-3 bg-[#0a0a0a] text-xs text-gray-500 tracking-widest text-center">
              ECE STUDENT<br />&amp; BUILDER
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}