import { useState } from 'react'

// Shows an image, or a "coming soon" panel if there is none or it can't load.
export default function Shot({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false)
  return (
    <figure className="shot">
      {!src || failed ? (
        <div className="shot-empty">i'm still cooking on this on!</div>
      ) : (
        <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
      )}
    </figure>
  )
}