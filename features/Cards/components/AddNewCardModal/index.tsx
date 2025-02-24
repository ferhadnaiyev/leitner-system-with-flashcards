"use client";
import { useInsideOutsClick } from "@/hooks/useInsideOutsClick";
import { toggle } from "@/stores/slices/modal";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { usePostCardMutation } from "@/stores/slices/cardsApi"; // RTK query hook
import Image from "next/image";
import addIcon from "@/features/Cards/assets/add.svg"
import useShortcut from "@/hooks/useShortcut";

function AddNewCardModal() {
    const modal = useSelector((state: { modal: { modal: boolean } }) => state.modal.modal);
    const dispatch = useDispatch();
    const [termin, setTermin] = useState("");
    const [definition, setDefinition] = useState("");

    const [postCard, { isLoading }] = usePostCardMutation();

    const modalRef = useInsideOutsClick<HTMLDivElement>(
        () => { },
        () => {
            if (modal) {
                dispatch(toggle());
            }
        }
    );

    const handleAddCard = async () => {

        if (!termin.trim() || !definition.trim()) {
            toast.error("Both fields are required!");
            return;
        }

        try {

            const response = await postCard({
                termin,
                definition,
                boxId: 1,
            }).unwrap();

            if (response) {
                toast.success("Card added successfully!");
                setTermin("");
                setDefinition("");
                dispatch(toggle());
            }
        } catch (error) {
            console.error("Error adding card:", error);
            toast.error("Failed to add card!");
        }
    };

    useShortcut(["Enter"], handleAddCard);




    return (
        <div>
            {modal ? (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">

                    <div ref={modalRef}>

                        <div className={`bg-red flex flex-col justify-between bg-[#90B5DA] rounded-[12px] max-w-[300px] min-w-[175px] min-h-[290px] px-[24px] py-[34px]`}>
                            <input
                                placeholder="Termin"
                                value={termin}
                                type="text"
                                onChange={(e) => setTermin(e.target.value)}
                                className=" pb-[3px] placeholder:text-[30px] text-[30px] font-semibold leading-[36px] truncate border-b-[0.1px] border-[#1A2D40] focus:outline-none bg-transparent placeholder:text-[#1A2D40]"
                            />

                            <textarea
                                placeholder="Definition"
                                value={definition}
                                maxLength={105}
                                rows={5}
                                onChange={(e) => setDefinition(e.target.value)}
                                className="break-words line-clamp-5  text-[17px] font-normal leading-[20px] bg-transparent placeholder:text-[#1A2D40] resize-none focus:outline-none"
                            ></textarea>
                            <div className="flex items-center justify-center">
                                <button
                                    className="w-full flex items-center justify-center bg-[#1A2D40] text-white py-[10px] px-[20px] rounded-[7px] font-semibold text-[17px]"
                                    onClick={handleAddCard}
                                    disabled={isLoading}
                                >
                                    <div className="leading-[21px]">
                                        Add
                                    </div>

                                    <Image src={addIcon} alt="add icon" height={21} width={21} />

                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default AddNewCardModal;
