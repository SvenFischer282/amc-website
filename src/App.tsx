import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";
import { CookieConsent, useCookieConsent } from "./components/CookieConsent";
import { useEffect } from "react";

declare global {
  interface Window {
    gtagScriptLoaded?: boolean;
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const queryClient = new QueryClient();

function App() {
  const consent = useCookieConsent();

  // Placeholder for analytics initialization
  useEffect(() => {
    console.log("Consent value:", consent);
    if (consent === "accepted") {
      // Initialize dataLayer and gtag before loading the script
      window.dataLayer = window.dataLayer || [];
      window.gtag = (...args: any[]) => {
        window.dataLayer!.push(args);
      };

      if (!window.gtagScriptLoaded) {
        console.log("Injecting GA script...");
        const script = document.createElement("script");
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-B2BPXNEV1J";
        script.async = true;
        document.head.appendChild(script);
        window.gtagScriptLoaded = true;
      } else {
        console.log("GA script already injected.");
      }

      console.log('Calling gtag("js") and gtag("config")');
      window.gtag("js", new Date());
      window.gtag("config", "G-B2BPXNEV1J", {
        anonymize_ip: true,
        page_path: window.location.pathname + window.location.search,
        referrer: document.referrer || undefined,
      });

      // Track page views on route change
      const handlePageView = () => {
        console.log("Tracking page view");
        window.gtag!("event", "page_view", {
          page_path: window.location.pathname + window.location.search,
          referrer: document.referrer || undefined,
        });
      };
      window.addEventListener("popstate", handlePageView);
      window.addEventListener("pushstate", handlePageView);
      window.addEventListener("replacestate", handlePageView);

      // Track visit duration
      const start = Date.now();
      const handleUnload = () => {
        const duration = Math.round((Date.now() - start) / 1000); // seconds
        console.log("Tracking visit duration:", duration);
        window.gtag!("event", "visit_duration", { duration });
      };
      window.addEventListener("beforeunload", handleUnload);
      return () => {
        window.removeEventListener("popstate", handlePageView);
        window.removeEventListener("pushstate", handlePageView);
        window.removeEventListener("replacestate", handlePageView);
        window.removeEventListener("beforeunload", handleUnload);
      };
    }
  }, [consent]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <CookieConsent />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/menu" element={<Menu />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
