import { LoaderCircle } from 'lucide-react';
import type { ReactNode } from 'react';

export default function SubmitButton({
  loading,
  disabled,
  children,
  className = '',
}: {
  loading: boolean;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <button type="submit" disabled={loading || disabled} className={`btn-primary !py-3.5 ${className}`}>
      {loading ? (
        <>
          <LoaderCircle className="h-4 w-4 animate-spin" /> Submitting…
        </>
      ) : (
        children
      )}
    </button>
  );
}
