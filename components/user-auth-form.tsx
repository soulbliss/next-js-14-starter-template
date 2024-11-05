'use client';

import { signIn } from 'next-auth/react';
import * as React from 'react';

import { Icons } from '@/components/icons';
import { PATHS } from '@/config/paths';
import { cn } from '@/lib/utils';
import MagicLinkForm from './magic-link-form';
import { Button } from './ui/button';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <MagicLinkForm />
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        onClick={() => {
          signIn('google', {
            callbackUrl: PATHS.DASHBOARD,
          });
        }}
        type="button">
        <Icons.google className="mr-2 size-4" />
        Google
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          signIn('github', {
            callbackUrl: PATHS.DASHBOARD,
          });
        }}
        type="button">
        <Icons.gitHub className="mr-2 size-4" />
        GitHub
      </Button>
    </div>
  );
}
