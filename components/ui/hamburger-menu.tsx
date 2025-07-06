"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "./button"
import { Modal } from "./modal"

interface HamburgerMenuProps {
  children: React.ReactNode
}

export function HamburgerMenu({ children }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={toggleMenu}
        className="border-gray-800 text-gray-400bg-transparent text-xs h-7 px-2"
      >
        {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={closeMenu}
        title="Menu"
      >
        {children}
      </Modal>
    </>
  )
} 