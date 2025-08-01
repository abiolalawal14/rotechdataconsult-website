import { motion } from 'framer-motion'
import { 
  TableCellsIcon, 
  ChartBarIcon, 
  CircleStackIcon, 
  CodeBracketIcon 
} from '@heroicons/react/24/outline'

const courses = [
  {
    icon: TableCellsIcon,
    title: 'Microsoft Excel/Google Sheets Mastery',
    description: 'From basic formulas to advanced pivot tables, master the art of spreadsheet analysis for business intelligence.',
    duration: '4 weeks',
    level: 'Beginner-Intermediate',
    price: '₦50,000',
    features: ['Advanced formulas', 'Pivot tables', 'Data validation', 'Automation']
  },
  {
    icon: ChartBarIcon,
    title: 'Power BI Dashboard Design',
    description: 'Create stunning, interactive dashboards that tell compelling data stories and drive business decisions.',
    duration: '3 weeks',
    level: 'Beginner - Intermediate',
    price: '₦40,000',
    features: ['Dashboard design', 'DAX formulas', 'Data modeling', 'Report publishing']
  },
  {
    icon: CircleStackIcon,
    title: 'SQL for Data Analysis',
    description: 'Master database querying, data manipulation, and advanced SQL techniques for real-world analysis.',
    duration: '6 weeks',
    level: 'Beginner - Intermediate',
    price: '₦50,000',
    features: ['Query optimization', 'Joins & subqueries', 'Window functions', 'Performance tuning']
  },
  {
    icon: CodeBracketIcon,
    title: 'Python for Data Science',
    description: 'Learn Python programming with pandas, matplotlib, and scikit-learn for advanced data analysis.',
    duration: '8 weeks',
    level: 'Beginner - Advanced',
    price: '₦60,000',
    features: ['Pandas & NumPy', 'Data visualization', 'Machine learning', 'Web scraping']
  }
]

const levelColors = {
  'Beginner-Intermediate': 'bg-green-100 text-green-800',
  'Intermediate': 'bg-yellow-100 text-yellow-800',
  'Advanced': 'bg-red-100 text-red-800'
}

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
            Featured Courses
          </h2>
          <div className="w-20 h-1 bg-primary-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-medium max-w-3xl mx-auto">
            Transform your career with our comprehensive, hands-on data analysis courses 
            designed for professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl 
                         transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-purple to-primary-light 
                               rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 
                               transition-transform duration-300">
                  <course.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-dark group-hover:text-primary-purple 
                                 transition-colors duration-300">
                    {course.title}
                  </h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 
                                   ${levelColors[course.level]}`}>
                    {course.level}
                  </span>
                </div>
              </div>

              <p className="text-gray-medium mb-6 leading-relaxed">
                {course.description}
              </p>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {course.features.map((feature) => (
                    <span key={feature} 
                          className="bg-primary-purple/10 text-primary-purple px-3 py-1 
                                   rounded-full text-sm font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center mb-6 text-sm text-gray-medium">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Duration: {course.duration}
                </span>
                <span className="text-2xl font-bold text-primary-purple">
                  {course.price}
                </span>
              </div>

              <button className="w-full bg-primary-purple text-white py-3 rounded-lg font-semibold 
                               hover:bg-primary-dark transition-all duration-300 transform 
                               hover:scale-105 active:scale-95">
                Enroll Now
              </button>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-purple to-primary-dark rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Start Learning?</h3>
            <p className="mb-6 opacity-90">
              Join over 200+ students who have transformed their careers with our courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-purple px-6 py-3 rounded-lg font-semibold 
                               hover:bg-gray-100 transition-all duration-300">
                View All Courses
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold 
                               hover:bg-white hover:text-primary-purple transition-all duration-300">
                Schedule Free Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}