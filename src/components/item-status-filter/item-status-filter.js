import React,{Component} from 'react';
import './item-status-filter.css'


export default class ItemStatusFilter extends Component {

     buttons = [
        {name: 'all' , label: 'All'},
        {name: 'active' , label: 'Active'},
        {name: 'done' , label: 'done'}
    ];
    render() {
        const { filter, onChangeFilter } = this.props
        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const clazz  = isActive ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button type="button"
                        className={`btn ${clazz}`}
                        key={name}
                        onClick = {() => onChangeFilter(name)}>
                {label}
                </button>
            )
        })
          return (
                <div className="btn btn-group">
                   {buttons}
                </div>
            );
    }
}
// const ItemStatusFilter = () => {
//     return (
//         <div className="btn btn-group">
//             <button type="button"
//             className="btn btn-info">
//             All
//             </button>

//             <button type="button"
//             className="btn btn-outline-secondary">
//             Active
//             </button>

//             <button type="button"
//             className="btn btn-outline-secondary">
//             Done
//             </button>
//         </div>
//     );
// };
// export default ItemStatusFilter