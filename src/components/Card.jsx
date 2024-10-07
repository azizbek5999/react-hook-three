import { forwardRef, useContext } from "react";
import { ThemeContent } from './../index';

const Card = forwardRef(function Card(props, ref) {
  const data = useContext(ThemeContent)
  return (
    <dispatchEvent>
      <h2>Card Component</h2>
      <h2>{"Welcome"}</h2>
    </dispatchEvent>
  );
});

export default Card;
