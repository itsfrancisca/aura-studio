import './App.css'
import { Palette, Grid2X2, Globe } from "lucide-react";
function App() {
  return (
    <>
      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="logo">
          AURA STUDIO<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#services">SERVICES</a>
          <a href="#contact">CONTACT</a>
        </div>

        <a href="#contact" className="start-button">
          START PROJECT ↗️
        </a>
      </nav>


      {/* HERO SECTION */}
      <section id="home" className="hero-section">

        <div className="hero-title">
          <h1>AURA</h1>
          <h1>STUDIO</h1>
        </div>

        <div className="hero-bottom">

          <div className="hero-tagline">
            <h2>Bringing Ideas to Life.</h2>
          </div>

          <div className="hero-description">
            <p>
              Aura Studio creates meaningful brand identities, digital
              experiences, and modern websites engineered with purposeful
              design and uncompromising attention to detail.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="dark-button">
                LET'S WORK TOGETHER →
              </a>

              <a href="#services" className="light-button">
                VIEW CAPABILITIES
              </a>
            </div>
          </div>

        </div>

      </section>


      {/* ABOUT SECTION */}
      <section id="about" className="about-section">

        <div className="section-label">
          <span></span>
          ABOUT AURA STUDIO
        </div>

        <div className="about-content">

          <div className="about-text">
            <h2>
              Aura Studio is a London-based creative agency helping brands
              express their identity through modern, minimalist design. We
              combine strategy, creativity and technology to create meaningful
              digital experiences that make brands stand out.
            </h2>
          </div>

          <div className="about-card">
            <p className="card-label">AGENCY STUDIO</p>

            <h3>Rooted in London</h3>

            <p>
              Collaborating with forward-thinking leaders globally to distill
              complexity into timeless, high-impact brands.
            </p>

            <div className="location-info">
  <p>
    <span>Location</span>
    London, UK
  </p>

  <p>
    <span>Coordinates</span>
    51.5074° N, 0.1278° W
  </p>

  <p>
    <span>Focus</span>
    Branding • UI/UX • Web
  </p>
</div>
          </div>

        </div>

        <div className="principles">

          <div>
            <span>✣</span>
            <p>CLEAN AESTHETICS</p>
          </div>

          <div>
            <span>◉</span>
            <p>STRATEGIC PURPOSE</p>
          </div>

          <div>
            <span>▱</span>
            <p>VISUAL STORYTELLING</p>
          </div>

          <div>
            <span>◎</span>
            <p>PURE SIMPLICITY</p>
          </div>

        </div>

      </section>


      {/* SERVICES SECTION */}
      <section id="services" className="services-section">

        <div className="services-heading">

          <div>
            <div className="section-label">
              <span></span>
              DISCIPLINES & CAPABILITIES
            </div>

            <h2>Specialized Services</h2>
          </div>

          <p>
            We combine methodical strategy with visual precision to build
            cohesive digital products that endure.
          </p>

        </div>


        <div className="services-container">

          {/* BRANDING */}
          <div className="service-card">

            <div className="service-top">
              <span>[01]</span>
              <Palette size={18}/>
            </div>

            <h3>BRANDING</h3>

            <p>
              Creating memorable identities that communicate what a brand
              stands for.
            </p>

            <ul>
              <li>Visual Identity</li>
              <li>Brand Guidelines</li>
              <li>Typography Systems</li>
              <li>Art Direction</li>
            </ul>

            <a href="#contact">DISCUSS PROJECT ↗️</a>

          </div>


          {/* UI/UX */}
          <div className="service-card featured">

            <div className="service-top">
              <span>[02]</span>
              <Grid2X2 size={18}/>
            </div>

            <h3>UI/UX DESIGN</h3>

            <p>
              Designing intuitive and beautiful digital experiences that
              people enjoy using.
            </p>

            <ul>
              <li>User Research</li>
              <li>Interface Architecture</li>
              <li>Wireframing & Prototyping</li>
              <li>Design Systems</li>
            </ul>

            <a href="#contact">DISCUSS PROJECT ↗️</a>

          </div>


          {/* WEB DESIGN */}
          <div className="service-card">

            <div className="service-top">
              <span>[03]</span>
              <Globe size={18}/>
            </div>

            <h3>WEB DESIGN</h3>

            <p>
              Creating modern, responsive websites that bring brands to life.
            </p>

            <ul>
              <li>Responsive Web Craft</li>
              <li>Interactive Design</li>
              <li>Performance Optimization</li>
              <li>CMS Solutions</li>
            </ul>

            <a href="#contact">DISCUSS PROJECT ↗️</a>

          </div>

        </div>

      </section>


      {/* CONTACT SECTION */}
      <section id="contact" className="contact-section">

        <div className="contact-intro">

          <div className="section-label">
            <span></span>
            INITIATE A CONVERSATION
          </div>

          <h2>
            Let's Build
            <br />
            Something
            <br />
            Exceptional.
          </h2>

          <p>
            Whether you are launching a new venture, refining an established
            brand, or architecting a modern digital product, we are always
            eager to discuss meaningful collaborations.
          </p>

          <div className="contact-info">

            <div>
              <span>⌖</span>
              <div>
                <strong>HEADQUARTERS</strong>
                <p>London, United Kingdom</p>
              </div>
            </div>

            <div>
              <span>◷</span>
              <div>
                <strong>CURRENT AVAILABILITY</strong>
                <p>Accepting commissions for select quarterly partnerships</p>
              </div>
            </div>

          </div>

        </div>


        {/* CONTACT FORM */}
        <form className="contact-form">

          <label>YOUR NAME *</label>
          <input
            type="text"
            placeholder="e.g. Eleanor Vance"
          />

          <label>EMAIL ADDRESS *</label>
          <input
            type="email"
            placeholder="e.g. eleanor@example.com"
          />

          <label>PROJECT BRIEF OR MESSAGE *</label>
          <textarea
            placeholder="Tell us about your brand, project goals, timeline, and scope..."
            rows="6"
          ></textarea>

          <button type="submit">
            SEND MESSAGE ↗️
          </button>

        </form>

      </section>


      {/* FOOTER */}
<footer className="site-footer">

  <div className="footer-top">

    <div className="footer-brand">
      <div className="footer-logo">
        AURA STUDIO<span>.</span>
      </div>

      <p>CREATIVE AGENCY • LONDON, UNITED KINGDOM</p>
    </div>

    <div className="footer-links">
      <a href="#home">HOME</a>
      <a href="#about">ABOUT</a>
      <a href="#services">SERVICES</a>
      <a href="#contact">CONTACT</a>
    </div>

  </div>


  <div className="footer-bottom">

    <p>© 2026 Aura Studio. All rights reserved.</p>

    <div className="footer-details">
      <span>London, United Kingdom</span>
      <span>•</span>
      <span>Modern • Minimalist • Elegant</span>
    </div>

    

  </div>

</footer>

      <button
  className="back-to-top"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  ↑
</button>

    </>
  )
}

export default App