import { useState } from 'react'
import { ArrowUpRight, BriefcaseBusiness, Check, Code2, Copy, Mail, MapPin, Phone, Send } from 'lucide-react'
import { profile } from '../data/portfolioData'

function SocialCard({ icon: Icon, label, href }) {
  if (!href) return null
  return <a className="social-card" href={href} target="_blank" rel="noopener noreferrer"><span className="social-icon"><Icon size={16} /></span><span>{label}</span><ArrowUpRight size={13} /></a>
}

export default function ContactFooter({ onCopy }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [draftUrl, setDraftUrl] = useState('')
  const [copiedContact, setCopiedContact] = useState('')

  const handleChange = (event) => {
    setForm((previous) => ({ ...previous, [event.target.name]: event.target.value }))
    setSubmitted(false)
  }

  const handleCopy = async (value) => {
    const success = await onCopy(value)
    if (success) {
      setCopiedContact(value)
      window.setTimeout(() => setCopiedContact(''), 2000)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(form.subject)
    const body = encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)
    setDraftUrl(`mailto:${profile.email}?subject=${subject}&body=${body}`)
    setSubmitted(true)
  }

  return (
    <>
      <section className="section-shell content-section contact-section" id="contact">
        <div className="contact-intro">
          <p className="section-kicker">07 / GET IN TOUCH</p>
          <h2>Let’s build something<br /><span className="serif-italic">meaningful together.</span></h2>
          <p className="contact-intro-copy">Interested in learning, building or collaborating? I’d be glad to hear from you.</p>
          <button type="button" className="contact-email-button" onClick={() => handleCopy(profile.email)}><Mail size={17} /><span><small>EMAIL — CLICK TO COPY</small><strong>{profile.email}</strong></span>{copiedContact === profile.email ? <Check size={16} /> : <Copy size={15} />}</button>
          <button type="button" className="contact-email-button phone-contact-button" onClick={() => handleCopy(profile.phone)}><Phone size={17} /><span><small>PHONE — CLICK TO COPY</small><strong>+91 {profile.phone}</strong></span>{copiedContact === profile.phone ? <Check size={16} /> : <Copy size={15} />}</button>
          <div className="contact-location"><MapPin size={15} /><span>{profile.location}</span></div>
          <div className="social-card-list">
            <SocialCard icon={Code2} label="GitHub" href={profile.links.github} />
            <SocialCard icon={BriefcaseBusiness} label="LinkedIn" href={profile.links.linkedin} />
            <SocialCard icon={Code2} label="Portfolio" href={profile.links.portfolio} />
          </div>
        </div>

        <div className="contact-form-panel">
          <div className="contact-form-heading"><span>START A CONVERSATION</span><span>NO. 07 / CONTACT</span></div>
          {submitted ? (
            <div className="form-confirmation" role="status">
              <span className="confirmation-icon"><Check size={22} /></span>
              <h3>Thanks, {form.name}.</h3>
              <p>Your message is ready to send. This portfolio doesn’t use a message server, so open your email draft to complete delivery.</p>
              <a className="button button-primary" href={draftUrl}>Open email draft <ArrowUpRight size={15} /></a>
              <button type="button" className="form-reset" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}>Write another message</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>Name<input name="name" autoComplete="name" value={form.name} onChange={handleChange} placeholder="Your name" required /></label>
              <label>Email<input name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required /></label>
              <label>Subject<input name="subject" value={form.subject} onChange={handleChange} placeholder="What would you like to discuss?" required /></label>
              <label>Message<textarea name="message" value={form.message} onChange={handleChange} placeholder="A little context goes a long way…" rows="4" minLength="10" required /></label>
              <button className="button button-primary contact-submit" type="submit">Prepare message <Send size={15} /></button>
              <p className="form-note">Your message opens in your email app; it isn’t sent or stored by this site.</p>
            </form>
          )}
        </div>
      </section>
      <footer className="site-footer section-shell">
        <a className="brand" href="#top"><span className="brand-mark">GD</span><span className="brand-lockup"><strong>A. GOWRI DEVI</strong><small>DEVELOPER · PORTFOLIO</small></span></a>
        <p>Designed with intent. Built with curiosity.</p>
        <a href="#top" className="back-top">BACK TO TOP <ArrowUpRight size={13} /></a>
        <span className="footer-copy">© 2026 A. Gowri Devi</span>
      </footer>
    </>
  )
}
