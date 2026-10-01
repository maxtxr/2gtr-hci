const paths = {
  // Sports
  football: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 8.1 15.7 11l-1.4 4.3H9.7L8.3 11z" />
      <path d="M12 3.4v4.7M20.2 10.4l-4.5 1.9M17.1 18.6l-2.8-3.3M6.9 18.6l2.8-3.3M3.8 10.4l4.5 1.9" />
    </>
  ),
  volleyball: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M3.6 9.6c4.4 1.1 8.2-.4 11-3.4" />
      <path d="M9.2 20.3c1.6-4.2 1.1-8.4-1.4-12.1" />
      <path d="M20.4 10.4c-3.6.5-6.9 2.3-9.2 5.1" />
    </>
  ),
  wheelchair: (
    <>
      <circle cx="10.6" cy="15.4" r="5.8" />
      <circle cx="15.2" cy="3.9" r="1.7" />
      <path d="M13.6 7.4h4.3l1.3 4.6" />
      <path d="M13.4 7.1 12 12.3l4.1 2.3" />
    </>
  ),

  // Product
  bolt: <path d="M13.4 2.4 4.8 13.6h5.6L9.9 21.6l8.7-11.4h-5.7z" />,
  flame: (
    <path d="M12 21.4c3.7 0 6.2-2.5 6.2-5.7 0-4.3-4.2-6.3-3.8-10.6-2.4 1.4-3.4 3.8-3.4 5.8 0 1.4-.9 1.9-1.7 1.1-.9-.9-1.3-2-1.3-3.3-1.9 1.8-2.2 4.3-2.2 7 0 3.2 2.5 5.7 6.2 5.7Z" />
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="12" cy="12" r="0.9" />
    </>
  ),
  users: (
    <>
      <circle cx="9.2" cy="8" r="3.3" />
      <path d="M3.4 20a5.8 5.8 0 0 1 11.6 0" />
      <path d="M16.2 5.2a3.3 3.3 0 0 1 0 5.9M17.6 14.7A5.8 5.8 0 0 1 20.6 20" />
    </>
  ),

  // UI
  search: (
    <>
      <circle cx="10.8" cy="10.8" r="6.4" />
      <path d="m15.6 15.6 4 4" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.2s6.4-5.6 6.4-10.4a6.4 6.4 0 1 0-12.8 0C5.6 15.6 12 21.2 12 21.2Z" />
      <circle cx="12" cy="10.6" r="2.3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M12 7.2V12l3.2 1.9" />
    </>
  ),
  bell: (
    <>
      <path d="M18 16.4V11a6 6 0 0 0-12 0v5.4L4.4 18.6h15.2z" />
      <path d="M10 21a2.2 2.2 0 0 0 4 0" />
    </>
  ),
  plus: <path d="M12 5.4v13.2M5.4 12h13.2" />,
  home: (
    <>
      <path d="M4 10.4 12 4l8 6.4V20H4z" />
      <path d="M9.6 20v-5.6h4.8V20" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <path d="m15.2 8.8-1.6 4.8-4.8 1.6 1.6-4.8z" />
    </>
  ),
  usersSmall: (
    <>
      <circle cx="12" cy="8.2" r="3.4" />
      <path d="M5.6 19.4a6.4 6.4 0 0 1 12.8 0" />
    </>
  ),
  check: <path d="M20 6.4 9.2 17.2 4 12" />,
  arrowRight: <path d="M4 12h15m-5.6-5.6L19 12l-5.6 5.6" />,
  arrowUpRight: <path d="M7 17 17 7m-8.4 0H17v8.4" />,
  menu: <path d="M4 7.5h16M4 12h16M4 16.5h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  sliders: (
    <>
      <path d="M5 7h14M5 12h14M5 17h14" />
      <circle cx="9" cy="7" r="2" />
      <circle cx="15" cy="12" r="2" />
      <circle cx="8" cy="17" r="2" />
    </>
  ),
}

export default function Icon({ name, size = 20, className = '', strokeWidth = 1.7 }) {
  const shape = paths[name]
  if (!shape) return null

  return (
    <svg
      className={`icon ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {shape}
    </svg>
  )
}
