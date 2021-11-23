import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  bsModalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  show(component: any, state?: any, size: 'modal-lg' | 'modal-md' | 'modal-sm' | 'modal-xl' = 'modal-lg'): void {
    const initialState: ModalOptions = {
      initialState: state,
      class: size,
    };
    this.bsModalRef = this.modalService.show(component, initialState);
  }
}
