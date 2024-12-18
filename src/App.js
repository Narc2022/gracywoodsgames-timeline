import CircleTaber from "./component/CircleTaber";
import HalfCircleTabber from "./component/HalfCircleTabber";
import LocationContainer from "./component/LocationContainer";
import RotateIndicatorTabber from "./component/FullCircleRotateTabber";
import FullCircleRotateTabber from "./component/FullCircleRotateTabber";

export default function App() {
  return (
    <>
      {/* <HalfCircleTabber /> */}
      <FullCircleRotateTabber />
      <LocationContainer />
    </>
  );
}
