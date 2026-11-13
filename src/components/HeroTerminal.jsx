import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Check, Copy, MapPin } from 'lucide-react'
import { profile } from '../data/portfolioData'

export default function HeroTerminal({ onCopy, onResume }) {
  const [copyState, setCopyState] = useState('')
  const [town, state] = profile.location.split(', ')

  const copyEmail = async () => {
    const copied = await onCopy(profile.email)
    setCopyState(copied ? 'Copied!' : 'Copy unavailable')
    window.setTimeout(() => setCopyState(''), 2000)
  }

  return (
    <section className="hero-section section-shell" id="about">
      <div className="hero-grid-glow" aria-hidden="true" />
      <div className="hero-copy">
        <div className="chronicle-masthead"><span>THE DEVELOPER’S CHRONICLE</span><i /><span>VOL. 01</span></div>
        <p className="hero-overline">PORTFOLIO EDITION · 2026 <span>|</span> {town}, {state}</p>
        <div className="status-pill"><span className="status-dot" /> Open to opportunities <span className="status-divider">·</span> Full-stack & software development</div>
        <h1>A. Gowri Devi<span className="hero-period">.</span></h1>
        <p className="hero-role">Python Full Stack Developer <span>·</span> AI & ML Enthusiast <span>·</span> Data Analytics</p>
        <p className="hero-summary">Grounded in Computer Applications, building web applications, Python projects and automation. Exploring Generative AI, Agentic AI and data analytics through practical software development.</p>
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">Explore projects <ArrowDownRight size={16} /></a>
          <button type="button" className="button button-glass" onClick={onResume}>View resume <ArrowUpRight size={15} /></button>
          <button type="button" className="copy-email" onClick={copyEmail}>
            {copyState === 'Copied!' ? <Check size={14} /> : <Copy size={14} />}
            {copyState || 'Copy email'}
          </button>
        </div>
        <div className="hero-meta"><MapPin size={18} /><span>{profile.location}</span></div>
      </div>
      <div className="hero-index"><span>01</span> / INTRODUCTION</div>
    </section>
  )
}
