import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { Sparkles, ArrowRight, Trash } from 'lucide-react'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'ghost', 'link', 'success'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Primary Button',
    variant: 'default',
    size: 'lg',
  },
}

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
    size: 'md',
  },
}

export const Success: Story = {
  args: {
    children: 'Success Action',
    variant: 'success',
    size: 'md',
  },
}

export const Ghost: Story = {
  args: {
    children: 'Ghost Action',
    variant: 'ghost',
    size: 'md',
  },
}

export const WithIcon: Story = {
  render: (args) => (
    <Button {...args}>
      <Sparkles className="w-4 h-4 text-white" />
      <span>Generate Prompt</span>
      <ArrowRight className="w-4 h-4 text-white" />
    </Button>
  ),
}

export const Small: Story = {
  args: {
    children: 'Small Button',
    variant: 'default',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    children: 'Large Button',
    variant: 'default',
    size: 'lg',
  },
}
