import React, { PropTypes } from 'react'

class StaffItem extends React.Component {
    //delete
    handleDelete(event){
        this.props.removeStaffItem(this.props.item.key);
    }
    //detail
    handleDetail(event){
        this.props.detailStaffItem(this.props.item.key);
    }

    render () {
        return (
            <tr style={{'cursor': 'pointer'}}>
                <td className='itemTd'>{this.props.item.info.name}</td>
                <td className='itemTd'>{this.props.item.info.age}</td>
                <td className='itemTd'>{this.props.item.info.id}</td>
                <td className='itemTd'>{this.props.item.info.sex}</td>
                <td className='itemTd'>
                    <a className='itemBtn' onClick={this.handleDelete.bind(this)}>删除</a>
                    <a className='itemBtn' onClick={this.handleDetail.bind(this)}>详情</a>
                </td>
            </tr>
        )
    }
}

export default StaffItem;
