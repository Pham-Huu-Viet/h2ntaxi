// context\LanguageContext.tsx

"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

type Language = "en" | "vi";

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Khởi tạo mặc định là 'vi' để Server và Client đồng nhất ban đầu
  const [language, setLanguage] = useState<Language>("vi");

  useEffect(() => {
    // Chỉ chạy logic đọc Cookie/Browser sau khi đã mount vào Client
    const savedLang = Cookies.get("language") as Language;
    if (savedLang) {
      setLanguage(savedLang);
    } else {
      const browserLang = navigator.language.startsWith("vi") ? "vi" : "en";
      setLanguage(browserLang);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    Cookies.set("language", lang, { expires: 365 });
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};

// // context/LanguageContext.tsx
// "use client";

// import React, { createContext, useContext, useState, useEffect } from "react";
// import Cookies from "js-cookie";

// type Language = "en" | "vi";

// interface LanguageContextType {
//   language: Language;
//   changeLanguage: (lang: Language) => void;
//   isLoading: boolean;
// }

// const LanguageContext = createContext<LanguageContextType | undefined>(
//   undefined,
// );

// export function LanguageProvider({ children }: { children: React.ReactNode }) {
//   const [language, setLanguage] = useState<Language>("vi");
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const savedLang = Cookies.get("language") as Language;
//     const browserLang = navigator.language.startsWith("vi") ? "vi" : "en";
//     setLanguage(savedLang || browserLang);
//     setIsLoading(false);
//   }, []);

//   const changeLanguage = (lang: Language) => {
//     setLanguage(lang);
//     Cookies.set("language", lang, { expires: 365 });
//   };

//   return (
//     <LanguageContext.Provider value={{ language, changeLanguage, isLoading }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// }

// export const useLanguage = () => {
//   const context = useContext(LanguageContext);
//   if (!context)
//     throw new Error("useLanguage must be used within LanguageProvider");
//   return context;
// };
