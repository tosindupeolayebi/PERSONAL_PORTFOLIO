import { Link, useParams } from 'react-router-dom'
import Shot from './Shot'
import { projects } from './data'

export default function ProjectPage() {
  const { slug } = useParams()
  const p = projects.find((x) => x.slug === slug)

  if (!p) {
    return (
      <div className="wrap section">
        <p>That project doesn’t exist.</p>
        <Link className="pill" to="/#projects">back to projects</Link>
      </div>
    )
  }

  return (
    <article className="wrap section detail">
      <Link className="pill" to="/#projects">back to projects</Link>
      <h1 className="serif">{p.name}</h1>
      <ul className="chips" aria-label="Technologies used">
        {p.stack.map((t) => <li key={t}>{t}</li>)}
      </ul>
      {p.live && <a className="pill solid" href={p.live} target="_blank" rel="noreferrer">visit live site</a>}

      <section>
        <h2>about this project</h2>
        <p>{p.full}</p>
      </section>
      <section className="callout">
        <h2>the problem</h2>
        <p>{p.problem}</p>
      </section>
      <section>
        <h2>features</h2>
        <ul className="list">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
      </section>
      <section>
        <h2>screenshots</h2>
        {p.shots.length > 0 ? (
          <div className="shots">
          {p.shots.map((s) => <Shot key={s} src={s} alt={`${p.name} screenshot`} />)}
          </div>
      ) : (
        <p className="coming-soon">
        Screenshots coming soon. This project is still in progress.
        </p>
      )}
      </section>
      <section>
        <h2>what i learned</h2>
        <ul className="list">{p.learned.map((l) => <li key={l}>{l}</li>)}</ul>
      </section>
    </article>
  )
}
