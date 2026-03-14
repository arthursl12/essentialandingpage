
import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom';
import { 
  Instagram, 
  MessageCircle, 
  Rocket, 
  Target, 
  BarChart3, 
  Palette, 
  Video, 
  Globe, 
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  TrendingUp,
  Cpu,
  Zap,
  Youtube,
  Facebook,
  Search,
  Play,
  ShoppingBag
} from 'lucide-react';

import logo from './logo.png';
import WhatsappPng from './wpp.png'; // Import the new WhatsApp PNG

import bhrunaJpg from './bhruna.JPG';
import arthurJpg from './arthur.jpg';

// Import service images from resources
import trafegoPagoImg from './resources/trafego-pago.jpg';
import siteInstitucionalImg from './resources/site-institucional.webp';
import landingPageImg from './resources/landing-page.webp';
import gestaoRedesImg from './resources/gestao-redes.avif';
import producaoConteudoImg from './resources/producao-conteudo.jpg';
import packPostsImg from './resources/pack-posts-mensais.webp';
import otimizacaoInstaImg from './resources/otimizacao-instagram.jpg';
import automacaoImg from './resources/automacao.png';
import consultoriaImg from './resources/consultoria.png';
import mentoriaImg from './resources/mentoria.webp';
import googleMeuNegocioImg from './resources/google-meu-negocio.jpg';

// Custom WhatsApp Icon Component
const WhatsappIcon: React.FC<{ size: number, className?: string }> = ({ size, className }) => {
  const sizeClass = `w-[${size}px] h-[${size}px]`; // Directly use pixel values for Tailwind classes

  return (
    <img
      src={WhatsappPng}
      alt="WhatsApp"
      className={`${sizeClass} object-contain ${className || ''}`}
    />
  );
};

// Componente de Logo utilizando a imagem fornecida
const Logo: React.FC<{ className?: string }> = ({ className = "h-12" }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <img 
      src={logo} 
      alt="Essentia Social Media" 
      className="h-full w-auto object-contain"
    />
  </div>
);

// Ícone flutuante do logo
const LogoIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <img 
    src={logo} 
    alt="E" 
    className={`${className} object-contain`}
  />
);

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-card py-3 shadow-2xl backdrop-blur-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/">
          <Logo className="h-10 md:h-12" />
        </Link>
        <div className="hidden md:flex gap-10 text-white/70 font-semibold tracking-wide text-sm uppercase items-center">
          <a href={isHome ? "#gestao" : "/#gestao"} className="hover:text-blue-400 transition-colors">Gestão</a>
          <a href={isHome ? "#packs" : "/#packs"} className="hover:text-blue-400 transition-colors">Packs</a>
          <Link to="/servicos" className={`hover:text-blue-400 transition-colors ${location.pathname === '/servicos' ? 'text-blue-400' : ''}`}>Serviços</Link>
          <a href="https://www.behance.net/essentiasocialmedia" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Portfólio</a>
          <a href={isHome ? "#sobre" : "/#sobre"} className="hover:text-blue-400 transition-colors">Sobre</a>
        </div>
        <a 
          href="https://wa.link/boq0ny" 
          target="_blank"
          rel="noopener noreferrer"
          className="cta-gradient px-7 py-3 rounded-2xl text-white font-bold text-sm hover:scale-105 transition-all shadow-[0_10px_20px_rgba(157,80,187,0.3)] active:scale-95 flex items-center gap-2"
        >
          <WhatsappIcon size={18} />
          Falar com Especialista
        </a>
      </div>
    </nav>
  );
};

