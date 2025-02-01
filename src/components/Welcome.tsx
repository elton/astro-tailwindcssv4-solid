import type { Component, JSX } from "solid-js";

type WelcomeProps = {
  name: string;
}

const Welcome: Component<WelcomeProps> = (props): JSX.Element => {
  return (
    <div>
      <h1>Welcome to Solid!</h1>
      <div class="my-2 text-cyan-600 font-bold text-5xl">Hello {props.name}!</div>
    </div>
  );  
}

export default Welcome;