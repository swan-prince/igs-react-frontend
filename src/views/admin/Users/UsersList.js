import React, { useState } from 'react'

import { ChevronDown, User } from 'react-feather'

import { Card, Row, Col, Button } from 'reactstrap'
import DataTable from 'react-data-table-component'
import ReactPaginate from 'react-paginate'

import { columns } from './columns'

import '@styles/react/libs/tables/react-dataTable-component.scss'

import tableData from './dummyData'

const CustomHeader = () => {
  return (
    <div className='invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75'>
      <Row>
        <Col xl='6' className='d-flex align-items-center p-0'>
          <div className='d-flex align-items-center w-100'>
            <h6 className='mb-0'>Users List</h6>
          </div>
        </Col>
        <Col
          xl='6'
          className='d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1'
        >
          <Button.Ripple color='success' outline>
            <User className='text-primary' /> Add User
          </Button.Ripple>
        </Col>
      </Row>
    </div>
  )
}

const UsersList = () => {

  const [currentPage, setCurrentPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const CustomPagination = () => {
    const count = Number(Math.ceil(tableData.length / rowsPerPage))

    return (
      <ReactPaginate
        pageCount={count || 1}
        nextLabel=''
        breakLabel='...'
        previousLabel=''
        activeClassName='active'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        forcePage={currentPage}
        onPageChange={page => {
          console.log(page)
          setCurrentPage(page.selected)
        }}
        pageClassName={'page-item'}
        nextLinkClassName={'page-link'}
        nextClassName={'page-item next'}
        previousClassName={'page-item prev'}
        previousLinkClassName={'page-link'}
        pageLinkClassName={'page-link'}
        containerClassName={'pagination react-paginate justify-content-end p-1'}
      />
    )
  }
  return (
    <Card>
      <DataTable
        noHeader
        pagination
        subHeader
        responsive
        paginationServer
        columns={columns}
        sortIcon={<ChevronDown />}
        className='react-dataTable'
        paginationComponent={CustomPagination}
        data={tableData.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage)}
        subHeaderComponent={<CustomHeader />}
      />
    </Card>
  )
}

export default UsersList
