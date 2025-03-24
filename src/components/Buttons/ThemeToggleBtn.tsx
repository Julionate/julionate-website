import { useSignal, useSignalEffect } from "@preact/signals";
import { languages } from "../../i18n/ui";
import { useTranslations } from "../../i18n/utils";

export const ThemeToggleBtn = ({ lang }: { lang: keyof typeof languages }) => {
  const t = useTranslations(lang);

  enum Themes {
    system = "system",
    light = "light",
    dark = "dark",
  }

  const currentTheme = useSignal(
    localStorage.getItem("theme") ?? Themes.system
  );

  if (!Object.values(Themes).includes(currentTheme.value as Themes)) {
    currentTheme.value = Themes.system;
  }

  useSignalEffect(() => {
    if (currentTheme.value === Themes.system) {
      localStorage.removeItem("theme");
      document.documentElement.removeAttribute("data-theme");
      return;
    }

    localStorage.setItem("theme", currentTheme.value);
    document.documentElement.setAttribute("data-theme", currentTheme.value);
  });

  const setLight = () => {
    currentTheme.value = Themes.light;
  };

  const setDark = () => {
    currentTheme.value = Themes.dark;
  };
  const setSystem = () => {
    currentTheme.value = Themes.system;
  };

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        class="btn btn-xs sm:btn-sm md:btn-md btn-block btn-ghost font-medium rounded-lg"
      >
        {t(`theme.${currentTheme.value}`)}
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        class="dropdown-content bg-base-300 rounded-box z-1 w-52 shadow-2xl"
      >
        <li>
          <input
            onChange={setLight}
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-block btn-ghost justify-start"
            aria-label={t("theme.light")}
            value="default"
          />
        </li>
        <li>
          <input
            onChange={setDark}
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-block btn-ghost justify-start"
            aria-label={t("theme.dark")}
            value="dark"
          />
        </li>
        <li>
          <input
            onChange={setSystem}
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-block btn-ghost justify-start"
            aria-label={t("theme.system")}
            value="system"
          />
        </li>
      </ul>
    </div>
  );
};
