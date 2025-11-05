"use client";

export default function CancelPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100">
      <h1 className="text-3xl font-bold mb-4">Pago cancelado ❌</h1>
      <p className="text-lg mb-6">No se ha completado el pago. Puedes intentar de nuevo.</p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Volver a la tienda
      </a>
    </div>
  );
}
