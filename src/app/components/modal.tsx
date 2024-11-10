'use client';

import { Dialog, Transition, TransitionChild } from '@headlessui/react';
import React, { Fragment } from 'react';

export interface ModalProps {
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
}

export default function Modal({ show, children, onClose }: ModalProps) {
  return (
    <Transition as={Fragment} show={show}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 flex items-center justify-center"
        onClose={onClose}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75"
            onClick={onClose}
          />
        </TransitionChild>

        <TransitionChild
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all p-7 mx-auto sm:my-10 sm:w-full sm:max-w-2xl">
            <button
              className="absolute top-4 right-4 p-2 text-gray-700 transition ease-in-out duration-300 hover:bg-gray-200 hover:text-gray-900 text-xl rounded"
              onClick={onClose}
              aria-label="Close modal"
            >
              &#10005;
            </button>
            {children}
          </div>
        </TransitionChild>
      </Dialog>
    </Transition>
  );
}
