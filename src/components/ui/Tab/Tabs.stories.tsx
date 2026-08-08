import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs'
import * as React from 'react'

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => {
    const [activeTab, setActiveTab] = React.useState('browse')

    return (
      <div className="max-w-md p-4 bg-background">
        <Tabs>
          <TabsList className="gap-6">
            <TabsTrigger isActive={activeTab === 'browse'} onClick={() => setActiveTab('browse')}>
              Browse Prompts
            </TabsTrigger>

            <TabsTrigger
              isActive={activeTab === 'trending'}
              onClick={() => setActiveTab('trending')}
            >
              Trending
            </TabsTrigger>

            <TabsTrigger
              isActive={activeTab === 'favorites'}
              onClick={() => setActiveTab('favorites')}
            >
              Favorites
            </TabsTrigger>
          </TabsList>

          <TabsContent className="p-4 bg-card border border-border rounded-xl mt-4">
            <p className="text-xs text-text-primary font-medium">
              Active Tab Content: <span className="font-bold text-primary">{activeTab}</span>
            </p>
          </TabsContent>
        </Tabs>
      </div>
    )
  },
}
