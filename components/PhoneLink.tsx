'use client';

import { trackPhoneClick } from '@/lib/analytics';

type Props = {
  /** tel: номер, например +996706646264 */
  tel: string;
  source: string;
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
};

export default function PhoneLink({ tel, source, className, ariaLabel, children }: Props) {
  return (
    <a
      href={`tel:${tel}`}
      className={className}
      aria-label={ariaLabel}
      onClick={() => trackPhoneClick(source)}
    >
      {children}
    </a>
  );
}
