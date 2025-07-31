import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "Golang", "JavaScript", "TypeScript", "Dart"],
    },
    {
      title: "Frameworks & Technologies",
      skills: ["Spring Java", "Flutter", "Next.js", "Django", "React", "PostgreSQL", "Docker"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Figma", "Warp", "Postman"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Skill</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            The technology and tools that I master to develop the best digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-center text-white">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-gray-800 text-gray-300 hover:bg-primary hover:text-black transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
