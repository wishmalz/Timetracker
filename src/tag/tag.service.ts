import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
  findAll(): string[] {
    return ['test', 'code', 'refactoring', 'chore'];
  }
}
