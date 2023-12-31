import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Demo } from './demo.entity';
@Injectable()
export class DemoService {
  constructor(
    @InjectRepository(Demo)
    private demoRepository: Repository<Demo>,
  ) {}
  create() {}

  async methodGet() {
    // const demo = await this.demoRepository.findOneBy({
    //   id: 1,
    // });
    const list = await this.demoRepository.count();
    return {
      data: list,
    };
  }
}
