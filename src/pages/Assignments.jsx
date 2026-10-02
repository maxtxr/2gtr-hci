import members from '../data/members.js'

const statusLabel = {
  tba: 'To be announced',
  open: 'Open',
  'in-progress': 'In progress',
  done: 'Done',
}

const monogram = (name) =>
  name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

const pad = (n) => String(n).padStart(2, '0')

export default function Assignments() {
  return (
    <div className="page-section">
      <div className="page-head">
        <span className="eyebrow">Individual assignments</span>
        <h1>Group Members</h1>
      </div>

      {members.map((m) => {
        const done = m.assignments.filter((a) => a.status === 'done').length
        const pct = m.assignments.length ? (done / m.assignments.length) * 100 : 0

        return (
          <section key={m.id} className="block">
            <div className="member-head">
              <span className="member-monogram" aria-hidden="true">
                {monogram(m.member)}
              </span>
              <h2>
                {m.member}
                <span className="member-head__number">{m.number}</span>
              </h2>
              <span className="member-head__count">
                {done}/{m.assignments.length} done
              </span>
            </div>

            <div className="member-bar" role="presentation">
              <span style={{ width: `${pct}%` }} />
            </div>

            <div className="assign-grid">
              {m.assignments.map((a, i) => (
                <article key={a.id} className={`assign assign--${a.status}`}>
                  <div className="assign__top">
                    <span className="assign__index" aria-hidden="true">
                      {pad(i + 1)}
                    </span>
                    <span
                      className={
                        'tag' +
                        (a.status === 'in-progress' || a.status === 'open' ? ' tag--active' : '') +
                        (a.status === 'done' ? ' tag--done' : '')
                      }
                    >
                      {statusLabel[a.status]}
                    </span>
                  </div>

                  <h3 className="assign__title">{a.title}</h3>
                  <p className="assign__desc">{a.description}</p>

                  <div className="assign__foot">
                    <span>Due</span>
                    <span className="assign__due">{a.dueDate}</span>
                  </div>

                  {a.status !== 'tba' ? (
                    a.report ? (
                      <a
                        className="assign__report"
                        href={a.report}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Report - Google Drive
                      </a>
                    ) : (
                      <span className="assign__report assign__report--none">
                        Report not published yet
                      </span>
                    )
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
