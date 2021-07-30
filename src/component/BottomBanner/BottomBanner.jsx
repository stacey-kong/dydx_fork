import { SocialMediaArray } from "./socialMediaArray";
import styles from "./BottomBanner.module.css";

export default function BottomBanner() {
  return (
    <div className="fixed bottom-14 left-0 w-full lg:left-72">
      <div
        className={`${styles.iconWrapper} w-10/12  md:w-1/2 m-auto inline-flex lg:w-1/3`}
      >
        {SocialMediaArray.map((socialmedia) => (
          <div>
            <img
              width={100}
              src={socialmedia.src}
              alt={`${socialmedia.name} icon`}
              className="p-1 xs:p-2 md:p-3 lg:p-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
