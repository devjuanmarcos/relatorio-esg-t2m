import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Importando ícones do react-icons

interface SwitchWithIconProps {
  onToggle?: (state: boolean) => void;
}

const SwitchWithIcon: React.FC<SwitchWithIconProps> = ({ onToggle }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleSwitch = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    setTheme(theme == "light" ? "dark" : "light");
    onToggle && onToggle(newState);
  };

  const t = useTranslations();

  return (
    <button
      aria-label={theme == "light" ? t("Header.switchWithIcon.dark") : t("Header.switchWithIcon.light")}
      onClick={toggleSwitch}
      className={`flex items-center justify-between w-[3rem] h-[1.5rem]   rounded-full transition-colors duration-300 bg-white`}
    >
      <div
        className={`w-7 h-7 rounded-full  flex items-center justify-center transition-transform duration-300 ${theme == "light" ? "translate-x-5" : "translate-x-0"}`}
      >
        {theme == "light" ? (
          <FaSun
            width={4}
            height={4}
            className="text-primary p-1 rounded-full  border border-border  bg-white w-full h-full"
          />
        ) : (
          <FaMoon
            width={4}
            height={4}
            className="text-primary p-1 rounded-full border border-border bg-white  w-full h-full"
          />
        )}
      </div>
    </button>
  );
};

export default SwitchWithIcon;
