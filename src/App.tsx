import { Mail, MapPin, Facebook, Menu, X, Image as ImageIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const CORE_BAKES = [
  {
    id: 1,
    name: "Soft Sourdough Sandwich Loaf",
    description: "Pillowy soft, made with local honey and olive oil, perfect for kids sandwiches or toast.",
    price: "$12",
    image: "/sandwich-loaf.jpg"
  },
  {
    id: 2,
    name: "Cinnamon Rolls",
    description: "Fluffy cinnamon rolls topped with real maple infused cream cheese frosting.",
    price: "$5",
    image: "/cinnamon-rolls.jpg"
  },
  {
    id: 3,
    name: "Sourdough Cracker Blend (2.5oz)",
    description: "Crackers made from our starter with 3 separate toppings: Italian herb, real parmesan, salt/pepper. Great on a cheese board or as a snack.",
    price: "$5",
    image: "/crackers.jpg"
  },
  {
    id: 4,
    name: "Jumbo Honey Walnut Chocolate Chip Cookie",
    description: "Walnuts, local honey, semi-sweet chocolate, finished with fleur de sel.",
    price: "$5",
    image: "/cookie.jpg"
  }
];

const SEASONAL_FEATURES = [
  {
    id: 5,
    name: "Muscadine & Pecan Macarons (2pk)",
    description: "Vanilla shells filled with a lemon white chocolate ganache and a muscadine jelly reduction, roasted Texas pecans encrusted on the outside.",
    price: "$7",
    image: "/macarons.jpg"
  },
  {
    id: 6,
    name: "Peach & Blackberry Cake",
    description: "Almond cake, filled with fresh Texas peaches and blackberry compote, vanilla bean Italian meringue buttercream and glazed pecans.",
    price: "$8",
    image: "/peach-cake.jpg"
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: y, behavior: reduceMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C241B] font-sans selection:bg-[#5C6E52] selection:text-white">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-md focus:bg-[#2C241B] focus:text-[#FDFBF7]"
      >
        Skip to content
      </a>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#FDFBF7]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <button type="button" onClick={() => scrollTo('home')} className="font-serif text-xl tracking-wide text-[#5C6E52] font-medium">
            B&C
          </button>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase text-[#4A3F35]">
            <button type="button" onClick={() => scrollTo('story')} className="hover:text-[#5C6E52] transition-colors">Our Story</button>
            <button type="button" onClick={() => scrollTo('menu')} className="hover:text-[#5C6E52] transition-colors">The Menu</button>
            <button type="button" onClick={() => scrollTo('order')} className="hover:text-[#5C6E52] transition-colors">How to Order</button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            type="button"
            className="md:hidden text-[#4A3F35]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden absolute top-full left-0 w-full bg-[#FDFBF7] border-b border-[#EAE3D9] shadow-lg py-4 px-6 flex flex-col gap-4 text-sm tracking-widest uppercase text-[#4A3F35]">
            <button type="button" onClick={() => scrollTo('story')} className="text-left py-2 hover:text-[#5C6E52] transition-colors">Our Story</button>
            <button type="button" onClick={() => scrollTo('menu')} className="text-left py-2 hover:text-[#5C6E52] transition-colors">The Menu</button>
            <button type="button" onClick={() => scrollTo('order')} className="text-left py-2 hover:text-[#5C6E52] transition-colors">How to Order</button>
          </div>
        )}
      </nav>

      <main id="content">
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 flex flex-col items-center text-center">
        <div className="w-full max-w-2xl mx-auto mb-12">
          <img 
            src="/logo.jpg" 
            alt="Bramble & Clover Bakery" 
            className="w-full h-auto object-contain mix-blend-multiply"
          />
        </div>
        
        <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-[#4A3F35] tracking-[0.2em] uppercase">
          <MapPin size={16} />
          <span>Cottage Bakery in Sour Lake, TX</span>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-24 px-6 bg-[#F4EFE6]/50">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <h2 className="font-serif text-4xl text-[#5C6E52] mb-12">Our Story</h2>
          <p className="leading-relaxed text-[#4A3F35] font-light text-lg md:text-xl">
            Bramble & Clover is a licensed cottage bakery in Sour Lake, Texas, where great baking begins with beautiful ingredients. Every recipe is thoughtfully developed to let each ingredient shine, from naturally leavened breads and buttery pastries to seasonal creations inspired by the time of year.
          </p>
          <p className="leading-relaxed text-[#4A3F35] font-light text-lg md:text-xl">
            Our menu is intentionally small and baked in limited batches so every item receives the care and attention it deserves. Alongside our everyday favorites, we create seasonal bakes inspired by the flavors, produce, and comforts that make each season worth savoring.
          </p>
          <p className="font-serif text-3xl md:text-4xl text-[#5C6E52] italic pt-8">
            We're so glad you're here.
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-[#5C6E52] mb-4">The Menu</h2>
            <p className="text-[#4A3F35] font-light tracking-wide">Handcrafted in small batches.</p>
          </div>

          <div className="mb-20">
            <h3 className="font-serif text-3xl text-[#2C241B] mb-8 text-center border-b border-[#EAE3D9] pb-4 max-w-2xl mx-auto">Core Bakes</h3>
            <div className="grid md:grid-cols-2 gap-12">
              {CORE_BAKES.map((item) => (
                <div key={item.id} className="group flex flex-col">
                  <div className="aspect-[4/3] bg-[#EAE3D9]/30 rounded-2xl mb-6 overflow-hidden relative flex items-center justify-center border border-[#EAE3D9]">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        e.currentTarget.nextElementSibling?.classList.add('flex');
                      }}
                    />
                    <div className="hidden flex-col items-center justify-center text-[#8C8276] p-6 text-center absolute inset-0">
                      <ImageIcon size={32} className="mb-3 opacity-50" />
                      <p className="text-xs uppercase tracking-widest mb-1">Image Placeholder</p>
                      <p className="text-xs opacity-70">Upload {item.image} to /public</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h4 className="font-serif text-2xl text-[#2C241B]">{item.name}</h4>
                    <span className="text-[#5C6E52] font-medium whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-[#4A3F35] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-3xl text-[#2C241B] mb-8 text-center border-b border-[#EAE3D9] pb-4 max-w-2xl mx-auto">Seasonal Features</h3>
            <div className="grid md:grid-cols-2 gap-12">
              {SEASONAL_FEATURES.map((item) => (
                <div key={item.id} className="group flex flex-col">
                  <div className="aspect-[4/3] bg-[#EAE3D9]/30 rounded-2xl mb-6 overflow-hidden relative flex items-center justify-center border border-[#EAE3D9]">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        e.currentTarget.nextElementSibling?.classList.add('flex');
                      }}
                    />
                    <div className="hidden flex-col items-center justify-center text-[#8C8276] p-6 text-center absolute inset-0">
                      <ImageIcon size={32} className="mb-3 opacity-50" />
                      <p className="text-xs uppercase tracking-widest mb-1">Image Placeholder</p>
                      <p className="text-xs opacity-70">Upload {item.image} to /public</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h4 className="font-serif text-2xl text-[#2C241B]">{item.name}</h4>
                    <span className="text-[#5C6E52] font-medium whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-[#4A3F35] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="py-24 px-6 bg-[#F4EFE6]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl text-[#2C241B] mb-8">How to Order</h2>
          <div className="max-w-2xl mx-auto space-y-6 text-[#4A3F35] font-light text-lg mb-12">
            <p>
              Bakes are released through limited pop-up menu drops announced throughout the year and are available on a first-come, first-served basis until sold out.
            </p>
            <p>
              To stay updated on our next drop or to place a special request, follow our Facebook page or send us an email directly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:bramble.and.clover.bakery@gmail.com"
              className="inline-flex items-center justify-center gap-3 bg-[#2C241B] text-[#FDFBF7] px-8 py-4 rounded-full hover:bg-[#4A3F35] transition-colors duration-300 tracking-wide text-sm w-full sm:w-auto"
            >
              <Mail size={18} />
              Email Order Inquiry
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61591588721562"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-transparent border border-[#2C241B] text-[#2C241B] px-8 py-4 rounded-full hover:bg-[#2C241B] hover:text-[#FDFBF7] transition-colors duration-300 tracking-wide text-sm w-full sm:w-auto"
            >
              <Facebook size={18} />
              Follow for Drops
            </a>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="py-12 text-center text-sm text-[#8C8276] font-light bg-[#FDFBF7] border-t border-[#EAE3D9]">
        <p>(c) {new Date().getFullYear()} Bramble & Clover Bakery. All rights reserved.</p>
      </footer>
    </div>
  );
}

