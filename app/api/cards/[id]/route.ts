import { auth } from "@/lib/auth";
import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const session = await auth();
    if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const cardId = params.id;  // Burada id string olarak geliyor

    try {
        // Prisma ile cardId'yi kullanarak kartı sil
        await db.cards.delete({
            where: { id: cardId },
        });

        return NextResponse.json({ message: "Card deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting card:", error);
        return NextResponse.json({ message: "Failed to delete card" }, { status: 500 });
    }
}


// PUT isteyi atma


export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params; // URL'den kartın ID'sini al
        const { boxId } = await req.json(); // İstek gövdesinden yeni boxId'yi al

        // boxId kontrolü (Negatif veya null olmamalı)
        if (!boxId || typeof boxId !== "number" || boxId < 1) {
            return NextResponse.json({ error: "Geçersiz boxId" }, { status: 400 });
        }

        // Kartı güncelle
        const updatedCard = await db.cards.update({
            where: { id },
            data: { boxId },
        });

        return NextResponse.json(updatedCard, { status: 200 });
    } catch (error) {
        console.error("eror", error)
        return NextResponse.json({ error: "Kart güncellenirken hata oluştu" }, { status: 500 });
    }
}
