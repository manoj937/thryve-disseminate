/**
 * Interface for the 'Community' data
 */
export interface CommunityEntity {
  communityId: string;
  memberId: string,
  title: string,
  description: string,
  members: string[],
  tags: string[],
  type: string,
  pendingApprovals?: string[];
  createdOn?: string;
}
