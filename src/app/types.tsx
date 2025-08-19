export type UserRole = 'student' | 'tutor' | 'admin';

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    avatar?: string;
}

export interface Course {
    id: string;
    title: string;
    description: string;
    instructor: string;
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    enrolled: number;
    rating: number;
    image: string;
    progress?: number;
}