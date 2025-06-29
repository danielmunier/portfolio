import { Location as LocationType } from "@/types"
import { MapPin, Users, Calendar } from "lucide-react"

interface LocationProps {
  location: LocationType
}

export function Location({ location }: LocationProps) {
  return (
    <section>
      <h2 className="text-geist-lg font-medium mb-6 text-white">De onde sou</h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-geist-base text-white">
            
          </h3>
          <div className="text-geist-sm text-gray-500">{location.timezone}</div>
        </div>

        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800/50 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-4 left-4 w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="absolute top-8 right-8 w-1 h-1 bg-green-500 rounded-full"></div>
            <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-1 h-1 bg-yellow-500 rounded-full"></div>
          </div>

          <div className="relative text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full mb-3 border border-blue-500/30">
              <MapPin className="w-6 h-6 text-blue-400" />
            </div>
            <p className="text-geist-sm text-gray-300 font-medium">
              {location.city}, {location.state}
            </p>
            <p className="text-geist-sm text-gray-500 mt-1">
              {location.availableForRemote ? "Disponível para trabalho remoto" : "Trabalho local"}
            </p>

            <div className="flex items-center justify-center gap-6 mt-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                <span>Colaborativo</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>Flexível</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 