import { Avatar, Button, Drawer, FloatButton, Result } from 'antd';
import './Home.scss';
import yoshiAvatar from '@assets/images/yoshi_avatar.jpg';
import cuteDog from '@assets/images/cute_dog.jpg';
import React, { ReactNode, useContext, useState } from 'react';
import CustomAvatar from '@components/CustomAvatar';
import AuthContext from '../../AuthContext';

type RowData = {
	text: string | ReactNode;
	image: undefined | string;
};

const messageListFromDanny = [
	{
		text: (
			<p
				style={{
					wordWrap: 'break-word',
					width: '100vw',
					marginBottom: 0,
					marginTop: 'auto',
				}}
			>
				Hi, Eliza, Gavin 與 Michael
			</p>
		),
		image: undefined,
	},
	{
		text: (
			<p
				style={{
					wordWrap: 'break-word',
					width: '100%',
					marginBottom: 0,
					marginTop: 'auto',
				}}
			>
				時間過得很快，很高興能成為 AIP
				的一員！雖然我能待在這裡的時間不到半年，但十分感謝你們願意收留我，給了我機會向你們學習、成長、茁壯！
			</p>
		),
		image: undefined,
	},
	{
		text: (
			<p
				style={{
					wordWrap: 'break-word',
					width: '100%',
					marginBottom: 0,
					marginTop: 'auto',
				}}
			>
				能認識你們、跟你們一起合作是很開心的事情！完全不後悔來這裡 🥳
			</p>
		),
		image: undefined,
	},
	{
		text: (
			<p
				style={{
					wordWrap: 'break-word',
					width: '100%',
				}}
			>
				在訊息的尾聲，我想用可愛狗勾以及我個人的聯絡方式收尾：
			</p>
		),
		image: cuteDog,
	},
	{
		text: (
			<div style={{ width: '100vw', display: 'block' }}>
				<a
					href="https://github.com/TillMac"
					style={{ width: '100%', marginBottom: 0, marginTop: 'auto' }}
				>
					👨🏻‍💻 My Github
				</a>
			</div>
		),
		image: undefined,
	},
	{
		text: (
			<div style={{ width: '100vw', display: 'block' }}>
				<a
					href="https://www.instagram.com/sunyu_bro/"
					style={{ width: '100%', marginBottom: 0, marginTop: 'auto' }}
				>
					🤳 My Instagram
				</a>
			</div>
		),
		image: undefined,
	},
	{
		text: (
			<p
				style={{
					wordWrap: 'break-word',
					width: '100vw',
					marginBottom: 0,
					marginTop: 'auto',
				}}
			>
				保持聯絡啦！我先去被徵招了 🪖
			</p>
		),
		image: undefined,
	},
];

const Home = () => {
	const [isChatRoomOpen, setIsChatRoomOpen] = useState(false);
	const [unreadCount, setUnreadCount] = useState(8);
	const authContext = useContext(AuthContext);

	const openChatRoomHandler = () => {
		setIsChatRoomOpen(!isChatRoomOpen);
		setUnreadCount(0);
	};

	return (
		<div className="wrapper">
			<Result
				status="success"
				title="Successfully Logged In!"
				subTitle="Now this showcase is over, please check the messages or return to the login page."
				extra={[
					<Button type="primary" key="console" onClick={authContext.onLogout}>
						LogOut
					</Button>,
				]}
			/>
			<FloatButton
				style={{ width: '50px', height: '50px' }}
				badge={{ count: unreadCount }}
				tooltip={<div>Messeages sent from Danny（孫宇）.</div>}
				icon={
					<Avatar
						src={yoshiAvatar}
						alt="yoshi avatar"
						style={{ margin: 'auto auto auto -6.5px' }}
					/>
				}
				onClick={openChatRoomHandler}
			/>
			<Drawer
				title={
					<div className="chatroom__title">
						<CustomAvatar
							image={yoshiAvatar}
							style={{ width: '50px', height: '50px' }}
						/>
						<div
							style={{
								display: 'flex',
								width: '80%',
								flexWrap: 'wrap',
								marginTop: 'auto',
								marginBottom: 'auto',
							}}
						>
							<h3 style={{ display: 'block', margin: 0, width: '100%' }}>
								Danny
							</h3>
							<p
								style={{
									color: '#C0C0C0',
									fontSize: '12px',
									width: '100%',
									margin: 0,
								}}
							>
								最後上線時間：2023/5/26 19:30:00
							</p>
						</div>
					</div>
				}
				placement="right"
				open={isChatRoomOpen}
				onClose={() => setIsChatRoomOpen(false)}
			>
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: '16px 0px',
						width: '100%',
					}}
				>
					{messageListFromDanny.map((rowData: RowData, idx: number) => {
						if (rowData.image !== undefined) {
							return (
								<div
									style={{
										display: 'flex',
										gap: '4px 0',
										alignItems: 'end',
									}}
									key={idx}
								>
									<CustomAvatar
										image={yoshiAvatar}
										style={{
											width: '35px',
											height: '35px',
											marginTop: 'auto',
											marginBottom: 0,
											paddingRight: '8px',
										}}
									/>
									<div
										style={{
											width: '80%',
											display: 'block',
											padding: '2px',
										}}
									>
										{rowData.text}
										<img
											src={rowData.image}
											alt="an image sent from Danny"
											style={{ width: '200px' }}
										/>
									</div>
								</div>
							);
						} else {
							return (
								<div
									style={{
										display: 'flex',
										gap: '4px 0px',
										alignItems: 'end',
									}}
									key={idx}
								>
									<CustomAvatar
										image={yoshiAvatar}
										style={{
											width: '35px',
											height: '35px',
											marginTop: 'auto',
											marginBottom: 0,
											paddingRight: '8px',
										}}
									/>
									<div
										style={{
											width: '80%',
											display: 'block',
											padding: '2px',
										}}
									>
										{rowData.text}
									</div>
								</div>
							);
						}
					})}
				</div>
			</Drawer>
		</div>
	);
};

export default Home;
