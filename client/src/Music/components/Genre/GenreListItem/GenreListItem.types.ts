import type { GenreListItemType } from 'Music/types';

export type GenreListItemProps = Pick<GenreListItemType, 'image_url' | 'genre_id'>;
