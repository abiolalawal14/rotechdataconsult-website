import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToBooking = () => {
    document.querySelector('#booking').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-gradient-to-br from-primary-purple to-primary-dark text-white pt-32 pb-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-light/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Africa's <br />
            <span className="bg-gradient-to-r from-primary-accent to-white bg-clip-text text-transparent">
              Data Future
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Transform your career with expert-led data analysis training, cutting-edge consulting services, 
            and business intelligence solutions that drive real results.
          </p>

          <motion.button
            onClick={scrollToBooking}
            className="bg-white text-primary-purple px-8 py-4 rounded-lg text-lg font-semibold 
                     hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 
                     shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey Today
          </motion.button>
        </motion.div>

        {/* Floating elements */}
        <div className="mt-16 relative">
          <motion.div
            className="absolute top-0 left-1/4 w-16 h-16 bg-primary-accent/30 rounded-full"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-10 right-1/4 w-12 h-12 bg-white/20 rounded-full"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute -top-5 left-1/2 w-8 h-8 bg-primary-light/40 rounded-full"
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          />
        </div>
      </div>
    </section>
  )
}