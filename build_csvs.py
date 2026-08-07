import csv
import zipfile
import os

base_dir = r'C:\Users\Johan\OneDrive\Documentos\Drive\Productos'
export_dir = os.path.join(base_dir, 'csv_exports')
os.makedirs(export_dir, exist_ok=True)

categories = [
  ('hogar-decoracion', 'Decoracion y Hogar', ['Jarron', 'Florero', 'Escultura', 'Cuenco Decorativo', 'Bandeja']),
  ('textiles-organicos', 'Textiles Organicos', ['Manta', 'Funda de Cojin', 'Sabana', 'Edredon', 'Camino de Mesa']),
  ('cuidado-personal', 'Cuidado Personal', ['Serum Facial', 'Crema Hidratante', 'Jabon Botanico', 'Aceite Corporal', 'Balsamo Labial']),
  ('velas-aromas', 'Velas y Aromaterapia', ['Vela de Soja', 'Difusor de Varillas', 'Incienso Natural', 'Spray de Almohada', 'Cera Aromatica']),
  ('accesorios-bambu', 'Accesorios de Bambu', ['Cepillo', 'Set de Cubiertos', 'Tabla de Cortar', 'Organizador', 'Especiero']),
  ('iluminacion-warm', 'Iluminacion Calida', ['Lampara de Mesa', 'Farol de Papel', 'Aplique Pared', 'Vela LED', 'Foco Calido']),
  ('vajillas-ceramica', 'Vajillas de Ceramica', ['Taza de Cafe', 'Plato Trinchero', 'Tazon de Avena', 'Jarra de Agua', 'Plato Postre']),
  ('organizadores-madera', 'Organizadores de Madera', ['Caja de Escritorio', 'Estante Flotante', 'Joyero', 'Lapicero', 'Perchero']),
  ('papeleria-minimal', 'Papeleria Minimalista', ['Cuaderno Lino', 'Planificador Semanal', 'Pluma Estilografica', 'Bloc de Notas', 'Set Marcapaginas']),
  ('plantas-macetas', 'Macetas y Jardines', ['Maceta Terracota', 'Soporte de Planta', 'Regadera de Cobre', 'Maceta Colgante', 'Pulverizador']),
  ('bano-relax', 'Bano y Relax', ['Toalla de Bambu', 'Sales de Epsom', 'Cepillo Seco', 'Jabon de Arcilla', 'Alfombra de Algodon']),
  ('cocina-sustentable', 'Cocina Sustentable', ['Frasco de Vidrio', 'Envoltorio de Cera', 'Sorbetes de Acero', 'Bolsa Leche Vegetal', 'Filtro de Cafe']),
  ('movilidad-eco', 'Movilidad y Botellas', ['Botella Termica', 'Bolsa Tote', 'Mochila de Lona', 'Vasito Plegable', 'Funda de Laptop']),
  ('arte-botanico', 'Arte y Cuadros Botanicos', ['Lamina Hojas', 'Cuadro Eucalipto', 'Marco de Roble', 'Prensa de Flores', 'Poster Minimal']),
  ('muebles-auxiliares', 'Muebles Auxiliares', ['Mesita Lateral', 'Taburete Bajo', 'Perchero Pie', 'Revistero Madera', 'Banca Entrada']),
  ('calzado-casa', 'Calzado y Confort', ['Pantuflas Lino', 'Zapatillas Corcho', 'Calcetines Lana', 'Sandalias Casa', 'Plantillas Algodon']),
  ('infusiones-te', 'Infusiones y Te Organico', ['Te Verde Sencha', 'Infusion Manzanilla', 'Infusor de Acero', 'Taza Ceremonial', 'Matcha Organico']),
  ('mascotas-eco', 'Accesorios para Mascotas', ['Cama de Canamo', 'Cuenco Ceramica', 'Juguete Cuerda', 'Manta Mascota', 'Collar Cuero Vegano']),
  ('ninos-juguetes', 'Juguetes de Madera', ['Bloques Madera', 'Sonajero Bambu', 'Puzzle Geometrico', 'Cochecito Madera', 'Figuras Animales']),
  ('cuidado-ropa', 'Cuidado de la Ropa', ['Esferas Secadora', 'Detergente Ecologico', 'Jabon de Lavanda', 'Bolsa Lavado Delicado', 'Cepillo Quita Pelusa'])
]

adjectives = ['Artesanal', 'Minimalista', 'Organico', 'Sostenible', 'Botanico', 'Sereno', 'Atelier', 'Escandinavo', 'Pastel', 'Natural', 'Puro', 'Zen', 'Eco', 'Esencial', 'Mate', 'Texturizado']

