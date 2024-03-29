import React from 'react'
import { classNameProps } from './basicProps'

const SvgUsers: React.FC<classNameProps> = props => (
  <svg
    className={'Zi Zi--Users' + props.svgclass}
    fill="currentColor"
    viewBox="0 0 24 24"
    width={22}
    height={22}
    {...props}
  >
    <path
      d="M9.676 11.252c-.243.433-.542.85-.494 1.237.189 1.509 2.938 1.807 3.746 2.816.59.736.835 1.852.892 3.725.01.303 0 .97-.867.97H1.933c-.915 0-.925-.643-.915-.936.062-1.877.292-3.02.895-3.76.812-.994 3.743-1.267 3.872-2.872.03-.361-.246-.74-.493-1.18C3.917 8.802 3.39 4 7.466 4s3.506 4.941 2.21 7.252zm8.073.79l.002.641c1.57 1.766 4.47 1.307 4.851 3.166.125.61.328 1.538.384 3.232.009.284.014.919-.905.919-.92 0-5.523-.021-6.875-.019 0-2.806-.144-5.987-2.707-6.285.537-.331 1.725-.504 2.178-1.013l.002-.64c-.881.118-2.679-.541-2.679-.541.61-.64.747-1.387 1.192-4.317.355-2.93 2.835-2.903 3.022-2.903.187 0 2.667-.027 3.028 2.903.439 2.93.577 3.677 1.186 4.317 0 0-1.797.659-2.68.54z"
      fillRule="evenodd"
    />
  </svg>
)

export default SvgUsers
