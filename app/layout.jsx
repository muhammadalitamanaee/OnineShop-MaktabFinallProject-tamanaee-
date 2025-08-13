import "../public/style/app.css";
import Footer from "../src/layouts/Footer";
import Header from "../src/layouts/Header";

export const metadata = {
  title: "My App",
  description: "My App is a...",
  icons: {
    icon: "/icons/favicon.svg",
  },
  title: "onlineShop",
  description: "onlineShop of the electronic gadgets ",
  icons: {
    icon: "/icons/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <title>My App</title>
        <meta name="description" content="onlineShop" />
      </head>
      <body>
        <script type="module" src="/src/main.jsx"></script>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"></script>
        <div id="root">
          {" "}
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
