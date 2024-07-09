import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Tournament } from "./Tournament";
import { Player } from "./Player";

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column()
    name!: string;

  @ManyToOne(() => Tournament, tournament => tournament.teams)
    tournament!: Tournament;

  @OneToMany(() => Player, player => player.team)
    players!: Player[];
}
