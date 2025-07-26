import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, 
  Database, 
  Cpu, 
  Cloud, 
  Smartphone, 
  Brain, 
  GitBranch, 
  Globe,
  Settings,
  Zap
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      skills: [
        { name: "Python", level: 90, description: "Advanced proficiency in data science, AI/ML, and automation" },
        { name: "C++", level: 85, description: "Strong foundation in algorithms and competitive programming" },
        { name: "Embedded C", level: 80, description: "Hardware programming and IoT device development" },
        { name: "JavaScript/TypeScript", level: 75, description: "Full-stack web development and modern frameworks" },
        { name: "SQL", level: 80, description: "Database design, optimization, and complex queries" }
      ]
    },
    {
      title: "Frameworks & Technologies",
      icon: Zap,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      skills: [
        { name: "ROS (Robot Operating System)", level: 85, description: "Autonomous navigation and robotics systems" },
        { name: "React/Next.js", level: 80, description: "Modern web application development" },
        { name: "Raspberry Pi", level: 90, description: "IoT prototyping and embedded systems" },
        { name: "OpenCV", level: 75, description: "Computer vision and image processing" },
        { name: "Streamlit", level: 85, description: "Rapid prototyping and data applications" }
      ]
    },
    {
      title: "Data Science & Analytics",
      icon: Brain,
      color: "text-green-600",
      bgColor: "bg-green-100",
      skills: [
        { name: "Machine Learning", level: 80, description: "Predictive modeling and AI algorithm implementation" },
        { name: "Data Analysis", level: 85, description: "Statistical analysis and insight generation" },
        { name: "NumPy/Pandas", level: 90, description: "Advanced data manipulation and processing" },
        { name: "Data Visualization", level: 75, description: "Creating meaningful charts and dashboards" },
        { name: "Business Analytics", level: 70, description: "Translating data insights into business value" }
      ]
    },
    {
      title: "IoT & Hardware",
      icon: Cpu,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      skills: [
        { name: "Sensor Integration", level: 85, description: "LIDAR, cameras, and multi-sensor fusion" },
        { name: "Arduino/Microcontrollers", level: 80, description: "Hardware prototyping and control systems" },
        { name: "SLAM Navigation", level: 80, description: "Simultaneous localization and mapping" },
        { name: "IoT Architecture", level: 85, description: "Scalable IoT system design and implementation" },
        { name: "Embedded Systems", level: 75, description: "Real-time systems and low-level programming" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "text-cyan-600",
      bgColor: "bg-cyan-100",
      skills: [
        { name: "Cloud Computing", level: 75, description: "AWS, deployment, and cloud-based analytics" },
        { name: "DevOps Practices", level: 70, description: "CI/CD pipelines and automation" },
        { name: "Git/Version Control", level: 85, description: "Advanced Git workflows and collaboration" },
        { name: "Docker/Containerization", level: 65, description: "Application containerization and deployment" },
        { name: "System Administration", level: 70, description: "Unix/Linux systems and server management" }
      ]
    },
    {
      title: "Soft Skills & Process",
      icon: Globe,
      color: "text-pink-600",
      bgColor: "bg-pink-100",
      skills: [
        { name: "Agile/Scrum", level: 80, description: "Agile methodology and team collaboration" },
        { name: "Technical Leadership", level: 85, description: "Leading technical teams and mentoring" },
        { name: "Problem Solving", level: 90, description: "Analytical thinking and solution architecture" },
        { name: "Communication", level: 85, description: "Technical documentation and presentations" },
        { name: "Project Management", level: 75, description: "End-to-end project planning and execution" }
      ]
    }
  ];

  const certifications = [
    { name: "Data Structures & Algorithms", provider: "Self-taught", level: "Advanced" },
    { name: "Database Management", provider: "Academic", level: "Intermediate" },
    { name: "Operating Systems", provider: "Academic", level: "Intermediate" },
    { name: "Design & Analysis of Algorithms", provider: "Academic", level: "Advanced" }
  ];

  const languages = [
    { name: "English", level: "Fluent", proficiency: 95 },
    { name: "Tamil", level: "Native", proficiency: 100 }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="hero-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning software engineering, IoT systems, data science, 
            and emerging technologies - continuously evolving with industry trends
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gradient-card shadow-medium hover:shadow-strong transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className={`p-2 rounded-lg ${category.bgColor}`}>
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <h4 className="font-medium text-sm">{skill.name}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Certifications & Academic Skills */}
          <Card className="bg-gradient-card shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-yellow-100">
                  <Settings className="h-6 w-6 text-yellow-600" />
                </div>
                Academic & Professional Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-sm">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground">{cert.provider}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {cert.level}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="bg-gradient-card shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-100">
                  <Globe className="h-6 w-6 text-indigo-600" />
                </div>
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-sm">{lang.name}</h4>
                    <span className="text-xs text-muted-foreground">{lang.level}</span>
                  </div>
                </div>
              ))}
              <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                <p className="text-xs text-muted-foreground">
                  <strong>Communication:</strong> Excellent written and verbal communication in both languages, 
                  experienced in technical documentation and presentations
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Summary */}
        <Card className="bg-gradient-primary border-none shadow-glow">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Technology Stack Summary
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <div>
                <div className="text-3xl font-bold text-primary-foreground">10+</div>
                <div className="text-primary-foreground/80 text-sm">Programming Languages</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-foreground">25+</div>
                <div className="text-primary-foreground/80 text-sm">Technologies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-foreground">5+</div>
                <div className="text-primary-foreground/80 text-sm">Cloud Platforms</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-foreground">15+</div>
                <div className="text-primary-foreground/80 text-sm">Tools & Frameworks</div>
              </div>
            </div>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto">
              Constantly learning and adapting to new technologies. My diverse skill set enables me to 
              tackle complex challenges across the full technology stack, from embedded systems to cloud architecture.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;