import { CompaniesEntity } from "src/companies/entity/company.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "places" })
export class PlacesEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @ManyToOne(() => CompaniesEntity, (company) => company.id, { cascade: true })
  @JoinColumn({ name: "company_id" })
  company_id: CompaniesEntity;
}
