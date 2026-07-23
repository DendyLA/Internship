import { NextResponse } from "next/server";

const API_URL =
  "https://superheroapi.com/api/34993e4a554a8325c94d41cf23357705";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const response = await fetch(`${API_URL}/${id}`);
  const data = await response.json();

  return NextResponse.json(data);
}