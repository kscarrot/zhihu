import React from "react";

const SvgFeedBack = props => (
  <svg
    className="FeedBack"
    fill="currentColor"
    width={24}
    height={24}
    {...props}
  >
    <path d="M19.99 6.99L18 5s-1-1-2-1H8C7 4 6 5 6 5L4 7S3 8 3 9v9s0 2 2.002 2H19c2 0 2-2 2-2V9c0-1-1.01-2.01-1.01-2.01zM16.5 5.5L19 8H5l2.5-2.5h9zm-2 5.5s.5 0 .5.5-.5.5-.5.5h-5s-.5 0-.5-.5.5-.5.5-.5h5z" />
  </svg>
);

export default SvgFeedBack;
