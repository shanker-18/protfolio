import { motion } from 'framer-motion'

const Certificates = () => {
  const certificates = [
    {
      title: "Advanced Web Development",
      issuer: "Udacity",
      date: "2024",
      credential: "UDACITY-123456",
      description: "Comprehensive course covering modern web development practices, React, and advanced JavaScript concepts.",
      image: "/certificates/udacity.png"
    },
    {
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      credential: "AWS-789012",
      description: "Professional certification in cloud architecture and AWS services implementation.",
      image: "/certificates/aws.png"
    },
    {
      title: "Data Science Fundamentals",
      issuer: "Coursera",
      date: "2023",
      credential: "COURSERA-345678",
      description: "Foundational course in data science, statistics, and machine learning basics.",
      image: "/certificates/coursera.png"
    },
    {
      title: "Flutter Development",
      issuer: "Google",
      date: "2023",
      credential: "GOOGLE-901234",
      description: "Complete guide to building cross-platform mobile applications using Flutter.",
      image: "/certificates/google.png"
    },
    {
      title: "Python for Data Analysis",
      issuer: "DataCamp",
      date: "2023",
      credential: "DATACAMP-567890",
      description: "Practical course on data analysis using Python, pandas, and data visualization.",
      image: "/certificates/datacamp.png"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford Online",
      date: "2023",
      credential: "STANFORD-234567",
      description: "Advanced specialization in machine learning algorithms and applications.",
      image: "/certificates/stanford.png"
    }
  ]

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8">Certificates</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.credential}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                  <p className="text-pink-500 mb-2">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-4">{cert.date}</p>
                  <p className="text-gray-300 mb-4">{cert.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Credential ID: {cert.credential}</span>
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors">
                      View Certificate
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Certificates 