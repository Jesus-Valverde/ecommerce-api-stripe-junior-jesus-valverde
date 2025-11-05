import apiClient from "./apiClient";

export interface Product {
    sku: string;
    title: string;
    brand?: string;
    model?: string;
    price: number;
    discountedPrice: number;
    stock: number;
    description: string;
    imgs: {
        previews?: string[];
        thumbnails?: string[];
    };
    reviews?: number;
    related?: string[];
    accessories?: string[];
    link?: string;
}

export async function getProducto(sku: string): Promise<Product | null> {
    try {
        const response = await apiClient.get(`/internal/products/${sku}`);

        if (!response.data) {
        console.warn("Formato de respuesta inesperado:", response.data);
        return null;
        }

        const p = response.data;

        return {
        sku: p.producto_id,
        title: p.titulo,
        brand: p.marca,
        model: p.modelo,
        price: parseFloat(p.precios.precio_lista) || 0,
        discountedPrice: parseFloat(p.precios.precio_descuento) || 0,
        stock: p.total_existencia || 0,
        description: p.sat_description || "",
        imgs: {
            previews: [p.img_portada || "/images/products/imagen_no_disponible.jpg"],
            thumbnails: p.img_thumbnails || [],
        },
        reviews: Math.floor(Math.random() * 100), // si no hay reviews reales
        related: p.related || [],
        accessories: p.accessories || [],
        link: p.link_privado,
        };
    } catch (error) {
        console.error("Error al obtener producto:", error);
        return null;
    }
}
