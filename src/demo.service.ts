import { Injectable } from '@nestjs/common';

@Injectable()
export class DemoService {
    public doSomething() {
        return "foo"
    }
}
