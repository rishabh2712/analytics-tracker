import "./styles.css";
import Tracker from "./Tracker";
import PhotosList from "./PhotosList";

/**
 * Usecase
 *
 * Add a tracking to an element,
 * incase if its stays in the visible viewport for T secs,
 * then make the callback call
 *
 *
 * Implementation
 *  1. Target element reference be kept in the Wrapper
 *  2. Incase el become visible to the DOM, start a timer,
 *     clear the timer incase the el leaves the viewport beforehand.
 *
 */

export default function App() {
  return (
    <div className="App">
      <Tracker>
        <PhotosList />
      </Tracker>
    </div>
  );
}
