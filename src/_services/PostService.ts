import axios from "axios";
import { IPost } from "../_types/Post";

export const getAllPosts = async (): Promise<IPost[]> => {
  const {data} = await axios.get(
    "https://flynn.boolean.careers/exercises/api/boolgram/posts"
  );
  return data;
};
