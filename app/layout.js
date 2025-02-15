import Header from '@/components/Header';

import './globals.scss';
import ReduxProvider from '@/store/ReduxProvider';
import {GoogleAnalytics} from '@next/third-parties/google'

export const metadata = {
    metadataBase: 'http://ResumeWithV.vercel.app',
    title: 'Free Resume Maker | ResumeWithV',
    description:
        'Our tool helps you create a resume that works with job application systems. It makes sure you look good to employers.',
    openGraph: {
        title: 'ResumeWithV',
        images: `/banner.png`,
        icons: {
            icon: `/favicon.png`,
        },
        type: 'website',
    },
    alternates: {
        canonical: '/',
    },
};


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* Google Tag Manager Script */}
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-H7EC3KF6MS" />
                <Script id="google-analytics">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-H7EC3KF6MS');
                    `}
                </Script>
            </head>
            <body>
                <ReduxProvider>
                    <Header />
                    <div className="mx-auto min-h-[calc(100vh-3rem)]">{children}</div>
                </ReduxProvider>
                <GoogleAnalytics gaId="G-WPXWXJ9MC2" />
                <Analytics />
            </body>
        </html>
    );
}
