// frontend/src/app/success/page.tsx
"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeAllItemsFromCart } from "@/redux/features/cart-slice";

export default function SuccessPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Limpia el carrito al llegar a esta página
    dispatch(removeAllItemsFromCart());
  }, [dispatch]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md text-center">
        <svg
          className="mx-auto mb-4 w-16 h-16 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          ¡Pago exitoso!
        </h1>
        <p className="text-gray-600 mb-6">
          Gracias por tu compra. Tu pedido ha sido recibido y estamos procesando tu solicitud.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-black rounded-md shadow hover:bg-blue-700 transition"
        >
          Volver a la tienda
        </Link>
      </div>
    </div>
  );
}
