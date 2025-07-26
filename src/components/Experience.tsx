import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ExternalLink, Trophy, Users, Zap } from "lucide-react";

const Experience = () => {
  const projects = [
    {
      title: "TragerX - Autonomous Smart Trolley System",
      company: "Shiv Nadar University",
      period: "February 2025 – April 2025",
      type: "Project Lead",
      location: "Chennai, Tamil Nadu",
      description: [
        "Planned and implemented TragerX, an autonomous IoT-based smart trolley system enhancing mobility and automation for airports and industrial environments",
        "Developed real-time SLAM navigation and A* pathfinding algorithms for autonomous luggage handling, leveraging Raspberry Pi, ROS Humble, and sensor fusion (HC-SR04, FPV camera)",
        "Engineered user-centric features including app-based trolley requests, QR code integration, and multi-channel passenger communication (voice, app notifications)",
        "Optimized the turning mechanism for 40% better maneuverability and 20% lower power consumption"
      ],
      technologies: ["Raspberry Pi", "ROS Humble", "Python", "SLAM", "Computer Vision", "IoT"],
      highlights: ["40% Better Maneuverability", "20% Power Reduction", "Real-time Navigation"]
    },
    {
      title: "ZeroWasteX - Smart Waste Management",
      company: "Shiv Nadar University",
      period: "May 2025 – June 2025",
      type: "Technical Lead",
      location: "Chennai, Tamil Nadu",
      description: [
        "Engineered a computer vision-based layered screening solution to automate waste classification and maximize resource recovery",
        "Integrated IoT hardware and cloud-based data analytics for real-time waste tracking and predictive modeling",
        "Enabled circular economy practices by repurposing waste into high-value products, reducing landfill emissions, and supporting SDG goals"
      ],
      technologies: ["Computer Vision", "IoT", "Cloud Analytics", "Machine Learning", "Python"],
      highlights: ["Automated Classification", "SDG Compliance", "Circular Economy"]
    },
    {
      title: "Eventrix - AI-Driven Event Management Platform",
      company: "Indian Institute of Technology Madras",
      period: "May 2025 – June 2025",
      type: "Full-Stack Developer",
      location: "Chennai, Tamil Nadu",
      description: [
        "Developed a Next-Gen event management and community collaboration platform leveraging AI-driven automation and assistance",
        "Integrated a natural language processing chatbot for instant user support, voice-assisted navigation, and multilingual accessibility",
        "Proposed future enhancements including blockchain-based ticketing and personalized event recommendations to further elevate user experience and operational efficiency"
      ],
      technologies: ["Next.js", "AI/NLP", "TypeScript", "Blockchain", "Voice Recognition"],
      highlights: ["AI Integration", "Multilingual Support", "Voice Navigation"]
    }
  ];

  const leadership = [
    {
      title: "Senior Core Committee Member",
      organization: "SNUC Potential - Robotics Club",
      period: "August 2024 – Present",
      description: "Leading the club to conduct various events for junior students, fostering robotics education and innovation",
      icon: Users
    },
    {
      title: "Hackathon Winner - Itrix",
      organization: "College of Engineering, Guindy, Anna University",
      period: "April 2025",
      description: "Led a team of 4 to victory in Project Presentation competition",
      icon: Trophy
    },
    {
      title: "Hackathon Runner-up",
      organization: "IIITDM, Kancheepuram - IoT-Verse Hackathon",
      period: "April 2025",
      description: "Achieved runner-up position in Samgatha × Vashisht hackathon",
      icon: Zap
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/50 relative">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="hero-text">Experience & Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driving innovation through hands-on projects and leadership in cutting-edge technology domains
          </p>
        </div>

        {/* Project Experience */}
        <div className="space-y-8 mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Featured Projects</h3>
          {projects.map((project, index) => (
            <Card key={index} className="bg-card shadow-medium hover:shadow-strong transition-all duration-300 group">
              <CardHeader className="border-b border-border/50">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-primary group-hover:text-primary-glow transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{project.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                      <Badge variant="outline">{project.type}</Badge>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <Badge key={idx} className="bg-accent/10 text-accent border-accent/20">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3">{project.company}</h4>
                  <ul className="space-y-3">
                    {project.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-foreground/80">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-border/50 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leadership & Achievements */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Leadership & Recognition</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((item, index) => (
              <Card key={index} className="bg-gradient-card shadow-medium hover:shadow-strong transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-accent font-medium mb-3">{item.organization}</p>
                  <p className="text-xs text-muted-foreground mb-3">{item.period}</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-primary border-none shadow-glow max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Ready to collaborate on your next project?
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Let's build something amazing together with cutting-edge technology
              </p>
              <Button 
                size="lg" 
                className="bg-background text-primary hover:bg-background/90"
                asChild
              >
                <a href="#contact">
                  Get In Touch
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;