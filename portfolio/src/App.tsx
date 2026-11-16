import { useEffect, useState } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Home from './Home'
import ProjectPage from './ProjectPage'
import { me } from './data'

function ScrollToHash() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) document.querySelector(hash)?.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <>
      <ScrollToHash />
      <header className="nav">
        <Link to="/" className="logo" onClick={close}>
          {me.name.toLowerCase()}.
        </Link>
        <button className="menu-btn" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? 'close' : 'menu'}
        </button>
        <nav className={open ? 'links open' : 'links'} aria-label="Main">
          <Link to="/#about" onClick={close}>about</Link>
          <Link to="/#projects" onClick={close}>projects</Link>
          <Link to="/#contact" onClick={close}>contact</Link>
          <a className="pill gold-bg" href={`https://mail.google.com/mail/?view=cm&to=${me.email}&su=Hello%20${me.first}`} target="_blank" rel="noreferrer">hire me</a>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<p className="wrap" style={{ padding: '6rem 0' }}>Page not found. <Link to="/">Go home</Link></p>} />
        </Routes>
      </main>
      <footer className="foot">
        <p>© 2026 {me.name}. Matric no. {me.matric}</p>
        <a href={me.github}>GitHub</a>
      </footer>
    </>
  )
}
