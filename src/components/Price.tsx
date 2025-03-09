// pages/index.tsx
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { Check, Rocket } from 'lucide-react';

interface SupportInfo {
  channels: string;
  responseTime: string;
  period: string;
}

interface PlanFeature {
  text: string;
}

interface PricingPlan {
  id: string;
  name: string;
  icon: string;
  idealFor: string;
  timeline: string;
  isRecommended?: boolean;
  features: PlanFeature[];
  support: SupportInfo;
}

const pricingPlans: PricingPlan[] = [
  {
    id: "fast-delivery",
    name: "Site de Entrega Rápida",
    icon: "⚡",
    idealFor: "Landing pages simples, apresentação de serviços",
    timeline: "3 a 5 dias úteis",
    features: [
      { text: "Página única com até 5 seções" },
      { text: "Design responsivo" },
      { text: "Formulário de contato" },
      { text: "SEO básico" },
      { text: "Integração com redes sociais" },
    ],
    support: {
      channels: "E-mail",
      responseTime: "48h úteis",
      period: "15 dias após entrega",
    },
  },
  {
    id: "basic",
    name: "Plano Básico",
    icon: "🔹",
    idealFor: "Sites institucionais simples, portfólios",
    timeline: "7 a 14 dias úteis",
    features: [
      { text: "Até 5 páginas" },
      { text: "SEO básico" },
      { text: "Integração com redes sociais" },
      { text: "Formulário de contato" },
      { text: "Design responsivo" },
    ],
    support: {
      channels: "E-mail",
      responseTime: "48h úteis",
      period: "30 dias após entrega",
    },
  },
  {
    id: "intermediate",
    name: "Plano Intermediário",
    icon: "🔹",
    idealFor: "Pequenas empresas, blogs, sites completos",
    timeline: "15 a 25 dias úteis",
    isRecommended: true,
    features: [
      { text: "Até 10 páginas" },
      { text: "Painel administrativo (WordPress ou CMS)" },
      { text: "SEO avançado" },
      { text: "Blog integrado" },
      { text: "Chat de atendimento" },
      { text: "Design responsivo premium" },
    ],
    support: {
      channels: "E-mail + WhatsApp",
      responseTime: "24h úteis",
      period: "60 dias após entrega",
    },
  },
  {
    id: "advanced",
    name: "Plano Avançado",
    icon: "🔹",
    idealFor: "E-commerces, sistemas personalizados",
    timeline: "30 a 60 dias úteis",
    features: [
      { text: "Loja virtual com carrinho e checkout" },
      { text: "Integração com meios de pagamento" },
      { text: "Área de membros ou painel de usuários" },
      { text: "Otimização de performance" },
      { text: "Segurança avançada" },
      { text: "Tudo do plano Intermediário" },
    ],
    support: {
      channels: "E-mail + WhatsApp + Telefone",
      responseTime: "12h úteis",
      period: "90 dias após entrega",
    },
  },
];

const customPlanFeatures = [
  { text: "Design exclusivo" },
  { text: "Desenvolvimento sob demanda" },
  { text: "Integrações específicas" },
  { text: "Suporte personalizado" },
];

const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => {
  return (
    <Card className={`flex flex-col h-full transition-all duration-300 hover:translate-y-2 bg-arcadia-dark/30 ${
      plan.isRecommended ? 'border-2 border-arcadia-primary relative' : 'border-arcadia-white/50'
    }`}>
      {plan.isRecommended && (
        <div className="absolute -right-10 top-6 bg-arcadia-primary text-arcadia-white px-10 py-1 rotate-45 text-xs font-semibold">
          Recomendado
        </div>
      )}
      <CardHeader>
        <div className="flex items-center gap-2">
          <span className="text-2xl">{plan.icon}</span>
          <CardTitle className="text-arcadia-white">{plan.name}</CardTitle>
        </div>
        <CardDescription className="mt-2 text-arcadia-light">{plan.idealFor}</CardDescription>
        <Badge variant="outline" className="mt-2 bg-arcadia-dark/50 text-arcadia-light border-none w-fit">
          Prazo: {plan.timeline}
        </Badge>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-6">
          <p className="text-sm text-arcadia-light mt-1">Pagamento único</p>
        </div>

        <ul className="space-y-3 mb-6">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="mr-2 h-5 w-5 text-arcadia-secondary shrink-0" />
              <span className="text-sm text-arcadia-white">{feature.text}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4 border-t border-arcadia-white/10">
          <p className="text-sm font-semibold text-arcadia-light mb-2">Suporte:</p>
          <ul className="space-y-2">
            <li className="text-xs text-arcadia-light flex items-center">
              <span className="mr-2 text-arcadia-secondary">•</span>
              Canal: {plan.support.channels}
            </li>
            <li className="text-xs text-arcadia-light flex items-center">
              <span className="mr-2 text-arcadia-secondary">•</span>
              Tempo de resposta: {plan.support.responseTime}
            </li>
            <li className="text-xs text-arcadia-light flex items-center">
              <span className="mr-2 text-arcadia-secondary">•</span>
              Período: {plan.support.period}
            </li>
          </ul>
        </div>
      </CardContent>
      <CardFooter>
          <Button
                asChild
                className="w-28 h-6 text-sm px-6 md:w-40 md:h-8 md:px-8 bg-arcadia-primary hover:bg-arcadia-primary/80 text-arcadia-white py-6 rounded-md md:text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-slow"
              >
                <a href="https://api.whatsapp.com/send?phone=5511977145493&text=Gostaria%20de%20consultar%20o%20valor%20do%20site%20personalizado">
                    <Rocket className="w-3 h-3 mr-2 md:h-5 md:w-5 flex items-center justify-center"/>
                    Consultar valor
                </a>
          </Button>
      </CardFooter>
    </Card>
  );
};

const CustomPlan: React.FC = () => {
  return (
    <div className="mt-8 bg-arcadia-dark rounded-lg p-6 lg:p-8 border border-arcadia-white/50">
      <div className="lg:flex lg:justify-between lg:items-center gap-6">
        <div className="lg:w-3/4">
          <h3 className="text-xl font-bold flex items-center mb-3 text-arcadia-white">
            <span className="mr-2">💎</span>
            Site Personalizado
          </h3>
          <p className="text-arcadia-light mb-4">
            Ideal para: Projetos exclusivos com funcionalidades customizadas.
          </p>
          <ul className="space-y-2">
            {customPlanFeatures.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Check className="mr-2 h-5 w-5 text-arcadia-secondary shrink-0" />
                <span className="text-arcadia-white">{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 lg:mt-0">

          <Button
            asChild
            className="w-32 h-6 text-sm px-6 md:w-44 md:h-8 md:px-8 bg-arcadia-primary hover:bg-arcadia-primary/80 text-arcadia-white py-6 rounded-md md:text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-slow"
          >
            <a href="https://api.whatsapp.com/send?phone=5511977145493&text=Gostaria%20de%20consultar%20o%20valor%20do%20site%20personalizado">
                <Rocket className="w-3 h-3 mr-2 md:h-5 md:w-5 flex items-center justify-center"/>
                Consulte o valor
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-arcadia-dark text-arcadia-white py-16">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-arcadia-white">Planos</h1>
          <p className="text-arcadia-light max-w-2xl mx-auto">
            Escolha o plano ideal para o seu projeto. Cancele ou pause a qualquer momento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        <CustomPlan />
      </div>
    </div>
  );
}