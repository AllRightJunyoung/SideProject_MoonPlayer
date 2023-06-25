import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import styles from './CircleTooltip.module.css';

const CircleTooltip = ({ anchorId, content }) => {
  return (
    <Tooltip anchorId={anchorId} className={styles.shape} classNameArrow="tooltip-arrow" content={content}></Tooltip>
  );
};
export default CircleTooltip;
