import { runMongoDb } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

interface NewUserRequest {
  name: string;
  email: string;
  password: string;
}

export const POST = async (req: NextRequest) => {
  const body = (await req.json()) as NewUserRequest;
  const client = await runMongoDb();
  const db = client?.db("details");
  const collection = db?.collection("users");
  const oldUser = await collection?.findOne({ email: body.email });
  if (oldUser) {
    return NextResponse.json(
      { error: "email is already in use!" },
      { status: 422 }
    );
  }
  await collection?.insertOne(body);
  const url = req.nextUrl.clone();
  url.pathname = "/";

  return NextResponse.redirect(url);
};
