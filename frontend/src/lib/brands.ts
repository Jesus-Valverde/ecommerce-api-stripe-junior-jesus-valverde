import apiClient from "./apiClient";

export async function getBrands() {
    try {
        const response = await apiClient.get("/internal/brands");
        return response.data;
    } catch (error) {
        console.error("Error al obtener marcas:", error);
        return [];
    }
}