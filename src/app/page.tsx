import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Camarote Viva Bahia</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/camarote" className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600 transition">
          <h2 className="text-2xl font-semibold">Camarote</h2>
          <p>Descubra todos os detalhes do nosso camarote</p>
        </Link>
        <Link href="/como-chegar" className="bg-green-500 text-white p-4 rounded hover:bg-green-600 transition">
          <h2 className="text-2xl font-semibold">Como Chegar</h2>
          <p>Informações de localização e acesso</p>
        </Link>
        <Link href="/programacao" className="bg-purple-500 text-white p-4 rounded hover:bg-purple-600 transition">
          <h2 className="text-2xl font-semibold">Programação</h2>
          <p>Confira nossa programação completa</p>
        </Link>
        <Link href="/sustentabilidade" className="bg-yellow-500 text-white p-4 rounded hover:bg-yellow-600 transition">
          <h2 className="text-2xl font-semibold">Sustentabilidade</h2>
          <p>Nosso compromisso com o meio ambiente</p>
        </Link>
      </div>
    </main>
  );
}
