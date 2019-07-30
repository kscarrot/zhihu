import React from 'react'

const SvgProfile: React.SFC = props => (
  <svg
    className="Zi Zi--Profile"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={16}
    height={16}
    {...props}
  >
    <path
      d="M15.417 12.923c-.376.653-.837 1.281-.763 1.863.292 2.273 5.562 1.77 6.78 3.048.566.595.566.664.566 4.164-6.611-.07-13.363 0-20 0 .027-3.5 0-3.478.62-4.164 1.303-1.44 6.581-.715 6.78-3.133.045-.545-.38-1.114-.763-1.778C6.511 9.233 5.697 2 12 2s5.422 7.443 3.417 10.923z"
      fillRule="evenodd"
    />
  </svg>
)

export default SvgProfile
