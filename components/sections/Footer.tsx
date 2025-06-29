import { Profile } from "@/types"

interface FooterProps {
  profile: Profile
}

export function Footer({ profile }: FooterProps) {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="max-w-2xl mx-auto px-6 py-12 text-center">
      <div className="w-10 h-10 bg-gray-900/50 rounded-full flex items-center justify-center mx-auto mb-3 border border-gray-800/50">
        <span className="text-lg">💻</span>
      </div>
      <p className="text-geist-sm text-gray-400">Que bom que você passou por aqui. Até!</p>
      <p className="text-geist-sm text-gray-600 mt-2">© {currentYear} {profile.name}</p>
    </footer>
  )
} 