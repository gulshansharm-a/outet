import React, { createContext, useContext, useState } from "react";

const PopoverContext = createContext();

export const PopoverProvider = ({ children }) => {
  const [popover, setPopover] = useState({
    show: false,
    position: { x: 0, y: 0 },
    content: null, // Optional: You can pass content dynamically
  });

  const openPopover = (position, content = null) =>
    setPopover({ show: true, position, content });

  const closePopover = () =>
    setPopover({ show: false, position: { x: 0, y: 0 }, content: null });

  return (
    <PopoverContext.Provider value={{ popover, openPopover, closePopover }}>
      {children}
    </PopoverContext.Provider>
  );
};

export const usePopover = () => useContext(PopoverContext);
