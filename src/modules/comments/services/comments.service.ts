import httpClient from "@/modules/global/adapters/http-adapter/http.adapter";
import { Comment } from "../interfaces/comments.interface";

export const getAllCommentsService = async (): Promise<Comment[]> => {
	return httpClient("comments", { method: "get" });
};