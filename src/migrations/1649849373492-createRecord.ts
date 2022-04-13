import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createRecord1649849373492 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'record',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'remark',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'time',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'type',
            type: 'enum',
            enum: ['-', '+'],
            isNullable: false,
          },
          {
            name: 'amount',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'current_timestamp',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'current_timestamp',
          },
          {
            name: 'userId',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'categoryId',
            type: 'int',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('record');
  }
}