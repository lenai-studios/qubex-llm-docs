import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
// import { useRouter } from 'next/router'
import Image from 'next/image'


const config: DocsThemeConfig = {
  primaryHue: {
    dark: 28,
    light: 17,
  },
  project: {
    link: 'https://lenai.us', // Link for the Twitter icon on top nav bar
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 16 16">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
      </svg>
    )
  },
  chat: {
    link: 'https://lenai.us', // Link for discord icon on top nav bar
  },
  docsRepositoryBase: 'https://github.com/lenai-studios/qubex-llm-docs/tree/main', // Repo link for the 'Edit this page'
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href="https://lenai.us" target="_blank">
          Lenai Studios
        </a>
        .
      </span>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s | Qubex LLM Docs' // This is the text shown on the tab name, %s will show the title of current page
    }
  },
  sidebar: {
    defaultMenuCollapseLevel: 1, // Change this number to control the default collapse level
    autoCollapse: true, // If true, automatically collapse inactive folders above defaultMenuCollapseLevel.
    toggleButton: true, // Hide/show sidebar toggle button. Defaults to `false`.
  },
  toc: {
    backToTop: true,
  },
  feedback: {
    content: null,
  },
  head: function useHead() {
    const { title } = useConfig()
    // const { route } = useRouter()
    // const socialCard =
    //   route === '/' || !title
    //     ? 'https://qubexllmdocs.lenai.us/images/og.png'
    //     : `https://qubexllmdocs.lenai.us/api/og?title=${title}`

    return (
      <>
        <meta name="msapplication-TileColor" content="#0d121c" />
        <meta name="theme-color" content="#0d121c" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content="The easiest way to use AI agents, RAG, and more with no code or infrastructure headaches." />
        <meta name="og:description" content="The easiest way to use AI agents, RAG, and more with no code or infrastructure headaches." />
        <meta property="og:url" content="https://qubexllmdocs.lenai.us"></meta>
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:image" content={socialCard} /> */}
        <meta name="twitter:site:domain" content="qubexllmdocs.lenai.us" />
        <meta property="twitter:title" content="Qubex LLM | Your personal AI assistant." />
        <meta property="twitter:description" content="Qubex LLM is the easiest way to use AI agents, RAG, and more with no code or infrastructure headaches." />
        <meta name="twitter:url" content="https://qubexllmdocs.lenai.us" />
        <meta name="og:title" content={title ? title + ' – Qubex LLM Docs' : 'Qubex LLM Docs'} />
        {/* <meta name="og:image" content={socialCard} /> */}
        <meta name="apple-mobile-web-app-title" content="Qubex LLM Docs" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </>
    )
  },
  logo: (
    <>
      <Image src="/images/logo-qubex.svg" width={35} height={35} alt="Qubex LLM Docs" style={{ objectFit: "contain" }} />
      <span style={{ marginLeft: '.4em', fontWeight: 700 }}>
        Qubex LLM Docs
      </span>
    </>
  ),
  // banner: {
  //   dismissible: true,
  //   key: 'v1.6.8-release', // Storage key to keep the banner state (dismissed or not). If you have updated your banner text, you should change the key to make sure the banner is shown again.
  //   text: (
  //     <a href="https://Qubex LLM.com/download" target="_blank">
  //       🚀 Qubex LLM v1.6.8 is live! Update now →
  //     </a>
  //   )
  // }
}

export default config
