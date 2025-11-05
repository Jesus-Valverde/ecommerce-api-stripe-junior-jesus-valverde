const express = require('express');
const router = express.Router();
const syscomClient = require('../api-client/syscomClient');

// Módulo de Categorías

// Obtener todas las categorías
router.get('/categories', async (req, res) => {
    try {
        const response = await syscomClient.get('/api/categories');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({
        message: 'Error obteniendo categorías',
        error: error.message,
        });
    }
});

// Obtener una categoría por ID
router.get("/categories/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await syscomClient.get(`/api/categories/${id}`);
        res.json(data);
    } catch (error) {
        console.error("Error al obtener categoría:", error.message);
        res.status(500).json({ message: "Error al obtener categoría", error: error.message });
    }
});

// Módulo de Marcas

// Obtener todas las marcas
router.get("/brands", async (req, res) => {
    try {
        const { data } = await syscomClient.get("/api/brands");
        res.json(data);
    } catch (error) {
        console.error("Error al obtener marcas:", error.message);
        res.status(500).json({ message: "Error al obtener marcas", error: error.message });
    }
});

// Obtener una marca por ID
router.get("/brands/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await syscomClient.get(`/api/brands/${id}`);
        res.json(data);
    } catch (error) {
        console.error("Error al obtener marca:", error.message);
        res.status(500).json({ message: "Error al obtener marca", error: error.message });
    }
});

// Obtener productos por marca
router.get("/brands/:id/products", async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await syscomClient.get(`/api/brands/${id}/products`);
        res.json(data);
    } catch (error) {
        console.error("Error al obtener productos por marca:", error.message);
        res.status(500).json({ message: "Error al obtener productos por marca", error: error.message });
    }
});

// Módulo de Productos

// Buscar productos ( q: texto a buscar, categoria: ID de la categoría)
router.get("/products/search", async (req, res) => {
    try {
        const { q, marca, categoria, page, per_page } = req.query;

        const { data } = await syscomClient.get("/api/products/search", {
        params: { q, marca, categoria, page, per_page },
        });

        res.json(data);
    } catch (error) {
        console.error("Error al buscar productos:", error.message);
        res.status(500).json({ message: "Error al buscar productos", error: error.message });
    }
});

// Obtener producto por SKU
router.get("/products/:sku", async (req, res) => {
    try {
        const { sku } = req.params;
        const { data } = await syscomClient.get(`/api/products/${sku}`);
        res.json(data);
    } catch (error) {
        console.error("Error al obtener producto:", error.message);
        res.status(500).json({ message: "Error al obtener producto", error: error.message });
    }
});

// Obtener productos relacionados
router.get("/products/:sku/related", async (req, res) => {
    try {
        const { sku } = req.params;
        const { data } = await syscomClient.get(`/api/products/${sku}/related`);
        res.json(data);
    } catch (error) {
        console.error("Error al obtener productos relacionados:", error.message);
        res.status(500).json({ message: "Error al obtener productos relacionados", error: error.message });
    }
});

// Obtener accesorios de un producto
router.get("/products/:sku/accessories", async (req, res) => {
    try {
        const { sku } = req.params;
        const { data } = await syscomClient.get(`/api/products/${sku}/accessories`);
        res.json(data);
    } catch (error) {
        console.error("Error al obtener accesorios:", error.message);
        res.status(500).json({ message: "Error al obtener accesorios", error: error.message });
    }
});

module.exports = router;