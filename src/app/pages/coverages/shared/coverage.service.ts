
import { Injectable } from '@angular/core';


import { CoverageControllers } from 'src/app/_helpers/controllers/coverage.controllers';
import { Coverage } from 'src/app/pages/coverages/shared/coverage.model';

@Injectable()
export class CoverageService {

  constructor(public coverageControllers: CoverageControllers) { }

  coverage: Coverage[];

  getCoverages()  {
    // this.userControllers.getUsers().subscribe(data => {
    //   this.users =  data.result;
    //   return this.users ; 
    // });    


    return this.coverageControllers.getCoverage();
  }

  getCoverageById(id: number) {
    return this.coverageControllers.getCoverageById(id);
  }

  createCoverage(coverage: Coverage) {
    return this.coverageControllers.createCoverage(coverage);
  }

  updateCoverage(coverage: Coverage) {
    return this.coverageControllers.updateCoverage(coverage);
  }

  deleteCoverage(id: number) {
    return this.coverageControllers.deleteCoverage(id);
  }
}
