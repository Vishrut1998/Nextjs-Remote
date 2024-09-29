// Importing the components directly
import UserSummary from './pages/admin/user-management/user-summary';
import HomePage from './pages/index';

// Exporting the components with proper TypeScript typing
export const pageMap: Record<string, React.ComponentType> = {
  '/admin/user-management/user-summary': UserSummary,
  '/': HomePage,
  // Add more routes as needed
};

// You can now use `pageMap` in other parts of your application for dynamic routing
