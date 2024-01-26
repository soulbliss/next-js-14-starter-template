import { PATHS } from '@/config/paths';
import { authOptions } from '@/lib/auth';
import { getUserCurrentYearReviews } from '@/lib/db/yearReview';
import { getCurrentUser } from '@/lib/session';
import { redirect } from 'next/navigation';
export default async function DashboarDeciderPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login');
  }
  const yearReviews = await getUserCurrentYearReviews(user.email || '');

  if (yearReviews?.status === 'completed') {
    redirect(PATHS.DASHBOARD_CHECK_IN);
  } else {
    redirect(PATHS.DASHBOARD_REVIEW);
  }
}
