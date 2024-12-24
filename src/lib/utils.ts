import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string | null | undefined): string {
  if (!name) return '';

  const nameParts = name.split(' ');
  const firstInitial = nameParts[0]?.charAt(0).toUpperCase() || '';
  const secondInitial =
    nameParts.length > 1 ? nameParts[1]?.charAt(0).toUpperCase() : '';

  return `${firstInitial}${secondInitial || firstInitial}`;
}
