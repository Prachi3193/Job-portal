import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

const CompanySetup = () => {
    const [loading, setLoading] = useState(false);
    const navigate=useNavigate();
    const [input, setInput] = useState({
        name: "",
        description: "",
        website: "",
        location: "",
        file: null
    });
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const changeFileHandler = (e) => {
        const file = e.target.files?.[0];
        setInput({ ...input, file });
    }
    const submitHandler = async (e) => {
        e.preventDefault();
    }
  return (
    <div>
      <Navbar/>
      <div className='max-w-xl mx-auto my-10'>
            <form onSubmit={submitHandler}>
                <div className='flex items-center gap-5 p-8'>
                    <Button onClick={() => navigate("/admin/companies")} variant="outline" className="flex items-center gap-2 text-gray-500 font-semibold">
                        <ArrowLeft/>
                        <span>Back</span>
                    </Button>
                    <h1 className='font-bold text-xl'>Company Setup</h1>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <Label>Company Name</Label>
                        <Input
                            type="text"
                            name="name"
                            value={input.name}
                            onChange={changeEventHandler}
                        />
                    </div>
                    <div>
                        <Label>Description</Label>
                        <Input
                            type="text"
                            name="description"
                            value={input.description}
                            onChange={changeEventHandler}
                        />
                    </div>
                    <div>
                        <Label>Website</Label>
                        <Input
                            type="text"
                            name="website"
                            value={input.website}
                            onChange={changeEventHandler}
                        />
                    </div>
                    <div>
                        <Label>Location</Label>
                        <Input
                            type="text"
                            name="location"
                            value={input.location}
                            onChange={changeEventHandler}
                        />
                    </div>
                    <div>
                        <Label>Logo</Label>
                        <Input
                            type="file"
                            accept="image/*"
                            onChange={changeFileHandler}
                        />
                    </div>
                </div>
                {
                    loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Update</Button>
                }
            </form>
        </div>
    </div>
  )
}

export default CompanySetup