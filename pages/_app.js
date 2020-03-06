import React from 'react'
// Next has a special app component
import App, { Container } from 'next/app'
// This is the same head that next has in _document
// why is it here
import Head from 'next/head'
// Theme provider is the context provider for material ui
import { ThemeProvider } from '@material-ui/core/styles'
// Normalize css for material ui
import CssBaseline from '@material-ui/core/CssBaseline'
// Import the theme that was created in src
import theme from '../components/shared/theme'
import Layout from '../components/Layout/Layout'
import { ParallaxProvider } from 'react-scroll-parallax'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@material-ui/core'
import hours from '../js/about/hours'
import ContactDialog from '../components/Dialogs/ContactDialog'
import { DialogContextProvider } from '../components/Dialogs/dialog-context'

// Customize the APP that next creates
export default class MyApp extends App {
  // Happens when the app first mounts
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    // So I don't think I can style without material if it will just remove them here
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }

  render() {
    // App gets passed a Component and pageProps
    const { Component, pageProps } = this.props
    // It is itself a component as well
    // Contains site meta data and renders the passed in component
    // this is a wrapper component which wraps the page passed into a head and theme provider
    // this is just for style reasons.
    return (
      <>
        <Head>
          <title>My page</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <DialogContextProvider>
            <ContactDialog />
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </DialogContextProvider>
        </ThemeProvider>
      </>
    )
  }
}
