"use client";

import { createContext, useContext, useState } from "react";

interface PopupContextValue {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

const PopupContext = createContext<PopupContextValue>({
  isOpen: false,
  openPopup: () => {},
  closePopup: () => {},
});

export function PopupProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PopupContext.Provider
      value={{
        isOpen,
        openPopup: () => setIsOpen(true),
        closePopup: () => setIsOpen(false),
      }}
    >
      {children}
    </PopupContext.Provider>
  );
}

export function usePopup() {
  return useContext(PopupContext);
}
