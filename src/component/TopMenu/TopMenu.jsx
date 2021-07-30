import styles from "./TopMenu.module.css";
import icon from "../../images/Menu/icon.svg";
import menu from "../../images/Menu/menu.svg";
import arrow from "../../images/Menu/downArrow.svg";

import { useEffect, useState } from "react";

const languageArray = ["English", "中文", "日本語", "한국어", "русский"];

export default function TopMenu() {
  const [language, setLanguage] = useState(languageArray[0]);
  const [showLanguageSeletor, setShowLanguageSelecor] = useState(false);
  const [border, setBorder] = useState(false);

  function selectLanguage(selection) {
    setLanguage(selection);
    setShowLanguageSelecor(false);
  }

  function handleScroll() {
    if (window.scrollY === 0) {
      setBorder(false);
    } else {
      setBorder(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className={`${styles.topMenuWrapper} ${
        border ? `${styles.border}` : ""
      } text-s`}
    >
      <img
        src={icon}
        width={100}
        alt="Brand icon"
        className="max-h-full min-h-full"
      />

      <div className={`${styles.selectorWrapper}`}>
        <div
          className="inline-flex px-3 py-2 justify-around"
          onClick={() => setShowLanguageSelecor((prev) => !prev)}
        >
          {language}
          <div className="items-center flex mx-2">
            <img src={arrow} alt="language dropdown button" />
          </div>
        </div>

        <div
          className={`${styles.dropDownWrapper} ${
            showLanguageSeletor ? "" : "hidden"
          }`}
        >
          <ul>
            {languageArray.map((languageSelection) => (
              <li
                className="text-left px-2 py-2 text-s"
                onClick={() => selectLanguage(languageSelection)}
              >
                {languageSelection}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-1/4 xs:w-1/2 flex box-border justify-end mr-4 ">
        <img src={menu} alt="menu button" />
      </div>
    </div>
  );
}
