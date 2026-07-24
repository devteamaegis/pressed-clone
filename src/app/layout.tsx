import "./globals.css";
// Hand-rebuilt interaction runtime: pressed.com is a Nuxt SPA and none of its
// behaviour survives a static clone (Ditto's motion capture was empty for this site).
import type { ReactNode } from "react";

export const metadata = {
  "title": "Pressed Juicery® - Cold-Pressed Juices, Smoothies & Plant-Based Foods",
  "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  "alternates": {
    "canonical": "https://pressed.com/"
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/39fe44d8281c.png",
        "type": "image/png"
      }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <head>
        <link rel="stylesheet" href="/cloned-interactions.css" />
        <script
          key="cloned-interactions-boot"
          dangerouslySetInnerHTML={{ __html: "(function(){function go(){if(window.__clonedInteractionsLoaded)return;window.__clonedInteractionsLoaded=1;var s=document.createElement('script');s.src='/cloned-interactions.js';document.body.appendChild(s);}if(document.readyState==='complete'){requestAnimationFrame(go);}else{window.addEventListener('load',function(){requestAnimationFrame(go);});}})();" }}
        />
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@id\":\"https://pressed.com/#website\",\"@type\":\"WebSite\",\"name\":\"Pressed Juicery\",\"url\":\"https://pressed.com/\",\"publisher\":{\"@id\":\"https://pressed.com/#identity\"}},{\"@id\":\"https://pressed.com/#webpage\",\"@type\":\"WebPage\",\"url\":\"https://pressed.com/home\",\"about\":{\"@id\":\"https://pressed.com/#identity\"},\"isPartOf\":{\"@id\":\"https://pressed.com/#website\"},\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://pressed.com/\"]}],\"primaryImageOfPage\":{\"@id\":\"https://pressed.com/#logo\"}},{\"@id\":\"https://pressed.com/#identity\",\"name\":\"Pressed Juicery\",\"url\":\"https://pressed.com\",\"@type\":[\"Organization\",\"Brand\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"telephone\":\"+18884458423\",\"contactType\":\"customer service\"},\"sameAs\":[\"https://www.facebook.com/PressedJuicery\",\"https://x.com/PressedJuicery\",\"https://www.instagram.com/pressedjuicery/\",\"https://www.pinterest.com/pressedjuicery/\"]},{\"@id\":\"https://pressed.com/#logo\",\"@type\":\"ImageObject\",\"caption\":\"Pressed Juicery\",\"contentUrl\":\"https://pressed.com/logo.png\",\"url\":\"https://pressed.com/logo.png\"},{\"@id\":\"https://pressed.com/#organization\",\"@type\":\"Organization\",\"logo\":\"https://pressed.com/logo.png\",\"name\":\"Pressed Juicery\",\"url\":\"https://pressed.com\",\"sameAs\":[\"https://www.facebook.com/PressedJuicery\",\"https://x.com/PressedJuicery\",\"https://www.instagram.com/pressedjuicery/\",\"https://www.pinterest.com/pressedjuicery/\"]}]}" }}
        />
      </head>
      <body className="cn0">
        {children}
      </body>
    </html>
  );
}
