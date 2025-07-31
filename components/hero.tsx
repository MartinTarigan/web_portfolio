"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Hero() {
  const greetings = [
    { text: "Hello, I'm", lang: "en" },
    { text: "Hola, Soy", lang: "es" },
    { text: "Halo, Saya", lang: "id" },
    { text: "Bonjour, Je suis", lang: "fr" },
    { text: "Ciao, Sono", lang: "it" },
    { text: "Hallo, Ich bin", lang: "de" },
    { text: "Olá, Eu sou", lang: "pt" },
    { text: "Привет, Я", lang: "ru" },
  ];

  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentGreeting((prev) => (prev + 1) % greetings.length);
        setIsTransitioning(false);
      }, 300); // Half of transition duration
    }, 1000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [greetings.length]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <Image
              src="/photo.jpg?height=128&width=128"
              alt="Profile"
              fill
              className="rounded-full border-4 border-primary/30"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
              <span
                className={`inline-block transition-all duration-300 ease-in-out ${
                  isTransitioning
                    ? "opacity-0 transform -translate-y-2"
                    : "opacity-100 transform translate-y-0"
                }`}
              >
                {greetings[currentGreeting].text}
              </span>{" "}
              <span className="gradient-text">Martin Marcelino Tarigan</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Software Engineer & Information Systems Student
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Information Systems student at Universitas Indonesia dedicated to
              developing software engineering skills through practical projects
              and industry experience.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild>
              <a href="#projects">View My Projects</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/martin-tarigan-cr7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/MartinTarigan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.instagram.com/martinmt7_/">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
