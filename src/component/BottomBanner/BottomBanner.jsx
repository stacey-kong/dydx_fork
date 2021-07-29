import { SocialMediaArray } from "./socialMediaArray";
import styles from "./BottomBanner.module.css";

export default function BottomBanner() {
  return (
    <div className="fixed bottom-14 left-0 w-full">
      <div className={`${styles.iconWrapper} w-10/12 m-auto inline-flex `}>
        {SocialMediaArray.map((socialmedia) => (
          <div>
            <img
              width={100}
              src={socialmedia.src}
              alt={`${socialmedia.name} icon`}
              className="p-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
