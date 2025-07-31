import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MonitorSmartphone,
  Cpu,
  Smartphone,
  Users,
  Map,
  Database,
  Telescope,
  Award,
} from "lucide-react";
import Image from "next/image";

export function About() {
  const features = [
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Flutter applications with BLoC state management, offline sync, and Play Store deployment",
      technologies: ["Flutter", "Dart", "BLoC", "Firebase"],
    },
    {
      icon: Cpu,
      title: "Backend Development",
      description:
        "Scalable REST APIs and microservices with clean architecture principles",
      technologies: ["Spring Java", "Django", "PostgreSQL", "Go"],
    },
    {
      icon: MonitorSmartphone,
      title: "Full Stack Development",
      description:
        "End-to-end web applications from responsive frontends to robust databases",
      technologies: ["Next.js", "React", "Vue.js", "TypeScript"],
    },
    {
      icon: Users,
      title: "Teaching & Mentoring",
      description:
        "Guided 400+ students in programming fundamentals and software engineering practices",
      technologies: ["Teaching", "Mentoring", "Curriculum Design"],
    },
  ];

  const stats = [
    { number: "2+", label: "Years of Experience" },
    { number: "4+", label: "Projects Completed" },
    { number: "400+", label: "Students Mentored" },
    { number: "5+", label: "Technologies Mastered" },
  ];

  const skills = [
    "Flutter",
    "Spring Java",
    "Django",
    "Next.js",
    "React",
    "Vue.js",
    "PostgreSQL",
    "TypeScript",
    "Go",
    "REST APIs",
    "Git",
    "Docker",
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            About Me
          </h2>
          {/* <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Passionate about building scalable software solutions and mentoring
            the next generation of developers
          </p> */}
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Map className="h-6 w-6 text-primary mr-2" />
                My Journey
              </h3>
              <p className="text-gray-400 leading-relaxed">
                As an Information Systems student at the University of
                Indonesia, I specialize in full-stack software engineering with
                a growing interest in backend architecture and scalable system
                design. My experience spans both mobile and web development,
                including building production-ready applications using modern
                technologies.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white mb-3 flex items-center">
                <Award className="h-5 w-5 text-primary mr-2" />
                Key Achievements
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Led mobile development team at RISTEK Fasilkom UI
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Successfully deployed TVRI CMS app with 100+ installations
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Mentored 400+ students in programming and software engineering
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Built workforce management system for Tens Coffee Indonesia
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white mb-3 flex items-center">
                <Telescope className="h-5 w-5 text-primary mr-2" />
                Current Focus
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Currently exploring Go to deepen my backend engineering skills
                and expand my understanding of high-performance systems. I'm
                passionate about building practical, maintainable solutions that
                solve real problems at scale.
              </p>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-gray-800 text-center"
                >
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-primary">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center flex items-center">
            <Database className="h-6 w-6 text-primary mr-2" />
            Technical Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="border-gray-700 text-gray-300 hover:border-primary hover:text-primary transition-colors px-3 py-1"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <Image
                src="/profile.jpg?height=400&width=400"
                alt="Martin Marcelino Tarigan"
                width={400}
                height={400}
                className="rounded-lg shadow-2xl border border-gray-800 w-full h-auto"
              />
            </div>

            
          </div>
        </div>


        {/* Features Grid */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            What I Do
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all duration-300 group"
              >
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    {feature.description}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {feature.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-gray-800 text-gray-300 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
