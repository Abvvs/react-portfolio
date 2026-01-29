import {
  Mail,MapPin,Phone,Send,CheckCircle,AlertCircle,
} from "lucide-react";
import Button from "../components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
const contactInfo = [
  {
    icon: Mail,
    label: "contact.info.email",
    value: "abvvs@abvvs.dev",
    href: "mailto:abvvs@abvvs.dev",
  },
  {
    icon: Phone,
    label: "contact.info.phone",
    value: "+593 980 270 157",
    href: "tel:+593980270157",
  },
  {
    icon: MapPin,
    label: "contact.info.location",
    value: "Ecuador",
    href: "#",
  },
];
type SubmitStatusType = {
  type: "success" | "error" | null;
  message: string;
};
const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatusType>({
    type: null,
    message: "",
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJs configuration is missing, check enviroment");
      }
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey,
      );
      setSubmitStatus({
        type: "success",
        message: t("contact.success"),
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      console.error("EmailJS error", err);
      setSubmitStatus({
        type: "error",
        message: err?.text || t("contact.error"),
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="relative w-full h-full">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          {/* heading */}
          <div className="text-center mx-auto max-w-3xl mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
              {t("contact.label")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
              {t("contact.title")}
              <span className="font-serif italic font-normal text-white">
                {" "}
                {t("contact.titleItalic")}
              </span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              {t("contact.description")}
            </p>
          </div>
          {/* contact form */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("contact.form.name")}
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder={t("contact.form.namePlaceholder")}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("contact.form.email")}
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder={t("contact.form.emailPlaceholder")}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder={t("contact.form.messagePlaceholder")}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  />
                </div>
                <Button
                  className="w-full"
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? t("common.sending")  : (
                    <>
                      {t("contact.form.submit")} <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
                {submitStatus.type && (
                  <div
                    className={`flex items-center gap-3 p-4 rounded-xl ${
                      submitStatus.type === "success"
                        ? "bg-green-500/10 border border-green-500/20"
                        : "bg-red-500/10 border border-red-500/20"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="w-5 h-5 shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 shrink-0" />
                    )}
                    <p className="text-sm">{submitStatus.message}</p>
                  </div>
                )}
              </form>
              <p className="text-xs text-muted-foreground text-center mt-3">
                {t("contact.form.copy")}
              </p>
            </div>
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in animation-delay-400">
              <div className="glass rounded-3xl p-8">
                <h3 className="text-xl font-semibold mb-6">
                  {t("contact.info.title")}
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className="flex items-center gap=4 p-4 rounded-xl hover:bg-surface transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {t(item.label)}
                        </div>
                        <div className="font-medium">{item.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              {/* disponibilidad card */}
              <div className="glass rounded-3xl p-8 border border-primary/30">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                  <span className="font-medium">{t("contact.info.availability")}</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {t("contact.info.availabilityText")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
