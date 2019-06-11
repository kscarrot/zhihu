import React from "react";

const SvgHotIcon = props => (
  <svg
    className="Zi Zi--Hot SearchBar-hotIcon"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={18}
    height={18}
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1="63.313%"
        x2="46.604%"
        y1="-13.472%"
        y2="117.368%"
      >
        <stop offset="2.35%" stopColor="#EC471E" />
        <stop offset="100%" stopColor="#FF6DC4" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="M14.553 20.78c.862-.651 1.39-1.792 1.583-3.421.298-2.511-.656-4.904-2.863-7.179.209 2.291.209 3.73 0 4.314-.41 1.143-1.123 1.983-1.91 2.03-1.35.079-2.305-.512-2.863-1.774-.676 1.25-.782 2.556-.318 3.915.31.906.94 1.684 1.89 2.333C7.144 20.131 5 17.336 5 14.022c0-2.144.898-4.072 2.325-5.4.062 2.072.682 3.598 2.13 4.822-.67-1.112-.734-2.11-.734-3.517 0-3.253 2.067-6.007 4.913-6.927a7.35 7.35 0 0 0 2.157 4.918C17.722 9.214 19 11.463 19 14.022c0 3.073-1.844 5.7-4.447 6.758z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgHotIcon;
