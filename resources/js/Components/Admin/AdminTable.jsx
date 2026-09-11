// Tableau générique du back-office : en-têtes de colonnes, boucle sur les
// lignes, état vide et cellules personnalisables. Factorise la structure
// table/thead/tbody identique entre les modules Staff et News.
export default function AdminTable({ columns, rows, rowKey = 'id', emptyMessage = 'Aucun élément pour le moment.' }) {
    return (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-base">
                <thead className="bg-slate-50 text-sm font-semibold uppercase tracking-wide text-slate-500">
                    <tr>
                        {columns.map((column) => (
                            <th key={column.key} className={`px-6 py-4 ${column.align === 'right' ? 'text-right' : ''}`}>
                                {column.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {rows.length === 0 ? (
                        <tr>
                            <td colSpan={columns.length} className="px-6 py-8 text-center text-slate-400">
                                {emptyMessage}
                            </td>
                        </tr>
                    ) : (
                        rows.map((row) => (
                            <tr key={row[rowKey]}>
                                {columns.map((column) => (
                                    <td key={column.key} className={`px-6 py-4 ${column.cellClassName ?? ''}`}>
                                        {column.render(row)}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
