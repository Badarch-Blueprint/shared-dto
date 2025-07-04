export class RegisterUserDto {
    readonly username!: string;
    readonly email!: string;
    readonly password!: string;
}

export class LoginUserDto {
    readonly username!: string;
    readonly password!: string;
}

export class AdminLoginUserDto {
    readonly username!: string;
    readonly password!: string;
}