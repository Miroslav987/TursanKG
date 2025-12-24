'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'
import { Modal } from 'antd'
import styles from './styles.module.scss'

interface ModalState {
  isOpen: boolean
  content: React.ReactNode | null
}

interface ModalContextType {
  openModal: (content: React.ReactNode) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<ModalState>({
    isOpen: false,
    content: null,
  })

  const openModal = useCallback((content: React.ReactNode) => {
    setState({ isOpen: true, content })
  }, [])

  const closeModal = useCallback(() => {
    setState((prev) => ({ ...prev, isOpen: false }))
  }, [])

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Modal
        centered
        destroyOnClose 
        footer={null} 
        open={state.isOpen}
        onCancel={closeModal}
        className={styles.modal}
      >
        {state.content}
      </Modal>
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}