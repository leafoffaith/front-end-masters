import { useEffect, useRef } from "react";

import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  //ref is a piece of something that I get the same thing every time
  const elRef = useRef(null);
  //if I have no elRef then create one
  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    //append the div to the modalRoot
    modalRoot.appendChild(elRef.current);

    //clean up function
    //componentWillUnmount
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
