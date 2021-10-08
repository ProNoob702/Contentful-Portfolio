import { Theme, useMediaQuery } from '@material-ui/core';

export const useIsMobileView = (): boolean => {
  return useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
};
