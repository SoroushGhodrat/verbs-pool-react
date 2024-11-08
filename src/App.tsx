import { ThemeProvider, CssBaseline } from "@mui/material";
import DataTable from "./components/DataTable";
import useTheme from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "./context/LanguageContext";
import { Suspense } from "react";

const App: React.FC = () => {
  const theme = useTheme();

  return (
    <Suspense fallback={<div>"Loading default language..."</div>}>
      <ThemeProvider theme={theme}>
        <LanguageProvider>
          <CssBaseline />
          <Navbar />
          <DataTable />
        </LanguageProvider>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
