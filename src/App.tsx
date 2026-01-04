import { ArrowDown, Mail, Phone, Linkedin, MessageCircle, Shield, Code2, Cloud, Award, Database, Terminal, Lock, Server, Boxes, Globe, MapPin, ExternalLink, Github } from 'lucide-react';
import profilePhoto from 'figma:asset/06f8d18c6fdcf5e569f64a50e749ec301f8be312.png';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms
  const cube1Y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const cube2Y = useTransform(scrollYProgress, [0, 1], [0, -450]);
  const cube3Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const sphere1Y = useTransform(scrollYProgress, [0, 1], [0, -350]);
  const sphere2Y = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const cylinderY = useTransform(scrollYProgress, [0, 1], [0, -250]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-white overflow-x-hidden">
      {/* Floating cursor effect */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-50 mix-blend-multiply opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(93, 63, 211, 0.4) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          x: 0,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 15,
        }}
      />

      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-40 px-6 md:px-16 py-6 bg-white/80 backdrop-blur-xl border-b border-gray-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
      >
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <motion.div 
            className="text-2xl md:text-3xl tracking-tight"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-[#5D3FD3]">Abd</span>
            <span className="text-[#1A1A1A]">rahman</span>
            <span className="text-[#FFD700]">.</span>
          </motion.div>
          
          <div className="hidden md:flex gap-8 lg:gap-12 text-xs lg:text-sm uppercase tracking-[0.15em] text-[#1A1A1A]">
            <motion.a 
              href="#about" 
              className="hover:text-[#5D3FD3] transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5D3FD3] group-hover:w-full transition-all duration-300"></span>
            </motion.a>
            <motion.a 
              href="#skills" 
              className="hover:text-[#5D3FD3] transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5D3FD3] group-hover:w-full transition-all duration-300"></span>
            </motion.a>
            <motion.a 
              href="#experience" 
              className="hover:text-[#5D3FD3] transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5D3FD3] group-hover:w-full transition-all duration-300"></span>
            </motion.a>
            <motion.a 
              href="#projects" 
              className="hover:text-[#5D3FD3] transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5D3FD3] group-hover:w-full transition-all duration-300"></span>
            </motion.a>
            <motion.a 
              href="#contact" 
              className="hover:text-[#5D3FD3] transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5D3FD3] group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          </div>

          <MagneticButton href="#contact">
            <Mail className="w-4 h-4 mr-2" />
            Hire Me
          </MagneticButton>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center px-6 md:px-16 pt-32 pb-20 relative overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#5D3FD3] rounded-full blur-[150px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#FFD700] rounded-full blur-[200px] opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-[1800px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <motion.p 
              className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#5D3FD3] mb-6 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="w-8 h-px bg-[#5D3FD3]"></span>
              Cybersecurity Specialist & Full-Stack Developer
            </motion.p>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Hello,
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                I'm
              </motion.div>
              <motion.div
                className="text-[#5D3FD3]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Abdirahman
              </motion.div>
              <motion.div
                className="text-[#1A1A1A]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Abdillahi
              </motion.div>
            </h1>

            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.01em' }}
            >
              Final year Computer Science student specializing in <span className="text-[#5D3FD3] font-semibold">cybersecurity</span>, 
              <span className="text-[#FFD700] font-semibold"> Django backend</span>, and 
              <span className="text-[#5D3FD3] font-semibold"> penetration testing</span>. 
              <span className="text-[#1A1A1A] font-semibold"> eJPT certified</span>.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <InfoBadge icon={MapPin} text="Alor Setar, Malaysia" />
              <InfoBadge icon={Award} text="CGPA: 3.55/4.0" />
              <InfoBadge icon={Shield} text="eJPT Certified" />
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <MagneticButton href="#contact">
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </MagneticButton>
              <MagneticButton href="#projects" variant="outline">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Projects
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <SocialIcon href="https://linkedin.com/in/abdirahman-abdillahi-ba76192b1/" icon={Linkedin} />
              <SocialIcon href="mailto:a.rahmanabdillahi@gmail.com" icon={Mail} />
              <SocialIcon href="#" icon={Github} />
              <SocialIcon href="tel:+601139674518" icon={Phone} />
            </motion.div>

            <motion.a
              href="#skills"
              className="mt-12 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#5D3FD3] transition-colors group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.7 }}
            >
              <span>Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="w-4 h-4" />
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Right: Profile Photo with 3D Elements */}
          <div className="relative h-[500px] lg:h-[700px]">
            {/* Main Profile Photo */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              <div className="relative">
                {/* Glowing ring effect */}
                <motion.div
                  className="absolute inset-0 rounded-full blur-2xl opacity-40"
                  style={{ background: 'linear-gradient(135deg, #5D3FD3 0%, #FFD700 100%)' }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Photo container */}
                <motion.div
                  className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl"
                  style={{
                    boxShadow: '0 0 60px rgba(93, 63, 211, 0.3)',
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={profilePhoto}
                    alt="Abdirahman Abdillahi Nour"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Rotating ring */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: '2px dashed #5D3FD3',
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </motion.div>

            {/* Floating 3D Elements */}
            {/* Cube 1 - Shield Icon */}
            <motion.div
              className="absolute"
              style={{ 
                y: cube1Y,
                top: '8%',
                right: '15%',
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <FloatingCard 
                icon={Shield} 
                color="#5D3FD3" 
                duration={4}
              />
            </motion.div>

            {/* Cube 2 - Code Icon */}
            <motion.div
              className="absolute"
              style={{ 
                y: cube2Y,
                top: '15%',
                left: '10%',
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <FloatingCard 
                icon={Code2} 
                color="#FFD700" 
                duration={5}
              />
            </motion.div>

            {/* Cube 3 - Cloud Icon */}
            <motion.div
              className="absolute"
              style={{ 
                y: cube3Y,
                bottom: '20%',
                right: '10%',
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <FloatingCard 
                icon={Cloud} 
                color="#5D3FD3" 
                duration={4.5}
              />
            </motion.div>

            {/* Cube 4 - Database Icon */}
            <motion.div
              className="absolute"
              style={{ 
                y: sphere1Y,
                bottom: '15%',
                left: '15%',
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <FloatingCard 
                icon={Database} 
                color="#1A1A1A" 
                duration={3.5}
              />
            </motion.div>

            {/* Small decorative elements */}
            <motion.div
              className="absolute top-[25%] right-[5%] w-6 h-6 rounded-full bg-[#FFD700]"
              style={{ y: sphere2Y }}
              animate={{ 
                y: [0, -20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-[35%] left-[8%] w-4 h-4 bg-[#5D3FD3]"
              style={{ y: cylinderY }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 md:py-32 px-6 md:px-16 bg-gradient-to-br from-[#FAFAFA] to-white">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#5D3FD3] mb-4">Core Competencies</p>
            <h2 className="text-5xl md:text-7xl" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800 }}>
              Skills & <span className="text-[#5D3FD3]">Expertise</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <SkillCard
              icon={Shield}
              title="Penetration Testing"
              skills={['Network Penetration Testing', 'Web App Pen Testing', 'OWASP Top 10', 'Vulnerability Assessment', 'Burp Suite', 'Metasploit', 'Nmap', 'Wireshark']}
              color="#5D3FD3"
              delay={0}
            />
            <SkillCard
              icon={Code2}
              title="Web Development"
              skills={['Django', 'React', 'JavaScript', 'HTML/CSS', 'REST APIs', 'PostgreSQL', 'MySQL']}
              color="#FFD700"
              delay={0.2}
            />
            <SkillCard
              icon={Cloud}
              title="Cloud & DevOps"
              skills={['AWS (EC2, S3, Lambda)', 'Docker', 'Kubernetes', 'CI/CD', 'Git/GitHub']}
              color="#5D3FD3"
              delay={0.4}
            />
          </div>

          {/* Tech Stack Pills */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {['Python', 'Java', 'JavaScript', 'Django', 'React', 'PostgreSQL', 'MySQL', 'Docker', 'Kubernetes', 'AWS', 'Git'].map((tech, i) => (
              <motion.span
                key={tech}
                className="px-5 py-2 rounded-full bg-white border-2 border-gray-200 text-sm font-medium text-gray-700 hover:border-[#5D3FD3] hover:text-[#5D3FD3] transition-all cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 md:py-32 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#5D3FD3] mb-4">Professional Journey</p>
            <h2 className="text-5xl md:text-7xl" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800 }}>
              Experience & <span className="text-[#5D3FD3]">Leadership</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            <ExperienceCard
              title="Leader of Sudo Bug Bounty Team"
              organization="Capture The Flag Hackathon 2025 v3.0"
              period="July 2025 – Present"
              description="Led the team in cybersecurity challenges during the Capture The Flag Hackathon, solving complex security vulnerabilities and coordinating team efforts."
              icon={Shield}
              color="#5D3FD3"
              delay={0}
            />
            <ExperienceCard
              title="Full-Stack Developer"
              organization="BMC School Full Management System"
              period="Mar 2025 – Dec 2025"
              description="Developed full management system using Django, MySQL, and React. Improved speed by 30% through optimization. Enhanced UI/UX resulting in 20% boost in engagement."
              icon={Code2}
              color="#FFD700"
              delay={0.2}
            />
            <ExperienceCard
              title="School Committee Member"
              organization="Albukhary International University"
              period="Nov 2024 – Nov 2025"
              description="EXCO of Event and Management. Organized events and contributed to committee goals. Collaborated with university departments to secure funding."
              icon={Award}
              color="#5D3FD3"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 md:py-32 px-6 md:px-16 bg-gradient-to-br from-[#FAFAFA] to-white">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#5D3FD3] mb-4">Featured Work</p>
            <h2 className="text-5xl md:text-7xl" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800 }}>
              Recent <span className="text-[#5D3FD3]">Projects</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProjectCard
              title="BMC School Full Management System"
              period="Mar 2025 – Dec 2025"
              description="Production-scale university resource hub using React and Django REST Framework. Achieved 30% performance improvement and 20% engagement boost."
              tags={['Django', 'React', 'MySQL', 'REST API']}
              icon={Code2}
              color="#5D3FD3"
              delay={0}
            />
            <ProjectCard
              title="IoT Obstacle Avoidance System"
              period="Dec 2025 – Jan 2026"
              description="Engineered a scalable IoT obstacle avoidance system using real-time sensor integration for optimized autonomous navigation."
              tags={['IoT', 'Sensors', 'Embedded Systems', 'Python']}
              icon={Boxes}
              color="#FFD700"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-24 md:py-32 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#5D3FD3] mb-4">Academic Excellence</p>
            <h2 className="text-5xl md:text-7xl" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800 }}>
              Education & <span className="text-[#5D3FD3]">Honors</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-3xl p-10 border-2 border-gray-100 hover:border-[#5D3FD3] transition-all shadow-lg hover:shadow-2xl group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5D3FD3] to-[#4A2FB0] flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Bachelor of Computer Science</h3>
              <p className="text-gray-600 mb-2">(Cybersecurity Specialization)</p>
              <p className="text-sm text-gray-500 mb-4">Albukhary International University • Oct 2023 – Present</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-[#5D3FD3] text-white text-sm font-semibold">CGPA: 3.55/4.0</span>
                <span className="px-4 py-2 rounded-full bg-[#FFD700] text-[#1A1A1A] text-sm font-semibold">Dean's List x4</span>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[#5D3FD3] to-[#4A2FB0] rounded-3xl p-10 text-white shadow-2xl group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6 backdrop-blur-sm">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Certifications & Awards</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-white/50 pl-4">
                  <h4 className="font-semibold mb-1">eJPT</h4>
                  <p className="text-sm text-white/80">eLearnSecurity Junior Penetration Tester</p>
                </div>
                <div className="border-l-2 border-white/50 pl-4">
                  <h4 className="font-semibold mb-1">Google Cloud</h4>
                  <p className="text-sm text-white/80">Oct 2023 – Present</p>
                </div>
                <div className="border-l-2 border-[#FFD700] pl-4">
                  <h4 className="font-semibold mb-1">🏆 Yasan Foundation Scholarship</h4>
                  <p className="text-sm text-white/80">Academic excellence & community service</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 px-6 md:px-16 bg-[#5D3FD3] text-white relative overflow-hidden">
        {/* Decorative elements */}
        <motion.div
          className="absolute top-10 right-10 w-40 h-40 rounded-full bg-[#FFD700] opacity-20 blur-3xl"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-32 h-32 bg-white opacity-10 blur-2xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <motion.p
            className="text-xs md:text-sm uppercase tracking-[0.3em] mb-8 text-white/80"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let's Build Something Great
          </motion.p>

          <motion.h2 
            className="text-5xl md:text-7xl lg:text-8xl leading-tight mb-12"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Create<br />
            Secure & Innovative<br />
            Solutions Together.
          </motion.h2>

          <motion.p
            className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Available for internship opportunities. Let's discuss how I can contribute to your team with my expertise in cybersecurity and full-stack development.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.a
              href="mailto:a.rahmanabdillahi@gmail.com"
              className="px-10 py-5 bg-white text-[#5D3FD3] rounded-full text-lg font-semibold hover:bg-[#FFD700] hover:text-[#1A1A1A] transition-all flex items-center gap-3 shadow-2xl"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              a.rahmanabdillahi@gmail.com
            </motion.a>

            <motion.a
              href="tel:+601139674518"
              className="px-10 py-5 border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-[#5D3FD3] transition-all flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              +60 11 3967 4518
            </motion.a>
          </motion.div>

          <motion.div
            className="flex gap-6 justify-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.a
              href="https://linkedin.com/in/abdirahman-abdillahi-ba76192b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:text-[#5D3FD3] transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:a.rahmanabdillahi@gmail.com"
              className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:text-[#5D3FD3] transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:text-[#5D3FD3] transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
          </motion.div>

          <motion.div
            className="pt-12 border-t border-white/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <p className="text-sm text-white/70">© 2026 Abdirahman Abdillahi Nour • Computer Science & Cybersecurity Specialist</p>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/601139674518"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center text-white z-50 shadow-2xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-8 h-8" />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-[#25D366]"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.a>
    </div>
  );
}

// Components

function InfoBadge({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <motion.div
      className="px-4 py-2 rounded-full bg-white border border-gray-200 flex items-center gap-2 text-sm text-gray-700"
      whileHover={{ scale: 1.05, borderColor: '#5D3FD3' }}
    >
      <Icon className="w-4 h-4 text-[#5D3FD3]" />
      <span>{text}</span>
    </motion.div>
  );
}

function SocialIcon({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#5D3FD3] hover:text-[#5D3FD3] hover:bg-[#5D3FD3]/5 transition-all"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  );
}

function FloatingCard({ icon: Icon, color, duration }: { icon: any; color: string; duration: number }) {
  return (
    <motion.div
      className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm"
      style={{
        background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`,
      }}
      animate={{
        y: [0, -20, 0],
        rotateY: [0, 10, 0],
        rotateX: [0, 10, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.2, rotate: 10 }}
    >
      <Icon className="w-10 h-10 text-white" />
    </motion.div>
  );
}

function MagneticButton({ 
  children, 
  href, 
  variant = 'default' 
}: { 
  children: React.ReactNode; 
  href: string; 
  variant?: 'default' | 'outline';
}) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.2);
    y.set((e.clientY - centerY) * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles = variant === 'default'
    ? 'bg-[#5D3FD3] text-white hover:bg-[#4A2FB0]'
    : 'bg-transparent text-[#1A1A1A] border-2 border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white';

  return (
    <motion.a
      ref={buttonRef}
      href={href}
      className={`px-6 md:px-8 py-3 md:py-4 rounded-full text-xs md:text-sm uppercase tracking-wider font-semibold inline-flex items-center transition-all ${baseStyles}`}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}

function SkillCard({ 
  icon: Icon, 
  title, 
  skills, 
  color, 
  delay 
}: { 
  icon: any; 
  title: string; 
  skills: string[]; 
  color: string; 
  delay: number;
}) {
  return (
    <motion.div
      className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-[#5D3FD3] transition-all shadow-lg hover:shadow-2xl group"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <div 
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white"
        style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)` }}
      >
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-bold mb-4 group-hover:text-[#5D3FD3] transition-colors">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5D3FD3] mt-1.5"></span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ExperienceCard({ 
  title, 
  organization, 
  period, 
  description, 
  icon: Icon, 
  color, 
  delay 
}: { 
  title: string; 
  organization: string; 
  period: string; 
  description: string; 
  icon: any; 
  color: string; 
  delay: number;
}) {
  return (
    <motion.div
      className="bg-white rounded-3xl p-8 md:p-10 border-2 border-gray-100 hover:border-[#5D3FD3] transition-all shadow-lg hover:shadow-2xl group"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ x: 10 }}
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div 
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-white flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)` }}
        >
          <Icon className="w-8 h-8" />
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-[#5D3FD3] transition-colors">{title}</h3>
              <p className="text-gray-600 mb-1">{organization}</p>
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap">{period}</span>
          </div>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ 
  title, 
  period, 
  description, 
  tags, 
  icon: Icon, 
  color, 
  delay 
}: { 
  title: string; 
  period: string; 
  description: string; 
  tags: string[]; 
  icon: any; 
  color: string; 
  delay: number;
}) {
  return (
    <motion.div
      className="bg-white rounded-3xl p-8 md:p-10 border-2 border-gray-100 hover:border-[#5D3FD3] transition-all shadow-lg hover:shadow-2xl group"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <div 
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white"
        style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)` }}
      >
        <Icon className="w-8 h-8" />
      </div>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold group-hover:text-[#5D3FD3] transition-colors">{title}</h3>
      </div>
      <p className="text-sm text-gray-500 mb-4">{period}</p>
      <p className="text-gray-700 leading-relaxed mb-6">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span 
            key={tag}
            className="px-4 py-2 rounded-full bg-gray-100 text-sm text-gray-700 group-hover:bg-[#5D3FD3] group-hover:text-white transition-all"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
