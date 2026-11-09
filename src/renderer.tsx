import { jsxRenderer } from 'hono/jsx-renderer'
import './styles.scss'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Kazto Takahashi — Software Engineer. Engineering More Interesting. しごとを、もっと、おもしろく。" />
        <title>kazto.dev</title>
        <link href={import.meta.env.PROD ? "/static/style.css" : "/src/styles.scss"} rel="stylesheet" type="text/css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
})
