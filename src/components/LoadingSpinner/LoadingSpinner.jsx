import { MagnifyingGlass } from 'react-loader-spinner';

export const LoadingSpinner = () => {
  const inlineStyles = {
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <div style={inlineStyles}>
      <MagnifyingGlass color="black" />;
    </div>
  );
};
