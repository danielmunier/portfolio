import { Button } from "@/components/ui/button";
import { HamburgerMenu } from "@/components/ui/hamburger-menu";
import { Profile } from "@/types";
import { Mail, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: profile.contact.email,
      href: `mailto:${profile.contact.email}`,
      color: "text-blue-400",
    },

    {
      icon: Github,
      label: "GitHub",
      value: profile.contact.github
        ? profile.contact.github.replace("https://", "")
        : undefined,
      href: profile.contact.github,
      color: "text-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: profile.contact.linkedin
        ? profile.contact.linkedin.replace("https://", "")
        : undefined,
      href: profile.contact.linkedin,
      color: "text-blue-500",
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: profile.contact.twitter
        ? profile.contact.twitter.replace("https://", "")
        : undefined,
      href: profile.contact.twitter,
      color: "text-blue-400",
    },
  ].filter((item) => item.value);

  return (
    <section id="hero" className="max-w-2xl mx-auto px-6 pt-12 pb-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-geist-xl font-medium text-white mb-1">
            {profile.name}
          </h1>
          <p className="text-geist-sm text-gray-500">{profile.tagline}</p>
        </div>
        <HamburgerMenu>
          <div className="space-y-4">
            <div>
              <h3 className="text-geist-base font-medium text-white mb-3">
                Contato Rápido
              </h3>
              <div className="space-y-2">
                {contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800/50 transition-colors group"
                  >
                    <div
                      className={`p-1.5 rounded ${item.color} bg-gray-800/30`}
                    >
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-geist-sm font-medium text-white group-hover:text-blue-300 transition-colors">
                        {item.label}
                      </p>
                      <p className="text-xs text-gray-400">{item.value}</p>
                    </div>
                    <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-800">
              <h3 className="text-geist-base font-medium text-white mb-3">
                Localização
              </h3>
              <p className="text-geist-sm text-gray-400">
                {profile.location.city}, {profile.location.state}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {profile.location.availableForRemote
                  ? "Disponível para trabalho remoto"
                  : "Trabalho local"}
              </p>
            </div>
          </div>
        </HamburgerMenu>
      </div>

      <div className="mb-8">
        <h2 className="text-geist-lg font-medium mb-4 text-white leading-tight">
          Desenvolvo <em className="italic font-medium">aplicações web</em> com{" "}
          <em className="italic font-medium">tecnologias modernas</em> e código
          limpo.
        </h2>
      </div>
    </section>
  );
}
