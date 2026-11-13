import { ArrowUpRight, Braces, Languages } from 'lucide-react'
import { profile } from '../data/portfolioData'

const highlights = [
  { index: '01', metric: '05', title: 'Python Full Stack capstones', note: 'Practical assignments and five capstone projects.' },
  { index: '02', metric: 'WEB', title: 'Full-Stack Development', note: 'Python, OOP, SQL, HTML, CSS, Bootstrap and database connectivity.' },
  { index: '03', metric: 'AI', title: 'Generative & Agentic AI', note: 'Prompt Engineering, Agentic AI concepts and Data Science workflows.' },
  { index: '04', metric: 'DATA', title: 'Analytics & SQL', note: 'NumPy, Pandas, data cleaning, manipulation and analysis.' },
]

export default function BentoExperience() {
  return (
    <section className="section-shell content-section about-section" aria-labelledby="about-heading">
      <div className="section-heading">
        <div><p className="section-kicker">01 / ABOUT</p><h2 id="about-heading">The person behind<br /><span className="serif-italic">the projects.</span></h2></div>
        <p className="section-note">Computer Applications graduate. Python Full Stack Developer. Curious about practical software, AI and data.</p>
      </div>
      <div className="about-editorial-grid">
        <article className="about-story">
          <div className="about-story-rule"><span>PROFILE NOTES</span><span>01 — 03</span></div>
          <p>{'Python Full Stack Developer with a background in Computer Applications and practical knowledge of Python, Object-Oriented Programming, SQL, HTML, CSS, Bootstrap and database connectivity.'}</p>
          <p>{'Familiar with AI/ML fundamentals, Generative AI, Prompt Engineering and Data Analytics using NumPy and Pandas.'}</p>
          <p>{'Experienced in developing web applications, Python projects and automation solutions. Passionate about learning new technologies and building practical software solutions.'}</p>
          <div className="language-strip"><div className="language-strip-title"><Languages size={19} /><span>SPOKEN LANGUAGES</span></div><div className="language-pills">{profile.languages.map((language) => <span key={language}>{language}</span>)}</div></div>
        </article>
        <div className="highlight-column">
          <div className="highlight-heading"><Braces size={18} /><span>KEY HIGHLIGHTS</span><span className="highlight-heading-rule" /></div>
          <div className="highlight-grid">
            {highlights.map((highlight) => <article className="highlight-card" key={highlight.index}>
              <span className="highlight-index">{highlight.index} / HIGHLIGHT</span>
              <strong className={`highlight-metric metric-${highlight.index}`}>{highlight.metric}</strong>
              <h3>{highlight.title}</h3>
              <p>{highlight.note}</p>
              <ArrowUpRight className="highlight-arrow" size={17} />
            </article>)}
          </div>
          <div className="achievement-ribbon"><span>100+</span><p>Programming problems solved on HackerRank</p><i>01 / ACHIEVEMENT</i></div>
        </div>
      </div>
    </section>
  )
}
