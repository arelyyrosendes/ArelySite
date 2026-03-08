import { JSX } from 'react';

export const renderProjectImage = (image: string | undefined, title: string): JSX.Element | null => {
  if (!image) return null;

  if (typeof image === 'string' && image.startsWith('/')) {
    return (
      <img
        src={image}
        alt={title}
        className="w-full h-full object-contain"
        style={{ objectPosition: 'center' }}
      />
    );
  }

  if (
    typeof image === 'string' &&
    (image.endsWith('.png') ||
      image.endsWith('.jpg') ||
      image.endsWith('.jpeg') ||
      image.endsWith('.webp') ||
      image.endsWith('.gif'))
  ) {
    const path = image.startsWith('/') ? image : `/${image}`;
    return (
      <img
        src={path}
        alt={title}
        className="w-full h-full object-contain"
        style={{ objectPosition: 'center' }}
      />
    );
  }

  return <div className="text-8xl">{image}</div>;
};
