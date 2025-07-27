import './SpinnerLoader.css';

/**
* Name           : SpinnerLoader
* Purpose        : Renders a circular spinner loader animation using 12 div elements styled with CSS.
* Parameters     : None
* Returns        : JSX.Element - A JSX element representing the spinner loader.
*/
export const SpinnerLoader = () => {
  return (
    <div className="loadingio-spinner-spinner-nq4q5u6dq7r">
      <div className="ldio-x2uulkbinbj">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
    </div>
  );
};
