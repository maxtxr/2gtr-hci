import StageTimeline from '../components/StageTimeline.jsx'

export default function Stages() {
  return (
    <div className="page-section">
      <div className="page-head">
        <span className="eyebrow">The process</span>
        <h1>Project stages</h1>
        <p className="lead">
          Six stages, from proposal to evaluation. Each one has its own page with
          its objectives, deliverables and report  -  open any of them below.
        </p>
      </div>

      <StageTimeline />
    </div>
  )
}
