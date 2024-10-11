import Box from '@mui/material/Box';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

import { theme } from '@/theme/theme';

export const Frame = ({ children }: { children: React.ReactNode}) => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        {children}
      </Box>
    </ThemeProvider>
  );
};