import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  GraduationCap, 
  Calendar, 
  MapPin,
  Award,
  Book,
  Target,
  TrendingUp,
  FileText
} from "lucide-react";

const Education = () => {
  const educationHistory = [
    {
      degree: "Bachelor of Science in Information Technology (Post-ADP)",
      institution: "University of Education",
      duration: "2022 – 2024",
      location: "Lahore, Pakistan",
      cgpa: "2.94 / 4.00",
      percentage: "69%",
      type: "Bachelor's Degree",
      description: "Advanced my knowledge in software development, database management, and modern web technologies with focus on practical applications.",
      keySubjects: [
        "Software Engineering",
        "Database Management Systems",
        "Web Development",
        "Data Structures & Algorithms",
        "Computer Networks",
        "Project Management"
      ],
      projects: [
        "Fake News Detection System using Machine Learning",
        "Islamic Learning App (ISLAME)",
        "Food Delivery App UI Clone"
      ]
    },
    {
      degree: "Associate Degree in Computer Science (ADP)",
      institution: "University of Education",
      duration: "2019 – 2021",
      location: "Lahore, Pakistan",
      cgpa: "2.95 / 4.00",
      percentage: "70%",
      type: "Associate Degree",
      description: "Built strong foundation in computer science fundamentals including programming, mathematics, and core computing concepts.",
      keySubjects: [
        "Programming Fundamentals",
        "Object Oriented Programming",
        "Data Structures",
        "Computer Organization",
        "Mathematics for Computing",
        "Operating Systems"
      ],
      projects: [
        "Library Management System",
        "Student Information System",
        "Basic Calculator Application"
      ]
    }
  ];

  const certifications = [
    {
      title: "Flutter Lead",
      issuer: "Google Developer Student Club",
      year: "2022",
      type: "Leadership Role",
      description: "Recognized for outstanding technical skills and leadership in mobile development"
    },
    {
      title: "2nd International Conference",
      issuer: "University of Education",
      year: "2023",
      type: "Conference Participation",
      description: "Participated in international conference on emerging technologies"
    }
  ];

  const academicAchievements = [
    "Consistent academic performance with CGPA above 2.9",
    "Active participation in tech conferences and workshops",
    "Leadership role in Google Developer Student Club",
    "Multiple successful academic projects with real-world applications"
  ];

  const skillDevelopment = [
    { skill: "Programming", level: 90 },
    { skill: "Problem Solving", level: 85 },
    { skill: "Project Management", level: 80 },
    { skill: "Research & Analysis", level: 85 }
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-accent-gradient bg-clip-text text-transparent">Education</span> & Qualifications
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic journey and continuous learning in computer science and technology
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-2 space-y-8">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-accent-gradient"></div>
              
              {educationHistory.map((edu, index) => (
                <div key={index} className="relative mb-12 animate-slide-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 w-4 h-4 bg-accent-gradient rounded-full border-4 border-background"></div>
                  
                  {/* Education Card */}
                  <div className="ml-16">
                    <Card className="card-gradient p-8 shadow-elegant hover:shadow-glow transition-smooth">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                        <div>
                          <Badge variant="secondary" className="mb-3">{edu.type}</Badge>
                          <h3 className="text-xl font-bold text-primary-glow mb-2">{edu.degree}</h3>
                          <div className="flex items-center space-x-2">
                            <GraduationCap className="text-primary" size={18} />
                            <span className="text-lg font-semibold">{edu.institution}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary-glow">{edu.percentage}</div>
                          <div className="text-sm text-muted-foreground">CGPA: {edu.cgpa}</div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Calendar size={18} />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <MapPin size={18} />
                          <span>{edu.location}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {edu.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center">
                            <Book className="text-primary mr-2" size={18} />
                            Key Subjects
                          </h4>
                          <div className="space-y-2">
                            {edu.keySubjects.map((subject, i) => (
                              <div key={i} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                <span className="text-sm text-muted-foreground">{subject}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 flex items-center">
                            <Target className="text-primary mr-2" size={18} />
                            Notable Projects
                          </h4>
                          <div className="space-y-2">
                            {edu.projects.map((project, i) => (
                              <div key={i} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                <span className="text-sm text-muted-foreground">{project}</span>
                              </div>
                            ))}
                          </div>
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
            {/* Certifications */}
            <Card className="card-gradient p-6 shadow-elegant">
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="text-primary" size={24} />
                <h3 className="text-xl font-bold">Certifications</h3>
              </div>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-4">
                    <h4 className="font-semibold text-primary-glow">{cert.title}</h4>
                    <p className="text-sm font-medium text-muted-foreground">{cert.issuer}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="outline">{cert.type}</Badge>
                      <span className="text-xs text-muted-foreground">{cert.year}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{cert.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Academic Achievements */}
            <Card className="card-gradient p-6 shadow-elegant">
              <div className="flex items-center space-x-3 mb-6">
                <Award className="text-primary" size={24} />
                <h3 className="text-xl font-bold">Academic Achievements</h3>
              </div>
              <div className="space-y-3">
                {academicAchievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground leading-relaxed">{achievement}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Skill Development */}
            <Card className="card-gradient p-6 shadow-elegant">
              <div className="flex items-center space-x-3 mb-6">
                <TrendingUp className="text-primary" size={24} />
                <h3 className="text-xl font-bold">Academic Skills</h3>
              </div>
              <div className="space-y-4">
                {skillDevelopment.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-sm">{skill.skill}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>

            {/* Current Status */}
            <Card className="card-gradient p-6 shadow-elegant border-primary/20">
              <h3 className="text-lg font-bold mb-4">Education Status</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Degree Completed</span>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/50">✓ Yes</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Continuous Learning</span>
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50">● Active</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;