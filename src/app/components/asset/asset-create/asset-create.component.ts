import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AssetService} from "../../../services/asset/asset.service";

@Component({
  selector: 'app-asset-create',
  templateUrl: './asset-create.component.html',
  styleUrls: ['./asset-create.component.css']
})
export class AssetCreateComponent implements OnInit {
  assetForm!: FormGroup;

  constructor(private fb: FormBuilder, private assetService: AssetService) {}

  ngOnInit(): void {
    this.assetForm = this.fb.group({
      id: [''],
      name: [''],
      code: [''],
      serialNumber: [null],
      category: [null],
      description: [null],
      model: [null],
      purchaseDate: [null],
      purchasePrice: [null],
      residualValue: [null],
      locationId: [null],
      currentLocationId: [''],
      typeId: [null],
      departmentId: [''],
      previousServiceDate: [null],
      nextServiceDate: [null],
      manufacturer: [null],
      manufactureDate: [null],
      usefulLife: [null],
      createLabel: [false]
    });
    // @ts-ignore
    this.assetForm.get('files').setValue([]);
    // @ts-ignore
    this.assetForm.get('userIds').setValue([]);
  }

  onSubmit() {
    if (this.assetForm.valid) {
      const params = this.assetForm.value;
      this.assetService.create(params).subscribe(result => {
        console.log(result);
      });
    }
  }

  onUpdateClick() {
    if (this.assetForm.valid) {
      const params = this.assetForm.value;
      this.assetService.update(params.id, params).subscribe(result => {
        console.log(result);
      });
    }
  }
}
