const PRODUCTS = [
  {
    id: 1,
    name: "Juego de Cortinas Arcoíris",
    category: "Decoración",
    collection: "Colección Unicornio",
    price: 889.99,
    originalPrice: 1100,
    image: "images/seccion-decoracion.jpeg",
    images: ["images/seccion-decoracion.jpeg", "images/seccion-coleccion.webP"],
    description: "Espectaculares cortinas con efecto arcoíris degradado. Cada panel incluye 1 capa transparente unida a un panel de cortina opaca de 274.32 cm de longitud y 2 argollas adicionales y telas de marquesa desmontables. Las uñas tienen un diámetro interior de 4.08 cm, y la capa del panel de cortina mide 132.08 cm de ancho.",
    materials: "Polyester de alta calidad",
    dimensions: "132 cm ancho × 127 cm alto",
    brand: "Sweet Homes",
    stock: true,
    rating: 4.5,
    reviews: 2391,
    badge: "Trending"
  },
  {
    id: 2,
    name: "Estuche Escolar Rosa",
    category: "Accesorios",
    collection: "Colección Back to School",
    price: 189.00,
    originalPrice: null,
    image: "images/catalogo-cosmetiquera.jpeg",
    images: ["images/catalogo-cosmetiquera.jpeg", "images/ctalogo-juegopapeleria.webP"],
    description: "Estuche escolar ultra fashionista de color rosa con múltiples compartimentos. Perfecto para guardar tus útiles escolares con estilo. Fabricado con materiales resistentes y de alta calidad.",
    materials: "Tela de alta resistencia con cremalleras metálicas",
    dimensions: "25 cm × 12 cm × 8 cm",
    brand: "Glow Room",
    stock: true,
    rating: 4.8,
    reviews: 1245,
    badge: "Nuevo"
  },
  {
    id: 3,
    name: "Set de Papelería Glitter",
    category: "Accesorios",
    collection: "Colección Papelería",
    price: 249.00,
    originalPrice: 310,
    image: "images/ctalogo-juegopapeleria.webP",
    images: ["images/ctalogo-juegopapeleria.webP", "images/catalogo-cosmetiquera.jpeg"],
    description: "Hermoso set de papelería con detalles brillantes y de purpurina. Incluye cuadernos, bolígrafos, marcadores y clips decorativos. Todo lo que necesitas para que tus apuntes sean los más lindos de la clase.",
    materials: "Papel de calidad premium, plástico y purpurina",
    dimensions: "Varios tamaños",
    brand: "Glow Room",
    stock: true,
    rating: 4.6,
    reviews: 873,
    badge: "Oferta"
  },
  {
    id: 4,
    name: "Bolso de Mano Menta",
    category: "Accesorios",
    collection: "Colección Fashion",
    price: 459.00,
    originalPrice: 580,
    image: "images/catalogo-bolso.jpg",
    images: ["images/catalogo-bolso.jpg", "images/seccion accesorios.jpg"],
    description: "Encantador bolso de mano en color menta con detalles florales. Perfecto para llevar tus esenciales con un toque de frescura y elegancia. El accesorio perfecto para complementar cualquier outfit.",
    materials: "Cuero sintético premium, asa metálica",
    dimensions: "22 cm × 14 cm × 12 cm",
    brand: "Glow Fashion",
    stock: true,
    rating: 4.7,
    reviews: 654,
    badge: null
  },
  {
    id: 5,
    name: "Lentes de Sol Pastel",
    category: "Accesorios",
    collection: "Colección Verano",
    price: 299.00,
    originalPrice: null,
    image: "images/detalle-producto-lentes.webP",
    images: ["images/detalle-producto-lentes.webP", "images/seccion accesorios.jpg"],
    description: "Modernos lentes de sol con montura en colores pastel. Protección UV400 certificada. Diseño cat-eye irresistible que complementa perfectamente el estilo Glow Room. ¡La accesorio del verano!",
    materials: "Acetato y policarbonato, protección UV400",
    dimensions: "Talla universal",
    brand: "Glow Optics",
    stock: true,
    rating: 4.4,
    reviews: 412,
    badge: "Trending"
  },
  {
    id: 6,
    name: "Set de Accesorios Party",
    category: "Accesorios",
    collection: "Colección Fiestas",
    price: 349.00,
    originalPrice: 420,
    image: "images/seccion accesorios.jpg",
    images: ["images/seccion accesorios.jpg", "images/seccion-fiestas.jpeg"],
    description: "Kit completo de accesorios para fiestas que incluye diadema con corona, collares de perlas, esmaltes brillantes y labiales. Todo lo que necesitas para lucir increíble en cualquier celebración.",
    materials: "Plástico y textil premium, metales hipoalergénicos",
    dimensions: "Varios tamaños",
    brand: "Glow Party",
    stock: true,
    rating: 4.9,
    reviews: 1876,
    badge: "Favorito"
  },
  {
    id: 7,
    name: "Decoración Todo para tu Fiesta",
    category: "Decoración",
    collection: "Colección Fiestas Temáticas",
    price: 649.00,
    originalPrice: 780,
    image: "images/seccion-fiestas.jpeg",
    images: ["images/seccion-fiestas.jpeg", "images/seccion-regalos.webP"],
    description: "Set completo de decoración para fiestas temáticas con globos metalizados, cintas, guirnaldas y elementos decorativos. Transforma cualquier espacio en un lugar mágico y lleno de color.",
    materials: "Mylar, látex y materiales decorativos premium",
    dimensions: "Set completo con +40 piezas",
    brand: "Glow Room",
    stock: true,
    rating: 4.7,
    reviews: 2105,
    badge: "Más Vendido"
  },
  {
    id: 8,
    name: "Set de Regalos Premium",
    category: "Regalos",
    collection: "Colección Regalos",
    price: 799.00,
    originalPrice: 950,
    image: "images/seccion-regalos.webP",
    images: ["images/seccion-regalos.webP", "images/catalogo-bolso.jpg"],
    description: "Hermoso set de regalo con empaque premium en papel de rayas rosas y doradas con moño gigante. Incluye esferas decorativas y accesorios de regalo. El regalo perfecto para sorprender a alguien especial.",
    materials: "Papel de regalo premium, cintas satinadas y doradas",
    dimensions: "Varios tamaños disponibles",
    brand: "Glow Gifts",
    stock: true,
    rating: 4.8,
    reviews: 987,
    badge: "Premium"
  },
  {
    id: 9,
    name: "Colección Completa Decoración",
    category: "Decoración",
    collection: "Colección Interior",
    price: 1290.00,
    originalPrice: 1580,
    image: "images/seccion-coleccion.webP",
    images: ["images/seccion-coleccion.webP", "images/seccion-decoracion.jpeg"],
    description: "Completa colección de decoración para habitaciones con artículos coordinados. Incluye textiles, accesorios y elementos decorativos que transformarán tu espacio en un lugar de ensueño.",
    materials: "Textiles premium, materiales decorativos de alta calidad",
    dimensions: "Set coordinado para habitación completa",
    brand: "Glow Home",
    stock: true,
    rating: 4.6,
    reviews: 543,
    badge: "Colección"
  },
  {
    id: 10,
    name: "Kit de Cosmetiquera Brillante",
    category: "Accesorios",
    collection: "Colección Beauty",
    price: 389.00,
    originalPrice: 460,
    image: "images/catalogo-cosmetiquera.jpeg",
    images: ["images/catalogo-cosmetiquera.jpeg", "images/detalle-producto-lentes.webP"],
    description: "Cosmetiquera doble con compartimento organizador interior y exterior. Diseño brillante y moderno con espejo integrado. Perfecta para organizar todos tus productos de belleza y cuidado personal.",
    materials: "PU resistente al agua, cremalleras de calidad",
    dimensions: "28 cm × 16 cm × 10 cm",
    brand: "Glow Beauty",
    stock: true,
    rating: 4.5,
    reviews: 1432,
    badge: null
  }
];

