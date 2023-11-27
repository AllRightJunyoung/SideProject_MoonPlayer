import { useGenreMusicImageLoaded } from 'Music/hooks/useGenreMusicImageLoaded';
import type { GenreMuiscImageProps } from './GenreMusicImage.types';

export default function GenreMusicImage(props: GenreMuiscImageProps) {
  const { src, alt, width, height, lazy, id } = props;

  const { ref, isLoaded } = useGenreMusicImageLoaded(lazy);

  return (
    <img
      id={id}
      ref={ref}
      alt={alt}
      src={isLoaded ? src : 'https://via.placeholder.com/128x72/FFF'}
      style={{ width, height, maxWidth: '100%', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', objectFit: 'fill' }}
    />
  );
}
