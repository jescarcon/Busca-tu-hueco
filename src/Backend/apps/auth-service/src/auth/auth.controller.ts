import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto, RegisterDto } from "./dto/auth.dto";


@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post('register')
    async register(@Body() body: unknown){
        const data = RegisterDto.parse(body)
        return this.authService.register(data);
    }

    @Post('login')
    async login(@Body() body: unknown) {
        const data = LoginDto.parse(body);
        return this.authService.login(data);
    }

}