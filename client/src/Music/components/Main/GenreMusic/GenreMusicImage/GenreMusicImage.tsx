import { useGenreMusicImageObserver } from 'Music/hooks/useGenreMusicImageObserver';
import type { GenreMuiscImageProps } from './GenreMusicImage.types';
import { memo } from 'react';

const GenreMusicImage = (props: GenreMuiscImageProps) => {
  const { src, alt, width, height, id } = props;

  const { imageRef, imageSrc } = useGenreMusicImageObserver(src);

  return (
    <img
      id={id}
      ref={imageRef}
      alt={alt}
      src={imageSrc.length > 0 ? imageSrc : 'https://picsum.photos/128/72/?blur'}
      style={{
        width,
        height,
        maxWidth: '100%',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        objectFit: 'fill',
      }}
    />
  );
};

export default memo(GenreMusicImage);
