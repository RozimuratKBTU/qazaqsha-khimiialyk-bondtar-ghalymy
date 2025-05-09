
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Covalent from "./pages/Covalent";
import Ionic from "./pages/Ionic";
import Metallic from "./pages/Metallic";
import Hydrogen from "./pages/Hydrogen";
import Examples from "./pages/Examples";
import Glossary from "./pages/Glossary";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/covalent" element={<Covalent />} />
          <Route path="/ionic" element={<Ionic />} />
          <Route path="/metallic" element={<Metallic />} />
          <Route path="/hydrogen" element={<Hydrogen />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
