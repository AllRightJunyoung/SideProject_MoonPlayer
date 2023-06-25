import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcons } from 'common/components/ui/constants';

type Icontype = keyof typeof FontAwesomeIcons;

export type IconButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  active?: boolean;
  className?: string;
  ref?: HTMLButtonElement;
  name: Icontype;
  size: FontAwesomeIconProps['size'];
  color: string;
};

export type ButtonProps = {
  active?: boolean;
};
