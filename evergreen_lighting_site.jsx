<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Evergreen Lighting</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; background: #fff; color: #064e3b; }
    header { background: #065f46; color: white; padding: 1.5rem; text-align: center; }
    header h1 { margin: 0; font-size: 2rem; }
    header p { margin: 0.5rem 0 0; font-style: italic; }
    .hero { background: #d1fae5; padding: 4rem 1rem; text-align: center; }
    .hero h2 { font-size: 2rem; margin-bottom: 1rem; }
    .hero p { font-size: 1.2rem; margin-bottom: 1.5rem; }
    .btn { background: #047857; color: white; padding: 0.75rem 1.5rem; border-radius: 9999px; text-decoration: none; }
    .btn:hover { background: #065f46; }
    .services { display: grid; grid-template-columns: 1fr; gap: 1.5rem; max-width: 1000px; margin: 0 auto; padding: 3rem 1rem; }
    .service { background: #fff; border: 1px solid #bbf7d0; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }
    .service h3 { margin-top: 0; color: #065f46; }
    .contact { background: #f0fdf4; padding: 3rem 1rem; text-align: center; }
    .contact h3 { font-size: 1.8rem; margin-bottom: 1rem; color: #065f46; }
    footer { background: #065f46; color: white; text-align: center; padding: 1rem; }
  </style>
</head>
<body>
  <header>
    <h1>Evergreen Lighting</h1>
    <p>"Professional Lighting. Lasting Impressions."</p>
  </header>

  <section class="hero">
    <h2>Holiday Lighting for Every Season</h2>
    <p>From dazzling Christmas displays to spooky Halloween vibes, Evergreen Lighting brings your holidays to life.</p>
    <a class="btn" href="tel:8188188196">Call Us Today</a>
  </section>

  <section class="services">
    <div class="service">
      <h3>Christmas Lighting</h3>
      <p>Bright, joyful, and unforgettable displays to make your home or business shine with holiday cheer.</p>
    </div>
    <div class="service">
      <h3>Halloween Lighting</h3>
      <p>Spooky, creative, and fun lighting that sets the perfect mood for Halloween night.</p>
    </div>
  </section>

  <section class="contact">
    <h3>Get in Touch</h3>
    <p>We’d love to bring your holiday vision to life!</p>
    <p><strong>Phone:</strong> <a href="tel:8188188196">818-818-8196</a></p>
    <p><strong>Email:</strong> <a href="mailto:Evergreenseasonalservice@gmail.com">Evergreenseasonalservice@gmail.com</a></p>
  </section>

  <footer>
    <p>&copy; <span id="year"></span> Evergreen Lighting. All rights reserved.</p>
  </footer>

  <script>
    document.getElementById("year").textContent = new Date().getFullYear();
  </script>
</body>
</html>
