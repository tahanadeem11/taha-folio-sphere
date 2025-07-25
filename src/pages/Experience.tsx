import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Calendar, 
  ExternalLink,
  Building,
  TrendingUp,
  Award,
  Download
} from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "LetZyno | PIA ROAD",
      position: "Flutter Developer",
      duration: "Mar 2025 - Present",
      location: "Lahore, Pakistan",
      type: "Full-time",
      description: "Leading cross-platform mobile development initiatives with focus on user experience and performance optimization.",
      achievements: [
        "Ensured cross-device compatibility by making apps responsive for various screen sizes, including tablets and large displays",
        "Optimized app size and load times, reducing unnecessary dependencies and enhancing user retention",
        "Implemented push notifications using Firebase Cloud Messaging (FCM) for real-time user updates",
        "Achieved 5K+ downloads within 2 weeks for a mobile app with 5-star crash reports"
      ],
      technologies: ["Flutter", "Dart", "Firebase", "GetX", "REST APIs", "FCM"]
    },
    {
      company: "Syskosoft | Johar Town",
      position: "Junior Flutter Developer", 
      duration: "June 2024 - Sep 2024",
      location: "Lahore, Pakistan",
      type: "Internship",
      description: "Gained hands-on experience in professional mobile app development and collaborated with senior developers.",
      achievements: [
        "Created multi-language support features for global app usage",
        "Implemented custom animations for smooth UI transitions and improved user experience",
        "Developed reusable widgets and components to ensure maintainable and scalable code across multiple projects",
        "Integrated third-party services and SDKs such as Google Maps, Payment Gateways, and social media login (Google, Facebook)"
      ],
      technologies: ["Flutter", "Dart", "Google Maps", "Payment Integration", "Multi-language", "Social Auth"]
    }
  ];

  const achievements = [
    {
      title: "Flutter Lead",
      organization: "Google Developer Student Club",
      year: "2022",
      description: "Awarded Flutter Lead position for outstanding technical skills and leadership in mobile development"
    },
    {
      title: "App Success",
      organization: "Data Transfer: Phone Clone",
      year: "2024",
      description: "Achieved 5K+ downloads in 2 weeks with excellent user ratings and feedback"
    },
    {
      title: "Bug Fix Champion",
      organization: "Multiple Projects",
      year: "2024", 
      description: "Successfully fixed all reported bugs and implemented user feedback across various applications"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="bg-accent-gradient bg-clip-text text-transparent">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey in mobile development and the impact I've made
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2 space-y-8">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-accent-gradient"></div>
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative mb-12 animate-slide-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 w-4 h-4 bg-accent-gradient rounded-full border-4 border-background"></div>
                  
                  {/* Experience Card */}
                  <div className="ml-16">
                    <Card className="card-gradient p-8 shadow-elegant hover:shadow-glow transition-smooth">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-primary-glow">{exp.position}</h3>
                          <div className="flex items-center space-x-2 mt-2">
                            <Building className="text-primary" size={18} />
                            <span className="text-lg font-semibold">{exp.company}</span>
                            <Badge variant="secondary">{exp.type}</Badge>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
                          <ExternalLink size={16} className="mr-2" />
                          View Details
                        </Button>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Calendar size={18} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <MapPin size={18} />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 flex items-center">
                          <TrendingUp className="text-primary mr-2" size={18} />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground text-sm leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <Badge key={i} variant="outline" className="border-primary/50 text-primary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Achievements */}
            <Card className="card-gradient p-6 shadow-elegant">
              <div className="flex items-center space-x-3 mb-6">
                <Award className="text-primary" size={24} />
                <h3 className="text-xl font-bold">Achievements</h3>
              </div>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-4">
                    <h4 className="font-semibold text-primary-glow">{achievement.title}</h4>
                    <p className="text-sm font-medium text-muted-foreground">{achievement.organization}</p>
                    <p className="text-xs text-muted-foreground mb-2">{achievement.year}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Download CV */}
            <Card className="card-gradient p-6 shadow-elegant border-primary/20">
              <h3 className="text-lg font-bold mb-4">Interested in my work?</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Download my complete CV for detailed information about my experience and skills.
              </p>
              <Button className="w-full bg-accent-gradient hover:shadow-glow transition-smooth">
                <Download size={18} className="mr-2" />
                Download CV
              </Button>
            </Card>

            {/* Contact for Opportunities */}
            <Card className="card-gradient p-6 shadow-elegant">
              <h3 className="text-lg font-bold mb-4">Available for Work</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Currently open to new opportunities in mobile development and DevOps.
              </p>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                ● Available Now
              </Badge>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;