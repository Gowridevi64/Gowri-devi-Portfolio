import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, Clock3, Code2, ExternalLink, X } from 'lucide-react'
import { projects } from '../data/portfolioData'

function OtpSandbox() {
  const [otp, setOtp] = useState('')
  const [entry, setEntry] = useState('')
  const [seconds, setSeconds] = useState(0)
  const [status, setStatus] = useState('')

  useEffect(() => {
    if (!seconds) return undefined
    const timer = window.setInterval(() => setSeconds((value) => Math.max(0, value - 1)), 1000)
    return () => window.clearInterval(timer)
  }, [seconds])

  const generate = () => {
    setOtp(String(Math.floor(100000 + Math.random() * 900000)))
    setEntry('')
    setSeconds(60)
    setStatus('')
  }

  const verify = (event) => {
    event.preventDefault()
    if (!otp || seconds === 0) setStatus('Generate a new code first.')
    else if (entry === otp) setStatus('Code verified successfully.')
    else setStatus('That code does not match. Try again.')
  }

  return (
    <div className="sandbox">
      <div className="sandbox-heading"><span className="sandbox-live" /> INTERACTIVE OTP SANDBOX <span className="sandbox-caption">Demo flow · 60 second expiry</span></div>
      <div className="otp-generated"><span>YOUR ONE-TIME CODE</span><strong>{otp || '------'}</strong><span className="otp-timer"><Clock3 size={13} /> {seconds ? `Expires in 00:${String(seconds).padStart(2, '0')}` : 'Generate a code to begin'}</span></div>
      <div className="otp-controls">
        <button type="button" className="button button-primary" onClick={generate}>{otp && seconds ? 'New code' : 'Generate OTP'}</button>
        <form onSubmit={verify}>
          <input value={entry} onChange={(event) => setEntry(event.target.value.replace(/\D/g, '').slice(0, 6))} inputMode="numeric" maxLength={6} placeholder="Enter 6-digit code" aria-label="Enter six digit OTP" />
          <button type="submit" className="button button-outline">Verify</button>
        </form>
      </div>
      {status && <p className={`otp-status ${status.includes('successfully') ? 'success' : ''}`} aria-live="polite">{status}</p>}
      <p className="sandbox-disclaimer">Demo only — the generated code is displayed here and is not sent to a phone or email.</p>
    </div>
  )
}

function AutomationTabs({ tools }) {
  const [selected, setSelected] = useState(0)
  return (
    <div className="automation-preview">
      <div className="subtool-tabs" role="tablist" aria-label="Automation projects">
        {tools.map((tool, index) => <button type="button" role="tab" aria-selected={selected === index} key={tool.title} className={selected === index ? 'selected' : ''} onClick={() => setSelected(index)}>{tool.title}</button>)}
      </div>
      <pre className="cli-preview"><span>$ sample output</span>{'\n'}{tools[selected].output}</pre>
    </div>
  )
}

function CaseVisual({ project, index }) {
  return (
    <div className={`case-visual case-visual-${index + 1}`}>
      <div className="case-visual-top"><span>CASE FILE / 0{index + 1}</span><span>{project.category.toUpperCase()}</span></div>
      {project.id === 'travel-yaari' && <div className="visual-travel"><div className="travel-sun" /><div className="travel-horizon" /><div className="travel-mountain" /><span>TRAVEL<br /><i>YAARI</i></span><small>DISCOVER A NEW PLACE</small></div>}
      {project.id === 'foodie' && <div className="visual-food"><span className="food-wordmark">foodie</span><span className="food-stamp">GOOD FOOD<br />GOOD MOOD</span><div className="food-plate"><i /><i /><i /></div><div className="food-menu-lines"><i /><i /><i /></div></div>}
      {project.id === 'otp-system' && <div className="visual-otp"><span className="otp-shield">✓</span><span className="otp-digits">••••••</span><small>VERIFICATION CODE</small><span className="otp-checkline"><i /> IDENTITY CONFIRMED</span></div>}
      {project.id === 'employee-database' && <div className="visual-employees"><div className="employee-side"><i /><i /><i /><i /></div><div className="employee-table"><span>EMPLOYEE RECORDS</span><i /><i /><i /><i /></div></div>}
      {project.id === 'crud-application' && <div className="visual-crud"><span>RECORD MANAGEMENT</span><div className="crud-actions"><i>CREATE</i><i>READ</i><i>UPDATE</i><i>DELETE</i></div><b>CRUD</b></div>}
      {project.id === 'python-automation' && <div className="visual-automation"><span className="automation-prompt">&gt;_</span><div><span>python</span><strong>automation</strong></div><small>5 TOOLS · CSV · FILE HANDLING</small><i className="automation-grid" /></div>}
      <span className="visual-index">A. GOWRI DEVI / SELECTED WORK</span>
    </div>
  )
}

