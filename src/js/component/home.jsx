import React from "react";
import SimpleCounter from "./counter.jsx";
import Button from "./boton.jsx";



//create your first component
const Home = () => {
	const [counter, setCounter] = React.useState(0);
  
	React.useEffect(() => {
	  const interval = setInterval(() => {
		setCounter(counter + 1);
	  }, 1000);
  
	  return () => {
		clearInterval(interval);
	  };
	}, [counter]);
  
	return (
	  <>
		<SimpleCounter
		  digitOne={counter % 10}
		  digitTwo={Math.floor(counter / 10) % 10}
		  digitThree={Math.floor(counter / 100) % 10}
		  digitFour={Math.floor(counter / 1000) % 10}
		  digitFive={Math.floor(counter / 10000) % 10}
		  digitSix={Math.floor(counter / 100000) % 10}
		/>
		<Button/>
	</>
	);
  };
  
  export default Home;

