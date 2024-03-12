/**
 * The external imports
 */
import ReactDOM from "react-dom/client";

/**
 * The internal imports
 */
import App from "./App.jsx";
import "./index.css";
import DataProvider from "./context/DataProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </DataProvider>
);
