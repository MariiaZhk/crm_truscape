import React from 'react';
import Header from '../../components/header';
import Toolbar from '../../components/toolbar';
import AddNewCompanyButton from '../../components/add-new-company-button';
import SearchInput from '../../components/search-input';
import CompanyTable from '../../components/company-table';
import CompanyRow from '../../components/company-row';
import { Status } from '@/app/components/status-label';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddNewCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category={'Products'}
          company={'Costco'}
          status={Status.Pending}
          promotion={true}
          country={'USA'}
          joinedDate={'02.02.2020'}
        ></CompanyRow>
      </CompanyTable>
    </>
  );
}
