// Import images
import astraImg from "./assets/images/astra.jpeg";
import politorbitalImg from "./assets/images/politorbital.jpeg";
import gyotaImg from "./assets/images/gyota.jpeg";
import profileImg from "./assets/images/photo_portfolio.JPG";
import lifeguardImg from "./assets/images/lifeguard.jpg";

const logotext = "Atakan";
const meta = {
    title: "Atakan Akyildiz",
    description: "I'm Atakan Akyildiz, an Electrical and Electronics Engineering student at Politecnico Di Torino and Communication and Electronics Engineering student at Eskişehir Osmangazi University",
};

const introdata = {
    title: "I'm Atakan Akyildiz",
    animated: {
        first: "love_coding",
        second: "develop_systems",
        third: "work_space",
    },
    description: {
        tr: "Merhaba, ben Atakan Akyıldız.\n\nPolitecnico di Torino'da Elektrik-Elektronik Mühendisliği öğrencisiyim.\n\nYazılım, yönetim ve elektronik alanlarında kendimi geliştiriyor, özellikle yapay zeka teknolojilerine ilgi duyuyorum.\n\nSektör profesyonelleriyle çalışarak deneyim kazanıyor ve kariyerimi şekillendiriyorum.\n\nYeni gelişmelere ve iş birliklerine her zaman açığım.",
        en: "Hello, I'm Atakan Akyıldız.\n\nI'm an Electrical-Electronic Engineering student at Politecnico di Torino.\n\nI'm developing myself in software, management, and electronics, with a particular interest in AI technologies.\n\nI'm gaining experience by working with industry professionals and shaping my career.\n\nI'm always open to new developments and collaborations.",
        it: "Ciao, sono Atakan Akyıldız.\n\nSono uno studente di Ingegneria Elettrica ed Elettronica al Politecnico di Torino.\n\nMi sto sviluppando nel software, nella gestione e nell'elettronica, con particolare interesse per le tecnologie AI.\n\nSto acquisendo esperienza lavorando con professionisti del settore e plasmando la mia carriera.\n\nSono sempre aperto a nuovi sviluppi e collaborazioni."
    },
    your_img_url: profileImg,
};

const dataabout = {
    title: "About Me",
    aboutme: {
        en: "Hello, I'm Atakan Akyıldız, a university student studying software engineering, management, and electronic engineering. Although my experience is still limited, I have a deep interest in artificial intelligence and related technologies, and I am determined to develop myself in this field. By collaborating with industry professionals, I work on fundamental solutions and practical projects. I aim to specialize in artificial intelligence by shaping my career through these experiences and opportunities. I'm here to learn about new developments and industry trends. I'm always open to making connections and creating collaboration opportunities, to continue growing and developing together!",
        tr: "Merhaba, ben Atakan Akyıldız, yazılım mühendisliği, yönetim ve elektronik mühendisliği alanlarında eğitim gören bir üniversite öğrencisiyim. Deneyimim henüz sınırlı olsa da, yapay zeka ve ilgili teknolojiler konusunda derin bir ilgiye sahibim ve kendimi bu alanda geliştirmeye kararlıyım. Sektör profesyonelleriyle iş birliği yaparak, temel çözümler ve pratik projeler üzerinde çalışıyorum. Kariyerimi, bu deneyimler ve fırsatlar üzerinden şekillendirerek, yapay zeka alanında uzmanlaşmayı hedefliyorum. Yeni gelişmeler ve sektör trendleri hakkında bilgi edinmek için buradayım. Bağlantılar kurmaya ve iş birliği fırsatları yaratmaya her zaman açığım, birlikte büyümeye ve gelişmeye devam etmek için!",
        it: "Ciao, sono Atakan Akyıldız, uno studente universitario che studia ingegneria del software, gestione e ingegneria elettronica. Sebbene la mia esperienza sia ancora limitata, ho un profondo interesse per l'intelligenza artificiale e le tecnologie correlate, e sono determinato a svilupparmi in questo campo. Collaborando con professionisti del settore, lavoro su soluzioni fondamentali e progetti pratici. Miro a specializzarmi nell'intelligenza artificiale plasmando la mia carriera attraverso queste esperienze e opportunità. Sono qui per conoscere i nuovi sviluppi e le tendenze del settore. Sono sempre aperto a stabilire connessioni e creare opportunità di collaborazione, per continuare a crescere e svilupparsi insieme!"
    }
};

