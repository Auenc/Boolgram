import axios from "axios";
import { Profile } from "../_types/Profile";

export const getAllProfiles = async (): Promise<Profile[]> => {
  const {data} = await axios.get(
    "https://flynn.boolean.careers/exercises/api/boolgram/profiles"
  )
  return data;
};