function ProjectModal({ project, projectIndex, onClose }) {
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
    <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <motion.article className="project-modal" initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 12, opacity: 0 }} role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close icon-button" onClick={onClose} aria-label="Close project details"><X size={19} /></button>
        <div className="modal-kicker"><span>CASE FILE / 0{projectIndex + 1}</span><span>{project.category}</span></div>
        <h2 id="modal-title">{project.title}</h2><p className="modal-subtitle">{project.subtitle}</p>
        <p className="modal-description">{project.description}</p>
        <div className="modal-block"><h3>Project details</h3><p>{project.architecture}</p></div>
        <ul className="project-feature-list">{project.features.map((feature) => <li key={feature}><Check size={14} />{feature}</li>)}</ul>
        <div className="modal-block"><h3>Technology</h3><div className="project-tags">{project.tech.map((item) => <span key={item}>{item}</span>)}</div></div>
        {project.id === 'otp-system' && <OtpSandbox />}
        {project.tools && <AutomationTabs tools={project.tools} />}
        <div className="modal-links">
          {project.github ? <a className="button button-primary" href={project.github} target="_blank" rel="noreferrer"><Code2 size={16} /> Source code <ExternalLink size={13} /></a> : <span className="link-unavailable"><Code2 size={15} /> Source code on request</span>}
          {project.demo ? <a className="button button-outline" href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} /></a> : <span className="link-unavailable"><ExternalLink size={14} /> Live demo in progress</span>}
        </div>
      </motion.article>
    </motion.div>
  )
}

export default function ProjectShowcase() {
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const filters = ['All', 'Web & Full Stack', 'Python & SQL', 'Automation & Tools']
  const filteredProjects = projects.map((project, index) => ({ project, index })).filter(({ project }) => filter === 'All' || project.category === filter || project.alsoCategories?.includes(filter))

  return (
    <section className="section-shell content-section projects-section" id="projects">
      <div className="section-heading">
        <div><p className="section-kicker">04 — SELECTED PROJECTS</p><h2>Ideas in <span className="serif-italic">practice.</span></h2></div>
        <p className="section-note">Case files from web, full-stack, database and Python automation work.</p>
      </div>
      <div className="project-filters" role="tablist" aria-label="Filter projects">
        {filters.map((item) => <button type="button" className={filter === item ? 'active' : ''} key={item} onClick={() => setFilter(item)} role="tab" aria-selected={filter === item}>{item}</button>)}
      </div>
      <motion.div className="projects-grid" layout>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map(({ project, index }) => (
            <motion.article className="project-case" key={project.id} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .22 }}>
              <CaseVisual project={project} index={index} />
              <div className="case-content">
                <div className="case-title-row"><div><span className="project-category">{project.category.toUpperCase()}</span><h3>{project.title}</h3></div><span className="case-count">0{index + 1}</span></div>
                <p className="case-description">{project.description}</p>
                <ul className="case-feature-list">{project.features.map((feature) => <li key={feature}><Check size={13} />{feature}</li>)}</ul>
                <div className="project-tags">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
                <div className="case-actions">
                  {project.demo ? <a className="case-link" href={project.demo} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>Live demo <ArrowUpRight size={14} /></a> : <span className="case-link unavailable">Live demo · In progress</span>}
                  {project.github ? <a className="case-link secondary" href={project.github} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}><Code2 size={14} /> Source code</a> : <span className="case-link secondary unavailable"><Code2 size={14} /> Code on request</span>}
                  <button type="button" className="case-open" onClick={() => setSelectedProject({ project, index })}>Open case file <ArrowUpRight size={14} /></button>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
      <div className="projects-footnote"><span><Check size={14} /> 06 PROJECTS</span><span>Selected work · all details preserved from profile</span></div>
      <AnimatePresence>{selectedProject && <ProjectModal project={selectedProject.project} projectIndex={selectedProject.index} onClose={() => setSelectedProject(null)} />}</AnimatePresence>
    </section>
  )
}
