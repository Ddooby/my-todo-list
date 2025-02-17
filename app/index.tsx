import { useEffect } from "react";
import App from "./App";

const Index = () => {
  useEffect(() => {
    console.log('App Test');
  }, []);

  return (
    <>
      <App />
    </>
  )
}
export default Index;