import styles from "./Investor.module.css";
import { investorArray } from "./investorArray";

export default function Investor() {
  return (
    <div className={`${styles.investor} w-9/10 m-auto mt-10`}>
      <span className="sectionSubtitle">Battle-tested</span>

      <h1 className="text-m w-full">Trusted by over 15,000 traders</h1>
      <p className="sectionParagraph w-9/10 mx-auto">
        We believe everyone should have access to open &amp; powerful financial
        tools.
      </p>
      <div className={`${styles.table}`}>
        <div className="sectionParagraph block py-6 text-secondary">
          <div>Trading Volume</div>
          <div className="text-white text-xl py-1">$6.10b</div>
          <div className="subtitle opacity-50">All-Time</div>
        </div>
        <div className="sectionParagraph block py-6 text-secondary">
          <div>Trades</div>
          <div className="text-white text-xl py-1">33,081</div>
          <div className="subtitle opacity-50">Last 30D</div>
        </div>
        <div className="sectionParagraph block py-6 text-secondary">
          <div>Open Interest</div>
          <div className="text-white text-xl py-1">$24.1m</div>
          <div className="subtitle opacity-50">last 24h</div>
        </div>
      </div>
      <div>
        <span className="sectionSubtitle">Our investors</span>
        <h1 className="text-m w-full">Backed by the best</h1>
        <p className="sectionParagraph w-9/10 mx-auto">
          Our global investors include angel investors & leading funds
        </p>
        <div className="grid grid-flow-row grid-cols-2 gap-x-2 gap-y-10 mx-auto mt-10 mb-52">
          {investorArray.map((investor) => (
            <div className="w-full justify-center flex max-h-10">
              <img src={investor.src} alt={investor.name} width={100} />
            </div>
          ))}
          <div>Brian Armstrong</div>
          <div>Fred Ehrsam</div>
          <div>Naval Ravikant</div>
          <div>Elad Gil</div>
          <div>Avichal Grag</div>
        </div>
      </div>
    </div>
  );
}
