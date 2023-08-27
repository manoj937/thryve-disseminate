import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RegisterService } from '../../services/register/register.service';
import { Register } from '../../interface/register.interface';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}
  @Post()
  @UsePipes(ValidationPipe)
  createMember(@Body() registerUser: Register) {
    return this.registerService.addMember(registerUser);
  }
}
