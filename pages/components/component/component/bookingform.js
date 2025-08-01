import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CalendarDaysIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
        reset()
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        throw new Error('Failed to submit')
      }
    } catch (error) {
      alert('There was an error submitting your request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="booking" className="py-20 bg-gradient-to-br from-primary-purple to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-dark mb-2">Thank You!</h3>
            <p className="text-gray-medium">
              Your consultation request has been submitted successfully. 
              We'll contact you within 24 hours to schedule your free consultation.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-primary-purple to-primary-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Book a Consultation
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ready to transform your business with data? Schedule a free consultation with our experts.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-dark mb-2">
                  Full Name *
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-purple focus:border-transparent"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-dark mb-2">
                  Email Address *
                </label>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-purple focus:border-transparent"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-dark mb-2">
                  Phone Number *
                </label>
                <input
                  {...register('phone', { required: 'Phone number is required' })}
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-purple focus:border-transparent"
                  placeholder="+234 xxx xxx xxxx"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-dark mb-2">
                  Company/Organization
                </label>
                <input
                  {...register('company')}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-purple focus:border-transparent"
                  placeholder="Enter company name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-dark mb-2">
                Service Interest *
              </label>
              <select
                {...register('service', { required: 'Please select a service' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-purple focus:border-transparent"
              >
                <option value="">Select a service...</option>
                <option value="training">Individual Training</option>
                <option value="consulting">Business Consulting</option>
                <option value="team-training">Team Training</option>
                <option value="bi-setup">BI Implementation</option>
                <option value="data-audit">Data Audit</option>
                <option value="monitoring-evaluation">Monitoring & Evaluation</option>
              </select>
              {errors.service && (
                <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-dark mb-2">
                Tell us about your needs
              </label>
              <textarea
                {...register('message')}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-purple focus:border-transparent resize-vertical"
                placeholder="Describe your current challenges and goals..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary-purple text-white px-8 py-4 rounded-lg font-semibold 
                         hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 
                         disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                         shadow-lg hover:shadow-xl flex items-center mx-auto"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <CalendarDaysIcon className="w-5 h-5 mr-2" />
                    Schedule Free Consultation
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}