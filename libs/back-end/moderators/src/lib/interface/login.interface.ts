export interface Login {
    email: string;
    password?: string;
    isAdmin?: boolean;
}

export interface ResetPassword {
    moderatorId: string;
    password: string;
    isAdmin: boolean;
}