/*
 * @Author: Diana Tang
 * @Date: 2025-05-21 16:37:48
 * @LastEditors: Diana Tang
 * @Description: some description
 * @FilePath: /vite-react-ts-tailwind-starter/src/app.tsx
 */
import React, { useMemo } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { createRouter } from './router'

export default function App() {
  const queryClient = useMemo(() => new QueryClient({}), [])
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={createRouter()} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </HelmetProvider>
  )
}
