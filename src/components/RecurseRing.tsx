"use client"

import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"

export type RingSite = {
  website_id: number
  website_uuid: string
  recurse_id: number
  website_name: string
  is_anonymous: boolean
  url: string
}

export const RecurseRing: React.FC<{ className?: string }> = ({
  className,
}) => {
  const [ring, setRing] = useState<{
    prev: string
    rand: string
    next: string
  } | null>(null)

  useEffect(() => {
    const fetchSites = async () => {
      try {
        const response = await fetch(
          "https://raw.githack.com/Qwuke/recurse-ring/main/sites.json"
        )
        const sites = await response.json()

        // Find current site index (using your UUID)
        const currentUUID = "b3e98b33-7464-4211-ba0b-5cc38ebb03e9"
        const currentIndex = sites.findIndex(
          (site: RingSite) => site.website_uuid === currentUUID
        )

        if (currentIndex !== -1) {
          const prevIndex = (currentIndex - 1 + sites.length) % sites.length
          const nextIndex = (currentIndex + 1) % sites.length

          setRing({
            prev: sites[prevIndex].url,
            rand: sites[Math.floor(Math.random() * sites.length)].url,
            next: sites[nextIndex].url,
          })
        }
      } catch (error) {
        console.error("Error fetching ring data:", error)
      }
    }

    fetchSites()
  }, [])

  return (
    <div className={className}>
      <div>
        <a
          id="rc-ring-prev"
          href={ring ? ring.prev : "https://ring.recurse.com/prev?id=45"}
        >
          <ArrowLeftCircleIcon className="h-4 w-4" />
        </a>
      </div>
      <div>
        <a
          id="rc-ring-rand"
          href={ring ? ring.rand : "https://ring.recurse.com/rand"}
        >
          <QuestionMarkCircleIcon className="h-4 w-4" />
        </a>
      </div>
      <div>
        <a
          id="rc-ring-next"
          href={ring ? ring.next : "https://ring.recurse.com/next?id=45"}
        >
          <ArrowRightCircleIcon className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}
