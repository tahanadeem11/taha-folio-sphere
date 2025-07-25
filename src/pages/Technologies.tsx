import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone,
  Globe,
  Palette,
  GitBranch,
  Cpu,
  Shield,
  Zap
} from "lucide-react";

const Technologies = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "text-blue-400",
      skills: [
        { name: "Flutter", level: 95, experience: "1+ years" },
        { name: "Dart", level: 90, experience: "1+ years" },
        { name: "GetX State Management", level: 85, experience: "8 months" },
        { name: "flutter_screenutil", level: 80, experience: "6 months" }
      ]
    },
    {
      title: "Backend & APIs",
      icon: Database,
      color: "text-green-400",
      skills: [
        { name: "REST API Integration", level: 90, experience: "1+ years" },
        { name: "Laravel Backend", level: 75, experience: "6 months" },
        { name: "Firebase", level: 85, experience: "10 months" },
        { name: "PHP", level: 70, experience: "4 months" }
      ]
    },
    {
      title: "Database Technologies",
      icon: Database,
      color: "text-purple-400",
      skills: [
        { name: "Firebase Firestore", level: 85, experience: "10 months" },
        { name: "SQLite", level: 80, experience: "8 months" },
        { name: "Hive (Local DB)", level: 75, experience: "6 months" },
        { name: "MySQL", level: 70, experience: "4 months" }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: Cloud,
      color: "text-orange-400",
      skills: [
        { name: "Git & GitHub", level: 90, experience: "1+ years" },
        { name: "Docker", level: 70, experience: "3 months" },
        { name: "CI/CD Pipelines", level: 65, experience: "2 months" },
        { name: "Linux (Ubuntu, Bash scripting)", level: 75, experience: "4 months" }
      ]
    },
    {
      title: "Integration & Services",
      icon: Globe,
      color: "text-cyan-400",
      skills: [
        { name: "Google Maps API", level: 80, experience: "6 months" },
        { name: "Push Notifications (FCM)", level: 85, experience: "8 months" },
        { name: "Payment Integration", level: 75, experience: "4 months" },
        { name: "Social Media Login", level: 80, experience: "6 months" }
      ]
    },
    {
      title: "Architecture & Patterns",
      icon: Cpu,
      color: "text-red-400",
      skills: [
        { name: "Clean Architecture", level: 80, experience: "6 months" },
        { name: "MVC Pattern", level: 85, experience: "8 months" },
        { name: "MVVM Pattern", level: 75, experience: "5 months" },
        { name: "Dependency Injection", level: 70, experience: "4 months" }
      ]
    }
  ];

  const additionalSkills = [
    { category: "Authentication", skills: ["Firebase Auth", "JWT Tokens", "OAuth"] },
    { category: "Multi-language Support", skills: ["Internationalization", "Localization", "Language Switching"] },
    { category: "Performance", skills: ["App Optimization", "Memory Management", "Lazy Loading"] },
    { category: "Testing", skills: ["Unit Testing", "Widget Testing", "Debug Tools"] },
    { category: "UI/UX", skills: ["Material Design", "Custom Animations", "Responsive Design"] }
  ];

  const learningNext = [
    "React Native",
    "Node.js",
    "Kubernetes",
    "AWS Services",
    "GraphQL",
    "TypeScript"
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-accent-gradient bg-clip-text text-transparent">Technologies</span> & Skills
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My technical expertise and the tools I use to build amazing mobile applications
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="card-gradient p-8 shadow-elegant hover:shadow-glow transition-smooth animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-accent-gradient rounded-lg">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <div className="flex items-center space-x-3">
                          <Badge variant="outline" className="text-xs">
                            {skill.experience}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Additional Skills */}
          <div className="lg:col-span-2">
            <Card className="card-gradient p-8 shadow-elegant">
              <div className="flex items-center space-x-3 mb-8">
                <Palette className="text-primary" size={28} />
                <h2 className="text-2xl font-bold">Additional Skills & Expertise</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {additionalSkills.map((skillGroup, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-lg mb-4 text-primary-glow">
                      {skillGroup.category}
                    </h3>
                    <div className="space-y-3">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Currently Learning */}
            <Card className="card-gradient p-6 shadow-elegant">
              <div className="flex items-center space-x-3 mb-6">
                <Zap className="text-primary" size={24} />
                <h3 className="text-xl font-bold">Currently Learning</h3>
              </div>
              <div className="space-y-3">
                {learningNext.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent-gradient rounded-full animate-pulse"></div>
                    <span className="text-muted-foreground">{tech}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Experience Summary */}
            <Card className="card-gradient p-6 shadow-elegant">
              <div className="flex items-center space-x-3 mb-6">
                <GitBranch className="text-primary" size={24} />
                <h3 className="text-xl font-bold">Experience Summary</h3>
              </div>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-glow">1+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-glow">15+</div>
                  <div className="text-sm text-muted-foreground">Technologies Used</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-glow">8+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </div>
            </Card>

            {/* Specialization */}
            <Card className="card-gradient p-6 shadow-elegant border-primary/20">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="text-primary" size={24} />
                <h3 className="text-lg font-bold">Specialization</h3>
              </div>
              <div className="space-y-3">
                <Badge className="bg-accent-gradient text-white w-full py-2 justify-center">
                  Cross-Platform Mobile Development
                </Badge>
                <Badge className="bg-secondary/50 border-primary w-full py-2 justify-center">
                  Firebase Integration
                </Badge>
                <Badge className="bg-secondary/50 border-primary w-full py-2 justify-center">
                  State Management (GetX)
                </Badge>
              </div>
            </Card>

            {/* Tech Philosophy */}
            <Card className="card-gradient p-6 shadow-elegant">
              <h3 className="text-lg font-bold mb-4">Tech Philosophy</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I believe in <strong className="text-primary-glow">clean, maintainable code</strong> and 
                <strong className="text-primary-glow"> user-centric design</strong>. Always learning new technologies 
                while mastering the fundamentals to deliver <strong className="text-primary-glow">efficient, 
                scalable solutions</strong>.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;