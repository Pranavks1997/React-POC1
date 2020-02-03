/** @jsx jsx */

import { jsx, css } from "@emotion/core";

export default function Loader() {
  return (
    <div css={styles}>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

const styles = css`
  height: 18.75rem;
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .lds-ripple {
    display: inline-block;
    position: relative;
    width: 5rem;
    height: 5rem;
  }
  .lds-ripple div {
    position: absolute;
    border: 0.25rem solid #253069;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-of-type(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 2.25rem;
      left: 2.25rem;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0rem;
      left: 0rem;
      width: 4.5rem;
      height: 4.5rem;
      opacity: 0;
    }
  }
`;
