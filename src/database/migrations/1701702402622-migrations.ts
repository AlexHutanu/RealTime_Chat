import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1701702402622 implements MigrationInterface {
    name = 'Migrations1701702402622'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "messages" ("id" SERIAL NOT NULL, "content" character varying NOT NULL, "timeSent" character varying NOT NULL, "userId" integer, CONSTRAINT "PK_18325f38ae6de43878487eff986" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "conversations" ("id" SERIAL NOT NULL, CONSTRAINT "PK_ee34f4f7ced4ec8681f26bf04ef" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_conversations_conversations" ("usersId" integer NOT NULL, "conversationsId" integer NOT NULL, CONSTRAINT "PK_06222f7698e69ac8a44c0657ca2" PRIMARY KEY ("usersId", "conversationsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d15bfcc977d380bf4be8b83790" ON "users_conversations_conversations" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_857babdeef4a72d6a30a5afac1" ON "users_conversations_conversations" ("conversationsId") `);
        await queryRunner.query(`ALTER TABLE "messages" ADD CONSTRAINT "FK_4838cd4fc48a6ff2d4aa01aa646" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_conversations_conversations" ADD CONSTRAINT "FK_d15bfcc977d380bf4be8b837903" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_conversations_conversations" ADD CONSTRAINT "FK_857babdeef4a72d6a30a5afac10" FOREIGN KEY ("conversationsId") REFERENCES "conversations"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_conversations_conversations" DROP CONSTRAINT "FK_857babdeef4a72d6a30a5afac10"`);
        await queryRunner.query(`ALTER TABLE "users_conversations_conversations" DROP CONSTRAINT "FK_d15bfcc977d380bf4be8b837903"`);
        await queryRunner.query(`ALTER TABLE "messages" DROP CONSTRAINT "FK_4838cd4fc48a6ff2d4aa01aa646"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_857babdeef4a72d6a30a5afac1"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d15bfcc977d380bf4be8b83790"`);
        await queryRunner.query(`DROP TABLE "users_conversations_conversations"`);
        await queryRunner.query(`DROP TABLE "conversations"`);
        await queryRunner.query(`DROP TABLE "messages"`);
    }

}
