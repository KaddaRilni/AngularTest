import {IFileRef, IIdName, INumberType} from "./common";

export interface IAssetUpdate {
  readonly name: string;
  readonly code: string;
  readonly serialNumber?: string | null;
  readonly category?: IIdName | null;
  readonly description?: string | null;
  readonly model?: string | null;
  readonly purchaseDate: Date | null;
  readonly purchasePrice: number | null;
  readonly residualValue: number | null;
  readonly files: IFileRef[] | [];
  readonly locationId?: string | null;
  readonly currentLocationId: string | null;
  readonly typeId?: string | null;
  readonly departmentId: string | null;

  readonly userIds?: string[] | null;

  readonly previousServiceDate: Date | null;
  readonly nextServiceDate: Date | null;

  readonly manufacturer: string | null;
  readonly manufactureDate: Date | null;

  readonly usefulLife: INumberType | null;

  readonly createLabel: boolean;
}
export interface IAssetLight {
  id: string;
  name: string;
  code: string;
  avatarUrl: string;
  serialNumber: string;
}
