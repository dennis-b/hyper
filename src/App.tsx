import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { StyledApp } from "./App.styled";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { theme } from "./theme/theme";

const queryClient = new QueryClient({});

function App() {
  return (
    <StyledApp>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Header/>
          <Content/>
        </QueryClientProvider>
      </ThemeProvider>
    </StyledApp>
  )
}

export default App
