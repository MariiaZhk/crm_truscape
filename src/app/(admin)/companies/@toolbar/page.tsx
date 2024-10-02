import React from 'react';
import Toolbar from '@/app/components/toolbar';
import SearchInput from '@/app/components/search-input';
import AddNewCompanyButton from '@/app/components/add-new-company-button';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <Toolbar action={<AddNewCompanyButton />}>
      <SearchInput />
    </Toolbar>
  );
}
