import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Trophy, 
  Star, 
  Target,
  Gamepad2,
  Users,
  Medal,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const Passion = () => {
  const footballStats = [
    { icon: Trophy, label: "Favorite Team", value: "Real Madrid", color: "text-blue-400" },
    { icon: Star, label: "Football Idol", value: "Cristiano Ronaldo", color: "text-yellow-400" },
    { icon: Target, label: "Position", value: "Center Defence", color: "text-green-400" },
    { icon: Medal, label: "Playing Since", value: "2018", color: "text-purple-400" }
  ];

  const inspirations = [
    {
      name: "Cristiano Ronaldo",
      role: "Forward & Captain",
      team: "Al Nassr",
      description: "The GOAT who taught me that dedication, hard work, and persistence can overcome any obstacle. His leadership on and off the field is unmatched.",
      qualities: ["Leadership", "Dedication", "Skill", "Mentality"]
    },
    {
      name: "Sergio Ramos",
      role: "Center Back & Captain",
      team: "PSG",
      description: "A defensive legend who showed me how to be fearless, passionate, and a true leader. His presence in crucial moments is inspiring.",
      qualities: ["Leadership", "Passion", "Defense", "Clutch"]
    },
    {
      name: "Roberto Carlos",
      role: "Left Back",
      team: "Real Madrid Legend",
      description: "The most dynamic defender ever. His attacking mindset from defense and incredible free kicks changed how I view the game.",
      qualities: ["Speed", "Power", "Technique", "Attack"]
    }
  ];

  const footballJourney = [
    {
      period: "2018 - 2020",
      title: "Starting My Journey",
      description: "Began playing football in local grounds, discovering my love for the defensive position.",
      icon: Heart
    },
    {
      period: "2020 - 2022",
      title: "Developing Skills",
      description: "Focused on improving my defensive techniques and understanding of the game.",
      icon: Target
    },
    {
      period: "2022 - Present",
      title: "Team Player",
      description: "Playing regularly with local teams, applying lessons learned from my football heroes.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              My <span className="bg-blue-gradient bg-clip-text text-transparent">Passion</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Football isn't just a sport for me—it's a way of life that teaches dedication, teamwork, and the pursuit of excellence.
            </p>
            <Badge className="bg-blue-gradient px-6 py-2 text-lg font-semibold shadow-glow">
              ⚽ Center Defence Player
            </Badge>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {footballStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="card-gradient p-6 text-center shadow-elegant hover:shadow-blue-glow transition-smooth">
                  <Icon className={`mx-auto mb-4 ${stat.color}`} size={32} />
                  <div className="text-lg font-bold text-primary-glow">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Football Journey Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            My Football <span className="bg-blue-gradient bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-gradient"></div>
            {footballJourney.map((journey, index) => {
              const Icon = journey.icon;
              return (
                <div key={index} className="relative mb-8 animate-slide-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="absolute left-4 w-4 h-4 bg-blue-gradient rounded-full border-4 border-background"></div>
                  <div className="ml-16">
                    <Card className="card-gradient p-6 shadow-elegant hover:shadow-blue-glow transition-smooth">
                      <div className="flex items-center space-x-3 mb-3">
                        <Icon className="text-blue-400" size={24} />
                        <span className="text-sm font-medium text-blue-400">{journey.period}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{journey.title}</h3>
                      <p className="text-muted-foreground">{journey.description}</p>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inspirations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Football <span className="bg-blue-gradient bg-clip-text text-transparent">Inspirations</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {inspirations.map((player, index) => (
              <Card key={index} className="card-gradient p-6 shadow-elegant hover:shadow-blue-glow transition-smooth animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-primary-glow">{player.name}</h3>
                  <p className="text-sm text-blue-400 font-medium">{player.role}</p>
                  <p className="text-xs text-muted-foreground">{player.team}</p>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {player.description}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3 text-sm">Key Qualities</h4>
                  <div className="flex flex-wrap gap-2">
                    {player.qualities.map((quality, i) => (
                      <Badge key={i} variant="outline" className="border-blue-400/50 text-blue-400 text-xs">
                        {quality}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Card className="card-gradient p-8 shadow-elegant border-blue-400/20">
            <Gamepad2 className="mx-auto text-blue-400 mb-6" size={48} />
            <h2 className="text-2xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-muted-foreground mb-6">
              Just like in football, I bring passion, dedication, and teamwork to every project. Let's create something incredible together!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/projects">
                <Button className="bg-blue-gradient hover:shadow-blue-glow transition-smooth">
                  View My Projects
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/10">
                  Learn More About Me
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Passion;