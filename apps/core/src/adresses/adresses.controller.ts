import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdressesService } from './adresses.service';
import { CreateAdressDto } from './dto/create-adress.dto';
import { UpdateAdressDto } from './dto/update-adress.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('adresses')
@ApiTags('Adresses')
export class AdressesController {
  constructor(private readonly adressesService: AdressesService) {}

  @Post()
  create(@Body() createAdressDto: CreateAdressDto) {
    return this.adressesService.create(createAdressDto);
  }

  @Get()
  findAll() {
    return this.adressesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adressesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdressDto: UpdateAdressDto) {
    return this.adressesService.update(id, updateAdressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adressesService.remove(id);
  }

  @Get('provider/:provider_id')
  findByProvider(@Param('provider_id') provider_id: string) {
    return this.adressesService.findByProvider(provider_id);
  }
}
