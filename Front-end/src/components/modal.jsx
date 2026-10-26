import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";

export const Modal = ({ title, onClose, children }) => {
    const titleId = useId();
    const dialogRef = useRef(null);
    useEffect(() => {
        const previousFocus = document.activeElement;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        dialogRef.current?.focus();
        const handleKey = (event) => {
            if (event.key === "Escape") onClose();
            if (event.key !== "Tab") return;
            const elements = dialogRef.current?.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), [tabindex="0"]');
            if (!elements?.length) { event.preventDefault(); return; }
            const first = elements[0];
            const last = elements[elements.length - 1];
            if (event.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.current)) { event.preventDefault(); last.focus(); }
            else if (!event.shiftKey && (document.activeElement === last || document.activeElement === dialogRef.current)) { event.preventDefault(); first.focus(); }
        };
        document.addEventListener("keydown", handleKey);
        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleKey);
            previousFocus?.focus();
        };
    }, [onClose]);
    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-4 sm:p-6" onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
            <section ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby={titleId} tabIndex={-1} className="relative max-h-[calc(100dvh-2rem)] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-xl sm:p-8">
                <div className="mb-4 flex items-start justify-between gap-4">
                    <h2 id={titleId} className="text-2xl text-[#007f96]">{title}</h2>
                    <button type="button" onClick={onClose} className="-mr-2 -mt-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-xl hover:bg-gray-100" aria-label="Fechar">✕</button>
                </div>
                {children}
            </section>
        </div>, document.body
    );
};