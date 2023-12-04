import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1701702311287 implements MigrationInterface {
    name = 'Migrations1701702311287'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "message_entity" ("id" SERIAL NOT NULL, "content" character varying NOT NULL, "timeSent" character varying NOT NULL, "userId" integer, CONSTRAINT "PK_45bb3707fbb99a73e831fee41e0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "conversation_entity" ("id" SERIAL NOT NULL, CONSTRAINT "PK_7ec5ee11cb5dcccb1ba428ee1e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_conversations_conversation_entity" ("usersId" integer NOT NULL, "conversationEntityId" integer NOT NULL, CONSTRAINT "PK_6e50ffd6d0a265e5fa50e166cf9" PRIMARY KEY ("usersId", "conversationEntityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e5dbf6722397ef33fec2d3efd9" ON "users_conversations_conversation_entity" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a966e66755ad723d2f8a4c9cd1" ON "users_conversations_conversation_entity" ("conversationEntityId") `);
        await queryRunner.query(`ALTER TABLE "message_entity" ADD CONSTRAINT "FK_577902780af0407f6dc26aef28b" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_conversations_conversation_entity" ADD CONSTRAINT "FK_e5dbf6722397ef33fec2d3efd90" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_conversations_conversation_entity" ADD CONSTRAINT "FK_a966e66755ad723d2f8a4c9cd17" FOREIGN KEY ("conversationEntityId") REFERENCES "conversation_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_conversations_conversation_entity" DROP CONSTRAINT "FK_a966e66755ad723d2f8a4c9cd17"`);
        await queryRunner.query(`ALTER TABLE "users_conversations_conversation_entity" DROP CONSTRAINT "FK_e5dbf6722397ef33fec2d3efd90"`);
        await queryRunner.query(`ALTER TABLE "message_entity" DROP CONSTRAINT "FK_577902780af0407f6dc26aef28b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a966e66755ad723d2f8a4c9cd1"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e5dbf6722397ef33fec2d3efd9"`);
        await queryRunner.query(`DROP TABLE "users_conversations_conversation_entity"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "conversation_entity"`);
        await queryRunner.query(`DROP TABLE "message_entity"`);
    }

}
