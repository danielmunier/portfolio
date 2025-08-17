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
        variant="ghost"
        size="sm"
        onClick={toggleMenu}
        className="border border-gray-800 dark:border-gray-600 bg-gray-900/50 dark:bg-gray-800/50 text-gray-400 dark:text-gray-300 text-xs h-7 px-2 hover:text-white hover:bg-gray-900/50 dark:hover:bg-gray-800/50"
      >
        {isOpen ? <X className="w-4 h-4 cursor-pointer hover:text-white dark:hover:text-white" /> : <Menu className="w-4 h-4 cursor-pointer hover:text-white dark:hover:text-white" />}
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