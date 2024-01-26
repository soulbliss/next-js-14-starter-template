import { DashboardHeader } from '@/components/header';
import { DashboardShell } from '@/components/shell';
import { Skeleton } from '@/components/ui/skeleton';

export default function DashboardLoading() {
  return (
    <div className="hidden space-y-6 p-10 pb-16 md:block">
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5"></aside>
        <div className="flex-1 lg:max-w-2xl">
          <DashboardShell>
            <DashboardHeader
              heading="Checking your progress"
              text="Let's have the most amazing year ever.
    "></DashboardHeader>
            <div className="divide-border-200 divide-y rounded-md border">
              <div className="p-4">
                <div className="space-y-3">
                  <Skeleton className="h-5 w-2/5" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              </div>
            </div>
          </DashboardShell>
        </div>
      </div>
    </div>
  );
}
