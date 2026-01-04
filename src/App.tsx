<<<<<<< HEAD
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
=======
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
>>>>>>> d462302b709a6fbcf1e06a86fb3455bf5e954eed
                </div>
              </div>
            </motion.div>
          </div>
<<<<<<< HEAD
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
=======
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
>>>>>>> d462302b709a6fbcf1e06a86fb3455bf5e954eed

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/601139674518"
        target="_blank"
        rel="noopener noreferrer"
<<<<<<< HEAD
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
=======
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-8 h-8" />
>>>>>>> d462302b709a6fbcf1e06a86fb3455bf5e954eed
      </motion.a>
    </div>
  );
}
<<<<<<< HEAD

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
=======
>>>>>>> d462302b709a6fbcf1e06a86fb3455bf5e954eed
