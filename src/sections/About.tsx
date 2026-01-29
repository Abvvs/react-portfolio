import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const higlights = [
  {
    icon: Code2,
    key: "cleanCode",
  },
  {
    icon: Rocket,
    key: "performance",
  },
  {
    icon: Users,
    key: "ux",
  },
  {
    icon: Lightbulb,
    key: "problemSolving",
  },
];
const About = () => {
  const { t } = useTranslation();
  const paragraphs = t("about.paragraphs", {
    returnObjects: true,
  }) as string[];
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className=" grid lg:grid-cols-2 gap-16 items-center">
          {/* columna izquierda */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                {t("about.label")}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              {t("about.title")}
              <span className="font-serif italic font-normal text-white">
                {" "}
                {t("about.titleItalic")}
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              {paragraphs.map((text, index) => (
                <p
                  key={index}
                  className="text-muted-foreground leading-relaxed"
                >
                  {text}
                </p>
              ))}
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
                <h3 className="text-lg font-semibold mb-2">
                  {t(`about.cards.${item.key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(`about.cards.${item.key}.text`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
