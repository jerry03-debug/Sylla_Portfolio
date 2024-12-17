export const themes = {
  mouhamed: {
    primary: '#3b82f6', // Bleu vif
    secondary: '#1e40af', // Bleu foncé
    background: '#f8fafc', // Gris très clair
    text: '#334155', // Gris foncé
    accent: '#60a5fa', // Bleu clair
    sectionBg: {
      about: 'rgba(248, 250, 252, 0.98)',
      skills: 'rgba(239, 246, 255, 0.98)', // Bleu très clair
      experience: 'rgba(248, 250, 252, 0.98)',
      contact: 'rgba(239, 246, 255, 0.98)', // Bleu très clair
    },
    heroImage: '/images/moustapha_hero.jpg',
  },
  mariama: {
    primary: '#10b981', // Vert émeraude
    secondary: '#047857', // Vert foncé
    background: '#f8fafc', // Gris très clair
    text: '#334155', // Gris foncé
    accent: '#34d399', // Vert clair
    sectionBg: {
      about: 'rgba(248, 250, 252, 0.98)',
      skills: 'rgba(236, 253, 245, 0.98)', // Vert très clair
      experience: 'rgba(248, 250, 252, 0.98)',
      contact: 'rgba(236, 253, 245, 0.98)', // Vert très clair
    },
    heroImage: '/images/mariama_hero.jpg',
  },
} as const;

export const commonStyles = {
  maxWidth: '1200px',
  borderRadius: '0.5rem',
  transition: 'all 0.3s ease-in-out',
};
