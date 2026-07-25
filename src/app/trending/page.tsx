export const metadata = {
  title: 'Trending Prompts',
  description: 'Explore the most popular prompts on Lemoriya.',
}

import DashboardLayout from '@/app/(dashboard)/layout'

export default function TrendingPage() {
  return (
    <DashboardLayout>
      <section className="p-4">
        <h1 className="text-2xl font-bold">Trending Prompts</h1>
        {/* TODO: Add trending prompts grid */}
      </section>
    </DashboardLayout>
  )
}
