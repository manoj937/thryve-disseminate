/**
 * Interface for the 'Community' data
 */
export interface CommunityEntity {
  communityId: string;
  moderatorId: string,
  title: string,
  description: string,
  moderators: string[],
  tags: string[],
  type: string,
  pendingApprovals?: string[];
  createdOn?: string;
}
