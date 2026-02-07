import React, { useState, FormEvent } from 'react';
import { X, Check } from 'lucide-react';
import { Button } from './ui/Button';
import type { IcpContent } from '../icpContent';

interface EmailPopupProps {
    isOpen: boolean;
    onClose: () => void;
    content: IcpContent['emailPopup'];
}

export const EmailPopup: React.FC<EmailPopupProps> = ({ isOpen, onClose, content }) => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    if (!isOpen) return null;

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);

        // Validate email format
        if (!email.trim()) {
            setError('Please enter your email address');
            return;
        }

        if (!validateEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('https://submit-form.com/ZIUcgUDfZ', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit email');
            }

            setIsSuccess(true);
            setEmail('');
            
            // Auto-close after 3 seconds on success
            setTimeout(() => {
                setIsSuccess(false);
                onClose();
            }, 3000);
        } catch (err) {
            console.error('Failed to submit email:', err);
            setError('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        // Reset form state when closing
        setEmail('');
        setError(null);
        setIsSuccess(false);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-cream/80 backdrop-blur-sm"
                onClick={handleClose}
            />

            {/* Popup Container */}
            <div className="relative w-full max-w-md bg-white border-2 border-charcoal shadow-[8px_8px_0px_0px_rgba(51,51,51,1)] p-8 animate-in fade-in zoom-in-95 duration-200">

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-charcoal transition-colors"
                    aria-label="Close popup"
                >
                    <X size={24} />
                </button>

                <h3 className="text-2xl font-sans font-bold text-charcoal mb-2">
                    {content.title}
                </h3>

                <p className="font-mono text-sm text-gray-500 mb-8">
                    {content.subtitle}
                </p>

                {isSuccess ? (
                    <div className="flex flex-col items-center gap-4 py-4">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                            <Check size={32} className="text-green-600" />
                        </div>
                        <div className="text-center">
                            <p className="font-sans font-bold text-lg text-charcoal mb-2">
                                Thank you!
                            </p>
                            <p className="font-mono text-sm text-gray-600">
                                We'll be in touch soon.
                            </p>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="font-mono text-xs text-gray-600 uppercase tracking-wider">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setError(null);
                                }}
                                placeholder="your@email.com"
                                className="w-full border-2 border-charcoal bg-white p-4 font-mono text-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-high-vis-orange focus:ring-offset-2 transition-all"
                                disabled={isSubmitting}
                                aria-label="Email address"
                                aria-invalid={error ? 'true' : 'false'}
                                aria-describedby={error ? 'email-error' : undefined}
                            />
                            {error && (
                                <p 
                                    id="email-error"
                                    className="font-mono text-xs text-red-600 bg-red-50 px-2 py-1 border border-red-200"
                                    role="alert"
                                >
                                    {error}
                                </p>
                            )}
                        </div>

                        <Button 
                            type="submit" 
                            className="w-full mt-4"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'DONE'}
                        </Button>
                    </form>
                )}

                {/* Decorative corner */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-high-vis-orange"></div>
            </div>
        </div>
    );
};
