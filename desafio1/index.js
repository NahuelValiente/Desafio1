class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    // Verificar si el código del producto ya existe
    const existingProduct = this.products.find(product => product.code === code);
    if (existingProduct) {
      throw new Error("El código del producto ya existe.");
    }

    // Generar un ID único para el producto
    const id = Math.floor(Math.random() * 100000);

    // Crear un objeto producto con los datos recibidos
    const newProduct = {
      id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    };

    // Agregar el objeto producto al arreglo de productos
    this.products.push(newProduct);

    // Devolver el objeto producto creado
    return newProduct;
  }

  getProductById(id) {
    // Buscar el producto por ID
    const product = this.products.find(product => product.id === id);

    // Si el producto no existe, lanzar un error
    if (!product) {
      throw new Error("El producto no existe.");
    }

    // Devolver el producto encontrado
    return product;
  }
}

// Crear una instancia de la clase ProductManager
const productManager = new ProductManager();

// Llamar al método getProducts, debe devolver un arreglo vacío
console.log(productManager.getProducts()); // []

// Agregar un producto con los datos especificados
const newProduct = productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);

// Verificar que el producto se agregó satisfactoriamente
console.log(productManager.getProducts()); // [ { id: 12345, title: 'producto prueba', description: 'Este es un producto prueba', price: 200, thumbnail: 'Sin imagen', code: 'abc123', stock: 25 } ]

// Intentar agregar el mismo producto de nuevo, debe lanzar un error
try {
  productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
} catch (error) {
  console.error(error.message); // "El código del producto ya existe."
}

// Obtener el producto recién creado por ID
console.log(productManager.getProductById(newProduct.id)); // { id: 12345, title: 'producto prueba', description: 'Este es un producto prueba', price: 200, thumbnail: 'Sin imagen', code: 'abc123', stock: 25 }

// Intentar obtener un producto que no existe, debe lanzar un error
try {
  productManager.getProductById(99999);
} catch (error) {
  console.error(error.message); // "El producto no existe."
}
