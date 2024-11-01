import {CloudDownload, Plus } from "lucide-react"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { DataTable } from "@/app/(root)/settings/(team)/data-table"
import { columns } from "@/app/(root)/settings/(team)/columns"
import { teamMembers } from "@/constants"
import { SettingsUserForm } from "../forms/settings-user-form"

const SettingsUser = () => {

    return (
      <div className="settings-team border border-solid rounded-lg mt-6 p-2">
       <div className="flex justify-between my-3">
        <div className="flex-1">
            <div className="flex gap-2">
            <h2 className="text-18 font-semibold text-gray-900">Personal Info</h2>
            </div>
            
            <h3 className="text-14 text-normal text-gray-600">Update all your personal records here</h3>
        </div>
        <div className="flex gap-4">
            <Button variant={"outline"}>Cancel</Button>
            <Button>Save</Button>
        </div>
       </div>
       <div><SettingsUserForm/></div>
        
      </div>
    )
  }
  
  export default SettingsUser