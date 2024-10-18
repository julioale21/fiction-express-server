import { mockUsers } from 'src/books/mocks/users.mock';
import { LoginUserDto } from './dto/login-user.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from './interfaces';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  login(loginUserDto: LoginUserDto) {
    const { dni, password } = loginUserDto;

    const user = mockUsers.find((user) => user.dni === dni);

    if (!user) throw new UnauthorizedException('User not found');

    if (user.password !== password)
      throw new UnauthorizedException('Wrong password');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...rest } = user;

    return {
      ...rest,
      token: this.getJwtToken({ id: user.id }),
    };
  }

  private getJwtToken(payload: JwtPayload) {
    return this.jwtService.sign(payload);
  }
}
