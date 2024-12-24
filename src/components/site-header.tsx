import Link from 'next/link';

import { MainNav } from '@/components/main-nav';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { PATHS } from '@/config/paths';
import { siteConfig } from '@/config/site';
import { getCurrentUser } from '@/lib/session';
import { UserAccountNav } from './user-account-nav';

export async function SiteHeader() {
  const user = await getCurrentUser();
  console.log(user);
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
            {!user && (
              <Link
                href={PATHS.LOGIN}
                rel="noreferrer"
                className="mr-4"
              >
                <Button
                  variant={'outline'}
                  data-umami-event="Getting started public"
                  className="ml-2 w-full whitespace-nowrap font-medium"
                >
                  Login
                </Button>
              </Link>
            )}
            {user && (
              <UserAccountNav
                user={{
                  name: user.name,
                  image: user.image,
                  email: user.email,
                }}
              />
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
