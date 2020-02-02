import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import theme from '../src/theme'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:

  // server gets props app > page > document
  // Get initial props is first
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps

  // server render app > page > document
  // 4. app.render
  // 5. page.render
  // 6. document.render

  // with errors, document getInitial
  // On the server with error:
  // 1. document.getInitialProps

  // app > page > document
  //
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //

  // On the client
  // get initial props
  // 1. app.getInitialProps
  // 2. page.getInitialProps

  // render
  // 3. app.render
  // 4. page.render

  // client doesn't do the document part

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement()
    ]
  }
}
