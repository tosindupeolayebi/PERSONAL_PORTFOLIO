import { Link } from 'react-router-dom'
import Shot from './Shot'
import { me, projects } from './data'

const skills = ['Python','Model training and evaluation', 'Pandas', 'React', 'TypeScript', 'JavaScript',  'Git & GitHub', 'Java']
const ticker = 'open to fellowships and freelance work   |   building impactful and fun solutions   |   '

export default function Home() {
  return (
    <>
      <section className="hero grid-paper">
        <div className="wrap">
          <p className="sticker gold tilt-l">data science & AI enthusiast</p>
          <h1>
            <span className="hl">hi, i’m {me.first}.</span>
            <span className="serif">i turn data into decisions<br /> and ideas into software</span>
          </h1>
          <p className="sticker pink tilt-r">software developer</p>
          <div className="row">
            <a className="pill solid" href="#projects">see my work</a>
            <a className="pill" href="#contact">get in touch</a>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>{ticker.repeat(6)}</div>
      </div>

      <section id="about" className="wrap section">
        <h2 className="serif">about me</h2>
        <div className="cards">
          <article className="card pink">
            <h3>who i am</h3>
            <p>I’m {me.name}, a developer who came to code from a creative background. Fueled by curiosity and a vivid imagination, I think about how something looks and how it works at the same time</p>
          </article>
          <article className="card gold">
            <h3>what i do</h3>
            <p>I use data and AI to analyze patterns and predict trends, and I build efficient and visually-appealing web apps and interfaces that solve real-world problems..</p>
          </article>
          <article className="card peach">
            <h3>what i’m into</h3>
            <p>Contributing to technological advancements and creating solutions that make a positive impact.</p>
          </article>
        </div>
        <ul className="chips" aria-label="Skills">
          {skills.map((s) => <li key={s}>{s}</li>)}
        </ul>
      </section>

      <section id="projects" className="band grid-paper">
        <div className="wrap section">
          <h2 className="serif">things i’ve built</h2>
          <div className="proj-grid">
            {projects.map((p, i) => (
              <article key={p.slug} className={`proj ${['pink', 'gold', 'peach'][i % 3]}`}>
                <Shot src={p.image} alt={`Screenshot of ${p.name}`} />
                <div className="proj-body">
                  <h3>{p.name}</h3>
                  <p>{p.short}</p> 
                  <ul className="chips small" aria-label="Tech stack">
                    {p.stack.map((t) => <li key={t}>{t}</li>)}
                  </ul>

                  {p.status && <p className="status">{p.status}</p>}
                  <div className="row">
                    <Link className="pill solid" to={`/projects/${p.slug}`}>view details</Link>
                    {p.live && <a className="pill" href={p.live} target="_blank" rel="noreferrer">live site</a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="wrap section">
        <div className="cta">
          <h2 className="serif">got something to build? let’s talk.</h2>
          <p>I reply to emails and WhatsApp messages within a day.</p>
          <div className="row">
            <a className="pill gold-bg" href={`https://mail.google.com/mail/?view=cm&to=${me.email}&su=Hello%20${me.first}`} target="_blank" rel="noreferrer">email me</a>
            <a className="pill pink-bg" href={`https://wa.me/${me.whatsapp}`} target="_blank" rel="noreferrer">message on WhatsApp</a>
          </div>
          <p>or write to <a href={`mailto:${me.email}`}>{me.email}</a></p>
        </div>
      </section>
    </>
  )
}
