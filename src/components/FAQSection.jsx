import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const faqs = [
  {
    question: "Combien de temps pour voir les premiers résultats ?",
    answer: "Vous pouvez voir les premiers résultats en moins de 14 jours. Notre processus est conçu pour un déploiement rapide avec un impact immédiat sur vos opérations."
  },
  {
    question: "Est-ce compatible avec mes outils actuels ?",
    answer: "Oui, nous connectons tout via API et webhooks n8n ou Make. Que vous utilisiez un CRM, un ERP, des outils email, Stripe ou autre, nous créons des ponts entre tous vos systèmes."
  },
  {
    question: "Quel est le coût d'une automatisation ?",
    answer: "Chaque projet est unique. Nous commençons toujours par un diagnostic gratuit pour évaluer vos besoins et vous proposer une solution adaptée à votre budget avec un ROI prévisible."
  },
  {
    question: "Faut-il des compétences techniques ?",
    answer: "Non, c'est notre travail ! Nous nous occupons de tout : conception, développement, déploiement et maintenance. Vous n'avez qu'à utiliser vos nouvelles automatisations."
  },
  {
    question: "Proposez-vous un accompagnement après la mise en place ?",
    answer: "Absolument. Notre offre d'optimisation continue inclut un suivi mensuel, des rapports de performance et des ajustements pour maximiser votre ROI dans le temps."
  },
  {
    question: "Travaillez-vous uniquement à Nice ?",
    answer: "Nous sommes basés à Nice mais intervenons dans toute la région PACA et au-delà. La plupart de nos interventions se font à distance, ce qui nous permet d'accompagner des entreprises partout en France."
  },
  {
    question: "Quels secteurs accompagnez-vous ?",
    answer: "Nous accompagnons principalement les PME, TPE, indépendants, e-commerce et startups. Nous avons une expertise particulière dans le bâtiment et l'immobilier, mais nos solutions s'adaptent à tous les secteurs."
  }
];

export const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="faq" 
      className="relative py-24 md:py-32 bg-[#050505]"
      data-testid="faq-section"
    >
      <div className="max-w-3xl mx-auto px-6 md:px-12" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm uppercase tracking-widest text-nikaia font-semibold mb-4 block">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Questions fréquentes
          </h2>
          <p className="text-gray-400 text-lg">
            Tout ce que vous devez savoir avant de commencer.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-neutral-900/50 border border-white/10 rounded-xl overflow-hidden px-6"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left text-white hover:text-red-400 py-5 text-lg font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
