import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { NotificationsProvider } from "@mantine/notifications";
import { Auth0Provider } from "@auth0/auth0-react";
const container = document.getElementById("root");
const root = createRoot(container!);

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const redirectUri =
  process.env.NODE_ENV === "production"
    ? "https://book-search-frontend.vercel.app/search"
    : "http://localhost:3000/search";

root.render(
  <BrowserRouter>
    <Auth0Provider
      domain={domain!}
      clientId={clientId!}
      redirectUri={window.location.origin}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      <NotificationsProvider>
        <App />
      </NotificationsProvider>
    </Auth0Provider>
  </BrowserRouter>
);
