import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import "./style.css";

const LanguageSwitch = () => {
    const { i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language);

    const languages = [
        { code: 'en', name: '🇬🇧 EN' },
        { code: 'tr', name: '🇹🇷 TR' },
        { code: 'it', name: '🇮🇹 IT' }
    ];

    const handleLanguageChange = (langCode) => {
        setCurrentLang(langCode);
        i18n.changeLanguage(langCode);
        localStorage.setItem('language', langCode);
    };

    return (
        <div className="language-switch">
            <div className="language-dropdown">
                <button className="language-btn">
                    {languages.find(lang => lang.code === currentLang)?.name}
                </button>
                <div className="language-dropdown-content">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={currentLang === lang.code ? 'active' : ''}
                        >
                            {lang.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LanguageSwitch;
