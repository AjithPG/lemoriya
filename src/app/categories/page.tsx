export const metadata = {
  title: 'Trending Prompts',
  description: 'Explore the most popular prompts on Lemoriya.',
}

import DashboardLayout from '@/app/(dashboard)/layout'

export default function CategoriesPage() {
  return (
    <DashboardLayout>
      <section className="p-4">
        <h1 className="text-2xl font-bold">Categories</h1>
        {/* TODO: Add categories grid */}
      </section>
    </DashboardLayout>
  )
}
