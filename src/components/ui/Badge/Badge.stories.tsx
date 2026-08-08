import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'outline',
        'secondary',
        'master',
        'photography',
        'anime',
        '3d render',
        'ui / ux',
        'sci-fi',
        'nature',
        'architecture',
      ],
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    children: 'DEFAULT BADGE',
    variant: 'default',
  },
}

export const Master: Story = {
  args: {
    children: 'MASTER PROMPTER',
    variant: 'master',
  },
}

export const CategoryPhotography: Story = {
  args: {
    children: 'PHOTOGRAPHY',
    variant: 'photography',
  },
}

export const CategoryAnime: Story = {
  args: {
    children: 'ANIME',
    variant: 'anime',
  },
}

export const Category3DRender: Story = {
  args: {
    children: '3D RENDER',
    variant: '3d render',
  },
}

export const CategorySciFi: Story = {
  args: {
    children: 'SCI-FI',
    variant: 'sci-fi',
  },
}
