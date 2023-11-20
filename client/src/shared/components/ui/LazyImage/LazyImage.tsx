import { useImageLoaded } from 'shared/hooks/useImageLoaded';

type Props = {
  id?: string;
  src: string;
  alt: string;
  width: number | string;
  height: number | string;
  lazy?: boolean; //lazy 로딩 유무
};

export default function LazyImage(props: Props) {
  const { src, alt, width, height, lazy, id } = props;

  const { ref, isLoaded } = useImageLoaded(lazy);

  return (
    <img
      id={id}
      ref={ref}
      alt={alt}
      src={isLoaded ? src : 'https://via.placeholder.com/128x72'}
      style={{ width, height, maxWidth: '100%', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', objectFit: 'fill' }}
    />
  );
}
