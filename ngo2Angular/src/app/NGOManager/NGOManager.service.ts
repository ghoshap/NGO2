/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { NGOManager } from '../com.ngo2';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class NGOManagerService {

  private NAMESPACE = 'com.ngo2.NGOManager';

  constructor(private dataService: DataService<NGOManager>) {
  };

  public getAll(): Observable<NGOManager[]> {
    return this.dataService.getAll(this.NAMESPACE);
  }

  public getparticipant(id: any): Observable<NGOManager> {
    return this.dataService.getSingle(this.NAMESPACE, id);
  }

  public addParticipant(itemToAdd: any): Observable<NGOManager> {
    return this.dataService.add(this.NAMESPACE, itemToAdd);
  }

  public updateParticipant(id: any, itemToUpdate: any): Observable<NGOManager> {
    return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
  }

  public deleteParticipant(id: any): Observable<NGOManager> {
    return this.dataService.delete(this.NAMESPACE, id);
  }

}
