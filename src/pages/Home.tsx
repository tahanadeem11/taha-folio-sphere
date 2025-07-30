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

      {/* About Me Summary */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            About <span className="bg-accent-gradient bg-clip-text text-transparent">Me</span>
          </h3>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="glass-card p-8 rounded-lg shadow-elegant hover:shadow-glow transition-smooth">
                <h4 className="text-xl font-bold text-primary-glow mb-4">Professional Journey</h4>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate Flutter developer with over a year of experience creating innovative mobile applications. 
                  My journey began with curiosity about mobile technology and evolved into a professional career where I've 
                  successfully delivered apps with 5K+ downloads and maintained excellent user satisfaction ratings.
                </p>
              </div>
              
              <div className="glass-card p-8 rounded-lg shadow-elegant hover:shadow-glow transition-smooth">
                <h4 className="text-xl font-bold text-primary-glow mb-4">Technical Philosophy</h4>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in writing clean, maintainable code that not only solves problems but creates exceptional user experiences. 
                  My expertise spans across Flutter, Firebase, REST APIs, and modern development practices. I'm always eager to learn 
                  new technologies and apply them to real-world challenges.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="glass-card p-8 rounded-lg shadow-elegant hover:shadow-glow transition-smooth">
                <h4 className="text-xl font-bold text-primary-glow mb-4">Leadership & Growth</h4>
                <p className="text-muted-foreground leading-relaxed">
                  As the Flutter Lead at Google Developer Student Club, I've had the opportunity to mentor fellow developers 
                  and contribute to the tech community. This role has enhanced my leadership skills and deepened my understanding 
                  of collaborative development practices.
                </p>
              </div>
              
              <div className="glass-card p-8 rounded-lg shadow-elegant hover:shadow-glow transition-smooth">
                <h4 className="text-xl font-bold text-primary-glow mb-4">Beyond Code</h4>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me on the football field playing as a center defender. Football has taught me 
                  the importance of teamwork, strategic thinking, and staying calm under pressure—qualities that directly translate 
                  to my approach in software development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            Core <span className="bg-red-gradient bg-clip-text text-transparent">Expertise</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-gradient p-6 text-center shadow-elegant hover:shadow-glow transition-smooth">
              <Smartphone className="mx-auto mb-4 text-primary" size={40} />
              <h4 className="text-lg font-bold mb-3">Mobile Development</h4>
              <p className="text-muted-foreground text-sm">
                Cross-platform mobile apps with Flutter, ensuring optimal performance and user experience across devices.
              </p>
            </Card>
            
            <Card className="card-gradient p-6 text-center shadow-elegant hover:shadow-glow transition-smooth">
              <Code className="mx-auto mb-4 text-primary" size={40} />
              <h4 className="text-lg font-bold mb-3">Clean Architecture</h4>
              <p className="text-muted-foreground text-sm">
                Writing maintainable, scalable code following best practices and design patterns for long-term project success.
              </p>
            </Card>
            
            <Card className="card-gradient p-6 text-center shadow-elegant hover:shadow-glow transition-smooth">
              <Star className="mx-auto mb-4 text-primary" size={40} />
              <h4 className="text-lg font-bold mb-3">User Experience</h4>
              <p className="text-muted-foreground text-sm">
                Creating intuitive, responsive interfaces that prioritize user satisfaction and engagement.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Footer */}
      <footer className="bg-card/50 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-accent-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">TN</span>
                </div>
                <div>
                  <span className="font-bold text-xl bg-accent-gradient bg-clip-text text-transparent">
                    Taha Nadeem
                  </span>
                  <p className="text-muted-foreground text-sm">Flutter Developer & Mobile App Specialist</p>
                </div>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                Passionate about creating exceptional mobile experiences through clean code, innovative solutions, 
                and user-centered design. Ready to bring your ideas to life.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-smooth text-sm">About Me</Link></li>
                <li><Link to="/experience" className="text-muted-foreground hover:text-primary transition-smooth text-sm">Experience</Link></li>
                <li><Link to="/projects" className="text-muted-foreground hover:text-primary transition-smooth text-sm">Projects</Link></li>
                <li><Link to="/technologies" className="text-muted-foreground hover:text-primary transition-smooth text-sm">Technologies</Link></li>
                <li><Link to="/education" className="text-muted-foreground hover:text-primary transition-smooth text-sm">Education</Link></li>
                <li><Link to="/passion" className="text-muted-foreground hover:text-primary transition-smooth text-sm">Passion</Link></li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Mail size={16} className="text-primary" />
                  <a href="mailto:tahanadeem.gk@gmail.com" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                    tahanadeem.gk@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={16} className="text-primary" />
                  <span className="text-muted-foreground text-sm">03245732932</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-muted-foreground text-sm">Lahore, Pakistan</span>
                </div>
              </div>
              
              <div className="flex space-x-3 mt-6">
                <a 
                  href="https://github.com/tahanadeem11" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 glass-card rounded-lg hover:shadow-glow transition-smooth"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/taha-nadeem-9a6517210/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 glass-card rounded-lg hover:shadow-glow transition-smooth"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:tahanadeem.gk@gmail.com"
                  className="p-2 glass-card rounded-lg hover:shadow-glow transition-smooth"
                  aria-label="Send Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Taha Nadeem. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                ● Available for Work
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;