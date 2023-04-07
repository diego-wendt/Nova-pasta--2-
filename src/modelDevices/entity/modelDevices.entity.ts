import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "model_devices" })
export class ModelDevicesEntity {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  minRange: number;

  @Column()
  maxRange: number;

  @Column()
  barcode: string;

  @Column()
  batch: string;
}
