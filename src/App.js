import CookieConsent from "react-cookie-consent";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="dark">
      <CookieConsent
        debug={true}
        location="bottom"
        buttonText="Accepter"
        declineButtonText="Refuser"
        enableDeclineButton
        cookieName="NikaIA-Consent-Final"
        style={{ background: "#1a1a1a", color: "#fff", zIndex: "99999" }}
        buttonStyle={{ background: "#ff0000", color: "#fff", borderRadius: "5px" }}
        expires={150}
      >
        Ce site utilise des cookies pour analyser l'audience de NikaIA. 🍪
      </CookieConsent>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;