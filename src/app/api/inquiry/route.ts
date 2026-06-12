import { NextRequest, NextResponse } from 'next/server';
import type { InquiryFormData, InquiryResponse } from '@/types/inquiry';

/*
 * Inquiry form handler.
 * Currently logs to console and returns success.
 * UPGRADE PATH: replace body with Resend/Nodemailer/EmailJS call
 * using INQUIRY_EMAIL_TO env var.
 */
export async function POST(req: NextRequest): Promise<NextResponse<InquiryResponse>> {
  let body: Partial<InquiryFormData>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid request body' }, { status: 400 });
  }

  const { name, phone, shootType } = body;

  if (!name?.trim() || !phone?.trim() || !shootType) {
    return NextResponse.json(
      { success: false, message: 'Name, phone and shoot type are required.' },
      { status: 422 },
    );
  }

  // Log for now — replace with email/CRM integration
  console.info('[Inquiry]', {
    name,
    phone,
    email: body.email,
    shootType,
    preferredDate: body.preferredDate,
    message: body.message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ success: true, message: 'Enquiry received.' });
}
