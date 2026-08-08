import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: 'Enter prompt title...',
    disabled: false,
  },
  render: (args) => (
    <div className="max-w-sm p-4 bg-background">
      <Input {...args} />
    </div>
  ),
}

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'you@company.com',
  },
  render: (args) => (
    <div className="max-w-sm p-4 bg-background">
      <Input {...args} />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input field...',
    disabled: true,
  },
  render: (args) => (
    <div className="max-w-sm p-4 bg-background">
      <Input {...args} />
    </div>
  ),
}
