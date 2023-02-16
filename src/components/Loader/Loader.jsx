import { Dna } from 'react-loader-spinner';

export function Loader() {
  return (
    <Dna
      height="150"
      width="150"
      // color=" orange"
      ariaLabel="dna-loading"
      wrapperStyle={{
        position: 'fixed',
        bottom: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        zIndex: '100',
      }}
      wrapperClass="dna-wrapper"
      visible={true}
    />
  );
}
