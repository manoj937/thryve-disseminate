/**
 * Interface for the 'Qa' data
 */
export interface QaEntity {
  qaId: string;
  moderatorId: string;
  communityId: string;
  question: string;
  tags: string[];
  bookmarks: string[];
  detail: string;
  time: string;
  answers: string[];
  selectedAnswers: string[];
}
