const TOTAL_ID_LENGTH = 24; // Total length of the ID including the prefix and underscore

/**
 * Generates a unique ID with a consistent length
 * @param prefix The prefix for the ID (e.g., 'user')
 * @returns A string ID with a consistent length
 */
export const generateId = (prefix: string): string => {
  const prefixLength = prefix.length + 1; // +1 for the underscore
  const randomLength = TOTAL_ID_LENGTH - prefixLength;

  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substring(2, 15);
  const combined = timestamp + randomPart;

  // Ensure the combined string is exactly the required length
  const paddedCombined = combined
    .padEnd(randomLength, '0')
    .slice(0, randomLength);

  return `${prefix}_${paddedCombined}`;
};
