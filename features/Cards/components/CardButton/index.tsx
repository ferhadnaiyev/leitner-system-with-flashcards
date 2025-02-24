import { CardsType } from '@/types/interfaces';
import { targetBox } from '@/types/types';
import { usePutCardMutation, useGetCardsQuery } from '@/stores/slices/cardsApi'; // Güncellenmiş slice

interface CardButtonProps extends CardsType {
    targetBox: targetBox;
}

function CardButton({ cardId, boxId, targetBox }: CardButtonProps) {
    const { refetch } = useGetCardsQuery();

    const [putCard] = usePutCardMutation();

    // boxId'nin güncellenmesi
    let updatedBoxID = boxId;
    let buttonColor: boolean;

    if (targetBox === "everydayBox") {
        updatedBoxID = 1;  // "everydayBox" ise boxId'yi 1 olarak ayarlıyoruz
        buttonColor = true;  // renk yeşil
    } else {
        updatedBoxID += 1;  // Diğer durumlarda boxId'yi artırıyoruz
        buttonColor = false; // renk kırmızı
    }

    const handleUpdate = async () => {
        try {
            // putCard mutasyonu ile kartı güncelle
            await putCard({ cardId, boxId: updatedBoxID }).unwrap();  // Sadece boxId'yi gönderiyoruz
            refetch();  // Kartlar güncellenmişse yeniden veriyi al
        } catch (error) {
            console.error("Failed to update card:", error);
        }
    };

    return (
        <button
            className={`${buttonColor ? "bg-green-700" : "bg-red-700"} h-[13px] w-[13px] rounded-full`}
            onClick={handleUpdate}
        >
        </button>
    );
}

export default CardButton;
