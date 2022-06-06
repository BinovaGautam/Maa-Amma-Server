import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AttributesService } from './attributes.service';
import { CreateValueDto } from './dto';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { CreateVariantDto } from './dto/create-variant.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';

@Controller('attributes')
export class AttributesController {
  constructor(private readonly attributesService: AttributesService) {}

  @Post()
  create(@Body() createAttributeDto: CreateAttributeDto) {
    return this.attributesService.create(createAttributeDto);
  }

  

  @Get()
  findAll() {
    return this.attributesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attributesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttributeDto: UpdateAttributeDto) {
    return this.attributesService.update(+id, updateAttributeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attributesService.remove(+id);
  }


  //Variants Management
  @Post('variant')
  createVariant(@Body() createVariantDto: CreateVariantDto) {
    return this.attributesService.createVariant(createVariantDto);
  }


  //Variants Value
  @Post('value')
  createVariantValue(@Body() createValueDto: CreateValueDto) {
    return this.attributesService.createVariantMaps(createValueDto);
  }
}
