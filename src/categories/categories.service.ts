import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {

  constructor( private prisma: PrismaService){}

  async create(createCategoryDto: CreateCategoryDto ) {
    
    let newCat = await this.prisma.categories.create({data : createCategoryDto });
    return {success : true ,  message: 'This action adds a new category', data: newCat} ;
  }

  async findAll() {
    let allCat = await this.prisma.categories.findMany({
      select: {
        id: true,
        name: true, 
        description: true,
        children : {
          select : {
            id : true,
            name : true,
            description : true,
          }
        }
      }
    });
    return {success : true , data : allCat}
  } 

  async findOne(id: number) {
     let cat = await this.prisma.categories.findUnique({
      where : {
        id : id
      },
      select : {
        id : true,
        name : true,
        description : true,
        children: {
          select: {
            id: true,
            name: true,
            description: true,
            children: {
              select: {
                id: true,
                name: true,
                description: true,
                children: {
                  select: {
                    id: true,
                    name: true,
                    description: true,
                  }
                }
              }
            }
          }
        }
      }
    })
    return {success : true , data : cat, }

  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
     let updatedCat = await this.prisma.categories.update({
      where : {
        id : id
      },
      data : updateCategoryDto
    })
    return {success : true , message : 'Category Updated Successfully', data : updatedCat}
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
