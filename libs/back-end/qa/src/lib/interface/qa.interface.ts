export interface Qa {
    qaId: string;
    moderatorId: string;
    communityId: string;
    question: string;
    tags: string[];
    detail: string;
    bookmarks: string[];
    time: string;
    answers?: string[];
    selectedAnswers?: string[];
}
