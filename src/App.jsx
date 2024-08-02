import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

function App() {
  const queryClient = useQueryClient();

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

  console.log({ data });

  const mutationFn = (data) => {
    return axios.post("https://jsonplaceholder.typicode.com/posts", data);
  };

  const clickHandler = () => {
    const data = {
      name: "erfan",
    };

    mutate(data, {
      onSuccess: () => {
        console.log("Success", data),
          queryClient.invalidateQueries({ queryKey: ["posts"] });
      },
      onError: (data) => console.log("error", error),
    });
  };
  const { mutate } = useMutation({ mutationFn });

  return (
    <>
      <div>
        <button onClick={clickHandler}>Send</button>
      </div>
    </>
  );
}

export default App;
