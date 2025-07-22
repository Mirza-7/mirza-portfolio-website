import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Github, Linkedin, Download, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const ContactNode = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        to_name: 'Mirza Asdaf',
        message: formData.message,
        reply_to: formData.email,
      }
      
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      setSubmitStatus('success')
      setFormData({ firstName: '', lastName: '', email: '', message: '' })
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
      
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
      
      // Hide error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold font-mono mb-4">
            <span className="text-circuit-muted">//</span> Contact<span className="glow-text">.init()</span>
          </h2>
          <p className="text-circuit-muted max-w-2xl mx-auto">
            Ready to collaborate? Send me a message or connect through my networks.
          </p>
          <div className="w-24 h-1 bg-circuit-glow mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form - Terminal Style */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="circuit-node"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-circuit-trace">
              <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-circuit-glow rounded-full animate-pulse"></div>
                </div>
                <span className="font-mono text-sm text-circuit-muted">contact_form.terminal</span>
              </div>
              <div className="font-mono text-xs text-circuit-muted">
                SECURE_CONNECTION
              </div>
            </div>

            {/* Terminal Content */}
            <div className="font-mono text-sm space-y-4">
              <div className="text-circuit-glow">
                $ ./initialize_contact --secure<br/>
                <span className="text-circuit-muted">Establishing encrypted connection...</span><br/>
                <span className="text-circuit-muted">Connection established ✓</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-circuit-glow text-sm mb-2">
                      $ first_name:
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full bg-circuit-dark border border-circuit-trace rounded-lg px-4 py-3 
                               text-circuit-text focus:border-circuit-glow focus:outline-none transition-colors duration-300"
                      placeholder="Enter first name..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-circuit-glow text-sm mb-2">
                      $ last_name:
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full bg-circuit-dark border border-circuit-trace rounded-lg px-4 py-3 
                               text-circuit-text focus:border-circuit-glow focus:outline-none transition-colors duration-300"
                      placeholder="Enter last name..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-circuit-glow text-sm mb-2">
                    $ email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-circuit-dark border border-circuit-trace rounded-lg px-4 py-3 
                             text-circuit-text focus:border-circuit-glow focus:outline-none transition-colors duration-300"
                    placeholder="Enter your email..."
                  />
                </div>

                <div>
                  <label className="block text-circuit-glow text-sm mb-2">
                    $ message:
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-circuit-dark border border-circuit-trace rounded-lg px-4 py-3 
                             text-circuit-text focus:border-circuit-glow focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Enter your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-circuit-glow text-circuit-bg font-mono font-bold py-3 px-6 rounded-lg
                           hover:bg-circuit-hover transition-all duration-300 flex items-center justify-center space-x-2
                           disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-circuit-bg border-t-transparent rounded-full animate-spin"></div>
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Execute Contact()</span>
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 p-4 rounded-lg border flex items-center space-x-3 ${
                      submitStatus === 'success' 
                        ? 'bg-green-900/20 border-green-500 text-green-400' 
                        : 'bg-red-900/20 border-red-500 text-red-400'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <>
                        <CheckCircle size={20} />
                        <span className="font-mono">Message transmitted successfully! ✓</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle size={20} />
                        <span className="font-mono">Transmission failed. Please try again.</span>
                      </>
                    )}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div className="circuit-node">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-3 bg-circuit-glow rounded-full animate-pulse-glow"></div>
                <h3 className="text-xl font-bold font-mono">
                  <span className="text-circuit-muted">//</span> Direct<span className="glow-text">.connect()</span>
                </h3>
              </div>

              <div className="space-y-4">
                <motion.a
                  href="mailto:mirzaasdaf7@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-circuit-dark rounded-lg border border-circuit-trace
                           hover:border-circuit-glow transition-all duration-300 group"
                >
                  <Mail className="text-circuit-glow group-hover:text-circuit-hover" size={20} />
                  <div>
                    <div className="font-mono font-bold text-circuit-glow">Email</div>
                    <div className="text-sm text-circuit-muted">mirzaasdaf7@gmail.com</div>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-center space-x-4 p-4 bg-circuit-dark rounded-lg border border-circuit-trace"
                >
                  <MapPin className="text-circuit-glow" size={20} />
                  <div>
                    <div className="font-mono font-bold text-circuit-glow">Location</div>
                    <div className="text-sm text-circuit-muted">Vancouver, BC</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Networks */}
            <div className="circuit-node">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-3 bg-circuit-glow rounded-full animate-pulse-glow"></div>
                <h3 className="text-xl font-bold font-mono">
                  <span className="text-circuit-muted">//</span> Networks<span className="glow-text">.social</span>
                </h3>
              </div>

              <div className="space-y-3">
                <motion.a
                  href="https://github.com/Mirza-7"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-between p-4 bg-circuit-dark rounded-lg border border-circuit-trace
                           hover:border-circuit-glow transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <Github className="text-circuit-glow group-hover:text-circuit-hover" size={20} />
                    <span className="font-mono font-bold">GitHub</span>
                  </div>
                  <span className="text-xs text-circuit-muted">@Mirza-7</span>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/mirza-asdaf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-between p-4 bg-circuit-dark rounded-lg border border-circuit-trace
                           hover:border-circuit-glow transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <Linkedin className="text-circuit-glow group-hover:text-circuit-hover" size={20} />
                    <span className="font-mono font-bold">LinkedIn</span>
                  </div>
                  <span className="text-xs text-circuit-muted">@mirza-asdaf</span>
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={() => alert('Resume download will be available soon!')}
                  className="w-full flex items-center justify-between p-4 bg-circuit-dark rounded-lg border border-circuit-trace
                           hover:border-circuit-glow transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <Download className="text-circuit-glow group-hover:text-circuit-hover" size={20} />
                    <span className="font-mono font-bold">Resume</span>
                  </div>
                  <span className="text-xs text-circuit-muted">PDF Download</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Circuit */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="mt-16 h-0.5 bg-gradient-to-r from-transparent via-circuit-glow to-transparent"
        ></motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8 text-center"
        >
          <p className="text-circuit-muted font-mono text-sm">
            $ system.shutdown() <span className="text-circuit-glow">// Thanks for visiting!</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactNode 