import {
  ApplicationRef,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  Injectable,
  Injector,
} from '@angular/core';
import { Subject } from 'rxjs';
import { EditIssueComponent } from '../components/edit-issue/edit-issue.component';
import { ProjectIssue } from '../models/project-issue';

@Injectable({
  providedIn: 'root',
})
export class IssueEditService {
  componentRef: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  edit(issue: ProjectIssue) {
    this.componentRef = this.componentFactoryResolver
      .resolveComponentFactory(EditIssueComponent)
      .create(this.injector);

    const didConfirm: Subject<boolean> = new Subject<boolean>();
    this.componentRef.instance.submit.subscribe(() => {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = null;
      didConfirm.next(true);
    });
    this.componentRef.instance.cancel.subscribe(() => {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = null;
      didConfirm.next(false);
    });

    this.appRef.attachView(this.componentRef.hostView);

    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.appendChild(domElem);

    return didConfirm;
  }
}
