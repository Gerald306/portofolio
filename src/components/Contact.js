import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace these with your actual EmailJS service ID, template ID, and public key
    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        (result) => {
          setSubmitStatus({
            success: true,
            message: 'Your message has been sent successfully! I\'ll get back to you soon.'
          });
          form.current.reset();
        },
        (error) => {
          setSubmitStatus({
            success: false,
            message: 'Failed to send message. Please try again later.'
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out to me. I'm always
            open to discussing new opportunities and ideas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                <FiMail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Email Me</h3>
                <a
                  href="mailto:lekugerald@yahoo.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  lekugerald@yahoo.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                <FiPhone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Call Me</h3>
                <a
                  href="tel:+256772406845"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +256 772 406 845
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                <FiMapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Location</h3>
                <p className="text-gray-400">Entebbe, Uganda</p>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <div className="flex space-x-4">
                {[
                  { icon: 'FaGithub', url: '#' },
                  { icon: 'FaLinkedin', url: '#' },
                  { icon: 'FaTwitter', url: '#' },
                  { icon: 'FaInstagram', url: '#' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    {React.createElement(require('react-icons/fa')[social.icon], { className: 'w-5 h-5' })}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-lg space-y-6"
            >
              {submitStatus.message && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.success ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="How can I help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Hi Leku, I'd like to talk about..."
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                    isSubmitting
                      ? 'bg-blue-400 cursor-not-allowed'
                      : 'bg-blue-500 hover:bg-blue-600 transform hover:-translate-y-1'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
