"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import OffersSection from "../components/OffersSection";
import ProcessSection from "../components/ProcessSection";
import BenefitsSection from "../components/BenefitsSection";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import ContactModal from "../components/ContactModal";
import CaseStudiesSection from "../components/CaseStudiesSection";

export default function LandingPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);

  const openContactModal = (offer = null) => {
    setSelectedOffer(offer);
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050505]" data-testid="landing-page">
      <Navbar onContact={() => openContactModal()} />
      
      <main>
        <HeroSection onContact={() => openContactModal("Diagnostic Gratuit")} />
        <ProblemSection />
        <SolutionSection />
        <OffersSection onSelectOffer={openContactModal} />
        <ProcessSection />
        <BenefitsSection />
        <CaseStudiesSection />
        <CTASection onContact={() => openContactModal("diagnostic Gratuit")} />
        <FAQSection />
      </main>
      
      <Footer onContact={() => openContactModal()} />
      
      <Chatbot />
      
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)}
        selectedOffer={selectedOffer}
      />
    </div>
  );
}

