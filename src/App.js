import CookieConsent from "react-cookie-consent";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <div className="dark">
      <CookieConsent
        debug={false}
        location="bottom"
        buttonText="Accepter"
        declineButtonText="Refuser"
        enableDeclineButton
        cookieName="NikaIA-Consent-Final"
        style={{ 
          background: "#1a1a1a", 
          color: "#fff", 
          fontSize: "16px", 
          zIndex: "99999", 
          fontFamily: "Montserrat, sans-serif" 
        }}
        buttonStyle={{ 
          background: "#ff0000", 
          color: "#fff", 
          fontSize: "16px", 
          borderRadius: "5px", 
          padding: "10px 20px", 
          fontWeight: "bold",
          fontFamily: "Montserrat, sans-serif" 
        }}
        declineButtonStyle={{ 
          background: "transparent", 
          border: "1px solid #fff", 
          color: "#fff", 
          fontSize: "16px", 
          borderRadius: "5px",
          fontFamily: "Montserrat, sans-serif" 
        }}
        expires={150}
      >
        Ce site utilise des cookies pour analyser l'audience de NikaIA et améliorer votre expérience. 🍪
      </CookieConsent>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
