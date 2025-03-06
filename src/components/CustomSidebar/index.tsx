import * as React from 'react';
import {
  BookOpen,
  Bot,
  SquareTerminal,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';

import CustomSidebarContent from './SidebarContent';

const data = {
  navMain: [
    {
      title: 'Dashboard',
      url: '/',
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: 'Leave Requests',
      url: '/leave-requests',
      icon: Bot,
    },
    {
      title: 'Holiday Calendar',
      url: '/holiday-calendar',
      icon: BookOpen,
    },
  ],
};

export function CustomSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* Attendance Tracker */}
      </SidebarHeader>
      <SidebarContent>
        <CustomSidebarContent items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
