import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Post()
  async create(@Body() data: any) {
    return this.eventsService.create(data);
  }

  @Get()
  async findAll(@Query('skip') skip = 0, @Query('take') take = 10) {
    return this.eventsService.findAll(skip, take);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.eventsService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: any) {
    return this.eventsService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.eventsService.delete(id);
  }
}
