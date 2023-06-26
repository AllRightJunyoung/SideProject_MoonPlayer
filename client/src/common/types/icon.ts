import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcons } from 'common/constants/icon';

type FontAweSomeIconType = keyof typeof FontAwesomeIcons;
export interface IconType {
  name: FontAweSomeIconType;
  size: FontAwesomeIconProps['size'];
  color: string;
}
