import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'auth',
        loadChildren: () => import('@thryve-disseminate/auth/feature').then(m => m.AuthFeatureModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('@thryve-disseminate/dashboard/feature').then(m => m.DashboardFeatureModule)
    },
    {
        path: 'community',
        loadChildren: () => import('@thryve-disseminate/community/feature').then(m => m.CommunityFeatureModule)
    },
    {
        path: 'event',
        loadChildren: () => import('@thryve-disseminate/event/feature').then(m => m.EventFeatureModule)
    },
    {
        path: 'activity',
        loadChildren: () => import('@thryve-disseminate/activity/feature').then(m => m.ActivityFeatureModule)
    },
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    }
  ];
