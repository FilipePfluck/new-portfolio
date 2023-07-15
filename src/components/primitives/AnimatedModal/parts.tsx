import { MotionProps, motion } from 'framer-motion'

import * as S from './styles'
import { ReactNode } from 'react'
import { TechColors } from '@/components/composed/Tech/types'

type WithChildren<T = {}> = T & { children?: ReactNode }

interface AnimatedModalContentProps extends MotionProps {
  tech: TechColors
}

export const AnimatedModalContent = ({
  layoutId,
  children,
  tech,
  ...props
}: AnimatedModalContentProps) => {
  return (
    <motion.div
      className={S.dialogContentRecipe({ tech })}
      layout
      layoutId={layoutId}
      // transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const AnimatedModalDescription = ({
  children,
}: WithChildren<MotionProps>) => {
  return (
    <motion.p
      className={S.modalDescriptionStyles}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      {children}
    </motion.p>
  )
}
