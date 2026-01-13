export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

export const navbar = {
  en: {
    'nav.presentation': 'Presentation',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
  },
  es: {
    'nav.presentation': 'Presentación',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
  },
} as const;

export const themeSelector = {
  en: {
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'theme.system': 'System',
  },
  es: {
    'theme.light': 'Claro',
    'theme.dark': 'Oscuro',
    'theme.system': 'Sistema',
  },
} as const;

const available = {
  en: {
    'available.message.on': "I'm active right now, contact me!",
    'available.message.off': "I'm not active right now... but contact me anyways!",
    'available.on': 'Online',
    'available.off': 'Offline',
  },
  es: {
    'available.message.on': '¡Estoy activo ahora mismo, contáctame!',
    'available.message.off': 'No estoy activo ahora mismo... pero contáctame de todas formas!',
    'available.on': 'Disponible',
    'available.off': 'No disponible',
  },
};

export const translations = {
  en: { ...navbar.en, ...themeSelector.en, ...available.en },
  es: { ...navbar.es, ...themeSelector.es, ...available.es },
} as const;
