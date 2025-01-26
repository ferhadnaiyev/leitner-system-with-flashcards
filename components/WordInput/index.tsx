"use client";
import { useState } from "react";
import linkStyles from "@/app/styles/link.module.css";
import wordInputStyles from "@/app/styles/wordInput.module.css";
import classNames from "classnames";
import axios from "axios";
import { Toaster, toast } from "sonner";

function WordInput() {
    const [termin, setTermin] = useState("");
    const [definition, setDefinition] = useState("");

    const handleAddCard = async () => {
        if (!termin.trim() || !definition.trim()) {
            toast.error("Please fill in both fields.");
            return;
        }

        const newCard = {
            id: Date.now(),
            termin,
            definition,
            boxID: 1,
        };

        try {
            await axios.post("http://localhost:4000/cards", newCard);
            toast.success("Card added successfully!");
            setTermin("");
            setDefinition("");
        } catch (error) {
            console.error("Error adding card:", error);
            toast.error("An error occurred while adding the card.");
        }
    };

    return (
        <div className={classNames(wordInputStyles.container)}>
            <Toaster richColors position="bottom-right" />
            <h2 className={classNames(wordInputStyles.heading)}>Add New Word</h2>

            <div className={classNames(wordInputStyles.inputContainer)}>
                <input
                    placeholder="Termin"
                    className={classNames(wordInputStyles.input)}
                    name="termin"
                    type="text"
                    value={termin}
                    onChange={(e) => setTermin(e.target.value)}
                />
                <input
                    placeholder="Definition"
                    className={classNames(wordInputStyles.input)}
                    name="definition"
                    type="text"
                    value={definition}
                    onChange={(e) => setDefinition(e.target.value)}
                />
            </div>

            <div className={classNames(wordInputStyles.buttonContainer)}>
                <button
                    className={classNames(linkStyles.link, wordInputStyles.button)}
                    onClick={handleAddCard}
                >
                    Add
                </button>
            </div>
        </div>
    );
}

export default WordInput;
