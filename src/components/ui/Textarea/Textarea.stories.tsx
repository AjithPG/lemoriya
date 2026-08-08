import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './Textarea'

const meta: Meta<typeof Textarea> = {
  title: 'UI/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    rows: { control: 'number' },
  },
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: {
    placeholder: 'Paste your raw Midjourney or DALL-E prompt here...',
    rows: 4,
  },
  render: (args) => (
    <div className="max-w-md p-4 bg-background">
      <Textarea {...args} />
    </div>
  ),
}

export const MonospaceCode: Story = {
  args: {
    value:
      'Commercial pizza restaurant advertisement poster, delicious wood-fired pepperoni pizza, steaming hot cheese pull, dark moody studio lighting --ar 3:4',
    rows: 4,
    className: 'font-mono',
  },
  render: (args) => (
    <div className="max-w-md p-4 bg-background">
      <Textarea {...args} />
    </div>
  ),
}
