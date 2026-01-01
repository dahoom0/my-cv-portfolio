import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle } from 'lucide-react';
import profilePhoto from 'figma:asset/06f8d18c6fdcf5e569f64a50e749ec301f8be312.png';
import { motion } from 'motion/react';

export default function App() {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#E8E4DF] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Navigation */}
        <motion.header 
          className="flex justify-end gap-8 mb-12 px-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#about" className="text-sm uppercase tracking-wider hover:text-[#D4A853] transition-colors cursor-pointer">
            About
          </a>
          <a href="#skills" className="text-sm uppercase tracking-wider hover:text-[#D4A853] transition-colors cursor-pointer">
            Skills
          </a>
          <a href="#experience" className="text-sm uppercase tracking-wider hover:text-[#D4A853] transition-colors cursor-pointer">
            Experience
          </a>
          <a href="#projects" className="text-sm uppercase tracking-wider hover:text-[#D4A853] transition-colors cursor-pointer">
            Projects
          </a>
          <a href="#contact" className="text-sm uppercase tracking-wider hover:text-[#D4A853] transition-colors cursor-pointer">
            Contact
          </a>
        </motion.header>

        {/* Hero Section with Profile - TOP */}
        <motion.section 
          id="about" 
          className="bg-[#FDF8F3] p-12 rounded-lg shadow-sm text-center mb-8"
          {...fadeInUp}
        >
          <div className="flex flex-col items-center">
            <motion.div 
              className="w-64 h-64 rounded-full overflow-hidden mb-6 shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src={profilePhoto}
                alt="Abdirahman Abdillahi Nour"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.h1 
              className="text-4xl mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Abdirahman Abdillahi Nour
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-700 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Building Secure Systems & Innovative Solutions
            </motion.p>
            <motion.p 
              className="text-gray-600 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Computer Science Student • Cybersecurity Specialist
            </motion.p>
            <motion.p 
              className="text-gray-700 leading-relaxed max-w-3xl mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I am a final year Computer Science student specializing in cybersecurity, networking, Django backend, cloud computing, 
              and penetration testing. I am seeking internship opportunities to apply my skills in real-world environments and contribute 
              to innovative projects. I am passionate about solving complex problems and enhancing security systems.
            </motion.p>
            <motion.div 
              className="flex gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.a 
                href="https://linkedin.com/in/abdirahman-abdillahi-ba76192b1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#D4A853] rounded-full flex items-center justify-center text-white hover:bg-[#C09743] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.div 
                className="w-8 h-8 bg-[#D4A853] rounded-full flex items-center justify-center text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Technologies/Certifications Logos */}
        <motion.section 
          className="bg-[#FDF8F3] p-8 rounded-lg shadow-sm mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 opacity-70"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {['AWS', 'Docker', 'Kubernetes', 'Django', 'React', 'Python'].map((tech, index) => (
              <motion.div 
                key={tech}
                className={`${index === 0 ? 'text-2xl font-bold' : 'text-xl font-semibold'} text-gray-700`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.7, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, opacity: 1 }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Skills Section - SECOND */}
        <motion.section 
          id="skills" 
          className="bg-[#FDF8F3] p-8 rounded-lg shadow-sm mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl mb-6 text-center">Technical Skills & Competencies</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { title: 'Languages & Databases', content: 'Java, Python, JavaScript (React), PostgreSQL, MySQL' },
              { title: 'Penetration Testing', content: 'Network Penetration Testing, Web Application Penetration Testing, OWASP Top 10 Testing, Vulnerability Assessment, Burp Suite, Metasploit, Nmap, Wireshark, Nessus' },
              { title: 'Web Development', content: 'HTML, CSS, JavaScript, Django, React, REST APIs' },
              { title: 'Cloud & DevOps', content: 'AWS (EC2, S3, Lambda), Docker, Kubernetes, CI/CD' },
              { title: 'Version Control', content: 'Git, GitHub, Collaboration Tools' },
              { title: 'Other Skills', content: 'Problem-Solving, Communication, Teamwork, Leadership' }
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <h3 className="font-semibold text-gray-900 mb-3">{skill.title}</h3>
                <p className="text-sm text-gray-700">{skill.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Education & Certifications Section */}
        <motion.section 
          className="bg-[#FDF8F3] p-8 rounded-lg shadow-sm mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl mb-6 text-center">Education & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-[#D4A853]">Education</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Bachelor of Computer Science</h4>
                  <p className="text-sm text-gray-700 mb-1">(Cybersecurity Specialization)</p>
                  <p className="text-sm text-gray-600 mb-1">Albukhary International University</p>
                  <p className="text-xs text-gray-500 mb-2">Oct 2023 – Present</p>
                  <p className="text-sm font-semibold text-[#D4A853]">CGPA: 3.55/4.0</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">High School</h4>
                  <p className="text-sm text-gray-600 mb-1">Noradin Secondary School</p>
                  <p className="text-xs text-gray-500">Sep 2018 - July 2022</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-[#D4A853]">Certifications</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">EJPT</h4>
                  <p className="text-sm text-gray-700 mb-1">eLearnSecurity Junior Penetration Tester</p>
                  <p className="text-xs text-gray-500">eLearnSecurity</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Google Cloud</h4>
                  <p className="text-xs text-gray-500">Oct 2023 – Present</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Experience Section - THIRD */}
        <motion.section 
          id="experience" 
          className="bg-[#FDF8F3] p-8 rounded-lg shadow-sm mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl mb-6 text-center">Experience</h2>
          <motion.div 
            className="space-y-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: 'Leader of Sudo Bug Bounty Team',
                date: 'July 2025 – Present',
                company: 'Capture The Flag Hackathon 2025 v3.0',
                description: 'Led the team in cybersecurity challenges during the Capture The Flag Hackathon, solving complex security vulnerabilities and coordinating team efforts to achieve top performance in competitive scenarios.'
              },
              {
                title: 'Full-Stack Developer',
                date: 'Mar 2025 – Dec 2025',
                company: 'BMC School Full Management System',
                description: 'Developed the full management system using Django, MySQL, and React. Improved speed and performance by 30% through code optimization and lazy loading techniques. Enhanced UI/UX based on user feedback, resulting in a 20% boost in user engagement.'
              },
              {
                title: 'School Committee Member',
                date: 'Nov 2024 – Nov 2025',
                company: 'Albukhary International University',
                description: 'EXCO of Event and Management. Organized events and contributed to committee goals. Collaborated with university departments to secure funding for student-led projects and initiatives.'
              }
            ].map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <div className="flex justify-between items-start mb-2 flex-wrap">
                  <h3 className="font-semibold text-gray-900 text-lg">{exp.title}</h3>
                  <span className="text-sm text-gray-600 whitespace-nowrap">{exp.date}</span>
                </div>
                <p className="text-sm text-[#D4A853] mb-3">{exp.company}</p>
                <p className="text-gray-700 leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Projects Section - FOURTH */}
        <motion.section 
          id="projects" 
          className="bg-[#FDF8F3] p-8 rounded-lg shadow-sm mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl mb-6 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="border-l-4 border-[#D4A853] pl-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="flex justify-between items-start mb-2 flex-wrap">
                <h3 className="font-semibold text-gray-900 text-lg">BMC School Full Management System</h3>
                <span className="text-sm text-gray-600 whitespace-nowrap">Mar 2025 – Dec 2025</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                Developing a production-scale university resource hub using React and Django REST Framework.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-[#D4A853] bg-opacity-20 text-gray-700 px-2 py-1 rounded">Django</span>
                <span className="text-xs bg-[#D4A853] bg-opacity-20 text-gray-700 px-2 py-1 rounded">React</span>
                <span className="text-xs bg-[#D4A853] bg-opacity-20 text-gray-700 px-2 py-1 rounded">MySQL</span>
              </div>
            </motion.div>

            <motion.div 
              className="border-l-4 border-[#D4A853] pl-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="flex justify-between items-start mb-2 flex-wrap">
                <h3 className="font-semibold text-gray-900 text-lg">IoT Obstacle Avoidance System</h3>
                <span className="text-sm text-gray-600 whitespace-nowrap">Dec 2025 – Jan 2026</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                Engineered a scalable IoT obstacle avoidance system using real-time sensor integration for optimized 
                autonomous navigation.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-[#D4A853] bg-opacity-20 text-gray-700 px-2 py-1 rounded">IoT</span>
                <span className="text-xs bg-[#D4A853] bg-opacity-20 text-gray-700 px-2 py-1 rounded">Sensors</span>
                <span className="text-xs bg-[#D4A853] bg-opacity-20 text-gray-700 px-2 py-1 rounded">Embedded Systems</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Honors & Awards Section */}
        <motion.section 
          className="bg-[#FDF8F3] p-8 rounded-lg shadow-sm mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl mb-6 text-center">Honors & Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div 
              className="flex items-start gap-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="text-3xl">🏆</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Yasan Foundation Scholarship</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  For academic excellence and community service
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-start gap-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="text-3xl">⭐</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Dean's List (All 4 Semesters)</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Albukhary International University
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Quote Section */}
        <motion.section 
          className="bg-[#FDF8F3] p-8 rounded-lg shadow-sm text-center mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="text-6xl text-[#D4A853] mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            "
          </motion.div>
          <motion.p 
            className="text-xl italic text-gray-700 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The greatest security risk is not the technology itself, but to act with yesterday's knowledge in today's rapidly evolving threat landscape.
          </motion.p>
          <motion.p 
            className="text-sm text-gray-500 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            — Security Mindset
          </motion.p>
        </motion.section>

        {/* Contact Section - BOTTOM */}
        <motion.section 
          id="contact" 
          className="bg-[#FDF8F3] p-8 rounded-lg shadow-sm"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl mb-6 text-center">Let's Connect</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { Icon: Mail, label: 'Email', value: 'a.rahmanabdillahi@gmail.com', href: 'mailto:a.rahmanabdillahi@gmail.com' },
              { Icon: Phone, label: 'Phone', value: '+601139674518', href: 'tel:+601139674518' },
              { Icon: MapPin, label: 'Location', value: 'Alor Setar, Malaysia', href: null },
              { Icon: Linkedin, label: 'LinkedIn', value: 'View Profile', href: 'https://linkedin.com/in/abdirahman-abdillahi-ba76192b1/' }
            ].map((contact, index) => (
              <motion.div 
                key={contact.label}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <contact.Icon className="w-6 h-6 text-[#D4A853] mb-2" />
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{contact.label}</p>
                {contact.href ? (
                  <a 
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm hover:text-[#D4A853] transition-colors underline"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-sm">{contact.value}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          className="mt-12 text-center text-sm text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>© 2026 Abdirahman Abdillahi Nour • Computer Science & Cybersecurity</p>
        </motion.footer>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/601139674518"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-8 h-8" />
      </motion.a>
    </div>
  );
}
