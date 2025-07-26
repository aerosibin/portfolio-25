import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Code2, 
  Send,
  Calendar,
  MessageSquare,
  ExternalLink
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend service
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "aerosibin777@gmail.com",
      href: "mailto:aerosibin777@gmail.com",
      description: "Feel free to reach out for collaborations or opportunities"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8122719696",
      href: "tel:+918122719696",
      description: "Available for calls during business hours (IST)"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Chennai, Tamil Nadu, India",
      href: "https://maps.google.com/?q=Chennai,Tamil+Nadu,India",
      description: "Based in Chennai, open to remote opportunities"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      username: "@aerosibin",
      href: "https://github.com/aerosibin",
      description: "Check out my latest projects and contributions",
      color: "text-gray-700 hover:text-gray-900"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      username: "Sibin Paulraj",
      href: "https://www.linkedin.com/in/sibin-paulraj-6529bb286/",
      description: "Connect with me professionally",
      color: "text-blue-600 hover:text-blue-700"
    },
    {
      icon: Code2,
      title: "LeetCode",
      username: "@AeroSibin",
      href: "https://leetcode.com/u/AeroSibin/",
      description: "View my coding practice and achievements",
      color: "text-orange-600 hover:text-orange-700"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="hero-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities? 
            I'm always excited to work on challenging problems with cutting-edge technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <Card className="bg-gradient-card shadow-medium">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="group">
                    <Button
                      variant="ghost"
                      asChild
                      className="w-full justify-start p-4 h-auto hover:bg-primary/45"
                    >
                      <a href={contact.href} target="_blank" rel="noopener noreferrer">
                        <div className="flex items-start gap-4">
                          <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <contact.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="text-left">
                            <h4 className="font-semibold text-sm">{contact.title}</h4>
                            <p className="text-primary font-medium">{contact.value}</p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {contact.description}
                            </p>
                          </div>
                        </div>
                      </a>
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-gradient-card shadow-medium">
              <CardHeader>
                <CardTitle className="text-xl">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <div key={index} className="group">
                    <Button
                      variant="ghost"
                      asChild
                      className="w-full justify-start p-4 h-auto hover:bg-primary/45"
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <div className="flex items-start gap-4">
                          <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <social.icon className={`h-5 w-5 ${social.color}`} />
                          </div>
                          <div className="text-left flex-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold text-sm">{social.title}</h4>
                              <ExternalLink className="h-3 w-3 text-muted-foreground" />
                            </div>
                            <p className="text-primary font-medium">{social.username}</p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {social.description}
                            </p>
                          </div>
                        </div>
                      </a>
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-gradient-primary border-none shadow-glow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary-foreground mb-4">
                  Currently Available For
                </h3>
                <div className="space-y-3 text-primary-foreground/90">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Internship Opportunities</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Freelance Projects</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Technical Collaborations</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Open Source Contributions</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Action Section */}
        <div className="mt-16 text-center">
          <Card className="bg-muted/50 border-dashed">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you have a project in mind, want to discuss opportunities, or just want to chat about technology, 
                I'm always open to meaningful conversations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="mailto:aerosibin777@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://www.linkedin.com/in/sibin-paulraj-6529bb286/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;