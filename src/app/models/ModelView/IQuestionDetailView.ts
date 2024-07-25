import { IOwnerView } from "./IOwnerView";

export interface IQuestionDetailView {
    tags: string[];
    owner: IOwnerView;
    is_answered: boolean;
    view_count: number;
    answer_count: number;
    score: number;
    last_activity_date: number;
    creation_date: number;
    question_id: number;
    content_license: string;
    link: string;
    title: string;
    body: string;
}
