/*
 * @Author: Diana Tang
 * @Date: 2025-05-21 16:37:48
 * @LastEditors: Diana Tang
 * @Description: some description
 * @FilePath: /vite-react-ts-tailwind-starter/src/pages/home/index.tsx
 */
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Hero } from '@/components/hero'

export default function Home() {
  const { t } = useTranslation('translation')
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero />
    </>
  )
}
