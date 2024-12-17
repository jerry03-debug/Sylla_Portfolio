export interface Profile {
  id: string;
  name: string;
  title: string;
  avatar: string;
  description: string;
  skills: string[];
  experience: {
    company: string;
    position: string;
    period: string;
    description: string;
  }[];
  education: {
    institution: string;
    degree: string;
    period: string;
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
    title: "Scrum Master",
    avatar: "/images/mouhamed_sylla.jpeg",
    description: "Scrum Master passionné avec une solide expérience dans la gestion agile de projets chez Eviden. Expert en facilitation d'équipe et en amélioration continue des processus.",
    skills: [
      "Gestion Agile",
      "Scrum",
      "Facilitation d'équipe",
      "Gestion de projet",
      "Leadership",
      "Communication",
      "Résolution de problèmes",
    ],
    experience: [
      {
        company: "Eviden",
        position: "Scrum Master",
        period: "2022 - Présent",
        description: "Direction et facilitation des cérémonies agiles, coaching des équipes, et amélioration continue des processus de développement."
      }
    ],
    education: [
      {
        institution: "École de Management",
        degree: "Master en Gestion de Projet",
        period: "2018 - 2020"
      }
    ],
    contact: {
      email: "mouhamed.sylla@example.com",
      linkedin: "linkedin.com/in/mouhamedsylla"
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
        period: "2020 - Présent",
        description: "Gestion complète de l'officine, conseil aux patients, et supervision de l'équipe pharmaceutique."
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
