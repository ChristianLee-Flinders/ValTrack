import {CloudDownload, Plus } from "lucide-react"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { DataTable } from "@/app/(root)/settings/(team)/data-table"
import { columns } from "@/app/(root)/settings/(team)/columns"
import { teamMembers } from "@/constants"

const SettingsTeam = () => {

    const data = teamMembers

    return (
      <div className="settings-team border border-solid rounded-lg mt-6">
       <div className="flex justify-between p-2 my-3">
        <div className="flex-1">
            <div className="flex gap-2">
            <h2 className="text-18 font-semibold text-gray-900">Team Members</h2>
            <Badge variant={"outline"} className="text-gray-600">24 Users</Badge>
            </div>
            
            <h3 className="text-14 text-normal text-gray-600">Manage your team and your account permissions here</h3>
        </div>
        <div className="flex gap-4">
            <Button variant={"outline"}><CloudDownload/>Download CSV</Button>
            <Button><Plus/>Add User</Button>
        </div>
       </div>
       <DataTable  columns={columns} data={data} />
      </div>
    )
  }
  
  export default SettingsTeam