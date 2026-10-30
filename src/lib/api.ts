import { FORMS_ENDPOINT } from '../config';

export type FormAction = 'register' | 'sponsor' | 'project';

export interface FormResult {
  ok: boolean;
  error?: string;
  passId?: string;
  ref?: string;
  duplicate?: boolean;
  full?: boolean;
  seatsLeft?: number;
}

/**
 * Sends a form to the Google Apps Script backend.
 * Uses text/plain so the browser skips the CORS pre-flight (Apps Script can't answer it).
 */
export async function submitForm(action: FormAction, data: object, honeypot = ''): Promise<FormResult> {
  if (!FORMS_ENDPOINT) {
    if (import.meta.env.DEV) {
      console.warn('[forms] FORMS_ENDPOINT not set – simulating a successful submission (dev only).');
      await new Promise((r) => setTimeout(r, 600));
      return { ok: true, passId: 'SS26-DEMO1', ref: 'DEMO' };
    }
    return { ok: false, error: 'Online submissions are not open yet. Please email centenary@iitism.ac.in' };
  }

  try {
    const res = await fetch(FORMS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action, data, website: honeypot }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as FormResult;
  } catch {
    return { ok: false, error: 'Could not reach the server. Check your connection and try again.' };
  }
}
