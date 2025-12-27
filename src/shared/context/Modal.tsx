'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'
import { Modal } from 'antd'
import styles from './styles.module.scss'

interface ModalState {
  isOpen: boolean
  title?: string | null
  content: React.ReactNode | null
}

interface ModalContextType {
  openModal: (content: React.ReactNode, title?:string) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<ModalState>({
    isOpen: false,
    title:null,
    content: null,
  })

  const openModal = useCallback((content: React.ReactNode,title?:string) => {
    setState({ isOpen: true, content, title })
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
        <h2 className={styles.title}>{state.title}</h2>
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