import * as Dialog from '@radix-ui/react-dialog'

import { AnimatePresence, motion } from 'framer-motion'

import * as P from './parts'
import * as S from './styles'
import { X } from '../../../lib/phosphor-react'
import { TechColors } from '@/components/composed/Tech/types'
import { Flex } from '@/styled-system/jsx'

interface GenericItem {
  id: string
  name: string
  src: string
  techColor: TechColors
}

type Items = {
  [key: string]: GenericItem
}

interface AnimatedModalProps<I extends Items> {
  w?: string
  id?: string
  selectedId: string
  items: I
  onClose: () => void
}

export const AnimatedModal = <I extends Items>({
  id,
  items,
  w = '96',
  selectedId,
  onClose,
}: AnimatedModalProps<I>) => {
  return (
    <Dialog.Root open={!!selectedId} onOpenChange={onClose}>
      <AnimatePresence>
        {!!selectedId && (
          <Dialog.Portal>
            <S.Overlay />

            <S.AnimatedDialogContent>
              <P.AnimatedModalContent
                tech={items[selectedId].techColor}
                layoutId={`container-${selectedId}`}
              >
                <Flex direction="column" gap="8" h="full">
                  <S.DialogTitle asChild>
                    <motion.strong
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.15 }}
                    >
                      {items[selectedId].name}
                    </motion.strong>
                  </S.DialogTitle>
                  <Flex h="full" gap="8" align="center">
                    <motion.img
                      layoutId={`image-${selectedId}`}
                      src={items[selectedId].src}
                      alt={items[selectedId].name}
                      width={180}
                      height={180}
                    />
                    <S.DialogDescription asChild>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.15 }}
                      >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Dignissimos exercitationem, dolore, voluptatem
                        sit, fugiat itaque dolor eius quia aspernatur voluptas
                        eaque modi enim magni quidem tempora ea accusamus
                        blanditiis facilis. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Dolorum laudantium autem
                        aut maiores repudiandae quae ullam ex asperiores
                        sapiente eum rem nemo numquam accusamus neque, velit
                        fugit
                      </motion.p>
                    </S.DialogDescription>
                  </Flex>
                </Flex>

                <S.CloseButton aria-label="close">
                  <X />
                </S.CloseButton>
              </P.AnimatedModalContent>
            </S.AnimatedDialogContent>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}
