import dbConnect from "@/lib/mongodb";
import Todo from "@/models/Todo";
import { NextResponse } from "next/server";

// PUT /api/todos/:id → Update Todo
export async function PUT(req, { params }) {
  try {
    await dbConnect();
    const { text, completed } = await req.json();
    const todo = await Todo.findById(params.id);
    if (!todo) return NextResponse.json({ message: "Not found" }, { status: 404 });

    if (text !== undefined) todo.text = text;
    if (completed !== undefined) todo.completed = completed;
    await todo.save();

    return NextResponse.json(todo, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error updating todo" }, { status: 500 });
  }
}

// DELETE /api/todos/:id → Delete Todo
export async function DELETE(req, { params }) {
  try {
    await dbConnect();
    const todo = await Todo.findByIdAndDelete(params.id);
    return NextResponse.json(todo, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error deleting todo" }, { status: 500 });
  }
}
