import { ReactNode } from 'react';

type WindowPropsType = {
  children: JSX.Element[] | ReactNode | string | boolean
};

export default function Window({ children }: WindowPropsType) {
  return (
    <div
      className="mockup-window border bg-base-300
    h-[90vh] max-w-[1440px] mx-auto p-10"
    >
      <div className="flex-col justify-center px-4 py-16 border-t border-base-300">
        {children}
      </div>
    </div>
  );
}
