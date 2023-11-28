import { useGenreMusicImageObserver } from 'Music/hooks/useGenreMusicImageObserver';
import type { GenreMuiscImageProps } from './GenreMusicImage.types';
import { memo } from 'react';
import { useAppSelector } from 'shared/hooks/useReduxStore';

const GenreMusicImage = (props: GenreMuiscImageProps) => {
  const { src, alt, width, height, id } = props;

  const { imageRef, imageSrc } = useGenreMusicImageObserver(src);

  const { isFetching, isLastPage } = useAppSelector((state) => state.music.genreMusic.store);

  return (
    <img
      id={id}
      ref={imageRef}
      alt={alt}
      src={imageSrc.length === 0 || (isFetching && !isLastPage) ? 'https://picsum.photos/128/72/?blur' : imageSrc}
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
