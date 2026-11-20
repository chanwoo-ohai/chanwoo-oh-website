/** Set NEXT_PUBLIC_SITE_URL in Vercel (e.g. https://your-domain.com). */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '');
export const siteTitle = 'Chanwoo Oh | Human-AI Interaction & Human-Centered AI';
export const siteDescription =
  'Chanwoo Oh is an Artificial Intelligence undergraduate at Sungkyunkwan University interested in Human-AI Interaction, Human-Centered AI, cognitive psychology, and creative technology.';
