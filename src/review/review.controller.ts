import { Controller, Post, Body, Delete, Param, Get, HttpException, HttpStatus, UsePipes, ValidationPipe, UseGuards  } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewService } from './review.service';
import { REVIEW_NOT_FOUND } from './review.constants';
import { JwtAuthGuard } from './../auth/guards/jwt.guard';
import { IdValidationPipe } from './../pipes/ad-validation.pipe';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewServise: ReviewService) {

  }

  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Post('create')
  async create(@Body() dto: CreateReviewDto) {
    return this.reviewServise.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id',IdValidationPipe) id: string) {
    const deletedDoc = await this.reviewServise.delete(id);
    if (!deletedDoc) {
      throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
  }

  @Get('byProduct/:productId')
  async getByProduct(@Param('productId',IdValidationPipe) productId: string) {
    return this.reviewServise.findByProductId(productId);
  }

}
