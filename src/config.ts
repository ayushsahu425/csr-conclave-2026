/**
 * Google Apps Script web-app URL that receives all form submissions.
 * Paste the URL from Deploy → Manage deployments (it ends in /exec) between the quotes below,
 * or set VITE_FORMS_ENDPOINT in your hosting provider's environment variables instead.
 * See docs/FORMS_SETUP.md.
 */
const PASTED_URL = '';

export const FORMS_ENDPOINT: string =
  (import.meta.env.VITE_FORMS_ENDPOINT as string | undefined) || PASTED_URL;
