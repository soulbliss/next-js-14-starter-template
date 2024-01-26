import { SidebarNav } from '@/components/sidebar-nav';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forms',
  description: 'Advanced form example using react-hook-form and Zod.',
};

const sidebarNavItems = [
  {
    title: 'Year Review',
    href: '/examples/forms',
  },
  {
    title: 'Gratitude Review',
    href: '/examples/forms/account',
  },
  {
    title: 'Life Balance Review',
    href: '/examples/forms/appearance',
  },
  {
    title: 'Grand Design Review',
    href: '/examples/forms/notifications',
  },
  {
    title: 'Plan of Action Review',
    href: '/examples/forms/display',
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  );
}
