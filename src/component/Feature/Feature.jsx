import styles from "./Feature.module.css";

export default function Feature() {
  return (
    <div className={`${styles.feature} w-9/10 m-auto mt-14`}>
      <span className="sectionSubtitle">Calling all traders</span>

      <h1 className="sectionTitle ">The wait is over, Layer 2 is here</h1>
      <p className="sectionParagraph w-9/10 mx-auto">
        We built the fastest and most powerful decentralized exchange ever.
      </p>
      <div className="contentWrapper mt-14 w-full">
        <div className={`${styles.featureWrapper}`}>
          <div className="w-1/4">
            <div className={`${styles.icon}`}>
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1.4em"
                width="1.4em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </div>
          </div>
          <div className={`${styles.text} flex flex-wrap w-3/4`}>
            <span className="title w-full text-sm">Low fees, no gas costs</span>
            <span className={`${styles.featureIntro} text-secondary`}>
              Once you deposit to Layer 2, you will no longer pay fees to miners
              for each transaction.
            </span>
          </div>
        </div>
        <div className={`${styles.featureWrapper}`}>
          <div className="w-1/4">
            <div className={`${styles.icon}`}>
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1.4em"
                width="1.4em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
          </div>
          <div className={`${styles.text} flex flex-wrap w-3/4`}>
            <span className={`flex flex-wrap w-3/4 text-sm`}>
              Lightning quick
            </span>
            <span className={`${styles.featureIntro} text-secondary`}>
              Trades are executed instantly and confirmed on the blockchain
              within hours.
            </span>
          </div>
        </div>
        <div className={`${styles.featureWrapper}`}>
          <div className="w-1/4">
            <div className={`${styles.icon}`}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1.4em"
                width="1.4em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M445.7 405.6L201.3 160.4c-3.1-3.1-8.2-3.1-11.3 0l-28.7 28.8c-3.1 3.1-3.1 8.2 0 11.3l244.4 245.2c3.1 3.1 8.2 3.1 11.3 0l28.6-28.8c3.2-3.1 3.2-8.2.1-11.3zm-25.5 14.3l-.1.1c-3.1 3.1-8.2 3.1-11.3 0L218.9 229.5c-3.1-3.1-3.1-8.2 0-11.3l.1-.1c3.1-3.1 8.2-3.1 11.3 0l189.9 190.5c3.1 3.1 3.1 8.2 0 11.3zM192.8 120.1c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12s-12 5.4-12 12v32.1c0 6.6 5.4 12 12 12zM192.8 263.3c-6.6 0-12 5.4-12 12v32.1c0 6.6 5.4 12 12 12s12-5.4 12-12v-32.1c0-6.6-5.4-12-12-12zM270.7 190.2c0 6.6 5.4 12 12 12h32c6.6 0 12-5.4 12-12s-5.4-12-12-12h-32c-6.6 0-12 5.4-12 12zM119.9 190.2c0-6.6-5.4-12-12-12H76c-6.6 0-12 5.4-12 12s5.4 12 12 12h32c6.5 0 11.9-5.4 11.9-12zM124.8 141c2.3 2.3 5.3 3.5 8.5 3.5s6.2-1.3 8.5-3.5c4.7-4.7 4.7-12.3 0-17l-20.9-21c-2.3-2.3-5.3-3.5-8.5-3.5s-6.2 1.3-8.5 3.5c-4.7 4.7-4.7 12.3 0 17l20.9 21zM133.3 239.9c-3.2 0-6.2 1.3-8.5 3.5l-20.9 21c-2.3 2.3-3.5 5.3-3.5 8.5s1.2 6.2 3.5 8.5 5.3 3.5 8.5 3.5 6.2-1.3 8.5-3.5l20.9-21c4.7-4.7 4.7-12.3 0-17-2.3-2.2-5.3-3.5-8.5-3.5zM252.4 144.5c3.2 0 6.2-1.3 8.5-3.5l20.9-21c4.7-4.7 4.7-12.3 0-17-2.3-2.3-5.3-3.5-8.5-3.5s-6.2 1.3-8.5 3.5l-20.9 21c-2.3 2.3-3.5 5.3-3.5 8.5s1.2 6.2 3.5 8.5c2.3 2.2 5.3 3.5 8.5 3.5z"></path>
              </svg>
            </div>
          </div>
          <div className={`${styles.text} flex flex-wrap w-3/4`}>
            <span className="title w-full text-sm">Fast withdrawals</span>
            <span className={`${styles.featureIntro} text-secondary`}>
              Unlike other platforms, there is no wait required to withdraw your
              funds from Layer 2.
            </span>
          </div>
        </div>
        <div className={`${styles.featureWrapper}`}>
          <div className="w-1/4">
            <div className={`${styles.icon}`}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1.4em"
                width="1.4em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M358.856 32H153.143C130.512 32 112 50.326 112 72.728v366.545C112 461.674 130.512 480 153.143 480h205.713C381.488 480 400 461.674 400 439.272V72.728C400 50.326 381.488 32 358.856 32zM364 400H148V112h216v288z"></path>
              </svg>
            </div>
          </div>
          <div className={`${styles.text} flex flex-wrap w-3/4`}>
            <span className="title w-full text-sm">Mobile friendly</span>
            <span className={`${styles.featureIntro} text-secondary`}>
              We've redesigned our exchange from the ground up, so you can use
              it from any device.
            </span>
          </div>
        </div>
        <div className={`${styles.featureWrapper}`}>
          <div className="w-1/4">
            <div className={`${styles.icon}`}>
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1.4em"
                width="1.4em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
          </div>
          <div className={`${styles.text} flex flex-wrap w-3/4`}>
            <span className="title w-full text-sm">Secure &amp; private</span>
            <span className={`${styles.featureIntro} text-secondary`}>
              StarkWare's Layer 2 solution provides increased security &amp;
              privacy via zero-knowledge rollups.
            </span>
          </div>
        </div>
        <div className={`${styles.featureWrapper}`}>
          <div className="w-1/4">
            <div className={`${styles.icon}`}>
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1.4em"
                width="1.4em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </div>
          </div>
          <div className={`${styles.text} flex flex-wrap w-3/4`}>
            <span className="title w-full text-sm">Cross-margining</span>
            <span className={`${styles.featureIntro} text-secondary`}>
              Access leverage across positions in multiple markets from a single
              account.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
