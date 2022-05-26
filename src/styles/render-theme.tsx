import { render } from '@testing-library/react';
import { BlogThemeProvider } from '../contexts/BlogThemeContext';

export const renderTheme = (children) => {
  return render(<BlogThemeProvider>{children}</BlogThemeProvider>);
};
