import styles from "./CoinMedal.module.css";
import "./border.css";

export default function CoinMedal(props) {
  return (
    <div
      className={`${styles.coinWrapper} border${props.border} block py-5 px-6 w-11/12 mx-auto my-4 rounded-xl text-s `}
    >
      <div className={`${styles.coin} w-full inline-flex`}>
        <img
          src={props.iconSrc}
          alt={`${props.symbol} icon`}
          className="w-10 h-10 mr-2"
        />
        <div className="block text-left leading-5 text-s">
          {props.name}
          <br />
          <span className="subtitle">{props.symbol}</span>
        </div>
      </div>
      <div className="marketInfo w-full inline-flex text-left mt-4">
        <div className="price w-2/3 text-2xl leading-10 tracking-wider">
          ${props.price}
        </div>
        <div className="detailWrapper flex flex-wrap w-2/5 subtitle justify-end">
          <span className="flex w-full justify-between">
            chg
            <span className="text-red pl-2 tracking-wider">
              {props.change}%
            </span>
          </span>
          <span className="flex w-full justify-between">
            vol
            <span className="text-number pl-2 tracking-wider">
              ${props.volumn}m
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
