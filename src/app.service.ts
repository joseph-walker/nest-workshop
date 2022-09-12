import { Injectable } from '@nestjs/common';
import { DemoService } from './demo.service';

@Injectable()
export class AppService {
  constructor (
    private readonly demoService: DemoService
  ) {}
  
  getHello(): string {
    return 'Hello World!';
  }
}
