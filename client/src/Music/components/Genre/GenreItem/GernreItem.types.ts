import type { GenreItemType } from 'Music/types';

export type GenreItemProps = Pick<GenreItemType, 'image_url' | 'genre_id'>;
