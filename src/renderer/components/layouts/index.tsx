import React, { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="career-section">
      <div className="min-h-screen min-w-screen flex flex-col justify-between bg-bg dark:bg-dark-bg">
        <div className="flex flex-col items-center">
          <div className="fixed sm:relative z-50 bg-bg dark:bg-dark-bg" />
          <div className="max-w-[1200px] full p-6 dark:text-white trans pt-20 sm:pt-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
