import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowDown, Download, ExternalLink, MapPin, Phone } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fadeInUp">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-background">Hi, I'm</span>
                <br />
                <span className="hero-text">Sibin Paulraj</span>
              </h1>
              <div className="text-xl lg:text-2xl text-background/90 font-medium">
                IoT Engineer & Software Developer
              </div>
              <p className="text-lg text-background/80 leading-relaxed max-w-2xl">
                Undergraduate specialist in autonomous systems with expertise in IoT architectures, 
                ROS-based navigation, and AI-driven automation. Passionate about creating innovative 
                solutions for smart infrastructure and aviation technology.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Card className="glass-effect border-background/20 px-4 py-2">
                <div className="flex items-center gap-2 text-black">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium">Chennai, Tamil Nadu</span>
                </div>
              </Card>
              <Card className="glass-effect border-background/20 px-4 py-2">
                <div className="flex items-center gap-2 text-black">
                  <Phone className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium">+91 8122719696</span>
                </div>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-background text-primary hover:bg-background/90 shadow-glow" asChild>
                <a href="https://drive.google.com/file/d/1rF_1SILU5oTw4Sx4XwLnHrjW1ihE-GtP/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-background/30 text-black hover:bg-background/10 backdrop-blur-sm"
                asChild
              >
                <a href="#projects">
                  View My Work
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-background">6+</div>
                <div className="text-sm text-background/70">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-background">8.62</div>
                <div className="text-sm text-background/70">CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-background">4+</div>
                <div className="text-sm text-background/70">Hackathons</div>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slideInRight">
            <Card className="relative p-8 bg-gradient-card border-background/20 shadow-strong">
              <div className="relative">
                <img
                  src={profilePhoto}
                  alt="Sibin Paulraj"
                  className="w-80 h-80 rounded-2xl object-cover shadow-medium"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent"></div>
                {/* Floating accent */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full blur-lg opacity-50 animate-pulse delay-500"></div>
              </div>
            </Card>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-background/70 hover:text-background"
            asChild
          >
            <a href="#about">
              <ArrowDown className="h-6 w-6" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;