'use client';

import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

export interface LogoUploaderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  square?: boolean;
}

export default function LogoUploader({
  label,
  placeholder,
  id,
  square,
  ...rest
}: LogoUploaderProps) {
  return (
    <div
      className={clsx(
        'flex mb-3',
        !square && 'gap-10',
        square && 'gap-2 flex-col',
      )}
    >
      {label && <p className="text-base color-gray-900">{label}</p>}
      <label
        htmlFor={id}
        className={clsx(
          'flex flex-col items-center justify-center w-40 h-40 bg-white border border-slate-900 border-dashed cursor-pointer',
          !square && 'w-40 rounded-full',
          square && 'w-full',
        )}
      >
        <Image
          className="mb-1"
          width={48}
          height={48}
          src="/icons/cloud-arrow-down.svg"
          alt="photo upload"
        />
        {placeholder && (
          <p className="text-base text-gray-500">{placeholder}</p>
        )}
        <input
          {...rest}
          id={id}
          type="file"
          accept="image/*"
          className="hidden"
        />
      </label>
    </div>
  );
}