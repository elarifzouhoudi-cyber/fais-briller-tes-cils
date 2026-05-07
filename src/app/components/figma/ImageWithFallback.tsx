import { useState } from "react";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallback?: string;
}

export function ImageWithFallback({ src, alt, fallback, className, ...props }: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error && fallback) {
    return <img src={fallback} alt={alt} className={className} {...props} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}
