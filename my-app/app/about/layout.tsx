import React from 'react'
import styles from './styles.module.css'
export default function AboutLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    <>
    <nav>about navbar
        <main className={styles.main}>
        {children}
        </main>
        </nav>

     </>
  )
}
