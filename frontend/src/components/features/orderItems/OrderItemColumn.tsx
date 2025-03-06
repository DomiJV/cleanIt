import {OrderItem} from "@/types/orderItem.ts";
import {ColumnDef} from "@tanstack/react-table"

export const orderItemColumns: ColumnDef<OrderItem>[] = [
    {
        accessorKey: "id",
        header: "Pos Nr.",
    },
    {
        accessorKey: "type",
        header: "Type",
    },
    {
        accessorKey: "material",
        header: "Material",
    },
    {
        accessorKey: "price",
        header: "Price",
        cell: ({row}) => {
            const amount = parseFloat(row.getValue("price"))
            const formatted = new Intl.NumberFormat("de-CH", {
                style: "currency",
                currency: "CHF",
            }).format(amount)

            return <div className="text-left font-medium">{formatted}</div>
        }, footer: ({table}) => {
            const totalPrice = table
                .getFilteredRowModel()
                .rows
                .reduce((total, row) => total + parseFloat(row.getValue("price")), 0)

            const formatted = new Intl.NumberFormat("de-CH", {
                style: "currency",
                currency: "CHF",
            }).format(totalPrice)

            return <div className="text-left font-bold">Total: {formatted}</div>
        },
    },
]