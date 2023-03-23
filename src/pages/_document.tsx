import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link rel="stylesheet" href="/dist/css/app.css" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/src/js/app.js" async></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
