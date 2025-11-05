"use client";
import { useSelector } from "react-redux";
import { selectCartItems } from "@/redux/features/cart-slice";

export default function CheckoutPage() {
  const cartItems = useSelector(selectCartItems);

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      alert("El carrito está vacío");
      return;
    }

    try {
      const res = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cartItems }),
      });

      const data = await res.json();
      console.log("Response from backend:", data);

      if (data.url) {
        window.location.href = data.url; // redirige a Stripe Checkout
      } else {
        alert("No se pudo iniciar el checkout. Revisa la consola.");
      }
    } catch (error) {
      console.error("Error al iniciar checkout:", error);
      alert("Ocurrió un error al iniciar el checkout. Revisa la consola.");
    }
  };


  return (
    <div>
      <h1>Checkout</h1>
      <button onClick={handleCheckout} className="bg-blue-500 text-white px-4 py-2 rounded">
        Pagar ahora
      </button>
    </div>
  );
}
