import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcons } from 'shared/constants/icon';

type FontAweSomeIconType = keyof typeof FontAwesomeIcons;
export interface IconType {
  name: FontAweSomeIconType;
  size: FontAwesomeIconProps['size'];
  color: string;
}
