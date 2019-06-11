import React from "react";

const SvgTrashOutline = props => (
  <svg
    className="Zi Zi--TrashOutline"
    fill="currentColor"
    width={24}
    height={24}
    {...props}
  >
    <path
      d="M16.213 18.638h-7.83V8.085H7.021v10.553c0 .751.611 1.362 1.362 1.362h7.83c.75 0 1.361-.61 1.361-1.362V8.085h-1.361v10.553zM15.19 5.362c0-.751-.61-1.362-1.361-1.362h-3.064c-.751 0-1.362.61-1.362 1.362v.68H6.766S6 6 6 6.715c0 .714.766.69.766.69H17.89s.705 0 .705-.688c0-.689-.705-.673-.705-.673h-2.7v-.681zm-1.361.68h-3.064v-.68h3.064v.68zm-3.745 3.064v8.17h1.362v-8.17h-1.362zm3.064 0v8.17h1.362v-8.17h-1.362z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgTrashOutline;
