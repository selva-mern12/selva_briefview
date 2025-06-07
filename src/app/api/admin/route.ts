import dotenv from 'dotenv'
import { NextRequest, NextResponse } from 'next/server';

dotenv.config();

const ADMIN_PASS = process.env.ADMIN_PASS;

export async function POST(req: NextRequest) {
  const { admin_pass } = await req.json();

  if (admin_pass === ADMIN_PASS) {
    return NextResponse.json({ admin: true });
  }

  return NextResponse.json({ admin: false }, { status: 401 });
}