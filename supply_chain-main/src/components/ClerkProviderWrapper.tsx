import { ClerkProvider as _ClerkProvider } from '@clerk/nextjs';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function ClerkProviderWrapper({ children }: Props) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  if (!publishableKey) {
    return <>{children}</>;
  }
  return (
    <_ClerkProvider publishableKey={publishableKey}>
      {children}
    </_ClerkProvider>
  );
}

