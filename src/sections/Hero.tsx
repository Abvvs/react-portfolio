import Button from "../components/Button";
import { ArrowRight, ChevronDown, Github, Instagram, Linkedin } from "lucide-react";
import AnimatedBorderButton from "../components/AnimatedBorderButton";
const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "Python",
  "Django REST Framework",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "Vercel",
  "Reder",
  "TailwindCSS",
  "Prisma",
  "Figma",
  "Git",
  "GitHub",
];
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <img
          src="/bg-hero.jpg"
          alt="Hero background image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>
      {/* DOTS BG */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-b-full opacity-60"
            style={{
              background: "#5F7A86",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      {/* CONTENT HERO */}
      <div className="container mx-auto px-6 py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* columna izquierda - text content */}
          <div className="space-y-6">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />{" "}
                Information Technology (IT) Engineering ● Full Stack Developer
              </span>
            </div>
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting{" "}
                <span className="text-primary glow-text">
                  reliable software
                </span>
                <br />
                designed for
                <br />
                <span className="font-serif italic font-normal text-white">
                  real users.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I’m Abigail Sánchez, an Information Technology Engineer with
                hands-on experience building web applications using React,
                Python, and modern frontend tools. I focus on creating clean,
                functional interfaces and reliable systems that solve real-world
                problems.
              </p>
            </div>
            {/* CALL TO ACTION SECTION */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact me
                <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton />
            </div>
            {/* Social Links */}
            <div className="flex items-center animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* columna derecha - Profile img */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* profile img */}
            <div className="relative max-w-md mx-auto">
              <div className="relative p-2">
                <img
                  src="/ProfileAbigail.PNG"
                  alt="profile photo Abigail Sanchez"
                  className="object-cover rounded-2xl shadow-3xl glass hover:scale-[1.02] transition-transform duration-500"
                />
                {/* floating card */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors  ">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Scroll down */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce"/>
        </a>
      </div>
    </section>
  );
};

export default Hero;
