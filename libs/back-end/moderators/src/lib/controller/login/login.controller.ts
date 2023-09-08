import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { LoginService } from '../../services/login/login.service';
import { Login, ResetPassword } from '../../interface/login.interface';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createModerator(@Body() loginInfo: Login) {
    return this.loginService.validateModerator(loginInfo);
  }

  @Post('forget-password')
  @UsePipes(ValidationPipe)
  forgerPassword(@Body() loginInfo: Login) {
    return this.loginService.forgetPassword(loginInfo);
  }

  @Post('reset-password')
  @UsePipes(ValidationPipe)
  resetPassword(@Body() loginInfo: ResetPassword) {
    return this.loginService.resetPassword(loginInfo);
  }

}
