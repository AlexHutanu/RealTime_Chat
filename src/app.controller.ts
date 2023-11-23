import { Controller, Get, Post, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get()
  plusOne(@Param() params: any): string {
    let sum:number = parseInt(params.number) + 5
    return `The number is ${sum}`;
  }
}
