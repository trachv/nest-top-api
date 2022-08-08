import { Controller, Post, Body, Delete, Param, Get, HttpException, HttpStatus, UsePipes, ValidationPipe  } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewService } from './review.service';
import { REVIEW_NOT_FOUND } from './review.constants';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewServise: ReviewService) {

  }

  @UsePipes(new ValidationPipe())
  @Post('create')
  async create(@Body() dto: CreateReviewDto) {
    return this.reviewServise.create(dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletedDoc = await this.reviewServise.delete(id);
    if (!deletedDoc) {
      throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
  }

  @Get('byProduct/:productId')
  async getByProduct(@Param('productId') productId: string) {
    return this.reviewServise.findByProductId(productId);
  }

}
