import { Meta, Story } from '@storybook/react/types-6-0';
import { FormRegister } from '.';
import { FormRegisterProps } from '../../shared-types/shared-types';
import { HomePage } from '../../templates/HomePage';
import { RegWrapper } from '../RegWrapper';

export default {
  title: 'FormRegister',
  component: FormRegister,
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
} as Meta<FormRegisterProps>;

export const Mobile: Story<FormRegisterProps> = (args) => {
  return (
    <>
      <HomePage />
      <RegWrapper>
        <FormRegister {...args} />
      </RegWrapper>
    </>
  );
};

export const Template: Story<FormRegisterProps> = (args) => {
  return <FormRegister {...args} />;
};

export const WithError: Story<FormRegisterProps> = (args) => {
  return <FormRegister {...args} />;
};

WithError.args = {
  errorMessage: 'Este é seu erro',
};