const worktimeline = [{
        jobtitle: "Mechatronics Team Member - ASTRA",
        where: "Torino, Italy",
        date: "2023 - Present",
    },
    {
        jobtitle: "Communication Team Member - PoliTOrbital",
        where: "Torino, Italy",
        date: "2023 - Present",
    },
    {
        jobtitle: "Team Captain - G-YOTA",
        where: "Eskişehir, Turkey",
        date: "2021",
    },
    {
        jobtitle: "Lifeguard - SUNSET POOLS",
        where: "Baltimore, USA",
        date: "2020",
    },
];

const skills = [{
        name: "Python",
        value: 85,
    },
    {
        name: "C",
        value: 80,
    },
    {
        name: "React",
        value: 75,
    },
    {
        name: "React Native",
        value: 75,
    },
    {
        name: "AutoCAD",
        value: 70,
    },
];

const services = [{
        title: "Electronic Systems Development",
        description: "Experience in developing electronic components for rover projects and space technology applications.",
    },
    {
        title: "Software Development",
        description: "Proficient in multiple programming languages including Python, C, and React frameworks.",
    },
    {
        title: "Team Leadership",
        description: "Proven leadership experience as team captain in technology competitions and collaborative projects.",
    },
];

const dataportfolio = [{
        img: astraImg,
        description: "astra_description",
        title: "ASTRA - Advanced Space Technologies and Research Alliance",
        details: {
            en: {
                title: "ASTRA - Advanced Space Technologies and Research Alliance",
                role: "Mechatronics Team Member",
                duration: "September 2023 - May 2024 (9 months)",
                location: "Turin, Piedmont, Italy · On-site",
                description: "ASTRA is a student team at Politecnico di Torino dedicated to space exploration and research. The team's inaugural project involves the construction of a spherical rover named Scout. This lunar exploration vehicle is designed to operate in the Moon's low-gravity vacuum environment. The spherical architecture provides multiple advantages: elimination of overturning risks during motion, omnidirectional movement capability, and potential for cooperative rover groupings to handle bulky loads. The project combines innovative design with practical space exploration solutions.",
                responsibilities: [
                    "Development of mechatronic systems for the Scout lunar rover",
                    "Design and implementation of motion control systems",
                    "Integration of sensors and actuators for rover operation",
                    "Collaboration on spherical architecture implementation",
                    "Testing and validation of rover mechanisms"
                ]
            },
            tr: {
                title: "ASTRA - Gelişmiş Uzay Teknolojileri ve Araştırma Birliği",
                role: "Mekatronik Takım Üyesi",
                duration: "Eylül 2023 - Mayıs 2024 (9 ay)",
                location: "Torino, Piyemonte, İtalya · Yerinde",
                description: "ASTRA, Politecnico di Torino'da uzay keşfi ve araştırmaya adanmış bir öğrenci takımıdır. Takımın ilk projesi Scout adlı küresel bir gezginin yapımını içermektedir. Bu ay keşif aracı, Ay'ın düşük yerçekimli vakum ortamında çalışmak üzere tasarlanmıştır. Küresel mimari birçok avantaj sağlar: hareket sırasında devrilme riskinin ortadan kaldırılması, çok yönlü hareket kabiliyeti ve hacimli yükleri taşımak için işbirlikçi gezgin gruplarının oluşturulabilmesi. Proje, yenilikçi tasarımı pratik uzay keşif çözümleriyle birleştirmektedir.",
                responsibilities: [
                    "Scout ay gezgini için mekatronik sistemlerin geliştirilmesi",
                    "Hareket kontrol sistemlerinin tasarımı ve uygulaması",
                    "Gezgin operasyonu için sensör ve aktüatörlerin entegrasyonu",
                    "Küresel mimari uygulamasında işbirliği",
                    "Gezgin mekanizmalarının test edilmesi ve doğrulanması"
                ]
            },
            it: {
                title: "ASTRA - Alleanza per le Tecnologie e la Ricerca Spaziale Avanzata",
                role: "Membro del Team Meccatronico",
                duration: "Settembre 2023 - Maggio 2024 (9 mesi)",
                location: "Torino, Piemonte, Italia · In sede",
                description: "ASTRA è un team studentesco del Politecnico di Torino dedicato all'esplorazione e alla ricerca spaziale. Il progetto inaugurale del team prevede la costruzione di un rover sferico chiamato Scout. Questo veicolo di esplorazione lunare è progettato per operare nell'ambiente a bassa gravità e vuoto della Luna. L'architettura sferica offre molteplici vantaggi: eliminazione dei rischi di ribaltamento durante il movimento, capacità di movimento omnidirezionale e potenziale per il raggruppamento cooperativo di rover per gestire carichi voluminosi. Il progetto combina design innovativo con soluzioni pratiche per l'esplorazione spaziale.",
                responsibilities: [
                    "Sviluppo di sistemi meccatronici per il rover lunare Scout",
                    "Progettazione e implementazione di sistemi di controllo del movimento",
                    "Integrazione di sensori e attuatori per il funzionamento del rover",
                    "Collaborazione nell'implementazione dell'architettura sferica",
                    "Test e validazione dei meccanismi del rover"
                ]
            }
        }
    },
    {
        img: politorbitalImg,
        description: "politorbital_description",
        title: "PoliTOrbital - Space Research",
        details: {
            en: {
                title: "PoliTOrbital - Space Research",
                role: "Communication And Promotion Team Member",
                duration: "September 2023 - July 2024 (11 months)",
                location: "Turin, Piedmont, Italy · On-site",
                description: "The objective of this project was the preliminary design of a reusable propulsion system for green suborbital flights participating in the Student Aerospace Challenge 2023. The team focused on designing a propulsion system that could be both reusable and, most importantly, environmentally sustainable and innovative. This was achieved by utilizing a combination of air-breathing engines and electric pump-fed rocket engines to reach the limits of the atmosphere.",
                responsibilities: [
                    "Design of environmentally sustainable propulsion systems",
                    "Team communication and promotion coordination",
                    "Project documentation and presentation",
                    "Participation in Student Aerospace Challenge 2023"
                ]
            },
            tr: {
                title: "PoliTOrbital - Uzay Araştırması",
                role: "İletişim ve Tanıtım Takım Üyesi",
                duration: "Eylül 2023 - Temmuz 2024 (11 ay)",
                location: "Torino, Piyemonte, İtalya · Yerinde",
                description: "Bu projenin amacı, Student Aerospace Challenge 2023'e katılan yeşil yörünge-altı uçuşlar için yeniden kullanılabilir bir itki sistemi ön tasarımıydı. Takım, hem yeniden kullanılabilir hem de en önemlisi çevre dostu ve yenilikçi olabilecek bir itki sistemi tasarlamaya odaklandı. Bu, atmosferin sınırlarına ulaşmak için hava soluyan motorlar ve elektrik pompalı roket motorlarının bir kombinasyonu kullanılarak başarıldı.",
                responsibilities: [
                    "Çevre dostu itki sistemleri tasarımı",
                    "Takım iletişimi ve tanıtım koordinasyonu",
                    "Proje dokümantasyonu ve sunumu",
                    "Student Aerospace Challenge 2023'e katılım"
                ]
            },
            it: {
                title: "PoliTOrbital - Ricerca Spaziale",
                role: "Membro del Team Comunicazione e Promozione",
                duration: "Settembre 2023 - Luglio 2024 (11 mesi)",
                location: "Torino, Piemonte, Italia · In sede",
                description: "L'obiettivo di questo progetto era la progettazione preliminare di un sistema di propulsione riutilizzabile per voli suborbitali verdi partecipando allo Student Aerospace Challenge 2023. Il team si è concentrato sulla progettazione di un sistema di propulsione che potesse essere sia riutilizzabile che, soprattutto, sostenibile dal punto di vista ambientale e innovativo. Questo è stato ottenuto utilizzando una combinazione di motori air-breathing e motori a razzo alimentati da pompe elettriche per raggiungere i limiti dell'atmosfera.",
                responsibilities: [
                    "Progettazione di sistemi di propulsione ecosostenibili",
                    "Coordinamento della comunicazione e promozione del team",
                    "Documentazione e presentazione del progetto",
                    "Partecipazione allo Student Aerospace Challenge 2023"
                ]
            }
        }
    },
    {
        img: gyotaImg,
        description: "gyota_description",
        title: "G-YOTA - Unmanned Ground Vehicle",
        details: {
            en: {
                title: "G-YOTA - Unmanned Ground Vehicle",
                role: "Team Captain & Image Processing Lead",
                duration: "February 2021 - August 2021",
                location: "Eskişehir, Turkey",
                description: "Led team to finals in Teknofest 2021 Agriculture category, focusing on image processing for autonomous navigation.",
                responsibilities: [
                    "Team leadership and project management",
                    "Image processing system development",
                    "Competition documentation preparation"
                ]
            },
            tr: {
                title: "G-YOTA - İnsansız Kara Aracı",
                role: "Takım Kaptanı & Görüntü İşleme Sorumlusu",
                duration: "Şubat 2021 - Ağustos 2021",
                location: "Eskişehir, Türkiye",
                description: "Teknofest 2021 Tarım kategorisinde takımı finale taşıma, otonom navigasyon için görüntü işleme üzerine odaklanma.",
                responsibilities: [
                    "Takım liderliği ve proje yönetimi",
                    "Görüntü işleme sistemi geliştirme",
                    "Yarışma dokümantasyonu hazırlama"
                ]
            },
            it: {
                title: "G-YOTA - Veicolo Terrestre Senza Pilota",
                role: "Capitano del Team & Responsabile Elaborazione Immagini",
                duration: "Febbraio 2021 - Agosto 2021",
                location: "Eskişehir, Turchia",
                description: "Ho guidato il team alle finali nella categoria Agricoltura di Teknofest 2021, concentrandomi sull'elaborazione delle immagini per la navigazione autonoma.",
                responsibilities: [
                    "Leadership del team e gestione del progetto",
                    "Sviluppo del sistema di elaborazione delle immagini",
                    "Preparazione della documentazione per la competizione"
                ]
            }
        }
    },
    {
        img: lifeguardImg,
        description: "lifeguard_description",
        title: "Sunset Pools - Lifeguard Experience",
        details: {
            en: {
                title: "Sunset Pools - Lifeguard Experience",
                role: "Lifeguard",
                duration: "June 2020 - September 2020 (4 months)",
                location: "Baltimore, Maryland, United States · On-site",
                description: "Worked as a lifeguard at Sunset Pools within the scope of the Work and Travel program. This experience provided valuable opportunities for problem-solving, emergency response, and international work experience in the United States.",
                responsibilities: [
                    "Ensuring pool safety and preventing accidents",
                    "Monitoring swimming activities and enforcing safety rules",
                    "Performing emergency response when needed",
                    "Maintaining pool area cleanliness and safety standards",
                    "Participating in regular training and safety drills"
                ]
            },
            tr: {
                title: "Sunset Pools - Cankurtaran Deneyimi",
                role: "Cankurtaran",
                duration: "Haziran 2020 - Eylül 2020 (4 ay)",
                location: "Baltimore, Maryland, Amerika Birleşik Devletleri · Yerinde",
                description: "Work and Travel programı kapsamında Sunset Pools'da cankurtaran olarak çalıştım. Bu deneyim, problem çözme, acil durum müdahalesi ve Amerika Birleşik Devletleri'nde uluslararası iş deneyimi için değerli fırsatlar sağladı.",
                responsibilities: [
                    "Havuz güvenliğini sağlama ve kazaları önleme",
                    "Yüzme aktivitelerini izleme ve güvenlik kurallarını uygulama",
                    "Gerektiğinde acil durum müdahalesi yapma",
                    "Havuz alanı temizliği ve güvenlik standartlarını koruma",
                    "Düzenli eğitim ve güvenlik tatbikatlarına katılma"
                ]
            },
            it: {
                title: "Sunset Pools - Esperienza da Bagnino",
                role: "Bagnino",
                duration: "Giugno 2020 - Settembre 2020 (4 mesi)",
                location: "Baltimore, Maryland, Stati Uniti · In sede",
                description: "Ho lavorato come bagnino presso Sunset Pools nell'ambito del programma Work and Travel. Questa esperienza ha fornito preziose opportunità di problem solving, risposta alle emergenze ed esperienza lavorativa internazionale negli Stati Uniti.",
                responsibilities: [
                    "Garantire la sicurezza della piscina e prevenire incidenti",
                    "Monitorare le attività di nuoto e far rispettare le regole di sicurezza",
                    "Eseguire interventi di emergenza quando necessario",
                    "Mantenere la pulizia dell'area piscina e gli standard di sicurezza",
                    "Partecipare a formazione regolare ed esercitazioni di sicurezza"
                ]
            }
        }
    }
];

const contactConfig = {
    YOUR_EMAIL: "atakanakyildiz0@gmail.com",
    YOUR_FONE: "+39 327 757 2749",
    description: "",
    YOUR_SERVICE_ID: "service_qy0itnq",
    YOUR_TEMPLATE_ID: "template_46d3zuw",
    YOUR_USER_ID: "3GJ8d1Rm_bZPsMZDj",
};

const socialprofils = {
    github: "https://github.com/atakanakyildizz",
    linkedin: "https://www.linkedin.com/in/atakan-akyildiz/",
    instagram: "https://www.instagram.com/atakanakyldiz/",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};