import { useEffect, type ComponentType } from 'react';

function withLogger<P extends object>(WrappedComponent: ComponentType<P>) {
  const name = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  function WithLogger(props: P) {
    useEffect(() => {
      console.log(`${name} mounted`);
      return () => console.log(`${name} unmounted`);
    }, []);

    return <WrappedComponent {...props} />;
  }

  WithLogger.displayName = `withLogger(${name})`;
  return WithLogger;
}

export default withLogger;
