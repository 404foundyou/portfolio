export default function Contact() {
  const info = [
    {
      icon: '✉',
      label: 'attendrabhushan@gmail.com',
      href: 'mailto:attendrabhushan@gmail.com',
    },
    {
      icon: '📞',
      label: '+91-8294147956',
      href: 'tel:+918294147956',
    },
    {
      icon: '📍',
      label: 'Bhagalpur, Bihar, India',
      href: '#',
    },
    {
      icon: '⌨',
      label: 'github.com/404foundyou',
      href: 'https://github.com/404foundyou',
    },
    {
      icon: '💼',
      label: 'linkedin.com/in/attendrabhushan',
      href: 'https://linkedin.com/in/attendrabhushan',
    },
  ]

  return (
    <section
      id="contact"
      className="py-24 px-6 border-b border-[#1a1a1a]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <div>
            <p className="text-xs text-purple-500 tracking-[0.2em] uppercase mb-4">
              Contact
            </p>

            <h2 className="text-5xl font-medium leading-tight mb-8">
              LET'S BUILD SOMETHING GREAT TOGETHER.
            </h2>

            <div>
              <p className="text-xs text-gray-600 tracking-widest mb-4">
                GET IN TOUCH
              </p>

              {info.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-500 hover:text-white transition-colors mb-4"
                >
                  <span className="text-purple-500">{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Name"
                className="bg-transparent border border-[#222] text-white text-sm px-4 py-3 outline-none focus:border-purple-500 transition-colors placeholder-gray-600"
              />

              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border border-[#222] text-white text-sm px-4 py-3 outline-none focus:border-purple-500 transition-colors placeholder-gray-600"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="bg-transparent border border-[#222] text-white text-sm px-4 py-3 outline-none focus:border-purple-500 transition-colors placeholder-gray-600"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="bg-transparent border border-[#222] text-white text-sm px-4 py-3 outline-none focus:border-purple-500 transition-colors placeholder-gray-600 resize-none"
            />

            <button className="self-start bg-white text-black text-xs tracking-widest px-6 py-3 hover:bg-gray-200 transition-colors mt-2">
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}