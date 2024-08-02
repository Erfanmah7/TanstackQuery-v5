import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

function App() {
  const queryKey = ["posts"];
  const queryFn = () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
  };

  // gcTime = cashTime
  //isLoading => isPending && isFetching
  // const { data, isPending } = useQuery({
  //   queryKey,
  //   queryFn,
  //   gcTime: 50000,
  //   refetchOnWindowFocus: false,
  // });

  // console.log({ data, isPending });

  const mutationFn = (data) => {
    return axios.post("https://jsonplaceholder.typicode.com/posts", data);
  };

  const clickHandler = () => {
    const data = {
      name: "erfan",
    };

    mutate(data, {
      onError: () => console.log("error", error),
      onSuccess: (data) => console.log("data", data),
    });
  };
  const { mutate, isPending } = useMutation({ mutationFn });

  return (
    <>
      <div>
        <button onClick={clickHandler}>Send</button>
      </div>
    </>
  );
}

export default App;
