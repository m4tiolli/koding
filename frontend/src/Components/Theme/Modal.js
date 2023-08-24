import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'
import { extendTheme } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  overlay: {
    bg: 'blackAlpha.200',
  },
  dialog: {
    borderRadius: 'md',
    bg: `purple.100`,
  },
})

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
})

export const theme = extendTheme({
  components: { Modal: modalTheme },
})