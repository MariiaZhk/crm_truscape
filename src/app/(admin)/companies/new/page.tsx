'use client';

import NewCompanyForm from '@/app/components/new-company-form';
import React from 'react';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div className="py-6 px-10">
      <NewCompanyForm onSubmit={console.log} />
    </div>
  );
}
