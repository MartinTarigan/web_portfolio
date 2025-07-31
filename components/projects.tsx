import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export function Projects() {
  const projects = [
    {
      title: "Rumah BarisTens - Internal System Management",
      description:
        "A comprehensive workforce management solution for Tens Coffee Indonesia that boosts staff productivity and operational efficiency with smart scheduling and analytics dashboard.",
      image: "/tens.png?height=300&width=400",
      technologies: [
        "Spring Java",
        "Next.js",
        "PostgreSQL",
        "REST API",
        "Analytics Dashboard",
      ],
      liveUrl: "#",
      githubUrl1: "https://github.com/MartinTarigan/c6-profancy-fe",
      githubUrl2: "https://github.com/RumahBarisTens/RumahBarisTens.BE",
    },
    {
      title: "TVRI CMS Mobile Application",
      description:
        "Mobile Content Management System app for TVRI featuring BLoC Cubit state management, RESTful API integration, and clean architecture for optimal scalability.",
      image: "/tvri.png?height=300&width=400",
      technologies: ["Flutter", "BLoC Cubit", "REST API", "Clean Architecture"],
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.tvri.citizenjournalism&hl=en_US",
      githubUrl1: "#",
    },
    {
      title: "Literalink - Literature Ecosystem",
      description:
        "A complete literature ecosystem app with book delivery, borrowing, reading cafe booking, and book discussion forum, developed as a final project for the PBP course.",
      image: "/literalink.png?height=300&width=400",
      technologies: ["Django", "PostgreSQL", "Python", "Web Development"],
      liveUrl:
        "https://www.figma.com/design/y9cJvggomJcYm8pAJzkZju/LiteraLink-Design?node-id=1034-213&t=8rZsFdX5gxDTlfL3-0",
      githubUrl1: "https://github.com/LiteraLink/LiteraLink-Mobile",
      githubUrl2: "https://github.com/LiteraLink/LiteraLink",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Latest Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Some of the projects I've worked on using modern technologies and
            best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription className="text-gray-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="border-gray-700 text-gray-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {/* Live Demo Button - only show if not # */}
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <Button size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}

                  {/* Frontend Source Code Button */}
                  {project.githubUrl1 && project.githubUrl1 !== "#" && (
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.githubUrl1}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Frontend
                      </a>
                    </Button>
                  )}

                  {/* Backend Source Code Button */}
                  {project.githubUrl2 && project.githubUrl2 !== "#" && (
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.githubUrl2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Backend
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
