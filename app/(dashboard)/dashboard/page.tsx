import { authOptions } from '@/lib/auth';
import { getCurrentUser } from '@/lib/session';
import { redirect } from 'next/navigation';
export default async function DashboarDeciderPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login');
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">
          Welcome {user.name || user.email}, to the App
        </h3>
        <p className="text-sm text-muted-foreground">
          Let us begin with working on the app.
        </p>
      </div>
    </div>
  );
}
