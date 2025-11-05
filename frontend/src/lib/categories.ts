import apiClient from "./apiClient";

export async function getCategories() {
    try {
        const response = await apiClient.get("/internal/categories");
        return response.data;
    } catch (error) {
        console.error("Error al obtener categorías:", error);
        return [];
    }
}