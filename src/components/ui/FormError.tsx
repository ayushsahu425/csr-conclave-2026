export default function FormError({ message, className = '' }: { message: string; className?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className={`rounded-xl bg-maroon-50 px-4 py-3 text-sm font-medium text-maroon-700 ${className}`}>
      {message}
    </p>
  );
}
