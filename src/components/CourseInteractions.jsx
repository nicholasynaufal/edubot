import React, { useState, useEffect } from 'react';

export default function CourseInteractions({ courseId }) {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Carrega do LocalStorage (simulando um banco de dados real por enquanto)
    useEffect(() => {
        const savedData = localStorage.getItem(`course_interactions_${courseId}`);
        if (savedData) {
            const parsed = JSON.parse(savedData);
            setRating(parsed.rating || 0);
            setComments(parsed.comments || []);
        }
    }, [courseId]);

    // Salva no LocalStorage
    const saveData = (newRating, newComments) => {
        localStorage.setItem(`course_interactions_${courseId}`, JSON.stringify({
            rating: newRating,
            comments: newComments
        }));
    };

    const handleRating = (value) => {
        setRating(value);
        saveData(value, comments);
    };

    const handleSubmitComment = (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        setIsSubmitting(true);

        // Simula delay de rede para parecer uma requisição real
        setTimeout(() => {
            const commentObj = {
                id: Date.now(),
                text: newComment.trim(),
                date: new Date().toLocaleDateString('pt-BR'),
                author: "Usuário Anônimo" // Sem sistema de login ainda
            };

            const updatedComments = [commentObj, ...comments];
            setComments(updatedComments);
            saveData(rating, updatedComments);
            setNewComment("");
            setIsSubmitting(false);
        }, 400);
    };

    return (
        <div className="mt-6 pt-6 border-t border-neutral-100/60 bg-white/50 rounded-xl p-4 backdrop-blur-sm -mx-4 -mb-4 px-6 pb-6">

            {/* Seção de Avaliação (Estrelas) */}
            <div className="flex items-center justify-between mb-6">
                <h4 className="text-sm font-semibold text-neutral-800">Avalie este curso</h4>
                <div className="flex items-center space-x-1" onMouseLeave={() => setHoverRating(0)}>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            type="button"
                            className="focus:outline-none transition-transform hover:scale-110"
                            onMouseEnter={() => setHoverRating(star)}
                            onClick={() => handleRating(star)}
                        >
                            <svg
                                className={`w-6 h-6 ${(hoverRating || rating) >= star ? 'text-amber-400 fill-amber-400' : 'text-neutral-300 fill-transparent'} transition-colors duration-200`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                        </button>
                    ))}
                </div>
            </div>

            {/* Formulário de Comentário */}
            <div className="mb-6">
                <form onSubmit={handleSubmitComment}>
                    <div className="relative">
                        <textarea
                            className="w-full text-sm border border-neutral-200 rounded-lg p-3 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none shadow-sm"
                            rows="2"
                            placeholder="O que você achou do curso? (Opcional)"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                        <button
                            type="submit"
                            disabled={!newComment.trim() || isSubmitting}
                            className={`absolute bottom-2 right-2 px-3 py-1.5 text-xs font-medium text-white rounded-md transition-all ${!newComment.trim() || isSubmitting ? 'bg-neutral-300 cursor-not-allowed' : 'bg-primary hover:bg-primary-hover shadow-md hover:shadow-lg'}`}
                        >
                            {isSubmitting ? 'Enviando...' : 'Comentar'}
                        </button>
                    </div>
                </form>
            </div>

            {/* Lista de Comentários */}
            {comments.length > 0 && (
                <div className="max-h-40 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                    {comments.map(comment => (
                        <div key={comment.id} className="bg-neutral-50 rounded-lg p-3 border border-neutral-100/80 transition-all hover:border-neutral-200">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-xs font-semibold text-neutral-700">{comment.author}</span>
                                <span className="text-[10px] text-neutral-400">{comment.date}</span>
                            </div>
                            <p className="text-xs text-neutral-600 leading-relaxed break-words">{comment.text}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
