import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, CheckCircle } from "lucide-react";
import axios from "axios";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const offerTypes = [
  { value: "diagnostic", label: "Diagnostic Gratuit" },
  { value: "automatisation", label: "Automatisation sur mesure" },
  { value: "agents-ia", label: "Agents IA" },
  { value: "optimisation", label: "Optimisation continue" },
  { value: "autre", label: "Autre" },
];

export const ContactModal = ({ isOpen, onClose, selectedOffer }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    offer_type: selectedOffer || ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, offer_type: value }));
  };

  const handleSubmit = async (e) => {
    console.log("SUBMIT TRIGGERED");
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      console.log("FETCH START");
      const response = await fetch("https://agent.nikaia-automations.com/webhook/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error("Erreur serveur");
      }

      setIsSuccess(true);

      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      }, 2000);

    } catch (error) {
      console.error(error);
      setError("Erreur lors de l'envoi");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            data-testid="modal-backdrop"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div 
              className="bg-[#0A0A0A] border border-white/10 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
              data-testid="contact-modal"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div>
                  <h2 className="text-2xl font-semibold text-white">Contactez-nous</h2>
                  <p className="text-gray-400 text-sm mt-1">Réponse sous 24h garantie</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                  data-testid="modal-close"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Message envoyé !</h3>
                    <p className="text-gray-400">Nous vous recontacterons très rapidement.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">Nom complet *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Jean Dupont"
                        className="bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-red-500"
                        data-testid="contact-name"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="jean@entreprise.com"
                        className="bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-red-500"
                        data-testid="contact-email"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-300">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="06 12 34 56 78"
                        className="bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-red-500"
                        data-testid="contact-phone"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-gray-300">Entreprise</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nom de votre entreprise"
                        className="bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-red-500"
                        data-testid="contact-company"
                      />
                    </div>

                    {/* Offer Type */}
                    <div className="space-y-2">
                      <Label className="text-gray-300">Type de demande</Label>
                      <Select value={formData.offer_type} onValueChange={handleSelectChange}>
                        <SelectTrigger 
                          className="bg-white/5 border-white/10 text-white"
                          data-testid="contact-offer-type"
                        >
                          <SelectValue placeholder="Sélectionnez une option" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#121212] border-white/10">
                          {offerTypes.map((offer) => (
                            <SelectItem 
                              key={offer.value} 
                              value={offer.value}
                              className="text-white hover:bg-white/10 focus:bg-white/10"
                            >
                              {offer.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-300">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Décrivez votre projet ou vos besoins en automatisation..."
                        className="bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-red-500 resize-none"
                        data-testid="contact-message"
                      />
                    </div>

                    {/* Error */}
                    {error && (
                      <p className="text-red-500 text-sm">{error}</p>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      data-testid="contact-submit"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Envoyer ma demande
                        </>
                      )}
                    </button>

                    <p className="text-gray-500 text-xs text-center">
                      En soumettant ce formulaire, vous acceptez d'être recontacté par NikaIA Automations.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;