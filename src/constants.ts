import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BUSINESS_DETAILS = {
  name: "FixUK",
  phone: "+44 7384 658697",
  phoneDisplay: "+44 7384 658697",
  whatsapp: "447384658697",
  rating: "5.0",
  reviewCount: "38",
  hours: "Open 24 Hours",
  location: "Birmingham & West Midlands",
  email: "info@fixuk-electricians.co.uk", // Placeholder email
};

export const REVIEWS = [
  {
    name: "John Smith",
    source: "Google Review",
    rating: 5,
    text: "Really saved us from a house fire. Can't thank the team enough. Came very quickly, isolated the issue and carried out the repairs.",
    highlight: true
  },
  {
    name: "Maryam Kamil",
    source: "Google Review",
    rating: 5,
    text: "Excellent service came out within 30 minutes. Found the burning smell coming from my fuseboard and replaced it. I highly recommend.",
    highlight: true
  },
  {
    name: "Shiraz Iqbal",
    source: "Verified Customer",
    rating: 5,
    text: "Have been using these guys for around 2 years, never had an issue. Very knowledgeable, nothing is ever too much and have always been happy with their work.",
    highlight: true
  }
];

export const SERVICE_AREAS = [
  "Birmingham", "Solihull", "Hall Green", "Moseley", "Kings Heath", "Shiraz", "Acocks Green", 
  "Handsworth", "Erdington", "Sutton Coldfield", "Edgbaston", "Harborne", "Selly Oak", "West Midlands"
];