first_names = ['Maria', 'Javier', 'Sofia', 'Camila', 'Carlos', 'Valeria', 'Diego', 'Lucia', 'Andres', 'Elena', 'Mateo', 'Valentina', 'Santiago', 'Isabella', 'Gabriel', 'Daniela']
last_initials = ['R.', 'G.', 'L.', 'M.', 'S.', 'P.', 'H.', 'V.', 'B.', 'T.', 'C.']
review_titles = ['Calidad insuperable', 'Elegante y funcional', 'Me encanto el diseno', 'Excelente atencion y empaque', 'Supero mis expectativas', 'Textura increible', '100% recomendado', 'Diseno minimalista puro']
review_bodies = [
  'El producto llego super rapido y en empaque sustentable. La calidad es increible y el color pastel combina perfecto con mi decoracion.',
  'Textura suave y acabados impecables. Se nota que es un producto artesanal hecho con dedicacion.',
  'La mejor compra del mes. Le dio un aire de calma y elegancia a mi espacio. Volvere a comprar definitivamente.',
  'Cumple al 100% con la descripcion. El material es resistente y el tono verde/marron pastel es hermoso.'
]

# Public CDN placeholder image URLs
PLACEHOLDER_IMAGES = [
  "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png",
  "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-lifestyle-1_large.png",
  "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-1_large.png"
]

products_csv_path = os.path.join(export_dir, 'shopify_400_productos_atelier.csv')
with open(products_csv_path, 'w', newline='', encoding='utf-8') as f:
    writer = csv.writer(f)
    writer.writerow([
        'Handle', 'Title', 'Body (HTML)', 'Vendor', 'Type', 'Tags', 'Published',
        'Option1 Name', 'Option1 Value', 'Variant SKU', 'Variant Grams',
        'Variant Inventory Tracker', 'Variant Inventory Qty', 'Variant Inventory Policy',
        'Variant Fulfillment Service', 'Variant Price', 'Variant Compare At Price',
        'Variant Requires Shipping', 'Variant Taxable', 'Variant Barcode',
        'Image Src', 'Image Position', 'Image Alt Text', 'Gift Card', 'SEO Title', 'SEO Description',
        'Status'
    ])
    
    prod_id = 101
    for cat_id, cat_name, nouns in categories:
        for i in range(1, 21):
            noun = nouns[i % len(nouns)]
            adj = adjectives[(i + prod_id) % len(adjectives)]
            title = noun + ' ' + adj + ' Atelier N' + str(i)
            clean_noun = noun.lower().replace(' ', '-')
            clean_adj = adj.lower()
            handle = cat_id + '-' + clean_noun + '-' + clean_adj + '-' + str(i)
            description = '<p>Exquisito ' + noun.lower() + ' elaborado artesanalmente. Tonos pastel suaves en verde y marron natural para la armonia de tu espacio.</p>'
            price = round(18 + (i * 3.5) + (prod_id % 25), 2)
            sku = 'ATL-' + cat_id[:3].upper() + '-' + str(prod_id)
            img_src = PLACEHOLDER_IMAGES[prod_id % len(PLACEHOLDER_IMAGES)]
            
            writer.writerow([
                handle, title, description, 'Atelier Store', cat_name, cat_name + ', Minimalist, Eco, Atelier', 'TRUE',
                'Title', 'Default Title', sku, 450,
                'shopify', 50, 'deny',
                'manual', price, '',
                'TRUE', 'TRUE', '',
                img_src, 1, title, 'FALSE', title, 'Comprar ' + title + ' en Atelier Minimal Store.',
                'active'
            ])
            prod_id += 1

reviews_csv_path = os.path.join(export_dir, 'shopify_resenas_400_productos.csv')
with open(reviews_csv_path, 'w', newline='', encoding='utf-8') as f:
    writer = csv.writer(f)
    writer.writerow([
        'product_handle', 'rating', 'title', 'body', 'author', 'email', 'created_at', 'status'
    ])
    
    prod_id = 101
    for cat_id, cat_name, nouns in categories:
        for i in range(1, 21):
            noun = nouns[i % len(nouns)]
            adj = adjectives[(i + prod_id) % len(adjectives)]
            clean_noun = noun.lower().replace(' ', '-')
            clean_adj = adj.lower()
            handle = cat_id + '-' + clean_noun + '-' + clean_adj + '-' + str(i)
            
            for r in range(2):
                fn = first_names[(i + r) % len(first_names)]
                ln = last_initials[(i + r*2) % len(last_initials)]
                author = fn + ' ' + ln
                email = fn.lower() + ln.lower().replace('.', '') + '@gmail.com'
                rev_title = review_titles[(i + r) % len(review_titles)]
                rev_body = review_bodies[(i + r) % len(review_bodies)]
                rating = 5 if r == 0 else 4
                
                writer.writerow([
                    handle, rating, rev_title, rev_body, author, email, '2026-02-01 10:00:00', 'published'
                ])
            prod_id += 1

zip_path = os.path.join(base_dir, 'Archivos_Importacion_Shopify_Atelier.zip')
with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
    zipf.write(products_csv_path, os.path.basename(products_csv_path))
    zipf.write(reviews_csv_path, os.path.basename(reviews_csv_path))

print("ZIP y CSVs con Image Src corregidos exitosamente.")
