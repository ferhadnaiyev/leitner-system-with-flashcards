import { useInsideOutsClick } from '@/hooks/useInsideOutsClick';
import React from 'react'







function Modal({ children, modal, insideClickFunction, outClickFunction }) {


    const modalRef = useInsideOutsClick<HTMLDivElement>(
        () => {
            if (insideClickFunction) insideClickFunction();
        },
        () => {

            if (modal && outClickFunction) outClickFunction();

        }
    );
    return (
        <div>
            {modal ? (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">

                    <div ref={modalRef} className='w-full container mx-auto px-[100px]'>

                        {children}

                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Modal