const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceList = [
    {
      title: "Tráfego Pago",
      description: "Coloque seu negócio na frente de quem já quer comprar. Gerenciamos anúncios estratégicos que transformam cliques em faturamento real e escala de vendas.",
      price: "R$ 347/mês",
      startingAt: true,
      image: trafegoPagoImg
    },
    {
      title: "Criação de Site Institucional",
      description: "Sua empresa não precisa de apenas um site, mas de um exemplo de autoridade. Desenvolvemos vitrines digitais de alto nível que transmitem autoridade.",
      price: "R$ 747",
      startingAt: true,
      image: siteInstitucionalImg
    },
    {
      title: "Landing Page",
      description: "Páginas de alta conversão desenhadas com um único objetivo: transformar visitantes em leads qualificados e dinheiro no bolso.",
      price: "R$ 497",
      startingAt: true,
      image: landingPageImg
    },
    {
      title: "Gestão de Redes Sociais",
      description: "Pare de apenas 'postar' e comece a dominar o seu nicho. Planejamos e gerenciamos sua presença digital para que sua marca seja a primeira escolha.",
      price: "R$ 1.500/Mês",
      startingAt: true,
      suffix: "(peça seu orçamento)",
      image: gestaoRedesImg
    },
    {
      title: "Produção de Conteúdo Estratégico",
      description: "Crie autoridade e desejo imediato. Produzimos conteúdos que educam o seu mercado e atraem clientes qualificados de forma orgânica.",
      price: "R$ 497",
      startingAt: true,
      image: producaoConteudoImg
    },
    {
      title: "Pack de Posts Mensais",
      description: "Tenha um feed profissional e estratégico sem perder tempo. Posts de alto impacto visual e narrativo para manter sua marca ativa.",
      price: "R$ 497",
      startingAt: true,
      image: packPostsImg
    },
    {
      title: "Otimização de Perfil no Instagram",
      description: "Pare de perder seguidores para a concorrência. Transformamos seu perfil em uma vitrine magnética, preparada para converter visitantes em clientes.",
      price: "R$ 247",
      image: otimizacaoInstaImg
    },
    {
      title: "Automação de Atendimento",
      description: "Escalabilidade sem perda de qualidade. Configuramos fluxos inteligentes que respondem, qualificam e vendem para você 24h por dia.",
      price: "R$ 500",
      startingAt: true,
      suffix: "(peça seu orçamento)",
      image: automacaoImg
    },
    {
      title: "Consultoria de Marketing",
      description: "Identificamos os gargalos das redes do seu negócio. Uma análise profunda para traçar o caminho exato para você escalar seus resultados.",
      price: "R$ 247",
      suffix: "por sessão",
      image: consultoriaImg
    },
    {
      title: "Mentoria de Marketing",
      description: "Assuma o controle do seu crescimento. Uma orientação personalizada e próxima para empresários que desejam dominar as estratégias das redes.",
      price: "R$ 497",
      suffix: "por sessão",
      image: mentoriaImg
    },
    {
      title: "Identidade Visual",
      description: "Não seja apenas mais um. Criamos marcas memoráveis que transmitem o valor real do seu serviço e aumentam sua percepção de valor.",
      price: "R$ 597",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Google Meu Negócio",
      description: "Apareça para quem está procurando por você agora. Otimizamos seu perfil para dominar as buscas locais e garantir um fluxo constante.",
      price: "R$ 497 inicial + R$ 97/mês",
      image: googleMeuNegocioImg
    }
  ];

  return (
    <div className="pt-32 pb-20 nebula-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-6 block">Soluções Essentia</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">Nossos <span className="gradient-text">Serviços.</span></h2>
          <p className="text-white/40 text-xl font-medium max-w-2xl mx-auto">Escolha a solução ideal para o momento atual do seu negócio.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {serviceList.map((s, i) => (
            <div key={i} className="glass-card rounded-[3rem] overflow-hidden group hover:border-blue-500/30 transition-all duration-500 flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60"></div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-black text-white mb-4">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1">
                  {s.description}
                </p>
                <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    {s.price ? (
                      <>
                        <span className="text-[10px] font-black text-white/30 uppercase tracking-widest min-h-[1.25rem]">
                          {s.startingAt ? "A partir de" : "Investimento"}
                        </span>
                        <div className="flex flex-col">
                          <span className="text-xl font-black text-white">{s.price}</span>
                          {s.suffix && <span className="text-[10px] font-bold text-white/40 mt-1">{s.suffix}</span>}
                        </div>
                      </>
                    ) : (
                      <span className="text-xs font-black text-blue-400 uppercase tracking-widest">Sob Consulta</span>
                    )}
                  </div>
                  <a 
                    href="https://wa.link/boq0ny" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-white/5 text-white hover:bg-blue-500 hover:text-white transition-all group/btn"
                  >
                    <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden nebula-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/40 to-[#050505]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-blue-400 text-[10px] font-black tracking-[0.2em] mb-8 uppercase">
            <Sparkles size={14} className="text-purple-400" />
            <span>ESTRATÉGIA E POSICIONAMENTO</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
            Transforme seus seguidores em <span className="gradient-text">clientes fiéis</span> e aumente em <span className="gradient-text">30% seu faturamento.</span>
          </h1>
          <p className="text-white/60 text-xl md:text-2xl mb-12 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
            Sua marca não pode ser apenas "mais uma". Estratégia e posicionamento digital para quem busca <span className="text-white">liderança de mercado</span> e conversão real.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
            <a 
              href="https://wa.link/boq0ny" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 rounded-2xl cta-gradient text-white font-black text-lg flex items-center justify-center gap-3 hover:shadow-[0_0_50px_rgba(0,210,255,0.4)] transition-all transform hover:-translate-y-1"
            >
              <WhatsappIcon size={24} />
              Fale com a gente
              <ArrowRight size={22} className="opacity-50" />
            </a>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex -space-x-3 mb-2">
                 {[1,2,3,4].map(i => (
                   <img key={i} className="w-11 h-11 rounded-full border-2 border-[#050505] object-cover" src={`https://i.pravatar.cc/150?img=${i+30}`} alt="Client" />
                 ))}
                 <div className="w-11 h-11 rounded-full bg-blue-600 border-2 border-[#050505] flex items-center justify-center text-white text-[10px] font-black">
                   +50
                 </div>
              </div>
              <p className="text-white/30 text-[9px] font-black uppercase tracking-[0.15em]">Marcas que escalaram conosco</p>
            </div>
          </div>
        </div>
        
        <div className="relative hidden md:block group">
          <div className="absolute -inset-20 bg-blue-500/20 blur-[120px] rounded-full animate-pulse"></div>
          
          {/* Mockup do Ecossistema Social */}
          <div className="relative z-10 animate-float">
            <div className="relative w-[500px] h-[500px]">
              {/* Instagram Central */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 glass-card rounded-[3rem] flex items-center justify-center border-white/20 shadow-2xl z-20 scale-110">
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 opacity-20 rounded-[3rem]"></div>
                <Instagram size={80} className="text-white relative z-10" />
              </div>

              {/* Facebook */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 glass-card rounded-3xl flex items-center justify-center border-white/20 shadow-xl animate-[float_4s_infinite_ease-in-out]">
                <Facebook size={40} className="text-blue-500" />
              </div>

              {/* Google */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-24 glass-card rounded-3xl flex items-center justify-center border-white/20 shadow-xl animate-[float_5s_infinite_ease-in-out]">
                <Search size={40} className="text-red-400" />
              </div>

              {/* TikTok */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-24 h-24 glass-card rounded-3xl flex items-center justify-center border-white/20 shadow-xl animate-[float_6s_infinite_ease-in-out]">
                <Play size={40} className="text-cyan-400" fill="currentColor" />
              </div>

              {/* YouTube */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-24 h-24 glass-card rounded-3xl flex items-center justify-center border-white/20 shadow-xl animate-[float_3.5s_infinite_ease-in-out]">
                <Youtube size={40} className="text-red-600" />
              </div>

              {/* Elementos Decorativos de "Growth" */}
              <div className="absolute top-12 left-12 glass-card p-3 rounded-2xl border-white/10 text-[10px] font-bold text-green-400 flex items-center gap-2">
                <TrendingUp size={14} /> +30%</div>
              <div className="absolute bottom-12 right-12 glass-card p-3 rounded-2xl border-white/10 text-[10px] font-bold text-blue-400 flex items-center gap-2">
                <BarChart3 size={14} /> 1M views
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Management: React.FC = () => {
  const features = [
    {
      icon: <Target className="text-blue-400" size={32} />,
      title: "Posicionamento de Elite",
      desc: "Não é apenas postar. Criamos uma narrativa que eleva o valor percebido do seu produto ou serviço."
    },
    {
      icon: <TrendingUp className="text-purple-400" size={32} />,
      title: "Crescimento Estratégico",
      desc: "Uso de dados e tendências para atrair seguidores qualificados que possuem intenção de compra."
    },
    {
      icon: <Layers className="text-blue-400" size={32} />,
      title: "Ecossistema de Conteúdo",
      desc: "Cronograma completo unindo Reels, Carrosséis e Stories para manter seu público engajado 24/7."
    },
    {
      icon: <Cpu className="text-purple-400" size={32} />,
      title: "Gestão de Comunidade",
      desc: "Humanizamos sua marca, respondendo directs e comentários com foco total em conversão de leads."
    }
  ];

  return (
    <section id="gestao" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs mb-6 block">Nosso Carro Chefe</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
              Gestão Completa de <br/><span className="gradient-text">Redes Sociais.</span>
            </h2>
            <p className="text-white/50 text-xl leading-relaxed mb-12 font-medium">
              Esqueça a preocupação com o "o que postar hoje". Nossa equipe assume todo o seu posicionamento digital para que você foque apenas no que importa: <span className="text-white">gerir seu negócio.</span>
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="group">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
                  <h4 className="text-white font-bold text-lg mb-2">{f.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 p-8 glass-card rounded-[2.5rem] border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent">
              <h5 className="text-white font-black mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-green-500" size={20} />
                O que está incluso na gestão?
              </h5>
              <ul className="grid grid-cols-2 gap-3">
                {["Planejamento Mensal", "Artes Ilimitadas", "Copywriting", "Relatório de KPIs", "Gestão de Tráfego", "Edição de Vídeos"].map((item, idx) => (
                  <li key={idx} className="text-white/50 text-xs flex items-center gap-2 font-bold uppercase tracking-wider">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-[3.5rem] blur-sm opacity-20"></div>
             <div className="relative glass-card rounded-[3rem] p-3 border-white/10 shadow-2xl overflow-hidden">
                <div className="aspect-[4/5] bg-neutral-900 rounded-[2.5rem] overflow-hidden group">
                   <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                    className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                    alt="Professional Agency Setting" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
                   <div className="absolute bottom-12 left-12 right-12">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-20 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center font-black text-xl text-white">30%</div>
                        <p className="text-white font-black text-xl leading-tight">Média de aumento no faturamento dos nossos parceiros.</p>
                      </div>
                      <a href="https://wa.link/boq0ny" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full bg-white text-black px-8 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-400 hover:text-white transition-all group">
                         Quero contratar
                         <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                      </a>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing: React.FC = () => {
  const packs = [
    {
      name: "Pack Starter",
      price: "397",
      features: ["10 artes de posts", "Legendas estratégicas", "Pesquisa de Hashtags", "Estudo de Cores"]
    },
    {
      name: "Pack Growth",
      price: "497",
      featured: true,
      features: ["15 artes de posts", "Legendas estratégicas", "Pesquisa de Hashtags", "Sugestão de 2 Reels", "Suporte VIP"]
    },
    {
      name: "Pack Elite",
      price: "747",
      features: ["30 artes de posts", "Legendas estratégicas", "Pesquisa de Hashtags", "Frequência Diária", "Stories inclusos"]
    }
  ];

  return (
    <section id="packs" className="py-32 relative bg-[#070707]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Frase de Transição */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <div className="inline-block p-4 rounded-3xl bg-blue-500/10 border border-blue-500/20 mb-8 transform -rotate-1">
             <p className="text-blue-400 font-black uppercase tracking-[0.2em] text-sm">
                Precisa de um empurrãozinho? 🚀
             </p>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            Temos <span className="gradient-text">packs de posts</span> personalizados!
          </h2>
          <p className="text-white/40 text-lg font-medium">Escolha o pacote ideal para manter sua constância visual sem complicação.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packs.map((p, i) => (
            <div key={i} className={`rounded-[3rem] p-10 transition-all duration-500 relative group ${p.featured ? 'cta-gradient scale-105 shadow-2xl shadow-blue-500/30 border-none' : 'glass-card border-white/5 hover:border-white/20'}`}>
              <div className="mb-10">
                <h3 className="text-2xl font-black text-white mb-2">{p.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className={`text-sm font-black ${p.featured ? 'text-white/70' : 'text-white/30'}`}>R$</span>
                  <span className="text-6xl font-black text-white tracking-tighter">{p.price}</span>
                  <span className={`text-xs font-bold uppercase ${p.featured ? 'text-white/60' : 'text-white/20'}`}>/pack</span>
                </div>
              </div>

              <div className="space-y-4 mb-12">
                {p.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className={`p-1 rounded-full ${p.featured ? 'bg-white/20' : 'bg-blue-500/20'}`}>
                      <CheckCircle2 size={14} className={p.featured ? 'text-white' : 'text-blue-400'} />
                    </div>
                    <span className={`text-sm font-semibold ${p.featured ? 'text-white/90' : 'text-white/50'}`}>{f}</span>
                  </div>
                ))}
              </div>

                            <a
                              href={p.name === "Pack Starter" ? "https://wa.link/jusvbe" : p.name === "Pack Growth" ? "https://wa.link/dje7pw" : "https://wa.link/g3h0lj"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`w-full py-5 rounded-2xl font-black text-center transition-all flex items-center justify-center gap-2 ${p.featured ? 'bg-white text-blue-600 hover:shadow-xl' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}
                            >
                              Selecionar Plano
                              <ArrowRight size={18} />
                            </a>              
              {p.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-blue-600 px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                  Mais Recomendado
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-purple-500 font-black uppercase tracking-[0.3em] text-xs mb-6 block">Nos Bastidores</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">Quem faz a <span className="gradient-text">Essentia.</span></h2>
          <p className="text-white/40 text-xl font-medium max-w-2xl mx-auto">Dois sócios, uma visão: transformar negócios através do design e da estratégia orientada a dados.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bhruna */}
          <div className="glass-card rounded-[3.5rem] p-12 group hover:bg-white/5 transition-all duration-500 border-white/5">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-40 h-40 rounded-[2.5rem] overflow-hidden border-2 border-white/10 group-hover:border-purple-500 transition-all shadow-2xl rotate-3 group-hover:rotate-0">
                <img src={bhrunaJpg} alt="Bhruna" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-black text-white mb-1">Bhruna</h3>
                <p className="text-purple-400 font-black uppercase tracking-widest text-[10px] mb-6">CEO & Creative Director</p>
                <p className="text-white/40 leading-relaxed font-medium text-sm">
                  Designer e Copywriter com olhar apurado para o que converte. Cria narrativas que prendem a atenção e vendem o desejo.
                </p>
              </div>
            </div>
          </div>

          {/* Arthur */}
          <div className="glass-card rounded-[3.5rem] p-12 group hover:bg-white/5 transition-all duration-500 border-white/5">
            <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
              <div className="w-40 h-40 rounded-[2.5rem] overflow-hidden border-2 border-white/10 group-hover:border-blue-500 transition-all shadow-2xl -rotate-3 group-hover:rotate-0">
                <img src={arthurJpg} alt="Arthur" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 text-center md:text-right">
                <h3 className="text-3xl font-black text-white mb-1">Arthur</h3>
                <p className="text-blue-400 font-black uppercase tracking-widest text-[10px] mb-6">COO & Analytics Expert</p>
                <p className="text-white/40 leading-relaxed font-medium text-sm">
                  Estrategista focado em performance e tráfego pago. Há 8 anos hackeando algoritmos para gerar resultados exponenciais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-32 pb-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
          <div>
            <Logo className="h-14 mb-6" />
            <p className="text-white/30 text-lg max-w-sm font-medium leading-relaxed">
              O futuro do seu posicionamento digital começa agora. Vamos escalar juntos.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 md:gap-20">
             <div>
               <h5 className="text-white font-black uppercase tracking-widest text-[10px] mb-6">Navegação</h5>
               <ul className="space-y-3 text-white/30 text-sm font-bold">
                 <li><Link to="/#gestao" className="hover:text-blue-400 transition-colors">Gestão</Link></li>
                 <li><Link to="/#packs" className="hover:text-blue-400 transition-colors">Packs</Link></li>
                 <li><Link to="/servicos" className="hover:text-blue-400 transition-colors">Serviços</Link></li>
                 <li><a href="https://www.behance.net/essentiasocialmedia" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Portfólio</a></li>
                 <li><Link to="/#sobre" className="hover:text-blue-400 transition-colors">Agência</Link></li>
               </ul>
             </div>
             <div>
               <h5 className="text-white font-black uppercase tracking-widest text-[10px] mb-6">Social</h5>
               <ul className="space-y-3 text-white/30 text-sm font-bold">
                 <li><a href="https://www.instagram.com/essentia_socialmedia/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors flex items-center gap-2"><Instagram size={14} /> Instagram</a></li>
                 <li><a href="https://wa.link/boq0ny" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors flex items-center gap-2"><WhatsappIcon size={14} className="grayscale opacity-30" /> WhatsApp</a></li>
               </ul>
             </div>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-white/10 text-[10px] font-black tracking-widest uppercase">© 2026 ESSENTIA MEDIA GROUP. Direitos Reservados.</p>
           <div className="flex gap-10 text-white/10 text-[10px] font-black tracking-widest uppercase">
             <a href="#">Privacidade</a>
             <a href="#">Termos de Uso</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppFloat: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [initialSequenceDone, setInitialSequenceDone] = useState(false);

  useEffect(() => {
    // Initial expansion
    const expandTimeout = setTimeout(() => {
      setIsExpanded(true);
    }, 500); // Expand slightly after load

    // Timed retraction
    const retractTimeout = setTimeout(() => {
      setIsExpanded(false);
      setInitialSequenceDone(true); // Mark initial sequence as done after timed retraction
    }, 5000); // Retract after 5 seconds

    return () => {
      clearTimeout(expandTimeout);
      clearTimeout(retractTimeout);
    };
  }, []); // Run once on mount

  useEffect(() => {
    const handleScroll = () => {
      // Only retract on scroll if the initial sequence is done (i.e., not during the first 5 seconds)
      // and if it's currently expanded and user scrolls down
      if (initialSequenceDone && window.scrollY > 50 && isExpanded) {
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [initialSequenceDone, isExpanded]); // Re-run effect if isExpanded or initialSequenceDone changes

  return (
    <a 
      href="https://wa.link/boq0ny" 
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-float bg-green-500 p-4 rounded-full text-white shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all active:scale-95 group flex items-center overflow-hidden ${isExpanded ? 'gap-2' : 'gap-0 justify-center'}`}
      // Optional: Add onClick to manually expand/retract if needed
      // onClick={() => setIsExpanded(prev => !prev)}
    >
      <span className={`transition-all duration-500 whitespace-nowrap font-black text-xs uppercase tracking-widest pl-0 overflow-hidden ${isExpanded ? 'max-w-xs pl-2' : 'max-w-0 w-0'}`}>
        Atendimento Online
      </span>
      <WhatsappIcon size={32} />
    </a>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Management />
      <Pricing />
      
      {/* Última Chamada */}
      <section className="py-32 bg-[#050505]">
        <div className="max-w-5xl mx-auto px-6">
           <div className="glass-card rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden group border-white/5">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 animate-pulse"></div>
              <div className="relative z-10">
                <LogoIcon className="w-16 h-16 mx-auto mb-10 transform group-hover:scale-125 transition-transform" />
                <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-none">
                  Pronto para ver o <br/><span className="gradient-text">lucro real</span> do digital?
                </h2>
                <a
                  href="https://wa.link/boq0ny"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-[2rem] font-black text-xl uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all shadow-2xl shadow-white/5 group"
                >
                  <WhatsappIcon size={24} />
                  Bora pra cima!
                  <Rocket size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </a>
              </div>
           </div>
        </div>
      </section>

      <About />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Services />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
};

export default App;
