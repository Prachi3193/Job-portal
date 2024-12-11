import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'

const CompaniesTable = () => {
  return (
    <div>
      <Table>
      <TableCaption>A list of your recent registered companies</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Logo</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    // filterCompany?.map((company) => (
                        <tr>
                            <TableCell>
                                <Avatar>
                                    <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"/>
                                </Avatar>
                            </TableCell>
                            <TableCell>company.name</TableCell>
                            <TableCell>
                                {/* {company.createdAt.split("T")[0]} */}
                                date
                                </TableCell>
                            <TableCell className="text-right cursor-pointer">
                                <Popover>
                                    <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                    <PopoverContent className="w-32">
                                        <div 
                                        // onClick={()=> navigate(`/admin/companies/${company._id}`)} 
                                        className='flex items-center gap-2 w-fit cursor-pointer'>
                                            <Edit2
                                             className='w-4' />
                                            <span>Edit</span>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </TableCell>
                        </tr>

                    // ))
                }
            </TableBody>
      </Table>
    </div>
  )
}

export default CompaniesTable