/**
 * ATELIER INTERACTIVE SHOPPING & DIALOG ENGINE
 * Handles: Interactive Cart Modal, Quick Search Modal, Category Filter & Pagination
 */

document.addEventListener("DOMContentLoaded", () => {
  // Inject Cart Modal Markup if not present
  if (!document.getElementById("cartModal")) {
    const cartModalHTML = `
      <div id="cartModal" class="modal-overlay">
        <div class="modal-card">
          <button class="modal-close" onclick="closeCartModal()">&times;</button>
          <h2 class="title-2">Tu Carrito de Compras</h2>
          <div id="cartItemsContainer" class="cart-items-list">
            <p class="text-body">Tu carrito está vacío actualmente.</p>
          </div>
          <div style="border-top: 1px solid var(--color-border); padding-top: 1.2rem; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <span class="text-body">Total Estimado:</span>
              <h3 id="cartTotalPrice" class="title-2" style="color: var(--color-green-dark);">$0.00 USD</h3>
            </div>
            <button class="btn btn-primary" onclick="alert('¡Redirigiendo a la pantalla de pago seguro (Checkout)!');">Proceder al Pago</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", cartModalHTML);
  }

  // Inject Search Modal Markup if not present
  if (!document.getElementById("searchModal")) {
    const searchModalHTML = `
      <div id="searchModal" class="modal-overlay">
        <div class="modal-card" style="max-width: 750px;">
          <button class="modal-close" onclick="closeSearchModal()">&times;</button>
          <h2 class="title-2" style="margin-bottom: 1rem;">Buscar en la Tienda</h2>
          <input type="text" id="searchInput" class="search-input-box" placeholder="Escribe el nombre del producto o categoría (ej. Jarrón, Soja, Bambú)..." oninput="handleLiveSearch(this.value)">
          <div id="searchResultsGrid" class="products-grid" style="max-height: 50vh; overflow-y: auto;">
            <p class="text-body">Ingresa una palabra clave para buscar entre nuestros 400 productos.</p>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", searchModalHTML);
  }

  // Attach Click Handlers to Header Buttons
  const cartBtns = document.querySelectorAll('button[aria-label="Carrito"], a[aria-label="Carrito"]');
  cartBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openCartModal();
    });
  });

  const searchBtns = document.querySelectorAll('button[aria-label="Buscar"]');
  searchBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openSearchModal();
    });
  });

  // Attach badge counters to cart buttons
  cartBtns.forEach(btn => {
    if (!btn.querySelector('.cart-badge')) {
      btn.style.position = 'relative';
      btn.insertAdjacentHTML('beforeend', '<span class="cart-badge cart-count-badge" style="display:none;">0</span>');
    }
  });

  if (window.STORE_CART) {
    window.STORE_CART.updateUI();
  }
});

// Modal Controller Functions
function openCartModal() {
  renderCartModalItems();
  document.getElementById("cartModal").classList.add("active");
}

function closeCartModal() {
  document.getElementById("cartModal").classList.remove("active");
}

function openSearchModal() {
  document.getElementById("searchModal").classList.add("active");
  setTimeout(() => document.getElementById("searchInput").focus(), 100);
}

function closeSearchModal() {
  document.getElementById("searchModal").classList.remove("active");
}

function renderCartModalItems() {
  const container = document.getElementById("cartItemsContainer");
  const totalEl = document.getElementById("cartTotalPrice");
  if (!window.STORE_CART || !container) return;

  const cart = window.STORE_CART.get();
  if (cart.length === 0) {
    container.innerHTML = `<p class="text-body">Tu carrito está vacío. ¡Explora nuestros 400 productos sostenibles!</p>`;
    totalEl.textContent = "$0.00 USD";
    return;
  }

  let total = 0;
  container.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    return `
      <div class="cart-item">
        <div class="cart-item-details">
          <h4>${item.title}</h4>
          <span class="text-body" style="font-size: 0.85rem;">${item.categoryName} - Cantidad: ${item.qty}</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span class="cart-item-price">$${itemTotal}.00 USD</span>
          <button onclick="window.STORE_CART.remove(${item.id}); renderCartModalItems();" style="background:none; border:none; color:#DC2626; cursor:pointer; font-weight:600;">Eliminar</button>
        </div>
      </div>
    `;
  }).join('');

  totalEl.textContent = `$${total}.00 USD`;
}

function handleLiveSearch(query) {
  const resultsContainer = document.getElementById("searchResultsGrid");
  if (!query || query.trim().length < 2) {
    resultsContainer.innerHTML = `<p class="text-body">Ingresa al menos 2 caracteres para buscar en el catálogo.</p>`;
    return;
  }

  const q = query.toLowerCase().trim();
  const matches = window.STORE_PRODUCTS.filter(p => 
    p.title.toLowerCase().includes(q) || 
    p.categoryName.toLowerCase().includes(q)
  ).slice(0, 8);

  if (matches.length === 0) {
    resultsContainer.innerHTML = `<p class="text-body">No se encontraron productos para "${query}".</p>`;
    return;
  }

  resultsContainer.innerHTML = matches.map(product => `
    <article class="product-card">
      <div class="placeholder-box" style="min-height:160px; padding:1rem;">
        <p style="font-size:0.8rem;">${product.categoryName}</p>
      </div>
      <div class="product-info">
        <h3 class="title-3" style="font-size:1rem;">${product.title}</h3>
        <div class="product-price">${product.priceFormatted}</div>
      </div>
      <button class="btn btn-primary" onclick="window.STORE_CART.add(${product.id}); closeSearchModal(); openCartModal();">Añadir</button>
    </article>
  `).join('');
}
