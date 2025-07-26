import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Code2, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { 
      name: 'GitHub', 
      href: 'https://github.com/aerosibin', 
      icon: Github,
      description: 'View my code repositories'
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/sibin-paulraj-6529bb286/', 
      icon: Linkedin,
      description: 'Connect professionally'
    },
    { 
      name: 'LeetCode', 
      href: 'https://leetcode.com/u/AeroSibin/', 
      icon: Code2,
      description: 'Check my coding practice'
    },
    { 
      name: 'Email', 
      href: 'mailto:aerosibin777@gmail.com', 
      icon: Mail,
      description: 'Send me a message'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-primary opacity-80"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent-glow to-accent"></div>
      
      <div className="max-w-7xl mx-auto section-padding relative z-10">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-2xl font-bold">Sibin Paulraj</h3>
              <p className="text-primary-foreground/80 leading-relaxed max-w-md">
                IoT Engineer & Software Developer passionate about creating intelligent systems 
                that bridge the physical and digital worlds. Currently pursuing B.Tech CSE (IoT) 
                and B.Sc Data Science.
              </p>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <span>📍 Chennai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <span>🎓 Shiv Nadar University Chennai</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <span>🎓 Indian Institute of Technology, Madras</span>
              </div>
                              
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <nav className="space-y-2">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Connect With Me</h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
                  >
                    <social.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm font-medium">{social.name}</div>
                      <div className="text-xs text-primary-foreground/60">{social.description}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <span>© {currentYear} Sibin Paulraj.</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-xs text-primary-foreground/60">
                Built with React, TypeScript & Tailwind CSS
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Motivational Quote */}
        <div className="border-t border-primary-foreground/20 pt-6">
          <div className="text-center">
            <blockquote className="text-lg font-medium text-primary-foreground/90 italic">
              "Learn-Code-Learn-Code-Repeat"
            </blockquote>
            <cite className="text-sm text-primary-foreground/70 mt-2 block">
              — My philosophy for continuous growth
            </cite>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-accent-glow/10 rounded-full blur-2xl -z-10"></div>
      </div>
    </footer>
  );
};

export default Footer;