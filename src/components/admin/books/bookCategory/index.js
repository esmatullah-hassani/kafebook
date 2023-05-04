
import { Sidebar } from "../../sidebar";
import { BookServer } from "../servers";
import { Button, Form, Input,message } from "antd";
import { useEffect, useState } from "react";

var _id = null
export const BookCategory =() => {
    const [form]  = Form.useForm()
    var [data,setData]  = useState({
      bookCategories:[]
    })
    const [formValues,setFormValues]  = useState({
      title:""
    })

    const [formState,setFormState] = useState({
      editMode:false
    })
   
    useEffect(() => {
      getData()
    })
    
    const getData = async () => {
      await BookServer.getBookCategory().then(res => setData({bookCategories:res.data}))
    }
   
    const insertBookCategory = async() => {
      await BookServer.insertBookCategory(formValues)
      .then(res => {
        getData()
        form.resetFields()
        message.success(` save successfully`);
      })
      .catch(err => {
        console.log(err.response)
      })
    }
    const editBookCategory = (bookCategory) => {
      setFormState({editMode:true})
      _id = bookCategory._id
      form.setFieldsValue({"title":bookCategory.title})
    }

    const updateBookCategory = async() =>{
      await BookServer.updateBookCategory(_id,formValues)
      .then(res => {
        getData()
        form.resetFields()
        _id = null
        setFormState({editMode:false})
        message.success(` update successfully`);
      })
    }

    const cancelUpdateData = () => {
      form.resetFields()
      _id = null
      setFormState({editMode:false})
    }

    const deleteBookCategory = (id) => {
      if(window.confirm("Are sure to delete it ?")){
        BookServer.deleteBookCategory(id)
        .then(res => {
          getData()
          message.success(` delete successfully`);
        })
        .catch(err => {
          console.log(err)
        })
      }
      return
    }
        
        return (
            <>
            <Sidebar />
            <div class="grid grid-cols-12 gap-4">
              <div class="col-start-3 col-span-12 ...">
              <div class="grid grid-cols-6 gap-4">
                  <div class="col-start-2 col-span-4 ...">
                  <Form
                    onValuesChange={setFormValues}
                    onFinish={formState.editMode ? updateBookCategory : insertBookCategory}
                    form={form}
                  >
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 ">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">{formState.editMode ? "Update Category" : "Add new Category"}</h2>

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
                    <div className=" flex items-center justify-end gap-x-6">
                      
                      
                      <Form.Item className="text-sm font-semibold leading-6 text-gray-900">
                      {formState.editMode ? 
                        <Button onClick={() => cancelUpdateData()} className='w-32' to="/admins/books/categories" htmlType="button">
                          Cancel
                        </Button>
                        : ""
                      }
                        <Button className='w-32'
                        htmlType="submit"
                        
                        >
                            {formState.editMode ? "Update" : "Save"}
                        </Button>
                      </Form.Item>
                    </div>
                    </Form>
                </div>
              </div>
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                  <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Book Categories</h1>
                    <p className=" text-sm text-gray-700">
                      A list of all the Book Categories .
                    </p>
                  </div>
                </div>
                <div className="mt-8 flow-root">
                  <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                          <tr>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Number
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Title
                            </th>
                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                              <span className="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                        {data.bookCategories.map((bookcategory,index) => (
                          <tr key={bookcategory._id} className={index % 2 === 0 ? undefined : 'bg-gray-50'}>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">{index+1}</td>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">{bookcategory.title}</td>
                              <td>
                                <button onClick={() => editBookCategory(bookcategory)} className="text-indigo-600 hover:text-indigo-900">Edit</button>
                                <button onClick={() => deleteBookCategory(bookcategory._id)} className="text-red-600 hover:text-indigo-900">Delete</button>
                              </td>
                          </tr>
                        ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                  </div>
              </div>
              </div>
            </>
          )
}