import { NextResponse } from "next/server";
import { playlistTracks } from "@/data/playlist";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");

  if (!term) {
    return NextResponse.json({
      success: true,
      tracks: playlistTracks,
    });
  }

  try {
    const itunesUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(
      term
    )}&entity=song&limit=1`;

    const res = await fetch(itunesUrl, {
      headers: {
        "User-Agent": "AntigravityTribute/1.0",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`iTunes API responded with status ${res.status}`);
    }

    const data = await res.json();
    if (data.results && data.results.length > 0) {
      const song = data.results[0];
      return NextResponse.json({
        success: true,
        trackName: song.trackName,
        artistName: song.artistName,
        previewUrl: song.previewUrl,
      });
    }

    return NextResponse.json(
      { success: false, message: "No results found" },
      { status: 404 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Internal Error",
      },
      { status: 500 }
    );
  }
}
