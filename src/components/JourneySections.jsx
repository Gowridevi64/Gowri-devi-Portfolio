import { useEffect, useState } from 'react'
import { ArrowUpRight, BriefcaseBusiness, CalendarDays, GraduationCap, MapPin, X } from 'lucide-react'
import { credentials, education, internships } from '../data/portfolioData'

function CredentialModal({ credential, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => { if (event.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKeyDown)
    document.body.classList.add('modal-open')
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('modal-open')
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <article className="credential-modal" role="dialog" aria-modal="true" aria-labelledby="credential-title">
        <button className="modal-close icon-button" onClick={onClose} aria-label="Close credential details"><X size={18} /></button>
        <div className="credential-frame">
          <img src={credential.image} alt={`${credential.title} certificate`} />
        </div>
        <span className="modal-kicker">{credential.category} / CREDENTIAL {String(credentials.indexOf(credential) + 1).padStart(2, '0')}</span>
        <h2 id="credential-title">{credential.title}</h2>
        <p>{credential.details}</p>
        <div className="credential-modal-tags">{credential.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <dl className="credential-facts"><div><dt>ISSUER</dt><dd>{credential.issuer}</dd></div><div><dt>DATE</dt><dd>{credential.date}</dd></div></dl>
        <p className="credential-note">Additional verification details were not included in the provided profile.</p>
        <button className="button button-outline" onClick={onClose}>Close archive <ArrowUpRight size={14} /></button>
      </article>
    </div>
  )
}

export default function JourneySections({ showExperience = true, showCertificates = true, showEducation = true }) {
  const [selectedCredential, setSelectedCredential] = useState(null)

  return (
    <>
      {showExperience && <section className="section-shell content-section journey-section" id="experience">
        <div className="section-heading">
          <div><p className="section-kicker">03 — EXPERIENCE</p><h2>Learning through <span className="serif-italic">doing.</span></h2></div>
          <p className="section-note">Internships and project work building practical skills across full-stack development, automation and AI.</p>
        </div>
        <div className="journey-layout">
          <div className="journey-rail" aria-hidden="true"><span>2026</span><i /><span>EARLIER</span></div>
          <div className="journey-list">
            {internships.map((item, index) => (
              <article className="journey-item" key={item.role}>
                <span className={`journey-node ${index === 0 ? 'is-current' : ''}`} aria-hidden="true" />
                <div className="journey-card">
                  <div className="journey-card-top"><span className="journey-period"><CalendarDays size={13} /> {item.date}</span><span className={`journey-badge ${index === 0 ? 'current' : ''}`}>{index === 0 ? 'CURRENT' : 'INTERNSHIP'}</span></div>
                  <div className="journey-role-line"><BriefcaseBusiness size={17} /><div><h3>{item.role}</h3><span>{item.company}</span></div></div>
                  <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
          <aside className="journey-aside"><span className="aside-index">03 / 01</span><p>Hands-on learning<br />across evolving<br /><i>areas of technology.</i></p><span className="aside-caption">PYTHON · FULL STACK · AI · DATA</span></aside>
        </div>
      </section>}

      {showCertificates && <section className="section-shell content-section certificates-section" id="certificates">
        <div className="section-heading">
          <div><p className="section-kicker">05 / CERTIFICATES & MILESTONES</p><h2>Proof of <span className="serif-italic">curiosity.</span></h2></div>
          <p className="section-note">Credentials, learning milestones and programming practice.</p>
        </div>
        <div className="credential-grid">
          {credentials.map((credential) => (
            <article
              className="credential-card"
              key={credential.title}
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              aria-label={`Inspect ${credential.title} from ${credential.issuer}`}
              onClick={() => setSelectedCredential(credential)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setSelectedCredential(credential)
                }
              }}
            >
              <div className="credential-card-art">
                <img className="credential-card-image" src={credential.image} alt={`${credential.title} certificate`} />
              </div>
              <div className="credential-card-body">
                <span className="credential-category">{credential.category}</span>
                <strong>{credential.title}</strong>
                <span className="credential-issuer">{credential.issuer}</span>
                <div className="credential-tags">{credential.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <span className="credential-date"><CalendarDays size={15} /> {credential.date}</span>
                <span className="credential-inspect">Inspect Credential <ArrowUpRight size={16} /></span>
              </div>
            </article>
          ))}
        </div>
      </section>}

      {showEducation && <section className="section-shell content-section education-section" id="education">
        <div className="section-heading">
          <div><p className="section-kicker">06 / EDUCATION</p><h2>Academic <span className="serif-italic">register.</span></h2></div>
          <p className="section-note">A record of studies in Computer Applications and prior academic milestones.</p>
        </div>
        <div className="education-register">
          {education.map((item, index) => (
            <article className="education-register-card" key={item.degree}>
              <div className="education-card-top"><span>ARCHIVE COPY · {String(index + 1).padStart(2, '0')}</span><GraduationCap size={20} /></div>
              <span className="education-period"><CalendarDays size={15} /> CLASS OF {item.year}</span>
              <h3>{item.degree}</h3>
              <p>{item.school}</p>
              <span className="education-location"><MapPin size={15} /> {item.location}</span>
              <div className="education-record-bottom"><span>ACADEMIC RECORD</span><strong>{item.score}</strong></div>
            </article>
          ))}
        </div>
      </section>}

      {selectedCredential && <CredentialModal credential={selectedCredential} onClose={() => setSelectedCredential(null)} />}
    </>
  )
}
