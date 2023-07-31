'use client'

import { useState } from 'react'
import useBreakpoint from 'use-breakpoint'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'framer-motion'

import { FaGithub } from 'react-icons/fa'

import * as S from './styles'
import Link from 'next/link'

interface CodeProjectProps extends Dialog.DialogProps {
  index: number
  name: string
  description: string
  githubUrl: string
  src: string
}

function calculateDelay(i: number, numOfCols: number) {
  const r = Math.floor(i / numOfCols)
  const c = i % numOfCols
  return r * 0.1 + c * 0.1
}

const BREAKPOINTS = { base: 0, md: 768, lg: 1024 }

const amountOfCols = {
  base: 1,
  md: 2,
  lg: 4,
} as const

export const CodeProject = ({
  name,
  description,
  githubUrl,
  src,
  index,
  ...props
}: CodeProjectProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const { breakpoint } = useBreakpoint(BREAKPOINTS, 'base', false)

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        // TODO - change second param based on breakpoint
        transition={{
          duration: 0.4,
          delay: calculateDelay(index, amountOfCols[breakpoint]),
        }}
      >
        <Dialog.Root
          open={isDialogOpen}
          onOpenChange={(state) => setIsDialogOpen(state)}
          {...props}
        >
          <S.Card onClick={() => setIsDialogOpen(true)}>
            <Image src={src} alt={name} width={480} height={198} />
            <Dialog.Trigger onClick={() => setIsDialogOpen(true)}>
              <S.ProjectName>{name}</S.ProjectName>
            </Dialog.Trigger>
            <S.ProjectDescription>{description}</S.ProjectDescription>

            <S.ProjectFooter>
              <S.IconsContainer>
                <Link
                  href={githubUrl}
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  <FaGithub />
                </Link>
              </S.IconsContainer>
            </S.ProjectFooter>
          </S.Card>
        </Dialog.Root>
      </motion.div>
    </AnimatePresence>
  )
}
