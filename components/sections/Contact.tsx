import { Contact as ContactType } from "@/types"
import { Mail, Phone, MessageCircle, Github, Linkedin, Twitter, Instagram, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactProps {
  contact: ContactType
}

export function Contact({ contact }: ContactProps) {
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      color: "text-blue-400"
    },

    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: contact.whatsapp,
      href: `https://wa.me/${contact.whatsapp?.replace(/\D/g, '')}`,
      color: "text-green-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: contact.github ? contact.github.replace('https://', '') : undefined,
      href: contact.github,
      color: "text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: contact.linkedin ? contact.linkedin.replace('https://', '') : undefined,
      href: contact.linkedin,
      color: "text-blue-500"
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: contact.twitter ? contact.twitter.replace('https://', '') : undefined,
      href: contact.twitter,
      color: "text-blue-400"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: contact.instagram ? contact.instagram.replace('https://', '') : undefined,
      href: contact.instagram,
      color: "text-pink-500"
    }
  ].filter(item => item.value) // Remove itens sem valor

  return (
    <section>
      <h2 className="text-geist-lg font-medium mb-6 text-white">Contato</h2>

      <div className="space-y-4">
        <p className="text-geist-sm text-gray-400 leading-relaxed mb-6">
          Entre em contato comigo através de qualquer um dos canais abaixo. Estou sempre disponível para conversar sobre projetos e oportunidades.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactItems.map((item) => (
            <div
              key={item.label}
              className="bg-gray-900/50 rounded-lg p-4 border border-gray-800/50 hover:bg-gray-800/30 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-gray-800/50 ${item.color}`}>
                  <item.icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-geist-sm font-medium text-white">{item.label}</p>
                  <p className="text-geist-sm text-gray-400">{item.value}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  asChild
                >
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <p className="text-geist-sm text-blue-300 text-center">
            💡 Prefere uma conversa rápida? Me envie uma mensagem no WhatsApp!
          </p>
        </div>
      </div>
    </section>
  )
} 