import styles from "./Header.module.css";
import mobile from "../../images/Header/mobile.png";
import starkware from "../../images/Header/starkware.svg";

export default function Header() {
  return (
    <div className={`pt-10 w-full xs:w-9/10 m-auto `}>
      <div className="sectionSubtitle inline-flex">
        Powered by
        <img src={starkware} alt="starkware" className="ml-2 mb-1" />
      </div>

      <h1 className="title text-5xl mt-4">
        Leverage,
        <br />
        decentralized
      </h1>

      <p className="sectionParagraph">
        Trade Perpetual Contracts with low fees, deep liquidity, and up to 25×
        more Buying Power.{" "}
        <span className="text-secondary">Deposit just $10 to get started.</span>
      </p>

      <div
        className={`${styles.pageLink} mt-10 flex flex-wrap justify-center text-secondary`}
      >
        <span>Visit exchange</span>
        <span>Use the API</span>
        <span>Join Discord</span>
      </div>

      <img
        src={mobile}
        alt="trading interface in mobile phone"
        className="px-10 py-20"
      />
    </div>
  );
}
