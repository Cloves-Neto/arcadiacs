
# Arcadia - Website Institucional

## 🎨 Design System

### Cores
```css
/* Cores Principais */
--arcadia-primary: #C70039;   /* Vermelho - Ações principais, CTAs */
--arcadia-dark: #151E47;      /* Azul Escuro - Menu, Backgrounds */
--arcadia-secondary: #FF696A; /* Rosa - Destaques secundários */
--arcadia-light: #FFF5E1;     /* Bege Claro - Textos suaves */
--arcadia-white: #FFFFFF;     /* Branco - Textos e fundos claros */
```

### Tipografia
- **Títulos Principais**: 2.25rem/3rem (36px/48px)
- **Subtítulos**: 1.5rem/2rem (24px/32px)
- **Corpo de Texto**: 1rem (16px)
- **Texto Pequeno**: 0.875rem (14px)

### Espaçamento
- **Container Máximo**: 1400px
- **Padding Padrão**: 2rem (32px)
- **Gap Grid**: 1.5rem (24px)
- **Espaço entre Seções**: 6rem (96px)

## 🛠 Stack Tecnológica

### Core
- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server

### Estilização
- **Tailwind CSS** - Framework CSS utilitário
- **Shadcn/ui** - Componentes base reutilizáveis
- **Lucide Icons** - Biblioteca de ícones

### Funcionalidades
- **React Router** - Roteamento
- **React Query** - Gerenciamento de estado e cache
- **React Hook Form** - Gerenciamento de formulários

## 📦 Estrutura de Componentes

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes base (shadcn)
│   ├── layout/         # Componentes de layout
│   └── sections/       # Seções da página
├── pages/              # Páginas da aplicação
├── hooks/              # Hooks customizados
├── lib/               # Utilidades e configurações
└── styles/            # Estilos globais
```

## 🔍 Features Principais

- Design responsivo e mobile-first
- Animações suaves de scroll e interação
- Menu de navegação com destaque da seção atual
- Formulário de contato com validação
- SEO otimizado
- Performance otimizada

## 🏗 Padrões de Código

### Componentes
- Componentes funcionais com TypeScript
- Props tipadas e documentadas
- Nomes descritivos e semânticos
- Separação de responsabilidades

### Estilização
- Classes Tailwind organizadas por categoria
- Reutilização de classes com @apply quando necessário
- Variáveis CSS para cores e valores reutilizáveis

### Boas Práticas
- ESLint + Prettier para consistência de código
- Commits semânticos
- Documentação inline quando necessário
- Princípios SOLID aplicados

## 📱 Breakpoints Responsivos

```css
sm: '640px'
md: '768px'
lg: '1024px'
xl: '1280px'
2xl: '1400px'
```

## 🚀 Performance

- Imagens otimizadas
- Code splitting automático
- Lazy loading de componentes pesados
- Cache eficiente com React Query
- Bundle size otimizado

## 🔄 Manutenção

Para adicionar novas features ou modificar existentes:

1. Siga a estrutura de pastas existente
2. Mantenha a consistência com o design system
3. Documente mudanças significativas
4. Teste em diferentes viewports
5. Verifique a performance

## 📈 Melhorias Futuras

- [ ] Implementação de testes automatizados
- [ ] Integração com CMS
- [ ] PWA
- [ ] Internacionalização
- [ ] Analytics avançado
