'use client';

import React from 'react';
import CompanyForm from '@/app/components/new-company-form';
import Modal, { ModalProps } from '@/app/components/modal';

export default function NewCompanyFormModal({ onClose, ...rest }: ModalProps) {
  return (
    <Modal {...rest} onClose={onClose}>
      <CompanyForm onSubmit={() => onClose()} />
    </Modal>
  );
}
