import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HzFunction } from '../../models/hzfunction';
import { HzFunctionsService } from '../../services/hzfunctions.service';

@Component({
  selector: 'app-hzfunction-form',
  templateUrl: './hzfunction-form.component.html',
  styleUrls: ['./hzfunction-form.component.less'],
})
export class HzfunctionFormComponent implements OnInit {
  existingId: number = null;
  form: FormGroup = new FormGroup({
    function_name: new FormControl('', Validators.required),
    obsolete: new FormControl(false),
    deprecated_to: new FormControl(''),
  });

  @ViewChild('functionName') functionName: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private fnService: HzFunctionsService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((d) => {
      const existing: HzFunction = d['hzFunction'];
      if (existing) {
        this.form.controls['function_name'].setValue(existing.function_name);
        this.form.controls['function_name'].disable();

        this.form.controls['deprecated_to'].setValue(existing.deprecated_to);
        this.form.controls['obsolete'].setValue(existing.obsolete ?? false);

        this.existingId = existing.id;
      } else {
        this.form.reset();
        this.form.controls['obsolete'].setValue(false);
        this.existingId = null;
      }
    });
  }

  ngAfterViewInit() {
    if (!this.existingId) {
      this.functionName.nativeElement.focus();
    }
  }

  submit() {
    if (this.existingId) {
      this.fnService.update(this.existingId, this.form.getRawValue());
    } else {
      this.fnService.create(this.form.value);
    }
  }
}
