import { Mail, Phone, MapPin, Globe, Linkedin } from 'lucide-react';
import profilePhoto from 'figma:asset/06f8d18c6fdcf5e569f64a50e749ec301f8be312.png';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Desktop and Tablet: Two-column layout */}
      <div className="max-w-[1440px] mx-auto bg-white shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] min-h-screen">
          {/* LEFT SIDEBAR */}
          <aside className="bg-[#6B9BA8] text-white">
            {/* Profile Photo & Header */}
            <div className="relative">
              <div className="aspect-square w-full overflow-hidden">
                <img 
                  src={profilePhoto}
                  alt="Abdirahman Abdillahi Nour"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Contact Section */}
            <div className="px-8 py-10">
              <h2 className="text-sm tracking-[0.2em] uppercase mb-6">Contact</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div className="text-sm">+601139674518</div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div className="text-sm break-all">a.rahmanabdillahi@gmail.com</div>
                </div>
                <div className="flex items-start gap-3">
                  <Linkedin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <a 
                    href="https://linkedin.com/in/abdirahman-abdillahi-ba76192b1/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                  >
                    linkedin.com/in/abdirahman-abdillahi-ba76192b1/
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div className="text-sm">Alor Setar, Malaysia</div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="px-8 pb-10">
              <h2 className="text-sm tracking-[0.2em] uppercase mb-6">Education</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-sm mb-1">Bachelor of Computer Science</h3>
                  <p className="text-sm opacity-90 mb-1">(Cybersecurity Specialization)</p>
                  <p className="text-sm opacity-90 mb-2">Albukhary International University</p>
                  <p className="text-xs opacity-75 mb-2">Oct 2023 – Present</p>
                  <p className="text-xs opacity-90 leading-relaxed">
                    CGPA: 3.55/4.0
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">High School</h3>
                  <p className="text-sm opacity-90 mb-2">Noradin Secondary School</p>
                  <p className="text-xs opacity-75">Sep 2018 - July 2022</p>
                </div>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="px-8 pb-10">
              <h2 className="text-sm tracking-[0.2em] uppercase mb-6">Certifications</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold mb-1">EJPT</p>
                  <p className="text-xs opacity-90 leading-relaxed">
                    eLearnSecurity Junior Penetration Tester
                  </p>
                  <p className="text-xs opacity-75 mt-1">eLearnSecurity</p>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Google Cloud</p>
                  <p className="text-xs opacity-75">Oct 2023 – Present</p>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT MAIN CONTENT */}
          <main className="px-12 py-12 md:px-16 md:py-16">
            {/* Header with Name and Title */}
            <div className="mb-12">
              <div className="bg-[#6B9BA8] text-white px-8 py-6 -mx-12 md:-mx-16 mb-12">
                <h1 className="text-4xl md:text-5xl mb-2 tracking-tight">Abdirahman Abdillahi Nour</h1>
                <p className="text-lg md:text-xl opacity-95">Computer Science Student - Cybersecurity</p>
              </div>
            </div>

            {/* Profile Section */}
            <section className="mb-12">
              <h2 className="text-sm tracking-[0.2em] uppercase text-[#6B9BA8] mb-4 border-b-2 border-[#6B9BA8] pb-2">
                Profile
              </h2>
              <p className="text-gray-700 leading-relaxed">
                I am a final year Computer Science student specializing in cybersecurity, networking, Django backend, cloud computing, 
                and penetration testing. I am seeking internship opportunities to apply my skills in real-world environments and contribute 
                to innovative projects. I am passionate about solving complex problems and enhancing security systems.
              </p>
            </section>

            {/* Skills Section */}
            <section className="mb-12">
              <h2 className="text-sm tracking-[0.2em] uppercase text-[#6B9BA8] mb-6 border-b-2 border-[#6B9BA8] pb-2">
                Skills
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Languages & Databases</h3>
                  <p className="text-gray-700">Java, Python, JavaScript (React), PostgreSQL, MySQL</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Penetration Testing</h3>
                  <p className="text-gray-700">
                    Network Penetration Testing, Web Application Penetration Testing, OWASP Top 10 Testing, 
                    Vulnerability Assessment, Burp Suite, Metasploit, Nmap, Wireshark, Nessus
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Web Development</h3>
                  <p className="text-gray-700">HTML, CSS, JavaScript, Django</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cloud & DevOps</h3>
                  <p className="text-gray-700">AWS (EC2, S3, Lambda), Docker, Kubernetes</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Version Control</h3>
                  <p className="text-gray-700">Git, GitHub</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Other Skills</h3>
                  <p className="text-gray-700">Problem-Solving, Communication, Teamwork, Leadership</p>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section className="mb-12">
              <h2 className="text-sm tracking-[0.2em] uppercase text-[#6B9BA8] mb-6 border-b-2 border-[#6B9BA8] pb-2">
                Experience
              </h2>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">Leader of Sudo Bug Bounty Team</h3>
                    <span className="text-sm text-gray-600 whitespace-nowrap ml-4">July 2025 – Present</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Capture The Flag Hackathon 2025 v3.0</p>
                  <p className="text-gray-700 leading-relaxed">
                    Led the team in cybersecurity challenges during the Capture The Flag Hackathon.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">School Committee Member</h3>
                    <span className="text-sm text-gray-600 whitespace-nowrap ml-4">Nov 2024 – Nov 2025</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Albukhary International University</p>
                  <p className="text-gray-700 leading-relaxed">
                    EXCO of Event and Management. Organized events and contributed to committee goals. 
                    Collaborated with university departments to secure funding for student-led projects and initiatives.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">Full-Stack Developer</h3>
                    <span className="text-sm text-gray-600 whitespace-nowrap ml-4">Mar 2025 – Dec 2025</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">BMC School Full Management System</p>
                  <p className="text-gray-700 leading-relaxed">
                    Developed the full management system using Django, MySQL, and React. Improved speed and performance by 30% 
                    through code optimization and lazy loading techniques. Enhanced UI/UX based on user feedback, resulting in 
                    a 20% boost in user engagement.
                  </p>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section className="mb-12">
              <h2 className="text-sm tracking-[0.2em] uppercase text-[#6B9BA8] mb-6 border-b-2 border-[#6B9BA8] pb-2">
                Projects
              </h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">BMC School Full Management System</h3>
                    <span className="text-sm text-gray-600 whitespace-nowrap ml-4">Mar 2025 – Dec 2025</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Developing a production-scale university resource hub using React and Django REST Framework.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">IoT (Internet of Things) Obstacle Avoidance</h3>
                    <span className="text-sm text-gray-600 whitespace-nowrap ml-4">Dec 2025 – Jan 2026</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Engineered a scalable IoT obstacle avoidance system using real-time sensor integration for optimized 
                    autonomous navigation.
                  </p>
                </div>
              </div>
            </section>

            {/* Honors & Awards Section */}
            <section>
              <h2 className="text-sm tracking-[0.2em] uppercase text-[#6B9BA8] mb-6 border-b-2 border-[#6B9BA8] pb-2">
                Honors & Awards
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Yasan Foundation Scholarship</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    For academic excellence and community service
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Dean's List (All 4 Semesters)</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Albukhary International University
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}