import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  ExternalLink,
  Star,
  Code,
  Smartphone
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const achievements = [
    "1+ years Flutter development experience",
    "5K+ app downloads in 2 weeks",
    "Flutter Lead at Google Developer Student Club",
    "Skilled in cross-platform mobile development"
  ];

  const hobbies = [
    "Football is my biggest passion and love",
    "Idol: Cristiano Ronaldo - the GOAT",
    "Favorite Club: Real Madrid - Hala Madrid!",
    "Position: Center Defence like Sergio Ramos & Roberto Carlos"
  ];

  const quickStats = [
    { icon: Code, label: "Projects", value: "15+" },
    { icon: Smartphone, label: "Apps Built", value: "8+" },
    { icon: Star, label: "GitHub Stars", value: "50+" },
    { icon: ExternalLink, label: "Technologies", value: "12+" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-accent-gradient bg-clip-text text-transparent">
                    Taha Nadeem
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-muted-foreground mt-4">
                  Mobile Application & DevOps Enthusiast
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                A passionate and results-driven <strong className="text-primary-glow">Flutter developer</strong> with over{" "}
                <strong className="text-primary-glow">1 year of experience</strong>, skilled in creating cross-platform mobile apps. 
                Strong knowledge of Firebase, REST APIs, Laravel integration, and responsive UI design.
              </p>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="text-primary" size={20} />
                  <span>tahanadeem.gk@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="text-primary" size={20} />
                  <span>03245732932</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="text-primary" size={20} />
                  <span>Lahore, Pakistan</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link to="/about">
                  <Button className="bg-accent-gradient hover:shadow-glow transition-smooth">
                    Learn More About Me
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    View My Work
                  </Button>
                </Link>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Download size={18} className="mr-2" />
                  Download CV
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/tahanadeem11" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 glass-card rounded-lg hover:shadow-glow transition-smooth"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/taha-nadeem-9a6517210/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 glass-card rounded-lg hover:shadow-glow transition-smooth"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end animate-slide-in">
              <div className="relative">
                <div className="w-96 h-96 rounded-2xl bg-accent-gradient p-1 shadow-glow">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <img 
                      src="/lovable-uploads/795a05d1-1ac1-4017-a120-9b6bf13cf626.png"
                      alt="Taha Nadeem - Flutter Developer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                {/* Floating Badge */}
                <Badge className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-red-gradient px-4 py-2 text-sm font-semibold shadow-glow">
                  Available for Work
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="card-gradient p-6 text-center shadow-elegant hover:shadow-glow transition-smooth">
                  <Icon className="mx-auto mb-4 text-primary" size={32} />
                  <div className="text-2xl font-bold text-primary-glow">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            Key <span className="bg-red-gradient bg-clip-text text-transparent">Achievements</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-4 glass-card p-6 rounded-lg shadow-elegant hover:shadow-glow transition-smooth">
                <div className="w-2 h-2 bg-red-gradient rounded-full"></div>
                <span className="text-lg">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Football Passion Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            My <span className="bg-blue-gradient bg-clip-text text-transparent">Passion</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {hobbies.map((hobby, index) => (
              <div key={index} className="flex items-center space-x-4 glass-card p-6 rounded-lg shadow-elegant hover:shadow-blue-glow transition-smooth">
                <div className="w-2 h-2 bg-blue-gradient rounded-full"></div>
                <span className="text-lg">{hobby}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;