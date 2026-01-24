"use client";

import Script from 'next/script';

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* Ezoic Privacy/Consent Management Scripts - Must load first */}
            <Script
                src="https://cmp.gatekeeperconsent.com/min.js"
                strategy="beforeInteractive"
                data-cfasync="false"
            />
            <Script
                src="https://the.gatekeeperconsent.com/cmp.min.js"
                strategy="beforeInteractive"
                data-cfasync="false"
            />

            {/* Ezoic Header Script */}
            <Script
                src="//www.ezojs.com/ezoic/sa.min.js"
                strategy="afterInteractive"
            />
            <Script id="ezoic-init" strategy="afterInteractive">
                {`
          window.ezstandalone = window.ezstandalone || {};
          ezstandalone.cmd = ezstandalone.cmd || [];
        `}
            </Script>

            {children}
        </>
    );
}
