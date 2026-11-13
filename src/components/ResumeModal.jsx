import { useEffect, useRef } from 'react'
import { Printer, X } from 'lucide-react'
import { achievements, education, internships, profile, projects, skillGroups } from '../data/portfolioData'

export default function ResumeModal({ open, onClose }) {
  const closeButton = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const previousFocus = document.activeElement
    const handleKeyDown = (event) => { if (event.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKeyDown)
    document.body.classList.add('modal-open')
    closeButton.current?.focus()
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('modal-open')
      previousFocus?.focus?.()
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="modal-backdrop resume-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <article className="resume-modal" role="dialog" aria-modal="true" aria-labelledby="resume-name">
        <div className="resume-controls"><span className="mono-label">RESUME DOSSIER / 2026</span><div><button type="button" className="button button-primary" onClick={() => window.print()}><Printer size={15} /> Print / Save PDF</button><button ref={closeButton} type="button" className="modal-close icon-button" onClick={onClose} aria-label="Close resume"><X size={19} /></button></div></div>
        <div className="resume-document">
          <div className="resume-head"><div><h1 id="resume-name">{profile.name}</h1><p>{profile.headline}</p></div><div className="resume-contact">{profile.email}<br />+91 {profile.phone}<br />{profile.location}</div></div>
          <section><h2>Professional Summary</h2><p>{profile.summary}</p></section>
          <section><h2>Technical Skills</h2>{skillGroups.map((group) => <p key={group.title}><strong>{group.title}:</strong> {group.skills.join(', ')}</p>)}</section>
          <section><h2>Experience</h2>{internships.map((item) => <div className="resume-entry" key={item.role}><div><strong>{item.role}</strong><span>{item.company} · {item.date}</span></div><ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div>)}</section>
          <section><h2>Selected Projects</h2>{projects.map((project) => <div className="resume-entry" key={project.id}><div><strong>{project.title}</strong><span>{project.category}</span></div><p>{project.description} Technologies: {project.tech.join(', ')}.</p></div>)}</section>
          <section><h2>Education</h2>{education.map((item) => <p key={item.degree}><strong>{item.degree}</strong> · {item.school} · {item.year} · {item.score}</p>)}</section>
          <section><h2>Certifications & Achievements</h2><ul>{achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul></section>
          <div className="resume-languages"><span>LANGUAGES</span> {profile.languages.join(' · ')}</div>
        </div>
      </article>
    </div>
  )
}