let cart = JSON.parse(localStorage.getItem('glowroom_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('glowroom_wishlist') || '[]');

function saveCart() {
  localStorage.setItem('glowroom_cart', JSON.stringify(cart));
  updateCartUI();
}

function saveWishlist() {
  localStorage.setItem('glowroom_wishlist', JSON.stringify(wishlist));
}

function updateCartUI() {
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = total;
  });
  renderCartItems();
}

function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty, name: product.name, price: product.price, image: product.image });
  }
  saveCart();
  showToast('Producto añadido', `${product.name} está en tu carrito`);
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
}

function updateCartQty(productId, newQty) {
  if (newQty < 1) { removeFromCart(productId); return; }
  const item = cart.find(i => i.id === productId);
  if (item) { item.qty = newQty; saveCart(); }
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-shopping-bag"></i>
        <p>Tu carrito está vacío</p>
        <a href="catalogo.html" class="btn-primary" style="text-decoration:none;margin-top:8px">Ver catálogo</a>
      </div>`;
    document.getElementById('cartTotal').textContent = '$0.00 MXN';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img"><img src="${item.image}" alt="${item.name}" onerror="this.style.display='none'"></div>
      <div class="cart-item-info">
        <h5>${item.name}</h5>
        <div class="price">$${(item.price * item.qty).toFixed(2)} MXN</div>
        <div class="cart-item-controls">
          <button class="cart-qty-btn" onclick="updateCartQty(${item.id}, ${item.qty - 1})">−</button>
          <span class="cart-qty-num">${item.qty}</span>
          <button class="cart-qty-btn" onclick="updateCartQty(${item.id}, ${item.qty + 1})">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-times"></i></button>
    </div>`).join('');

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const totalEl = document.getElementById('cartTotal');
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)} MXN`;
}

function toggleWishlist(productId, btn) {
  const idx = wishlist.indexOf(productId);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    if (btn) { btn.innerHTML = '<i class="far fa-heart"></i>'; btn.classList.remove('active'); }
  } else {
    wishlist.push(productId);
    if (btn) { btn.innerHTML = '<i class="fas fa-heart"></i>'; btn.classList.add('active'); }
    showToast('Lista de deseos', 'Producto guardado en tu lista');
  }
  saveWishlist();
}

function showToast(title, message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.querySelector('.toast-text h5').textContent = title;
  toast.querySelector('.toast-text p').textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

function openCart() {
  document.getElementById('cartSidebar')?.classList.add('open');
  document.getElementById('cartOverlay')?.classList.add('open');
  renderCartItems();
}

function closeCart() {
  document.getElementById('cartSidebar')?.classList.remove('open');
  document.getElementById('cartOverlay')?.classList.remove('open');
}

function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;

  let current = 0;
  let timer;

  function goTo(n) {
    current = (n + slides.length) % slides.length;
    const track = document.querySelector('.hero-slides');
    if (track) track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startTimer() { timer = setInterval(next, 4500); }
  function resetTimer() { clearInterval(timer); startTimer(); }

  document.querySelector('.hero-next')?.addEventListener('click', () => { next(); resetTimer(); });
  document.querySelector('.hero-prev')?.addEventListener('click', () => { prev(); resetTimer(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); resetTimer(); }));

  startTimer();
}

function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const closeBtn = document.querySelector('.mobile-close');

  hamburger?.addEventListener('click', () => mobileNav?.classList.add('open'));
  closeBtn?.addEventListener('click', () => mobileNav?.classList.remove('open'));
  mobileNav?.addEventListener('click', e => {
    if (e.target === mobileNav) mobileNav.classList.remove('open');
  });
}

function createProductCard(product) {
  const inWishlist = wishlist.includes(product.id);
  const stars = renderStars(product.rating);
  return `
    <div class="product-card">
      <div class="product-card-img">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='images/seccion-decoracion.jpeg'">
        <button class="product-wishlist ${inWishlist ? 'active' : ''}" onclick="toggleWishlist(${product.id}, this)">
          <i class="${inWishlist ? 'fas' : 'far'} fa-heart"></i>
        </button>
      </div>
      <div class="product-card-body">
        <div class="product-category-tag">${product.category}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-collection">${product.collection}</div>
        <div class="product-stars">${stars}<span>(${product.reviews.toLocaleString()})</span></div>
        <div class="product-card-footer">
          <div class="product-price">
            ${product.originalPrice ? `<span class="old-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
            $${product.price.toFixed(2)}
          </div>
          <button class="product-add-btn" onclick="addToCart(${product.id})" title="Añadir al carrito">
            <i class="fas fa-shopping-bag"></i>
          </button>
        </div>
      </div>
    </div>`;
}

function renderStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) html += '<i class="fas fa-star"></i>';
    else if (i - rating < 1) html += '<i class="fas fa-star-half-alt"></i>';
    else html += '<i class="far fa-star"></i>';
  }
  return html;
}

function initHomepageProducts() {
  const grid = document.getElementById('featuredProducts');
  if (!grid) return;

  const tabs = document.querySelectorAll('.products-tab');
  let activeCategory = 'Todo';

  function renderProducts() {
    const filtered = activeCategory === 'Todo'
      ? PRODUCTS.slice(0, 8)
      : PRODUCTS.filter(p => p.category === activeCategory).slice(0, 8);
    grid.innerHTML = filtered.map(createProductCard).join('');
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.dataset.category;
      renderProducts();
    });
  });

  renderProducts();
}

function initCatalog() {
  const grid = document.getElementById('catalogGrid');
  if (!grid) return;

  let filtered = [...PRODUCTS];

  function render() {
    document.getElementById('resultsCount').textContent = `${filtered.length} productos encontrados`;
    grid.innerHTML = filtered.map(p => {
      const card = createProductCard(p);
      return card.replace('class="product-card"', 'class="product-card" onclick="goToProduct(' + p.id + ')"');
    }).join('');
    grid.querySelectorAll('.product-add-btn, .product-wishlist').forEach(btn => {
      btn.addEventListener('click', e => e.stopPropagation());
    });
  }

  document.querySelectorAll('.filter-category').forEach(cb => {
    cb.addEventListener('change', () => {
      const checked = [...document.querySelectorAll('.filter-category:checked')].map(c => c.value);
      filtered = checked.length ? PRODUCTS.filter(p => checked.includes(p.category)) : [...PRODUCTS];
      applySort();
    });
  });

  function applySort() {
    const sort = document.getElementById('sortSelect')?.value;
    if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);
    else if (sort === 'popular') filtered.sort((a, b) => b.reviews - a.reviews);
    render();
  }

  document.getElementById('sortSelect')?.addEventListener('change', applySort);

  render();
}

