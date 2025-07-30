import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const downloadCV = () => {
  try {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/lovable-uploads/Taha Nadeem CV .pdf';
    link.download = 'Taha_Nadeem_CV.pdf';
    link.target = '_blank';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error downloading CV:', error);
    // Fallback: open in new tab
    window.open('/lovable-uploads/Taha Nadeem CV .pdf', '_blank');
  }
};
