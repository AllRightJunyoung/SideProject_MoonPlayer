import { Icon } from 'shared/components';
import { Flex } from 'shared/components';
const Spinner = () => {
  return (
    <Flex alignItems="center" direction="column" justifyContent="center">
      <Icon name="spinner" color="purple" size="10x" />;
    </Flex>
  );
};
export default Spinner;
