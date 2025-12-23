import  { FC } from 'react'

import { Button, ButtonProps } from 'antd'

import styles from './styles.module.scss'

interface AppButtonProps extends ButtonProps {
  className?: string
}

const AppButton: FC<AppButtonProps> = ({ className, children, ...props }) => {
  return (
    <Button className={`${styles.appButton} ${className || ''}`} {...props}>
      {children}
    </Button>
  )
}

export default AppButton
