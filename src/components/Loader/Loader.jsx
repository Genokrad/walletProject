import { RotatingLines } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {

  return (
    <Wrapper>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="6"
        animationDuration="0.75"
        height="100"
        width="100"
        visible={true}
      />
    </Wrapper>
  );
};
