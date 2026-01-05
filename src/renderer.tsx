import { jsxRenderer } from 'hono/jsx-renderer'
import './styles.scss'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html>
      <head>
        <link href={import.meta.env.PROD ? "/static/style.css" : "/src/styles.scss"} rel="stylesheet" type="text/css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Knewave&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
})
