export interface IPost {
    profile_picture: string;
    profile_name: string;
    profile_fullname: string;
    post_image: string;
    post_text: string;
    date: PostDate;
    comments: Comment[];
    likes: Like[];
}

export interface PostDate {
    date: string;
    timezone_type: number;
    timezone: string;
}

export interface Comment {
    username: string;
    text: string;
}

export interface Like {
    username: string;
    profile_picture: string;
}
