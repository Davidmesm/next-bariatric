import './globals.css'

export const metadata = {
  title: 'Bariatric',
  description: 'Next Bariatric',
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-mx">
      <body>{children}</body>
    </html>
  )
}
