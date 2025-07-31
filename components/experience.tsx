import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Lead of Mobile Development",
      company: "RISTEK Fasilkom UI",
      location: "Depok, ID",
      period: "Mar 2025 - Present",
      type: "Leadership",
      description: [
        "Leading mobile development team in various digital innovation projects",
        "Achieved 'Best Growth' award at RISTEK Awards Q1 2024",
        "Developing CMS for TVRI mobile application using Flutter",
      ],
      technologies: ["Flutter", "Leadership", "Project Management"],
    },
    {
      title: "Software Engineer - Intern",
      company: "BangSoal",
      location: "Jakarta, ID",
      period: "Aug 2024 - Oct 2024",
      type: "Internship",
      description: [
        "Developed mobile applications with Flutter to expand platform accessibility",
        "Performed refactoring and improved state management implementation efficiency",
      ],
      technologies: ["Flutter", "State Management", "Mobile Development"],
    },
    {
      title: "Software Engineer - Contract",
      company: "TVRI",
      location: "Jakarta, ID",
      period: "May 2024 - Aug 2024",
      type: "Contract",
      description: [
        "Developed core application features using Flutter including task management and survey management",
        "Designed and implemented offline functionality with automatic data synchronization",
        "Successfully launched application on Google Play Store with 100+ installations",
      ],
      technologies: [
        "Flutter",
        "Offline Sync",
        "Google Play Store",
        "Task Management",
      ],
    },
    {
      title: "Teaching Assistant - Multiple Courses",
      company: "Faculty of Computer Science, Universitas Indonesia",
      location: "Depok, ID",
      period: "Aug 2023 - Present",
      type: "Part-time",
      description: [
        "TA for Foundations of Programming 2, Platform Based Programming, Calculus 1, and Discrete Mathematics 1",
        "Mentored 400+ students through interactive tutorials and weekly assignment reviews",
        "Developed learning modules for Web & Mobile Development (Django and Flutter)",
      ],
      technologies: [
        "Django",
        "Flutter",
        "Teaching",
        "Web Development",
        "Mobile Development",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Experience
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My professional journey in the world of software engineering and
            technology.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-white text-xl">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-primary font-semibold text-lg">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <Badge
                      variant="outline"
                      className="border-primary text-primary w-fit"
                    >
                      {exp.type}
                    </Badge>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((desc, descIndex) => (
                    <li
                      key={descIndex}
                      className="text-gray-300 flex items-start"
                    >
                      <span className="text-primary mr-2">•</span>
                      {desc}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-gray-800 text-gray-300"
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
    </section>
  );
}
