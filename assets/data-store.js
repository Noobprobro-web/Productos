/**
 * DATA STORE - 20 CATEGORÍAS X 20 PRODUCTOS (400 PRODUCTOS EN TOTAL)
 * Colección completa para Atelier Minimal Store
 */

window.STORE_CATEGORIES = [
  { id: 'hogar-decoracion', name: 'Decoración y Hogar', count: 20, desc: 'Piezas artesanales y vasijas de cerámica para ambientes serenos.' },
  { id: 'textiles-organicos', name: 'Textiles Orgánicos', count: 20, desc: 'Mantas, sábanas y cojines de lino y algodón 100% orgánico.' },
  { id: 'cuidado-personal', name: 'Cuidado Personal', count: 20, desc: 'Cosmética natural botánica sin químicos agresivos.' },
  { id: 'velas-aromas', name: 'Velas y Aromaterapia', count: 20, desc: 'Velas de cera de soja y difusores con aceites esenciales purísimos.' },
  { id: 'accesorios-bambu', name: 'Accesorios de Bambú', count: 20, desc: 'Utensilios y organizadores sostenibles para el hogar y la cocina.' },
  { id: 'iluminacion-warm', name: 'Iluminación Cálida', count: 20, desc: 'Lámparas de mesa y apliques de diseño minimalista con tonos suaves.' },
  { id: 'vajillas-ceramica', name: 'Vajillas de Cerámica', count: 20, desc: 'Platos, tazas y cuencos moldeados a mano con acabado mate.' },
  { id: 'organizadores-madera', name: 'Organizadores de Madera', count: 20, desc: 'Cajas, estantes y escritorios en roble y nogal sostenible.' },
  { id: 'papeleria-minimal', name: 'Papeleria Minimalista', count: 20, desc: 'Cuadernos de papel reciclado, planificadores y plumas artesanales.' },
  { id: 'plantas-macetas', name: 'Macetas y Jardines', count: 20, desc: 'Macetas de barro y terracota en tonos pastel verde y tierra.' },
  { id: 'bano-relax', name: 'Baño y Relax', count: 20, desc: 'Toallas de bambú, sales de baño marinas y cepillos naturales.' },
  { id: 'cocina-sustentable', name: 'Cocina Sustentable', count: 20, desc: 'Envases de vidrio, envoltorios de cera y cubiertos ecológicos.' },
  { id: 'movilidad-eco', name: 'Movilidad & Botellas', count: 20, desc: 'Termos de acero inoxidable y bolsas tote de tela de yute.' },
  { id: 'arte-botanico', name: 'Arte y Cuadros Botánicos', count: 20, desc: 'Láminas botánicas impresas con tinta vegetal en papel kraft.' },
  { id: 'muebles-auxiliares', name: 'Muebles Auxiliares', count: 20, desc: 'Taburetes, mesitas de noche y bancas sencillas en madera clara.' },
  { id: 'calzado-casa', name: 'Calzado y Confort', count: 20, desc: 'Pantuflas y zapatillas de lana virgen y suela de corcho.' },
  { id: 'infusiones-te', name: 'Infusiones y Té Orgánico', count: 20, desc: 'Mezclas de hierbas medicinales y accesorios para té ceremonial.' },
  { id: 'mascotas-eco', name: 'Accesorios para Mascotas', count: 20, desc: 'Camas de cáñamo y cuencos de cerámica para mascotas.' },
  { id: 'ninos-juguetes', name: 'Juguetes de Madera', count: 20, desc: 'Juegos didácticos minimalistas moldeados en madera pulida.' },
  { id: 'cuidado-ropa', name: 'Cuidado de la Ropa', count: 20, desc: 'Detergentes biodegradables y esferas de secado en lana natural.' }
];

