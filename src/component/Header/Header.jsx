import styles from "./Header.module.css";
import mobile from "../../images/mobile.png";

export default function Header() {
  return (
    <div className={`${styles.header} pt-10 w-9/10 m-auto`}>
      <div className="subtitle uppercase text-xs">Powered by</div>

      <h1 className="title text-5xl mt-4">
        Leverage,
        <br />
        decentralized
      </h1>

      <p className="text-s max-w-md mt-2">
        Trade Perpetual Contracts with low fees, deep liquidity, and up to 25×
        more Buying Power. <span>Deposit just $10 to get started.</span>
      </p>

      <div className={`${styles.pageLink} mt-10 flex flex-wrap justify-center`}>
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
