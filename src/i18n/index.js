import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Header
      "about": "About",
      "experience": "Experience",
      "contact": "Contact",
      "home": "Home",
      
      // Intro
      "im": "I'm",
      "love_coding": "I love coding",
      "develop_systems": "I develop electronic systems",
      "work_space": "I work on space technologies",
      "intro_description": "I am an engineering student passionate about electronics, space technologies, and software development. Currently involved in multiple innovative projects including rover development and orbital propulsion system design. I combine technical expertise with leadership skills to drive projects forward.",
      
      // Experience
      "astra_description": "ASTRA - Lunar Rover Project: Working on electronic components for a moon surface exploration rover.",
      "politorbital_description": "PoliTOrbital - Space Research: Developing eco-friendly reusable sub-orbital propulsion system for 2024 Student Space Research Competition.",
      "gyota_description": "G-YOTA - Unmanned Ground Vehicle: Led team to finals in Teknofest 2021 Agriculture category, focusing on image processing.",
      "lifeguard_description": "First work experience in the USA as a lifeguard, focusing on water safety and emergency response",
      
      // Contact
      "get_in_touch": "Get in touch",
      "email": "Email",
      "phone": "Phone",
      "name": "Name",
      "message": "Message",
      "send": "Send",
      "sending": "Sending...",
      "success_message": "SUCCESS! Thank you for your message",
      "error_message": "Failed to send!",
    }
  },
  tr: {
    translation: {
      // Header
      "about": "Hakkımda",
      "experience": "Deneyim",
      "contact": "İletişim",
      "home": "Ana Sayfa",
      
      // Intro
      "im": "Ben",
      "love_coding": "Kod yazmayı seviyorum",
      "develop_systems": "Elektronik sistemler geliştiriyorum",
      "work_space": "Uzay teknolojileri üzerinde çalışıyorum",
      "intro_description": "Elektronik ve uzay teknolojileri konusunda tutkulu bir mühendislik öğrencisiyim. Şu anda ay yüzeyi keşif aracı geliştirme ve yörünge itki sistemi tasarımı dahil olmak üzere birçok yenilikçi projede yer alıyorum. Teknik uzmanlığımı liderlik becerileriyle birleştirerek projeleri ileriye taşıyorum.",
      
      // Experience
      "astra_description": "ASTRA - Ay Keşif Aracı Projesi: Ay yüzeyi keşif aracının elektronik bileşenleri üzerinde çalışma.",
      "politorbital_description": "PoliTOrbital - Uzay Araştırması: 2024 Öğrenci Uzay Araştırmaları Yarışması için çevre dostu yeniden kullanılabilir alt yörünge itki sistemi geliştirme.",
      "gyota_description": "G-YOTA - İnsansız Kara Aracı: Teknofest 2021 Tarım kategorisinde takımı finale taşıma, görüntü işleme sorumluluğu.",
      "lifeguard_description": "ABD'de bir cankurtaran olarak ilk iş deneyimi, su güvenliği ve acil durum müdahalesine odaklanma",
      
      // Contact
      "get_in_touch": "İletişime Geç",
      "email": "E-posta",
      "phone": "Telefon",
      "name": "İsim",
      "message": "Mesaj",
      "send": "Gönder",
      "sending": "Gönderiliyor...",
      "success_message": "BAŞARILI! Mesajınız için teşekkürler",
      "error_message": "Gönderilemedi!",
    }
  },
  it: {
    translation: {
      // Header
      "about": "Chi Sono",
      "experience": "Esperienza",
      "contact": "Contatto",
      "home": "Home",
      
      // Intro
      "im": "Sono",
      "love_coding": "Amo programmare",
      "develop_systems": "Sviluppo sistemi elettronici",
      "work_space": "Lavoro sulle tecnologie spaziali",
      "intro_description": "Sono uno studente di ingegneria appassionato di elettronica e tecnologie spaziali. Attualmente sono coinvolto in diversi progetti innovativi tra cui lo sviluppo di un rover e la progettazione di un sistema di propulsione orbitale. Combino competenze tecniche con capacità di leadership per guidare i progetti.",
      
      // Experience
      "astra_description": "ASTRA - Progetto Rover Lunare: Lavoro sui componenti elettronici per un rover di esplorazione della superficie lunare.",
      "politorbital_description": "PoliTOrbital - Ricerca Spaziale: Sviluppo di un sistema di propulsione suborbitale riutilizzabile ed ecologico per la Competizione di Ricerca Spaziale Studentesca 2024.",
      "gyota_description": "G-YOTA - Veicolo Terrestre Senza Pilota: Ho guidato il team alle finali nella categoria Agricoltura di Teknofest 2021, concentrandomi sull'elaborazione delle immagini.",
      "lifeguard_description": "Prima esperienza lavorativa negli Stati Uniti come bagnino, concentrandosi sulla sicurezza in acqua e la risposta alle emergenze",
      
      // Contact
      "get_in_touch": "Mettiti in contatto",
      "email": "Email",
      "phone": "Telefono",
      "name": "Nome",
      "message": "Messaggio",
      "send": "Invia",
      "sending": "Invio in corso...",
      "success_message": "SUCCESSO! Grazie per il tuo messaggio",
      "error_message": "Invio fallito!",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
