"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin, Instagram } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-t from-gray-900 to-black"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            As an Information Systems student at UI with experience in software
            engineering, I'm open to internship opportunities, collaborative
            projects, and career development opportunities in technology. Let's
            connect and create something amazing together!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <Card className="bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-white">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a
                        href="mailto:martinmtarigan7@gmail.com"
                        className="text-white hover:text-primary transition-colors"
                      >
                        martinmtarigan7@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <a
                        href="tel:+6281381353104"
                        className="text-white hover:text-primary transition-colors"
                      >
                        +62 813 8135 3104
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white">Jakarta, Indonesia</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Let's Collaborate */}
            <Card className="bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-white">
                  Let's Collaborate
                </h3>
                <div className="space-y-4 mb-8">
                  <p className="text-gray-400">
                    I'm always excited to work on new projects and collaborate
                    with like-minded individuals and teams.
                  </p>
                  <p className="text-gray-400">
                    Whether you have a project idea, need a development partner,
                    or want to discuss opportunities, I'd love to hear from you.
                  </p>
                </div>

                <div className="space-y-4">
                  <Button asChild className="w-full">
                    <a href="mailto:martinmtarigan7@gmail.com">
                      <Mail className="h-4 w-4 mr-2" />
                      Send me an Email
                    </a>
                  </Button>

                  <Button variant="outline" asChild className="w-full">
                    <a href="tel:+6281381353104">
                      <Phone className="h-4 w-4 mr-2" />
                      Give me a Call
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Media Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6 text-white">Follow Me</h3>
            <div className="flex justify-center space-x-6">
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://www.linkedin.com/in/martin-tarigan-cr7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Linkedin className="h-5 w-5 mr-2 group-hover:text-primary transition-colors" />
                  LinkedIn
                </a>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://github.com/MartinTarigan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Github className="h-5 w-5 mr-2 group-hover:text-primary transition-colors" />
                  GitHub
                </a>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://www.instagram.com/martinmt7_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Instagram className="h-5 w-5 mr-2 group-hover:text-primary transition-colors" />
                  Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
