import { auth } from "@/lib/auth";
import db from "@/lib/db";
import { NextResponse } from "next/server";

// ✅ Kullanıcının tüm kartlarını getir
export async function GET() {
    const session = await auth();
    if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const todos = await db.cards.findMany({
        where: { userId: session.user.id },
        orderBy: { createdAt: "desc" },  // ✅ `createdAt` artık var
    });

    return NextResponse.json({ message: "ok", data: todos }, { status: 200 });
}

// ✅ Yeni kart ekle
export async function POST(req: Request) {
    const session = await auth();
    if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    let { boxId, termin, definition } = await req.json();

    if (!boxId) {
        boxId = 1;
    }

    boxId = Number(boxId);
    if (isNaN(boxId)) {
        return NextResponse.json({ message: "Box ID must be a valid number" }, { status: 400 });
    }

    if (!termin || !definition) {
        return NextResponse.json({ message: "Term and Definition are required" }, { status: 400 });
    }

    const newCard = await db.cards.create({
        data: {
            userId: session.user.id,
            boxId: boxId,
            termin: termin,
            definition: definition,
        },
    });

    return NextResponse.json({ message: "Card created successfully", data: newCard }, { status: 201 });
}

// ✅ Kart güncelle
export async function PUT(req: Request, { params }: { params: { id: string } }) {  // cardId yerine id
    const session = await auth();
    if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { boxId } = await req.json();
    const cardId = Number(params.id);  // cardId'yi id olarak güncelledik

    if (isNaN(cardId)) {
        return NextResponse.json({ message: "Invalid cardId" }, { status: 400 });
    }

    if (boxId === undefined || isNaN(boxId)) {
        return NextResponse.json({ message: "Box ID must be a valid number" }, { status: 400 });
    }

    try {
        const updatedCard = await db.cards.update({
            where: { id: cardId },  // Güncellenmiş id'yi kullanıyoruz
            data: {
                boxId: boxId,
            },
        });

        return NextResponse.json({ message: "Card updated successfully", data: updatedCard }, { status: 200 });
    } catch (error) {
        console.error("Error updating card:", error);
        return NextResponse.json({ message: "Failed to update card" }, { status: 500 });
    }
}

// ✅ Kart sil
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
