import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline"

export type RingSite = {
  website_id: number
  website_uuid: string
  recurse_id: number
  website_name: string
  is_anonymous: boolean
  url: string
}

const fetchSites = async (): Promise<{
  prev: string
  rand: string
  next: string
} | null> => {
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
      let randIndex = Math.floor(Math.random() * sites.length)

      if (randIndex === currentIndex) {
        randIndex = (randIndex + 1) % sites.length
      }

      return {
        prev: sites[prevIndex].url,
        rand: sites[randIndex].url,
        next: sites[nextIndex].url,
      }
    }
  } catch (error) {
    console.error("Error fetching ring data:", error)
  }

  return null
}
export const RecurseRing: React.FC = async () => {
  const ring = await fetchSites()

  return (
    <>
      <a
        id="rc-ring-prev"
        className="link link-hover"
        href={ring ? ring.prev : "https://ring.recurse.com/prev?id=45"}
      >
        <span className="flex items-center gap-2">
          <ArrowLeftCircleIcon className="h-4 w-4" /> Previous Site
        </span>
      </a>
      <a
        id="rc-ring-rand"
        className="link link-hover"
        href={ring ? ring.rand : "https://ring.recurse.com/rand"}
      >
        <span className="flex items-center gap-2">
          <QuestionMarkCircleIcon className="h-4 w-4" /> Random Site
        </span>
      </a>
      <a
        id="rc-ring-next"
        className="link link-hover"
        href={ring ? ring.next : "https://ring.recurse.com/next?id=45"}
      >
        <span className="flex items-center gap-2">
          <ArrowRightCircleIcon className="h-4 w-4" /> Next Site
        </span>
      </a>
    </>
  )
}
