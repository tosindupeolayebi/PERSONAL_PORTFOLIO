import { useState } from 'react'
export default function Shot({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false)
  return (
    <figure className="shot">
      {!src || failed ? (
        <div className="shot-empty">i'm still cooking on this one!</div>
      ) : (
        <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
      )}
    </figure>
  )
}