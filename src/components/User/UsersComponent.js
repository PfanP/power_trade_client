import React, { Fragment } from 'react'
import { Table, Row, Button, Divider, Modal, Spin } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import produce from 'immer'

const { Column } = Table
const { confirm } = Modal;

const StyledRow = styled(Row)`
  margin: 30px 0;
`

const MaxHeightRow = styled(Row)`
  height: 100vh;
`

const HeaderTitle = styled.span`
  font-size: 20px;
`
const UserComponent = ({
  userList,
  userDeleteRequest,
  currentPage,
  perPage,
  pageChange,
  loading,
  totalCount,
}) => {
  const nextUserList = produce(userList, (draftState) => {
    draftState.map((e, index) => (e['key'] = index))
  })

  const userDelete = (id) => {
      confirm({
        title: 'Do you Want to delete this user?',
        onOk() {
            userDeleteRequest({ id, currentPage, perPage })
        },
        onCancel() {
        },
    });
}
  if (loading) {
    return (
      <MaxHeightRow type="flex" justify="center" align="middle">
        <Spin size="large" />
      </MaxHeightRow>
    )
  }
  return (
    <Fragment>
      <StyledRow justify="space-between" type="flex" align="middle">
        <HeaderTitle>Users</HeaderTitle>
        <Button type="primary" size="large">
          <Link to="/users/add">Add User</Link>
        </Button>
      </StyledRow>
      <Table
        dataSource={nextUserList}
        bordered
        pagination={{
          total: totalCount,
          onChange: (page, pageSize) => pageChange(page),
          current: currentPage,
        }}
      >
        <Column title="Full Name" dataIndex="name" key="full_name" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Role" dataIndex="role" key="role" />
        <Column
          title="Action"
          key="action"
          align="right"
          render={(text, record) => (
            <span>
              <Link to={`/users/${record.id}`}>
                <Button icon="edit" type="primary">
                  Edit
                </Button>
              </Link>
              <Divider type="vertical" />
                <Button icon="delete" type="danger" onClick={() => userDelete(record.id, currentPage, perPage)}>
                  Delete
                </Button>
            </span>
          )}
        />
      </Table>
    </Fragment>
  )
}

export default UserComponent
