import { db } from './db';

export async function getUserCurrentYearReviews(
  user_email: string,
): Promise<YearReview> {
  try {
    const result = await db.query(
      `
      SELECT * FROM year_reviews yr
      JOIN users u ON yr.user_id = u.id
      WHERE u.email = $1
      AND EXTRACT(YEAR FROM yr."timestamp") = EXTRACT(YEAR FROM CURRENT_DATE);
      `,
      [user_email],
    );

    return Promise.resolve(result.rows[0]) as Promise<YearReview>;
  } catch (error) {
    console.log(`Error in getUserCurrentYearReviews: ${error}`);
    return Promise.reject(error);
  }
}
