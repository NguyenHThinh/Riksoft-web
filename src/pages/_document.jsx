import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="author" content="" />
          <link
            rel="shortcut icon"
            href="/assets/img/favicon.png"
            title="Favicon"
            sizes="16x16"
          />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&display=swap"
          />
          <link rel="stylesheet" href="/assets/css/lib/bootstrap-icons.css" />
          <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
          <link rel="stylesheet" href="/assets/css/lib/all.min.css" />
          <link rel="stylesheet" href="/assets/css/lib/animate.css" />
          <link rel="stylesheet" href="/assets/css/style.css" />

          {/* <link
            rel="stylesheet"
            href="/landing-preview/css/preview-style.css"
          /> */}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
