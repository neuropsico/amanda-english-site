"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function LegalModals() {
  const [activeModal, setActiveModal] = useState<"termos" | "privacidade" | null>(null);

  return (
    <>
      <div className="flex gap-6 text-sm text-[#a3a3a8]">
        <button onClick={() => setActiveModal("termos")} className="hover:text-[#38383c] transition-colors">Termos de Serviço</button>
        <button onClick={() => setActiveModal("privacidade")} className="hover:text-[#38383c] transition-colors">Política de Privacidade</button>
      </div>

      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white text-[#38383c] w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-3xl shadow-2xl relative flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-[#38383c]">
                  {activeModal === "termos" ? "Termos de Serviço" : "Política de Privacidade"}
                </h3>
                <button 
                  onClick={() => setActiveModal(null)}
                  className="p-2 bg-gray-100 hover:bg-[#dec8ab] hover:text-white rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto" style={{ scrollbarWidth: "thin" }}>
                {activeModal === "termos" ? (
                  <div className="space-y-4 text-[#4d4d51] leading-relaxed">
                    <p>Bem-vindo aos Termos de Serviço da plataforma educacional Amanda Cavalcante.</p>
                    <h4 className="font-bold text-lg mt-4">1. Aceitação dos Termos</h4>
                    <p>Ao acessar e utilizar nosso site, você concorda em cumprir e ficar vinculado a estes Termos de Serviço.</p>
                    <h4 className="font-bold text-lg mt-4">2. Prestação de Serviços</h4>
                    <p>Os serviços educacionais (aulas online e preparatórios para IELTS, TOEFL, Cambridge, etc.) são fornecidos conforme disponibilidade e agendamento prévio. A garantia de aprovação depende diretamente do engajamento e cumprimento das metodologias propostas pelo aluno.</p>
                    <h4 className="font-bold text-lg mt-4">3. Pagamentos e Cancelamentos</h4>
                    <p>Os planos e valores acordados deverão ser pagos nas datas estipuladas. Cancelamentos de aulas individuais devem ocorrer com antecedência mínima de 24 horas para não haver cobrança integral.</p>
                    <h4 className="font-bold text-lg mt-4">4. Propriedade Intelectual</h4>
                    <p>Todo o material didático, métodos, vídeos e textos disponibilizados são de propriedade exclusiva da professora Amanda Cavalcante, sendo vedada a reprodução ou distribuição sem autorização.</p>
                    <p className="mt-8 text-sm opacity-80">Última atualização: Junho de 2026.</p>
                  </div>
                ) : (
                  <div className="space-y-4 text-[#4d4d51] leading-relaxed">
                    <p>A sua privacidade é importante para nós. Esta Política de Privacidade explica como coletamos, usamos e protegemos suas informações.</p>
                    <h4 className="font-bold text-lg mt-4">1. Coleta de Dados</h4>
                    <p>Coletamos informações pessoais fornecidas voluntariamente por você ao preencher nossos formulários de contato ou testes de nivelamento, como: nome, e-mail, telefone (WhatsApp) e nível de inglês.</p>
                    <h4 className="font-bold text-lg mt-4">2. Uso das Informações</h4>
                    <p>Seus dados são utilizados exclusivamente para entrar em contato com você sobre nossas aulas, fornecer orçamentos, analisar seu nível de proficiência e enviar materiais educativos solicitados.</p>
                    <h4 className="font-bold text-lg mt-4">3. Proteção de Dados</h4>
                    <p>Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros. O armazenamento é feito em servidores seguros (como Google Firebase) garantindo a confidencialidade segundo as leis vigentes (LGPD).</p>
                    <h4 className="font-bold text-lg mt-4">4. Seus Direitos</h4>
                    <p>Você pode, a qualquer momento, solicitar a exclusão de seus dados da nossa base entrando em contato diretamente conosco via e-mail ou WhatsApp.</p>
                    <p className="mt-8 text-sm opacity-80">Última atualização: Junho de 2026.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
