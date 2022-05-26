import { useContext, useEffect, useState } from 'react';
import { BlogThemeContext } from '../../contexts/BlogThemeContext';
import * as Styled from './styles';
import { Brightness3 as Moon } from '@styled-icons/material-outlined/Brightness3';
import { Brightness5 as Sun } from '@styled-icons/material-outlined/Brightness5';

export const ToggleTheme = () => {
  const { setTheme } = useContext(BlogThemeContext);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (!localTheme) return;
    const newTheme = JSON.parse(localTheme);

    if (newTheme.name === 'inverted') {
      setChecked(true);
    }
  }, []);

  useEffect(() => {
    setTheme(checked ? 'inverted' : 'default');
  }, [checked, setTheme]);

  const handleChange = () => {
    setChecked((s) => !s);
    setTheme(checked ? 'inverted' : 'default');
  };

  return (
    <Styled.Wrapper>
      <Styled.Label>
        Toggle light and dark modes
        <Styled.Input
          type="checkbox"
          value="Dark mode active"
          onClick={handleChange}
          defaultChecked={checked}
        />
        <Styled.Slider>
          <Styled.IconContainer
            defaultChecked={checked}
            aria-label="Icon Container"
          >
            {checked ? <Sun /> : <Moon />}
          </Styled.IconContainer>
        </Styled.Slider>
      </Styled.Label>
    </Styled.Wrapper>
  );
};
