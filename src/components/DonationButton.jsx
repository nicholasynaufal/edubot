import React, { useState } from 'react';

export default function DonationButton() {
    const [isOpen, setIsOpen] = useState(false);
    const pixKey = "seu-email-ou-telefone@aqui.com"; // O usuário preencherá isso depois

    const copyPix = () => {
        navigator.clipboard.writeText(pixKey);
        alert("Chave PIX copiada! Obrigado pelo apoio! ❤️");
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">

            {/* Modal / Card do PIX */}
            {isOpen && (
                <div className="absolute bottom-16 right-0 mb-2 w-72 bg-white rounded-2xl shadow-2xl border border-primary/20 p-5 transform transition-all duration-300 origin-bottom-right">
                    <div className="text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-2xl">☕</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 mb-2">Apoie o Projeto</h3>
                        <p className="text-sm text-slate-600 mb-4">
                            O EduBot Pro é gratuito e sem fins lucrativos. Se a nossa Inteligência Artificial te ajudou a encontrar o curso ideal, considere pagar um café para os desenvolvedores! 🚀
                        </p>

                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 mb-4">
                            <p className="text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wider">Chave PIX</p>
                            <p className="font-mono text-sm text-slate-800 break-all select-all flex items-center justify-center gap-2">
                                {pixKey}
                            </p>
                        </div>

                        <button
                            onClick={copyPix}
                            className="w-full py-2.5 bg-success hover:bg-green-600 text-white font-medium rounded-lg transition-colors shadow-sm mb-2 flex items-center justify-center"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Copiar Chave PIX
                        </button>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-xs text-slate-500 hover:text-slate-800 transition-colors"
                        >
                            Agora não, obrigado
                        </button>
                    </div>
                </div>
            )}

            {/* Botão Flutuante */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-primary to-blue-500 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/30"
                aria-label="Apoiar projeto"
            >
                {isOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                )}
            </button>
        </div>
    );
}
