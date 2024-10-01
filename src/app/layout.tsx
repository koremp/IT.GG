import type { Metadata } from "next";

import Container from "@mui/material/Container";
import RecoilRootWrapper from "./RecoilRootWrapper";

import './globals.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const metadata: Metadata = {
  title: "IT.GG",
  // description: "구인구직 사이트마다 기본 이력서 양식에 맞도록 변형해주는 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-kr">
      <body className='antialiased'>
        <RecoilRootWrapper>
          <Container sx={{ bgcolor: '#cfe8fc', minHeight: '100vh', minWidth: '100vw' }}>
            {children}
          </Container>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
