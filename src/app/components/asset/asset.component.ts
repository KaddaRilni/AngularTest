import {Component, OnInit} from '@angular/core';
import {AssetService} from "../../services/asset/asset.service";
import {IAssetLight} from "../../models/asset";
@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.css']
})
export class AssetComponent implements OnInit {
  assets: IAssetLight[] = [];

  constructor(private assetService: AssetService) {}

  ngOnInit(): void {
    this.assetService.listAssets().subscribe(data => {
      this.assets = data;
    });
  }

  public deleteOne(assetId: string) {
    this.assetService.delete(assetId).subscribe(result => {
      console.log(result);
    });
  }
}
