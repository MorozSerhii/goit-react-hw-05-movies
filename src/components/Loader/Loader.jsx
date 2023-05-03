import PuffLoader from 'react-spinners/PuffLoader';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  display: 'block',
  margin: 'auto',
  transform: 'translate(-50%, -50%)',
};
const Loader = () => {
  return <PuffLoader size={300} color="#36d7b7" cssOverride={style} />;
};

export default Loader;
