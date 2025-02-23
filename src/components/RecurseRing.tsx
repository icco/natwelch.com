// <script src="https://raw.githack.com/Qwuke/recurse-ring/main/static/ring.js" type="text/javascript"></script>
// <div><a id="rc-ring-prev" href="https://ring.recurse.com/prev?id=45">Prev</a></div>
// <div><a id="rc-ring-home" data-rc-uuid="b3e98b33-7464-4211-ba0b-5cc38ebb03e9" href="https://ring.recurse.com/">The Recurse Webring</a></div>
// <div><a id="rc-ring-rand" href="https://ring.recurse.com/rand">Random</a></div>
// <div><a id="rc-ring-next" href="https://ring.recurse.com/next?id=45">Next</a></div>

import { useState, useEffect } from "react";

export const RecurseRing: React.FC<{ className?: string }> = ({
  className,
}) => {
  const [ring, setRing] = useState<{
    prev: string;
    rand: string;
    next: string;
  } | null>(null);

  useEffect(() => {
    const fetchSites = async () => {
      try {
        const response = await fetch('https://raw.githack.com/Qwuke/recurse-ring/main/sites.json');
        const sites = await response.json();

        // Find current site index (using your UUID)
        const currentUUID = 'b3e98b33-7464-4211-ba0b-5cc38ebb03e9';
        const currentIndex = sites.findIndex((site: any) => site.website_uuid === currentUUID);

        if (currentIndex !== -1) {
          const prevIndex = (currentIndex - 1 + sites.length) % sites.length;
          const nextIndex = (currentIndex + 1) % sites.length;

          setRing({
            prev: sites[prevIndex].url,
            rand: sites[Math.floor(Math.random() * sites.length)].url,
            next: sites[nextIndex].url,
          });
        }
      } catch (error) {
        console.error('Error fetching ring data:', error);
      }
    };

    fetchSites();
  }, []);

  return (
    <div className={className}>
      <div>
        <a id="rc-ring-prev" href={ring ? ring.prev : 'https://ring.recurse.com/prev?id=45'}>Prev</a>
      </div>
      <div>
        <a id="rc-ring-home" data-rc-uuid="b3e98b33-7464-4211-ba0b-5cc38ebb03e9" href="https://ring.recurse.com/">The Recurse Webring</a>
      </div>
      <div>
        <a id="rc-ring-rand" href={ring ? ring.rand : 'https://ring.recurse.com/rand'}>Random</a>
      </div>
      <div>
        <a id="rc-ring-next" href={ring ? ring.next : 'https://ring.recurse.com/next?id=45'}>Next</a>
      </div>
    </div>
  );
}
