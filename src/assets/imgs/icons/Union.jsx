import * as React from "react";

function Union(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.053 10.105A5.053 5.053 0 105.053 0a5.053 5.053 0 000 10.105zm21.894 0a5.053 5.053 0 100-10.105 5.053 5.053 0 000 10.105zM10.105 26.947a5.053 5.053 0 11-10.105 0 5.053 5.053 0 0110.105 0zM26.947 32a5.053 5.053 0 100-10.105 5.053 5.053 0 000 10.105z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoUnion = React.memo(Union);
export default MemoUnion;
