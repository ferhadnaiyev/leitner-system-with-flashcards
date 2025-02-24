import { auth } from "@/lib/auth";
import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// ✅ DELETE REQUEST
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const session = await auth();
    if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const cardId = params.id;

    try {
        await db.cards.delete({ where: { id: cardId } });
        return NextResponse.json({ message: "Card deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting card:", error);
        return NextResponse.json({ message: "Failed to delete card" }, { status: 500 });
    }
}

// ✅ PUT REQUEST (Kart Güncelleme)
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const session = await auth();
    if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
        const { id } = params;
        const body = await req.json();
        const boxId = Number(body.boxId); // JSON'dan gelen string'i sayıya çevir

        // ✅ boxId geçerli mi? (NaN değil ve 1'den büyük olmalı)
        if (Number.isNaN(boxId) || boxId < 1) {
            return NextResponse.json({ error: "Geçersiz boxId" }, { status: 400 });
        }

        // ✅ Kartı güncelle
        const updatedCard = await db.cards.update({
            where: { id },
            data: { boxId },
        });

        return NextResponse.json(updatedCard, { status: 200 });
    } catch (error) {
        console.error("Hata oluştu:", error);
        return NextResponse.json({ error: "Kart güncellenirken hata oluştu" }, { status: 500 });
    }
}
