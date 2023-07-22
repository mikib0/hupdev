import { useRouteError } from "react-router-dom";

export default function(){
  const error = useRouteError()
  console.log(error)
  return <h1>Error! 💀</h1>;
}