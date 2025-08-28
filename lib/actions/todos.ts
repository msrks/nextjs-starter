"use server";

import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { todos } from "@/lib/db/schema";

export async function getTodos() {
  return await db.select().from(todos).orderBy(todos.createdAt);
}

export async function createTodo(data: { title: string; description: string }) {
  await db.insert(todos).values({
    title: data.title,
    description: data.description,
  });
  revalidatePath("/");
}

export async function updateTodo(
  id: number, 
  data: Partial<{ title: string; description: string; completed: boolean }>
) {
  await db
    .update(todos)
    .set({ ...data, updatedAt: new Date() })
    .where(eq(todos.id, id));
  revalidatePath("/");
}

export async function deleteTodo(id: number) {
  await db.delete(todos).where(eq(todos.id, id));
  revalidatePath("/");
}