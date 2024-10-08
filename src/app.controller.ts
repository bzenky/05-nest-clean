import { Controller, Get, Post } from '@nestjs/common'
import { AppService } from './app.service'
import { PrismaService } from './prisma/prisma.service'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private prisma: PrismaService,
  ) {}

  @Get()
  index(): string {
    return this.appService.getHello()
  }

  @Post()
  async store() {
    return await this.prisma.user.findMany()
  }
}
