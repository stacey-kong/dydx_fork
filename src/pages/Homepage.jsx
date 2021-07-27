import { isMobile } from "react-device-detect";
import Video from "../component/VideoBackground";
import Header from "../component/Header/Header";
import Market from "../component/Market/Market";

export default function Homepage() {
  return (
    <div className="homepageWrapper min-h-screen text-white ">
      {!isMobile && <Video />}
      <div className="fixedBar sticky bg-white top-0 w-full h-10 z-10"></div>
      <div className="pageContainer w-9/10 m-auto">
        <Header />
        <Market />
      </div>
    </div>
  );
}
