import { Component, OnInit, Inject } from '@angular/core';
import { Router } from "@angular/router";

import { CoverageService } from '../shared/coverage.service';
import { TranslateService } from '@ngx-translate/core';
import { Coverage } from './../shared/coverage.model';

@Component({
  selector: 'app-coverages-list',
  templateUrl: './coverages-list.component.html',
  styleUrls: ['./coverages-list.component.scss']
})
export class CoveragesListComponent implements OnInit {

  coberturas: Coverage[];
  constructor(private router: Router
    , private coverageService: CoverageService
  ) {

  }

  ngOnInit() {
    this.listCoverage();
  }

  listCoverage(): void {
    this.coberturas = this.coverageService.getCoverages();
  }


  deleteCoverage(coverage: Coverage): void {
    this.coverageService.deleteCoverage(coverage.id)
      .subscribe(data => {
        this.coberturas = this.coberturas.filter(u => u !== coverage);
      })
  };

  editCoverage(Coverage: Coverage): void {
    window.localStorage.removeItem("editCoverageId");
    window.localStorage.setItem("editCoverageId", Coverage.id.toString());
    this.router.navigate(['edit-Coverage']);
  };

  addCoverage(): void {
    this.router.navigate(['add-Coverage']);
  };
}
