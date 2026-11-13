import { useCallback, useEffect, useRef, useState } from 'react'
import { Check } from 'lucide-react'
import { themes } from './data/portfolioData'
import Navbar from './components/Navbar'
import HeroTerminal from './components/HeroTerminal'
import BentoExperience from './components/BentoExperience'
import SkillsMatrix from './components/SkillsMatrix'
import ProjectShowcase from './components/ProjectShowcase'
import JourneySections from './components/JourneySections'
import ResumeModal from './components/ResumeModal'
import ContactFooter from './components/ContactFooter'
import './App.css'

function readTheme() {
  try {
    const savedTheme = window.localStorage.getItem('gowri-portfolio-theme')
    return themes.some((theme) => theme.id === savedTheme) ? savedTheme : 'emerald'
  } catch {
    return 'emerald'
  }
}

export default function App() {
  const [activeTheme, setActiveTheme] = useState(readTheme)
  const [resumeOpen, setResumeOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const toastTimer = useRef(null)

  useEffect(() => {
    const theme = themes.find((item) => item.id === activeTheme) ?? themes[0]
    document.documentElement.style.setProperty('--accent', theme.color)
    document.documentElement.style.setProperty('--accent-glow', theme.glow)
    document.documentElement.style.setProperty('--accent-soft', theme.soft)
    try {
      window.localStorage.setItem('gowri-portfolio-theme', theme.id)
    } catch {
      // The selected accent still works when storage is unavailable.
    }
  }, [activeTheme])

  const copyToClipboard = useCallback(async (value) => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard access is unavailable.')
      await navigator.clipboard.writeText(value)
      setToastMessage('Copied to clipboard')
      window.clearTimeout(toastTimer.current)
      toastTimer.current = window.setTimeout(() => setToastMessage(''), 2600)
      return true
    } catch (error) {
      console.error('Unable to copy contact information.', error)
      setToastMessage('Clipboard unavailable — copy manually')
      window.clearTimeout(toastTimer.current)
      toastTimer.current = window.setTimeout(() => setToastMessage(''), 2600)
      return false
    }
  }, [])

  return (
    <>
      <div className="site-noise" aria-hidden="true" />
      <Navbar activeTheme={activeTheme} onThemeChange={setActiveTheme} onResume={() => setResumeOpen(true)} />
      <main id="top">
        <HeroTerminal onCopy={copyToClipboard} onResume={() => setResumeOpen(true)} />
        <BentoExperience />
        <SkillsMatrix />
        <JourneySections showCertificates={false} showEducation={false} />
        <ProjectShowcase />
        <JourneySections showExperience={false} />
        <ContactFooter onCopy={copyToClipboard} />
      </main>
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
      {toastMessage && <div className={`toast ${toastMessage.startsWith('Clipboard') ? 'toast-error' : ''}`} role="status">{!toastMessage.startsWith('Clipboard') && <Check size={16} />}{toastMessage}</div>}
    </>
  )
}
