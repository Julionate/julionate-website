import { languages } from "../../i18n/ui";

export const LanguageSelector = ({
  lang,
}: {
  lang: keyof typeof languages;
}) => {
  return (
    <div class="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        class="btn btn-xs sm:btn-sm md:btn-md btn-block btn-ghost font-medium rounded-lg"
      >
        {languages[lang]}
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
        {Object.entries(languages).map(([key, value]) => (
          <li key={`/${key}`}>
            <a href={`/${key}`} class="btn btn-ghost btn-block justify-start">
              {value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
