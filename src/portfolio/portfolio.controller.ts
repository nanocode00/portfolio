import { Controller, Get, Inject, Render } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';

@Controller()
export class PortfolioController {
  constructor(
    @Inject(PortfolioService)
    private readonly portfolioService: PortfolioService,
  ) {}

  @Get()
  @Render('index')
  getPortfolio() {
    const data = this.portfolioService.getPortfolioData();
    return {
      layout: 'layouts/main',
      portfolio: data,
    };
  }
}
// 
