import Icon from './Icons.jsx'
import Logo from './Logo.jsx'

const filters = [
  { label: 'Football', icon: 'football', active: true },
  { label: 'Volleyball', icon: 'volleyball', active: false },
  { label: 'Beginner', icon: 'target', active: false },
]

const events = [
  {
    id: 'ev-1',
    icon: 'football',
    title: 'Sunset kickabout',
    time: '18:30',
    place: 'Riverside pitch',
    level: 'Beginner friendly',
    going: 8,
    cap: 12,
    featured: true,
  },
  {
    id: 'ev-2',
    icon: 'volleyball',
    title: 'Morning volleyball',
    time: '07:00',
    place: 'Sportspark',
    level: 'All levels',
    going: 5,
    cap: 10,
    featured: false,
  },
]

const people = [
  { initials: 'AM', tone: 'green' },
  { initials: 'JK', tone: 'orange' },
  { initials: 'RS', tone: 'green' },
  { initials: 'LP', tone: 'sand' },
]

const tabs = [
  { icon: 'home', label: 'Home', active: true },
  { icon: 'compass', label: 'Explore' },
  { icon: 'usersSmall', label: 'Squad' },
  { icon: 'target', label: 'You' },
]

export default function PhoneMockup() {
  return (
    <div className="ph-stage" aria-hidden="true">
      <div className="ph-float ph-float--streak">
        <span className="ph-float__icon">
          <Icon name="flame" size={15} strokeWidth={1.9} />
        </span>
        <span>
          <strong>4 week</strong>
          <em>streak</em>
        </span>
      </div>

      <div className="ph-float ph-float--roster">
        <span className="ph-float__avatars">
          {people.slice(0, 3).map((p) => (
            <span key={p.initials} className={`ph-avatar ph-avatar--${p.tone}`}>
              {p.initials}
            </span>
          ))}
        </span>
        <em>8 going tonight</em>
      </div>

      <div className="ph">
        <div className="ph__status">
          <span>9:41</span>
          <span className="ph__status-icons">
            <span className="ph__bars" />
            <span className="ph__battery" />
          </span>
        </div>

        <div className="ph__bar">
          <span className="ph__brand">
            <Logo size={20} />
            2Gether
          </span>
          <span className="ph__bell">
            <Icon name="bell" size={15} strokeWidth={1.8} />
          </span>
        </div>

        <p className="ph__hello">Good evening</p>
        <p className="ph__headline">Find your session</p>

        <div className="ph__search">
          <Icon name="search" size={14} strokeWidth={1.9} />
          Sport, level or place
          <span className="ph__search-tune">
            <Icon name="sliders" size={13} strokeWidth={1.9} />
          </span>
        </div>

        <div className="ph__filters">
          {filters.map((f) => (
            <span
              key={f.label}
              className={'ph-chip' + (f.active ? ' is-active' : '')}
            >
              <Icon name={f.icon} size={11} strokeWidth={1.9} />
              {f.label}
            </span>
          ))}
        </div>

        <p className="ph__section-label">Near you today</p>

        <ul className="ph-events">
          {events.map((event) => (
            <li
              key={event.id}
              className={'ph-event' + (event.featured ? ' ph-event--featured' : '')}
            >
              <span className="ph-event__sport">
                <Icon name={event.icon} size={17} strokeWidth={1.7} />
              </span>

              <div className="ph-event__body">
                <p className="ph-event__title">{event.title}</p>
                <p className="ph-event__meta">
                  <Icon name="clock" size={11} strokeWidth={1.9} />
                  {event.time}
                  <Icon name="pin" size={11} strokeWidth={1.9} />
                  {event.place}
                </p>
                <p className="ph-event__foot">
                  <span className="ph-event__level">{event.level}</span>
                  <span className="ph-event__count">
                    {event.going}/{event.cap}
                  </span>
                </p>
              </div>

              <span className="ph-event__cta">{event.featured ? 'Join' : 'View'}</span>
            </li>
          ))}
        </ul>

        <div className="ph__tabs">
          {tabs.map((tab) => (
            <span
              key={tab.label}
              className={'ph-tab' + (tab.active ? ' is-active' : '')}
            >
              <Icon name={tab.icon} size={15} strokeWidth={1.8} />
              {tab.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
