import { WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MESSAGE } from '@/lib/constants/site';

export function buildWhatsAppUrl(message = WHATSAPP_DEFAULT_MESSAGE): string {
  const number = WHATSAPP_NUMBER.replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function buildSpaceWhatsAppUrl(spaceName: string): string {
  const message = `Hi! I'm interested in booking a shoot at The Picture Villa — specifically the *${spaceName}* space. Could you share availability and pricing?`;
  return buildWhatsAppUrl(message);
}

export function buildBookingWhatsAppUrl(): string {
  const message = `Hi! I'd like to schedule a visit to The Picture Villa. Could you help me book a walkthrough?`;
  return buildWhatsAppUrl(message);
}