function goToProduct(id) {
  window.location.href = `producto.html?id=${id}`;
}

function initProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];

  document.title = `${product.name} - Glow Room`;

  document.getElementById('productName').textContent = product.name;
  document.getElementById('productCategory').textContent = product.category;
  document.getElementById('productCollection').textContent = product.collection;
  document.getElementById('productPrice').innerHTML = `
    ${product.originalPrice ? `<span class="original">$${product.originalPrice.toFixed(2)}</span>` : ''}
    $${product.price.toFixed(2)} MXN`;
  document.getElementById('productDesc').textContent = product.description;
  document.getElementById('productMaterials').textContent = product.materials;
  document.getElementById('productDimensions').textContent = product.dimensions;
  document.getElementById('productBrand').textContent = product.brand;
  document.getElementById('productRating').innerHTML = renderStars(product.rating);
  document.getElementById('productReviews').textContent = `${product.reviews.toLocaleString()} reseñas`;
  document.getElementById('productBreadcrumb').textContent = product.name;

  const mainImg = document.getElementById('mainProductImg');
  const thumbs = document.getElementById('thumbGallery');
  if (mainImg) mainImg.src = product.images[0];
  if (thumbs) {
    thumbs.innerHTML = product.images.map((img, i) =>
      `<img src="${img}" class="${i === 0 ? 'active' : ''}" onclick="changeMainImage(this, '${img}')" alt="Vista ${i+1}">`
    ).join('');
  }

  document.getElementById('addToCartBtn')?.addEventListener('click', () => {
    const qty = parseInt(document.getElementById('qtyInput')?.value || 1);
    addToCart(product.id, qty);
  });

  document.getElementById('qtyMinus')?.addEventListener('click', () => {
    const input = document.getElementById('qtyInput');
    if (input && parseInt(input.value) > 1) input.value = parseInt(input.value) - 1;
  });
  document.getElementById('qtyPlus')?.addEventListener('click', () => {
    const input = document.getElementById('qtyInput');
    if (input) input.value = parseInt(input.value) + 1;
  });

  const wBtn = document.getElementById('wishlistDetailBtn');
  if (wBtn) {
    const inW = wishlist.includes(product.id);
    wBtn.innerHTML = `<i class="${inW ? 'fas' : 'far'} fa-heart"></i>`;
    if (inW) wBtn.classList.add('active-wish');
    wBtn.addEventListener('click', () => {
      toggleWishlist(product.id, null);
      const inWNow = wishlist.includes(product.id);
      wBtn.innerHTML = `<i class="${inWNow ? 'fas' : 'far'} fa-heart"></i>`;
    });
  }

  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const relGrid = document.getElementById('relatedProducts');
  if (relGrid) relGrid.innerHTML = related.map(createProductCard).join('');

  initAccordion();
}

