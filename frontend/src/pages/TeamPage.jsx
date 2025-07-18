
import { motion } from "framer-motion";
import { 
  Linkedin, 
  Mail, 
  Phone,
  Award,
  Users,
  Target,
  Globe
} from "lucide-react";

const TeamPage = () => {
  const leadership = [
    {
      name: "Robert Johnson",
      position: "Chief Executive Officer",
      bio: "With over 20 years in logistics, Robert leads our global operations with vision and innovation.",
      email: "r.johnson@globallogistics.com",
      linkedin: "#",
      image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Sarah Chen",
      position: "Chief Operating Officer",
      bio: "Sarah oversees our day-to-day operations ensuring excellence in service delivery worldwide.",
      email: "s.chen@globallogistics.com",
      linkedin: "#",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Michael Rodriguez",
      position: "Chief Technology Officer",
      bio: "Michael drives our technology initiatives, keeping us at the forefront of logistics innovation.",
      email: "m.rodriguez@globallogistics.com",
      linkedin: "#",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Emily Watson",
      position: "Chief Financial Officer",
      bio: "Emily manages our financial strategy and ensures sustainable growth across all markets.",
      email: "e.watson@globallogistics.com",
      linkedin: "#",
      image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const departments = [
    {
      title: "Operations Team",
      description: "Ensuring smooth execution of logistics operations worldwide",
      icon: Target,
      teamMembers: [
        {
          name: "David Kim",
          position: "Operations Director",
          image: "https://plus.unsplash.com/premium_photo-1689708721750-8a0e6dc14cee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          name: "Lisa Thompson",
          position: "Regional Manager - Americas",
          image: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          name: "Ahmed Hassan",
          position: "Regional Manager - EMEA",
          image: "https://plus.unsplash.com/premium_photo-1689565611422-b2156cc65e47?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          name: "Yuki Tanaka",
          position: "Regional Manager - APAC",
          image: "https://plus.unsplash.com/premium_photo-1689629870780-5d0e655383e6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      ]
    },
    {
      title: "Customer Success",
      description: "Dedicated to providing exceptional customer service and support",
      icon: Users,
      teamMembers: [
        {
          name: "Jennifer Martinez",
          position: "Customer Success Director",
          image: "https://plus.unsplash.com/premium_photo-1689551671548-79ff30459d2a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          name: "Tom Wilson",
          position: "Account Manager",
          image: "https://plus.unsplash.com/premium_photo-1690295364571-d2d06159e0a7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          name: "Maria Garcia",
          position: "Support Specialist",
          image: "https://plus.unsplash.com/premium_photo-1689551671541-31a345ce6ae0?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          name: "James Brown",
          position: "Training Coordinator",
          image: "https://plus.unsplash.com/premium_photo-1689747698547-271d2d553cee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      ]
    },
    {
      title: "Technology Team",
      description: "Building innovative solutions for modern logistics challenges",
      icon: Globe,
      teamMembers: [
        {
          name: "Alex Petrov",
          position: "Lead Developer",
          image: "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          name: "Priya Sharma",
          position: "Data Analyst",
          image: "https://plus.unsplash.com/premium_photo-1690294614341-cf346ba0a637?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          name: "Carlos Lopez",
          position: "System Administrator",
          image: "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          name: "Rachel Green",
          position: "UX Designer",
          image: "https://plus.unsplash.com/premium_photo-1690296204289-14e517830d8e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      ]
    }
  ];

  const stats = [
    { number: "150+", label: "Team Members", icon: Users },
    { number: "25+", label: "Countries", icon: Globe },
    { number: "15+", label: "Years Average Experience", icon: Award },
    { number: "98%", label: "Employee Satisfaction", icon: Target }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Meet Our <span className="text-emerald-400">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              The passionate professionals driving innovation and excellence 
              in global logistics solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-white rounded-xl p-6 shadow-lg"
              >
                <stat.icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders guiding our company towards continued success and innovation
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                <div className="h-64 bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-emerald-600 font-medium mb-3">{leader.position}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{leader.bio}</p>
                  <div className="flex space-x-3">
                    <a 
                      href={`mailto:${leader.email}`}
                      className="text-gray-400 hover:text-emerald-600 transition duration-300"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a 
                      href={leader.linkedin}
                      className="text-gray-400 hover:text-emerald-600 transition duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Teams */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Departments</h2>
            <p className="text-xl text-gray-600">
              Specialized teams working together to deliver exceptional results
            </p>
          </motion.div>

          {departments.map((department, deptIndex) => (
            <motion.div
              key={deptIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: deptIndex * 0.2 }}
              className="mb-16 last:mb-0"
            >
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <department.icon className="w-8 h-8 text-emerald-600 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{department.title}</h3>
                    <p className="text-gray-600">{department.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {department.teamMembers.map((member, memberIndex) => (
                    <motion.div
                      key={memberIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: memberIndex * 0.1 }}
                      className="text-center"
                    >
                      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-3 border-4 border-emerald-100">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">{member.name}</h4>
                      <p className="text-sm text-gray-600">{member.position}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to be part of a dynamic team that's shaping the future of logistics? 
              We're always looking for talented individuals to join our growing family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300">
                View Open Positions
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300">
                Submit Resume
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
