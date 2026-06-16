"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LevelingTest from "@/components/LevelingTest";
import LegalModals from "@/components/LegalModals";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Hook to detect scroll and add shadow to navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#f5f5f6] text-[#38383c] font-sans selection:bg-[#dec8ab]/50 overflow-x-hidden pt-20">
      
      {/* FIXED MENU BAR (BEIGE) */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#dec8ab] shadow-md py-3" : "bg-[#dec8ab] py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo Estilizado */}
          <a href="#" className="flex flex-col">
            <span 
              className="text-3xl md:text-4xl text-[#38383c]" 
              style={{ fontFamily: 'var(--font-caveat), cursive', fontWeight: 700, letterSpacing: '0.5px' }}
            >
              Amanda Cavalcante
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#67534f] font-bold -mt-1 ml-1">
              English Teacher
            </span>
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8 font-semibold text-[#4d4d51]">
            <a href="#professora" className="hover:text-[#67534f] transition-colors">Professora</a>
            <a href="#metodo" className="hover:text-[#67534f] transition-colors">O Método</a>
            <a href="#planos" className="hover:text-[#67534f] transition-colors">Planos</a>
            <a 
              href="#contato" 
              className="px-6 py-2.5 bg-[#38383c] text-white rounded-full hover:bg-[#4d4d51] transition-transform hover:scale-105 active:scale-95 shadow-sm"
            >
              Agendar Aula
            </a>
          </div>
        </div>
      </motion.nav>

      {/* SECTION 1: HERO */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center text-center p-8 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url('https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/https://cdn.gamma.app/022o1fuw0l6wuzj/generated-images/OIa8XFJdk4WPPWjRHQp7y.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f6]/80 via-[#f5f5f6]/60 to-[#f5f5f6] z-0" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto mt-10"
        >
          <p className="uppercase tracking-widest text-sm font-semibold text-[#67534f] mb-6">
            Apresentar
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-[#38383c]">
            Inglês de Verdade,<br/>
            Para a Sua Vida.
          </h1>
          <p className="text-xl md:text-2xl text-[#4d4d51] font-medium max-w-2xl mx-auto mb-12">
            Fluência real, certificações internacionais (IELTS, TOEFL, Cambridge) e um método feito especificamente para você. Aulas online para todo o Brasil e Santa Catarina.
          </p>
          <a href="#contato" className="inline-block px-10 py-4 bg-[#38383c] text-white rounded-full font-semibold text-lg hover:bg-[#4d4d51] transition-all hover:scale-105 active:scale-95 shadow-xl">
            Experimente Agora
          </a>
        </motion.div>
      </section>

      {/* SECTION 2: PROFESSORA */}
      <section id="professora" className="py-24 px-8 bg-white relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="uppercase tracking-widest text-sm font-semibold text-[#67534f] mb-4">Sua Professora</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-[#38383c]">Amanda Cavalcante</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold flex items-center gap-3">
                  <span className="text-2xl">🌍</span> Fluente desde os 12 anos
                </h3>
                <p className="text-[#4d4d51] mt-2 text-lg">Vivência real nos EUA, Canadá e Europa</p>
              </div>
              <div>
                <h3 className="text-xl font-bold flex items-center gap-3">
                  <span className="text-2xl">🎯</span> Método personalizado
                </h3>
                <p className="text-[#4d4d51] mt-2 text-lg">Adaptado ao seu perfil e personalidade</p>
              </div>
              <div>
                <h3 className="text-xl font-bold flex items-center gap-3">
                  <span className="text-2xl">📚</span> Resultados concretos
                </h3>
                <p className="text-[#4d4d51] mt-2 text-lg">Fluência + ENEM + provas do ensino médio</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl"
          >
            <img 
              src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1200/https://cdn.gamma.app/022o1fuw0l6wuzj/generated-images/OsDLtSzHh8IaaLojGvuf2.png" 
              alt="Amanda Cavalcante"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: EXPERIÊNCIA */}
      <section className="py-24 px-8 bg-[#dec8ab] text-[#38383c] relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="uppercase tracking-widest text-sm font-semibold text-[#67534f] mb-4">Experiência</p>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#4a3b32] via-[#67534f] to-[#4a3b32] bg-clip-text text-transparent animate-gradient drop-shadow-sm pb-2">Do Mundo Real para a Sua Sala</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[rgba(255,255,244,0.75)] backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/50 text-center"
            >
              <div className="text-5xl mb-6">🇺🇸</div>
              <h3 className="text-2xl font-bold mb-4">Estados Unidos</h3>
              <p className="text-[#4d4d51] text-lg">Imersão cultural e linguística</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[rgba(255,255,244,0.75)] backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/50 text-center"
            >
              <div className="text-5xl mb-6">🇨🇦</div>
              <h3 className="text-2xl font-bold mb-4">Canadá</h3>
              <p className="text-[#4d4d51] text-lg">Experiência em contexto multicultural</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[rgba(255,255,244,0.75)] backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/50 text-center"
            >
              <div className="text-5xl mb-6">🇪🇺</div>
              <h3 className="text-2xl font-bold mb-4">Europa</h3>
              <p className="text-[#4d4d51] text-lg">Prática em diversos países europeus</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: O MÉTODO & COMO FUNCIONA */}
      <section id="metodo" className="py-24 px-8 bg-[#f5f5f6]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1200/https://cdn.gamma.app/022o1fuw0l6wuzj/generated-images/LDE_jwhx3iNzBVtS4lioL.jpg" 
              alt="Método de ensino"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="uppercase tracking-widest text-sm font-semibold text-[#67534f] mb-4">O Método</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#38383c] via-[#5a5a60] to-[#38383c] bg-clip-text text-transparent animate-gradient drop-shadow-sm pb-2">Não Existe Um Jeito Só</h2>
            <p className="text-[#4d4d51] text-xl mb-12">
              Cada pessoa aprende de forma diferente. O método da Amanda começa por você. Do diagnóstico ao resultado — um caminho único para cada aluno.
            </p>

            <h3 className="text-2xl font-bold mb-6">Como Funciona: Música, Conversa e Conexão</h3>
            <ul className="space-y-6">
              <li className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-xl mb-2">Músicas que você ama</h4>
                <p className="text-[#4d4d51]">Aprendizado através de letras e ritmos do seu dia a dia</p>
              </li>
              <li className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-xl mb-2">Conversação real</h4>
                <p className="text-[#4d4d51]">Prática desde o primeiro dia, sem medo de errar</p>
              </li>
              <li className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-xl mb-2">Perfil personalizado</h4>
                <p className="text-[#4d4d51]">Aulas adaptadas ao seu jeito de aprender</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 5: RESULTADOS E PARA QUEM É */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <p className="uppercase tracking-widest text-sm font-semibold text-[#67534f] mb-4">Resultados</p>
            <h2 className="text-4xl font-extrabold mb-10 bg-gradient-to-r from-[#4a3b32] via-[#67534f] to-[#4a3b32] bg-clip-text text-transparent animate-gradient drop-shadow-sm pb-2">Fluência + Prova = Aprovação</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="text-3xl mt-1">🎯</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Certificações Internacionais</h3>
                  <p className="text-[#4d4d51] text-lg">Preparatório intensivo para exames globais. (Em processo de certificação IELTS, TOEFL e Cambridge).</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-3xl mt-1">📝</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">ENEM & Ensino Médio</h3>
                  <p className="text-[#4d4d51] text-lg">Estratégias avançadas para gabaritar a prova de Linguagens e avaliações escolares.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-3xl mt-1">💬</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Fluência</h3>
                  <p className="text-[#4d4d51] text-lg">Comunicação real para viagens, trabalho e vida</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f5f5f6] p-10 rounded-3xl relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-10 bg-cover bg-center"
              style={{ backgroundImage: `url('https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1200/https://cdn.gamma.app/022o1fuw0l6wuzj/generated-images/VQc17AJSxz_XHNkgWdFVd.jpg')` }}
            />
            <div className="relative z-10">
              <p className="uppercase tracking-widest text-sm font-semibold text-[#67534f] mb-4">Para Quem É</p>
              <h2 className="text-4xl font-bold mb-10 text-[#38383c]">Feito Para Você</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4 items-start bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-white">
                  <div className="text-3xl">🎒</div>
                  <div>
                    <h3 className="text-xl font-bold">Estudantes</h3>
                    <p className="text-[#4d4d51]">Querem gabaritar o ENEM e provas</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-white">
                  <div className="text-3xl">✈️</div>
                  <div>
                    <h3 className="text-xl font-bold">Viajantes</h3>
                    <p className="text-[#4d4d51]">Querem se comunicar no mundo</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-white">
                  <div className="text-3xl">🚀</div>
                  <div>
                    <h3 className="text-xl font-bold">Ambiciosos</h3>
                    <p className="text-[#4d4d51]">Querem fluência de verdade</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: PLANOS */}
      <section id="planos" className="py-24 px-8 bg-[#dec8ab] relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: `url('https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1200/https://cdn.gamma.app/022o1fuw0l6wuzj/generated-images/Off-LfsEzXUPaovLfwEvX.jpg')` }}
        />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="uppercase tracking-widest text-sm font-semibold text-[#67534f] mb-4">Planos</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#38383c]">Escolha o Seu Ritmo</h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-[rgba(255,255,244,0.9)] backdrop-blur-xl p-10 rounded-3xl shadow-xl flex flex-col">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-2">Avulsa</h3>
              <p className="text-[#67534f] font-medium mb-8">Ideal para experimentar</p>
              <div className="text-5xl font-bold mb-2 text-[#38383c]">R$ 180</div>
              <p className="text-[#4d4d51] mb-8">1 aula de 40 min</p>
              <button className="mt-auto w-full py-4 rounded-full border-2 border-[#38383c] text-[#38383c] font-bold hover:bg-[#38383c] hover:text-white transition-colors">
                Agendar
              </button>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-2xl flex flex-col transform md:-translate-y-4 border-2 border-[#dec8ab]">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-2xl font-bold mb-2">Semanal</h3>
              <p className="text-[#67534f] font-medium mb-8">Consistência e evolução</p>
              <div className="text-5xl font-bold mb-2 text-[#38383c]">R$ 250<span className="text-2xl text-[#4d4d51] font-normal">/mês</span></div>
              <p className="text-[#4d4d51] mb-8">1 aula por semana</p>
              <button className="mt-auto w-full py-4 rounded-full bg-[#38383c] text-white font-bold hover:bg-[#4d4d51] transition-colors shadow-lg">
                Assinar Plano
              </button>
            </div>

            <div className="bg-[rgba(255,255,244,0.9)] backdrop-blur-xl p-10 rounded-3xl shadow-xl flex flex-col">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-2xl font-bold mb-2">Intensivo</h3>
              <p className="text-[#67534f] font-medium mb-8">Resultados mais rápidos</p>
              <div className="text-5xl font-bold mb-2 text-[#38383c]">R$ 420<span className="text-2xl text-[#4d4d51] font-normal">/mês</span></div>
              <p className="text-[#4d4d51] mb-8">2 aulas por semana</p>
              <button className="mt-auto w-full py-4 rounded-full border-2 border-[#38383c] text-[#38383c] font-bold hover:bg-[#38383c] hover:text-white transition-colors">
                Assinar Plano
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA / FOOTER CONTENT */}
      <section id="contato" className="py-24 px-8 bg-[#f5f5f6] text-center border-b border-gray-200">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase tracking-widest text-sm font-semibold text-[#67534f] mb-4">Por que funciona</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#38383c]">O Diferencial da Amanda</h2>
          <p className="text-xl text-[#4d4d51] mb-16">
            Amanda não ensina inglês — ela conecta você ao inglês através do que você já ama. Cada aluno tem um plano único, criado a partir da análise do seu perfil.
          </p>

          <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold mb-6">Vamos Começar?</h3>
            <p className="text-[#4d4d51] text-lg mb-10">Sua primeira aula está mais perto do que você imagina.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer" className="px-8 py-4 bg-[#38383c] text-white rounded-full font-bold hover:bg-[#4d4d51] transition-all shadow-lg hover:shadow-xl">
                Fale com a Amanda
              </a>
              <a href="#planos" className="px-8 py-4 border-2 border-[#38383c] text-[#38383c] rounded-full font-bold hover:bg-[#f5f5f6] transition-colors">
                Agende Sua Aula
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL FOOTER */}
      <footer className="bg-white pt-16 pb-8 px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="flex flex-col mb-6">
              <span 
                className="text-4xl text-[#38383c]" 
                style={{ fontFamily: 'var(--font-caveat), cursive', fontWeight: 700 }}
              >
                Amanda Cavalcante
              </span>
              <span className="text-[11px] uppercase tracking-widest text-[#67534f] font-bold">
                Inglês de Verdade
              </span>
            </a>
            <p className="text-[#4d4d51] max-w-sm">
              Fluência real e preparatório para certificações. Aulas online para todo o Brasil, focadas na sua necessidade. Atendimento em Florianópolis, Santa Catarina.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-[#38383c] mb-6 uppercase tracking-wider text-sm">Navegação</h4>
            <ul className="space-y-4">
              <li><a href="#professora" className="text-[#4d4d51] hover:text-[#38383c] transition-colors">Sua Professora</a></li>
              <li><a href="#metodo" className="text-[#4d4d51] hover:text-[#38383c] transition-colors">O Método</a></li>
              <li><a href="#planos" className="text-[#4d4d51] hover:text-[#38383c] transition-colors">Planos & Investimento</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#38383c] mb-6 uppercase tracking-wider text-sm">Contato</h4>
            <ul className="space-y-4">
              <li><a href="https://wa.me/5500000000000" className="text-[#4d4d51] hover:text-[#38383c] transition-colors">WhatsApp</a></li>
              <li><a href="#" className="text-[#4d4d51] hover:text-[#38383c] transition-colors">Instagram</a></li>
              <li><a href="#" className="text-[#4d4d51] hover:text-[#38383c] transition-colors">E-mail</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#a3a3a8]">
            &copy; {new Date().getFullYear()} Amanda Cavalcante. Todos os direitos reservados.
          </p>
          <LegalModals />
        </div>
      </footer>

    </div>
  );
}
