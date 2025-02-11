import { CardsType } from '@/types/interfaces';
import { targetBox } from '@/types/types';
import { usePutCardMutation, useGetCardsQuery } from '@/stores/slices/cardsApi'; // Güncellenmiş slice



interface CardButtonProps extends CardsType {
    targetBox: targetBox;
}

function CardButton({ id, boxID, termin, definition, targetBox }: CardButtonProps) {
    const { refetch } = useGetCardsQuery();

    const [putCard] = usePutCardMutation();

    let buttonColor: boolean;
    let updatedBoxID = boxID;

    if (targetBox == "everydayBox") {
        updatedBoxID = 1;
        buttonColor = true; //color is green
    } else {
        updatedBoxID += 1;
        buttonColor = false; //color is red
    }

    const card: CardsType = {
        id: id,
        termin: termin,
        definition: definition,
        boxID: updatedBoxID,
    };

    const handleUpdate = async () => {
        try {
            await putCard(card).unwrap();
            refetch();
        } catch { }
    };

    return <button className={`${buttonColor ? "bg-red-700" : "bg-green-700"} h-[13px] w-[13px] rounded-full `} onClick={handleUpdate}>

    </button>;
}

export default CardButton;
