import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const categories = [
    {
      id: 1,
      title: 'Papelería',
      description: 'Notas, tarjetas y más',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=80'
    },
    {
      id: 2,
      title: 'Festas',
      description: 'Decoración y accesorios',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80'
    },
    {
      id: 3,
      title: 'Eventos',
      description: 'Invitaciones y detalles',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0202128?w=600&q=80'
    }
  ]

  const products = [
    {
      id: 1,
      name: 'Set de Tarjetas',
      price: '$25.00',
      image: 'https://images.unsplash.com/photo-1594137100039-9e3d52e9a3c8?w=400&q=80',
      tag: 'Nuevo'
    },
    {
      id: 2,
      name: 'Papel Regalo',
      price: '$18.00',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80'
    },
    {
      id: 3,
      name: 'Cuaderno Personalizado',
      price: '$32.00',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80'
    },
    {
      id: 4,
      name: 'Invitaciones Boda',
      price: '$45.00',
      image: 'https://images.unsplash.com/photo-1607153420385-4d4f7b9f7a8f?w=400&q=80',
      tag: 'Popular'
    }
  ]

  const services = [
    {
      icon: '✉',
      title: 'Diseño Personalizado',
      text: 'Creamos diseños únicos adaptados a tu estilo y necesidades específicas.'
    },
    {
      icon: '🎉',
      title: 'Eventos Corporativos',
      text: 'Soluciones integrales para empresas, desde material POP hasta eventos.'
    },
    {
      icon: '💝',
      title: 'Festas Privadas',
      text: 'Transforma tu celebración con decoración y accesorios especiales.'
    }
  ]

  return (
    <div className="app">
      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <a href="/" className="logo">Honey Words</a>
          
          <nav className="nav-desktop">
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#categorias">Categorías</a></li>
              <li><a href="#productos">Productos</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Menú"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <span className="logo">Honey Words</span>
          <button 
            className="mobile-menu-close" 
            onClick={() => setMobileMenuOpen(false)}
          >
            ✕
          </button>
        </div>
        <ul className="mobile-nav">
          <li><a href="#inicio" onClick={() => setMobileMenuOpen(false)}>Inicio</a></li>
          <li><a href="#categorias" onClick={() => setMobileMenuOpen(false)}>Categorías</a></li>
          <li><a href="#productos" onClick={() => setMobileMenuOpen(false)}>Productos</a></li>
          <li><a href="#servicios" onClick={() => setMobileMenuOpen(false)}>Servicios</a></li>
          <li><a href="#nosotros" onClick={() => setMobileMenuOpen(false)}>Nosotros</a></li>
          <li><a href="#contacto" onClick={() => setMobileMenuOpen(false)}>Contacto</a></li>
        </ul>
      </div>

      {/* Hero */}
      <section className="hero" id="inicio">
        <div className="hero-content">
          <p className="hero-subtitle">Creatividad en Cada Detalle</p>
          <h1 className="hero-title">Donde la Imaginación<br/>Toma Forma</h1>
          <p className="hero-description">
            Creamos diseños únicos y productos personalizados para hacer de cada momento una celebración inolvidable.
          </p>
          <a href="#productos" className="hero-btn">Ver Colección</a>
        </div>
        <div className="hero-scroll">
          <span></span>
        </div>
      </section>

      {/* Categories */}
      <section className="section categories" id="categorias">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Explora</p>
            <h2 className="section-title">Nuestras Categorías</h2>
          </div>
          <div className="categories-grid">
            {categories.map(cat => (
              <a href="#productos" key={cat.id} className="category-card">
                <img src={cat.image} alt={cat.title} />
                <div className="category-overlay">
                  <div className="category-info">
                    <h3>{cat.title}</h3>
                    <p>{cat.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section featured" id="productos">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Destacados</p>
            <h2 className="section-title">Productos Populares</h2>
          </div>
          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  {product.tag && <span className="product-tag">{product.tag}</span>}
                </div>
                <h3 className="product-title">{product.name}</h3>
                <p className="product-price">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section about" id="nosotros">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=600&q=80" 
                alt="Honey Words - Acerca de nosotros" 
              />
            </div>
            <div className="about-content">
              <p className="section-subtitle">Nuestra Historia</p>
              <h2 className="section-title">Creando Recuerdos<br/>Desde 2018</h2>
              <p className="about-text">
                Honey Words nació de una pasión por crear momentos especiales. 
                Nos especializamos en diseño gráfico, papelería exclusiva y decoración 
                para eventos que dejan una huella imborrable en cada celebración.
              </p>
              <p className="about-text">
                Cada proyecto es una oportunidad para hacer realidad tus sueños 
                y transformar ideas en obras de arte tangibles.
              </p>
              <a href="#contacto" className="about-btn">Contáctanos</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section services" id="servicios">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Qué Hacemos</p>
            <h2 className="section-title">Nuestros Servicios</h2>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-text">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter" id="contacto">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Mantente Conectado</h2>
            <p className="newsletter-text">
              Suscríbete para recibir noticias sobre nuevas colecciones, 
              promociones exclusivas y inspiración para tus eventos.
            </p>
          </div>
          <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
            <input 
              type="email" 
              className="newsletter-input" 
              placeholder="Tu correo electrónico" 
            />
            <button type="submit" className="newsletter-btn">
              Suscribirse
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="/" className="logo">Honey Words</a>
              <p>
                Creando momentos memorables a través del diseño 
                y la creatividad desde 2018.
              </p>
              <div className="footer-social">
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="Pinterest">📌</a>
              </div>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Explorar</h4>
              <ul className="footer-links">
                <li><a href="#productos">Productos</a></li>
                <li><a href="#categorias">Categorías</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#nosotros">Nosotros</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Servicios</h4>
              <ul className="footer-links">
                <li><a href="#">Diseño Personalizado</a></li>
                <li><a href="#">Eventos Corporativos</a></li>
                <li><a href="#">Festas Privadas</a></li>
                <li><a href="#">Bodas</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Contacto</h4>
              <ul className="footer-links">
                <li><a href="#">hola@honeywords.com</a></li>
                <li><a href="#">+1 (555) 123-4567</a></li>
                <li><a href="#">Horario: Lun-Vie 9am-6pm</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2026 Honey Words. Todos los derechos reservados.</p>
            <div className="footer-payments">
              <span>💳</span>
              <span>💳</span>
              <span>💳</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
