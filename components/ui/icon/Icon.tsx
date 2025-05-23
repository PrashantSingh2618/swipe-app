import classnames from 'classnames'
import React, { CSSProperties, FC, SVGProps, SyntheticEvent } from 'react'

export interface IconProps {
  iconSvg: FC<SVGProps<SVGElement>>
  onClick?: (event: SyntheticEvent) => void
  className?: string
  style?: CSSProperties
}

const Icon = ({ iconSvg: IconSVG, onClick, className, style }: IconProps) => {
  return (
    <>
      {IconSVG && (
        <IconSVG
          role="presentation"
          className={classnames(
            {
              'cursor--pointer': !!onClick,
            },
            className,
          )}
          onClick={onClick}
          style={style}
        />
      )}
    </>
  )
}

export default Icon
