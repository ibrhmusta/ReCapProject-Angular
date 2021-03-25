import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
})
export class StatusComponent implements OnInit {
  constructor(private router: Router, private brandService: BrandService) {
    this.brandService.statusUpdated.subscribe(() => {
      this.currentStatu = { id: 0, name: '' };
    });
  }

  status: any[] = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Only rentable' },
  ];
  currentStatu: any;

  ngOnInit(): void {}

  getCurrentStatuClass(statu: any) {
    if (this.currentStatu == statu) {
      return 'btn list-group-item collapse active text-start';
    } else {
      return 'btn list-group-item collapse text-start';
    }
  }

  doFilter(statu: any) {
    this.currentStatu = statu;
    this.router.navigate([''], {
      queryParams: { statuId: statu.id },
      queryParamsHandling: 'merge',
    });
  }
}
