import { NextResponse } from "next/server";
import articles from './data.json'

export async function GET(request) {
  return NextResponse.json(articles)
}