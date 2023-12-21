import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1702478999407 implements MigrationInterface {
    name = 'Migrations1702478999407'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "conversations" ("id" SERIAL NOT NULL, CONSTRAINT "PK_ee34f4f7ced4ec8681f26bf04ef" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "messages" ("id" SERIAL NOT NULL, "content" character varying NOT NULL, "timeSent" character varying NOT NULL, "conversationId" integer, "userId" integer, CONSTRAINT "PK_18325f38ae6de43878487eff986" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "conversations_users_users" ("conversationsId" integer NOT NULL, "usersId" integer NOT NULL, CONSTRAINT "PK_a63b369afba67e6ef69445136fb" PRIMARY KEY ("conversationsId", "usersId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_35bd28a66d1a6e3eefa386815e" ON "conversations_users_users" ("conversationsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_bc56bf8e5f76472688210e9a99" ON "conversations_users_users" ("usersId") `);
        await queryRunner.query(`CREATE TABLE "users_conversations_conversations" ("usersId" integer NOT NULL, "conversationsId" integer NOT NULL, CONSTRAINT "PK_06222f7698e69ac8a44c0657ca2" PRIMARY KEY ("usersId", "conversationsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d15bfcc977d380bf4be8b83790" ON "users_conversations_conversations" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_857babdeef4a72d6a30a5afac1" ON "users_conversations_conversations" ("conversationsId") `);
        await queryRunner.query(`ALTER TABLE "messages" ADD CONSTRAINT "FK_e5663ce0c730b2de83445e2fd19" FOREIGN KEY ("conversationId") REFERENCES "conversations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "messages" ADD CONSTRAINT "FK_4838cd4fc48a6ff2d4aa01aa646" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "conversations_users_users" ADD CONSTRAINT "FK_35bd28a66d1a6e3eefa386815e8" FOREIGN KEY ("conversationsId") REFERENCES "conversations"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "conversations_users_users" ADD CONSTRAINT "FK_bc56bf8e5f76472688210e9a996" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_conversations_conversations" ADD CONSTRAINT "FK_d15bfcc977d380bf4be8b837903" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_conversations_conversations" ADD CONSTRAINT "FK_857babdeef4a72d6a30a5afac10" FOREIGN KEY ("conversationsId") REFERENCES "conversations"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_conversations_conversations" DROP CONSTRAINT "FK_857babdeef4a72d6a30a5afac10"`);
        await queryRunner.query(`ALTER TABLE "users_conversations_conversations" DROP CONSTRAINT "FK_d15bfcc977d380bf4be8b837903"`);
        await queryRunner.query(`ALTER TABLE "conversations_users_users" DROP CONSTRAINT "FK_bc56bf8e5f76472688210e9a996"`);
        await queryRunner.query(`ALTER TABLE "conversations_users_users" DROP CONSTRAINT "FK_35bd28a66d1a6e3eefa386815e8"`);
        await queryRunner.query(`ALTER TABLE "messages" DROP CONSTRAINT "FK_4838cd4fc48a6ff2d4aa01aa646"`);
        await queryRunner.query(`ALTER TABLE "messages" DROP CONSTRAINT "FK_e5663ce0c730b2de83445e2fd19"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_857babdeef4a72d6a30a5afac1"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d15bfcc977d380bf4be8b83790"`);
        await queryRunner.query(`DROP TABLE "users_conversations_conversations"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bc56bf8e5f76472688210e9a99"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_35bd28a66d1a6e3eefa386815e"`);
        await queryRunner.query(`DROP TABLE "conversations_users_users"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "messages"`);
        await queryRunner.query(`DROP TABLE "conversations"`);
    }

}
