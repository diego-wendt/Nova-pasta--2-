import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "companies" })
export class CompaniesEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  email: string;

  @Column({})
  password: string;

  @Column()
  salt: string;

  @Column()
  phone: string;

  @Column()
  cnpj: string;

  @Column()
  name: string;

  @Column()
  responsavel: string;
}
