// Copyright 2020 the Deno authors. All rights reserved. MIT license.

import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

export default class DenoDocDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="/fonts/inter/inter.css" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/icons/apple-touch-icon-180x180.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-XLJ6R162CX"></script>
          <script
              dangerouslySetInnerHTML={{
                __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());

                      gtag('config', 'G-XLJ6R162CX');
                  `,
              }}
            />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
