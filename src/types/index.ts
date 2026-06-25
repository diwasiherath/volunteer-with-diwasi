// Global types for the DIWASI Volunteer application
export interface VolunteerApplication {
  applicationId: string;
  fullName: string;
  dob: string;
  gender: string;
  nationality: string;
  email: string;
  phone: string;
  passport: string;
  primaryTrack: string;
  secondaryTrack: string;
  startDate: string;
  duration: number;
  packageTier: string;
  occupation: string;
  skills: string;
  medicalAcknowledge: boolean;
  motivation: string;
  estimatedCost: number;
  submittedAt: string;
}

export interface VolunteerReview {
  id: string;
  name: string;
  rating: number;
  trackId: string;
  reviewText: string;
  date: string;
  approved: boolean;
  country: string;
}
