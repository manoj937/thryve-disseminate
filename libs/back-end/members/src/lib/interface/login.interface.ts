export interface Login {
    email: string;
    password?: string;
    isAdmin?: boolean;
}

export interface ResetPassword {
    memberId: string;
    password: string;
    isAdmin: boolean;
}