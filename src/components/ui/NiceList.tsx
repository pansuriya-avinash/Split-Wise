import * as React from 'react';
import '../../main.css';

interface INiceList {
	children: any;
}
const NiceList: React.FC<INiceList> = (props) => {
	return <ul className='list-group'>{props.children}</ul>;
};

export default NiceList;
