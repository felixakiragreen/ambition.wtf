import React, { useState, useEffect } from 'react'
import { styled } from '../ui'

import { motion } from 'framer-motion'

import { Box } from './Box'
import { Text } from './Text'

type Props = {
  label: string
  title: string
}

export const Popup: React.FC<Props> = ({ label, title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Text
        mdx="a"
        onClick={() => {
          setIsOpen(true)
        }}
      >
        {label}
      </Text>
      {isOpen && (
        <motion.div
          drag
          dragElastic={false}
          dragMomentum={false}
          style={{ position: 'absolute' }}
        >
          <PopupWindow title={title} onClose={() => setIsOpen(false)}>
            {children}
          </PopupWindow>
        </motion.div>
      )}
    </>
  )
}

/* 

several components

styled popup



*/

export const StyledPopup = styled('div', {
  fontFamily: '$main',
  backgroundColor: '$white',
  color: '$felixgreen',
  boxShadow: '$lg, $popup',
  display: 'inline-block',
})

type WindowProps = {
  title: String
  onClose: () => void
}

export const PopupWindow: React.FC<WindowProps> = ({
  title,
  onClose,
  children,
}) => {
  return (
    <StyledPopup>
      <Box
        align="centerX"
        css={{
          backgroundColor: '$felixgreen',
          color: '$black',
          pl: '$3',
          gap: '$4',
          cursor: 'pointer',
        }}
      >
        <Text
          css={{
            fontFamily: '$mono',
            fontWeight: '$bold',
            fontSize: '$lg',
            lineHeight: '$xs',
          }}
        >
          {title}
        </Text>
        <Box
          align="center"
          css={{
            size: '$12',
            '&:hover': {
              backgroundColor: '$indigo',
            },
          }}
          onClick={() => onClose()}
        >
          ❌
        </Box>
      </Box>
      {children}
    </StyledPopup>
  )
}
