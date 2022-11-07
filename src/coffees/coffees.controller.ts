import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('late')
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `This action return all coffees | Limit: ${limit}, Offset: ${offset}`;
  }

  @Get(':id') // 200 status
  findOne(@Param('id') id: string) {
    return `This action return ${id} coffee`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates ${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Body() body) {
    return `This action removes ${id} coffee`;
  }

  // @Get('late') // if path clear we use only coffees
  // findAll(@Res() response) {
  //   response.status(200).send('This action return all coffees');
  // }
  // @Post() // 201 status
  // create(@Body('hello') body) {
  //   return body;
  // }
}
