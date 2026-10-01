import { Link } from 'react-router-dom'
import Icon from './Icons.jsx'
import stages, { stageStatusLabel } from '../data/stages.js'

const pad = (n) => String(n).padStart(2, '0')

export default function StageTimeline() {
  return (
    <ol className="stage-grid">
      {stages.map((stage) => (
        <li key={stage.id} className="stage-grid__cell">
          <Link
            to={`/stages/${stage.slug}`}
            className={`stage-card stage-card--${stage.status}`}
            aria-label={`Stage ${stage.id}: ${stage.title} - ${stageStatusLabel[stage.status]}`}
          >
            <span className="stage-card__head">
              <span className="stage-card__num">{pad(stage.id)}</span>
              <span className={`status status--${stage.status}`}>
                {stageStatusLabel[stage.status]}
              </span>
            </span>

            <span className="stage-card__title">{stage.title}</span>
            <span className="stage-card__blurb">{stage.blurb}</span>

            <span className="stage-card__foot">
              <span className="stage-card__count">
                Stage {pad(stage.id)} of {pad(stages.length)}
              </span>
              <span className="stage-card__go" aria-hidden="true">
                <Icon name="arrowRight" size={15} />
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ol>
  )
}
