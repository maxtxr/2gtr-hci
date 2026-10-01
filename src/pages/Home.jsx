import { Link } from 'react-router-dom'
import site from '../data/site.js'
import product from '../data/product.js'
import Icon from '../components/Icons.jsx'
// import PhoneMockup from '../components/PhoneMockup.jsx'
import Logo from '../components/Logo.jsx'
import StageTimeline from '../components/StageTimeline.jsx'
import { scrollToId } from '../utils/scroll.js'

const goalIcons = ['target', 'flame', 'users']

export default function Home() {
  const showStages = (e) => {
    e.preventDefault()
    scrollToId('process')
  }

  return (
    <>
      <section className="hero">
        <div className="shell hero__grid">
          <div className="hero__text">
            <p className="eyebrow eyebrow--on-green">{site.course} project</p>

            <h1>
              Find your people.
              <br />
              <em>Play your sport.</em>
            </h1>

            <p className="hero__lead">{site.oneLiner}</p>

            <div className="button-row">
              <button type="button" className="button button--primary" onClick={showStages}>
                See the stages
                <Icon name="arrowRight" size={16} />
              </button>
              <Link to="/project" className="button">
                Read the brief
              </Link>
            </div>
          </div>

          <div className="hero__art">
            {/* <PhoneMockup /> */}
            <Logo size={200} />
          </div>
        </div>
      </section>

      <section className="section ruled" aria-labelledby="goals-title">
        <div className="shell">
          <div className="section-heading">
            <span className="eyebrow">What we are building</span>
            <h2 id="goals-title">{product.headline}</h2>
            <p>{product.intro}</p>
          </div>

          <div className="props">
            {product.goals.goals.map((goal, i) => (
              <div key={goal.id} className="prop">
                <span className="prop__icon" aria-hidden="true">
                  <Icon name={goalIcons[i]} size={19} />
                </span>
                <h3 className="prop__title">{goal.title}</h3>
                <p className="prop__body">{goal.body}</p>
              </div>
            ))}
          </div>

          <p className="section-foot">
            <Link to="/project" className="arrow-link">
              Read the full product brief
              <Icon name="arrowRight" size={16} />
            </Link>
          </p>
        </div>
      </section>

      <section
        className="section ruled"
        id="process"
        tabIndex={-1}
        aria-labelledby="process-title"
      >
        <div className="shell">
          <div className="section-heading">
            <span className="eyebrow">The process</span>
            <h2 id="process-title">Six stages, from proposal to evaluation</h2>
            <p>
              Every stage has its own page with its objectives, deliverables and
              report  -  open any of them below.
            </p>
          </div>

          <StageTimeline />
        </div>
      </section>

      <section className="closing">
        <div className="shell">
          <span className="eyebrow">Get involved</span>
          <h2>Follow the project, stage by stage.</h2>
          <p>
            The product brief holds everything we know so far: the problem, the users,
            the competitive landscape and the features we intend to build.
          </p>
          <div className="button-row">
            <Link to="/project" className="button button--primary">
              See the product
              <Icon name="arrowRight" size={16} />
            </Link>
            <Link to="/assignments" className="button">
              Assignments
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
