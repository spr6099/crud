import dbConnect from "@/lib/mongodb";
import Todo from "@/models/Todo";
import { NextResponse } from "next/server";

// POST /api/todos → Add Todo
export async function POST(req) {
  try {
    await dbConnect();
    const { text } = await req.json();
    const todo = new Todo({ text });
    await todo.save();
    return NextResponse.json(todo, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error adding todo" }, { status: 500 });
  }
}

// GET /api/todos → Get all Todos
export async function GET() {
  try {
    await dbConnect();
    const todos = await Todo.find();
    return NextResponse.json(todos, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error fetching todos" }, { status: 500 });
  }
}
