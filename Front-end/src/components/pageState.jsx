export const PageState = ({ loading, error, empty, onRetry }) => (
    <div className="rounded-2xl border border-[#b6e7ef] bg-[#f0fafc] p-6 text-center sm:p-10" role={error ? "alert" : "status"}>
        <p className="text-lg leading-relaxed">{loading ? "Carregando os animais…" : error || empty}</p>
        {error && onRetry && <button type="button" className="primary-button mt-5" onClick={onRetry}>Tentar novamente</button>}
    </div>
);