export interface Profile {
  id: string;
  name: string;
  title: string;
  company?: string;
  theme?: string;
  avatar: string;
  description: string;
  skills: string[];
  certifications?: {
    title: string;
    issuer: string;
    date: string;
    url: string;
  }[];
  education: {
    school: string;
    degree: string;
    field: string;
    period: string;
    level?: string;
    activities?: string;
    logo?: string;
  }[];
  experience: {
    position: string;
    company: string;
    period: string;
    description: string;
    location?: string;
    type?: string;
    achievements?: string[];
    technologies?: string[];
    logo?: string;
  }[];
  contact: {
    email: string;
    linkedin?: string;
    phone?: string;
  };
}

export const profiles: Profile[] = [
  {
    id: "mouhamed",
    name: "Mouhamed Sylla",
    title: "Scrum Master / Analyste Développeur",
    company: "E Cloud D&B Google Technology",
    theme: "blue",
    avatar: "/images/mouhamed_sylla.jpeg",
    description: "Scrum Master passionné par l'amélioration continue et le développement agile.",
    skills: [
      "React",
      "PostgreSQL",
      "Microsoft Azure DevOps",
      "Jira",
      "GitLab"
    ],
    certifications: [
      {
        title: "Professional Scrum Product Owner I (PSPO I)",
        issuer: "Scrum.org",
        date: "Avril 2024",
        url: "https://www.credly.com/users/mouhamed-moustapha-sylla"
      },
      {
        title: "Professional Scrum Master™ I (PSM I)",
        issuer: "Scrum.org",
        date: "Avril 2023",
        url: "https://www.credly.com/users/mouhamed-moustapha-sylla"
      }
    ],
    education: [
      {
        school: "Global Knowledge Lille",
        degree: "Développeur Angular / Node JS",
        field: "Informatique",
        period: "2017 - 2017",
        level: "Excellent",
        activities: "Mise en place d'une banque en ligne, web service et l'ajout de nouvelles fonctionnalités & amélioration continue. / Angular / Node Js / Express / Mongo.",
        logo: "/images/global-knowledge.jpeg"
      },
      {
        school: "Université de Lille",
        degree: "Licence",
        field: "Mathématiques et informatique",
        period: "2015 - 2017",
        level: "Excellent",
        activities: "UFR : MIME (Mathématique Informatique Management Economie)\nLicence MIASHS (Mathématique Informatique Appliqué aux Sciences Humaines et Sociales)\nOption SC: Sciences Cognitives",
        logo: "/images/universite-lille.jpeg"
      }
    ],
    experience: [
      {
        position: "Scrum master",
        company: "Eviden",
        period: "mai 2023 - aujourd'hui · 1 an 8 mois",
        description: "Développement d'un outil qui vient aider les RHs à optimiser et catalyser le process de recrutement",
        location: "Lille, Hauts-de-France, France · Hybride",
        type: "CDI · 1 an 9 mois",
        technologies: ["Scrum", "Logiciels internet"],
        logo: "/images/eviden.png"
      },
      {
        position: "Analyste Developpeur",
        company: "Eviden",
        period: "avr. 2023 - aujourd'hui · 1 an 9 mois",
        description: "",
        location: "Lille, Hauts-de-France, France",
        logo: "/images/eviden.png"
      },
      {
        position: "Analyste développeur",
        company: "Atos infogerance SAS",
        period: "janv. 2020 - mai 2023 · 3 ans 5 mois",
        description: "",
        location: "Lille, Hauts-de-France, France",
        type: "Temps plein",
        logo: "/images/atos.png"
      }
    ],
    contact: {
      email: "mouhamed.sylla@example.com",
      linkedin: "https://www.linkedin.com/in/mouhamed-sylla"
    }
  },
  {
    id: "mariama",
    name: "Mariama Sylla",
    title: "Docteur en Pharmacie",
    avatar:"/images/mouhamed_sylla.jpeg",
    description: "Pharmacienne expérimentée spécialisée dans les soins pharmaceutiques et le conseil aux patients. Expertise en pharmacologie et en gestion d'officine.",
    skills: [
      "Pharmacologie",
      "Conseil patient",
      "Gestion d'officine",
      "Pharmacovigilance",
      "Suivi thérapeutique",
      "Communication médicale",
    ],
    experience: [
      {
        company: "Pharmacie Centrale",
        position: "Pharmacienne Titulaire",
        period: "2021 - Présent",
        description: "Gestion complète d'une pharmacie d'officine, supervision de l'équipe et conseil aux patients.",
        achievements: [
          "Mise en place d'un service de consultation pharmaceutique",
          "Développement du chiffre d'affaires de 25%",
          "Formation de 3 préparateurs en pharmacie",
          "Organisation de campagnes de prévention"
        ],
        technologies: [
          "Logiciel LGPI",
          "Gestion de stock",
          "Conseil pharmaceutique",
          "Management d'équipe"
        ]
      },
      {
        company: "Hôpital Regional",
        position: "Pharmacienne Hospitalière",
        period: "2019 - 2021",
        description: "Responsable de la pharmacie hospitalière, gestion des prescriptions et des stocks de médicaments.",
        achievements: [
          "Optimisation du circuit du médicament",
          "Réduction des erreurs de dispensation de 60%",
          "Mise en place d'un système de traçabilité",
          "Participation aux comités thérapeutiques"
        ],
        technologies: [
          "Pharma Pro",
          "Gestion hospitalière",
          "Pharmacovigilance",
          "Stérilisation"
        ]
      }
    ],
    education: [
      {
        institution: "Faculté de Pharmacie",
        degree: "Doctorat en Pharmacie",
        period: "2015 - 2020"
      }
    ],
    contact: {
      email: "mariama.sylla@example.com",
      phone: "+33 6 XX XX XX XX"
    }
  }
];