function changeMainImage(thumb, src) {
  document.getElementById('mainProductImg').src = src;
  document.querySelectorAll('.thumb-gallery img').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

function initAccordion() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const isOpen = content.classList.contains('open');
      document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('open'));
      document.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('open'));
      if (!isOpen) {
        content.classList.add('open');
        header.classList.add('open');
      }
    });
  });
}

function initAuth() {
  const tabs = document.querySelectorAll('.auth-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.auth-form-panel').forEach(p => p.classList.remove('active'));
      document.getElementById(tab.dataset.panel)?.classList.add('active');
    });
  });

  const params = new URLSearchParams(window.location.search);
  if (params.get('mode') === 'register') {
    document.querySelector('[data-panel="registerPanel"]')?.click();
  }

  document.querySelectorAll('.toggle-password').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.previousElementSibling;
      if (!input) return;
      input.type = input.type === 'password' ? 'text' : 'password';
      btn.innerHTML = input.type === 'password' ? '<i class="far fa-eye"></i>' : '<i class="far fa-eye-slash"></i>';
    });
  });

  document.getElementById('loginForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const pass = document.getElementById('loginPass').value;
    if (!email || !pass) { showAuthError('loginError', 'Por favor completa todos los campos'); return; }
    showToast('Bienvenida', '¡Inicio de sesión exitoso!');
    setTimeout(() => window.location.href = 'index.html', 1500);
  });

  document.getElementById('registerForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const pass = document.getElementById('regPass').value;
    const confirm = document.getElementById('regConfirm').value;
    if (pass !== confirm) { showAuthError('registerError', 'Las contraseñas no coinciden'); return; }
    if (pass.length < 8) { showAuthError('registerError', 'La contraseña debe tener al menos 8 caracteres'); return; }
    showToast('Registro exitoso', '¡Bienvenida a Glow Room!');
    setTimeout(() => window.location.href = 'index.html', 1500);
  });

  document.getElementById('forgotLink')?.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('[data-panel="loginPanel"]')?.classList.remove('active');
    document.getElementById('forgotPanel')?.classList.add('active');
    tabs.forEach(t => t.classList.remove('active'));
  });

  document.getElementById('backToLogin')?.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('forgotPanel')?.classList.remove('active');
    document.getElementById('loginPanel')?.classList.add('active');
    document.querySelector('[data-panel="loginPanel"]')?.classList.add('active');
  });

  document.getElementById('forgotForm')?.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('forgotForm').style.display = 'none';
    document.getElementById('forgotSuccess')?.classList.add('show');
  });
}

function showAuthError(id, msg) {
  const el = document.getElementById(id);
  if (el) { el.textContent = msg; el.style.display = 'block'; setTimeout(() => el.style.display = 'none', 4000); }
}

function initContact() {
  document.getElementById('contactForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const msg = document.getElementById('contactMsg').value.trim();

    if (!name || !email || !msg) {
      showToast('Error', 'Por favor completa los campos requeridos');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('Error', 'Por favor ingresa un correo electrónico válido');
      return;
    }

    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('contactSuccess')?.classList.add('show');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  initMobileNav();
  initHeroSlider();

  document.querySelector('.cart-icon')?.addEventListener('click', e => { e.preventDefault(); openCart(); });
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);
  document.getElementById('cartCloseBtn')?.addEventListener('click', closeCart);
  document.getElementById('checkoutBtn')?.addEventListener('click', () => {
    if (cart.length === 0) { showToast('Carrito vacío', 'Agrega productos antes de continuar'); return; }
    showToast('Procesando', 'Redirigiendo al pago...');
    closeCart();
  });

  if (document.getElementById('featuredProducts')) initHomepageProducts();
  if (document.getElementById('catalogGrid')) initCatalog();
  if (document.getElementById('mainProductImg')) initProductDetail();
  if (document.getElementById('loginForm') || document.getElementById('registerForm')) initAuth();
  if (document.getElementById('contactForm')) initContact();

  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) a.classList.add('active');
  });

  document.getElementById('searchBtn')?.addEventListener('click', e => {
    e.preventDefault();
    const q = prompt('¿Qué producto buscas?');
    if (q && q.trim()) window.location.href = `catalogo.html?q=${encodeURIComponent(q.trim())}`;
  });
});
