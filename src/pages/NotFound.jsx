import { Link } from 'react-router-dom'
import Icon from '../components/Icons.jsx'

export default function NotFound() {
  return (
    <div className="page-section">
      <div className="page-head not-found">
        <span className="eyebrow">Error 404</span>
        <h1>No match found</h1>
        <p className="lead">
          There&rsquo;s no page at this address. Let&rsquo;s get you back to the squad.
        </p>
        <div className="button-row">
          <Link to="/" className="button button--primary">
            Back to home
            <Icon name="arrowRight" size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
