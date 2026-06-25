import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')

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

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!form.name || !form.email || !form.message) {
            setError('Please fill in all required fields.')
            return
        }

        setLoading(true)
        setError('')
        setSuccess(false)

        try {
            await emailjs.send(
                'service_ajgfanv',
                'template_svjs4fw',
                {
                    from_name: form.name,
                    name: form.name,
                    from_email: form.email,
                    email: form.email,
                    subject: form.subject,
                    message: form.message,
                },
                'tRa3IqKI8IJmH7uFf'
            )

            setSuccess(true)

            setForm({
                name: '',
                email: '',
                subject: '',
                message: '',
            })
        } catch (err) {
            setError('Something went wrong. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    const inputClass =
        'bg-transparent border border-[#222] text-white text-sm px-4 py-3 outline-none focus:border-purple-500 transition-all duration-200 placeholder-gray-600 w-full'

    return (
        <section id="contact" className="py-24 px-6 border-b border-[#1a1a1a]">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* Left Section */}
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

                    {/* Right Section */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">

                        <div className="grid grid-cols-2 gap-3">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name *"
                                value={form.name}
                                onChange={handleChange}
                                className={inputClass}
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email *"
                                value={form.email}
                                onChange={handleChange}
                                className={inputClass}
                                required
                            />
                        </div>

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={form.subject}
                            onChange={handleChange}
                            className={inputClass}
                        />

                        <textarea
                            name="message"
                            placeholder="Your Message *"
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            className={`${inputClass} resize-none`}
                            required
                        />

                        {error && (
                            <p className="text-red-400 text-xs tracking-wide">
                                {error}
                            </p>
                        )}

                        {success && (
                            <p className="text-green-400 text-xs tracking-wide">
                                Message sent successfully! I will get back to you soon.
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className={`self-start text-xs tracking-widest px-6 py-3 transition-all duration-200 mt-2 ${loading
                                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                                    : 'bg-white text-black hover:bg-purple-500 hover:text-white active:scale-95'
                                }`}
                        >
                            {loading ? 'SENDING...' : 'SEND MESSAGE →'}
                        </button>

                    </form>

                </div>
            </div>
        </section>
    )
}