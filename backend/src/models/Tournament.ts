
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Team } from "./Team";

@Entity()
export class Tournament {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column()
    name!: string;

  @Column()
    start_date!: Date;

  @Column({ nullable: true })
    end_date!: Date;

  @OneToMany(() => Team, team => team.tournament)
    teams!: Team[];
}
