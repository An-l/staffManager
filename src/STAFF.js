class StaffItem {
    constructor(item) {
        this.info = {};
        this.info.name = item.name;
        this.info.age = item.age || 0;
        this.info.sex = item.sex;
        this.info.id = item.id;
        this.info.descrip = item.descrip || '';
        this.key = ++StaffItem.key;
    }
}

StaffItem.key = 0;

export default class STAFF {
    constructor() {
        this.allStaff = [
            new StaffItem(STAFF.rawData[0].info),
            new StaffItem(STAFF.rawData[1].info),
            new StaffItem(STAFF.rawData[2].info),
            new StaffItem(STAFF.rawData[3].info),
            new StaffItem(STAFF.rawData[4].info),
            new StaffItem(STAFF.rawData[5].info),
            new StaffItem(STAFF.rawData[6].info),
            new StaffItem(STAFF.rawData[7].info),
            new StaffItem(STAFF.rawData[8].info),
            new StaffItem(STAFF.rawData[9].info),
            new StaffItem(STAFF.rawData[10].info)
        ]
        this.staff =[];
        this.sortType = 0;//0-身份 1-年龄升 2-年龄降
		this.filtType = 0;//0-all 1-主任 2-老师 3-学生 4-实习
        this.txt = ''; //搜索关键字

        this._sortStaff(this.sortType);  //默认按身份排序
		this._filtStaff(this.filtType);
    }

    addStaffItem(item) {
        let newItem = new StaffItem(item);
        this.allStaff.push(newItem);
        this.staff = this.allStaff;
        return this;
    }

    removeStaffItem(key){
        this.allStaff = this.allStaff.filter( item => {
            return item.key !== key
        })
        this.staff = this.allStaff;
        return this;
    }

    editStaffItem(item){
        this.allStaff.forEach( staffItem => {
            if (staffItem.key == item.key) {
                console.log(item.key+' '+staffItem.info.name);
                staffItem.info.name = item.name;
				staffItem.info.sex = item.sex;
				staffItem.info.age = item.age;
				staffItem.info.id = item.id;
				staffItem.info.descrip = item.descrip;
            }
        });
        this._sortStaff(this.sortType);
		this._filtStaff(this.filtType);
		this._searchStaff(this.txt);
        return this;
    }

    _searchStaff(txt) {
        this.txt = txt;
        this.staff = this.staff.filter( item => {
            return item.info.name.indexOf(txt) != -1 ||
                    (item.info.age + '').indexOf(txt) != -1 ||
                    item.info.id.indexOf(txt) != -1 ||
                    item.info.sex.indexOf(txt) != -1;
        })
    }

    _filtStaff(val) {
        this.filtType = val;
        switch (parseInt(val)) {
            case 0:
                this.staff = this.allStaff;
                break;
            case 1:
                this.staff = this.allStaff.filter( item => {
                    return item.info.id == '主任';
                });
                break;
            case 2:
                this.staff = this.allStaff.filter( item => {
                    return item.info.id == '老师';
                });
                break;
            case 3:
                this.staff = this.allStaff.filter( item => {
                    return item.info.id == '学生';
                });
                break;
            case 4:
                this.staff = this.allStaff.filter( item => {
                    return item.info.id == '实习';
                });
                break;
        }
    }

    _sortStaff(val) {
        this.sortType = val;
        switch (parseInt(val)) {
            case 0: //身份
                this.allStaff.forEach(item => {
                    // 为每一位设置排序的根据sortId
                    switch (item.info.id) {
                        case '主任':
                            item.info.sortId = 1;
                            break;
                        case '老师':
                            item.info.sortId = 2;
                            break;
                        case '学生':
                            item.info.sortId = 3;
                            break;
                        case '实习':
                            item.info.sortId = 4;
                            break;
                        default:
                            break;
                    }
                })
                // 根据sortId进行排序
                this.allStaff.sort((item1, item2) => {
                    if(item1.info.sortId < item2.info.sortId){
                        return -1;
                    }else if (item1.info.sortId > item2.info.sortId) {
                        return 1;
                    }else {
                        return 0;
                    }
                })
                break;
            case 1: //年龄升
                this.allStaff.sort((item1, item2) => {
                    if(item1.info.age < item2.info.age){
                        return -1;
                    }else if (item1.info.age > item2.info.age) {
                        return 1;
                    }else {
                        return 0;
                    }
                })
                break;
            case 2: //年龄降
                this.allStaff.sort((item1, item2) => {
                    if(item1.info.age < item2.info.age){
                        return 1;
                    }else if (item1.info.age > item2.info.age) {
                        return -1;
                    }else {
                        return 0;
                    }
                })
                break;
            default:
                break;
        }
    }

    filtStaff(val){
        this._filtStaff(val);
        this._searchStaff(this.txt);
        return this;
    }

    searchStaff(txt) {
        this._filtStaff(this.filtType);
        this._searchStaff(txt);
        return this;
    }

    sortStaff(val) {
        this._sortStaff(val);
        this._filtStaff(this.filtType);
        this._searchStaff(this.txt);
        return this;
    }

}

STAFF.rawData = [
    { info: {descrip:'我是一匹来自远方的狼。', sex: '男', age: 20, name: '张三', id: '主任'}},
    { info: {descrip:'我是一匹来自远方的狼。', sex: '女', age: 21, name: '赵静', id: '学生'}},
    { info: {descrip:'我是一匹来自远方的狼。', sex: '女', age: 22, name: '王二麻', id: '学生'}},
    { info: {descrip:'我是一匹来自远方的狼。', sex: '女', age: 24, name: '李晓婷', id: '实习'}},
    { info: {descrip:'我是一匹来自远方的狼。', sex: '男', age: 23, name: '张春田', id: '实习'}},
    { info: {descrip:'我是一匹来自远方的狼。', sex: '男', age: 22, name: '刘建国', id: '学生'}},
    { info: {descrip:'我是一匹来自远方的狼。', sex: '男', age: 24, name: '张八', id: '主任'}},
    { info: {descrip:'我是一匹来自远方的狗。', sex: '男', age: 35, name: '李四', id: '老师'}},
    { info: {descrip:'我是一匹来自远方的猪。', sex: '男', age: 42, name: '王五', id: '学生'}},
    { info: {descrip:'我是一匹来自远方的牛。', sex: '男', age: 50, name: '赵六', id: '实习'}},
    { info: {descrip:'我是一匹来自远方的马。', sex: '男', age: 60, name: '孙七', id: '实习'}}
];
