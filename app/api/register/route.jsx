import bcrypt from "bcrypt";
import prisma from "../../db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  let { firstname, lastname, email, password, address, phone } = body.data;

  if (!firstname || !lastname || !email || !password || !address || !phone) {
    return NextResponse(
      "prénom, nom, email, password, adresse ou téléphone manquant",
      { status: 400 }
    );
  }

  const exist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (exist) {
    return new NextResponse("User already exists", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  password = hashedPassword;
  const user = await prisma.user.create({
    data: {
      lastname,
      firstname,
      email,
      password,
      phone,
      address,
    },
  });
  return NextResponse.json(user);
}
