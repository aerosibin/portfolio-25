import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Target, Users } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "Academic Excellence",
      description: "CGPA: 8.62 (SEM IV) at Shiv Nadar University Chennai",
      highlight: "Top Performer"
    },
    {
      icon: Target,
      title: "Hackathon Success",
      description: "1st Place at Itrix'25, College of Engineering Guindy, Anna University, Chennai",
      highlight: "Elite Competitor"
    },
    {
      icon: Users,
      title: "Leadership Role",
      description: "Senior Core Committee Member, SNUC Potential Robotics Club",
      highlight: "Team Leader"
    },
    {
      icon: GraduationCap,
      title: "Dual Education",
      description: "Pursuing B.Tech CSE (IoT) + B.Sc Data Science (IIT Madras)",
      highlight: "Versatile Learner"
    }
  ];

  const interests = [
    "Autonomous Systems", "IoT Architecture", "Robotics", "AI/ML", 
    "Cloud Computing", "DevOps", "Data Analytics", "Aviation Technology"
  ];

  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="hero-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about creating intelligent systems that bridge the physical and digital worlds. 
            My journey combines deep technical expertise with a vision for transformative technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <Card className="bg-gradient-card shadow-medium hover:shadow-strong transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">My Journey</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Currently pursuing a Bachelor of Technology in Computer Science Engineering with 
                  specialization in Internet of Things (IoT) at Shiv Nadar University Chennai, 
                  while simultaneously completing a Bachelor of Science in Data Science and 
                  Applications from IIT Madras.
                </p>
                <p>
                  My expertise lies in developing scalable IoT architectures for aviation environments, 
                  including autonomous navigation systems and smart infrastructure management. I have 
                  hands-on experience integrating Raspberry Pi, sensor fusion technologies, and 
                  cloud-based analytics to optimize operational efficiency.
                </p>
                <p>
                  With a proven track record in hackathons and technical competitions, I thrive in 
                  collaborative environments where innovation meets practical problem-solving. I'm 
                  actively seeking internship opportunities to gain industry experience and contribute 
                  to cutting-edge projects.
                </p>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="bg-gradient-card shadow-medium">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Areas of Interest</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Achievements */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center lg:text-left mb-8">Key Achievements</h3>
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card shadow-medium hover:shadow-strong transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <achievement.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-lg">{achievement.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {achievement.highlight}
                        </Badge>
                      </div>
                      <p className="text-foreground/70 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-primary border-none shadow-glow max-w-4xl mx-auto">
            <CardContent className="p-12">
              <blockquote className="text-2xl lg:text-3xl font-medium text-primary-foreground leading-relaxed">
                "Learn-Code-Learn-Code-Repeat"
              </blockquote>
              <cite className="text-primary-foreground/80 text-lg mt-4 block">
                — My development philosophy
              </cite>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;