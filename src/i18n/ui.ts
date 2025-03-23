export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = "en";

export const navbar = {
  en: {
    "nav.presentation": "Presentation",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
  },
  es: {
    "nav.presentation": "Presentación",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
  },
} as const;

export const themeSelector = {
  en: {
    "theme.light": "Light",
    "theme.dark": "Dark",
    "theme.system": "System",
  },
  es: {
    "theme.light": "Claro",
    "theme.dark": "Oscuro",
    "theme.system": "Sistema",
  },
} as const;

export const translations = {
  en: { ...navbar.en, ...themeSelector.en },
  es: { ...navbar.es, ...themeSelector.es },
} as const;
