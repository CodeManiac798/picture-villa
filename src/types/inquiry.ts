export type ShootType =
  | 'pre-wedding'
  | 'wedding'
  | 'fashion'
  | 'bridal'
  | 'commercial'
  | 'music-video'
  | 'editorial'
  | 'other';

export interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
  shootType: ShootType;
  preferredDate?: string;
  message?: string;
}

export interface InquiryResponse {
  success: boolean;
  message: string;
}
