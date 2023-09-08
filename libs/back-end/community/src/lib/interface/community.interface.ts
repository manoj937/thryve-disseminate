export interface Community {
    communityId: string;
    moderatorId: string;
    title: string;
    description: string;
    moderators: string[];
    tags: string[];
    type: string;
    pendingApprovals: string[];
    createdOn: string;
}