const ADJECTIVES = ['Artesanal', 'Minimalista', 'Orgánico', 'Sostenible', 'Botánico', 'Sereno', 'Atelier', 'Escandinavo', 'Pastel', 'Natural', 'Puro', 'Zen', 'Eco', 'Esencial', 'Mate', 'Texturizado'];
const NOUNS_PER_CAT = {
  'hogar-decoracion': ['Jarrón', 'Florero', 'Escultura', 'Cuenco Decorativo', 'Bandeja'],
  'textiles-organicos': ['Manta', 'Funda de Cojín', 'Sábana', 'Edredón', 'Camino de Mesa'],
  'cuidado-personal': ['Sérum Facial', 'Crema Hidratante', 'Jabón Botánico', 'Aceite Corporal', 'Bálsamo Labial'],
  'velas-aromas': ['Vela de Soja', 'Difusor de Varillas', 'Incienso Natural', 'Spray de Almohada', 'Cera Aromática'],
  'accesorios-bambu': ['Cepillo', 'Set de Cubiertos', 'Tabla de Cortar', 'Organizador', 'Especiero'],
  'iluminacion-warm': ['Lámpara de Mesa', 'Farol de Papel', 'Aplique Pared', 'Vela LED recargable', 'Foco Cálido'],
  'vajillas-ceramica': ['Taza de Café', 'Plato Trinchero', 'Tazón de Avena', 'Jarra de Agua', 'Plato Postre'],
  'organizadores-madera': ['Caja de Escritorio', 'Estante Flotante', 'Joyero', 'Lapicero', 'Perchero de Pared'],
  'papeleria-minimal': ['Cuaderno Lino', 'Planificador Semanal', 'Pluma Estilográfica', 'Bloc de Notas', 'Set Marcapáginas'],
  'plantas-macetas': ['Maceta Terracota', 'Soporte de Planta', 'Regadera de Cobre', 'Maceta Colgante', 'Pulverizador Botánico'],
  'bano-relax': ['Toalla de Mano', 'Sales de Epsom', 'Cepillo Seco', 'Jabón de Arcilla', 'Alfombra de Algodón'],
  'cocina-sustentable': ['Frasco de Vidrio', 'Envoltorio de Cera', 'Sorbetes de Acero', 'Bolsa para Leche Vegetal', 'Filtro de Café'],
  'movilidad-eco': ['Botella Térmica', 'Bolsa Tote', 'Mochila de Lona', 'Vasito Plegable', 'Funda de Computador'],
  'arte-botanico': ['Lámina Hojas', 'Cuadro Eucalipto', 'Marco de Roble', 'Prensa de Flores', 'Póster Minimal'],
  'muebles-auxiliares': ['Mesita Lateral', 'Taburete Bajo', 'Perchero Pie', 'Revistero Madera', 'Banca Entrada'],
  'calzado-casa': ['Pantuflas Lino', 'Zapatillas Corcho', 'Calcetines Lana', 'Sandalias Casa', 'Plantillas Algodón'],
  'infusiones-te': ['Té Verde Sencha', 'Infusión Manzanilla', 'Infusor de Acero', 'Taza Ceremonial', 'Matcha Orgánico'],
  'mascotas-eco': ['Cama de Cáñamo', 'Cuenco Cerámica', 'Juguete Cuerda', 'Manta Mascota', 'Collar Cuero Vegano'],
  'ninos-juguetes': ['Bloques Madera', 'Sonajero Bambú', 'Puzzle Geométrico', 'Cochecito Madera', 'Figuras Animales'],
  'cuidado-ropa': ['Esferas Secadora', 'Detergente Ecológico', 'Jabón de Lavanda', 'Bolsa Lavado Delicado', 'Cepillo Quita Pelusa']
};

function generateStoreProducts() {
  const products = [];
  let productIdCounter = 101;

  window.STORE_CATEGORIES.forEach(category => {
    const nouns = NOUNS_PER_CAT[category.id] || ['Producto', 'Artículo'];
    
    for (let i = 1; i <= 20; i++) {
      const noun = nouns[i % nouns.length];
      const adj = ADJECTIVES[(i + productIdCounter) % ADJECTIVES.length];
      const title = `${noun} ${adj} Atelier Nº${i}`;
      const price = Math.floor(18 + (i * 3.5) + (productIdCounter % 25));

      products.push({
        id: productIdCounter,
        title: title,
        categoryId: category.id,
        categoryName: category.name,
        price: price,
        priceFormatted: `$${price}.00 USD`,
        rating: (4.5 + (i % 5) * 0.1).toFixed(1),
        reviewsCount: Math.floor(12 + i * 4.3),
        description: `Exquisito ${noun.toLowerCase()} elaborado artesanalmente. Tonos pastel suaves en verde y marrón natural para la armonía de tu espacio.`,
        isBestSeller: i <= 4,
        isNew: i > 16
      });

      productIdCounter++;
    }
  });

  return products;
}

window.STORE_PRODUCTS = generateStoreProducts();

// Dynamic Cart Engine (LocalStorage)
window.STORE_CART = {
  get() {
    return JSON.parse(localStorage.getItem('atelier_cart') || '[]');
  },
  add(productId, qty = 1) {
    let cart = this.get();
    const existing = cart.find(item => item.id === productId);
    if (existing) {
      existing.qty += qty;
    } else {
      const prod = window.STORE_PRODUCTS.find(p => p.id === productId);
      if (prod) {
        cart.push({ ...prod, qty });
      }
    }
    localStorage.setItem('atelier_cart', JSON.stringify(cart));
    this.updateUI();
  },
  remove(productId) {
    let cart = this.get().filter(item => item.id !== productId);
    localStorage.setItem('atelier_cart', JSON.stringify(cart));
    this.updateUI();
  },
  clear() {
    localStorage.setItem('atelier_cart', JSON.stringify([]));
    this.updateUI();
  },
  updateUI() {
    const cart = this.get();
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    const badges = document.querySelectorAll('.cart-count-badge');
    badges.forEach(b => {
      b.textContent = totalQty;
      b.style.display = totalQty > 0 ? 'inline-flex' : 'none';
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  window.STORE_CART.updateUI();
});
