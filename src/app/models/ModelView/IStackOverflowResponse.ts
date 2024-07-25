import { IQuestionDetailView } from "./IQuestionDetailView";

export interface IStackOverflowResponse {
    items: IQuestionDetailView[];
    has_more: boolean;
    quota_max: number;
    quota_remaining: number;
}
