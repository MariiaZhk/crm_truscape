'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Modal from '@/app/components/modal';
import NewCompanyForm from '@/app/components/new-company-form';

export interface PageProps {}

export default function Page({}: PageProps) {
  const router = useRouter();
  return (
    <Modal show={true} onClose={() => router.back()}>
      <NewCompanyForm onSubmit={console.log} />
    </Modal>
  );
}
