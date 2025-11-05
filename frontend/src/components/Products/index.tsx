"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Breadcrumb from "../Common/Breadcrumb";

import SingleGridItem from "../Shop/SingleGridItem";
import SingleListItem from "../Shop/SingleListItem";
import CustomSelect from "../ShopWithSidebar/CustomSelect";

import shopData from "../Shop/shopData";
import { getCategories } from "@/lib/categories";
import { getBrands } from "@/lib/brands";
import { getProducts } from "@/lib/products";

const Products = () => {
  const router = useRouter();

  const [productStyle, setProductStyle] = useState("grid");

  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]); 
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  const [perPage, setPerPage] = useState(9); // Valor inicial
  const [currentCount, setCurrentCount] = useState(9); // Productos mostrados actualmente

  const [totalProducts, setTotalProducts] = useState(50); // Total general (puedes actualizarlo con el API)
  const [products, setProducts] = useState([]);

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Parámetros para la URL
    const params = new URLSearchParams();
    const query = searchQuery.trim() || "camara"; // por defecto "camara"
    if (searchQuery) params.append("q", query);
    if (selectedCategory) params.append("category", selectedCategory);
    if (selectedBrand) params.append("brand", selectedBrand);

    // Redirige a la URL
    router.push(`/products?${params.toString()}`);

    // Llamada al API para traer los productos
    const productsData = await getProducts({
      q: query,
      categoryId: selectedCategory,
      brandId: selectedBrand,
    });

    setProducts(productsData);
  };

  
  useEffect(() => {
    async function fetchData() {
      try {
        const [categoriesData, brandsData] = await Promise.all([
          getCategories(),
          getBrands(),
        ]);

        setCategories(categoriesData);
        setBrands(brandsData);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchInitialProducts() {
      const query = searchQuery.trim() || "camara"; // por defecto "camara"
      const productsData = await getProducts({
        q: query,
        categoryId: selectedCategory,
        brandId: selectedBrand,
      });
      setProducts(productsData);
    }

    fetchInitialProducts();
  }, []); // [] asegura que esto solo corra una vez al montar la página


  return (
    <>
      <Breadcrumb
        title={"Explora todos nuestros productos"}
        pages={["tienda", "/", "productos"]}
      />
      <section className="overflow-hidden relative pb-20 pt-5 lg:pt-5 xl:pt-10 bg-[#f3f4f6]">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex gap-7.5">
            {/* // <!-- Content Start --> */}
            <div className="w-full">
              <div className="rounded-lg bg-white shadow-1 pl-3 pr-2.5 py-2.5 mb-6">
                {/* Barra de opciones */}
                <div className="flex items-center justify-between">
                  {/* <!-- top bar left --> */}
                  <div className="flex flex-wrap items-center gap-4">
                    {/* Barra de busqueda */}
                    <div className="w-full max-w-6xl mx-auto">
                      <form
                        onSubmit={handleSubmit}
                        className="flex flex-wrap items-center gap-3 w-full"
                      >
                        {/* Dropdown de categorías */}
                        <div className="min-w-[180px]">
                          <CustomSelect
                            options={categories.map((c) => ({
                              value: c.id,
                              label: c.nombre,
                            }))}
                            placeholder="Categoría"
                            onChange={(value) => setSelectedCategory(value)}
                          />
                        </div>

                        {/* Dropdown de marcas */}
                        <div className="min-w-[180px]">
                          <CustomSelect
                            options={brands.map((b) => ({
                              value: b.id,
                              label: b.nombre,
                            }))}
                            placeholder="Marca"
                            onChange={(value) => setSelectedBrand(value)}
                          />
                        </div>

                        {/* Barra de búsqueda */}
                        <div className="relative flex-1 flex items-center rounded-md border border-gray-3 bg-gray-1 overflow-hidden">
                          <input
                            onChange={(e) => setSearchQuery(e.target.value)}
                            value={searchQuery}
                            type="search"
                            name="search"
                            id="search"
                            placeholder="Buscar productos..."
                            autoComplete="off"
                            className="w-full bg-gray-1 py-2.5 pl-4 pr-10 text-gray-700 placeholder-gray-400 border-0 focus:outline-none"
                          />

                          {/* Botón de búsqueda */}
                          <button
                            id="search-btn"
                            aria-label="Buscar"
                            type="submit"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue transition"
                          >
                            <svg
                              className="fill-current"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M17.2687 15.6656L12.6281 11.8969C14.5406 9.28123 14.3437 5.5406 11.9531 3.1781C10.6875 1.91248 8.99995 1.20935 7.19995 1.20935C5.39995 1.20935 3.71245 1.91248 2.44683 3.1781C-0.168799 5.79373 -0.168799 10.0687 2.44683 12.6844C3.71245 13.95 5.39995 14.6531 7.19995 14.6531C8.91558 14.6531 10.5187 14.0062 11.7843 12.8531L16.4812 16.65C16.5937 16.7344 16.7343 16.7906 16.875 16.7906C17.0718 16.7906 17.2406 16.7062 17.3531 16.5656C17.5781 16.2844 17.55 15.8906 17.2687 15.6656ZM7.19995 13.3875C5.73745 13.3875 4.38745 12.825 3.34683 11.7844C1.20933 9.64685 1.20933 6.18748 3.34683 4.0781C4.38745 3.03748 5.73745 2.47498 7.19995 2.47498C8.66245 2.47498 10.0125 3.03748 11.0531 4.0781C13.1906 6.2156 13.1906 9.67498 11.0531 11.7844C10.0406 12.825 8.66245 13.3875 7.19995 13.3875Z" />
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* <!-- Top bar derecha --> */}
                  <div className="flex items-center gap-3">
                    <label htmlFor="perPage" className="text-gray-600 text-sm whitespace-nowrap">
                      Mostrar por página:
                    </label>

                    <input
                      id="perPage"
                      type="number"
                      min="1"
                      max="100"
                      value={perPage}
                      onChange={(e) => setPerPage(Number(e.target.value))}
                      className="w-20 border border-gray-300 rounded-md px-2 py-1 text-center focus:outline-none focus:border-blue-500 transition"
                    />

                    <p className="text-sm text-gray-500">
                      Mostrando <span className="text-dark font-medium">{currentCount}</span> de{" "}
                      <span className="text-dark font-medium">{totalProducts}</span> productos
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- Products Grid Tab Content Start --> */}
              <div
                className={`${
                  productStyle === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7.5 gap-y-9"
                    : "flex flex-col gap-7.5"
                }`}
              >
                {products.map((item, key) =>
                  productStyle === "grid" ? (
                    <SingleGridItem item={item} key={key} />
                  ) : (
                    <SingleListItem item={item} key={key} />
                  )
                )}
              </div>
              {/* <!-- Products Grid Tab Content End --> */}

              {/* <!-- Products Pagination Start --> */}
              <div className="flex justify-center mt-15">
                <div className="bg-white shadow-1 rounded-md p-2">
                  <ul className="flex items-center">
                    <li>
                      <button
                        id="paginationLeft"
                        aria-label="button for pagination left"
                        type="button"
                        disabled
                        className="flex items-center justify-center w-8 h-9 ease-out duration-200 rounded-[3px disabled:text-gray-4"
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.1782 16.1156C12.0095 16.1156 11.8407 16.0594 11.7282 15.9187L5.37197 9.45C5.11885 9.19687 5.11885 8.80312 5.37197 8.55L11.7282 2.08125C11.9813 1.82812 12.3751 1.82812 12.6282 2.08125C12.8813 2.33437 12.8813 2.72812 12.6282 2.98125L6.72197 9L12.6563 15.0187C12.9095 15.2719 12.9095 15.6656 12.6563 15.9187C12.4876 16.0312 12.347 16.1156 12.1782 16.1156Z"
                            fill=""
                          />
                        </svg>
                      </button>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="flex py-1.5 px-3.5 duration-200 rounded-[3px] bg-blue text-white hover:text-white hover:bg-blue"
                      >
                        1
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="flex py-1.5 px-3.5 duration-200 rounded-[3px] hover:text-white hover:bg-blue"
                      >
                        2
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="flex py-1.5 px-3.5 duration-200 rounded-[3px] hover:text-white hover:bg-blue"
                      >
                        3
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="flex py-1.5 px-3.5 duration-200 rounded-[3px] hover:text-white hover:bg-blue"
                      >
                        4
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="flex py-1.5 px-3.5 duration-200 rounded-[3px] hover:text-white hover:bg-blue"
                      >
                        5
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="flex py-1.5 px-3.5 duration-200 rounded-[3px] hover:text-white hover:bg-blue"
                      >
                        ...
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="flex py-1.5 px-3.5 duration-200 rounded-[3px] hover:text-white hover:bg-blue"
                      >
                        10
                      </a>
                    </li>

                    <li>
                      <button
                        id="paginationLeft"
                        aria-label="button for pagination left"
                        type="button"
                        className="flex items-center justify-center w-8 h-9 ease-out duration-200 rounded-[3px] hover:text-white hover:bg-blue disabled:text-gray-4"
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.82197 16.1156C5.65322 16.1156 5.5126 16.0594 5.37197 15.9469C5.11885 15.6937 5.11885 15.3 5.37197 15.0469L11.2782 9L5.37197 2.98125C5.11885 2.72812 5.11885 2.33437 5.37197 2.08125C5.6251 1.82812 6.01885 1.82812 6.27197 2.08125L12.6282 8.55C12.8813 8.80312 12.8813 9.19687 12.6282 9.45L6.27197 15.9187C6.15947 16.0312 5.99072 16.1156 5.82197 16.1156Z"
                            fill=""
                          />
                        </svg>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- Products Pagination End --> */}
            </div>
            {/* // <!-- Content End --> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
