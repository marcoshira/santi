import { Meta, Story } from '@storybook/react/types-6-0';
import { FormLogin } from '.';
import { FormLoginProps } from '../../shared-types/shared-types';
import { HomePage } from '../../templates/HomePage';
import { Wrapper } from '../Wrapper';

export default {
  title: 'FormLogin',
  component: FormLogin,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ padding: '4rem' }}>
          <Story />
        </div>
      );
    },
  ],
} as Meta<FormLoginProps>;

export const Template: Story<FormLoginProps> = (args) => {
  return <FormLogin {...args} />;
};

export const Mobile: Story<FormLoginProps> = (args) => {
  return (
    <>
      <HomePage />
      <Wrapper>
        <FormLogin {...args} />
      </Wrapper>
    </>
  );
};

export const WithError: Story<FormLoginProps> = (args) => {
  return <FormLogin {...args} />;
};

WithError.args = {
  errorMessage: 'Este é seu erro',
};
