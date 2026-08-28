interface TabsProps {
    active: 'books' | 'movies';
    onChange: (tab: 'books' | 'movies') => void;
}

export function Tabs({ active, onChange }: TabsProps) {
    return (
        <div className="tabs-container">
            <button onClick={() => onChange('books')}>ספרים</button>
            <button onClick={() => onChange('movies')}>סרטים</button>
        </div>
    );
}