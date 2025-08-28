import { Suspense } from "react";
import { TodoForm } from "@/components/todo-form";
import { TodoList } from "@/components/todo-list";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Todo App</h1>
        
        <TodoForm />
        
        <Suspense fallback={<div className="text-center">Loading todos...</div>}>
          <TodoList />
        </Suspense>
      </div>
    </div>
  );
}
