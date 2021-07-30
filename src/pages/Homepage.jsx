import { isMobile } from "react-device-detect";
import Video from "../component/VideoBackground";
import TopMenu from "../component/TopMenu/TopMenu";
import Header from "../component/Header/Header";
import Market from "../component/Market/Market";
import Feature from "../component/Feature/Feature";
import Investor from "../component/Investor/Investor";
import BottomBanner from "../component/BottomBanner/BottomBanner";

export default function Homepage() {
  return (
    <div className="homepageWrapper min-h-screen max-w-full text-white box-border overflow-y-auto">
      {!isMobile && <Video />}
      <TopMenu />
      <div className="pageContainer w-9/10 m-auto box-border mt-20">
        <Header />
        <Market />
        <Feature />
        <Investor />
      </div>
      <BottomBanner />
    </div>
  );
}
