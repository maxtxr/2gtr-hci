import logo from '../assets/logo.png'

export default function Logo({ size = 32, onGreen = false }) {
  return (
    <img
      className={onGreen ? 'logo logo--on-green' : 'logo'}
      src={logo}
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
    />
  )
}
