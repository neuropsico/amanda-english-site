"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const QUESTIONS = [
  {
    question: "Which sentence is grammatically correct?",
    options: [
      "I have went to London last year.",
      "I went to London last year.",
      "I go to London last year.",
    ],
    answer: 1,
    weight: 1, // Basic
  },
  {
    question: "If I _____ you, I would study more.",
    options: ["was", "were", "am", "have been"],
    answer: 1,
    weight: 2, // Intermediate
  },
  {
    question: "By the time we arrived at the cinema, the film _____.",
    options: ["has already started", "already started", "had already started"],
    answer: 2,
    weight: 3, // Upper Int
  },
  {
    question: "Choose the word that fits: He is highly _____ in his field of work.",
    options: ["respected", "respecting", "respectful"],
    answer: 0,
    weight: 3, // Upper Int
  },
  {
    question: "Scarcely _____ the house when it started to rain.",
    options: ["I had left", "had I left", "did I left"],
    answer: 1,
    weight: 4, // Advanced
  },
];

export default function LevelingTest() {
  const [step, setStep] = useState<"intro" | "test" | "lead" | "result">("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", whatsapp: "", email: "" });
  const [calculatedLevel, setCalculatedLevel] = useState("");

  const handleAnswer = (idx: number) => {
    if (idx === QUESTIONS[currentQ].answer) {
      setScore((s) => s + QUESTIONS[currentQ].weight);
    }
    
    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ((q) => q + 1);
    } else {
      setStep("lead");
    }
  };

  const calculateLevel = (finalScore: number) => {
    if (finalScore <= 2) return "A2 (Básico)";
    if (finalScore <= 5) return "B1 (Intermediário)";
    if (finalScore <= 9) return "B2 (Intermediário Superior)";
    return "C1 (Avançado)";
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const level = calculateLevel(score);
    setCalculatedLevel(level);

    try {
      await addDoc(collection(db, "leveling_tests"), {
        ...formData,
        score,
        level,
        timestamp: serverTimestamp(),
      });
      // Em um cenário real, aqui poderia disparar a API da Resend
      setStep("result");
    } catch (err) {
      console.error(err);
      alert("Houve um erro ao processar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 border border-gray-100 max-w-2xl mx-auto overflow-hidden relative min-h-[400px] flex flex-col justify-center">
      <AnimatePresence mode="wait">
        
        {step === "intro" && (
          <motion.div 
            key="intro"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold mb-4 text-[#38383c]">Descubra seu Nível de Inglês</h3>
            <p className="text-[#4d4d51] mb-8 text-lg">
              Faça nosso teste rápido de 5 perguntas e saiba instantaneamente em qual nível você está e o tempo estimado para a fluência.
            </p>
            <button 
              onClick={() => setStep("test")}
              className="px-8 py-4 bg-[#dec8ab] text-[#38383c] font-bold rounded-full hover:bg-[#c9b394] transition-colors shadow-md text-lg"
            >
              Iniciar Teste Gratuito
            </button>
          </motion.div>
        )}

        {step === "test" && (
          <motion.div 
            key="test"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="w-full"
          >
            <div className="flex justify-between text-sm text-[#4d4d51] mb-6 font-semibold">
              <span>Pergunta {currentQ + 1} de {QUESTIONS.length}</span>
              <span>Progresso: {Math.round((currentQ / QUESTIONS.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-100 h-2 rounded-full mb-8">
              <div 
                className="bg-[#38383c] h-2 rounded-full transition-all duration-500"
                style={{ width: `${(currentQ / QUESTIONS.length) * 100}%` }}
              />
            </div>
            
            <h4 className="text-2xl font-bold mb-8 text-[#38383c]">{QUESTIONS[currentQ].question}</h4>
            
            <div className="space-y-4">
              {QUESTIONS[currentQ].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  className="w-full text-left p-5 rounded-2xl border-2 border-gray-100 hover:border-[#dec8ab] hover:bg-[#dec8ab]/10 transition-all font-medium text-[#4d4d51] group flex justify-between items-center"
                >
                  {opt}
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#dec8ab]" />
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === "lead" && (
          <motion.div 
            key="lead"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2 text-[#38383c]">Teste Concluído! 🎉</h3>
              <p className="text-[#4d4d51]">Preencha os dados abaixo para visualizar seu resultado instantaneamente e receber um plano de estudos.</p>
            </div>
            
            <form onSubmit={handleSubmitLead} className="space-y-5">
              <input 
                required type="text" placeholder="Seu nome completo" 
                value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#38383c] focus:ring-1 focus:ring-[#38383c]"
              />
              <div className="grid grid-cols-2 gap-5">
                <input 
                  required type="email" placeholder="Seu melhor e-mail" 
                  value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#38383c]"
                />
                <input 
                  required type="tel" placeholder="WhatsApp" 
                  value={formData.whatsapp} onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                  className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#38383c]"
                />
              </div>
              <button 
                disabled={loading}
                type="submit" 
                className="w-full py-4 bg-[#38383c] text-white rounded-xl font-bold hover:bg-[#4d4d51] transition-all disabled:opacity-70 flex justify-center items-center"
              >
                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : "Ver Meu Resultado Agora"}
              </button>
            </form>
          </motion.div>
        )}

        {step === "result" && (
          <motion.div 
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#4d4d51] mb-2">Seu nível estimado é:</h3>
            <div className="text-5xl font-extrabold text-[#38383c] mb-6">{calculatedLevel}</div>
            <p className="text-[#4d4d51] mb-8 max-w-md mx-auto">
              Recebemos suas informações! Em breve a Amanda entrará em contato pelo WhatsApp com uma análise completa e os próximos passos para a sua fluência.
            </p>
            <a 
              href="#planos" 
              className="inline-block px-8 py-3 border-2 border-[#38383c] text-[#38383c] font-bold rounded-full hover:bg-[#38383c] hover:text-white transition-colors"
            >
              Conhecer Planos
            </a>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
