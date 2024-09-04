import { HomeModule } from './Home/home.module'
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma_config/prisma.service';
import { PesquisaModule } from './pesquisa/pesquisa.module';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [
    HomeModule,
    PesquisaModule,
    ProdutoModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {
}

