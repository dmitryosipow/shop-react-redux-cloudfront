import { useEffect, useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import axios from "axios";

const redirect_url = "http://localhost:3000/callback";

export default function Callback() {
  const [searchParams] = useSearchParams();
  const [creds, setCreds] = useState();

  useEffect(() => {
    (async () => {
      const params = new URLSearchParams();

      params.append("grant_type", "authorization_code");
      params.append("client_id", "5og0rbm014sim8efte8qri3sib");
      params.append("code", searchParams.get("code") || "");
      params.append("redirect_uri", redirect_url);

      debugger;

      const { data: credentials } = await axios.post(
        `https://seryecoty.auth.eu-west-1.amazoncognito.com/oauth2/token/`,
        params,
        {
          auth: {
            username: "5og0rbm014sim8efte8qri3sib",
            password: "5dfp825gkl2mgiqiuv7bmj30eterea5qnqtfpcop6usj2on2fen",
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      debugger;
      localStorage.setItem("creds", JSON.stringify(credentials));
      setCreds(credentials);
    })();
  }, [searchParams]);

  return creds ? <Navigate to="/" /> : null;
}
