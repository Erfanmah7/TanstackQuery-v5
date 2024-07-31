import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function App() {
  const queryKey = ["posts"];
  const queryFn = () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
  };

  // gcTime = cashTime
  //isLoading => isPending && isFetching
  const { data, isPending } = useQuery({
    queryKey,
    queryFn,
    gcTime: 50000,
    refetchOnWindowFocus: false,
  });
  console.log({ data, isPending });

  return <>app</>;
}

export default App;
