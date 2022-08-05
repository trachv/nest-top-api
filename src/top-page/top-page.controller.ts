import { Body, Controller, Get, Param, Post, Delete, Patch, HttpCode } from '@nestjs/common';
import { TopPageModule } from './top-page.module';
import { FindTopPageDto } from './dto/find-top-page.dto';

@Controller('top-page')
export class TopPageController {
  @Post('create')
  async create(@Body() dto: Omit<TopPageModule, '_id'>) {
  }

  @Get(':_id')
  async get(@Param('id') id: string) {

  }

  @Delete(':id')
  async delete(@Param('id') id: string) {

  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: TopPageModule) {

  }

  @HttpCode(200)
  @Post()
  async fing(@Body() dto: FindTopPageDto) {

  }
}
