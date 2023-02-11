import { Spinner } from '@alfalab/core-components/spinner';

function Loader() {
  return (
    <div className="centered">
      <Spinner size="m" visible dataTestId="spinner" />
    </div>
  );
}

export default Loader;
