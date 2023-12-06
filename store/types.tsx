import type { Client as Appwrite } from "appwrite";

type Todo = {
    $id?: string;
    isComplete: boolean;
    content: string;
};

type User = {
    $id: string;
    email: string;
    name: string;
};

type State = {
    todos: Todo[];
    user?: User;
    appwrite?: Appwrite;
};

export type {
    Todo,
    User,
    State
}