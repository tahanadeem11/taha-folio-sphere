import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, 
  Heart, 
  Target, 
  Lightbulb,
  Coffee,
  Clock,
  Users,
  Trophy
} from "lucide-react";

const About = () => {
  const personalityTraits = [
    {
      icon: Heart,
      title: "Passionate",
      description: "Deeply passionate about mobile development and creating user-centric solutions"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focused on delivering high-quality applications that exceed expectations"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Adept at solving complex problems with innovative and efficient solutions"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Excellent collaboration skills with experience leading development teams"
    }
  ];

  const interests = [
    "Mobile App Development",
    "Cross-Platform Solutions",
    "UI/UX Design",
    "DevOps & Cloud Computing",
    "Machine Learning",
    "Open Source Contributing",
    "Tech Blogging",
    "Gaming"
  ];

  const languageSkills = [
    { language: "English", level: 90 },
    { language: "Urdu", level: 100 }
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-accent-gradient bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get to know more about my journey, personality, and what drives me as a developer
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Professional Summary */}
            <Card className="card-gradient p-8 shadow-elegant">
              <div className="flex items-center space-x-3 mb-6">
                <Code2 className="text-primary" size={28} />
                <h2 className="text-2xl font-bold">Professional Summary</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate and results-driven <strong className="text-primary-glow">Flutter developer</strong> with over 
                  1 year of hands-on experience in creating cross-platform mobile applications. My journey in mobile development 
                  began with a curiosity about how apps work, which quickly evolved into a deep passion for creating 
                  user-centric solutions.
                </p>
                <p>
                  My expertise spans across <strong className="text-primary-glow">Firebase integration, REST APIs, Laravel backend development</strong>, 
                  and responsive UI design. I'm particularly skilled in using <strong className="text-primary-glow">GetX for state management</strong> 
                  and have a strong foundation in solving complex technical challenges.
                </p>
                <p>
                  Currently expanding my knowledge into <strong className="text-primary-glow">DevOps practices</strong> with hands-on 
                  experience in Docker, CI/CD pipelines, and cloud services. I believe in continuous learning and 
                  staying updated with the latest technologies and best practices in mobile development.
                </p>
              </div>
            </Card>

            {/* Personality Traits */}
            <Card className="card-gradient p-8 shadow-elegant">
              <h2 className="text-2xl font-bold mb-6">What Defines Me</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {personalityTraits.map((trait, index) => {
                  const Icon = trait.icon;
                  return (
                    <div key={index} className="flex space-x-4">
                      <div className="p-3 bg-accent-gradient rounded-lg">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{trait.title}</h3>
                        <p className="text-muted-foreground text-sm">{trait.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Interests & Hobbies */}
            <Card className="card-gradient p-8 shadow-elegant">
              <div className="flex items-center space-x-3 mb-6">
                <Coffee className="text-primary" size={28} />
                <h2 className="text-2xl font-bold">Interests & Hobbies</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                    {interest}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Facts */}
            <Card className="card-gradient p-6 shadow-elegant">
              <h3 className="text-xl font-bold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="text-primary" size={20} />
                  <div>
                    <div className="font-medium">Experience</div>
                    <div className="text-sm text-muted-foreground">1+ Years</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Trophy className="text-primary" size={20} />
                  <div>
                    <div className="font-medium">Role</div>
                    <div className="text-sm text-muted-foreground">Flutter Lead (GDSC)</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="text-primary" size={20} />
                  <div>
                    <div className="font-medium">Focus</div>
                    <div className="text-sm text-muted-foreground">Mobile & DevOps</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Language Skills */}
            <Card className="card-gradient p-6 shadow-elegant">
              <h3 className="text-xl font-bold mb-6">Languages</h3>
              <div className="space-y-4">
                {languageSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.language}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>

            {/* Fun Fact */}
            <Card className="card-gradient p-6 shadow-elegant border-primary/20">
              <h3 className="text-xl font-bold mb-4 text-primary-glow">Fun Fact!</h3>
              <p className="text-muted-foreground text-sm">
                My app "Data Transfer: Phone Clone" achieved 5K+ downloads in just 2 weeks! 
                This experience taught me the importance of user feedback and rapid iteration.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;