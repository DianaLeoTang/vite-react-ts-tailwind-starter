/*
 * @Author: Diana Tang
 * @Date: 2025-05-21 17:58:59
 * @LastEditors: Diana Tang
 * @Description: some description
 * @FilePath: /vite-react-ts-tailwind-starter/src/hooks/use-dialog-state.tsx
 */
/**
 * Custom hook for confirm dialog
 * @param initialState string | null
 * @returns A stateful value, and a function to update it.
 * @example const [open, setOpen] = useDialogState<"approve" | "reject">()
 */
import { useState } from 'react'

export default function useDialogState<T extends string | boolean>(initialState: T | null = null) {
  const [open, _setOpen] = useState<T | null>(initialState)

  const setOpen = (str: T | null) => _setOpen((prev) => (prev === str ? null : str))

  return [open, setOpen] as const
}
