import { Story } from "../_types/Story";
import { getAllPosts } from "./PostService";

export const getAllStories = async (): Promise<Story[]> => {
    return getAllPosts();
}