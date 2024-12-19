import Location from "./component/Location";
import FullCircleRotateTabber from "./component/FullCircleRotateTabber";
import { useState } from "react";

export default function App() {
  const [tlIndex, setTLIndex] = useState(0);
  return (
    <>
      <FullCircleRotateTabber />
      <Location tlIndex={tlIndex} />
    </>
  );
}
