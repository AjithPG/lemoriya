import { DashboardProvider } from '@/context/DashboardContext';
import { AppShell } from '@/components/layout/AppShell';
import { Sidebar } from '@/components/layout/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardProvider>
      <AppShell sidebar={<Sidebar />}>
        {children}
      </AppShell>
    </DashboardProvider>
  );
}

