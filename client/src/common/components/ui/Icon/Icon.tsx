import { IconType } from 'common/types/icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcons } from 'common/constants/icon';

const Icon = ({ name, size, color }: IconType) => {
  return <FontAwesomeIcon icon={FontAwesomeIcons[name]} size={size} color={color}></FontAwesomeIcon>;
};
export default Icon;
