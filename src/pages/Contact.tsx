import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const inputClasses =
    'w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-all duration-300';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mdkdlggy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'sshobana2108@gmail.com',
      link: 'mailto:sshobana2108@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 7449004204',
      link: 'tel:+917449004204',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Tamil Nadu, India',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      <ParticleBackground />
      <div className="absolute top-40 right-20 w-96 h-96 gradient-blur opacity-40" />
      <div className="absolute bottom-20 left-20 w-80 h-80 gradient-blur opacity-30" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">Get In Touch</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether it's a project, internship, or just a friendly hello — I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info Panel */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-8 text-gradient">Let's Connect</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              I’d love to hear from you—whether it’s about internships, project ideas, or just connecting with like-minded individuals.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center p-4 glass-effect rounded-xl hover:glow-effect"
                  >
                    <div className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 glow-effect mr-4">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{info.title}</h3>
                      <a href={info.link} className="text-gray-300 hover:text-purple-400">
                        {info.details}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Subject"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className={inputClasses}
                  placeholder="Let's connect..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-bold text-lg glow-effect"
              >
                Send Message
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-sm mt-3">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm mt-3">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
