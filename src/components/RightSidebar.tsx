import React from 'react';
import {
  Drawer,
  Typography,
  Stack,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import type { NotificationData, ActivityData, ContactData } from '../types/dashboard';
import { formatTimeAgo } from '../utils/formatters';

const DRAWER_WIDTH = 280;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: DRAWER_WIDTH,
    boxSizing: 'border-box',
    borderLeft: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.default,
    position: 'fixed',
    right: 0,
    height: '100vh',
    zIndex: 1200
  }
}));

const SectionContainer = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(3, 3, 2, 3),
  gap: theme.spacing(3)
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 600,
  color: theme.palette.text.primary
}));

const NotificationIcon = styled('div')<{ type: string }>(({ theme, type }) => ({
  width: 13,
  height: 14,
  borderRadius: 2,
  backgroundColor: type === 'bug' ? '#1c1c1c' : 
                   type === 'user' ? '#1c1c1c' : '#1c1c1c',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const ActivityStrip = styled('div')({
  width: 1,
  height: 176,
  background: 'linear-gradient(to bottom, #e5ecf6, transparent)',
  position: 'absolute',
  left: 36,
  top: 60
});

interface RightSidebarProps {
  notifications: NotificationData[];
  activities: ActivityData[];
  contacts: ContactData[];
}

const RightSidebar: React.FC<RightSidebarProps> = ({ notifications, activities, contacts }) => {
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'bug':
        return <BugReportOutlinedIcon sx={{ fontSize: 8, color: 'white' }} />;
      case 'user':
        return <PermIdentityOutlinedIcon sx={{ fontSize: 8, color: 'white' }} />;
      default:
        return <BugReportOutlinedIcon sx={{ fontSize: 8, color: 'white' }} />;
    }
  };

  return (
    <StyledDrawer variant="permanent" anchor="right">
      <SectionContainer>
        <Stack spacing={2}>
          <SectionTitle>Notifications</SectionTitle>
          <List sx={{ p: 0 }}>
            {notifications.map((notification) => (
              <ListItem key={notification.id} sx={{ px: 0, py: 1, alignItems: 'flex-start' }}>
                <ListItemAvatar sx={{ minWidth: 32 }}>
                  <NotificationIcon type={notification.type}>
                    {getNotificationIcon(notification.type)}
                  </NotificationIcon>
                </ListItemAvatar>
                <ListItemText
                  primary={notification.message}
                  secondary={formatTimeAgo(notification.timestamp)}
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: 'text.primary'
                  }}
                  secondaryTypographyProps={{
                    fontSize: 12,
                    fontWeight: 400,
                    color: 'text.secondary'
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Stack>

        <Stack spacing={2} sx={{ position: 'relative' }}>
          <SectionTitle>Activities</SectionTitle>
          <ActivityStrip />
          <List sx={{ p: 0 }}>
            {activities.map((activity) => (
              <ListItem key={activity.id} sx={{ px: 0, py: 1, alignItems: 'flex-start' }}>
                <ListItemAvatar sx={{ minWidth: 32 }}>
                  <Avatar 
                    src={activity.user} 
                    sx={{ width: 24, height: 24 }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={activity.message}
                  secondary={formatTimeAgo(activity.timestamp)}
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: 'text.primary'
                  }}
                  secondaryTypographyProps={{
                    fontSize: 12,
                    fontWeight: 400,
                    color: 'text.secondary'
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Stack>

        <Stack spacing={2}>
          <SectionTitle>Contacts</SectionTitle>
          <List sx={{ p: 0 }}>
            {contacts.map((contact) => (
              <ListItem key={contact.id} sx={{ px: 0, py: 0.5 }}>
                <ListItemAvatar sx={{ minWidth: 32 }}>
                  <Avatar 
                    src={contact.avatar} 
                    sx={{ width: 24, height: 24 }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={contact.name}
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: 'text.primary'
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Stack>
      </SectionContainer>
    </StyledDrawer>
  );
};

export default RightSidebar;