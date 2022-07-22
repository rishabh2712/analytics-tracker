import React, { useRef, useEffect } from "react";

/**
  1. Add observer on the parent, remove the scroll event listener
  2. Understan which element the user is viewing
  3. Calculate the right child from where you identify the children. Can add the 
    data attributes to find the correct indexes.  
 */

function Tracker({ children }: { children: React.ReactChildren }) {
  const childRef = useRef<HTMLDivElement>(null);
  const intersectionRef = useRef();

  const attachedScroll = (e) => {
    console.log("attachedScroll", e);
  };

  const attachScroll = () => {
    if (childRef.current) {
      const child = childRef.current.children[0]?.parentElement;
      child?.addEventListener("scroll", attachedScroll);
    }
  };

  const handleIntersect: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      intersectionRef.current = entry.isIntersecting;
    });
  };

  function createObserver() {
    let observer;

    let options = {
      root: null,
      rootMargin: "0px"
    };

    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(childRef.current.children[0]);
  }

  useEffect(() => {
    //attachScroll();
    let observer: MutationObserver;
    if (childRef.current) {
      const config = { attributes: true, childList: true, subtree: true };
      // Create an observer instance linked to the callback function
      observer = new MutationObserver(attachScroll);
      // Start observing the target node for configured mutations
      observer.observe(childRef.current.children[0], config);
    }
    return function () {
      // Later, you can stop observing
      observer ? observer.disconnect() : null;
    };
  }, []);

  return <div ref={childRef}>{children}</div>;
}

export default Tracker;
