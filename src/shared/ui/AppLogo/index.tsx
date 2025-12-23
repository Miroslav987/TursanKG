
import Image from 'next/image'

import logo from '@shared/icons/logo.svg?url'

import styles from './styles.module.scss'

const AppLogo = () => {
  return (
    <div className={styles.logo}>
      <Image
      width={136}
      height={75}
      src={logo} alt="Логотип" priority />
    </div>
  )
}

export default AppLogo
