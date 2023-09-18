import { Injectable } from '@nestjs/common';
@Injectable()
export class DemoService {
  create() {}

  methodGet() {
    return {
      data: 'demo-module: method:get',
    };
  }
}
