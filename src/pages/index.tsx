import { Box, Stack } from '@mui/material';
import { NextPage } from 'next/types';
import { memo, useState } from 'react';

import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';

const HomePage: NextPage = () => {
  const [mode, setMode] = useState<ThemeMode>('light');
  return (
    <Box bgcolor='background.default' color='text.primary'>
      <NavBar />
      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <SideBar mode={mode} setMode={setMode} />
        <Box>Feed</Box>
        <Box>RightBar</Box>
      </Stack>
    </Box>
  );
};

export default memo(HomePage);
