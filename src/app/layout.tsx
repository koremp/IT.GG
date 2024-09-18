import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume Connect",
  description: "구인구직 사이트마다 기본 이력서 양식에 맞도록 변형해주는 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-kr">
      <body className='antialiased'>
        {children}
      </body>
    </html>
  );
}
