interface BrandLogoProps {
  className?: string;
}

export default function BrandLogo({ className = "" }: BrandLogoProps) {
  return (
    <img
      src="/images/logo.jpg"
      alt="Logo Mamouda Ndam Biofil"
      className={`h-11 w-11 rounded-full object-cover border-2 border-primary/20 shadow-sm ${className}`}
    />
  );
}
