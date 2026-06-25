const timeline = [
  {
    year: '2024 – PRESENT',
    title: 'B.Tech in Electronics & Communication Engineering',
    desc: 'Pursuing my degree at IIIT Bhagalpur with focus on embedded systems, networks, and digital electronics.',
  },
  {
    year: '2024 – PRESENT',
    title: 'Competitive Programmer',
    desc: 'Actively solving problems on Codeforces (Rajputbilla01042006) and LeetCode (attendrabhushan) in C++, building strong DSA intuition through contests and practice.',
  },
  {
    year: '2024 – PRESENT',
    title: 'Frontend Developer',
    desc: 'Building web applications using HTML, CSS, JavaScript, and React.js. Experienced in REST API integration, responsive UI design, and DOM manipulation.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-b border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs text-purple-500 tracking-[0.2em] uppercase mb-4">Journey</p>
            <h2 className="text-4xl font-medium leading-tight">
              Education & Experience
            </h2>
          </div>
          <div className="relative pl-6 border-l border-[#222]">
            {timeline.map((item, i) => (
              <div key={i} className="mb-10 relative">
                <div
                  style={{ left: '-1.65rem' }}
                  className="absolute top-1.5 w-3 h-3 rounded-full bg-purple-600 border-2 border-[#0a0a0a]"
                />
                <p className="text-xs text-purple-500 tracking-widest mb-1">{item.year}</p>
                <h3 className="text-base font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}