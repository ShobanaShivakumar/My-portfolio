import React from "react";
import { Toaster } from "@/components/ui/toaster";            // Notification system
import { Toaster as Sonner } from "@/components/ui/sonner";   // Optional toast alternative
import { TooltipProvider } from "@/components/ui/tooltip";    // Tooltip support
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import CallToAction from "./pages/CallToAction";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import CodingProfiles from "./pages/CodingProfiles";
import NotFound from "./pages/NotFound";

// Shared Components
import Navigation from "./components/Navigation";
import PageTransition from "./components/PageTransition";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster /> {/* Primary toast */}
      <Sonner />  {/* Optional toast alternative */}
      <div className="bg-black min-h-screen overflow-hidden relative flex flex-col">
        
        <Navigation />

        <div className="flex-grow"> {/* Ensures footer sticks to bottom */}
          <PageTransition>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/cta" element={<CallToAction />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profiles" element={<CodingProfiles />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </div>

        <Footer /> {/* Consistent site footer */}
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
