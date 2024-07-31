import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function App() {
  const queryKey = ["posts"];
  const queryFn = () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
  };

  // gcTime = cashTime
  const { data } = useQuery({ queryKey, queryFn, gcTime: 50000 });
  console.log(data);

  return <>app</>;
}

export default App;
