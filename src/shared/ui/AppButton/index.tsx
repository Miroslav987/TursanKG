import  { FC } from 'react'

import { Button, ButtonProps } from 'antd'

import styles from './styles.module.scss'

interface AppButtonProps extends ButtonProps {
  className?: string
  outlined?:boolean
}

const AppButton: FC<AppButtonProps> = ({ className,outlined, children, ...props }) => {
  return (
    <Button className={`${outlined? styles.outlined:styles.appButton} ${className || ''} `} {...props}>
      {children}
    </Button>
  )
}

export default AppButton
