import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Team } from "./Team";

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column()
    name!: string;

  @ManyToOne(() => Team, team => team.players)
    team!: Team;
}
