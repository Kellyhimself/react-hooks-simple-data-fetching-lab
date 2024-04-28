import React, { useState, useEffect } from "react";

// This is the main function component that defines the App
const App = () => {
  // The useState hook is used to manage the state of the component.
  // It takes an initial value and returns an array with two elements:
  // the current state and a function to update the state.
  const [dogImage, setDogImage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // The useEffect hook is used to perform side effects in functional components.
  // It takes a function as its first argument, which is called after the component is mounted.
  // The second argument is an array of dependencies, which determines when the effect should be re-run.
  // In this case, we pass an empty array as the second argument, which means the effect will only run once,
  // after the component is mounted.
  useEffect(() => {
    // The fetch function is used to make a request to the specified URL.
    // It returns a Promise that resolves to the response of the request.
    fetch("https://dog.ceo/api/breeds/image/random")
      // The .then() method is used to handle the Promise returned by the fetch function.
      // It takes a callback function as its argument, which is called when the Promise resolves.
      // The callback function takes the response from the request as its argument.
      .then((res) => res.json())
      // The .then() method is used to handle the Promise returned by the .json() method.
      // It takes a callback function as its argument, which is called when the Promise resolves.
      // The callback function takes the data from the response as its argument.
      .then((data) => {
        // The setDogImage function is used to update the state of the component.
        // It takes the data from the response as its argument.
        setDogImage(data.message);
        // The setIsLoaded function is used to update the state of the component.
        // It takes a boolean value as its argument.
        setIsLoaded(true);
      });
  }, []);

  // The ternary operator is used to conditionally render the JSX elements.
  // If the isLoaded state is true, it renders the image.
  // If the isLoaded state is false, it renders a loading message.
  return isLoaded ? (
    <img src={dogImage} alt="A Random Dog" />
  ) : (
    <p>Loading...</p>
  );
};

// The App component is exported so it can be used in other parts of the application.
export default App;
