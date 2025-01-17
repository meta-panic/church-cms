"use client";
import React, { ReactNode, useCallback, useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { RegularItem } from "../_components/Navigation";

interface MobileMenuHandlerProps {
  items: RegularItem[];
  renderButtonComponent: ({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) => ReactNode;
}

const MobileMenuHandler: React.FC<MobileMenuHandlerProps> = ({ items, renderButtonComponent }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("do-not-scroll");
    } else {
      document.body.classList.remove("do-not-scroll");
    }

    return () => {
      document.body.classList.remove("do-not-scroll");
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="burgerWrapper">
        <div
          tabIndex={0}
          role="button"
          aria-haspopup="true"
          aria-expanded={isMobileMenuOpen}
          onClick={handleToggleMenu}
          style={{ zIndex: 101 }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleToggleMenu();
            }
          }}
        >
          {renderButtonComponent(
            { isOpen: isMobileMenuOpen, onToggle: handleToggleMenu },
          )}
        </div>
      </div>
      {isMobileMenuOpen && <MobileMenu
        items={items}
        onClose={handleToggleMenu}
        isOpen={isMobileMenuOpen}
      />}
    </>
  );
};

export default MobileMenuHandler;
