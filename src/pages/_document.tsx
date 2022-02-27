import { extractCritical } from '@emotion/server';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

//@ts-ignore
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    //@ts-ignore
    const initialProps = await Document.getInitialProps(ctx);
    const styles = extractCritical(initialProps.html);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-emotion-css={styles.ids.join(' ')}
            dangerouslySetInnerHTML={{
              __html: styles.css.replace(/!important/g, ''),
            }}
          />
        </>
      ),
    };
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />

          <meta name="theme-color" content="#F8F8F8" />

          {/* NO INDEX */}
          {/* <meta name="robots" content="noindex" />
          <meta name="googlebot" content="noindex" /> */}

          <meta name="description" content="Dashboard administrativa!" />
          <meta property="og:title" content="Dashboard administrativa!" />
          <meta property="og:description" content="Dashboard administrativa!" />
          <meta property="og:url" content="https://abvaq-admin.vercel.app/" />
          <meta property="og:type" content="website" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
