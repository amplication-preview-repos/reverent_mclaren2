/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ContentTask as PrismaContentTask } from "@prisma/client";

export class ContentTaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ContentTaskCountArgs, "select">
  ): Promise<number> {
    return this.prisma.contentTask.count(args);
  }

  async contentTasks(
    args: Prisma.ContentTaskFindManyArgs
  ): Promise<PrismaContentTask[]> {
    return this.prisma.contentTask.findMany(args);
  }
  async contentTask(
    args: Prisma.ContentTaskFindUniqueArgs
  ): Promise<PrismaContentTask | null> {
    return this.prisma.contentTask.findUnique(args);
  }
  async createContentTask(
    args: Prisma.ContentTaskCreateArgs
  ): Promise<PrismaContentTask> {
    return this.prisma.contentTask.create(args);
  }
  async updateContentTask(
    args: Prisma.ContentTaskUpdateArgs
  ): Promise<PrismaContentTask> {
    return this.prisma.contentTask.update(args);
  }
  async deleteContentTask(
    args: Prisma.ContentTaskDeleteArgs
  ): Promise<PrismaContentTask> {
    return this.prisma.contentTask.delete(args);
  }
}