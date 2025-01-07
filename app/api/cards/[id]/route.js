import { NextResponse } from "next/server";
import sql from "better-sqlite3";

const db = sql("cards.db");

export async function PUT(request, { params }) {
    const { id } = params; // URL'deki :id parametresini alıyoruz
    const { boxID } = await request.json();

    try {
        const stmt = db.prepare(`
      UPDATE cards
      SET boxID = ?
      WHERE id = ?
    `);
        const result = stmt.run(boxID, id);

        return NextResponse.json({
            changes: result.changes,
            message: result.changes > 0 ? "Updated" : "Not updated",
        });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to update boxID" },
            { status: 500 }
        );
    }
}
