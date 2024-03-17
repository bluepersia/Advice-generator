import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import AdviceGenerator from './components/AdviceGenerator';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AdviceGenerator />
    </QueryClientProvider>
  );
}

export default App;
