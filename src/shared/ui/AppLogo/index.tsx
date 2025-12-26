
import Image from 'next/image'

import logo from '@shared/icons/logo.svg?url'

import styles from './styles.module.scss'
import Link from 'next/link'

const AppLogo = () => {
  return (
    <Link href={'/'} className={styles.logo}>
      <Image
      width={136}
      height={75}
      src={logo} alt="Логотип" 
      priority />
    </Link>
  )
}

export default AppLogo
