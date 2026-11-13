import { useMemo, useState } from 'react'
import { BarChart3, Code2, Database, Globe2, Sparkles, Terminal, Users } from 'lucide-react'
import { skillLayers } from '../data/portfolioData'

const icons = { code: Code2, globe: Globe2, database: Database, sparkles: Sparkles, chart: BarChart3, terminal: Terminal, users: Users }
const filters = ['All', 'Languages', 'Frontend', 'AI & Data', 'Tools', 'Practice']
const tickerRows = [
  { label: '01 / PROGRAMMING LANGUAGES & CORE', className: 'ticker-track-one', skills: ['Python', 'JavaScript', 'PHP', 'HTML5', 'CSS3', 'SQL / MySQL', 'Java'] },
  { label: '02 / FRAMEWORKS, AI & DEVELOPER TOOLS', className: 'ticker-track-two', skills: ['React', 'Bootstrap', 'Tailwind CSS', 'Pandas', 'NumPy', 'Generative AI', 'Agentic AI', 'VS Code', 'Git', 'GitHub', 'Jupyter Notebook'] },
]
const deviconUrl = (icon) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`
const tickerLogos = {
  Python: deviconUrl('python'),
  JavaScript: deviconUrl('javascript'),
  PHP: deviconUrl('php'),
  HTML5: deviconUrl('html5'),
  CSS3: deviconUrl('css3'),
  'SQL / MySQL': deviconUrl('mysql'),
  Java: deviconUrl('java'),
  React: deviconUrl('react'),
  Bootstrap: deviconUrl('bootstrap'),
  'Tailwind CSS': deviconUrl('tailwindcss'),
  Pandas: deviconUrl('pandas'),
  NumPy: deviconUrl('numpy'),
  'VS Code': deviconUrl('vscode'),
  Git: deviconUrl('git'),
  GitHub: deviconUrl('github'),
  'Jupyter Notebook': deviconUrl('jupyter'),
}
const relationships = {
  Python: ['OOP', 'SQL', 'CRUD', 'Database Connectivity', 'NumPy', 'Pandas'],
  OOP: ['Python', 'CRUD'],
  SQL: ['Python', 'CRUD', 'Database Connectivity'],
  CRUD: ['Python', 'SQL', 'Database Connectivity'],
  'Database Connectivity': ['Python', 'SQL', 'CRUD'],
  HTML5: ['CSS3', 'Bootstrap'],
  CSS3: ['HTML5', 'Bootstrap'],
  Bootstrap: ['HTML5', 'CSS3'],
  NumPy: ['Pandas', 'Data Cleaning', 'Data Manipulation and Analysis'],
  Pandas: ['NumPy', 'Data Cleaning', 'Data Manipulation and Analysis'],
  'Data Cleaning': ['Pandas', 'Data Manipulation and Analysis'],
  'Data Manipulation and Analysis': ['NumPy', 'Pandas', 'Data Cleaning'],
  'Generative AI': ['Prompt Engineering', 'Agentic AI', 'AI/ML Fundamentals'],
  'Prompt Engineering': ['Generative AI', 'Agentic AI'],
  'Agentic AI': ['Generative AI', 'Prompt Engineering'],
}
const usage = {
  Python: 'Used in full-stack training, project tasks, database applications and the five automation tools.',
  OOP: 'Covered in Python Full Stack training.',
  SQL: 'Applied in the Employee Database System, CRUD Application and database connectivity.',
  CRUD: 'The CRUD Application implements Create, Read, Update and Delete operations.',
  'Database Connectivity': 'Included in training and used by the Employee Database System and CRUD Application.',
  HTML5: 'Used with CSS and JavaScript for the Travel Yaari and Foodie websites.',
  CSS3: 'Used with HTML and JavaScript for the Travel Yaari and Foodie websites.',
  Bootstrap: 'Included in Python Full Stack training.',
  'Generative AI': 'Current internship learning includes Generative AI and practical project exploration.',
  'Agentic AI': 'Current internship learning includes Agentic AI concepts.',
  'Prompt Engineering': 'Current internship learning includes Prompt Engineering.',
  'AI/ML Fundamentals': 'Listed as an area of familiarity in the professional summary.',
  NumPy: 'Used for Data Analytics, alongside Pandas.',
  Pandas: 'Used for Data Analytics, alongside NumPy.',
  'Data Cleaning': 'Included in Data Analytics skills.',
  'Data Manipulation and Analysis': 'Included in Data Analytics skills.',
  Git: 'Listed among developer tools.',
  GitHub: 'Listed among developer tools.',
  'VS Code': 'Listed among developer tools.',
  'Jupyter Notebook': 'Listed among developer tools.',
}

function relatedSkills(skill) {
  const related = new Set([skill, ...(relationships[skill] ?? [])])
  Object.entries(relationships).forEach(([candidate, connections]) => {
    if (connections.includes(skill)) related.add(candidate)
  })
  return related
}

function TickerToken({ skill }) {
  const [imageFailed, setImageFailed] = useState(false)
  const FallbackIcon = skill === 'Generative AI' || skill === 'Agentic AI' ? Sparkles : Code2
  const logo = tickerLogos[skill]
  return (
    <span className="ticker-token">
      <span className="ticker-badge" aria-hidden="true">
        {logo && !imageFailed
          ? <img className="ticker-logo" src={logo} alt="" onError={() => setImageFailed(true)} />
          : <FallbackIcon className="ticker-fallback" size={22} strokeWidth={2} />}
      </span>
      <span>{skill}</span>
    </span>
  )
}

function LiveTicker() {
  return (
    <div className="skills-marquee" aria-label="Languages, frameworks, AI and developer tools">
      {tickerRows.map((row) => (
        <div className="marquee-row" key={row.label}>
          <div className="marquee-label">{row.label}</div>
          <div className="marquee-window">
            <div className={`marquee-track ${row.className}`}>
              {[0, 1].map((repeat) => <div className="marquee-group" key={repeat} aria-hidden={repeat === 1}>
                {row.skills.map((skill) => <TickerToken key={`${repeat}-${skill}`} skill={skill} />)}
              </div>)}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function SkillsMatrix() {
  const [filter, setFilter] = useState('All')
  const [hoveredSkill, setHoveredSkill] = useState('')
  const [selectedSkill, setSelectedSkill] = useState('')
  const activeSkill = hoveredSkill || selectedSkill
  const connected = useMemo(() => activeSkill ? relatedSkills(activeSkill) : new Set(), [activeSkill])
  const visibleLayers = skillLayers.filter((layer) => filter === 'All' || layer.filter === filter)

  return (
    <section className="section-shell content-section skills-section" id="skills">
      <div className="section-heading">
        <div><p className="section-kicker">02 / SKILLS & TOOLS</p><h2>Technologies, <span className="serif-italic">in live motion.</span></h2></div>
        <p className="section-note">A working vocabulary of languages, frameworks and tools—connected by the work they support.</p>
      </div>
      <LiveTicker />
      <div className="skill-matrix-heading"><div><span className="section-kicker">THE SKILL MATRIX</span><h3>Explore the <em>connections.</em></h3></div><p>Choose a category, then hover or select a skill to see how it relates to practical work.</p></div>
      <div className="skill-explorer">
        <div className="skill-filter-row" role="tablist" aria-label="Filter skill categories">
          {filters.map((item) => <button key={item} role="tab" aria-selected={filter === item} className={filter === item ? 'selected' : ''} onClick={() => setFilter(item)}>{item}</button>)}
        </div>
        <p className="skill-relationship" aria-live="polite">
          {activeSkill
            ? <><span className="relationship-pulse" /><strong>{activeSkill}</strong> — {usage[activeSkill] || 'Listed among professional skills.'} {connected.size > 1 && <span className="relationship-related">Related: {[...connected].filter((skill) => skill !== activeSkill).join(', ')}</span>}</>
            : <><span className="relationship-pulse" /> Hover or select a skill to see its connections and role.</>}
        </p>
      </div>
      <div className="skills-grid">
        {visibleLayers.map((layer, index) => {
          const Icon = icons[layer.icon]
          return (
            <article key={layer.id} className={`bento-card skill-card skill-layer-${layer.id}`}>
              <div className="skill-card-heading"><span className="skill-icon"><Icon size={20} /></span><div><span className="skill-count">LAYER / 0{index + 1}</span><h3>{layer.title}</h3></div></div>
              <div className="skill-tags">
                {layer.skills.map((skill) => {
                  const isDimmed = activeSkill && !connected.has(skill)
                  const isHighlighted = connected.has(skill)
                  return (
                    <button
                      type="button"
                      className={`skill-tag ${isHighlighted ? 'is-related' : ''} ${selectedSkill === skill ? 'is-selected' : ''} ${isDimmed ? 'is-dimmed' : ''}`}
                      key={skill}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill('')}
                      onFocus={() => setHoveredSkill(skill)}
                      onBlur={() => setHoveredSkill('')}
                      onClick={() => setSelectedSkill(selectedSkill === skill ? '' : skill)}
                      aria-pressed={selectedSkill === skill}
                    >{skill}</button>
                  )
                })}
              </div>
            </article>
          )
        })}
      </div>
      <div className="skills-foot"><span>07 LAYERS</span><span>{skillLayers.reduce((count, layer) => count + layer.skills.length, 0)} skills · Select a category to explore</span></div>
    </section>
  )
}
