import { ThreeCircles } from 'react-loader-spinner';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  margin: '0 auto',
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  zIndex: '9999',
};

export const Loader = () => (
  <ThreeCircles
    height="100"
    width="100"
    color="#4fa94d"
    wrapperStyle={styles}
    wrapperClass=""
    visible={true}
    ariaLabel="three-circles-rotating"
    outerCircleColor=""
    innerCircleColor=""
    middleCircleColor=""
  />
);
