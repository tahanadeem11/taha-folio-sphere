import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Github, 
  Download, 
  Star,
  Eye,
  Calendar,
  Code,
  Smartphone,
  Brain,
  ShoppingCart,
  BookOpen,
  Award,
  TrendingUp
} from "lucide-react";

const Projects = () => {
  const featuredProjects = [
    {
      title: "ISLAME - Islamic Learning App",
      subtitle: "Complete Islamic Learning & Quran Education Platform",
      description: "Master the Holy Quran with the most comprehensive Islamic education app. Learn Tajweed, read translations, find accurate prayer times, and connect with qualified Qaris worldwide.",
      image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3",
      category: "Mobile App",
      type: "Production App",
      technologies: ["Flutter", "Dart", "Firebase", "GetX", "REST API", "FCM", "Audio Streaming"],
      features: [
        "📖 Complete Quran with multiple translations",
        "🔊 Audio recitation with Tajweed guidance", 
        "⏰ Accurate prayer times based on location",
        "👨‍🏫 Connect with qualified Qaris",
        "📚 Islamic learning modules",
        "🌙 Beautiful Islamic UI design"
      ],
      stats: {
        downloads: "5K+",
        rating: "4.8",
        users: "2K+"
      },
      status: "Live",
      links: {
        demo: "#",
        github: "#",
        download: "#"
      }
    },
    {
      title: "Data Transfer: Phone Clone",
      subtitle: "Fast & Secure Phone Data Migration",
      description: "A revolutionary app that achieved 5K+ downloads in just 2 weeks. Seamlessly transfer all your data, apps, and settings from your old phone to a new one with military-grade security.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3",
      category: "Mobile App", 
      type: "Commercial Success",
      technologies: ["Flutter", "Dart", "File Transfer Protocol", "Encryption", "WiFi Direct"],
      features: [
        "📱 Complete phone data migration",
        "🔒 End-to-end encryption",
        "⚡ High-speed WiFi transfer",
        "📊 Real-time transfer progress",
        "🛡️ Data integrity verification",
        "🔄 Automatic retry on failure"
      ],
      stats: {
        downloads: "5K+",
        rating: "4.9",
        timeframe: "2 weeks"
      },
      status: "Live",
      links: {
        demo: "#",
        github: "#",
        download: "#"
      }
    }
  ];

  const academicProjects = [
    {
      title: "Fake News Detection System",
      description: "AI-based system to detect misleading or false information using machine learning algorithms for text classification.",
      category: "Academic Project",
      technologies: ["Machine Learning", "Python", "NLP", "Text Classification"],
      deliverables: ["SRS Document", "DFD & ERD", "Testing Reports", "UI Screens"],
      status: "Completed",
      type: "Machine Learning"
    },
    {
      title: "Food Delivery App UI Clone",
      description: "Pixel-perfect UI implementation with advanced state management and multi-language support.",
      category: "UI/UX Project",
      technologies: ["Flutter", "GetX", "Multi-language", "Custom Animations"],
      features: ["Order Tracking", "Splash Screens", "Onboarding Flow"],
      status: "Completed",
      type: "UI Clone"
    }
  ];

  const projectStats = [
    { icon: Code, label: "Total Projects", value: "15+", color: "text-blue-400" },
    { icon: Download, label: "Total Downloads", value: "10K+", color: "text-green-400" },
    { icon: Star, label: "Average Rating", value: "4.8", color: "text-yellow-400" },
    { icon: Eye, label: "GitHub Views", value: "500+", color: "text-purple-400" }
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-accent-gradient bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing real-world applications and innovative solutions I've built
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {projectStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="card-gradient p-6 text-center shadow-elegant hover:shadow-glow transition-smooth">
                <Icon className={`mx-auto mb-4 ${stat.color}`} size={32} />
                <div className="text-2xl font-bold text-primary-glow">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">Production-ready applications with real users and impact</p>
          </div>

          {featuredProjects.map((project, index) => (
            <Card key={index} className="card-gradient shadow-elegant hover:shadow-glow transition-smooth overflow-hidden animate-slide-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent lg:hidden"></div>
                  <Badge className="absolute top-4 left-4 bg-accent-gradient">
                    {project.type}
                  </Badge>
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="border-primary text-primary">
                      {project.category}
                    </Badge>
                    <Badge className={`${project.status === 'Live' ? 'bg-green-500/20 text-green-400 border-green-500/50' : 'bg-blue-500/20 text-blue-400 border-blue-500/50'}`}>
                      ● {project.status}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <h4 className="text-lg text-primary-glow mb-4">{project.subtitle}</h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="text-sm text-muted-foreground">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-6 mb-6">
                    {Object.entries(project.stats).map(([key, value], statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-lg font-bold text-primary-glow">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <Button className="bg-accent-gradient hover:shadow-glow transition-smooth">
                      <Eye size={16} className="mr-2" />
                      View Demo
                    </Button>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      <Github size={16} className="mr-2" />
                      Source Code
                    </Button>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      <Download size={16} className="mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Academic Projects */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Academic & Learning Projects</h2>
            <p className="text-muted-foreground">Educational projects showcasing different skills and technologies</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {academicProjects.map((project, index) => (
              <Card key={index} className="card-gradient p-8 shadow-elegant hover:shadow-glow transition-smooth">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-primary text-primary">
                    {project.category}
                  </Badge>
                  <Badge variant="secondary">{project.type}</Badge>
                </div>

                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>

                {project.deliverables && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Deliverables</h4>
                    <div className="space-y-2">
                      {project.deliverables.map((deliverable, delIndex) => (
                        <div key={delIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.features && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Features</h4>
                    <div className="space-y-2">
                      {project.features.map((feature, featIndex) => (
                        <div key={featIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                    ✓ {project.status}
                  </Badge>
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
                    <ExternalLink size={16} className="mr-2" />
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="card-gradient p-12 shadow-elegant border-primary/20">
            <Award className="mx-auto mb-6 text-primary" size={48} />
            <h2 className="text-3xl font-bold mb-4">Interested in My Work?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with amazing teams. 
              Let's build something incredible together!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-accent-gradient hover:shadow-glow transition-smooth">
                <Github size={18} className="mr-2" />
                View All Projects
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Get In Touch
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;