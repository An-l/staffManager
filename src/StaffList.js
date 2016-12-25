import React, { PropTypes } from 'react'
import StaffItem from './StaffItem'

class StaffList extends React.Component {
    render () {
        let items = [];

        if (this.props.items.length == 0) {
            items.push(
                <tr key='0'>
                    <th colSpan='5' className='tempEmpty'>暂无用户</th>
                </tr>
            );
        }else {
            this.props.items.forEach( item => {
                items.push(
                    <StaffItem key={item.key} 
                        item={item}
                        removeStaffItem={this.props.removeStaffItem}
                        detailStaffItem={this.props.detailStaffItem}/>
                );
            });
        }

        return (
            <table className='list'>
                <thead>
                    <tr>
                        <th className='itemTd'>姓名</th>
                        <th className='itemTd'>年龄</th>
                        <th className='itemTd'>身份</th>
                        <th className='itemTd'>性别</th>
                        <th className='itemTd'>操作</th>
                    </tr>
                </thead>
                <tbody>{items}</tbody>
            </table>
        )
    }
}

export default StaffList;
