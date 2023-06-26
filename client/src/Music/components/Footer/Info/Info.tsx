import * as Styled from './Info.styled';
import type { InfoProps } from './Info.types';

export const Info = ({ player }: InfoProps) => {
  const image =
    player.music.name.length > 0 ? (
      <Styled.InfoImage src={player.music.img_url} />
    ) : (
      <Styled.InfoImage src="https://via.placeholder.com/400?text=No+Selected+Music" />
    );
  const title = player.music && player.music.name;

  return (
    <Styled.Layout direction="row" justifyContent="flex-start" alignItems="center">
      {image}
      <Styled.Title>{title}</Styled.Title>
    </Styled.Layout>
  );
};

export default Info;
