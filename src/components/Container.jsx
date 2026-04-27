export default function Container({children}) {
    return (
        <>
        <div className="max-w-5xl mx-auto px-6">
            {children}
        </div>
        </>
    )
}