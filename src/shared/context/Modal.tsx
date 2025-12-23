'use client'

import React, { createContext, useContext, useState } from 'react'

import { Modal } from 'antd'

import styles from './styles.module.scss'

type ModalContextType = {
  openModal: (content: React.ReactNode, search?: boolean) => void
  closeModal: () => void
}

type ModalProviderProps = {
  children: React.ReactNode
}

interface initialStateType {
  isOpen: boolean
  content: React.ReactNode | null
}

const SnackbarContext = createContext<ModalContextType | undefined>(undefined)

const initialState = {
  isOpen: false,
  content: null,
}

const ModalProvider = (props: ModalProviderProps) => {
  const [state, setState] = useState<initialStateType>(initialState)

  const openModal = (content: React.ReactNode) => {
    setState({ isOpen: true, content })
  }

  const closeModal = () => {
    setState((prev) => ({ ...prev, isOpen: false }))
  }

  return (
    <SnackbarContext.Provider value={{ openModal, closeModal }}>
      <Modal footer={true} className={styles.modal} centered open={state.isOpen} onOk={closeModal} onCancel={closeModal}>
        {state.content}
      </Modal>
      {props.children}
    </SnackbarContext.Provider>
  )
}

export default ModalProvider

export const useModal = () => {
  const context = useContext(SnackbarContext)
  if (!context) {
    throw new Error('useSnackbar must be used within a ModalProvider')
  }
  return context
}
