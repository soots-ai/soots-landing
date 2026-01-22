import React, { useState } from 'react';
import { Copy, Check, X } from 'lucide-react';
import { Button } from './ui/Button';

interface EmailPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export const EmailPopup: React.FC<EmailPopupProps> = ({ isOpen, onClose }) => {
    const [copied, setCopied] = useState(false);
    const email = "mark@soots.ai";

    if (!isOpen) return null;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-cream/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Popup Container */}
            <div className="relative w-full max-w-md bg-white border-2 border-charcoal shadow-[8px_8px_0px_0px_rgba(51,51,51,1)] p-8 animate-in fade-in zoom-in-95 duration-200">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-charcoal transition-colors"
                >
                    <X size={24} />
                </button>

                <h3 className="text-2xl font-sans font-bold text-charcoal mb-2">
                    Get in Touch
                </h3>

                <p className="font-mono text-sm text-gray-500 mb-8">
          // PILOT PROGRAM INQUIRY
                </p>

                <div className="flex flex-col gap-4">
                    <div className="relative">
                        <div className="flex items-center justify-between border-2 border-gray-200 bg-gray-50 p-4 font-mono text-lg text-charcoal">
                            {email}
                            <button
                                onClick={handleCopy}
                                className="text-gray-400 hover:text-blueprint-blue transition-colors p-2"
                                title="Copy to clipboard"
                            >
                                {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                            </button>
                        </div>
                        {copied && (
                            <div className="absolute -top-8 right-0 font-mono text-xs text-green-600 bg-green-50 px-2 py-1 border border-green-200">
                                COPIED TO CLIPBOARD
                            </div>
                        )}
                    </div>

                    <Button onClick={onClose} className="w-full mt-4">
                        DONE
                    </Button>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-high-vis-orange"></div>
            </div>
        </div>
    );
};
