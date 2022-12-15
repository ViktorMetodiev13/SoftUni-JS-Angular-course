import { User } from "./user";

export interface Theme {
    themeName: string;
    subscribers: string[];
    userId: User;
    posts: string[];
}