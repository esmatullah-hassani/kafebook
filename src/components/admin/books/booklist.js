import { Link } from "react-router-dom"
import { Sidebar } from "../sidebar"

export const Book = () =>{
    return(
        <>
            <Sidebar />
            <div class="grid grid-cols-12 gap-4">
              <div class="col-start-3 col-span-12 ...">
              
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                  <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Books</h1>
                    <p className=" text-sm text-gray-700">
                      A list of all the Books .
                    </p>
                  </div>
                </div>
                <div className="mt-8 flow-root">
                  <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <Link to="/admins/books/create"  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add new book</Link>
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
                       
                          <tr className='bg-gray-50'>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3"></td>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3"></td>
                              <td>
                                <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
                                <button className="text-red-600 hover:text-indigo-900">Delete</button>
                              </td>
                          </tr>
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