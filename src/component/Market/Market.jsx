import styles from "./Market.module.css";
import "./youtube.css"
import CoinMedal from "../CoinMedal/CoinMedal";
import { coinArray } from "../CoinMedal/CoinArray";

export default function Market() {
  return (
    <div className="w-9/10 m-auto">
      <span className="sectionSubtitle">Now live</span>

      <h1 className="sectionTitle ">Start trading</h1>
      <p className="sectionParagraph w-9/10 mx-auto">
        We are launching new Perpetual Contract markets throughout 2021.
      </p>
      <div className="marketWrapper mt-14">
        {coinArray.map((coin) => (
          <CoinMedal {...coin} />
        ))}
      </div>
      <div className={`${styles.videoWrapper} mt-20 mx-auto w-9/10 h-48 text-xs`}>
        <iframe
          class="rounded-2xl"
          allowfullscreen="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          width="100%"
          height="100%"
          title="YouTube video player"
          src="https://www.youtube.com/embed/PGE1uoiZTmM?autoPlay=1&amp;controls=0&amp;fs=0&amp;kb=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fdydx.exchange&amp;widgetid=1"
          id="widget2"
          data-gtm-yt-inspected-1_25="true"
        ></iframe>
      </div>
    </div>
  );
}
