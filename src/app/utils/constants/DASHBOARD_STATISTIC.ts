import { StatisticInfo } from '../../pages/statistics-dashboard/models/statistic-info.interface';
import { Subscription } from '../../models/subscription.enum';

export const DASHBOARD_STATISTIC: StatisticInfo = {
  description: 'Lorem ipsum dolor sit amet consectetur. Aenean sodales pellentesque gravida nibh et magna faucibus. Dui commodo ut metus amet egestas habitant viverra. Quisque fusce senectus facilisis non diam leo nulla sem pellentesque. Sit in vel sed cursus metus sit fringilla vestibulum.',
  extra: 'Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing fames egestas tellus dis pretium tempus. Justo nisl nisl lorem lectus id ornare. Rhoncus in egestas in amet porttitor pellentesque sit. Amet gravida integer velit felis. Eu consectetur interdum auctor sed aliquam. Eu pulvinar accumsan sed id. Duis a aliquam eu quisque commodo lectus. Lectus ipsum velit purus viverra vulputate viverra in nunc nulla. Euismod rhoncus mauris urna orci gravida sagittis netus. Amet mus in vel etiam. Interdum habitant congue massa in etiam sit. Commodo nibh viverra lobortis augue lorem quam lorem suspendisse.\n',
  subscriptionType: Subscription.PREMIUM,
  totalUsers: 12450,
  activeUsers: 8920,
  revenue: 145000,
  conversionRate: 3.2,
  lastUpdated: new Date('2024-01-15T10:30:00Z'),
  period: 'Last 30 days',
  hardwareInfo: [
    {
      id: 'hw-001',
      name: 'Server Alpha',
      type: 'Database Server',
      status: 'online',
      usage: 78,
      temperature: 65,
      lastUpdate: new Date('2024-01-15T10:25:00Z'),
      description: 'Lorem ipsum dolor sit amet consectetur. Nunc vitae tortor convallis vitae arcu. Magna.'
    },
    {
      id: 'hw-002',
      name: 'Server Beta',
      type: 'Web Server',
      status: 'online',
      usage: 45,
      temperature: 58,
      lastUpdate: new Date('2024-01-15T10:20:00Z'),
      description: 'Lorem ipsum dolor sit amet consectetur. Quis viverra etiam pellentesque lectus semper in massa purus. Auctor aenean aenean senectus massa dignissim vehicula mi erat purus. Praesent scelerisque aliquet metus sagittis dictum sed sed. Sed venenatis sed urna quam.'
    },
    {
      id: 'hw-003',
      name: 'Server Gamma',
      type: 'Cache Server',
      status: 'maintenance',
      usage: 0,
      temperature: 42,
      lastUpdate: new Date('2024-01-15T09:15:00Z')
    }
  ]
};
