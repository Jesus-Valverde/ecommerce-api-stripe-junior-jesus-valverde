import apiClient from "./apiClient";

export async function getProducts({
    q = "camara",
    categoryId,
    brandId,
    }: {
    q?: string;
    categoryId?: number | string;
    brandId?: number | string;
    }) {
    try {
        const params: Record<string, any> = { q };

        if (categoryId) params.categoria = categoryId;
        if (brandId) params.marca = brandId;

        const response = await apiClient.get("/internal/products/search", {
        params,
        });

        // Validar estructura del backend
        if (!response.data || !Array.isArray(response.data.productos)) {
        console.warn("Formato de respuesta inesperado:", response.data);
        return [];
        }

        // Adaptar los datos del backend a tu tipo Product
        return response.data.productos.map((p: any) => ({
        id: p.producto_id,
        title: p.titulo,
        brand: p.marca,
        price: parseFloat(p.precios.precio_lista) || 0,
        discountedPrice: parseFloat(p.precios.precio_descuento) || 0,
        imgs: {
            previews: [p.img_portada || "/images/placeholder-product.png"],
        },
        reviews: Math.floor(Math.random() * 100), // Si no hay reviews, inventamos un número
        link: p.link_privado,
        }));
    } catch (error) {
        console.error("Error al buscar productos:", error);
        return [];
    }
}
