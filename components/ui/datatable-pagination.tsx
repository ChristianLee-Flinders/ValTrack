
  import { Table } from "@tanstack/react-table"
  
  import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select"
import { ArrowLeft, ArrowRight, ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon } from "lucide-react"
  
  interface DataTablePaginationProps<TData> {
    table: Table<TData>
  }
  
  export function DataTablePagination<TData>({
    table,
  }: DataTablePaginationProps<TData>) {
    return (
      <div className="flex items-center justify-between p-2">
        <Button variant="outline" className="h-8 p-2 basis-1" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            <ArrowLeft/>Previous
        </Button>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
        </div>
         <Button variant="outline" className="h-8 p-2 basis-1" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next<ArrowRight/>
        </Button>
      </div>
    )
  }
  