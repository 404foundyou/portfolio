const projects = [
  {
    num: '01',
    title: 'Weather API App',
    desc: 'A weather application fetching real-time data via OpenWeatherMap API with dynamic UI rendering. Displays temperature, city name, and weather conditions based on user input.',
    tags: ['HTML', 'CSS', 'JavaScript', 'API'],
    demo: '#',
    github: 'https://github.com/404foundyou',
  },
  {
    num: '02',
    title: 'Distance Between Cities',
    desc: 'A web application calculating straight-line distance between two cities using the Haversine formula. Integrated OpenWeatherMap API to fetch geographic coordinates.',
    tags: ['HTML', 'CSS', 'JavaScript', 'API'],
    demo: '#',
    github: 'https://github.com/404foundyou',
  },
  {
    num: '03',
    title: 'E-Commerce Website',
    desc: 'A dynamic e-commerce interface with product listing and shopping cart using vanilla JavaScript. Implemented cart state management with real-time total price calculation.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demo: '#',
    github: 'https://github.com/404foundyou',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-b border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
          <div>
            <p className="text-xs text-purple-500 tracking-[0.2em] uppercase mb-4">Featured Projects</p>
            <h2 className="text-4xl font-medium">Things I've<br />Built</h2>
          </div>
          <a href="https://github.com/404foundyou" target="_blank" rel="noreferrer"
            className="text-xs text-gray-500 tracking-widest border-b border-[#333] pb-1 hover:text-white hover:border-gray-500 transition-colors">
            VIEW ALL PROJECTS →
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-[#1a1a1a] border border-[#1a1a1a]">
          {projects.map(p => (
            <div key={p.num} className="bg-[#0a0a0a] p-8 hover:bg-[#111] transition-colors group">
              <div className="text-xs text-gray-600 mb-4 tracking-widest">{p.num}</div>
              <h3 className="text-lg font-medium mb-3 group-hover:text-purple-400 transition-colors">{p.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map(tag => (
                  <span key={tag} className="text-xs border border-[#222] text-gray-600 px-2 py-1 tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={p.demo} className="text-xs text-purple-500 tracking-widest hover:text-purple-300 transition-colors">
                  LIVE DEMO →
                </a>
                <a href={p.github} target="_blank" rel="noreferrer" className="text-xs text-gray-600 tracking-widest hover:text-white transition-colors">
                  GITHUB →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}