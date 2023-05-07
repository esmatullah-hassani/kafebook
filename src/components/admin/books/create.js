import { Button,message, Form, Input, Select, Upload } from "antd"
import { Sidebar } from "../sidebar"
import { useEffect, useState } from "react";
import { BookServer } from "./servers";
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

export const CreateBook = () => {
    
    const [bookData,setBookData] = useState({
        bookCategories:[]
    })

    useEffect(() => {
        getData()
    })

    const getData = async () => {
        await BookServer.getBookCategory().then(response => {
            setBookData({bookCategories:response.data})
        })
    }
    return(
        <>
            <Sidebar />
            <div className="grid grid-cols-6 gap-4">
                <div className="col-start-2 col-span-4 ...">
                    <Form>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                
                                <Form.Item className="w-full"
                                label="Title :"
                                name="title"
                                rules={[
                                    {required:true,message:"Missing title!"}
                                ]}
                                >
                                    <Input />
                                </Form.Item>
                            </div>
                            <div className="sm:col-span-3">
                                <Form.Item
                                    label="category_id"
                                    name="category"
                                    rules={[{ required: true, message: 'Missing category!' }]}
                                    >
                                    <Select >
                                        {bookData.bookCategories.map((bookCategory,index) => {
                                        return (
                                            <Option key={index} value={bookCategory._id}>
                                                {bookCategory.title}
                                            </Option>
                                        )
                                        })}
                                        
                                    </Select>
                                </Form.Item>
                            </div>
                        </div>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                
                                <Form.Item className="w-full"
                                label="Authors :"
                                name="author"
                                >
                                    <Input />
                                </Form.Item>
                            </div>
                            <div className="sm:col-span-3">
                                
                                <Form.Item className="w-full"
                                label="ISBN :"
                                name="isbn"
                                >
                                    <Input />
                                </Form.Item>
                            </div>
                        </div>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                
                                <Form.Item className="w-full"
                                label="Edition :"
                                name="edition"
                                >
                                    <Input />
                                </Form.Item>
                            </div>
                            <div className="sm:col-span-3">
                                
                                <Form.Item className="w-full"
                                label="No of page :"
                                name="page_number"
                                >
                                    <Input />
                                </Form.Item>
                            </div>
                        </div>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                
                                <Form.Item className="w-full"
                                label="$Price :"
                                name="price"
                                >
                                    <Input />
                                </Form.Item>
                            </div>
                            <div className="sm:col-span-3">
                                <Form.Item
                                label="Poster :"
                                name="poster"
                                valuePropName="fileList"
                                getValueFromEvent={(event) => {
                                    return event?.fileList;
                                }}
                                rules={[{
                                    required:true,message:"Poster is required!"
                                },
                                {
                                    validator(_,fileList){
                                        return new Promise((resolve,reject) => {
                                            if(fileList && fileList[0].size > 9000000){
                                                reject("File size exceeted")
                                            }
                                            else{
                                                resolve("Success")
                                            }
                                        })
                                    }
                                }

                                ]}
                                >
                                    <Upload 
                                        maxCount={1}
                                        beforeUpload={(file) => {
                                        return new Promise((resolve,reject) => {
                                            if(file.size > 9000000){
                                                reject("File size exceeded")
                                            }
                                            else{
                                                resolve("Success")

                                            }
                                        })

                                    }}
                                    customRequest={(info) => {

                                    }}
                                    >
                                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                    </Upload>
                                </Form.Item>
                            </div>
                        </div>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <Form.Item className="w-full"
                                >
                                    <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4  rounded" 
                                    htmlType="submit"
                                    >Save</Button>
                                </Form.Item>
                                
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}