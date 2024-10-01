'use client';

import React, { useState } from 'react';
import Button from './button';
import dynamic from 'next/dynamic';

const NewCompanyFormModal = dynamic(() => import('./new-company-form-modal'), {
  ssr: false,
});

export default function AddNewCompanyButton() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Add company</Button>
      <NewCompanyFormModal
        onSubmit={console.log}
        show={show}
        onClose={() => setShow(false)}
      />
    </>
  );
}
