import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Menu, X, Github, Linkedin, Mail, Code2, ExternalLink } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/aerosibin', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sibin-paulraj-6529bb286/', icon: Linkedin },
    { name: 'LeetCode', href: 'https://leetcode.com/u/AeroSibin/', icon: Code2 },
    { name: 'Email', href: 'mailto:aerosibin777@gmail.com', icon: Mail }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/100 backdrop-blur-md shadow-soft' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto section-padding">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold hero-text">Sibin Paulraj</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/100 hover:text-orange-500 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="hidden lg:flex items-center space-x-3">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="sm"
                asChild
                className="hover:bg-primary/50"
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <link.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
            <Button asChild className="ml-4">
              <a href="#contact">
                Get In Touch
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2 shadow-medium">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-2 px-3 py-2">
                {socialLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="ghost"
                    size="sm"
                    asChild
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <link.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;