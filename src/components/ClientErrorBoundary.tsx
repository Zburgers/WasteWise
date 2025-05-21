'use client';

import ErrorBoundary from './ErrorBoundary';

export default function ClientErrorBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ErrorBoundary>{children}</ErrorBoundary>;
} 