import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import { UsersComponent } from 'components/User'
import {
  makeUserList,
  makeSelectCurrentPage,
  makeSelectPerPage,
  makeSelectLoading,
  makeSelectTotalCount,
} from 'selectors/user.selector'
import {
  userListRequest,
  userDeleteRequest,
  userChangeTablePageRequest,
} from 'actions/user.action'

const UsersContainer = ({
  userList,
  userListRequest,
  userDeleteRequest,
  userChangeTablePageRequest,
  currentPage,
  perPage,
  loading,
  totalCount,
}) => {
  useEffect(() => {
    userListRequest({ currentPage, perPage })
  }, [])

  const pageChange = (currentPage) => {
    userChangeTablePageRequest(currentPage)
    userListRequest({ currentPage, perPage })
  }
  return (
    <UsersComponent
      userList={userList}
      userDeleteRequest={userDeleteRequest}
      currentPage={currentPage}
      userListRequest={userListRequest}
      perPage={perPage}
      pageChange={pageChange}
      loading={loading}
      totalCount={totalCount}
    />
  )
}

const mapStateToProps = createStructuredSelector({
  userList: makeUserList(),
  currentPage: makeSelectCurrentPage(),
  totalCount: makeSelectTotalCount(),
  perPage: makeSelectPerPage(),
  loading: makeSelectLoading(),
})

const mapDispatchToProps = {
  userListRequest,
  userDeleteRequest,
  userChangeTablePageRequest,
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)
export default compose(withConnect)(UsersContainer)
