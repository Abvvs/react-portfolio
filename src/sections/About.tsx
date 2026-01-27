import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const higlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "I write clear, readable, and maintainable code following best practices for long-term scalability.",
  },
  {
    icon: Rocket,
    title: "Performance Focus",
    description:
      "I optimize components and workflows to improve performance and deliver smooth user experiences.",
  },
  {
    icon: Users,
    title: "User-Centered Design",
    description:
      "I build interfaces with usability and accessibility in mind, focusing on real user needs.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "I enjoy turning complex requirements into practical, well-structured technical solutions.",
  },
];
const About = () => {
  return (
    <section id="about" className="p-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className=" grid lg:grid-cols-2 gap-16 items-center">
          {/* columna izquierda */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building modern web solutions,
              <span className="font-serif italic font-normal text-white">
                {" "}
                end to end.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Information Technology Engineer with hands-on experience
                designing and developing web and mobile applications using
                Python, JavaScript, Java, and Dart, as well as relational
                databases such as PostgreSQL. Strong background in information
                security, backend development, and system implementation.
              </p>
              <p>
                Passionate about technology, AI, and software engineering, with
                a strong ability to simplify complex concepts and deliver
                effective, maintainable solutions.
              </p>
            </div>
          </div>
          {/* columna derecha hilights*/}
          <div className="grid sm:grid-cols-2 gap-6">
            {higlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
