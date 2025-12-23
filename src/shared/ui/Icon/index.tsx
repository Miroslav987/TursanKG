'use client'
import { FC, useEffect, useState } from 'react'

import Image, { ImageProps, StaticImageData } from 'next/image'

type SizeKey = 'default' | 'small' | 'large'
interface Size {
  default: number
  small: number
  large: number
}

export type IconType = {
  name: string
  alt?: string
  width?: number
  height?: number
  sizes?: SizeKey | number
  className?: string
} & Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'| 'sizes'>

const listSizes: Size = {
  default: 24,
  small: 17,
  large: 28,
}
const Icon: FC<IconType> = ({ name, sizes = 'default', width, height, alt = '',className="", ...props }) => {
  const [SvgIcon, setSvgIcon] = useState<StaticImageData | null>(null)
  const [loadError, setLoadError] = useState<string | unknown>(null)
  useEffect(() => {
    let isMounted = true

    const loadIcon = async () => {
      try {
        const mod = await import(`@shared/icons/${name}.svg`)

        if (isMounted) {
          setSvgIcon(mod.default.src || mod.default)
        }
      } catch (e: unknown) {
        setLoadError(e)
      }
    }

    loadIcon()

    return () => {
      isMounted = false
    }
  }, [name])

  if (loadError) return <span>🚫</span>
  if (!SvgIcon) return null

const completedSize = typeof sizes === 'number' 
    ? sizes 
    : (listSizes[sizes as SizeKey] ?? listSizes.default)

  return (
    <Image
      src={SvgIcon}
      width={width ?? completedSize}
      height={height ?? completedSize}
      aria-hidden="true"
      alt={alt}
      className={(className ? ` ${className}` : '')}
      unoptimized
      {...props}
    />
  )
}

export default Icon
