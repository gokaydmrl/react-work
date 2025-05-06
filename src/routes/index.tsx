import { createFileRoute } from "@tanstack/react-router";
// import { useEffect, useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import { useUserSave } from "../hooks/useUserSave";
import { useAxios } from "../hooks/useAxios";
import { useAuth0 } from "@auth0/auth0-react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
  // loader: () => {
  //   const user = "ads";
  //   if (!user) {
  //     return redirect({ to: "/login" });
  //   } else {
  //     console.log("hello qweqwe");
  //   }
  // },
});

// interface ApiError extends AxiosError {}

// interface ApiResult extends AxiosResponse {
//   error?: ApiError;
// }

function RouteComponent() {
  //    const [val, setVal] = useState("");
  //  const navigate = useNavigate();
  const axiosInstance = useAxios();
  const { isAuthenticated } = useAuth0();
  const { user } = useUserSave();

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     console.log("this worked");

  //     navigate({ to: "/login" });
  //   }
  //   console.log("token", token);
  //   console.log("isAuthh", isAuthenticated);
  // }, [isAuthenticated, token, navigate]);

  const getCats = async () => {
    try {
      const res: AxiosResponse = await axiosInstance.get("/cats");
      console.log("resss .data", res.data);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.log("error", error.response!.data);
      }
    }
  };
  // useEffect(() => {
  // const asd = async () => {
  //   const res = await getAccessTokenSilently();
  //   console.log("ress tokennn", res);
  // };
  // asd();
  // const myHeaders = new Headers();
  // myHeaders.append("Accept", "application/json");
  // myHeaders.append("Authorization", `Bearer ${token}`);
  // const requestOptions = {
  //   method: "GET",
  //   headers: myHeaders,
  // };
  // fetch(
  //   "https://dev-uaefh4jccukgswpy.us.auth0.com/api/v2/users/google-oauth2%7C116819608271688431268",
  //   requestOptions
  // )
  //   .then((response) => response.text())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log("error", error));
  // const getdata = async () => {
  //   await axios.post("http://localhost:3000/saveUser/save", {
  //     userId: "123",
  //   });
  // };
  // getdata();
  // });

  //  const { user } = useAuth0();

  // useEffect(() => {
  //   if (val === "") {
  //     navigate({ to: "/about" });
  //   }
  // }, [val]);

  return (
    <div>
      Hello "/"! {JSON.stringify(user)} {user?.email}
      <p>{user ? user.email : "no user"} </p>
      <p>{isAuthenticated ? "true" : "false"} </p>
      <button onClick={getCats}>getcats</button>
    </div>
  );
}
