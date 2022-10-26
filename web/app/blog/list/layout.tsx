export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="container">
            <div className="mt-12">
                <h1 className="text-4xl font-semibold">Samling av innlegg</h1>
                <p className="font-mono">- Hovedsakelig for egen læring</p>
            </div>
            {children}
        </main>
    );
}
