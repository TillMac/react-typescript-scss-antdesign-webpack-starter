import React, { CSSProperties } from 'react';
import './CustomAvatar.scss';

type Props = {
	image: string;
	style: CSSProperties;
};

const CustomAvatar = ({ image, style }: Props) => {
	return (
		<div className="avatar__wrapper" style={style}>
			<img src={image} alt="avatar" className="avatar__img" />
		</div>
	);
};

export default CustomAvatar;
