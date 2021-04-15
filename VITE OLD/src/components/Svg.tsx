import React, { SVGProps, ReactSVGElement } from 'react'

export const Svg: React.FC<SVGProps<ReactSVGElement>> = ({
  children,
  ...props
}) => {
  return (
    <svg strokeLinejoin="round" strokeMiterlimit={2} {...props}>
      {children}
    </svg>
  )
}
