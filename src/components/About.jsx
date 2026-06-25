export default function About() {
  const stats = [
    { icon: '⏱', num: '1+', label: 'Years of Learning & Building' },
    { icon: '📁', num: '10+', label: 'Projects Completed' },
    { icon: '💻', num: '5+', label: 'Technologies Mastered' },
    { icon: '❤️', num: '100%', label: 'Passion & Dedication' },
  ]

  const skills = [
    'C++', 'JavaScript', 'HTML', 'CSS', 'Python',
    'React.js', 'Tailwind CSS', 'Node.js', 'Git', 'GitHub'
  ]

  return (
    <section id="about" className="py-24 px-6 border-b border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs text-purple-500 tracking-[0.2em] uppercase mb-4">About Me</p>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-medium leading-tight mb-6">
              I love turning ideas into real-world solutions.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Frontend-focused engineering student at IIIT Bhagalpur with hands-on experience building web applications using HTML, CSS, JavaScript, and React.js. Experienced in REST API integration, responsive UI design, and DOM manipulation. Actively improving in Data Structures & Algorithms and full-stack development.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map(skill => (
                <span key={skill} className="text-xs border border-[#222] text-gray-500 px-3 py-1 tracking-wider">
                  {skill}
                </span>
              ))}
            </div>
            <a href="#contact" className="text-white text-xs tracking-widest border-b border-gray-600 pb-1 hover:border-white transition-colors">
              GET IN TOUCH →
            </a>
          </div>
          <div className="grid grid-cols-2 gap-px bg-[#1a1a1a] border border-[#1a1a1a]">
            {stats.map(stat => (
              <div key={stat.num} className="bg-[#0a0a0a] p-6">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-medium text-white mb-1">{stat.num}</div>
                <div className="text-xs text-gray-600 leading-relaxed">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
