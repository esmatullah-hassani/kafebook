import { useState } from "react";
import { Sidebar } from "../../sidebar";
import { BookServer } from "../servers";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

export const CreateBookCategory = () =>{
        
        const [formValues,sertFormValues] = useState({
            title:""
        })

        const [form]  = Form.useForm()

        const  insertBookCategory = async () =>{
            await BookServer.insertBookCategory(formValues).then((res) => {
                form.resetFields()
            })
            .catch((err) => {
                console.log(err.response.data.errors[0].msg)
            })
        }

        function onFinishFailed(error){
            console.log(error)
        }
        return(
            <>
            <Sidebar />
            <div class="grid grid-cols-6 gap-4">
                <div class="col-start-2 col-span-4 ...">
                <Form 
                onValuesChange={(_,values) => sertFormValues(values)}
                onFinishFailed={onFinishFailed}
                onFinish={insertBookCategory}
                form={form}
                >
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Add new Category</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            This is to add new categories
                        </p>

                                <Form.Item
                                className="w-full"
                                label="Title"
                                name="title"
                                rules={[
                                    {required:true,message:"Please faill title!"},
                                    {min:3,message:"Title must be at least 4 characters!"},
                                    {max:32}
                                ]}
                                >

                                    <Input />
                                </Form.Item>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <Link to="/admins/books/categories" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                    </Link>
                    <Form.Item className="text-sm font-semibold leading-6 text-gray-900">
                        <Button className='w-full'
                        htmlType="submit"
                        
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </div>
                </Form>
                </div>
            </div>
            </>
        )
    
}