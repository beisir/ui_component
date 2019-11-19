import 'element-ui/lib/theme-chalk/index.css'
import {
    Collapse, 
    CollapseItem, 
    Breadcrumb, 
    BreadcrumbItem, 
    Card, 
    Row, 
    Col, 
    Menu, 
    Submenu, 
    MenuItemGroup, 
    MenuItem,
    Scrollbar,
    Badge,
    Button,
    Dialog,
    Table,
    TableColumn,
    Tooltip,
    Message,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Container,
    Header,
    Main,
    Aside
} from 'element-ui'

export default (Vue) => {
    


     Vue.use(Collapse)
        .use(CollapseItem)
        .use(Breadcrumb)
        .use(BreadcrumbItem)
        .use(Card)
        .use(Row)
        .use(Col)
        .use(Menu)
        .use(Submenu)
        .use(MenuItemGroup)
        .use(MenuItem)
        .use(Scrollbar)
        .use(Badge)
        .use(Button)
        .use(Dialog)
        .use(Table)
        .use(TableColumn)
        .use(Tooltip)
        .use(Dropdown)
        .use(DropdownMenu)
        .use(DropdownItem)
        .use(Container)
        .use(Header)
        .use(Main)
        .use(Aside)
    Vue.prototype.$message = Message;
}