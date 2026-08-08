import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card'
import { Button } from '../Button/Button'

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>AI Poster Generator</CardTitle>
        <CardDescription>
          Craft high resolution prompts for midjourney and stable diffusion in seconds.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-text-secondary">
          Select a category, enter your keywords, and copy the formatted prompt.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">
          Cancel
        </Button>
        <Button variant="default" size="sm">
          Generate Prompt
        </Button>
      </CardFooter>
    </Card>
  ),
}
