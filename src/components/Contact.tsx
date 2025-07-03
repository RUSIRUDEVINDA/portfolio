import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-400" />,
      title: "Email",
      details: "rusirud49@gmail.com",
      link: "mailto:rusirud49@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-green-400" />,
      title: "Phone",
      details: "+94 71 143 1969",
      link: "tel:+94 71 143 1969"
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-400" />,
      title: "Location",
      details: "Colombo, Sri Lanka",
      link: "#"
    }
  ];

  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // TODO: Replace these with your own EmailJS values
  const EMAILJS_SERVICE_ID = 'service_hc8jx8l';
  const EMAILJS_TEMPLATE_ID = 'template_zzgd32o';
  const EMAILJS_PUBLIC_KEY = 'Si2en6PFIH8IWfSdr';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setSuccess(false);
    setError(false);
    if (!formRef.current) return;
    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      formRef.current,
      EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setSending(false);
        setSuccess(true);
      })
      .catch(() => {
        setSending(false);
        setError(true);
      });
  };

  return (
    <motion.section
      id="contact"
      className="section-padding system-gradient soft-shadow animate-fade-in-up"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl modern-title mb-6 animate-fade-in-up">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl modern-title mb-8">Let's Connect</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 bg-dark-blue-300/30 backdrop-blur-sm rounded-lg border border-dark-blue-400/20 hover:bg-dark-blue-300/50 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors">
                      {info.title}
                    </h4>
                    <p className="text-gray-300 text-sm">{info.details}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-6 backdrop-blur-sm border border-blue-500/20">
              <h4 className="text-xl font-bold text-white mb-3">Why Work With Me?</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Fast turnaround times</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Modern, scalable solutions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Ongoing support and maintenance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Transparent communication</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-dark-blue-100/50 backdrop-blur-sm border-dark-blue-400/20 animate-fade-in-up soft-shadow" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <Input 
                      name="first_name"
                      placeholder="Sam"
                      className="bg-dark-blue-300/50 border-dark-blue-400 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <Input 
                      name="last_name"
                      placeholder="Smith"
                      className="bg-dark-blue-300/50 border-dark-blue-400 text-white placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <Input 
                    name="email"
                    type="email"
                    placeholder="sam@example.com"
                    className="bg-dark-blue-300/50 border-dark-blue-400 text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <Input 
                    name="subject"
                    placeholder="Project Discussion"
                    className="bg-dark-blue-300/50 border-dark-blue-400 text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea 
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-dark-blue-300/50 border-dark-blue-400 text-white placeholder-gray-400 resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                  disabled={sending}
                >
                  <Send className="w-5 h-5 mr-2" />
                  {sending ? 'Sending...' : 'Send Message'}
                </Button>
                {success && <p className="text-green-400 text-center mt-2">Message sent successfully!</p>}
                {error && <p className="text-red-400 text-center mt-2">Failed to send message. Please try again.</p>}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
