import React from 'react';
import Header from '@/app/components/header';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header>
        <div className="flex text-gray-900">
          <nav className="flex gap-10 items-center">
            <Link href="/">
              <Image width={122} height={25} src="/icons/logo.svg" alt="logo" />
            </Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/companies">Companies</Link>
          </nav>
        </div>
      </Header>
      <main className="flex flex-col flex-1 p-20 bg-gray-900 text-white justify-center items-center text-center">
        <div>
          <h1 className="text-5xl font-bold">Welcome to Truscape CRM</h1>
          <p className="mt-6 text-3xl">
            Manage your business effectively . <br />
            Streamline processes, enhance productivity, and improve client
            relationships.
          </p>
        </div>
      </main>
    </div>
  );
}
