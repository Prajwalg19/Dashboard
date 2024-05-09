import "@/app/ui/global.css"
import {googleFont} from "@/app/ui/fonts"
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${googleFont.className} antialiased`}>{children}</body>
        </html>
    );
}
