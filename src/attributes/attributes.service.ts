import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateValueDto } from './dto';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { CreateVariantDto } from './dto/create-variant.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';

@Injectable()
export class AttributesService {
    constructor(private prisma: PrismaService) {}

  create(createAttributeDto: CreateAttributeDto) {
    return 'This action adds a new attribute';
  }

  findAll() {
    return `This action returns all attributes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attribute`;
  }

  update(id: number, updateAttributeDto: UpdateAttributeDto) {
    return `This action updates a #${id} attribute`;
  }

  remove(id: number) {
    return `This action removes a #${id} attribute`;
  }

  //Variants Management
  async createVariant(createVariantDto: CreateVariantDto) {
    let newVariant = await this.prisma.productVariants.create({ data: createVariantDto });
    return { success: true, message: 'This action adds a new variant', data: newVariant };
  }

  //Values Management

  async createVariantValue(CreateValueDto: CreateValueDto) {
    let newVariantValue = await this.prisma.productVariantValues.create({ data: CreateValueDto });
    return { success: true, message: 'This action adds a new variant value', data: newVariantValue };
  }
}
