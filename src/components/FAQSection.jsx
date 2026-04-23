"use client";
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
    question: "Je ne suis pas informaticien, est-ce que c'est fait pour moi ?",
    answer: "C'est exactement pour vous. Vous n'avez pas besoin de comprendre comment ça fonctionne, vous avez juste besoin que ça fonctionne. On s'occupe de tout : conception, mise en place, et on vous forme en 30 minutes sur ce que vous avez à utiliser au quotidien."
  },
  {
    question: "Est-ce que ça va fonctionner avec mes outils actuels ?",
    answer: "Dans 95% des cas, oui. Que vous utilisiez un logiciel de devis, un ERP, Gmail, WhatsApp, Telegram ou des fichiers Excel, on s'adapte à ce que vous avez déjà. Pas besoin de tout changer."
  },
  {
    question: "Combien ça coûte ?",
    answer: "Ça dépend de ce qu'on automatise. On commence toujours par un diagnostic gratuit pour identifier vos besoins et vous proposer un chiffrage clair, sans surprise. Le diagnostic ne vous engage à rien."
  },
  {
    question: "Combien de temps avant de voir un résultat concret ?",
    answer: "Les premières automatisations sont en production sous 2 à 4 semaines. Certains gains de temps sont visibles dès la première semaine, notamment sur les tâches répétitives comme les relances ou les rapports."
  },
  {
    question: "Et si ça tombe en panne ?",
    answer: "On surveille vos automatisations et on intervient en cas de problème. Vous avez un interlocuteur unique, basé à Nice, joignable directement, pas un ticket support qui reste sans réponse 3 jours."
  },
  {
    question: "Vous travaillez uniquement avec le BTP ?",
    answer: "Non, mais c'est notre secteur de prédilection. 18 ans de terrain dans le bâtiment nous permettent de comprendre vos contraintes sans que vous ayez à tout expliquer. On travaille aussi avec d'autres PME et artisans de la région PACA."
  },
  {
    question: "Que se passe-t-il après la mise en place ?",
    answer: "On ne disparaît pas. On assure un suivi mensuel (en option), on ajuste si besoin, et on est disponible si vous voulez automatiser autre chose. L'objectif c'est une relation à long terme, pas une prestation one-shot."
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
                <AccordionTrigger className="text-left text-white hover:text-nikaia py-5 text-lg font-medium hover:no-underline">
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

