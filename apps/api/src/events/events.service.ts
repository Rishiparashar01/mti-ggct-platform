import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    return this.prisma.event.create({
      data: { ...data, status: 'DRAFT', registeredCount: 0, attendedCount: 0 },
    });
  }

  async findAll(skip = 0, take = 10) {
    return this.prisma.event.findMany({ skip, take, orderBy: { startDate: 'desc' } });
  }

  async findById(id: string) {
    return this.prisma.event.findUnique({ where: { id } });
  }

  async update(id: string, data: any) {
    return this.prisma.event.update({ where: { id }, data });
  }

  async delete(id: string) {
    return this.prisma.event.delete({ where: { id } });
  }
}
