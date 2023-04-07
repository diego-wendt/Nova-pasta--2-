import { ModelDevicesEntity } from "src/modelDevices/entity/modelDevices.entity";
import { PlacesEntity } from "src/places/entity/places.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "devices" })
export class DevicesEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  status: boolean;

  @Column({ unique: true })
  macAddress: string;

  @ManyToOne(() => ModelDevicesEntity, (type) => type.id)
  @JoinColumn({ name: " type_id" })
  type_id: ModelDevicesEntity;

  @ManyToOne(() => PlacesEntity, (place) => place.id)
  @JoinColumn({ name: " place_id" })
  place_id: PlacesEntity;

  @CreateDateColumn({ name: "create_date" })
  createdAt: Date;
}
