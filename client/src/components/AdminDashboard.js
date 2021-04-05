import React, { Fragment, useState } from 'react';
import { createCategory } from '../api/category';
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';

const AdminDashboard = () => {
       const [category, setCategory] = useState("");
       const [errorMsg, setErrorMsg] = useState("");
       const [successMsg, setSuccessMsg] = useState("");
       const [loading, setLoading] = useState(false);

       /********************************
        * EVENT HANDLERS
        ********************************/
       const handleMessages = evt => {
           setErrorMsg('');
           setSuccessMsg('');

       }
       const handleCategoryChange = (evt) => {
              setErrorMsg('');
              setSuccessMsg('');  
              setCategory(evt.target.value);
       };
       const handleCategorySubmit = (evt) => {
              evt.preventDefault();
              if (isEmpty(category)) {
                  setErrorMsg('Please enter a category');
              } else {
                const data = { category };

                setLoading(true);
                createCategory(data)
                    .then(response => {
                        setLoading(false);
                        setSuccessMsg(response.data.successMessage);
                        setCategory('');

                    })
                    .catch(err => {
                        setLoading(false);
                        setErrorMsg(err.response.data.errorMessage)

                    })
              }

  
       };

       /********************************
        * VIEWS
        ********************************/
       const showHeader = () => (
              <div className='bg-dark text-white py-4'>
                     <div className='container'>
                            <div className='row'>
                                   <div className='col-md-6'>
                                          <h1>
                                                 <i className='fas fa-home'> Dashboard</i>
                                          </h1>
                                   </div>
                            </div>
                     </div>
              </div>
       );

       const showActionBtns = () => (
              <div className='bg-light my-2'>
                     <div className='container'>
                            <div className='row' pb-3>
                                   <div className='col-md-4 mb-1'>
                                          <button className='btn btn-outline-info btn-block' data-toggle='modal' data-target='#addCategoryModal'>
                                                 <i className='fas fa-plus'> Add Category</i>
                                          </button>
                                   </div>

                                   <div className='col-md-4 mb-1'>
                                          <button className='btn btn-outline-warning btn-block' data-toggle='modal' data-target='#addFoodModal'>
                                                 <i className='fas fa-plus'> Add Food</i>
                                          </button>
                                   </div>

                                   <div className='col-md-4 mb-1'>
                                          <button className='btn btn-outline-success btn-block'>
                                                 <i className='fas fa-money-check-alt'> View Orders</i>
                                          </button>
                                   </div>
                            </div>
                     </div>
              </div>
       );

       const showCategoryModal = () => (
              <div id='addCategoryModal' className='modal' onClick={handleMessages}>
                     <div className='modal-dialog modal-dialog-centered modal-lg'>
                            <div className='modal-content'>
                                   <form onSubmit={handleCategorySubmit}>
                                          <div className='modal-header bg-info text-white'>
                                                 <h5 className='modal-title'>Add Category</h5>
                                                 <button className='close' data-dismiss='modal'>
                                                        <span>
                                                               <i className='fas fa-times'></i>
                                                        </span>
                                                 </button>
                                          </div>
                                          <div className='modal-body my-2'>
                                                 {errorMsg && showErrorMsg(errorMsg)}
                                                 {successMsg && showSuccessMsg(successMsg)}
                                                 {loading ? (
                                                        <div className='text-center'>{showLoading()}</div>
                                                 ) : (
                                                        <Fragment>
                                                               <label className='text-secondary'>Category</label>

                                                               <input
                                                                      type='text'
                                                                      className='form-control'
                                                                      name='category'
                                                                      value={category}
                                                                      onChange={handleCategoryChange}
                                                               />
                                                        </Fragment>
                                                 )}
                                          </div>
                                          <div className='modal-footer'>
                                                 <button className='btn btn-secondary' data-dismiss='modal'>
                                                        Close
                                                 </button>
                                                 <button type='submit' className='btn btn-info'>
                                                        Submit
                                                 </button>
                                          </div>
                                   </form>
                            </div>
                     </div>
              </div>
       );



       const showFoodModal = () => (
              <div id='addFoodModal' className='modal' onClick={handleMessages}>
                     <div className='modal-dialog modal-dialog-centered modal-lg'>
                            <div className='modal-content'>
                                   <form onSubmit={handleCategorySubmit}>
                                          <div className='modal-header bg-warning text-white'>
                                                 <h5 className='modal-title'>Add Food</h5>
                                                 <button className='close' data-dismiss='modal'>
                                                        <span>
                                                               <i className='fas fa-times'></i>
                                                        </span>
                                                 </button>
                                          </div>
                                          <div className='modal-body my-2'>
                                                 {errorMsg && showErrorMsg(errorMsg)}
                                                 {successMsg && showSuccessMsg(successMsg)}
                                                 {loading ? (
                                                        <div className='text-center'>{showLoading()}</div>
                                                 ) : (
                                                        <Fragment>
                                                               <div className='custom-file mb-2'>
                                                                      <input type='file' className='custom-file-input'/>
                                                                      <label className='custom-file-label'>choose File</label>
                                                               </div>
                                                               <div className='form-group'>
                                                                      <label className='text-secondary'>Name</label>
                                                                      <input type='text' className='form-control' />
                                                               </div>
                                                               <div className='form-group'>
                                                                      <label className='text-secondary'>Description</label>
                                                                      <textarea className = 'form-control' rows='3'></textarea>
                                                               </div>
                                                               <div className='form-group'>
                                                                      <label className='text-secondary'>Price</label>
                                                                      <input type='text' className='form-control' />
                                                               </div>
                                                               <div className='form-row'>
                                                                      <div className='form-group col-md-6'>
                                                                             <label className='text-secondary'>Category</label>
                                                                             <select className='custom-select mr-sm-2'>
                                                                                    <option>choose one...</option>
                                                                                    <option>Pasta</option>
                                                                                    <option>Desserts</option>
                                                                                    <option>Drinks</option>
                                                                             </select>
                                                                      </div>
                                                                      <div className='form-group col-md-6'>
                                                                             <label className='text-secondary'>Quantity</label>
                                                                             <input type='number' className='form-control' min='0' max='1000'/>

                                                                      </div>
                                                               </div>
                                                        
                                                        </Fragment>
                                                 )}
                                          </div>
                                          <div className='modal-footer'>
                                                 <button className='btn btn-secondary' data-dismiss='modal'>
                                                        Close
                                                 </button>
                                                 <button type='submit' className='btn btn-warning text-white'>
                                                        Submit
                                                 </button>
                                          </div>
                                   </form>
                            </div>
                     </div>
              </div>
       );


       /********************************
        * RENDERS
        ********************************/
       return (
              <section>
                     {showHeader()}
                     {showActionBtns()}
                     {showCategoryModal()}
                     {showFoodModal()}

              </section>
       );
};
export default AdminDashboard;
