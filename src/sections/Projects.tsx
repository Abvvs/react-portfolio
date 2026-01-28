import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "SCCAD Topography Management Dashboard",
    description:
      "Web dashboard developed for a topography office to manage projects, field work, procedures, and clients. Built with React and Tailwind CSS, using reusable components, hooks, and typed data to improve maintainability and usability.",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind CSS", "Hooks", "TypeScript"],
    link: "#",
    github: "#",
  },
  {
    title: "Billar Boulevard Management System",
    description:
      "Full stack freelance project developed with Django to manage products, inventory, purchases, sales, and employee activity. Includes business logic, database relationships, and operational workflows for daily use.",
    image: "/projects/project2.png",
    tags: ["Django", "Python", "PostgreSQL", "Full Stack"],
    link: "#",
    github: "#",
  },
  {
    title: "Business Landing Page",
    description:
      "Responsive landing page built with Vue.js, focused on clean layout, performance, and user experience. Designed to present services clearly and adapt to different screen sizes.",
    image: "/projects/project3.png",
    tags: ["Vue.js", "Responsive Design", "UI"],
    link: "#",
    github: "#",
  },
  {
    title: "Portfolio Landing Page",
    description:
      "Responsive landing page built with Vue.js, focused on clean layout, performance, and user experience. Designed to present services clearly and adapt to different screen sizes.",
    image: "/projects/project4.png",
    tags: ["Vue.js", "Responsive Design", "UI"],
    link: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="p-32 relative overflow-hidden">
      {/* Bg */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Some of my work, from complex web applications to innovative tools
            that solve real-world problems.
          </p>
        </div>
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              {/* project description */}
              <div className="p-6 space-y-4 ">
                <div className="flex items-start justify-between">
                  <h3 className=" text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
